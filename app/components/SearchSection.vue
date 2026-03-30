<script setup lang="ts">
import { useMutation, useQuery } from "@tanstack/vue-query";
import { axiosInstance } from "~/lib/axios";
import type { ShippingResponse } from "~/lib/definitions";
import { Loader } from "lucide-vue-next";
import { couriers } from "~/lib/courier";
import debounce from "lodash/debounce";
import axios from "axios";
import Button from "~/components/ui/button/Button.vue";
import Input from "~/components/ui/input/Input.vue";
import ComboboxSearch from "./ComboboxSearch.vue";

function useRegionSearch(query: Ref<string>) {
  const debouncedQuery = ref("");
  const debounced = debounce((val: string) => {
    debouncedQuery.value = val;
  }, 500);

  watch(query, (val) => {
    if (val.length >= 3) debounced(val);
  });

  const { data, isFetched } = useQuery({
    queryKey: computed(() => ["regions", debouncedQuery.value]),
    queryFn: () =>
      axiosInstance.get(`/region/search?q=${debouncedQuery.value}`),
    enabled: computed(() => debouncedQuery.value.length >= 3),
  });

  return { data, isFetched };
}

const oriQuery = ref("");
const destQuery = ref("");
const selectedDest = ref<{ id: number; label: string } | null>(null);
const selectedOri = ref<{ id: number; label: string } | null>(null);
const shippingResponse = ref<ShippingResponse | null>(null);
const mergedShippingData = computed(() => {
  if (!shippingResponse.value?.data) return [];
  return shippingResponse.value.data.map((item) => {
    const hasCourierCode = item.name.match(/\(([^)]+)\)/);
    if (hasCourierCode && hasCourierCode[1]) {
      item.name = hasCourierCode[1];
    }
    if (item.name.trim().split(/\s+/).length > 2) {
      item.name = item.code.toUpperCase();
    }
    const courierInfo = couriers.find((c) => c.name === item.code);
    return {
      ...item,
      logo: courierInfo?.logo || "",
    };
  });
});

const weight = ref<number>(0);
const { data: dataOri, isFetched: isFetchedOri } = useRegionSearch(oriQuery);
const { data: dataDest, isFetched: isFetchedDest } = useRegionSearch(destQuery);

const mutation = useMutation({
  mutationFn: async (body: {
    origin: number;
    destination: number;
    weight: number;
  }) => {
    return axios
      .post<ShippingResponse>(
        `${useRuntimeConfig().public.BASE_URL}/api/cost`,
        body,
      )
      .then((res) => res.data);
  },
  onSuccess: (data) => {
    shippingResponse.value = data;
  },

  onError: (error) => {
    console.error("❌ Shipping cost error:", error);
  },
});

const onClick = () => {
  mutation.mutate({
    origin: selectedOri.value!.id,
    destination: selectedDest.value!.id,
    weight: weight.value,
  });
};
</script>

<template>
  <div>
    <section class="container mx-auto px-6 pb-24 lg:pb-32">
      <form
        class="shadow-2xl rounded-xl grid md:grid-cols-6 gap-c-4 p-c-5"
        @submit.prevent="onClick"
      >
        <div class="md:col-span-2">
          <ComboboxSearch
            v-model:query="oriQuery"
            v-model:selected="selectedOri"
            label="Origin"
            :items="dataOri?.data.data"
            :is-fetched="isFetchedOri"
            class="md:col-span-2"
          />
        </div>
        <div class="md:col-span-2">
          <ComboboxSearch
            v-model:query="destQuery"
            v-model:selected="selectedDest"
            label="Destination"
            :items="dataDest?.data.data"
            :is-fetched="isFetchedDest"
            class="md:col-span-2"
          />
        </div>
        <div class="grid md:col-span-2 md:grid-cols-3 gap-c-4">
          <Input v-model="weight" class="md:col-span-2 w-full" />
          <Button
            type="submit"
            :disabled="
              !selectedOri ||
              !selectedDest ||
              weight <= 0 ||
              mutation.isPending.value
            "
          >
            <Loader
              v-if="mutation.isPending.value"
              class="animate-spin size-c-4"
            />
            <span v-else>Submit</span>
          </Button>
        </div>
      </form>
    </section>
    <section class="grid gap-c-4 grid-cols-2">
      <div
        v-for="item in mergedShippingData"
        :key="item.code + item.service"
        class="flex flex-col lg:flex-row items-center gap-c-6 rounded-c-4 overflow-hidden hover:scale-101 shadow-2xl"
      >
        <div
          class="flex justify-center h-c-14 lg:h-full w-full lg:w-fit px-c-4 bg-white dark:bg-slate-400"
        >
          <img
            :src="item.logo"
            :alt="item.name"
            class="w-c-20 object-contain m-c-2 lg:m-0"
          />
        </div>
        <div class="description-container">
          <div>
            <h3>Courier</h3>
            <p>{{ item.name }}</p>
          </div>
          <div>
            <h3>Service</h3>
            <p>{{ item.service }}</p>
          </div>
          <div>
            <h3>Estimation</h3>
            <p>{{ item.etd }}</p>
          </div>
          <div>
            <h3>Price</h3>
            <p class="text-green-500 dark:text-green-400">
              Rp {{ item.cost.toLocaleString("id-ID") }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

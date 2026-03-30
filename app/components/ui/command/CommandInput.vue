<script setup lang="ts">
import type { ListboxFilterProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { MapPinIcon, Search } from "lucide-vue-next";
import { ListboxFilter, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";
import { useCommand } from ".";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  ListboxFilterProps & {
    class?: HTMLAttributes["class"];
    label?: string;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
const isFocused = ref(false);
</script>

<template>
  <div
    data-slot="command-input-wrapper"
    class="flex items-center relative px-c-5 py-c-3 gap-c-4"
  >
    <label
      class="absolute left-c-10 -translate-y-1/2 bg-slate-50 dark:bg-slate-900 px-c-2 text-c-4 font-medium transition-all duration-300 pointer-events-none ease-in-out"
      :class="[
        isFocused || props.modelValue
          ? 'top-0'
          : 'top-1/2 text-muted-foreground',
      ]"
    >
      {{ props.label }}
    </label>
    <MapPinIcon class="size-c-4 stroke-foreground" />
    <ListboxFilter
      data-slot="command-input"
      :class="
        cn(
          'w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 text-c-4 font-medium',
          props.class,
        )
      "
      v-bind="{ ...forwardedProps, ...$attrs }"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

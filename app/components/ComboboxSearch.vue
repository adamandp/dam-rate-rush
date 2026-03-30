<script setup lang="ts">
import { computed } from "vue";
import { Check } from "lucide-vue-next";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PopoverAnchor from "../components/ui/popover/PopoverAnchor.vue";
import { ScrollArea } from "reka-ui/namespaced";
import type { ComboboxValue } from "~/lib/definitions";
import { cn } from "~/lib/utils";

const props = defineProps<{
  items: { value: string | number; label: string }[] | undefined;
  label: string;
  query?: string | undefined;
  isFetched?: boolean;
}>();

const emit = defineEmits(["update:query", "update:selected"]);

const localQuery = computed({
  get: () => props.query,
  set: (val) => emit("update:query", val),
});
const localQueryLength = computed(() => localQuery.value?.length ?? 0);
const isFetched = computed(() => props.isFetched ?? false);
const items = computed(() => {
  if ((localQuery.value?.length ?? 0) < 3) return [];
  return props.items ?? [];
});
</script>

<template>
  <Popover class="bg-red-200">
    <Command class="bg-red-200">
      <PopoverAnchor
        by="label"
        class="border border-[#979797] rounded-lg col-span-3"
      >
        <PopoverTrigger as-child>
          <div class="relative w-full items-center">
            <CommandInput
              v-model="localQuery"
              :display-value="(val: ComboboxValue) => val?.label ?? ''"
              :label="props.label"
            />
          </div>
        </PopoverTrigger>
      </PopoverAnchor>

      <PopoverContent
        class="bg-slate-50 dark:bg-slate-900 w-full p-0"
        align="start"
      >
        <CommandList>
          <div
            v-if="localQueryLength < 3"
            class="py-c-6 text-c-4 font-medium text-center px-c-4"
          >
            At least {{ 3 - localQueryLength }} characters
          </div>
          <CommandEmpty v-else-if="!isFetched">
            Loading regions...
          </CommandEmpty>
          <CommandEmpty v-else-if="isFetched && !props.items?.length">
            Subdistrict not found
          </CommandEmpty>

          <!-- <template v-else> -->
          <ScrollArea class="max-h-c-48 h-fit">
            <CommandGroup v-if="localQueryLength >= 3" class="pr-4">
              <CommandItem
                v-for="item in items"
                :key="item.value"
                :value="item"
                @select="emit('update:selected', item)"
              >
                {{ item.label }}
              </CommandItem>
              <Check :class="cn('ml-auto h-4 w-4')" />
            </CommandGroup>
          </ScrollArea>
          <!-- </template> -->
        </CommandList>
      </PopoverContent>
    </Command>
  </Popover>
</template>

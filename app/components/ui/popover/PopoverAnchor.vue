<script setup lang="ts">
import type { PopoverAnchorProps } from "reka-ui";
import { PopoverAnchor, useForwardProps } from "reka-ui";
import { cn } from "~/lib/utils";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  PopoverAnchorProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <PopoverAnchor
    data-slot="popover-anchor"
    v-bind="props"
    :class="cn('w-full', props.class)"
  >
    <slot />
  </PopoverAnchor>
</template>

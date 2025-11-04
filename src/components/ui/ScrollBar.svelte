<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { ScrollArea } from "bits-ui";
  import { cn } from "@/lib/utils";
  import type { Snippet } from "svelte";

  type Props = {
    class?: ClassValue;
    orientation?: "horizontal" | "vertical";
  };

  const props: Props = $props();
  let { orientation = "vertical" } = props;
</script>

<ScrollArea.Scrollbar
  data-slot="scroll-area-scrollbar"
  orientation={orientation}
  class={cn(
    'flex touch-none p-px transition-colors select-none',
    orientation === 'vertical' &&
      'h-full w-2.5 border-l border-l-transparent',
    orientation === 'horizontal' &&
      'h-2.5 flex-col border-t border-t-transparent',
    props.class
  )}
>
  <ScrollArea.Thumb
    data-slot="scroll-area-thumb"
    class="bg-border relative flex-1 rounded-full"
  />
</ScrollArea.Scrollbar>
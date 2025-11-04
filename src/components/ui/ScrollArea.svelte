<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { ScrollArea } from "bits-ui";
  import { cn } from "@/lib/utils";
  import type { Snippet } from "svelte";
  import ScrollBar from "./ScrollBar.svelte";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
  };

  const props: Props = $props();
  let { ...restProps } = props;
</script>

<ScrollArea.Root
  data-slot="scroll-area"
  class={cn("relative", props.class)}
  {...restProps}
>
  <ScrollArea.Viewport
    data-slot="scroll-area-viewport"
    class="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
  >
    {@render props.children?.()}
  </ScrollArea.Viewport>
  <ScrollBar />
  <ScrollArea.Corner />
</ScrollArea.Root>
<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { ScrollArea } from "bits-ui";
  import { cn } from "@/lib/utils";
  import type { Snippet } from "svelte";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
  };

  const props: Props = $props();
  let { ...restProps } = props;
</script>

<ol
  data-slot="breadcrumb-list"
  class={cn("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", props.class)}
  {...restProps}
>
  {@render props.children?.()}
</ol>
<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "@/lib/utils";
  import type { Snippet } from "svelte";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
  };

  const props: Props = $props();
  let { ...restProps } = props;
</script>

<li
  data-slot="breadcrumb-item"
  class={cn("inline-flex items-center gap-1.5", props.class)}
  {...restProps}
>
  {@render props.children?.()}
</li>
<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "@/lib/utils";
  import type { Snippet } from "svelte";
  import { ChevronRight } from "@lucide/svelte";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
  };

  const props: Props = $props();
  let { ...restProps } = props;
</script>

<span
  data-slot="breadcrumb-page"
  role="link"
  aria-disabled="true"
  aria-current="page"
  class={cn("text-foreground font-normal", props.class)}
  {...restProps}
>
  {@render props.children?.()}
</span>
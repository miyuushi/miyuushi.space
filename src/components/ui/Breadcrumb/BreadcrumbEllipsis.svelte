<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "@/lib/utils";
  import type { Snippet } from "svelte";
  import { ChevronRight, MoreHorizontal } from "@lucide/svelte";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
  };

  const props: Props = $props();
  let { ...restProps } = props;
</script>

<span
  data-slot="breadcrumb-ellipsis"
  role="presentation"
  aria-hidden="true"
  class={cn("flex size-9 items-center justify-center", props.class)}
  {...restProps}
>
  <MoreHorizontal class="size-4" />
  <span class="sr-only">More..</span>
</span>
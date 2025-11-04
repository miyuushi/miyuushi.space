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

<li
  data-slot="breadcrumb-separator"
  role="presentation"
  aria-hidden="true"
  class={cn("[&>svg]:size-3.5", props.class)}
  {...restProps}
>
  {#if props.children}
    {@render props.children?.()}
  {:else}
    <ChevronRight class="size-3.5" />
  {/if}
</li>
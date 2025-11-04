<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { ScrollArea } from "bits-ui";
  import { cn } from "@/lib/utils";
  import type { Snippet } from "svelte";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
    asChild?: boolean;
  };

  const props: Props = $props();
  let { ...restProps } = props;
</script>

{#if props.asChild}
  {@render props.children?.()}
{:else}
  <a
    data-slot="breadcrumb-link"
    class={cn("hover:text-foreground transition-colors", props.class)}
    {...restProps}
  >
  {@render props.children?.()}
</a>
{/if}
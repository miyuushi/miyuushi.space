<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import type { Snippet } from "svelte";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
  };

  const props: Props = $props();
  let { ...restProps } = props;
</script>

<nav
  aria-label="breadcrumb"
  data-slot="breadcrumb"
  {...restProps}
>
  {@render props.children?.()}
</nav>
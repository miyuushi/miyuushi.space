<script lang="ts">
  import { buttonVariants } from "@/lib/components/ui/button";
  import { cn } from "@/lib/utils";
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLAnchorAttributes } from "svelte/elements";

  type Props = HTMLAnchorAttributes & {
    children?: Snippet;
    class?: ClassValue;
    isActive?: boolean;
    isDisabled?: boolean;
    size?: 'icon' | 'sm' | 'lg' | 'default' | undefined;
  }

  const props: Props = $props();
  let { children, class: className, isActive, isDisabled, size = 'icon', ...restProps } = props;
</script>

<a
  aria-current={isActive ? 'page' : undefined}
  data-slot="pagination-link"
  data-active={isActive}
  data-disabled={isDisabled}
  class={cn(
    buttonVariants({
      variant: isActive ? 'outline' : 'ghost',
      size,
    }),
    isDisabled && 'pointer-events-none opacity-50',
    className,
  )}
  {...restProps}
>
  {@render children?.()}
</a>
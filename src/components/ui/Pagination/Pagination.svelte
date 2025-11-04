<script lang="ts">
  import { cn } from "@/lib/utils";
  import PaginationLink from "./PaginationLink.svelte";
	import type { ClassValue } from 'svelte/elements';
  import { ChevronLeft, ChevronRight, MoreHorizontal } from '@lucide/svelte';

  type Props = {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    class: ClassValue;
  }

  const props: Props = $props();
  let { totalPages, baseUrl } = props;

  // Helper: generate an array of page numbers
  let pages = $derived(Array.from({ length: totalPages }, (_, i) => i + 1));

  function getPageUrl(page: number) {
    if (page === 1) return baseUrl;
    return `${baseUrl}${page}`;
  }
</script>

<nav 
  role="navigation" 
  aria-label="pagination"
  data-slot="pagination"
  class={cn("mx-auto flex w-full justify-center", props.class)}
>
  <!-- Previous button -->
  <!-- <button
    class="px-3 py-1 rounded-md border border-gray-300 text-sm disabled:opacity-50 hover:bg-gray-100"
    onclick={() => goToPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Prev
  </button> -->
  <ul 
    data-slot="pagination-content"
    class={cn('flex flex-row flex-wrap items-center gap-1', props.class)}
  >
    <li data-slot="pagination-item">
      <PaginationLink
        aria-label="Go to previous page"
        size="default"
        class={cn(
          'gap-1 px-2.5 sm:pl-2.5',
          props.currentPage > 1 ? '' : 'pointer-events-none opacity-50'
        )}
        href={props.currentPage > 1 ? getPageUrl(props.currentPage - 1) : undefined}
      >
        <ChevronLeft />
        <span class="hidden sm:block">Previous</span>
      </PaginationLink>
    </li>

    <!-- Page numbers -->
    {#each pages as page}
      <li data-slot="pagination-item">
        <PaginationLink
          aria-current={page === props.currentPage ? 'page' : undefined}
          data-slot="pagination-link"
          data-active={page === props.currentPage}
          href={getPageUrl(page)}
          class={cn(
            'size-9 flex items-center justify-center',
            page === props.currentPage 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90' 
              : 'hover:bg-accent hover:text-accent-foreground'
          )}
        >
          {page}
          </PaginationLink>
      </li>
    {/each}
  <!-- {#each pages as page}
    <button
      class="px-3 py-1 rounded-md border border-gray-300 text-sm hover:bg-gray-100
             {page === currentPage ? 'bg-green-500 text-white border-green-500' : ''}"
      onclick={() => goToPage(page)}
    >
      {page}
    </button>
  {/each} -->

    <!-- Next button -->
    {#if props.totalPages > 5}
      <li data-slot="pagination-item">
        <span
          aria-hidden="false"
          data-slot="pagination-ellipsis"
          class={cn('flex size-9 items-center justify-center')}
        >
          <MoreHorizontal class="size-4" />
          <span class="sr-only">More pages</span>
        </span>
      </li>
    {/if}

    <li data-slot="pagination-item">
      <PaginationLink
        aria-label="Go to next page"
        size="default"
        class={cn(
          'gap-1 px-2.5 sm:pr-2.5',
          props.currentPage < props.totalPages ? '' : 'pointer-events-none opacity-50'
        )}
        href={props.currentPage < props.totalPages ? getPageUrl(props.currentPage + 1) : undefined}
      >
        <span class="hidden sm:block">Next</span>
        <ChevronRight />
      </PaginationLink>
    </li>
  </ul>
</nav>

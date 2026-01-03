import { tv } from 'tailwind-variants'

/**
 * Command palette theme
 *
 * Polaris-inspired:
 * - Neutral surface container with subtle border + shadow
 * - Search "anchor" section that looks like a field in a card header
 * - List of items with neutral hover / highlighted states
 */
export default tv({
  slots: {
    // Outer container
    root: [
      'flex h-full w-full flex-col overflow-hidden',
      'rounded-lg',
      'bg-card text-card-foreground',
      'border border-border/60 shadow-sm',
      'dark:border-border/30'
    ].join(' '),

    // Search bar container
    anchor: [
      'flex items-center gap-2',
      'px-3 py-2',
      'border-b border-border/60',
      'bg-card'
    ].join(' '),

    searchIcon: 'mr-1.5 size-4 shrink-0 text-muted-foreground',

    input: [
      'flex h-8 w-full rounded-md bg-transparent',
      'text-sm outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50'
    ].join(' '),

    // Scrollable content area
    content: 'max-h-[400px] overflow-hidden',

    viewport: [
      'overflow-y-auto overflow-x-hidden',
      'py-1'
    ].join(' '),

    // Empty state
    empty: 'py-6 text-center text-sm text-muted-foreground',

    // Group label/header
    groupLabel: 'px-3 py-1.5 text-xs font-semibold text-muted-foreground',

    // Individual command item
    item: [
      'relative flex cursor-pointer select-none items-center gap-2',
      'rounded-md',
      'px-3 py-2 text-sm',
      'outline-none transition-colors',
      // Neutral default state
      'text-foreground',
      // Hover state
      'hover:bg-accent hover:text-accent-foreground',
      // Disabled state
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      // Highlighted state (keyboard navigation)
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground'
    ].join(' '),

    itemIcon: 'size-4 shrink-0 text-muted-foreground',

    itemLabel: 'flex-1',

    itemShortcut: 'ml-auto text-xs tracking-widest text-muted-foreground',

    separator: 'mx-3 my-1 h-px bg-border/70'
  },

  defaultVariants: {}
})
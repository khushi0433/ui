// @/themes/card.ts
import { tv } from 'tailwind-variants'

/**
 * Card Component Theme
 * Polaris-inspired neutral surface:
 * - Soft border, subtle shadow
 * - Rounded corners
 * - Distinct header / content / footer padding
 */
export default tv({
  slots: {
    root: [
      'relative rounded-lg overflow-hidden',
      'bg-card text-card-foreground',
      // Subtle border and shadow
      'border border-border/60',
      'shadow-sm',
      'dark:border-border/30'
    ].join(' '),

    header: 'flex flex-col space-y-1.5 px-4 py-3',
    title: 'text-base font-semibold leading-tight',
    description: 'text-sm text-muted-foreground',

    content: 'px-4 pb-4 pt-0',
    footer: 'flex items-center px-4 pb-3 pt-0'
  },

  variants: {
    variant: {
      default: {
        root: ''
      },
      outline: {
        // Stronger border, no shadow
        root: 'border border-border shadow-none'
      },
      elevated: {
        // Slightly stronger shadow for emphasis
        root:
          'border border-border/40 shadow-[0_2px_6px_rgba(0,0,0,0.08)] ' +
          'dark:shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
      },
      ghost: {
        // No background or border; acts as a layout wrapper
        root: 'bg-transparent border-none shadow-none'
      }
    },

    size: {
      sm: {
        header: 'px-3 py-2 space-y-1',
        title: 'text-sm font-semibold',
        description: 'text-xs',
        content: 'px-3 pb-3 pt-0',
        footer: 'px-3 pb-2 pt-0'
      },
      md: {
        header: 'px-4 py-3 space-y-1.5',
        title: 'text-base font-semibold',
        description: 'text-sm',
        content: 'px-4 pb-4 pt-0',
        footer: 'px-4 pb-3 pt-0'
      },
      lg: {
        header: 'px-6 py-4 space-y-2',
        title: 'text-lg font-semibold',
        description: 'text-sm',
        content: 'px-6 pb-6 pt-0',
        footer: 'px-6 pb-4 pt-0'
      }
    },

    hover: {
      true: {
        root:
          'transition-shadow transition-colors duration-150 ' +
          'hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] ' +
          'hover:border-border ' +
          'dark:hover:shadow-[0_4px_16px_rgba(0,0,0,0.6)]'
      }
    }
  },

  compoundVariants: [
    // Elevated + hover gets a bit more lift
    {
      variant: 'elevated',
      hover: true,
      class: {
        root:
          'hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] ' +
          'dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)]'
      }
    },
    // Outline / Ghost + hover get a subtle surface tint
    {
      variant: 'outline',
      hover: true,
      class: {
        root: 'hover:bg-accent/5 dark:hover:bg-accent/10'
      }
    },
    {
      variant: 'ghost',
      hover: true,
      class: {
        root: 'hover:bg-accent/5 dark:hover:bg-accent/10'
      }
    }
  ],

  defaultVariants: {
    variant: 'default',
    size: 'md',
    hover: false
  }
})

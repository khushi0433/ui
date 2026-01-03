// @/themes/badge.ts
import { tv } from 'tailwind-variants'

/**
 * Badge theme
 *
 * Design notes:
 * - `variant` is the level of emphasis:
 *   - soft   → subtle background, colored text (like an outline/subtle badge)
 *   - strong → solid background, white/foreground text
 * - `color` is the semantic tone:
 *   - primary, success, warning, error, info, neutral
 *
 * Colors are expressed with your design tokens:
 * - primary / success / error / etc. (and their /10,/20 tints)
 * - muted / card / foreground / etc.
 */
export default tv({
  slots: {
    root:
      'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 ' +
      'text-xs font-medium transition-colors',
    icon: 'flex items-center justify-center shrink-0',
    text: 'inline-block'
  },

  variants: {
    size: {
      sm: {
        root: 'px-2 py-1 text-[11px]',
        icon: 'w-3 h-3'
      },
      md: {
        root: 'px-2.5 py-1.5 text-xs',
        icon: 'w-3.5 h-3.5'
      },
      lg: {
        root: 'px-3 py-2 text-sm',
        icon: 'w-4 h-4'
      }
    },

    /**
     * Emphasis:
     * - soft   → low-contrast, subtle background
     * - strong → solid fill, high contrast
     */
    variant: {
      soft: {},
      strong: {}
    },

    /**
     * Semantic tone of the badge.
     * These are mapped to your system tokens, not raw Tailwind colors.
     */
    color: {
      primary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
      neutral: {}
    }
  },

  compoundVariants: [
    // --- SOFT / SUBTLE BADGES ------------------------------------------
    // These are low-contrast “pills” with tinted background and colored text.

    {
      variant: 'soft',
      color: 'primary',
      class: {
        root:
          'bg-primary/10 text-primary ' +
          'dark:bg-primary/15 dark:text-primary'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root:
          'bg-success/10 text-success ' +
          'dark:bg-success/15 dark:text-success'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root:
          'bg-warning/10 text-warning ' +
          'dark:bg-warning/15 dark:text-warning'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root:
          'bg-error/10 text-error ' +
          'dark:bg-error/15 dark:text-error'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root:
          'bg-info/10 text-info ' +
          'dark:bg-info/15 dark:text-info'
      }
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root:
          'bg-muted text-muted-foreground ' +
          'dark:bg-muted dark:text-muted-foreground'
      }
    },

    // --- STRONG / FILLED BADGES ----------------------------------------
    // These are high-contrast, filled badges with white or foreground text.

    {
      variant: 'strong',
      color: 'primary',
      class: {
        root:
          'bg-primary text-primary-foreground ' +
          'hover:bg-primary/90 dark:hover:bg-primary/90'
      }
    },
    {
      variant: 'strong',
      color: 'success',
      class: {
        root:
          'bg-success text-success-foreground ' +
          'hover:bg-success/90 dark:hover:bg-success/90'
      }
    },
    {
      variant: 'strong',
      color: 'warning',
      class: {
        root:
          'bg-warning text-warning-foreground ' +
          'hover:bg-warning/90 dark:hover:bg-warning/90'
      }
    },
    {
      variant: 'strong',
      color: 'error',
      class: {
        root:
          'bg-error text-error-foreground ' +
          'hover:bg-error/90 dark:hover:bg-error/90'
      }
    },
    {
      variant: 'strong',
      color: 'info',
      class: {
        root:
          'bg-info text-info-foreground ' +
          'hover:bg-info/90 dark:hover:bg-info/90'
      }
    },
    {
      variant: 'strong',
      color: 'neutral',
      class: {
        root:
          'bg-foreground text-background ' +
          'hover:bg-foreground/90 dark:hover:bg-foreground/90'
      }
    }
  ],

  defaultVariants: {
    size: 'md',
    variant: 'soft',
    color: 'primary'
  }
})
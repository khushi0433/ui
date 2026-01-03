import { tv } from 'tailwind-variants'

/**
 * Chip / Status indicator theme
 *
 * Color model matches Button/ButtonGroup:
 * - primary   → dark neutral fill, white text (strong)
 * - secondary → neutral surface, border, dark text
 * - success/info/warning/error → semantic fills
 * - neutral  → muted neutral
 */
export default tv({
  slots: {
    // Container for positioning (e.g., on avatars/cards)
    root: 'relative inline-flex shrink-0',
    // Actual chip pill/dot
    base:
      'rounded-full flex items-center justify-center font-medium whitespace-nowrap ' +
      // White ring so it stands out over images/colored surfaces
      'ring-1 ring-white dark:ring-background'
  },

  variants: {
    color: {
      // Matches Button primary default (but can be smaller)
      primary: {
        base: 'bg-neutral-900 text-white hover:bg-neutral-800'
      },
      // Matches Button secondary default: neutral surface with border, dark text
      secondary: {
        base:
          'bg-card text-foreground border border-border ' +
          'hover:bg-accent/60'
      },
      // Semantic success
      success: {
        base: 'bg-success text-success-foreground'
      },
      // Semantic info
      info: {
        base: 'bg-info text-info-foreground'
      },
      // Semantic warning
      warning: {
        base: 'bg-warning text-warning-foreground'
      },
      // Semantic error/critical
      error: {
        base: 'bg-error text-error-foreground'
      },
      // Neutral / default
      neutral: {
        base: 'bg-muted text-foreground'
      }
    },

    size: {
      // Tiny dots (no text)
      '3xs': {
        base: 'size-1.5'
      },
      '2xs': {
        base: 'size-2'
      },
      // Very small label/number
      xs: {
        base: 'size-2.5 text-[9px]'
      },
      sm: {
        base: 'size-3 text-[10px]'
      },
      // Good default for a single digit (1–9)
      md: {
        base: 'size-4 text-[11px]'
      },
      lg: {
        base: 'size-5 text-xs'
      },
      xl: {
        base: 'size-6 text-sm'
      },
      '2xl': {
        base: 'size-7 text-sm'
      },
      '3xl': {
        base: 'size-8 text-base'
      }
    },

    // Corner position when attached to another component
    position: {
      'top-right': {},
      'top-left': {},
      'bottom-right': {},
      'bottom-left': {}
    },

    // Whether the chip is inset into the corner or offset outside
    inset: {
      true: {},
      false: {}
    },

    // Standalone vs attached
    standalone: {
      true: {
        root: 'relative'
      },
      false: {
        base: 'absolute'
      }
    }
  },

  compoundVariants: [
    // Top-right positioning
    {
      position: 'top-right',
      inset: false,
      standalone: false,
      class: {
        base: 'top-0 right-0 translate-x-1/2 -translate-y-1/2'
      }
    },
    {
      position: 'top-right',
      inset: true,
      standalone: false,
      class: {
        base: 'top-0 right-0'
      }
    },

    // Top-left positioning
    {
      position: 'top-left',
      inset: false,
      standalone: false,
      class: {
        base: 'top-0 left-0 -translate-x-1/2 -translate-y-1/2'
      }
    },
    {
      position: 'top-left',
      inset: true,
      standalone: false,
      class: {
        base: 'top-0 left-0'
      }
    },

    // Bottom-right positioning
    {
      position: 'bottom-right',
      inset: false,
      standalone: false,
      class: {
        base: 'bottom-0 right-0 translate-x-1/2 translate-y-1/2'
      }
    },
    {
      position: 'bottom-right',
      inset: true,
      standalone: false,
      class: {
        base: 'bottom-0 right-0'
      }
    },

    // Bottom-left positioning
    {
      position: 'bottom-left',
      inset: false,
      standalone: false,
      class: {
        base: 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
      }
    },
    {
      position: 'bottom-left',
      inset: true,
      standalone: false,
      class: {
        base: 'bottom-0 left-0'
      }
    }
  ],

  defaultVariants: {
    color: 'primary',
    size: 'md',
    position: 'top-right',
    inset: false,
    standalone: false
  }
})
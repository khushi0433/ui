// @/themes/link.ts
import { tv } from 'tailwind-variants'

const linkTheme = tv({
  base: [
    'inline-flex items-center gap-1',
    'text-sm font-normal',
    'underline-offset-4',
    'cursor-pointer',
    'transition-colors',
    'focus-visible:outline-none focus-visible:underline',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ].join(' '),

  variants: {
    variant: {
      // Standard inline link
      default: [
        'text-primary',
        'hover:text-primary/80',
        'hover:underline',
        'dark:hover:text-primary/90'
      ].join(' '),

      // Subdued / secondary text link
      muted: [
        'text-muted-foreground',
        'hover:text-foreground',
        'hover:underline',
        'dark:hover:text-foreground'
      ].join(' '),

      // Stronger / emphasis link (e.g., main CTA text link)
      primary: [
        'text-neutral-700',
        'font-medium',
        'hover:text-neutral-600',
        'hover:underline',
        'dark:text-foreground',
        'dark:hover:text-foreground/90'
      ].join(' ')
    },

    underline: {
      true: 'underline',
      false: ''
    },

    active: {
      true: 'font-semibold',
      false: ''
    }
  },

  defaultVariants: {
    variant: 'default',
    underline: false,
    active: false
  }
})

export default linkTheme
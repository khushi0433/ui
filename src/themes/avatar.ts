// @/themes/avatar.ts
import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: [
      'inline-flex items-center justify-center',
      'shrink-0 select-none overflow-hidden',
      'rounded-full bg-muted',
      // default size (will be overridden by size variants)
      'size-8'
    ].join(' '),

    image: [
      'h-full w-full',
      'rounded-[inherit]',
      'object-cover',
      'scale-110'
    ].join(' '),

    fallback: [
      'font-medium leading-none',
      'text-muted-foreground truncate',
      'text-sm'
    ].join(' '),

    icon: [
      'text-muted-foreground',
      'shrink-0',
      'size-4'
    ].join(' ')
  },

  variants: {
    size: {
      sm: {
        root: 'size-8', // ~32px
        fallback: 'text-xs',
        icon: 'size-3.5'
      },
      md: {
        root: 'size-9', // ~36px
        fallback: 'text-sm',
        icon: 'size-4'
      },
      lg: {
        root: 'size-11', // ~44px
        fallback: 'text-base',
        icon: 'size-5'
      }
    },

    // Reserved for when you add an actual chip component;
    // currently you drive chip positioning inline in Avatar.vue.
    chipPosition: {
      'top-right': {},
      'top-left': {},
      'bottom-right': {},
      'bottom-left': {}
    }
  },

  defaultVariants: {
    size: 'md'
  }
})
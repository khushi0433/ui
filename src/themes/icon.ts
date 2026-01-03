import { tv } from 'tailwind-variants'

export default tv({
  base: 'shrink-0 inline-block align-middle text-muted-foreground',
  variants: {
    size: {
      '3xs': 'size-2.5',
      '2xs': 'size-3',
      xs: 'size-3.5',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-7',
      '2xl': 'size-8',
      '3xl': 'size-10'
    }
  },

  defaultVariants: {
    size: 'md'
  }
})
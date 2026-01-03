import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    base: [
      'inline-flex',
      '[&>*]:min-h-[30px]',
      '[&>*]:min-w-[30px]',
      '[&>*]:inline-flex',
      '[&>*]:items-center',
      '[&>*]:justify-center',
      '[&>*]:m-0',
      'rounded-lg',
      'overflow-hidden'
    ].join(' ')
  },
  variants: {
    spacing: {
      none: {
        base: 'gap-0'
      },
      sm: {
        base: 'gap-1'
      },
      md: {
        base: 'gap-2'
      },
      lg: {
        base: 'gap-3'
      }
    },
    align: {
      start: {
        base: 'items-start'
      },
      center: {
        base: 'items-center'
      },
      end: {
        base: 'items-end'
      },
      stretch: {
        base: 'items-stretch'
      }
    },
    vertical: {
      true: {
        base: 'flex-col [&>*]:w-full [&>*]:min-w-full'
      }
    }
  },
  defaultVariants: {
    spacing: 'md',
    align: 'center',
    vertical: false
  }
})
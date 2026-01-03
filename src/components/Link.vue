<script lang="ts">
  export interface LinkBaseProps {
    as?: string
    type?: string
    disabled?: boolean
    onClick?:
      | ((e: MouseEvent) => void | Promise<void>)
      | Array<(e: MouseEvent) => void | Promise<void>>
    href?: string
    navigate?: (e: MouseEvent) => void
    target?: string
    rel?: string
    active?: boolean
    isExternal?: boolean
  }
  
  /**
   * Extended props to support visual theming
   * and Storybook `external` flag.
   */
  export interface LinkProps extends LinkBaseProps {
    variant?: 'default' | 'muted' | 'primary'
    underline?: boolean
    /**
     * Convenience alias for isExternal used in stories.
     * If both are provided, external wins.
     */
    external?: boolean
  }
  </script>
  
  <script setup lang="ts">
  import { Primitive } from 'reka-ui'
  import { computed } from 'vue'
  import linkTheme from '@/themes/Link'
  
  const props = withDefaults(defineProps<LinkProps>(), {
    as: 'button',
    type: 'button',
    variant: 'default',
    underline: false,
    disabled: false
  })
  
  // external vs isExternal
  const isExternalComputed = computed(
    () => props.external ?? props.isExternal ?? false
  )
  
  // Compute classes from the theme (no .root, just linkTheme(...))
  const linkClasses = computed(() =>
    linkTheme({
      variant: props.variant,
      underline: props.underline,
      active: !!props.active
    })
  )
  
  function onClickWrapper(e: MouseEvent) {
    if (props.disabled) {
      e.stopPropagation()
      e.preventDefault()
      return
    }
  
    if (props.onClick) {
      for (const onClick of Array.isArray(props.onClick)
        ? props.onClick
        : [props.onClick]) {
        onClick(e)
      }
    }
  
    if (props.href && props.navigate && !isExternalComputed.value) {
      props.navigate(e)
    }
  }
  </script>
  
  <template>
    <Primitive
      v-bind="
        href
          ? {
              as: 'a',
              href: disabled ? undefined : href,
              'aria-disabled': disabled ? 'true' : undefined,
              role: disabled ? 'link' : undefined,
              tabindex: disabled ? -1 : undefined
            }
          : as === 'button'
          ? {
              as,
              type,
              disabled
            }
          : {
              as
            }
      "
      :rel="rel ?? (isExternalComputed ? 'noopener noreferrer' : undefined)"
      :target="target ?? (isExternalComputed ? '_blank' : undefined)"
      :class="linkClasses"
      @click="onClickWrapper"
    >
      <slot />
    </Primitive>
  </template>
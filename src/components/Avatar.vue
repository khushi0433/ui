<!-- @/components/Avatar.vue -->
<script setup lang="ts">
  import { computed, toRefs, ref } from 'vue'
  import { Primitive } from 'reka-ui'
  import avatarTheme from '@/themes/avatar'
  import Icon from '@/components/Icon.vue'
  
  export interface AvatarProps {
    as?: string | object
    src?: string
    alt?: string
    /** Optional icon name for <Icon />, used when no image. */
    icon?: string
    /**
     * Explicit fallback text (e.g. initials "JD").
     * If omitted, we derive initials from `alt` when possible.
     */
    text?: string
    size?: 'sm' | 'md' | 'lg'
    chip?:
      | boolean
      | { position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' }
    loading?: 'eager' | 'lazy'
    class?:
      | string
      | Record<string, boolean>
      | (string | Record<string, boolean>)[]
    ui?: {
      root?: string
      image?: string
      icon?: string
      fallback?: string
    }
  }
  
  defineOptions({ inheritAttrs: false })
  
  const props = withDefaults(defineProps<AvatarProps>(), {
    as: 'span',
    size: 'md'
  })
  
  const slots = defineSlots()
  
  const { size, chip, text, alt, src } = toRefs(props)
  
  const ui = computed(() =>
    avatarTheme({
      size: size.value,
      chipPosition:
        typeof chip.value === 'object' ? chip.value.position : 'top-right'
    })
  )
  
  const fallbackText = computed(() => {
    if (text.value) return text.value
    if (alt.value) {
      return alt.value
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join('')
    }
    return '?'
  })
  
  const imageError = ref(false)
  const showImage = computed(() => !!src.value && !imageError.value)
  
  const handleImageError = () => {
    imageError.value = true
  }
  
  /**
   * When we *don't* render an <img>, we want the avatar to still act as an
   * accessible image for screen readers using role + aria-label.
   */
  const shouldExposeAsImage = computed(
    () => !showImage.value && (!!alt.value || !!text.value)
  )
  
  const ariaLabel = computed(() => {
    if (alt.value) return alt.value
    if (text.value) return text.value
    return undefined
  })
  </script>
  
  <template>
    <Primitive
      :as="props.as"
      data-slot="root"
      :class="ui.root({ class: [props.ui?.root, props.class] })"
      v-bind="$attrs"
      :role="shouldExposeAsImage ? 'img' : undefined"
      :aria-label="shouldExposeAsImage ? ariaLabel : undefined"
    >
      <slot>
        <!-- Image -->
        <img
          v-if="showImage"
          :src="props.src"
          :alt="props.alt"
          :loading="props.loading"
          data-slot="image"
          :class="ui.image({ class: props.ui?.image })"
          @error="handleImageError"
        />
  
        <!-- Icon fallback -->
        <Icon
          v-else-if="props.icon"
          :name="props.icon"
          data-slot="icon"
          :class="ui.icon({ class: props.ui?.icon })"
          aria-hidden="true"
        />
  
        <!-- Text fallback (initials or custom text) -->
        <span
          v-else
          data-slot="fallback"
          :class="ui.fallback({ class: props.ui?.fallback })"
        >
          {{ fallbackText }}
        </span>
      </slot>
  
      <!-- Chip placeholder / positioning container -->
      <div
        v-if="chip"
        class="pointer-events-none absolute"
        :class="{
          'top-0 right-0':
            typeof chip !== 'object' ||
            !chip.position ||
            chip.position === 'top-right',
          'top-0 left-0':
            typeof chip === 'object' && chip.position === 'top-left',
          'bottom-0 right-0':
            typeof chip === 'object' && chip.position === 'bottom-right',
          'bottom-0 left-0':
            typeof chip === 'object' && chip.position === 'bottom-left'
        }"
      >
        <!-- Chip placeholder (e.g. status dot or small badge) -->
      </div>
    </Primitive>
  </template>
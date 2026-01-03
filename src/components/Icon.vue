<!-- @/components/Icon.vue -->
<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'
  import { computed, toRefs, useAttrs } from 'vue'
  import iconTheme from '@/themes/icon'
  
  export interface IconProps {
    name: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    customClass?: string | string[] | Record<string, boolean>
  }
  
  defineOptions({ inheritAttrs: false })
  
  const props = withDefaults(defineProps<IconProps>(), {
    size: 'md'
  })
  
  const attrs = useAttrs()
  const { size, customClass } = toRefs(props)
  
  const iconClasses = computed(() => {
    const themeClasses = iconTheme({ size: size.value })
  
    return [
      themeClasses,
      customClass.value,
      (attrs as any).class
    ]
      .filter(Boolean)
  })
  
  // Simple emoji detection
  const isEmoji = computed(() => {
    return /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u.test(props.name)
  })
  </script>
  
  <template>
    <!-- Emoji rendering -->
    <span
      v-if="isEmoji"
      v-bind="attrs"
      :class="iconClasses"
      role="img"
      aria-label="icon"
    >
      {{ props.name }}
    </span>
  
    <!-- Iconify icon rendering -->
    <IconifyIcon
      v-else
      :icon="props.name"
      v-bind="attrs"
      :class="iconClasses"
    />
  </template>
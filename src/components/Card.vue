<!-- @/components/Card.vue -->
<script setup lang="ts">
  import { computed, toRefs } from 'vue'
  import theme from '@/themes/card'
  
  export interface CardProps {
    title?: string
    description?: string
    variant?: 'default' | 'outline' | 'elevated' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    hover?: boolean
    clickable?: boolean
    ui?: {
      root?: string
      header?: string
      title?: string
      description?: string
      content?: string
      footer?: string
      [key: string]: any
    }
  }
  
  const props = withDefaults(defineProps<CardProps>(), {
    variant: 'default',
    size: 'md',
    hover: false,
    clickable: false
  })
  
  const emit = defineEmits<{
    click: [event: MouseEvent]
  }>()
  
  const { variant, size, hover } = toRefs(props)
  
  const cardTheme = computed(() =>
    theme({
      variant: variant.value,
      size: size.value,
      hover: hover.value
    })
  )
  
  const handleClick = (event: MouseEvent) => {
    if (props.clickable) {
      emit('click', event)
    }
  }
  </script>
  
  <template>
    <div
      :class="[
        cardTheme.root({ class: ui?.root }),
        clickable ? 'cursor-pointer' : ''
      ]"
      @click="handleClick"
    >
      <!-- Header -->
      <div
        v-if="title || description || $slots.header"
        :class="cardTheme.header({ class: ui?.header })"
      >
        <slot name="header">
          <div v-if="title" :class="cardTheme.title({ class: ui?.title })">
            {{ title }}
          </div>
          <div
            v-if="description"
            :class="cardTheme.description({ class: ui?.description })"
          >
            {{ description }}
          </div>
        </slot>
      </div>
  
      <!-- Content -->
      <div :class="cardTheme.content({ class: ui?.content })">
        <slot />
      </div>
  
      <!-- Footer -->
      <div v-if="$slots.footer" :class="cardTheme.footer({ class: ui?.footer })">
        <slot name="footer" />
      </div>
    </div>
  </template>
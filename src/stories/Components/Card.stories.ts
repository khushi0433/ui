// @/stories/Card.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import Card from '../../components/Card.vue'
import Button from '../../components/Button.vue'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'elevated', 'ghost'],
      description: 'Visual variant style'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card size (controls padding and typography)'
    },
    hover: {
      control: 'boolean',
      description: 'Enable hover elevation / surface effects'
    },
    clickable: {
      control: 'boolean',
      description: 'Clickable with cursor pointer and click handler'
    },
    title: {
      control: 'text',
      description: 'Title text rendered in the header'
    },
    description: {
      control: 'text',
      description: 'Description text rendered below the title in the header'
    }
  },
  args: {
    variant: 'default',
    size: 'md',
    hover: false,
    clickable: false,
    title: undefined,
    description: undefined
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card title',
    description: 'A short description providing context.'
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p class="text-gray-700">
          This is the main content of the card. You can put any content here.
        </p>
      </Card>
    `
  })
}

export const WithFooter: Story = {
  args: {
    hover: true
  },
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-base font-semibold text-gray-900">Project update</h3>
              <p class="text-sm text-gray-600">Last updated 2 hours ago</p>
            </div>
            <span class="text-2xl">📊</span>
          </div>
        </template>

        <p class="text-gray-700">
          The project is progressing well. All milestones are on track and the team
          is working efficiently.
        </p>

        <template #footer>
          <div class="flex gap-2 pt-3 border-t border-gray-200">
            <Button size="sm" variant="secondary">Dismiss</Button>
            <Button size="sm" variant="primary">View details</Button>
          </div>
        </template>
      </Card>
    `
  })
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    title: 'Outlined card',
    description: 'This card has a more pronounced border.'
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p class="text-gray-700">Content goes here.</p>
      </Card>
    `
  })
}

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    hover: true,
    title: 'Elevated card',
    description: 'This card has a subtle shadow for emphasis.'
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p class="text-gray-700">Content goes here.</p>
      </Card>
    `
  })
}

export const Hoverable: Story = {
  args: {
    hover: true,
    title: 'Hoverable card',
    description: 'Hover over this card to see the effect.'
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p class="text-gray-700">Hover over me!</p>
      </Card>
    `
  })
}

export const Clickable: Story = {
  args: {
    clickable: true,
    hover: true,
    title: 'Clickable card',
    description: 'Click this card to trigger an action.'
  },
  render: (args) => ({
    components: { Card },
    setup() {
      const handleClick = () => {
        alert('Card clicked!')
      }
      return { args, handleClick }
    },
    template: `
      <Card v-bind="args" @click="handleClick">
        <p class="text-gray-700">Click me!</p>
      </Card>
    `
  })
}

export const ImageCard: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <Card
        :hover="true"
        :clickable="false"
        :title="undefined"
        :description="undefined"
        :ui="{ content: 'p-0' }"
        size="lg"
      >
        <!-- Full-bleed image: no padding, clipped by card's rounded corners -->
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926"
          alt="Gradient"
          class="block w-full h-48 object-cover"
        />

        <!-- Text/content area with its own padding -->
        <div class="p-6">
          <h3 class="text-base font-semibold text-gray-900">Beautiful Landscape</h3>
          <p class="mt-2 text-sm text-gray-600">
            Discover amazing places around the world and create unforgettable memories.
          </p>
          <div class="mt-4">
            <Button size="sm" variant="primary" class="w-full">
              Explore
            </Button>
          </div>
        </div>
      </Card>
    `
  })
}

export const StatCards: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-3 gap-4">
        <Card variant="elevated" hover size="sm">
          <div class="text-center">
            <div class="text-3xl mb-2">👥</div>
            <div class="text-2xl font-bold text-gray-900">1,234</div>
            <div class="text-sm text-gray-600">Total users</div>
          </div>
        </Card>

        <Card variant="elevated" hover size="sm">
          <div class="text-center">
            <div class="text-3xl mb-2">📊</div>
            <div class="text-2xl font-bold text-gray-900">$45.2K</div>
            <div class="text-sm text-gray-600">Revenue</div>
          </div>
        </Card>

        <Card variant="elevated" hover size="sm">
          <div class="text-center">
            <div class="text-3xl mb-2">⭐</div>
            <div class="text-2xl font-bold text-gray-900">4.9</div>
            <div class="text-sm text-gray-600">Rating</div>
          </div>
        </Card>
      </div>
    `
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="space-y-4">
        <Card variant="default" title="Default card">
          <p class="text-gray-700">Standard card with border and subtle shadow.</p>
        </Card>

        <Card variant="outline" title="Outline card">
          <p class="text-gray-700">Card with a stronger border and no shadow.</p>
        </Card>

        <Card variant="elevated" hover title="Elevated card">
          <p class="text-gray-700">Card with stronger shadow for emphasis.</p>
        </Card>

        <Card variant="ghost" title="Ghost card">
          <p class="text-gray-700">
            No background or border; useful when the surrounding layout already provides surface.
          </p>
        </Card>
      </div>
    `
  })
}
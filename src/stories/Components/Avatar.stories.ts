// stories/Avatar.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '../../components/Avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Avatar size'
    },
    src: {
      control: 'text',
      description: 'Image URL. When set, Avatar will try to load this first.'
    },
    alt: {
      control: 'text',
      description:
        'Accessible description. Also used to derive initials when `text` is not provided.'
    },
    icon: {
      control: 'text',
      description:
        'Icon name passed to <Icon>. Used when no image is available.'
    },
    text: {
      control: 'text',
      description:
        'Explicit fallback text (e.g. initials). Overrides initials derived from `alt`.'
    },
    chip: {
      control: 'object',
      description:
        'Optional chip indicator. Boolean or { position: "top-right" | "top-left" | "bottom-right" | "bottom-left" }'
    }
  },
  args: {
    size: 'md',
    alt: 'John Doe'
  }
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    alt: 'John Doe'
  }
}

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'John Doe'
  }
}

export const WithText: Story = {
  args: {
    text: 'JV',
    alt: 'John Doe'
  }
}

export const WithIcon: Story = {
  args: {
    // Example Polaris-like icon name, adjust to your Icon library
    icon: 'solar:user-circle-linear',
    alt: 'User'
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar size="sm" text="SM" alt="Small avatar" />
        <Avatar size="md" text="MD" alt="Medium avatar" />
        <Avatar size="lg" text="LG" alt="Large avatar" />
      </div>
    `
  })
}

export const WithChip: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'Jane Doe',
    chip: {
      position: 'bottom-right'
    }
  }
}

export const Fallbacks: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <!-- Derived initials from alt -->
        <Avatar src="invalid-url" alt="John Doe" />
        <Avatar src="invalid-url" alt="Jane Smith" />
        <Avatar src="invalid-url" alt="Bob Johnson" />

        <!-- Icon fallback -->
        <Avatar src="invalid-url" icon="solar:user-circle-linear" alt="User avatar" />

        <!-- Explicit text fallback -->
        <Avatar src="invalid-url" text="JV" alt="Initials JV" />
      </div>
    `
  })
}
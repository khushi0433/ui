<p align="center">
   <img src="https://cartino.craftus.co/logo.svg" alt="Logo" width="400"/>
</p>
<p align="center">
  <b>Most advanced commerce module for Laravel</b>
</p>


# @cartino/ui

Una libreria di componenti UI costruita con Vue 3, Tailwind CSS e Reka UI.

## Installazione

```bash
pnpm add @cartino/ui
```

### Usage

```vue
<script setup lang="ts">
import { Accordion, Alert, Button, Dialog } from '@cartino/ui'
import '@cartino/ui/style.css'
</script>

<template>
  <Button variant="primary">Click me</Button>

  <Alert
    color="success"
    title="Success!"
    description="Your changes have been saved."
    closable
  />

  <Dialog v-model:open="isOpen">
    <template #trigger>
      <Button>Open Dialog</Button>
    </template>
    <template #title>Dialog Title</template>
    Content here
  </Dialog>

  <Accordion :items="[
    { label: 'Question 1', content: 'Answer 1' },
    { label: 'Question 2', content: 'Answer 2' }
  ]" />
</template>
```



## Tech

- **Vue 3**
- **Vite** 
- **TypeScript** 
- **Tailwind CSS v4** - Utility-first CSS framework (CSS-based config)
- **Reka UI** 
- **Storybook**

## License

MIT

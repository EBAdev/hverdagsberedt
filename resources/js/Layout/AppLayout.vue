<template>
  <Head title="Hverdagsberedt" />

  <TheHeader />

  <slot />

  <TheFooter />
</template>

<script>
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

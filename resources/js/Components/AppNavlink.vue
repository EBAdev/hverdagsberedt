<template>
  <Link
    class="px-3 py-2 rounded-md text-base font-semibold tracking-tight"
    :class="{
      ' underline text-black': active,
      'text-gray-600 hover:text-black ': !active,
    }"
  >
    <slot />
  </Link>
</template>
<script>
// 'text-red-300 hover:bg-red-700 hover:text-white': !active,
export default {
  props: {
    active: Boolean,
  },
}
</script>

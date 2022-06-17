<template>
  <div class="h-12 w-full bg-gray-800">
    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <div class="hidden sm:block sm:ml-6">
        <div class="flex h-12 items-center">
          <router-link to="/" href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md font-semibold">Home</router-link>
          <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-semibold">Grafy</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>

<script>

import PostS from "@/components/Posts.vue";

export default {
  name: "home-page",
  components: {PostS},
}
</script>

<template>
  <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    <div class="w-full lg:w-1/2">
      <div class="lg:max-w-lg">
        <h1 class="text-2xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
          Exploring Technology The Power of Creativity and Innovation
        </h1>

        <div class="mt-8 space-y-5">
          <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

            <span class="mx-2">Technology knowledge</span>
          </p>

          <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

            <span class="mx-2">Sharing experiences</span>
          </p>

          <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

            <span class="mx-2">My memory</span>
          </p>
        </div>
      </div>

      <div
          class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
        <form class="flex flex-col lg:flex-row">
          <input type="email" placeholder="Enter your email"
                 class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"/>

          <button type="button"
                  class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
            Join us
          </button>
        </form>
      </div>
    </div>

    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
      <img class="object-cover w-full h-full mx-auto lg:max-w-2xl rounded-2xl"
           src="https://png.pngtree.com/thumb_back/fw800/background/20240119/pngtree-a-laptop-and-cup-of-coffee-on-desk-with-window-in-image_15612175.jpg"
           alt="glasses photo">
    </div>
  </div>

  <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    <post-s></post-s>
  </div>
</template>

<style scoped>

</style>

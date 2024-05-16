<template>
  <header class='flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center gap-5 w-full'>
      <a href="javascript:void(0)"><img src="https://cdn-icons-png.freepik.com/256/924/924514.png?semt=ais_hybrid"
                                        alt="logo" class='w-12'/>
      </a>
      <a href="javascript:void(0)"><h1 class="text-2xl font-bold text-black font-mono">Minh Thong Itmix</h1></a>

      <div id="collapseMenu"
           class='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
            <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
          </svg>
        </button>

        <ul
            class='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36'/>
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'>
            <a href='javascript:void(0)'
               class='lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                                                          class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Team</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                                                          class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                                                          class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                                                          class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Work</a>
          </li>
        </ul>
      </div>

      <div class='flex items-center ml-auto space-x-6'>
        <button
            class="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
            @click="toggleTheme">
          <div
              ref="switchToggle"
              class="w-12 h-12 relative rounded-full transition duration-500 transform -translate-x-2 p-1 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="iconClass">
              <template v-if="isDarkmode">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </template>
              <template v-else>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </template>
            </svg>
          </div>
        </button>
      </div>

      <button id="toggleOpen" class='lg:hidden ml-auto'>
        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navigation-bar',
  props: {
    msg: String
  },
  data(){
    return {
      isDarkmode: false,
      darkIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>`,
      lightIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>`
    };
  },
  mounted() {
    this.isDarkmode = JSON.parse(localStorage.getItem('isDarkmode')) || false;
    this.switchTheme();
  },
  methods: {
    toggleTheme() {
      this.isDarkmode = !this.isDarkmode;
      localStorage.setItem('isDarkmode', JSON.stringify(this.isDarkmode));
      this.switchTheme();
    },
    switchTheme() {
      const switchToggle = this.$refs.switchToggle;
      if (this.isDarkmode) {
        switchToggle.classList.remove('bg-yellow-500', '-translate-x-2');
        switchToggle.classList.add('bg-gray-700', 'translate-x-full');
        setTimeout(() => {
          switchToggle.innerHTML = this.darkIcon;
        }, 250);
      } else {
        switchToggle.classList.add('bg-yellow-500', '-translate-x-2');
        switchToggle.classList.remove('bg-gray-700', 'translate-x-full');
        setTimeout(() => {
          switchToggle.innerHTML = this.lightIcon;
        }, 250);
      }
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>

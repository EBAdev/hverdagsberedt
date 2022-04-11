<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-white text-brs-dark sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-brs-dark hover:text-white hover:bg-brs-light focus:outline-none"
            @click="showMenu = !showMenu"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              v-if="!showMenu"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              v-if="showMenu"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center text-[#002854] text-xl font-semibold tracking-wider justify-center sm:items-stretch sm:justify-start"
        >
          <a
            :href="route('home')"
            class="flex-shrink-0 flex items-center space-x-2 text-brs-dark"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap"
              >Hverdagsberedt</span
            >
            <i class="fa-solid fa-fire-extinguisher text-xl"></i>
          </a>

          <div
            class="hidden text-base font-normal tracking-wider sm:block sm:ml-6"
          >
            <div class="flex space-x-4">
              <NavLink
                :href="route('home')"
                :active="$page.component.startsWith('HomePage')"
                >Hjem
              </NavLink>
              <NavLink
                :href="route('about')"
                :active="$page.component.startsWith('AboutPage')"
                >Om projektet
              </NavLink>
              <NavLink
                :href="route('contact')"
                :active="$page.component.startsWith('ContactPage')"
                >Kontakt
              </NavLink>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        ></div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="showMenu" id="mobile-menu" class="sm:hidden transition-all">
      <div
        class="px-2 pt-2 pb-3 space-y-1 flex flex-col justify-center text-center text-white"
      >
        <NavLink
          :href="route('home')"
          :active="$page.component.startsWith('HomePage')"
          >Hjem
        </NavLink>
        <NavLink
          :href="route('about')"
          :active="$page.component.startsWith('AboutPage')"
          >Om projektet
        </NavLink>
        <NavLink
          :href="route('contact')"
          :active="$page.component.startsWith('ContactPage')"
          >Kontakt
        </NavLink>
      </div>
    </div>
  </nav>
</template>
<script>
import NavLink from '../Components/AppNavlink'
export default {
  components: {
    NavLink,
  },
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

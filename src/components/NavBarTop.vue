<template>
  <nav
    class="bg-white md:bg-transparent h-[100px] fixed z-20 md:h-auto md:right-0 w-full"
  >
    <div
      class="w-full max-w-screen-xl flex flex-wrap items-center justify-between md:justify-end"
    >
      <!-- Flex container for "Call Us" and "Navigation Links" -->
      <div
        class="flex w-full justify-between items-center md:space-x-8 md:w-auto md:pl-2 md:border md:border-transparent md:border-solid md:border-1 md:backdrop-filter md:backdrop-blur-sm md:rounded"
      >
        <p class="text-brown">
          <a href="tel:+16475001747" class="flex items-center">
            <svg
              class="svg-inline--fa fa-phone text-3xl"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                class=""
                fill="currentColor"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              ></path>
            </svg>
            <span class="pl-2 hidden md:block">+1 (647) 500-1747</span>
          </a>
        </p>
        <!-- Logo -->
        <router-link to="/" class="flex items-center block md:hidden">
          <img
            src="../assets/logo-text.png"
            class="max-w-[150px]"
            alt="North Simcoe Logo"
          />
        </router-link>
        <!-- Mobile Menu Button -->
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center w-20 h-20 justify-center text-sm text-brown rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="#2F2F2F"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <!-- <div class="md:hidden w-full" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/our-company"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Our Company
            </router-link>
          </li>
          <li>
            <router-link
              to="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link
              to="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Forms
            </router-link>
          </li>
          <li>
            <router-link
              to="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Testimonials
            </router-link>
          </li>
          <li>
            <router-link
              to="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Blog
            </router-link>
          </li>
          <li>
            <router-link
              to="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderGlobal",
};
</script>

<style>
/* Custom styling for the HeaderGlobal component here */
</style>

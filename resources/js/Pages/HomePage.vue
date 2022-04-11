<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="h-screen relative">
    <div class="absolute inset-0 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:h-screen lg:max-w-2xl lg:w-full"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          </div>

          <main
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-brs-dark sm:text-5xl md:text-6xl"
              >
                <span class="block xl:inline">Er du</span>
                <span class="block text-brs-orange xl:inline">
                  Hverdagsberedt?</span
                >
              </h1>
              <p
                class="mt-3 text-base text-brs-light sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brs-light hover:bg-brs-dark md:py-4 md:text-lg md:px-10"
                  >
                    Læs mere
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/assets/images/hverdagsberedt.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="py-20 m-4 rounded-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-brs-orange font-semibold tracking-wide uppercase"
        >
          Bliv Hverdagsberedt
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brs-dark sm:text-4xl"
        >
          5 ting du bør havde styr på i hjemmet
        </p>
        <p class="mt-4 max-w-2xl text-xl text-brs-light lg:mx-auto">
          Vi ved godt det kan være svært at holde sig hverdagsberedt, derfor har
          vi samlet 5 ting som du bør havde styr på i dit hjem.
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brs-orange text-white"
              >
                <!-- Heroicon name: outline/globe-alt -->
                <i class="fa-solid fa-house-fire text-2xl"></i>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Opsæt brandalarmer
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-brs-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brs-orange text-white"
              >
                <i class="fa-solid fa-bucket text-2xl"></i>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Hav forholdsregler ved åben ild
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-brs-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brs-orange text-white"
              >
                <i class="fa-solid fa-tree text-2xl"></i>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Vær ekstra opmærksom ved jul & nytår
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-brs-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brs-orange text-white"
              >
                <i class="fa-solid fa-fire-extinguisher text-2xl"></i>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Hav brandslukning tilgængeligt i bilen
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-brs-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

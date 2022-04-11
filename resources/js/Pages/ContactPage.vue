<template>
  <div class="w-full py-14">
    <div class="mx-auto max-w-md">
      <h2 class="text-2xl text-brs-dark font-bold text-center">
        Kontakt os hvis du har et spørgsmål
      </h2>
      <div class="mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Navn</span>
            <input
              type="text"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email adresse</span>
            <input
              type="email"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder="mail@eksempel.dk"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Besked</span>
            <textarea
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              rows="4"
            ></textarea>
          </label>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="px-4 py-2 my-4 ring-2 font-medium ring-brs-dark text-brs-dark hover:text-white hover:bg-brs-dark rounded-md"
        >
          Send besked
        </button>
      </div>
    </div>
  </div>
</template>

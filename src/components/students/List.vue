<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <container>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex-1 min-w-0">
            <h2
              class="
                text-2xl
                font-bold
                leading-7
                text-gray-900
                sm:text-3xl sm:truncate
              "
            >
              Estudiantes
            </h2>
            <div
              class="
                mt-1
                flex flex-col
                sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6
              "
            >
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <!-- Heroicon name: solid/briefcase -->
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                  />
                </svg>
                Full-time
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <!-- Heroicon name: solid/location-marker -->
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Remote
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <!-- Heroicon name: solid/currency-dollar -->
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  />
                </svg>
                $120k &ndash; $140k
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <!-- Heroicon name: solid/calendar -->
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Closing on January 9, 2020
              </div>
            </div>
          </div>
          <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <div class="grid grid-cols-2 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <div class="flex rounded-md shadow-sm">
                  <span
                    class="
                      inline-flex
                      items-center
                      px-3
                      rounded-l-md
                      border border-r-0 border-gray-300
                      bg-gray-50
                      text-gray-500 text-sm
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    class="
                      focus:ring-blue-500 focus:border-blue-500
                      flex-1
                      block
                      w-full
                      rounded-none rounded-r-md
                      sm:text-sm
                      border-gray-300
                    "
                    placeholder="Buscar Estudiante"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="sm:ml-3">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-sm
                  font-medium
                  text-white
                  bg-blue-600
                  hover:bg-blue-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-500
                "
              >
                <!-- Heroicon name: solid/circle-plus  -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="-ml-1 mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clip-rule="evenodd"
                  />
                </svg>
                Nuevo Estudiante
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                "
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        Estudiante
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        EPS
                      </th>

                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        CURSO
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        CARNET
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        Estado
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="user in Users" :key="user.id">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-20">
                            <img
                              class="w-16 rounded"
                              :src="
                                user.photoUrl
                                  ? user.photoUrl
                                  : 'https://cdn-icons-png.flaticon.com/512/126/126486.png'
                              "
                              alt="Imagen Perfil"
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900 mb-2">
                              <span
                                class="
                                  px-2
                                  inline-flex
                                  text-xs
                                  leading-5
                                  font-semibold
                                  rounded-full
                                  bg-blue-100
                                  text-blue-800
                                "
                              >
                                <b class="mr-2">{{ user.type }}</b>
                                {{ user.ID }}
                              </span>
                            </div>
                            <div class="text-sm text-gray-500">
                              <b
                                >{{ user.name }} <br />
                                {{ user.lastName }}</b
                              >
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-red-100
                              text-red-800
                              mb-2
                            "
                          >
                            <b class="mr-2">RH</b>{{ user.rh }}
                          </span>
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ user.eps }}
                        </div>
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        <div class="text-xs text-gray-500">
                          {{ user.job }}
                        </div>
                      </td>

                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        <img
                          class="w-10 rounded"
                          src="https://cdn-icons-png.flaticon.com/512/1250/1250645.png"
                          alt="Imagen Perfil"
                        />
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="
                            px-2
                            inline-flex
                            text-xs
                            leading-5
                            font-semibold
                            rounded-full
                            bg-green-100
                            text-green-800
                          "
                        >
                          Active
                        </span>
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-right text-sm
                          font-medium
                        "
                      >
                        <a href="#" class="text-blue-600 hover:text-blue-900"
                          >Edit</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="
                py-2
                align-middle
                inline-block
                min-w-full
                sm:px-6
                lg:px-8
                mt-2
              "
            >
              <div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                "
              >
                <div
                  class="
                    bg-white
                    px-4
                    py-3
                    flex
                    items-center
                    justify-between
                    border-t border-gray-200
                    sm:px-6
                  "
                >
                  <div class="flex-1 flex justify-between sm:hidden">
                    <a
                      href="#"
                      class="
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-2
                        border border-gray-300
                        text-sm
                        font-medium
                        rounded-md
                        text-gray-700
                        bg-white
                        hover:bg-gray-50
                      "
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      class="
                        ml-3
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-2
                        border border-gray-300
                        text-sm
                        font-medium
                        rounded-md
                        text-gray-700
                        bg-white
                        hover:bg-gray-50
                      "
                    >
                      Next
                    </a>
                  </div>
                  <div
                    class="
                      hidden
                      sm:flex-1 sm:flex sm:items-center sm:justify-between
                    "
                  >
                    <div>
                      <p class="text-sm text-gray-700">
                        Pagina
                        <span class="font-medium">{{
                          pagesToken.length + 1
                        }}</span>
                        de
                        <span class="font-medium">{{
                          (pagesToken.length + 1) * 5
                        }}</span>
                        results
                      </p>
                    </div>
                    <div>
                      <nav
                        class="
                          relative
                          z-0
                          inline-flex
                          rounded-md
                          shadow-sm
                          -space-x-px
                        "
                        aria-label="Pagination"
                      >
                        <a
                          v-if="pagesToken.length"
                          @click="previousPage"
                          href="javascript:;"
                          class="
                            relative
                            inline-flex
                            items-center
                            px-2
                            py-2
                            rounded-l-md
                            border border-gray-300
                            bg-white
                            text-sm
                            font-medium
                            text-gray-500
                            hover:bg-gray-50
                          "
                        >
                          <!-- Heroicon name: solid/chevron-left -->
                          <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="text-xs">Anterior</span>
                        </a>
                        <!-- Current: "z-10 bg-blue-50 border-blue-500 text-blue-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                        <a
                          @click="nextPage"
                          href="javascript:;"
                          class="
                            relative
                            inline-flex
                            items-center
                            px-2
                            py-2
                            rounded-r-md
                            border border-gray-300
                            bg-white
                            text-sm
                            font-medium
                            text-gray-500
                            hover:bg-blue-50
                          "
                        >
                          <span class="text-xs">Siguiente</span>
                          <!-- Heroicon name: solid/chevron-right -->
                          <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </container>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ListStudents',
  setup() {
    const store = useStore();
    const Users = computed(() => store.state.users.Users);

    const params = {
      limit: 15,
      filters: {
        fieldFilter: {
          field: {
            fieldPath: 'type',
          },
          op: 'EQUAL',
          value: {
            stringValue: 'NUIP',
          },
        },
      },
      orderBy: {
        field: { fieldPath: 'createTime' },
        direction: 'DESCENDING',
      },
    };

    const pagesToken = [];

    onMounted(async () => {
      await store.dispatch('users/listUsers', params);
    });

    const nextPage = async () => {
      params.pageToken = computed(() => store.state.users.nextPageToken).value;
      pagesToken.push(params.pageToken);

      await store.dispatch('users/listUsers', params);
    };

    const previousPage = async () => {
      pagesToken.pop();
      params.pageToken = pagesToken[pagesToken.length - 1];

      await store.dispatch('users/listUsers', params);
    };

    return { Users, nextPage, previousPage, pagesToken };
  },
};
</script>

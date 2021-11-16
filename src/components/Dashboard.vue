<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div
          class="
            flex flex-col
            lg:flex-row
            w-full
            lg:space-x-2
            space-y-2
            lg:space-y-0
            mb-2
            lg:mb-4
          "
        >
          <div class="w-full lg:w-1/3">
            <div
              class="
                widget
                w-full
                p-4
                rounded-lg
                shadow-sm
                bg-white
                border border-gray-100
                dark:bg-gray-900 dark:border-gray-800
              "
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs uppercase font-light text-gray-500">
                    Total de Usuarios
                  </div>
                  <div class="text-xl font-bold">588</div>
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="stroke-current text-gray-500"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3">
            <div
              class="
                widget
                w-full
                p-4
                rounded-lg
                shadow-sm
                bg-white
                border border-gray-100
                dark:bg-gray-900 dark:border-gray-800
              "
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs uppercase font-light text-gray-500">
                    Temperatura Promedio
                  </div>
                  <div class="text-xl font-bold">46.5 C°</div>
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="stroke-current text-gray-500"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3">
            <div
              class="
                widget
                w-full
                p-4
                rounded-lg
                shadow-sm
                bg-white
                border border-gray-100
                dark:bg-gray-900 dark:border-gray-800
              "
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs uppercase font-light text-gray-500">
                    Total de Registros
                  </div>
                  <div class="text-xl font-bold">435</div>
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="stroke-current text-gray-500"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  ></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!--Registros-->
        <div
          class="
            widget
            w-full
            p-4
            mb-4
            rounded-lg
            shadow-sm
            bg-white
            border border-gray-100
            dark:bg-gray-900 dark:border-gray-800
          "
        >
          <div class="flex flex-row items-center justify-between mb-6">
            <div class="flex flex-col">
              <div class="text-sm font-light text-gray-500">
                Registros (Recientes)
              </div>
              <div class="text-sm font-bold">
                <span
                  >Listado de los registros recientes de entrada y salida</span
                >
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2">
              <div
                class="md:mx-20 mx-12 py-10 my-2 border rounded-lg shadow-sm"
              >
                <div class="grid justify-items-center">
                  <div class="flex-shrink-0 w-50">
                    <img
                      src="https://d-board.mobifica.com/images/faces/w9.png"
                      alt="media"
                      class="
                        h-50
                        w-full
                        shadow-lg
                        rounded-full
                        ring-8 ring-green-500
                        mb-5
                      "
                    />
                  </div>
                  <div class="grid justify-items-center w-full mb-5">
                    <div class="font-bold">Voluptas repellendus est</div>
                    <div class="text-gray-500">Voluptatem velit et</div>
                    <div class="flex flex-row items-center justify-start">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="stroke-current text-gray-300"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"
                        ></path>
                      </svg>
                      <div class="text-gray-300 ml-2">a few seconds ago</div>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="
                        uppercase
                        font-bold
                        inline-flex
                        text-center
                        py-1
                        px-4
                        leading-none
                        bg-green-500
                        text-white text-lg
                        inline-flex
                        items-center
                        justify-center
                        rounded
                      "
                      >Ingreso</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="w-full mb-4">
                <div
                  class="
                    flex
                    items-center
                    justify-start
                    p-2
                    space-x-4
                    my-2
                    border
                    rounded-lg
                    shadow-sm
                  "
                >
                  <div class="flex-shrink-0 w-12">
                    <img
                      src="https://d-board.mobifica.com/images/faces/w8.png"
                      alt="media"
                      class="
                        h-12
                        w-full
                        shadow-lg
                        rounded-full
                        ring-4 ring-green-500
                      "
                    />
                  </div>
                  <div class="flex flex-col w-full">
                    <div class="text-sm font-bold">
                      Voluptas repellendus est
                    </div>
                    <div class="text-sm text-gray-500">Voluptatem velit et</div>
                    <div class="flex flex-row items-center justify-start">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="stroke-current text-gray-300"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"
                        ></path>
                      </svg>
                      <div class="text-gray-300 ml-2">a few seconds ago</div>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="
                        uppercase
                        font-bold
                        inline-flex
                        text-center
                        p-1
                        leading-none
                        bg-green-500
                        text-white text-xs
                        inline-flex
                        items-center
                        justify-center
                        rounded
                      "
                      >Ingreso</span
                    >
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-center
                    justify-start
                    p-2
                    space-x-4
                    my-2
                    border
                    rounded-lg
                    shadow-sm
                  "
                >
                  <div class="flex-shrink-0 w-12">
                    <img
                      src="https://d-board.mobifica.com/images/faces/w10.png"
                      alt="media"
                      class="
                        h-12
                        w-full
                        shadow-lg
                        rounded-full
                        ring-4 ring-red-500
                      "
                    />
                  </div>
                  <div class="flex flex-col w-full">
                    <div class="text-sm font-bold">
                      Voluptatem commodi temporibus
                    </div>
                    <div class="text-sm text-gray-500">Officia deleniti</div>
                    <div class="flex flex-row items-center justify-start">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="stroke-current text-gray-300"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"
                        ></path>
                      </svg>
                      <div class="text-gray-300 ml-2">a day ago</div>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="
                        uppercase
                        font-bold
                        inline-flex
                        text-center
                        p-1
                        leading-none
                        bg-red-500
                        text-white text-xs
                        inline-flex
                        items-center
                        justify-center
                        rounded
                      "
                      >Salida</span
                    >
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-center
                    justify-start
                    p-2
                    space-x-4
                    my-2
                    border
                    rounded-lg
                    shadow-sm
                  "
                >
                  <div class="flex-shrink-0 w-12">
                    <img
                      src="https://d-board.mobifica.com/images/faces/w4.png"
                      alt="media"
                      class="
                        h-12
                        w-full
                        shadow-lg
                        rounded-full
                        ring-4 ring-red-500
                      "
                    />
                  </div>
                  <div class="flex flex-col w-full">
                    <div class="text-sm font-bold">
                      In aut similique repellat in.
                    </div>
                    <div class="text-sm text-gray-500">Consequatur libero</div>
                    <div class="flex flex-row items-center justify-start">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="stroke-current text-gray-300"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"
                        ></path>
                      </svg>
                      <div class="text-gray-300 ml-2">2 days ago</div>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="
                        uppercase
                        font-bold
                        inline-flex
                        text-center
                        p-1
                        leading-none
                        bg-red-500
                        text-white text-xs
                        inline-flex
                        items-center
                        justify-center
                        rounded
                      "
                      >Salida</span
                    >
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-center
                    justify-start
                    p-2
                    space-x-4
                    my-2
                    border
                    rounded-lg
                    shadow-sm
                  "
                >
                  <div class="flex-shrink-0 w-12">
                    <img
                      src="https://d-board.mobifica.com/images/faces/w7.png"
                      alt="media"
                      class="
                        h-12
                        w-full
                        shadow-lg
                        rounded-full
                        ring-4 ring-green-500
                      "
                    />
                  </div>
                  <div class="flex flex-col w-full">
                    <div class="text-sm font-bold">
                      Commodi eumodit velit natus.
                    </div>
                    <div class="text-sm text-gray-500">perferendis.</div>
                    <div class="flex flex-row items-center justify-start">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="stroke-current text-gray-300"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"
                        ></path>
                      </svg>
                      <div class="text-gray-300 ml-2">3 days ago</div>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="
                        uppercase
                        font-bold
                        inline-flex
                        text-center
                        p-1
                        leading-none
                        bg-green-500
                        text-white text-xs
                        inline-flex
                        items-center
                        justify-center
                        rounded
                      "
                      >Ingreso</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
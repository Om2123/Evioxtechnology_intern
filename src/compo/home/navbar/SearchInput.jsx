import React from 'react'

export default function SearchInput() {
  return (
    <form>
        <div class="flex">

          <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-stone-400  rounded-l-lg hover:bg-gray-200    dark:bg-white dark:bg-stone-200 dark:focus:ring-gray-700 dark:text-grey-500 " type="button">All 
           <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>


         


          <div class="relative md:w-[35rem]">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-black bg-white     rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />

            <button type="submit" class="absolute top-0 right-0 py-2.5 px-4  text-md font-large h-full text-grey-500 bg-amber-400	 rounded-r-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400	 dark:hover:bg-amber-500	 dark:focus:ring-blue-800">
              <svg class="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
  )
}

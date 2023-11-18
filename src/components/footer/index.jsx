import React from "react";

export default function Footer(){

    return (


<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center">
                  <img src="https://raw.githubusercontent.com/cmaker-dev/cmaker/6c64104821ca7f9e17583ecf30c7d2ac225a9b58/source/images/cmakerlogo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CMaker</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
  
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/cmaker-dev/cmaker" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/8PB8SWN8XH" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>

          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
 
    </div>
</footer>

    )
}
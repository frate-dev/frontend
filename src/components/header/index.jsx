import * as React from "react";

export default function Header() {
  return (
    <div class="flex justify-between pl-4 bg-[#f7f7f7]">
      <div class="flex">
        <img
          class="w-24"
          src="https://raw.githubusercontent.com/cmaker-dev/cmaker/6c64104821ca7f9e17583ecf30c7d2ac225a9b58/source/images/cmakerlogo.svg"
          alt="cmakeLogo"
        />
        <h1 class="h-8 w-20 mt-8 ml-4 text-4xl text-gray">Index</h1>
      </div>
      <button class="mr-20 bg-blue h-10 w-40 mt-8 rounded-md">
        {" "}
        Submit Package
      </button>
    </div>
  );
}

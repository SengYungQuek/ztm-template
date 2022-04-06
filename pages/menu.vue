<template>
  <div>
    <div class="bg-[url('/menu-page.jpg')]">
      <div id="menu" class="grid grid-cols-2 py-5">
        <div id="menu-left">
          <img src="ideaLogo.png" class="w-[150px]" alt="" />
        </div>
        <div id="menu-right">
          <ul class="grid grid-cols-4 text-lg font-oswald text-white uppercase pt-5">
            <li>About Us</li>
            <li>Knowledge Hub</li>
            <li>Coming Events</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <h1 class="text-white font-oswald uppercase text-6xl text-center pt-24 pb-28">
        Our Menu
      </h1>
    </div>

    <div id="items" class="grid grid-cols-3">
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  </div>
</template>

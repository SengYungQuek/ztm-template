<template>
  <div
    id="header"
    class="bg-[url('/FunLearnBackGround.jpg')] pt-2 bg-cover bg-center Static"
  >
    <div id="menu" class="grid grid-cols-2">
      <div id="menu-left">
        <NuxtLink to="/">
          <img
            src="ideaLogo.png"
            class="float-left w-[100px] y-100[px] center animate-bounce"
            alt=""
          />
        </NuxtLink>
      </div>
      <div id="menu-right">
        <ul
          class="grid grid-cols-4 text-lg font-oswald text-black uppercase mt-99 pb-5 pt-5"
        >
          <NuxtLink to="/about">About Us</NuxtLink>
          <NuxtLink to="/menu">Coming Events</NuxtLink>
          <li>Tutorial (Pending...)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

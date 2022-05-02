<template>
  <div id="Main">
    <div
      id="header"
      class="bg-[url('/FunLearnBackGround.jpg')] pt-2 bg-cover bg-center Static"
    >
      <div id="menu" class="grid grid-cols-2">
        <div id="menu-left">
          <img
            src="ideaLogo.png"
            class="float-left w-[100px] y-100[px] center animate-bounce"
            alt=""
          />
        </div>
        <div id="menu-right">
          <ul
            class="grid grid-cols-4 text-lg font-oswald text-black uppercase mt-99 pb-5 pt-5"
          >
            <NuxtLink to="/about">About Us</NuxtLink>
            <li>Coming Events</li>
            <li>Tutorial</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="AboutUs" class="grid grid-cols-2 pt-2">
      <div id="headerImage" class="pt-2">
        <img src="AboutUsLogo.png" alt="" />
      </div>
      <div class="text-left border-border-gray p-5">
        <h1 class="text-2xl">About Us</h1>
        <p>This philosophy behind our site lies in our name, <b>FunLearn</b>.</p>
        <p>Our site allows anyone to share their ideas and learn new things.</p>
        <p>
          All the learning materials here are free. They are prepared by a group of
          experienced working class / scholar who never ask for any money in return.
        </p>
        <p>
          if this site is able to help your goals, appreciate if you can share with your
          knowledge with us. Let's help everyone achieve their own goals.
        </p>
      </div>
    </div>
  </div>
</template>

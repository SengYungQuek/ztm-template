<template>
  <div id="Main">
    <div id="header" class="bg-[url('/hero-bg.jpg')] pt-2">
      <div id="menu" class="grid grid-cols-2">
        <div id="menu-left">
          <img src="ideaLogo.png" class="float-left w-[100px] y-100[px]" alt="" />
        </div>
        <div id="menu-right">
          <ul
            class="grid grid-cols-4 text-lg font-oswald text-white uppercase mt-99 pb-5 pt-5"
          >
            <li>About Us</li>
            <li>Knowledge Hub</li>
            <li>Coming Events</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="header" class="bg-[url('/BlueImage.jpg')] pt-5">
      <div class="m-auto">
        <center>
          <img
            src="ideaLogo.png"
            alt="Study Photo"
            class="center animate-bounce h-[400px] w-[400px]"
          />
        </center>
        <h1 style="text-align: center" class="text-5xl font-roboto pt-5">
          Welcome to <b>FUN LEARN</b>
        </h1>
        <p style="text-align: center" class="mt-5">
          <i
            >A Place to turn your <b>ideas</b> into
            <a href="https://fishcate.com/jobs/salary/"
              ><b class="underline text-[25px] text-blue-600">REALITY</b></a
            >...</i
          >
        </p>
        <p style="text-align: center" class="mt-5">
          <i>You can make this world a better place by...</i
          ><a href="https://fishcate.com/"
            ><b class="underline text-[25px] text-blue-600">SHARING</b>
          </a>
          <br />
          <br />
        </p>
      </div>
    </div>
    <div
      id="section-1"
      class="text-center bg-[url('/ShareImage.jpg')] pb-20 bg-cover bg-center Static"
    >
      <br />
      <br />
      <br />
      <br />
      <button
        class="font-oswald uppercase bg-blue-400 text-white text-center rounded text-3xl bottom-6 border-8 border-blue-400 animate-pulse"
      >
        Any Ideas to Share?
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
    <div id="section-3" class="text-center">
      <h2 class="text-6xl font-oswald text-black-500 uppercase font-medium pt-20">
        Resources Available
      </h2>
      <p class="text-gray-500 font-light text-xl my-10">
        Contributed by working group/hobbyist. All the sharing here is <b>FREE</b>.
      </p>
      <div id="courses" class="grid grid-cols-2 px-40 gap-5">
        <div id="left-item-column">
          <Item
            image="Excel.png"
            title="Microsoft Excel"
            description="Power query and other common used formulas."
            viewtag="Clik to View"
          />
          <Item
            image="PowerBI.png"
            title="Power BI"
            description="BI tool for effective data visualization."
            viewtag="Clik to View"
          />
        </div>
        <div id="right-item-column">
          <Item
            image="OnlineMarketing.jfif"
            title="Online Marketing"
            description="SEO, SEM, Social Media Marketing, Email Marketing etc"
            viewtag="Clik to View"
          />
          <Item
            image="Cooking.jfif"
            title="Cooking"
            description="Cooking basis you should know."
            viewtag="Clik to View"
          />
        </div>
      </div>
      <div
        class="grid grid-cols-12 font-oswald uppercase text-4xl text-black-800 px-40 gap-5"
      >
        <div
          class="col-span-5 bg-[url('/study.jpg')] bg-cover bg-center pl-20 pb-10 pt-10"
        >
          <h4>Claim <br />Your Free</h4>
          <h4>Courses</h4>
          <button class="uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5">
            Claim now
          </button>
        </div>
        <div
          class="col-span-7 bg-[url('/ExcelExpert.jfif')] bg-cover bg-center text-right pr-10 pt-10"
        >
          <h4>Excel</h4>
          <h4>Advanced <br />Tutorial</h4>
          <button class="uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5">
            Claim now
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 px-40 mt-5 gap-5">
        <img src="offer-1.jpg" alt="" /><img src="offer-2.jpg" alt="" /><img
          src="offer-3.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

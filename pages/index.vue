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
      <div class="grid md:grid-cols-2">
        <img
          src="ideaLogo.png"
          alt="Study Photo"
          class="center animate-bounce h-[400px] w-[400px]"
        />
        <div>
          <h1
            style="text-align: center"
            class="text-xl md:text-3xl md:text-5xl font-roboto pt-5"
          >
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
      <div id="courses" class="grid md:grid-cols-2 px-10 md:px-40 gap-1 md:gap-5">
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
        class="grid md:grid-cols-12 font-oswald uppercase text-4xl text-black-800 md:px-40 gap-5"
      >
        <div
          class="md:col-span-5 bg-[url('/study.jpg')] bg-cover bg-center md:pl-20 pb-10 pt-10 pr-10"
        >
          <h4>Claim <br />Your Free</h4>
          <h4>Courses</h4>
          <button
            class="uppercase bg-red-500 text-white text-base md:text-lg py-3 px-8 my-5"
          >
            Claim now
          </button>
        </div>
        <div
          class="md:col-span-7 bg-[url('/ExcelExpert.jfif')] bg-cover bg-center text-center md:text-right pr-10 md:pt-10"
        >
          <h4>Excel</h4>
          <h4>Advanced</h4>
          <button
            class="uppercase bg-red-500 text-white text-base md:text-lg py-3 px-8 mt-5"
          >
            Claim now
          </button>
          <br />
          <br />
        </div>
      </div>
      <div class="grid md:grid-cols-3 md:px-40 mt-5 gap-5">
        <img src="business-data-analysis.jpg" class="md:w-[400px] md:h-[300px]" alt="" />
        <img src="sql.jfif" class="md:w-[400px] md:h-[300px]" alt="" />
        <img src="Stock-Market-Investing.png" class="md:w-[400px] md:h-[300px]" alt="" />
      </div>
    </div>
    <div
      id="section-2"
      class="grid md:grid-cols-3 text-center px-20 py-20 bg-yellow-500 gap-10"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20 stroke-1 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <h2 class="font-medium font-oswald text-2xl uppercase py-5">Secret Recipe</h2>
        <p class="font-light">
          You can't get this from textbooks. It takes many years of practice in work. Now
          you can get it within few weeks.
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20 stroke-1 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
        <h2 class="font-medium font-oswald text-2xl uppercase py-5">
          Valuable Knowledge
        </h2>
        <p class="font-light">
          Help you solve problems more easily. Make your life easier.
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20 stroke-1 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <h2 class="font-medium font-oswald text-2xl uppercase py-5">Mind to Share?</h2>
        <p class="font-light">
          If you have anything to share, feel free to contact us. We are happy to help
        </p>
      </div>
    </div>
    <div id="section-4" class="md:px-20 bg-gray-100 py-20">
      <div class="grid md:grid-cols-2">
        <img src="5469.jpg" alt="" class="md:pl-20" />
        <h3
          class="font-oswald text-5xl uppercase text-center md:pl-20 md:pr-4 pt-10 px-5 leading-snug"
        >
          <u>Sharing is Caring</u>
        </h3>
      </div>
      <P class="text-lg text-gray-500 mt-10 px-10">
        That's the philosophy we always believe in. We're proud to be a part of the
        community. We do our best to make sure everyone's happy and have a good time.
      </P>
      <P class="text-lg text-gray-500 mt-10 px-10">
        Learning new thing brought us together. It's something you can't put a price tag
        on.
      </P>
    </div>
    <div id="section-5" class="grid md:grid-cols-5 bg-yellow-300 text-amber-500">
      <div class="col-span-3 pl-5 pt-16 pb-16 text-center pr-5">
        <h4 class="font-oswald text-5xl uppercase">Donwload Mobile App</h4>
        <h4 class="font-oswald text-6xl uppercase">Save up to 20%</h4>
        <p class="text-lg my-7">Keep you always up to date with latest skill</p>
        <button><img src="/appstore.png" class="h-[50px]" alt="" /></button>
        <button><img src="/googleplay.png" class="h-[50px]" alt="" /></button>
      </div>
      <div class="col-span-2 hidden md:block">
        <img src="/eshop.png" class="-mt-10 h-[500px]" alt="" />
      </div>
    </div>
  </div>
</template>

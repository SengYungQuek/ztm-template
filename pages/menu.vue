<template>
  <div>
    <div class="bg-[url('/CoursesBackground.jpg')]">
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
        Coming Online Events...
      </h1>
    </div>

    <div id="items" class="grid grid-cols-3 gap-x-5 gap-y-16 mt-10 mx-20">
      <MenuItem v-for="b in items" :key="b.name" :item="b" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get('items.json').then((response) => {
      this.items = response.data.burgers;
    });
  },
};
</script>

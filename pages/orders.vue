<template>
  <div>
    <div class="bg-[url('/CoursesBackground.jpg')]">
      <div id="menu" class="grid grid-cols-2 py-5">
        <div id="menu-left">
          <img src="ideaLogo.png" class="w-[150px]" alt="" />
        </div>
        <div id="menu-right">
          <ul class="grid grid-cols-5 text-lg font-oswald text-white uppercase pt-5">
            <NuxtLink to="/about">About Us</NuxtLink>
            <NuxtLink to="/menu">Menu</NuxtLink>
            <li>Locations</li>
            <li>Contacts</li>
            <NuxtLink to="/cart">Cart</NuxtLink>
          </ul>
        </div>
      </div>
      <h1 class="text-white font-oswald uppercase text-6xl text-center pt-24 pb-28">
        Orders
      </h1>
    </div>

    <div v-if="user == null" id="login" class="text-center mt-20">
      <p>This page is limited to authorized users only.</p>
      <button
        class="font-oswald uppercase bg-red-500 text-white text-center py-3 px-8 mt-5"
        @click="login"
      >
        Login
      </button>
    </div>

    <div v-if="user" id="logout" class="text-center mt-20">
      <button
        class="font-oswald uppercase bg-red-500 text-white text-center py-3 px-8"
        @click="logout"
      >
        Logout
      </button>
    </div>

    <table v-for="order in orders" :key="order.id" class="table-auto w-2/3 mt-20 mx-auto">
      <thead>
        <tr>
          <td colspan="2">
            <h1 class="font-oswald uppercase text-2xl pnb-10">
              Order ID - {{ order.id }}
            </h1>
          </td>
        </tr>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in order.data.orders"
          :key="item.name"
          class="font-oswald uppercase text-2xl border-b"
        >
          <td class="py-10 text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      user: {},
    };
  },

  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        },
      ],
    };
  },

  mounted() {
    this.user = window.netlifyIdentity.currentUser();
    if (this.user) {
      this.readOrders();
    }
  },

  methods: {
    readOrders() {
      this.$axios
        .get('/.netlify/functions/readorders', {
          headers: {
            // eslint-disable-next-line no-template-curly-in-string
            Authorization: `Bearer ${this.user.token.access_token}`,
          },
        })
        .then((response) => {
          this.orders = response.data;
        });
    },

    login() {
      window.netlifyIdentity.open();
      window.netlifyIdentity.on('login', (user) => {
        this.user = user;
        this.readOrders();
      });
    },

    logout() {
      window.netlifyIdentity.logout();
      this.user = null;
      this.orders = [];
    },
  },
};
</script>

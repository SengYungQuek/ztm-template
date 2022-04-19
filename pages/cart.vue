<template>
  <div>
    <div class="bg-[url('/CoursesBackground.jpg')]">
      <div id="menu" class="grid grid-cols-2 py-5">
        <div id="menu-left">
          <img src="ideaLogo.png" class="w-[150px]" alt="" />
        </div>
        <div id="menu-right">
          <ul class="grid grid-cols-5 text-lg font-oswald text-white uppercase pt-5">
            <li>About Us</li>
            <NuxtLink to="/menu">Menu</NuxtLink>
            <li>Locations</li>
            <li>Contacts</li>
            <NuxtLink to="/cart">Cart</NuxtLink>
          </ul>
        </div>
      </div>
      <h1 class="text-white font-oswald uppercase text-6xl text-center pt-24 pb-28">
        Shopping Cart...
      </h1>
    </div>

    <table class="table-auto w-2/3 mt-20 mx-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in $store.state.orders"
          :key="order.name"
          class="font-oswald uppercase text-2xl border-b"
        >
          <td class="py-10 text-center">{{ order.name }}</td>
          <td class="text-center">{{ order.quantity }}</td>
          <td class="text-center" @click="removeItem(order.name)"><button>❌</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-oswald font-bold text-2xl bg-gray-100 uppercase">
          <td class="py-10 text-center" colspan="1">Total</td>
          <td class="text-center">{{ total.toFixed(2) }}</td>
          <td />
        </tr>
        <tr>
          <td colspan="2">
            <input
              id="email"
              type="email"
              placeholder="Please enter your email"
              class="w-full border border-gray-300 text-xl mt-5 py-3 py-2"
            />
          </td>
          <td colspan="1" class="text-right">
            <button
              class="font-oswald uppercase bg-red-500 text-white text-xl py-3 px-2 ml-5 mt-5"
              @click="submitOrder"
            >
              Confirm my Order
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      let total = 0;
      this.$store.state.orders.forEach((order) => {
        total = total + order.quantity;
      });
      // return total;
      return this.$store.getters.totalItems;
    },
  },
  methods: {
    removeItem(name) {
      this.$store.commit('removeItem', name);
    },
    submitOrder() {
      this.$axios
        .post('/.netlify/functions/email', {
          email: document.getElementById('email').value,
          orders: this.$store.state.orders,
        })
        .then(function (response) {
          alert('Your order has been submitted');
        });
    },
  },
};
</script>

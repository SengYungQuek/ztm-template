<template>
  <div class="text-center">
    <div>
      <img src="crispy-chicken.jpg" alt="" class="border-border-gray p-5" />
    </div>
    <h4 class="font-oswald uppercase text-2xl mt-5">Crispy Chicken</h4>
    <p class="font-light text-gray-500 my-2">
      Chicken breast, chili sauce, tomatoes, pickles,coleslaw
    </p>
    <p class="mt-5 mb-8">
      <span
        class="rounded rounded-lg bg-amber-800 text-yellow-400 font-oswald font-bold text-xl"
        >RM 11.99</span
      >
    </p>
    <button class="button font-oswald uppercase border py-2 px-5">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
};
</script>

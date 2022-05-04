<template>
  <div class="border rounded-md border-gray-200 text-left pb-5 mb-5">
    <div class="aspect-w-16 aspect-h-9">
      <iframe
        :src="vid"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <h3 class="font-oswald font-medium text-2xl uppercase mt-5 mb-2 ml-5">
      {{ title }}
    </h3>
    <p class="font-light text-gray-500 mb-5 ml-5">
      {{ description }}
    </p>
    <a :href="linkurl"
      ><span
        class="bg-amber-800 text-yellow-400 font-bold text-xl font-oswald mb-5 ml-5 rounded-lg px-5 py-2"
        >{{ viewtag }}</span
      ></a
    >
  </div>
</template>

<script>
export default {
  props: ['vid', 'title', 'description', 'viewtag', 'linkurl'],
};
</script>

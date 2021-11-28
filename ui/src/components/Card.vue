<template>
  <div class="Card">
    <div class="Image">
      <img :src="require(`@/assets/${imageName}`)" />
    </div>

    <div class="Heading">{{ heading }}</div>

    <div class="Description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    imageName: String,
    heading: String,
    description: String,
  },
};
</script>

<style scoped>
.Card {
  border: 1px solid black;
  width: 12rem;
  height: 14rem;
  margin: 1rem;
  padding: 0.5rem;
}
.Image {
  display: block;
  height: 8rem;
  border-radius: 10px;
}
img {
  width: 100%;
  max-height: 100%;
}

.Heading {
  display: flex;
  justify-content: center;
  margin: 0.5rem;
}

.Description {
  display: flex;
  justify-content: center;
  height: 25%;
}
</style>

<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
    <p class="description">Description: {{ description }}</p>
    <p class="text-muted">{{ product.category }}</p>
    <button class="view-product-button" @click="$emit('view-product', product)">
      view
    </button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 40%;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: blanchedalmond;
  box-shadow: 0 0 5px gray;
}

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>

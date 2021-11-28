<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ item_cost.toFixed(2) || 0 }}</h4>
    </div>
    <!-- <p>{{ description }}</p> -->
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 120);
    },
    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>

<style>
.header {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: blanchedalmond;
  transition: 0.3s;
  padding: 10px 10px;
  width:200px; 
  margin-bottom: 1rem;
  margin-left: 1rem;
}
</style>

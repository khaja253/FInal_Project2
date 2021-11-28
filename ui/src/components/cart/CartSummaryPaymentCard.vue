<template>
  <div class="cart-item-card">
    <h3 class="cart-total">Cart Total: ${{ cart_total.toFixed(2) }}</h3>

    <button class="view-product-button">Pay by Credit Card</button>
  </div>
</template>

<script>
export default {
  props: ["products"],
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal || 0;
    },
  },
};
</script>

<style>
.cart-total{
  margin-left: 1rem;

}
.view-product-button{
  margin-left: 1rem;
}
</style>

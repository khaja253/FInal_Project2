<template>
  <div>
    <div class="drawer-card">
    <div
      class="drawer-background"
      :class="{ show: active }"
      @click="$emit('close-product-drawer')"
    />

    <div class="drawer" :class="{ show: active }">
      <div style="display: flex; justify-content: center">
      <button class="drawer-close" @click="$emit('close-product-drawer')">X</button>

      </div>
      
      <div class="product-details" v-if="product" >
      <div style="display: flex; justify-content: center">

        <h3 class="text-center">{{ product.name }}</h3>
        </div>
            <div style="display: flex; justify-content: center">
        <p class="description">{{ product.description }}</p>
       
</div> <div style="display: flex; justify-content: center">

    

 <h3 class="text-center">${{ product.price.toFixed(2) }}</h3>
   </div>
        <div class="cart-total" v-if="product_total">
          <h3>In Cart</h3>
          <h4>Total: {{ product_total }}</h4>
        </div>
<div style="display: flex; justify-content: center">
        <div class="button-container">
          <button class="remove" @click="removeFromCart()">Remove</button>
          <button class="add" @click="addToCart()">Add</button>
        </div>
        </div>
      </div>
    </div>
    </div>
     </div>
   
 
</template>

<script>
export default {
  props: ["product", "active"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
  },
};
</script>

<style lang="scss">
.drawer-card {
display: flex;
justify-content: center;
  height: 25rem;
  background: #fff;
  border-radius: 5px;
width:40rem;
padding: 2rem;

}

.drawer-close{

  float: center;
}
</style>

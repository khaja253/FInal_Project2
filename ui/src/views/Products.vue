<template>
<div style="margin-bottom: 10rem">

  <div>
    <Modal v-if="active.product_drawer">
    <ProductDescriptionDrawer
      :product="product"
      
      v-on:close-product-drawer="closeProductDrawer"/>
    </Modal>
    </div>
    <div class="products-cards-container">
    <ProductSummaryCard
      v-for="product in items"
      :key="product.id"
      :product="product"
      v-on:view-product="viewProduct($event)"
    />
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal"
import items from "../data/items.js";
import ProductSummaryCard from "../components/commodity/ProductSummaryCard.vue";
import ProductDescriptionDrawer from "../components/commodity/ProductDescriptionDrawer.vue";
//import Vue from 'vue';
//import axios from 'axios'
//import VueAxios from 'vue-axios'
//Vue.use(VueAxios,axios)

export default {
  name: "Home",
  //mounted()
  //{
    //Vue.axios.get('https://fakestoreapi.com/products/1')
    //.then((resp)=>{
     //this.list=resp.data.data;
      //console.warn(resp)
    //})
  //},
  components: {
    Modal,
    ProductSummaryCard,
    ProductDescriptionDrawer,
  },
  data() {
    return {
     // list: undefined,
      items: items,
      product: null,
      active: {
        product_drawer: false
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
  },
};
</script>

<style lang="scss">
.products-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
</style>

<template>
    <div class="overlay">

        <div class="Modal">
          
            <div class="Modal-Content">
     <slot/>
            </div>
            </div>
        </div>
</template>
<script>
export default {
    name: "Modal"
}
</script>

<style scoped>
.overlay{
    position: fixed;
    z-index: 10;
    top: 0;
  left: 0;
  right: 0;
  bottom: 0;
 display: flex;
  justify-content: center;
  align-items: center;;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.358);
}

.Modal{
 
  background-color: white;;
max-width: 75%;
  border-radius: 10px;
  box-shadow: .2rem .3rem .4rem .1rem grey;
}
.Modal-Content{
display: flex;
justify-content: center;
height: 100%;
align-items: center;;
color: red;
}
</style>
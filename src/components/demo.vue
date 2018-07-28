<template>
  <div>
    <div>
      <slot name="hello" ></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <hr>
    <button @click="onPage1Click()">Page 1</button>
    <button @click="onPage2Click()">Page 2</button>
    <keep-alive>
    <component :is="selectedComponent" ></component>
    </keep-alive>
  </div>

</template>

<script>
import page1 from './page1.vue';
  import page2 from './page2.vue';

export default {

data(){
  return{
    selectedComponent:'appPage1'
  }
},
components:{
    appPage1:page1,
    appPage2:page2
},
methods:{
onPage1Click(){
  this.selectedComponent='appPage1';
},
onPage2Click(){
  this.selectedComponent='appPage2';
}
}

}
</script>

<style>

</style>

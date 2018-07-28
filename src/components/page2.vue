<template>
<div>
<h1>hello from page2</h1>

<button @click="onCount()" >Counter</button>
<h1>{{counter}}</h1>
</div>
</template>

<script>
export default {
  data(){

    return {
      counter:0
    }
  },
  methods:{
    onCount(){
      this.counter++;
    }
  }
}
</script>

<style>

</style>

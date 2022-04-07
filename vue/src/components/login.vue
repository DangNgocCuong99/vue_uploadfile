<template>
<div>
  <input ref="myInput"  type="file" @change="handle(e)"/>
  <button @click="logRef">Get Ref</button>

</div>
</template>

<script>
export default {
  data(){
    return {
      txt:''
    }
  },
  methods: {
    logRef() {
      console.log(this.$refs.myInput);
    },
  },
};
</script>
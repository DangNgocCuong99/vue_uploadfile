<template>
  <div>
    <button @click="handleAdd(arrFile,addItem)">ADD</button>
    <input type="file" @change="handleClg" multiple />
    <td  v-for="(img,key) in arrImg" :key="key" >
        <img :src="img" style="width:100px; height:100px"/>
    </td>


    <tr v-for="(item, index) in listItem" :key="index" style="text-align: center">
      <td>{{index}}</td>
      <td v-for="(img, key) in item.img " :key="key">
          
          <img :src="img" style="width:100px; height:100px"/>
      </td>
      <br/> <br/> <br/>
    </tr>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrFile:[],
      arrImg:[]
    };
  },props: {
    listItem: {
      type: Array,
      default: () => []
    },
    addItem:Function,
    deleteItem:Function,
    updateItem:Function,
    getListItem:Function,
    totalPage:Number,
    activePage:Number,
    textSearch:String,
  },
  methods: {
    handleClg(event) {
      this.arrFile = event.target.files
      var url = []
      for (var i = 0; i < event.target.files.length;i++) {
        url.push(URL.createObjectURL(event.target.files[i]))
      }
      this.arrImg = url
      console.log(this.arrImg,'sss')
      console.log(this.arrFile)
    },
    handleAdd(arrFile,addItem){
      var form = new FormData()
    for (var i = 0; i < arrFile.length; i++) {
      form.append("img", arrFile[i])
    }
      console.log(form,'ssfsfd')
      addItem({form:form})
    }
  },
};
</script>

<style>
</style>
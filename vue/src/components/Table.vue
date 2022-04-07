<template>
  <div class="table"  style="text-align:left" >
    <div>
    <button @click="handleAdd(arrFile)">ADD</button>
    <input type="file" @change="handleClg" multiple />
    <td  v-for="(img,key) in arrImg" :key="key" >
        <img :src="img"/>
    </td>
    
  </div>
    <h1>{{textSearch}}</h1>
    <button @click="handleCLG(activePage,totalPage)">clg</button> <br/><br/>
    <input placeholder="nhap thong tin can tim" v-model="textSeach"/>
    <button @click="getListItem({textSearch:textSeach,activePage:activePage})">Search</button> <br/><br/>
    <input placeholder="nhap name" v-model="name"/>
    <button @click="addItem({name:name,textSearch:textSearch,activePage:activePage})">ADD</button>
    <button @click="updateItem({name:name,id:id,textSearch:textSearch,activePage:activePage})">Update</button> <br/><br/>
    <table>
      <thead>
        <tr>
          <th>STT  &emsp;</th>
          <th >Tên</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listItem" :key="index" style="text-align: left">
          <td>{{ index+1 }}</td>
          <td >{{ item.name }}</td>
          <td>
            <button @click="handleSelect(item._id,item.name)">SELECT</button>
            <button @click="deleteItem({id:item._id,textSearch:textSearch,activePage:activePage})">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button
        v-for="n in totalPage"
        :key="n"
        @click="getListItem({ textSearch: textSearch, activePage: n })"
        :style="activePage == n ? 'background: blue' : ''"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  
  setup() {},
  data() {
    return {
      // textSeach:"",
      name:"",
      id:"",
       arrFile:[],
      arrImg:[]
    }
  },
  props: {
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
    handleSelect(id,name){
      this.id = id,
      this.name = name
    },
    handleCLG(activePage,totalPage){
      console.log(activePage,"activePgae")
      console.log(totalPage,"totalPage")
    },handleClg(event) {
      this.arrFile = event.target.files
      var url = []
      for (var i = 0; i < event.target.files.length;i++) {
        url.push(URL.createObjectURL(event.target.files[i]))
      }
      this.arrImg = url
      console.log(this.arrImg,'sss')
      console.log(this.arrFile)
    },
    handleAdd(arrFile){
      var form = new FormData()
    for (var i = 0; i < arrFile.length; i++) {
      form.append("img", arrFile[i])
    }
      console.log(form,'ssfsfd')
    }

  }
};
</script>

<style scoped lang='scss'>
</style>
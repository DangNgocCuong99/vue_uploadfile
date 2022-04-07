<template>
  <div class="studentContainer">
    <login :listItem="listItem"
          :addItem="addItem" 
          :deleteItem="deleteItem"
          :updateItem="updateItem"
          :getListItem="getListItem"
          :totalPage="totalPage"
          :activePage="activePage"
          :textSearch="textSearch"
          />
  </div>
</template>

<script>
import login from "../components/login";
import * as types from "../store/itemModule/types";
import { mapState, mapActions } from "vuex";
export default {
  setup() {},
  components: {
    login
  },
  computed: {
    ...mapState({
      listItem: state => state.item.listItem,
      totalPage: state=> state.item.totalPage,
      activePage:state => state.item.activePage,
      textSearch: state => state.item.textSearch,
    })
  },
  mounted() {
    this.getListItem({textSearch: "",activePage:'1'});
  },
  methods: {
    ...mapActions({
      getListItem: "item/" + types.GET_ITEM_REQUEST,
      addItem: "item/" + types.ADD_ITEM_REQUEST,
      deleteItem: "item/" + types.DELETE_ITEM_REQUEST,
      updateItem: "item/" + types.UPDATE_ITEM_REQUEST,
    }),
  }
};
</script>

<style scoped>

</style>
<template>
  <div style="display: flex; height: 50px">
    <h1 style="text-align:left;margin: 10px">My Listing</h1>
    <div style="flex: 1"></div>
    <div>
      <el-input style="width: 500px;padding: 10px;height: 50px" type="text" size="small"></el-input>
      <el-button circle type="success" icon="search"></el-button>
    </div>
  </div>
  <div style="height: 300px">
    <el-table :data="listings" border style="width: 100%" :pagination="true" :default-sort="{ prop: 'price', order: 'descending' }">
      <el-table-column prop="itemName" label="Item Name"></el-table-column>
      <el-table-column prop="price" label="Price"></el-table-column>
      <el-table-column prop="description" label="Description"></el-table-column>
      <el-table-column label="Image">
        <template #default="{ row }">
          <img :src="row.imageUrl" alt="Item image" class="item-image" />
        </template>
      </el-table-column>
      <el-table-column label="Actions">
        <template #default="{ row }">
          <el-button
              type="primary"
              @click="editListing(row)"
          ></el-button>
          <el-button
              type="danger"
              @click="deleteListing(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "FarmerListings",
  data(){
    return{
      listings:[
        {
          id:1,
          itemName: "Apples",
          price: 2.99,
          description: "Fresh organic apples",
          imageUrl: "https://example.com/apples.jpg",
        },
        {
          id: 2,
          itemName: "Carrots",
          price: 1.49,
          description: "Crunchy organic carrots",
          imageUrl: "https://example.com/carrots.jpg",
        },
      ],
    };
  },
  methods:{
    editListing(listing) {
      // API
      this.$router.push({ name: "farmerEditListing", params: { id: listing.id } });
    },
    deleteListing(listing) {
      //API
      this.listings = this.listings.filter((item) => item.id !== listing.id);
    },
  },
};
</script>

<style scoped>
.item-image {
  width: 50px;
  height: auto;
}
p {
  height: 30px;
}
.el-form {
  display: inline-block;
  text-align: center;
  vertical-align: center;
  height: 30px;
}
</style>
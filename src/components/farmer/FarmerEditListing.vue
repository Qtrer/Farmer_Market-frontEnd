<template>
  <div>
    <div style="height: 50px">
      <h1 style="text-align:left;margin: 10px">Edit Listing</h1>
    </div>
    <el-form :model="form">
      <el-form-item label="Item Name">
        <el-input v-model="form.itemName"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input-number v-model="form.price" :min="0" :step="0.01" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="Image">
        <el-upload
            class="upload-demo"
            action="#"
            :before-upload="beforeUpload"
            :on-success="handleUploadSuccess"
        >
          <el-button size="small" type="primary">Choose Image</el-button>
          <el-button size="small" type="success" @click="submitForm">Upload</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="form.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Save Changes</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FarmerEditListing",
  data() {
    return {
      form: {
        itemName: "Sample Item",
        price: 10.0,
        image: "",
        description: "Sample description",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form data: ", this.form);
    },
    beforeUpload(file) {
      this.form.image = file;
      return false; // prevent the default upload behavior
    },
    handleUploadSuccess(response, file) {
      console.log("File uploaded: ", file);
    },
  },
};
</script>

<style scoped>
p {
  height: 30px;
}
.el-input {
  width: 500px;
  height: 30px;
}
.el-form {
  display: inline-block;
  text-align: center;
  vertical-align: center;
  height: 30px;
}
</style>

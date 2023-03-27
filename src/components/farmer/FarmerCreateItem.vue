<template>
  <div style="height: 50px">
    <h1 style="text-align:left;margin: 10px">New Item</h1>
  </div>
  <div>
    <el-form :model="form" label-width="200px" @submit.prevent="submitForm" ref="form">
      <el-form-item label="Item name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="Item Picture" prop="picture">
        <el-upload>
          action="https://jsonplaceholder.typicode.com/posts/"
          <!--            BACK-END TEAM JSON-->
          :show-file-list="false"
          :on-success="handlePictureSuccess"
          :before-upload="beforePictureUpload">
          <el-button size="small" type="primary">Click to upload</el-button>
          <div v-if="form.imageUrl" class="image-preview">
            <img :src="form.imageUrl" :alt="form.name">
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FarmerCreateItem",
  data(){
    return{
      form:{
        name: "",
        price: "",
        imageUrl: "",
        description: "",
      },
    };
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){
          // Submit data to BACKEND
          alert(`Submit!`,this.form);
        } else{
          alert(`error submit!!`);
          return false;
        }
      });
    },
    handlePictureSuccess(response,file){
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
    beforePictureUpload(file){
      const isImage = file.type.startsWith('image/');
      if(!isImage){
        this.$message.error("Uploaded file should be an image.");
      }
      return isImage;
    },
  },
};
</script>

<style scoped>
.image-preview{
  margin-top: 20px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #ccc;
}
.image-preview img{
  width: 100%;
  height: auto;
}

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
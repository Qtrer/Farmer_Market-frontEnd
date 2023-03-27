<template>
  <div class="farmer-bulk-upload">
    <div style="height: 50px">
      <h1 style="text-align:left;margin: 10px">Upload Item</h1>
    </div>
    <el-upload
        :action="uploadUrl"
        :show-file-list="false"
        :on-success="handleUploadSuccess"
        :before-upload="beforeFileUpload"
        accept=".csv">
<!--        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"-->
      <el-button type="primary">Click to upload</el-button>
    </el-upload>
    <el-button @click="loadMockFile">Load Mock CSV File</el-button>
    <div v-if="uploadResult">
      <h3>{{ uploadResult.title }}</h3>
      <p>{{ uploadResult.description }}</p>
    </div>
    <div v-if="uploadedItems.length">
      <h3>Uploaded Items:</h3>
      <ul>
        <li v-for="(item, index) in uploadedItems" :key="index">
          {{ item.item_name }} - ${{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { parseCSV } from "@/utils/csvParser";

async function loadMockCSV() {
  const response = await fetch("/mock_products.csv");
  const csvContent = await response.text();
  return csvContent;
}
export default {
  name: "FarmerBulkUpload",
  data() {
    return {
      uploadUrl: "https://jsonplaceholder.typicode.com/posts/",
      // API URL
      uploadResult: null,
      fileReader: new FileReader(),
      uploadedItems: [],
    };
  },
  mounted() {
    this.fileReader.onload = (e) => {
      this.parseUploadedFile(e.target.result);
    };
  },
  methods: {
    beforeFileUpload(file) {
      const acceptedTypes = [
        "text/csv",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
      ];
      if (!acceptedTypes.includes(file.type)) {
        this.$message.error("Uploaded file should be a CSV or Excel file.");
        return false;
      }
      return true;
    },
    handleUploadSuccess(response, file) {
      this.uploadResult = {
        title: "Upload Successful",
        type: "success",
        description: "Your items have been uploaded successfully!",
      };
      // Handle any additional processing or display of response data as needed
      this.fileReader.readAsText(file.raw);
    },
    async parseUploadedFile(fileContent) {
      try {
        this.uploadedItems = await parseCSV(fileContent);
      } catch (err) {
        console.error("Error parsing CSV file:", err);
        this.$message.error("Error parsing CSV file. Please check the file format and try again.");
      }
    },
    async loadMockFile() {
      const mockCSVContent = await loadMockCSV();
      this.parseUploadedFile(mockCSVContent);
    },
  },
};
</script>

<style scoped>
.farmer-bulk-upload {
  max-width: 600px;
  margin: 0 auto;
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

<template>
  <div class="app-container">
    <router-link to="/product/new-android">
      <el-button type="primary" size="small" style="float: right" class="add"
        >添加商品</el-button
      >
    </router-link>

    <!-- 搜索 -->
    <el-form :inline="true" :model="listQuery">
      <el-form-item label="输入搜索：">
        <el-input
          style="width: 203px"
          v-model="listQuery.search"
          clearable
          placeholder="商品名称/Id/机况"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  @click="getSearchList" type="primary" size="small" icon="el-icon-search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="returnList" type="primary" size="small">
         返回
        </el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="发布用户">
              <span>{{ props.row.editor }}</span>
            </el-form-item>
            <el-form-item label="商品名称">
              <span>{{ props.row.phoneName }}</span>
            </el-form-item>
            <el-form-item label="联系方式">
              <span>{{ props.row.phoneNumber }}</span>
            </el-form-item>
            <el-form-item label="储存容量">
              <span>{{ props.row.storage }}</span>
            </el-form-item>
            <el-form-item label="商品价格">
              <span>{{ props.row.prize }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"> </el-table-column>
      <!-- <el-table-column label="商品图片" prop="phonePic"> </el-table-column> -->

      <el-table-column
        label="商品图片"
        width="100"
        align="center"
        prop="phonePic"
      >
        <template slot-scope="scope">
          <img :src="scope.row.phonePic" alt width="80" />
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="phoneName"> </el-table-column>
      <el-table-column label="价格" prop="prize"> </el-table-column>
      <el-table-column label="操作">
        <!-- <el-button type="info" plain>修改信息</el-button> -->
        <router-link to="/product/edit-android">
          <el-button type="info" plain>修改信息</el-button>
        </router-link>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />
  </div>
</template>
<style>
.add {
  margin-left: 10px;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
import { getAndroidList, getSearchList,returnList } from "@/api/android"; 
//引入分页组件
import Pagination from "@/components/Pagination";

export default {
  // filters: {
  //   statusFilter(status) {
  //     const statusMap = {
  //       published: "success",
  //       draft: "gray",
  //       deleted: "danger"
  //     };
  //     return statusMap[status]
  //   }
  // },
  //注册分页组件
  components: { Pagination },
  data() {
    return {
      list: [],

      listLoading: true,
      //分页总数据个数
      total: 0,
      //分页选项
      listQuery: {
        search: "",
        page: 1,
        limit: 3,
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getAndroidList(this.listQuery).then((response) => {
        this.list = response.data.items;
        //保存总数据个数
        this.total = response.data.total;
        this.listLoading = false;
        // console.log(response);
        console.log(this.listQuery, "1111111111111111");
      });
    },

    //搜索
    async getSearchList() {
      if (this.listQuery.search) {
        let result = await getSearchList(this.listQuery);
        this.list = result.data.items;
        this.total = result.data.total;
        this.listLoading = false;
      }
      console.log(this.listQuery.search, "44444444");
    },
    returnList() {
     this.fetchData();
    },
  },
};
</script>

<template>
  <div class="app-container">
    <router-link to="/product/new">
      <el-button type="primary">添加商品</el-button>
    </router-link>
    <div>这是苹果列表</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
     
      <el-table-column align="center" label="商品序号" width="80">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="商品名称" width="200" align="center">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="商品添加时间" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.add_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品摘要" width="200" align="center">
        <template slot-scope="scope">{{ scope.row.zhaiyao }}</template>
      </el-table-column>
      <el-table-column label="商品点击次数" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.click }}</template>
      </el-table-column>
      <el-table-column label="商品图片" width="200" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.img_url " alt width="180">
        </template>
      </el-table-column>
      <el-table-column label="商品售价" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.sell_price }}</template>
      </el-table-column>
      <el-table-column label="商品市场价" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.market_price }}</template>
      </el-table-column>
      <el-table-column label="商品库存" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.stock_quantity }}</template>
      </el-table-column>
      <!-- <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />
  </div>
</template>


<script>
import { getAppleList, deleteApple } from "@/api/apple";
//引入分页组件
import Pagination from "@/components/Pagination";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  //注册分页组件
  components: { Pagination },
  data() {
    return {
      list: null,
      listLoading: true,
      //分页总数据个数
      total: 0,
      //分页选项
      listQuery: {
        page: 1,
        limit: 3
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getAppleList(this.listQuery).then(response => {
        this.list = response.data.items;
        //保存总数据个数
        this.total = response.data.total;
        this.listLoading = false;
      });
    },
    //删除商品
    // handleDelete(index, item) {
    //   deleteApple({ id: item.id }).then(response => {
    //      this.fetchData();
    //   });
    // }
  }
};
</script>

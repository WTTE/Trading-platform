<template>
  <div>
    <!-- 搜索部分 -->
    <el-card class="box-card">
      <div>
        <i class="el-icon-search" />
        <span>筛选搜索</span>
        <el-button
          style="float: right; margin-top: 33px; margin-right: 580px"
          type="primary"
          size="small"
          @click="goSearch()"
        >
          查询搜索
        </el-button>
        <el-button
          style="float: right; margin-top: 33px; margin-right: 15px"
          size="small"
          @click="handleResetSearch()"
        >
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form
          :inline="true"
          :model="listQuery"
          size="small"
          label-width="140px"
        >
          <el-form-item label="输入搜索：">
            <el-input
              v-model="listQuery.search"
              class="input-width"
              placeholder="姓名/工号"
              clearable
            />
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card class="box-card">
      <i class="el-icon-tickets" />
      <span>数据列表</span>
      <el-button
        size="mini"
        class="btn-add"
        style="float: right; margin-left: 20px"
        @click="handleAdd()"
        >添加</el-button
      >
    </el-card>
    <div class="box-card">
      <el-table
        ref="adminTable"
        v-loading="listLoading"
        :data="list"
        style="width: 100%"
        border
      >
        <el-table-column label="编号" width="60" align="center" fixed>
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="员工姓名" width="90" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="员工工号" width="110" align="center">
          <template slot-scope="scope">{{ scope.row.workNum }}</template>
        </el-table-column>
        <el-table-column label="职责" width="110" align="center">
          <template slot-scope="scope">{{ scope.row.authority }}</template>
        </el-table-column>
        <el-table-column label="性别" width="60" align="center">
          <template slot-scope="scope">{{ scope.row.gender }}</template>
        </el-table-column>
        <el-table-column label="联系方式" width="110" align="center">
          <template slot-scope="scope">{{ scope.row.phoneNum }}</template>
        </el-table-column>
        <el-table-column label="邮箱" align="center">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column label="添加时间" width="160" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="是否启用" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.value"
              :active-value="1"
              :inactive-value="0"
              @change="handleStatusChange(scope.$index, scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleUpdate(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  getEditor,
  addEditor,
  deleteEditor,
  getSearchlist,
} from "@/api/editor";

export default {
  data() {
    return {
      list: [],
      listLoading: true,
      listQuery: {
        search: "",
      },
    };
  },
  created() {
    this.getPam();
  },
  methods: {
    async getPam() {
      let result = await getEditor(this.list);
      console.log(result.data.items);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    async goSearch() {
      let result = await getSearchlist(this.listQuery);
      console.log(result.data.items);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    //删除商品
    handleDelete(index, item) {
      deleteProduct({ id: item.id }).then((response) => {
        this.fetchData();
      });
    },
    handleResetSearch(){
      if(this.listQuery.search){
        this.listQuery.search="",
        this.getPam()
      }
    }
  },
};
</script>

<style>
/* .box-card {
  margin: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
} */
/* .pagination-container {
  float: right;
  margin-right: 20px;
} */
</style>

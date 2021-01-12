<template>
  <div>
    <el-card class="box-card">
      <div>
        <i class="el-icon-search" />
        <span>筛选搜索</span>
        <el-button
          style="float: right"
          type="primary"
          size="small"
          @click="handleSearchList()"
        >
          查询搜索
        </el-button>
        <el-button
          style="float: right; margin-right: 15px"
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
              v-model="input"
              class="input-width"
              placeholder="帐号/姓名"
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
        ref="roleTable"
        :data="list"
        style="width: 100%"
        v-loading="listLoading"
        border
      >
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="角色名称" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="描述" align="center">
          <template slot-scope="scope">{{ scope.row.description }}</template>
        </el-table-column>
        <el-table-column label="用户数" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.adminCount }}</template>
        </el-table-column>
        <el-table-column label="添加时间" width="160" align="center">
          <template slot-scope="scope">{{
            scope.row.createTime | formatDateTime
          }}</template>
        </el-table-column>
        <el-table-column label="是否启用" width="140" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-row>
              <el-button
                size="mini"
                type="text"
                @click="handleSelectMenu(scope.$index, scope.row)"
                >分配菜单
              </el-button>
              <el-button
                size="mini"
                type="text"
                @click="handleSelectResource(scope.$index, scope.row)"
                >分配资源
              </el-button>
            </el-row>
            <el-row>
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
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </div>
     <div class="pagination-container">
      <el-pagination
        background
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="5"
        :page-sizes="[5,10,15]"
        :total="3">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getAdministrators, addAdministrators,deleteAdministrators } from "@/api/administrators";
export default {
  //注册分页组件
  data() {
    return {
      list: [],
      listLoading: true,
      //分页总数据个数
      total: 0,
      input:'',
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
      getAdministrators(this.listQuery).then(response => {
        console.log(response.data.items);
        this.list = response.data.items;
         this.listLoading = false;
      });
    },
    //删除商品
    // handleDelete(index, item) {
    //   deleteProduct({ id: item.id }).then(response => {
    //      this.fetchData();
    //   });
    // }
  }
};
</script>

<style>
.box-card {
  margin: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.pagination-container{
    float: right;
    margin-right: 20px;
}
</style>

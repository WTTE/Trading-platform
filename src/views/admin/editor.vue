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
            <el-input v-model="input" class="input-width" placeholder="帐号/姓名" clearable />
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
      >添加</el-button>
    </el-card>
    <div class="box-card">
      <el-table
        ref="adminTable"
        v-loading="listLoading"
        :data="list"
        style="width: 100%;"
        border
      >
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="帐号" align="center">
          <template slot-scope="scope">{{ scope.row.username }}</template>
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template slot-scope="scope">{{ scope.row.nickName }}</template>
        </el-table-column>
        <el-table-column label="邮箱" align="center">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column label="会员等级" align="center">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
         <el-table-column label="购买数" align="center">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
         <el-table-column label="回收数" align="center">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
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
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.box-card {
  margin: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.pagination-container{
    float: right;
    margin-right: 20px;
}
</style>

<template>
<div class="app-container">
  
     
    <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float:right"
          type="primary"
          @click="getSearchList"
          size="small">
          查询搜索
        </el-button>
        <el-button
          style="float:right;margin-right: 15px"
          @click="handleResetSearch"
          size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true"  size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input v-model="listQuery.search"  class="input-width" placeholder="订单编号"></el-input>
          </el-form-item>
          <el-form-item label="商品型号：">
            <el-input v-model="listQuery.receiverKeyword" class="input-width" placeholder="小米/苹果"></el-input>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-input v-model="listQuery.status" class="input-width" placeholder="收货/未收货"></el-input>
          </el-form-item>
          
        </el-form>
      </div>
  <el-table
    ref="multipleTable"
    :data="list"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="编号"
      width="120">
      <template slot-scope="scope">{{ scope.$index+1 }}</template>
    </el-table-column>
    <el-table-column
      
      prop="id"
      label="商品编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="phoneName"
      label="商品型号"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="date"
      label="订单提交时间"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="prize"
      label="订单金额"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="sign"
      label="订单状态"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="操作">
        <template slot-scope="scope">
           <el-button type="primary" plain @click="handleViewOrder(scope.row)">查看订单</el-button>
           <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" class="ai">删除</el-button>
          
        </template>
      </el-table-column>
      
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
<style>
.gai{
transform: scale(0.5);
}
</style>


<script>
import {getList,deleteProduct,getSearchList} from '@/api/table'
import Pagination from "@/components/Pagination";
  export default {
    data() {
      return {
      list: [],
      listLoading: true,
      //分页总数据个数
      total: 0,
      
      
      //分页选项
      listQuery: {
        page: 1,
        limit: 10,
        search:"",
        receiverKeyword: "",
        status: ""

      }
    }
    },
     created () {
        console.log("11111111111111111111111");
      this.fetchData()
    },
    methods: {
     fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
        this.list = response.data.items;
        console.log(this.list,"uuuuuuuuuuuuuuu");
      
        //保存总数据个数
        this.total = response.data.total;
        
      });
    },
  async handleDelete(index, row) {
     
      //调用deleteProduct来向服务器发送请求删除商品
      const list = await deleteProduct({ id: row.id });
      console.log(row,index,"xxxxxxxxxxxxxxxxx");
       this.fetchData()
      
      
    },
    handleViewOrder(row){
      
      this.$router.push({path:'/example/orderDetail',query:{op:row}})
    },
    
    handleResetSearch() {
     
      //调用deleteProduct来向服务器发送请求删除商品
      this.listQuery.search=""
      this.listQuery.receiverKeyword=""
      this.listQuery.status=""
      
      
    },
   // 搜索功能
    async getSearchList() {
      if (this.listQuery.search) {
        let result = await getSearchList(this.listQuery);
        console.log(this.listQuery,"111111111111111111111111");
        this.list = result.data.items;
        this.total = result.data.total;
        this.listLoading = false;
      }
      
    },
    
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    components: {
    Pagination
  }
    }
  
</script>
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
      <router-link to="/permission/newEditor">
        <el-button
          size="mini"
          class="btn-add"
          style="float: right; margin-left: 20px"
          @click="handleAdd()"
          >添加</el-button
        >
      </router-link>
    </el-card>
    <div class="box-card">
      <el-table
        ref="adminTable"
        v-loading="listLoading"
        :data="list"
        style="width: 100%"
        border
      >
        <el-table-column label="序号" width="80" align="center" fixed>
          <!-- $index+1使删除后列表序号从1重新开始排列 -->
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="员工姓名" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="员工工号" width="160" align="center">
          <template slot-scope="scope">{{ scope.row.workNum }}</template>
        </el-table-column>
        <el-table-column label="职责" width="110" align="center">
          <template slot-scope="scope">{{ scope.row.authority }}</template>
        </el-table-column>
        <el-table-column label="性别" width="80" align="center">
          <template slot-scope="scope">{{ scope.row.gender }}</template>
        </el-table-column>
        <el-table-column label="联系方式" width="160" align="center">
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

    <div class="pagination-container">
      <pagination v-show="total > 0" :total="total" @pagination="getPam" />
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      @close="editorDialogClosed()"
    >
      <el-form ref="list" :model="list" label-width="150px" size="small">
        <el-form-item label="员工姓名" prop="name">
          <el-input v-model="list.name" style="width: 250px" />
        </el-form-item>
        <el-form-item label="员工工号" prop="workNum">
          <el-input v-model="list.workNum" style="width: 250px" />
        </el-form-item>
        <el-form-item label="职责" prop="authority">
          <el-select v-model="list.authority" placeholder="请选择职责">
            <el-option label="安卓订购订单" value="安卓订购订单"></el-option>
            <el-option label="安卓回收订单" value="安卓回收订单"></el-option>
            <el-option label="苹果订购订单" value="苹果订购订单"></el-option>
            <el-option label="苹果回收订单" value="苹果回收订单"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="职责" prop="authority">
          <el-input v-model="list.authority" style="width: 250px" />
        </el-form-item> -->
        <el-form-item label="性别" prop="gender">
          <el-select v-model="list.gender" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="性别" prop="gender">
          <el-input v-model="list.gender" style="width: 250px" />
        </el-form-item> -->
        <el-form-item label="联系方式" prop="phoneNum">
          <el-input v-model="list.phoneNum" style="width: 250px" />
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="list.email" style="width: 250px" />
        </el-form-item>
        <el-form-item label="添加时间：" prop="date">
          <el-col :span="11">
            <el-date-picker
              v-model="list.date"
              type="datetime"
              placeholder="选择日期时间"
              value-format="yyyy-MM-dd HH:mm:ss"
              format="yyyy-MM-dd HH:mm:ss"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="是否启用：" prop="value">
          <el-radio-group v-model="list.value">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="handleDialogConfirm()"
          >确定</el-button
        >
        <el-button size="small" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" size="small" @click="handleDialogConfirm()"
          >重置</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getEditor,
  addEditor,
  deleteEditor,
  getSearchlist,
  updateEditor,
} from "@/api/editor";

export default {
  data() {
    return {
      isEdit: false,
      dialogVisible: false,
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
    //获取列表数据
    async getPam() {
      let result = await getEditor();
      console.log(result.data.items);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    //进行列表查询
    async goSearch() {
      let result = await getSearchlist(this.listQuery);
      console.log(result.data.items);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    //重置列表查询
    handleResetSearch() {
      if (this.listQuery.search) {
        (this.listQuery.search = ""), this.getPam();
      }
    },
    //删除员工信息
    handleDelete(index, row) {
      deleteEditor({ id: row.id }).then((response) => {
        this.getPam();
      });
    },
    //编辑员工信息
    handleUpdate(index, row) {
      this.dialogVisible = true;
      this.isEdit = true;
      this.list = Object.assign({}, row);
    },
    handleDialogConfirm() {
      this.$confirm("是否要确认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        if (this.isEdit) {
          const arr = [{ id: this.list.id }, { value: this.list }, { listQuery: this.listQuery }];
          console.log(arr);
          console.log(this.list.id, this.listQuery);
          updateEditor(arr).then((response) => {
            // console.log(response);
            this.list = response.data.items;
            this.total = response.data.total;
            // this.listLoading = false;
            this.$message({
              message: "修改成功！",
              type: "success",
            });
            this.dialogVisible = false;
            this.getPam();
          });
        } else {
          console.log(this.list);
          addEditor(this.list).then((response) => {
            this.$message({
              message: "添加成功！",
              type: "success",
            });
            this.dialogVisible = false;
            this.getPam();
          });
        }
      });
    },
  },
};
</script>


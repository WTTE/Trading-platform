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
          @click="getSearchList"
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
              v-model="listQuery.search"
              placeholder="工号/姓名"
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
      >添加</el-button>
    </el-card>
    <div class="box-card">
      <el-table
        ref="adminTable"
        v-loading="listLoading"
        :data="list"
        style="width: 100%"
        border
      >
        <el-table-column label="编号" width="100" align="center" fixed>
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="当前状态" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.attendance }}</template>
        </el-table-column>
        <el-table-column label="快递员姓名" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="快递员工号" align="center">
          <template slot-scope="scope">{{ scope.row.workName }}</template>
        </el-table-column>
        <el-table-column label="性别" align="center" width="80">
          <template slot-scope="scope">{{ scope.row.gender }}</template>
        </el-table-column>
        <el-table-column label="联系方式" align="center">
          <template slot-scope="scope">{{ scope.row.phoneNum }}</template>
        </el-table-column>
        <el-table-column label="邮箱" align="center" width="280">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column label="添加时间" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="是否启用" width="140" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.value"
              :active-value="1"
              :inactive-value="0"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
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
            <el-button
              size="mini"
              type="text"
              @click="goPostman()"
            >派单详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getPam"
      />
    </div>
    <el-dialog
      :title="isEdit ? '编辑用户' : '添加用户'"
      :visible.sync="dialogVisible"
      width="40%"
      @close="editorDialogClosed()"
    >
      <el-form ref="admin" :model="admin" label-width="150px" size="small">
        <el-form-item label="当前状态：" prop="attendance">
          <el-input v-model="admin.attendance" style="width: 250px" />
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="admin.name" style="width: 250px" />
        </el-form-item>
        <el-form-item label="工号：" prop="workName">
          <el-input v-model="admin.workName" style="width: 250px" />
        </el-form-item>
        <el-form-item label="性别：" prop="gender">
          <el-input v-model="admin.gender" style="width: 250px" />
        </el-form-item>
        <el-form-item label="联系方式：" prop="phoneNum">
          <el-input v-model="admin.phoneNum" style="width: 250px" />
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="admin.email" style="width: 250px" />
        </el-form-item>
        <el-form-item label="添加时间：" prop="date">
          <el-col :span="11">
            <el-date-picker
              v-model="admin.date"
              type="datetime"
              placeholder="选择日期时间"
              value-format="yyyy-MM-dd HH:mm:ss"
              format="yyyy-MM-dd HH:mm:ss"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="是否启用：" prop="value">
          <el-radio-group v-model="admin.value">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          size="small"
          @click="handleDialogConfirm()"
        >确 定</el-button>
        <el-button
          type="primary"
          size="small"
          @click="handleDialogConfirm()"
        >重置</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getPostman,
  addPostman,
  deletePostman,
  getSearchList,
  upPostman
} from '@/api/postman'
import Pagination from '@/components/Pagination'

// const defaultAdmin = {
//   id: null,
//   name: null,
//   password: null,
//   nickName: null,
//   email: null,
//   note: null,
//   status: 1,
// };

export default {
  components: { Pagination },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      isEdit: false,
      dialogVisible: false,
      admin: {},
      list: [],
      listLoading: true,
      // 分页总数据个数
      total: 0,
      // 分页选项
      listQuery: {
        search: '',
        page: 1,
        limit: 5
      }
    }
  },
  created() {
    this.getPam()
  },
  methods: {
    editorDialogClosed() {
      this.$refs.admin.resetFields()
      console.log(1)
    },
    async getPam() {
      const result = await getPostman(this.listQuery)
      this.list = result.data.items
      this.total = result.data.total
      this.listLoading = false
    },
    // 搜索功能
    async getSearchList() {
      if (this.listQuery.search) {
        const result = await getSearchList(this.listQuery)
        this.list = result.data.items
        this.total = result.data.total
        this.listLoading = false
      }
    },
    // 重置功能
    handleResetSearch() {
      if (this.listQuery.search) {
        (this.listQuery.search = '')
        this.getPam()
      }
    },
    // 删除商品
    handleDelete(index, item) {
      console.log(index, item)
      deletePostman({ id: item.id }).then((response) => {
        this.getPam()
      })
    },

    handleAdd() {
      this.dialogVisible = true
      this.isEdit = false
    },

    handleUpdate(index, row) {
      this.dialogVisible = true
      this.isEdit = true
      this.admin = Object.assign({}, row)
    },

    handleDialogConfirm() {
      this.$confirm('是否要确认?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (this.isEdit) {
          const arr = [
            { id: this.admin.id },
            { value: this.admin },
            { listQuery: this.listQuery }
          ]
          console.log(arr)
          // console.log(this.admin.id, this.listQuery);
          upPostman(arr).then((response) => {
            // console.log(response);
            this.list = response.data.items
            this.total = response.data.total
            // this.listLoading = false;
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.dialogVisible = false
            this.getPam()
          })
        } else {
          console.log(this.admin)
          addPostman(this.admin).then((response) => {
            this.$message({
              message: '添加成功！',
              type: 'success'
            })
            this.dialogVisible = false
            this.getPam()
          })
        }
      })
    },
    goPostman() {
      this.$router.push()
    }
  }
}
</script>

<style>
.box-card {
  margin: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.pagination-container {
  float: right;
  margin-right: 20px;
}
</style>

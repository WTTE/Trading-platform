<template>
  <el-container>
    <el-main>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="200px"
        class="demo-ruleForm"
      >
        <h3 style="margin-top: 20px">新增管理员</h3>

        <el-form-item label="管理员姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="管理员编号" prop="workNum">
          <el-input v-model="ruleForm.workNum"></el-input>
        </el-form-item>

        <el-form-item label="管理员等级" prop="authority">
          <el-select v-model="ruleForm.authority" placeholder="请选择职责">
            <el-option label="超级管理员" value="超级管理员"></el-option>
            <el-option label="普通管理员" value="普通管理员"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-select v-model="ruleForm.gender" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="联系方式" prop="phoneNum">
          <el-input v-model="ruleForm.phoneNum"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item label="活动时间" required>
          <el-col :span="4">
            <el-form-item prop="date1">
              <!-- 规范时间格式 -->
              <el-date-picker
                type="datetime"
                placeholder="选择日期"
                v-model="ruleForm.date"
                style="width: 100%"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="是否启用" prop="value">
          <el-radio-group v-model="ruleForm.value">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="0">不启用</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
import { addAdmin } from "@/api/admin";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        workNum: "",
        authority: "",
        gender: "",
        phoneNum: "",
        email: "",
        date1: "",
        value: "",
      },
      //表单校验规则
      rules: {
        name: [
          { required: true, message: "请输入管理员姓名", trigger: "blur" },
          { min: 1, max: 4, message: "长度在 1 到 4 个字符", trigger: "blur" },
        ],
        workNum: [
          { required: true, message: "请输入管理员编号", trigger: "blur" },
          { min: 6, max: 6, message: "长度为6位", trigger: "blur" },
        ],
        phoneNum: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
          { min: 11, max: 11, message: "长度为11位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addAdmin(this.ruleForm).then((response) => {
            // console.log("收到响应数据", response);
            this.$router.push("/permission/admin");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

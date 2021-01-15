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
        
        <el-form-item label="商品id" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="phoneName">
          <el-input v-model="ruleForm.phoneName"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="prize">
          <el-input v-model.number="ruleForm.prize"></el-input>
        </el-form-item>
        <el-form-item label="储存容量" prop="storage">
          <el-input v-model="ruleForm.storage"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="desc">
          <el-input v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="发布用户" prop="editor">
          <el-input v-model="ruleForm.editor"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="phoneNumber">
          <el-input v-model.number="ruleForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
import { addApple } from "@/api/apple";
export default {
  data() {
    //表单校验：检验是否是数字的方法
    var checkNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("信息不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 200);
    };
    //检验是否是电话的方法
    var checkPhoneNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("信息不能为空"));
      }
      if(!(/^1[34578]\d{9}$/.test(value))){
           callback(new Error("请输入正确的联系方式"));
        } else{
           callback();
        }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        }  else {
          callback();
        }
        
      }, 200);
    };
    return {
      ruleForm: {
        id: "",
        phoneName: "",
        prize: "",
        storage: "",
        desc: "",
        editor: "",
        phoneNumber:"",
       
      },
      //表单校验规则
      rules: {
        id: [
          { required: true, message: "请输入商品id", trigger: "blur" },
          { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: "blur" }
        ],
        phoneName: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        prize: [
          { required: true, validator: checkNumber, message: "请输入商品价格", trigger: "blur" }
        ],
        // click: [{ required: true, validator: checkNumber, trigger: "blur" }],
        storage: [
          { required: true, message: "请输入储存容量", trigger: "blur" }
        ],
        desc: [
          { required: true, message: "请输入商品描述", trigger: "blur" }
        ],
        editor: [
          {  message: "请输入发布用户", trigger: "blur", required: true }
        ],
        phoneNumber: [
          { validator: checkPhoneNumber,  trigger: "blur", required: true },

        ]
      }
    };
  },  
  methods: {
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          addApple(this.ruleForm).then(response => {
            this.$message({
                type: 'success',
                message: '提交成功',
                duration:1000
              });
            // console.log("收到响应数据", response);
            this.$router.push("/product/index");
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
    }
  }
};
</script>

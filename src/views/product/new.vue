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
        <div>苹果</div>
        <el-form-item label="商品id" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="商品摘要" prop="zhaiyao">
          <el-input v-model="ruleForm.zhaiyao"></el-input>
        </el-form-item>
        <el-form-item label="商品点击次数" prop="click">
          <el-input v-model.number="ruleForm.click"></el-input>
        </el-form-item>
        <el-form-item label="商品售价" prop="sell_price">
          <el-input v-model="ruleForm.sell_price"></el-input>
        </el-form-item>
        <el-form-item label="商品市场价格" prop="market_price">
          <el-input v-model="ruleForm.market_price"></el-input>
        </el-form-item>
        <el-form-item label="商品库存" prop="stock_quantity">
          <el-input v-model.number="ruleForm.stock_quantity"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
    return {
      ruleForm: {
        id: "",
        title: "",
        zhaiyao: "",
        sell_price: "",
        market_price: "",
        stock_quantity: "",
        click: "",
      },
      //表单校验规则
      rules: {
        id: [
          { required: true, message: "请输入商品id", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        title: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        zhaiyao: [
          { required: true, message: "请输入商品摘要", trigger: "blur" }
        ],
        click: [{ required: true, validator: checkNumber, trigger: "blur" }],
        sell_price: [
          { required: true, message: "请输入商品售价", trigger: "blur" }
        ],
        market_price: [
          { required: true, message: "请输入商品市场价格", trigger: "blur" }
        ],
        stock_quantity: [
          { validator: checkNumber, trigger: "blur", required: true }
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

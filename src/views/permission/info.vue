<!--使用v-permission和v-if根据当前用户的登录角色在页面显示不同的内容-->
<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
    <div :key="key" style="margin-top: 30px">
      <div v-permission="['admin']">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="基本信息"> </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.phone" style="width: 46%"></el-input>
          </el-form-item>
           <el-form-item label="姓名">
            <el-input v-model="form.name" style="width: 46%"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div v-permission="['editor']">
          <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="基本信息"> </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.phone1" style="width: 46%"></el-input>
          </el-form-item>
           <el-form-item label="姓名">
            <el-input v-model="form.name1" style="width: 46%"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="性别">
            <el-radio-group v-model="form.sex1">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>     
      </div>

      <div v-permission="['postman']">
         <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="基本信息"> </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.phone2" style="width: 46%"></el-input>
          </el-form-item>
           <el-form-item label="姓名">
            <el-input v-model="form.name2" style="width: 46%"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date2"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="性别">
            <el-radio-group v-model="form.sex2">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>            
      </div>
    </div>
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js";
import checkPermission from "@/utils/permission";
import SwitchRoles from "./components/SwitchRoles";

export default {
  name: "DirectivePermission",
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1, // 为了能每次切换权限的时候重新初始化指令,
      form: {
        name: "",
        date: "",
        sex: "",
        phone:"",
        name1:"",
        date1: "",
        sex1: "",
        phone1:"",
         name2:"",
        date2: "",
        sex2: "",
        phone2:""
      },
    };
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++;
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style >
</style>


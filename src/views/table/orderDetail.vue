<template>
 
 <div>
   <el-steps :active="2" align-center>
  <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
  </el-steps>
    <el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sign"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="prize"
      label="地址">
    </el-table-column>
  </el-table>
 </div>
       
       
     
 
</template>
<script>
export default {
     data () {
    return {
      list:null
    }
  },
  created () {
    this.list =  this.$route.query.op;
    
    
    console.log("19999999999999999",this.list); 

  },
  methods: {
    // handleEdit(){
    //   console.log(row,"fffffffffffffffffffff");
    // }
  }
}
</script>

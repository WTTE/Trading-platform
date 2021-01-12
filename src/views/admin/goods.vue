<template>
    <div>这是商品信息</div>
</template>
<script>
    import {getProductList} from '@/api/product'
    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.getProList();
        },
        methods:{
            async getProList(){
                let result = await getProductList();
                console.log(result);
            }
        }
    }
</script>
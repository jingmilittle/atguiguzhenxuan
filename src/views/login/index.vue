<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginforms">
                    <h1>Hello</h1>
                    <h2>欢迎来到净迷甄选</h2>
                    <el-form-item prop="username">
                        <el-input placeholder="请输入用户名" :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="请输入密码" :prefix-icon="Lock" v-model="loginForm.password"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading='loading' class="login_btn" type="primary" size="default"
                            @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { getTime } from '@/utils/Time'
let $router = useRouter();
let loading = ref(false)
let loginForm = reactive({
    username: 'admin',
    password: '123456'
})
//获取表单元素
let loginforms = ref()
const login = async () => {
    await loginforms.value.validate().catch(err => { console.log('验证没通过', err) })
    loading.value = true
    //通知仓库发请求
    try {
        //保证登录成功
        await useStore.userLogin(loginForm);
        $router.push('/')
        ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `HI,${getTime()}`
        })
        loading.value = false
    } catch (error) {
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
        loading.value = false
    }
}
const validataPassword = (rule: any, value: any, callback: any) => {
    //rule为校验规则对象
    //value为当前表单输入的值
    //callback符合条件通过 不符合条件 注入错误信息
    if (/^(?=.*[a-zA-Z\d]).{6,16}$/.test(value)) {
        callback();
    } else {
        callback(new Error('密码必须包含字母和数字且长度为6-16位'));
    }

}
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { required: true, min: 3, max: 16, message: '账户必须3-16位', trigger: 'change' },
    ],
    password: [
        // { required: true, message: '请输入密码', trigger: 'blur' },
        // { required: true, min: 6, max: 16, message: '密码必须3-16位', trigger: 'change' },
        { trigger: 'change', validator: validataPassword }
    ],
}

let useStore = useUserStore();
</script>
<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        //一分为二之后的盒子
        position: relative;
        top: 30vh;
        width: 60%;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            margin: 20px 0;
            color: white;
            font-size: 20px;
        }

        .login_btn {
            width: 100%;
        }

    }
}
</style>

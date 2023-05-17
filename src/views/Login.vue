<template>
    <div class="container">

        <div class="left">
            <!-- 左侧轮播图 -->
            <div class="carousel">
                <el-carousel indicator-position="outside" height="360px">
                    <el-carousel-item>
                        <div class="content">
                            <img src="@/assets/imgs/login/login1.png" height="210">
                            <div class="text">
                                <div class="big">开始学习新技能</div>
                                <div class="small">使用我们的应用程序，在舒适的家中学习几乎任何技能。</div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="content">
                            <img src="@/assets/imgs/login/login2.png" height="210">
                            <div class="text">
                                <div class="big">与导师联系</div>
                                <div class="small">您可以使用我们的平台轻松与数千名导师联系。
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="content">
                            <img src="@/assets/imgs/login/login3.png" height="210">
                            <div class="text">
                                <div class="big">完全灵活的时间表</div>
                                <div class="small">没有固定的时间表，您可以随时学习。</div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <div class="right">

            <!-- 返回按钮 -->
            <img class="image backButton" width="40" @click="goHome()"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/cc22544635359e556f508965420e9703.png" />

            <!-- 登录提示文字 -->
            <div class="title" v-if="isLogin">
                <div class="titleText">登录</div>
                <div class="tip">请在下面输入您的信息以登录您的帐户</div>
            </div>

            <!-- 注册提示文字 -->
            <div class="title" v-if="!isLogin">
                <div class="titleText">注册</div>
                <div class="tip">请向我们提供此信息以创建帐户</div>
            </div>

            <!-- 登录注册 -->
            <div class="login">

                <div class="inputGroup">
                    <div class="email loginItem">
                        <span class="emailText textItem">邮箱</span>
                        <div class="input">
                            <input class="emialInput inputItem" type="text" v-model="emailData">
                            <img class="emailImage imgItem" width="25"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16839932885110860950.png" />
                        </div>
                    </div>

                    <div class="password loginItem">
                        <span class="passwordText textItem">密码</span>
                        <span class="forgetPassword textItem" v-if="isLogin">忘记密码？</span>
                        <div class="input">
                            <input class="passwordInput inputItem" type="text" v-model="passwordData">
                            <img class="passwordImage imgItem" width="25"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16839932885015614408.png" />
                        </div>
                    </div>

                    <div class="confirmPassword loginItem" v-if="!isLogin">
                        <span class="passwordText textItem">确认密码</span>
                        <span class="forgetPassword textItem" v-if="isLogin">忘记密码？</span>
                        <div class="input">
                            <input class="passwordInput inputItem" type="text">
                            <img class="passwordImage imgItem" width="25"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16839932885015614408.png" />
                        </div>
                    </div>

                </div>
            </div>

            <div class="buttonGroup">

                <div class="signUp buttonItem" v-if="isLogin" @click="isLogin = false">
                    <div class="text">注册</div>
                    <img class="imageItem" width="8"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621966608102.png" />
                </div>

                <div class="loginIn buttonItem" v-if="isLogin" @click="loginHandle()">
                    <div class="text">登录</div>
                    <img class="imageItem" width="8"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621966608102.png" />
                </div>

                <div class="buttonItem" v-if="!isLogin" @click="isLogin = true">
                    <div class="text">返回登录</div>
                    <img class="imageItem" width="8"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621966608102.png" />
                </div>

                <div class="createAccount buttonItem" v-if="!isLogin">
                    <div class="text">创建账户</div>
                    <img class="imageItem" width="8"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621966608102.png" />
                </div>
            </div>

        </div>


    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'

const router = useRouter();

// 判断是在登录还是在注册
let isLogin = ref(true)

const goHome = () => {
    router.push("/home")
}

let emailData = ref()
let passwordData = ref()
const loginHandle = () => {
    if (!emailData.value || !passwordData.value) {
        ElMessage.error('账号或密码不能为空')
    }
    else if (emailData.value != "admin" && passwordData.value != "123456") {
        ElMessage.error('账号或密码错误')
    }
    else {
        localStorage.setItem("cookie", "true");
        router.push("/home")
    }
}
</script>

<style scoped>
@import url(@/style/views/Login.scss);
</style>

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
                                <div class="big">Start Learning New Skills</div>
                                <div class="small">Learn almost any skill from a comfort of your home with our app.</div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="content">
                            <img src="@/assets/imgs/login/login2.png" height="210">
                            <div class="text">
                                <div class="big">Connect With the Tutors</div>
                                <div class="small">You can easily connect with thousands of tutors by using our platform.
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="content">
                            <img src="@/assets/imgs/login/login3.png" height="210">
                            <div class="text">
                                <div class="big">Fully Flexible Schedule</div>
                                <div class="small">There is no set schedule and you can learn whenever you want to.</div>
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

            <!-- 提示文字 -->
            <div class="title">
                <div class="titleText">Login Now</div>
                <div class="tip">Please enter your information below in order to login to your account.</div>
            </div>

            <!-- 登录注册 -->
            <div class="login">

                <div class="inputGroup">
                    <div class="email loginItem">
                        <span class="emailText textItem">Email Address</span>
                        <div class="input">
                            <input class="emialInput inputItem" type="text">
                            <img class="emailImage imgItem" width="25"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16839932885110860950.png" />
                        </div>
                    </div>

                    <div class="password loginItem">
                        <span class="passwordText textItem">Password</span>
                        <span class="forgetPassword textItem">Forgot Password?</span>
                        <div class="input">
                            <input class="passwordInput inputItem" type="text">
                            <img class="passwordImage imgItem" width="25"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16839932885015614408.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="buttonGroup">
                <div class="loginIn buttonItem">
                    <div class="text">Login</div>
                    <img class="imageItem" width="8"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621966608102.png" />
                </div>
                <div class="signUp buttonItem">
                    <div class="text">Sigh Up</div>
                    <img class="imageItem" width="8"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621966608102.png" />
                </div>
            </div>

        </div>


    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => {
    router.push("/home")
}
</script>

<style scoped>
@import url(@/style/views/Login.scss);
</style>

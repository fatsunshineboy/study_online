<template>
    <div class="flex-col page">
        <div class="flex-row justify-between">
            <div id="left">

                <div id="info" class="flex-row items-center section space-x-197">
                    <img class="image"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621899878224.png" />
                    <div class="info">
                        <div class="name">John Smith</div>
                        <div class="identity">学生</div>
                    </div>
                    <img class="arrow image_3 image_4"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621966608102.png" />
                </div>
                <!-- 搜索框 -->
                <!-- <div class="search flex-row self-start space-x-32">
                <div class="flex-col justify-start items-start image-wrapper">
                    <img class="image_2"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998621993524527.png" />
                </div>
                <img class="image"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/cdf706f19be881670bb5e412bc0ae602.png" />
            </div> -->
                <div class="flex-col group navigator">
                    <div class="flex-row group_3">
                        <div class="flex-col section_2 space-y-38">
                            <div :class="{ button: checkedId === 1 }" class="flex-col justify-start items-start nav"
                                @click=changeNav(1)>
                                <img class="image_8"
                                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998622040960638.png" />
                                <span class="title">主页</span>
                            </div>
                            <div :class="{ button: checkedId === 2 }" class="flex-col justify-start items-start nav"
                                @click=changeNav(2)>
                                <img class="self-start image_8"
                                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998622026608258.png" />
                                <span class="title">课程</span>
                            </div>
                            <div :class="{ button: checkedId === 3 }" class="flex-col justify-start items-start nav"
                                @click=changeNav(3)>
                                <img class="self-start image_9"
                                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16838998622014720929.png" />
                                <span class="title">设置</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="content">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let checkedId = ref(1);

const changeNav = (id: number) => {
    switch (id) {
        case 1:
            router.push("/");
            checkedId.value = 1;
            break;
        case 2:
            router.push("/course");
            checkedId.value = 2;
            break;
        case 3:
            router.push("/setting");
            checkedId.value = 3;
            break;
        default:
            break;
    }
}
</script>

<style lang="scss" scoped>
@import url(@/style/views/Home.scss);
</style>

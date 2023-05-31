<template>
    <div class="setting">
        <div class="title">
            用户
        </div>

        <div class="personal">
            <div class="person">
                <div class="image">
                    <img width="100"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/16845969771744096799.png">
                </div>
                <div class="pro">
                    <div class="text">Pro</div>
                </div>
            </div>

            <div class="name">{{ userStore.name }}</div>
            <div class="email">{{ userStore.email }}</div>
        </div>

        <div class="settingItem">
            <div class="title">
                设置
            </div>

            <div class="item">
                <div class="icon">
                    <img width="45"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/ca34e626ac22be7fdc7c50d1e8421607.png">
                </div>
                <div class="itemText">
                    <div class="itemTitle">成就</div>
                    <div class="introduce">本月您收到了 10 个新徽章。</div>
                </div>
            </div>

            <div class="item">
                <div class="icon">
                    <img width="45"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/2e42bfcc3370f198bf8a1dc54389d705.png">
                </div>
                <div class="itemText">
                    <div class="itemTitle">通知</div>
                    <div class="introduce">管理我们向您发送所有通知和警报的方式。</div>
                </div>
            </div>

            <div class="item">
                <div class="icon">
                    <img width="45"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645a6ddf5a7e3f0310fb6153/645e45b854fe000011615674/37ff2b36fc4e59dacf32428172b42c0e.png">
                </div>
                <div class="itemText">
                    <div class="itemTitle">付款详情</div>
                    <div class="introduce">您有 1 张尾号为 6789 的卡链接到您的帐户。</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
</script>

<style style="scss" scoped>
@import url(@/style/views/Setting.scss);
</style>

<template>
    <div class="setting">
        <div class="title">
            用户
        </div>

        <div class="personal">
            <div class="person">
                <div class="image">
                    <img width="100" :src="userStore.imageUrl">
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
                    <img width="45" src="@/assets/imgs/user/achievement.png">
                </div>
                <div class="itemText">
                    <div class="itemTitle">成就</div>
                    <div class="introduce">本月您收到了 10 个新徽章。</div>
                </div>
            </div>

            <div class="item">
                <div class="icon">
                    <img width="45" src="@/assets/imgs/user/notice.png">
                </div>
                <div class="itemText">
                    <div class="itemTitle">通知</div>
                    <div class="introduce">管理我们向您发送所有通知和警报的方式。</div>
                </div>
            </div>

            <div class="item">
                <div class="icon">
                    <img width="45" src="@/assets/imgs/user/pay.png">
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

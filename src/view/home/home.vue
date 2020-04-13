<template>
    <div class="main-box">
        <router-link to='/translate'>translate</router-link>
        <router-link to='/circle'>echarts</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<style>
.main-box {
    font-size: 12px;
}
</style>
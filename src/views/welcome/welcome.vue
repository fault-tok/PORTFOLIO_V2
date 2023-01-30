<template>
    <div>
        <div class="navbar-top">
            <div class="nav-content">
                <!-- <div class="desktop-logo">
                    HOME
                </div>
                <div class="flex-grap">

                </div>
                <div class="menu-bar">
                    ABOUT
                </div>
                <div class="menu-bar">
                    ABOUT
                </div>
                <div class="menu-bar">
                    ABOUT
                </div> -->
            </div>
        </div>
        <div class="container">
            
        </div>
    </div>
</template>
<script setup>
import MainLayout from "@/components/layout/main.vue"
</script>
<style lang="css" scoped>
.container{
    width: 100%;
    padding: auto 10%;
    height: 5000px;
}
.navbar-top{
    width: 100%;
    height: 80px;
    background-color: #2e2f34;
    position: fixed;
    top: 0;
    z-index: 999;
}
.navbar-top .nav-content{
    display: flex;
    flex-direction: row;
    align-items:center;
    height: 100%;
    padding-right: 5%;
    padding-left: 5%;
}
.desktop-logo{
    position: relative;
    width: 180px;
    text-align: center;
}
.menu-bar{
    position: relative;
    width: 130px;
    text-align: center;
}
.flex-grap{
    width: 35%;
}
</style>
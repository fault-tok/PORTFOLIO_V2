<template>
    <div>
        <div id="nav-top" class="navbar-top" v-if="navbar_top == false">
            <div class="nav-content">
                <div class="desktop-logo">
                    <img                    
                        src="../../assets/images/apple-logo.png"
                        @click="slide_to_top()"
                    />
                </div>
                <!-- <div class="flex-grap">

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
            <div class="navbar-top-main">
                <div class="navbar-content-main">
                    <div class="navbar-top-left">
                        <div class="desktop-logo">
                            <img
                                src="../../assets/images/apple-logo.png"
                            />
                        </div>
                    </div>
                    <div class="navbar-top-right">
                        <div class="social-contact">
                            <div class="social-icon">
                                <div class="icon">
                                    <img
                                        src="../../assets/images/icons/facebook.png"
                                    />
                                </div>
                                <div class="icon">
                                    <img
                                        src="../../assets/images/icons/instagram.png"
                                    />
                                </div>
                                <div class="icon">
                                    <img
                                        src="../../assets/images/icons/github.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>            
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";

const navbar_top = ref(false);

const scroll_bar_top = () => {
    const navbar_top_doc = document.getElementById("nav-top").style
    if(document.documentElement.scrollTop > 180){ 
        navbar_top_doc.display = "block";
        navbar_top_doc.backgroundColor = 'rgba(5, 58, 104, 0.8)'
    } else {
        navbar_top_doc.display = "none";
        navbar_top_doc.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
    // console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
}

const display_navbar_top = () => {
    if(document.documentElement.scrollTop == 0){
        document.getElementById("nav-top").style.display = 'none'
    }   
}

const slide_to_top = () => {
    document.documentElement.scrollTop = 0    
}


onMounted(() => {
    display_navbar_top();
}),

window.onscroll = scroll_bar_top

</script>
<style lang="css" scoped>
.container{
    width: 100vw;
    height: 5000px;
}
.navbar-top-main{
    width: 100%;
    height: 80px;
}
.navbar-top-main .navbar-content-main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    height: 100%;
    margin-top: 20px;
    padding-right: 3%;
    padding-left: 3%;
}
.navbar-top-main .navbar-content-main .navbar-top-left{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;   
}
.navbar-top-main .navbar-content-main .navbar-top-right{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.navbar-top{
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    z-index: 999;
}
.navbar-top .nav-content{
    display: flex;
    flex-direction: row;
    align-items:center;
    height: 100%;
    padding-right: 3%;
    padding-left: 3%;
}
.desktop-logo{
    position: relative;
    width: 180px;
    text-align: center;    
}
.desktop-logo img{
    width: 90px;
    height: 50px;
    cursor: pointer;
}
.social-contact{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: row-reverse;
}
.social-icon{
    display: flex;
}
.icon{
    display: flex;
    margin: 0 15px;
}
.icon > img {
    width: 25px;
    height: 25px;
    cursor: pointer;
}
</style>
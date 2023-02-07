<template>
    <div>
        <div id="navbar-top-main" class="navbar-top-main">
                <div class="navbar-content-main">
                    <div class="navbar-top-left">
                        <div class="desktop-logo">
                            <img
                                src="../../assets/images/apple-logo.png"
                            />
                        </div>
                        <div class="menu-bar">
                            <btnMenu
                                text="HOME"
                            />
                            <btnMenu
                                text="ABOUT ME"
                                href="#aboutme"
                            />
                            <btnMenu
                                text="SKILL"
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
        <div class="container">            
            <section class="main">
                <HeaderText/>
            </section>
            <section id="aboutme">
                <div class="aboutme">
                    sss
                </div>
            </section>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import HeaderText from "../../components/header.vue";
import btnMenu from "../../components/button/btn-menu.vue";

const scroll_bar_top = () => {
    const navbar_top_doc = document.getElementById("navbar-top-main")
    if(document.body.scrollTop > 140 || document.documentElement.scrollTop > 140){ 
        navbar_top_doc.style.position = 'fixed';
        navbar_top_doc.style.backgroundColor = 'rgba(200, 200, 200, 0.65)'; 
        navbar_top_doc.classList.add('navbar-top-main-animation');
    } else {
        navbar_top_doc.style.position = 'fixed';
        navbar_top_doc.style.backgroundColor = 'rgba(255, 255, 255, 1)';  
        navbar_top_doc.classList.remove('navbar-top-main-animation');
    }
}

const display_navbar_top = () => {
    if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
        document.getElementById("navbar-top-main").style.position = 'fixed';
    }   
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
    margin-top: 80px;
}
.navbar-top-main{
    width: 100%;
    height: 80px;
    top: 0;
}
.navbar-top-main-animation{
    width: 100%;
    height: 80px;
    top: 0;
    animation-name: navbar-move;
    animation-duration: .8s;
}
.navbar-content-main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    height: 100%;
    padding-right: 3%;
    padding-left: 3%;
}
.navbar-top-left{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;   
}
.navbar-top-right{
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
    transition: all .5s ease-in-out;
}
.nav-content{
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
.main{
    width: 100%;
    height: auto;
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: rgb(29, 29, 29);
}
.aboutme{
    
}

.menu-bar{
    display: flex;
    flex-direction: row;
}

@keyframes navbar-move {
    from{top: 40px}
    to{top: 0}
}
</style>
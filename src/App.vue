<template>
	<router-view></router-view>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const welcome_web = () => {
  router.push({ name : "welcome" });
}

onMounted(() => {
  welcome_web();
})
</script>
<style lang="css" scoped>
  
</style>
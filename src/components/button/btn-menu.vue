<template>
    <div>
        <a :href="props.href" class="btn-main">
            {{ props.text }}
        </a>
    </div>
</template>
<script setup>

const props = defineProps({
	text: String,
    href: String,
});

console.log(props.href);

</script>
<style lang="css" scoped>
.btn-main{
    margin: 0 20px;
    cursor: pointer;
    color: #000000;
}
</style>
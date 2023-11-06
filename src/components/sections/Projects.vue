<template>
    <div class="projects">
        <h1 class="title">PROJECTS</h1>
     <File></File>
    </div>
</template>

<script setup>
import File from './File.vue'
</script>

<style scoped>

.projects{
    background: linear-gradient(var(--bgColor), var(--primaryColor));
    height: 100vh;
    width:100%;
padding: var(--paddingPage);
}

.title {
    display: flex;
    font-family: 'Handjet', sans-serif;

}

</style>

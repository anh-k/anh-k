<template>
  <div class="file">
    <div class="line"></div>
    <div class="content">
        <h3>[Title]</h3>
        <p>text</p>
        <a class="button" href="">Here</a>
    </div>
    <div class="line"></div>
    <div class="content">
        <h3>[Title]</h3>
        <p>text</p>
        <a class="button" href="">Here</a>
    </div>
    <div class="line"></div>
    <div class="content">
        <h3>[Title]</h3>
        <p>text</p>
        <a class="button" href="">Here</a>
    </div>
    <div class="line"></div>
    <div class="content">
        <h3>[Title]</h3>
        <p>text</p>
        <a class="button" href="">Here</a>
    </div>
    <div class="line"></div>
    <div class="content">
        <h3>[Title]</h3>
        <p>text</p>
        <a class="button" href="">Here</a>
    </div>
    <div class="line"></div>
  </div>
  
</template>

<script setup>
const items = [{

}]
</script>

<style scoped>
.file {
    width: 60%;
    height: 300px;
    font-weight: bolder;
    margin: var(--m-sizing) 0;
}

.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--m-sizing) 0;
}

.line {
    width: 1000px;
    border: solid 0.5px var(--whiteColor);
}

.button {
    padding: 12px 36px;
    border: solid 1px var(--whiteColor);
    background-color: transparent;
    color: var(--whiteColor);
    text-decoration: none;
    transition: 0.5s ease;
}

.button:hover{
    background-color: var(--primaryColor);
    color: var(--whiteColor);
}
</style>

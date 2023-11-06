<template>
<Header></Header>


<hero/>
<Projects></Projects>
<Skills></Skills>
          
        
</template>
<script setup>
import Hero from './components/sections/Hero.vue'
import Header from './components/global/Header.vue'
import Projects from './components/sections/Projects.vue'
import Skills from './components/sections/Skills.vue'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>
<style scoped>
@import './library.scss';

</style>
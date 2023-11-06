<template>
  <div class="hero">
    <kinesis-container>
   
      <kinesis-element :strength="20">
        <div class="name">
            <h2>ANH-K</h2><h3 class="point">.</h3>
        </div>
        
      </kinesis-element>
    
      <kinesis-element :strength="10">
        <vue-typewriter-effect :strings="['UI / UX Designer', 'Front Developer']" class="subtitle" />  
       
      </kinesis-element>
      
    </kinesis-container>
  </div>
</template>

<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
</script>

<style scoped>
@import "./../../library.scss";

.name {
    display: flex;
    font-size: 200px;
}


.point {
    align-self: end;
    color: var(--primaryColor);
}


h2 {
  font-size: 300px;
  font-family: "Ysabeau SC", sans-serif;
  background: var(--gradientText);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: fadeIn 2s;
}

.subtitle {
  text-transform: uppercase;
  font-size: 12px;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

</style>

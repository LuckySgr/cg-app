<template>
  <div class="login_container">
    <div class="login_box">
      <p class="font_container">Welcome To</p>
      <p class="font_container">Computer Graphics</p>
      <p class="font_container">ApplicationFramework</p>
      <div class="btn_container" @click="startContainer()">Start</div>
    </div>
  </div>
</template>

<script setup>

import {message} from 'ant-design-vue';
import {useRouter} from "vue-router";

const router = useRouter();
const startContainer = () => {
  window.sessionStorage.setItem('startActivation', 'goHome')
  message.success('Welcome To Computer Graphics ApplicationFramework')
  router.push('/Home')
}
</script>

<style scoped>

.login_container {
  height: 100%;
  background-image: url("../assets/loginImg/featherFrontCover.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.login_box {
  width: 580px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.font_container {
  text-align: center;
  font-family: Lora, serif;
  letter-spacing: 0.2em;
  color: white;
  font-size: 250%;
  text-shadow: 0 2px 2px black;
}

.btn_container {
  width: 150px;
  cursor: pointer;
  border: 1px white solid;
  border-radius: 25px;
  position: absolute;
  left: 50%;
  top: 130%;
  transform: translate(-50%, -50%);

  font-family: Lora, serif;
  color: white;
  text-align: center;
  font-size: 200%;
  text-shadow: 0 2px 2px black;
}

</style>
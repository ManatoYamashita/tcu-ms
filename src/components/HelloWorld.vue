<script setup>
import { RouterLink, RouterView } from 'vue-router';
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <!-- カバー画像を配置 -->
    <img src="@/assets/ms-joinus.png" alt="cover" />
    <RouterLink to="/about" id="aboutmore">About more</RouterLink>
    <h2>{{ msg }}</h2>
    <p>映像研では定期活動を通し 自主制作映像を撮影•編集しています！
      2022年6月6日にできたばかりの若い団体です 一緒に映像研を盛り上げましょう！</p>
  </div>
</template>

<style scoped>
#aboutmore {
  color: #f2f2f2;
  background-color: #AB1F24;
  border-radius: 15px;
  padding: 10px 20px;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

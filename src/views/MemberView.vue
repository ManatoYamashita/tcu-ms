<template>
  <main class="contents members">
    <h2>Members</h2>
    <p>映像研究会の仲間たちを紹介します。</p>
      <div class="mem mem-1">
        <h3>浦川悠作</h3>
        <p><small>映像研究会 2023 会長</small><br>

        <img src="@/assets/watermelon.png" alt="urakawa" class="prof-img">
          後ろ向きに歩...
        </p>
      </div>
      <div class="mem mem-2">
        <h3>驢馬智樹</h3>
        <p><small>会計</small><br>

        <img src="@/assets/tomoki.png" alt="tomoki" class="prof-img">
          散歩を昼間か...
        </p>
      </div>
    </main>
</template>

<style>
  main {
    padding: 10px 20px;
  }
  h2 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  p {
    padding: 10px 10px;
  }
  .mem {
    text-align: center;
    width: 300px;
    padding: 10px 10px;
    border-radius: 15px;
    background-color: #3a3a3a;
    margin: 10px 0;
  }
  .mem h3 {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0;
  }
  .mem p {
    font-size: 1rem;
    padding: 0;
    margin: 0;
  }
  .prof-img {
    width: 150px;
    border-radius: 50%;
    margin: 10px 0;
  }
</style>

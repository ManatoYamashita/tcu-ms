<template>
  <main class="cotents works">
    <h2>Works</h2>
    <p>映像研究会が制作した映像作品を紹介します。</p>
    <div class="movies">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Iffnu-BnBek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9y0Qv5EOCS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LnKPG9_LO_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Rlt4eLSdQb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Hn-SfCsLUXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </main>
</template>

<style scoped>
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
  div.movies {
/* 平行に並べて、スクロールできるようにする。 */
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 10px;
    padding: 10px;
  }
  div.movies iframe {
    padding: 0 10px;
  }
</style>

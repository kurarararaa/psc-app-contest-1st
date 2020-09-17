<template>
  <div class="usefulness-container">
    <div class="grid_12">
      <h1 class="title">
        有益性
      </h1>
    </div>
    <div class="clear"></div>
    <div class="grid_9">
      <div class="posts">
        <p>
          完成度: 8.09
        </p>
        <p class="delay1">
          アイデア: 6.27
        </p>
        <p class="delay2">
          UX: 7.36
        </p>
      </div>
    </div>
    <div class="grid_3">
      <ul>
        <li>有益性</li>
        <li></li>
        <li style="font-size: 3em;">7.27</li>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Nova + Square);

p,
h1,
ul {
  background-color: #eee;
  color: #555;
  padding: 10px;
  box-shadow: 0 1px 5px #aaa;
}

.usefulness-container {
  width: 40%;
  font-family: 'Nova Square', cursive;
}

a {
  color: #7af;
}

.posts p {
  border-top: 5px solid #a47;
  animation: 2s fadein, 0.4s slidein cubic-bezier(0.64, 0.66, 0.82, 1.21);
  animation-fill-mode: forwards;
  opacity: 0;
  position: relative;
}

.grid_9 {
  margin-top: 4em;
}

.title {
  font-size: 2em;
  background-color: #222;
  color: #aaa;
  border-radius: 5px;
  text-shadow: 0 0 10px #111;
  box-shadow: 0 2px 10px #777;
  position: relative;
  top: -80px;
  margin-bottom: -10px;
  animation: 2s breakdown;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

.grid_3 {
  opacity: 0;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  animation: 2s fadein;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

.delay1 {
  animation-delay: 0.5s !important;
}

.delay2 {
  animation-delay: 1s !important;
}

@keyframes breakdown {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(0deg);
    top: -30px;
  }
  30% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(-2deg);
    top: -30px;
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slidein {
  0% {
    left: 300px;
  }
  100% {
    left: 0;
  }
}

li {
  list-style: none;
  border-left: 4px solid #7af;
  padding-left: 5px;
  margin-bottom: 5px;
}

.footer {
  background-color: #edf;
  border: 1px solid #bbb;
  border-radius: 10px;
  height: 3.5em;
}
</style>

<template>
  <div class="ux-container">
    <div class="left">
      <p class="red">完成度:</p>
      <p class="score">8.27</p>
      <p class="red">アイデア:</p>
      <p class="score">6.27</p>
      <p class="red">有益性:</p>
      <p class="score">6.27</p>
    </div>
    <div class="right">
      <h1 class="blue first">ux: 8.36</h1>
      <h1 class="red second">ux: 8.36</h1>
      <h1 class="yellow third">ux: 8.36</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$blue: #0091e5;
$red: #e42149;
$yellow: #fff146;

.ux-container {
  color: #0091e5 !important;
  font-family: 'Arimo', sans-serif;
  background: none !important;
}

.score {
  color: #666;
  margin-left: 8em;
}

.left {
  mix-blend-mode: multiply;
  width: 30%;
  line-height: 1.5em;
  position: absolute;
  bottom: 30px;
  left: 50%;
  font-size: 2em;
}

.right {
  position: absolute;
  bottom: -100px;
  right: 50px;
  font-size: 0.9em;
}

p {
  margin: 0;
  &.red {
    font-weight: bold;
  }
}

a {
  color: $red;
  font-weight: bold;
  text-decoration: none;
  padding: 7px 5px;
  margin: -7px -5px;
  transition: 0.3s;
  &:hover {
    background-color: $yellow;
  }
}

h1 {
  font-size: 12em;
  text-transform: uppercase;
  letter-spacing: -0.1em;
  position: fixed;
  transform: rotate(-90deg) translate(30%, -40%);
  transform-origin: left;
  mix-blend-mode: multiply;
}

//Colors

.blue {
  color: $blue;
  background: none !important;
}

.red {
  color: $red;
  background: none !important;
}

.yellow {
  color: $yellow;
  background: none !important;
}

//Rotate and nudge

.first {
  transform: rotate(-90deg) translate(30%, -40%);
}

.second {
  transform: rotate(-90deg) translate(32.5%, -40%);
}

.third {
  transform: rotate(-90deg) translate(35%, -40%);
}
</style>

<template>
  <div class="ux-container">
    <div class="left">
      <p class="red">完成度:</p>
      <p>8.38</p>
      <p class="red">アイデア:</p>
      <p>6.75</p>
      <p class="red">有益性:</p>
      <p>6.75</p>
    </div>
    <div class="right">
      <h1 class="blue first">ux: 8.75</h1>
      <h1 class="red second">ux: 8.75</h1>
      <h1 class="yellow third">ux: 8.75</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$blue: #0091e5;
$red: #e42149;
$yellow: #fff146;

.ux-container {
  color: #0091e5;
  font-family: 'Arimo', sans-serif;
  background: none !important;
}

.left {
  mix-blend-mode: multiply;
  width: 30%;
  line-height: 1.5em;
  position: absolute;
  bottom: 30px;
  left: 40%;
  font-size: 2em;
}

.right {
  position: absolute;
  bottom: 180px;
  right: 0;
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

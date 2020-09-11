<template>
  <div class="plate">
    <p class="script"><span>The Completeness</span></p>
    <p class="shadow text1">Completeness:</p>
    <p class="shadow text2">8.55</p>
    <p class="shadow text1">Idea: 6.45</p>
    <p class="shadow text1">Ux: 7.73</p>
    <p class="shadow text1">Usefulness: 7.27</p>
    <p></p>
    <p class="script"></p>
  </div>
</template>

<style scoped>
/* Ibrahim Jabbari -- www.ibrahimjabbari.com */
.plate {
  background-color: #fff;
  width: 610px;
  margin: 10% auto;
}
.shadow {
  color: #222;
  font-family: Arvo, cursive;
  font-weight: bold;
  text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff,
    3px 3px 0 #fff, 4px 4px 0 #222, 5px 5px 0 #222, 6px 6px 0 #222,
    7px 7px 0 #222;
  line-height: 0.8em;
  letter-spacing: 0.1em;
  transform: scaleY(0.7);
  -webkit-transform: scaleY(0.7);
  -moz-transform: scaleY(0.7);
  margin: 0;
  text-align: center;
}
.script {
  font-family: 'Seaweed Script', cursive;
  color: #222;
  text-align: center;
  font-size: 40px;
  position: relative;
  margin: 0;
  z-index: 0;
}
.script span {
  background-color: #fff;
  padding: 0 0.3em;
}
.script::before {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  top: 50%;
  width: 100%;
  border-bottom: 3px solid #222;
}
.text1 {
  font-size: 60px;
}
.text2 {
  font-size: 169px;
}
.text3 {
  font-size: 100px;
}
</style>

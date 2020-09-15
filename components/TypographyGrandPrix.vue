<template>
  <div class="container">
    <div class="main gp-black">
      Total score is...
    </div>
    <div class="alt gp-black shake-constant shake-slow">
      30.36
    </div>
    <div class="cursive and gp-red">
      Flutter App Contest
    </div>
    <div class="main gp-black">
      A contest sponsored by
    </div>
    <div class="alt gp-black">
      People Software
    </div>
    <div class="main gp-black space">
      The first
    </div>
    <div class="cursive nut gp-red">
      2019 - 2020
    </div>
    <div class="main gp-black">
      Grand Prix is...
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://csshake.surge.sh/csshake-slow.min.css',
        },
      ],
    }
  },
}
</script>

<style scoped>
div {
  color: #444 !important;
  text-align: center;
}

.container {
  background-color: white;
  margin: 0;
  padding: 0;
  width: 40%;
  height: 80%;
  background-image: repeating-linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px,
      transparent 60px
    ),
    repeating-linear-gradient(
      60deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px,
      transparent 60px
    ),
    linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.05) 75%,
      rgba(0, 0, 0, 0.05)
    ),
    linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.05) 75%,
      rgba(0, 0, 0, 0.05)
    );
  background-size: 70px 120px;
  background-repeat: repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.cursive {
  font-family: 'Sacramento', cursive;
}

.gp-black {
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  z-index: 10;
}

.main {
  font-family: 'Raleway', sans-serif;
  font-size: 26px;
  line-height: 20px;
}

.alt {
  font-family: 'Oswald', sans-serif;
  font-size: 46px;
  line-height: 60px;
}

.gp-red {
  color: #d42c2c !important;
  position: relative;
  z-index: 1;
}

.space {
  margin-top: 20px;
}

.and {
  margin-top: 15px;
  font-size: 90px;
  line-height: 10px;
}

.nut {
  font-size: 70px;
  line-height: 55px;
}
</style>

<template>
  <footer>
    <Logo/>
      <a href="https://github.com/dku19jam" target="_blank">
        (c){{ new Date().getFullYear() }} DKU19JAM
      </a>
  </footer>
</template>

<script>
import Logo from "~/components/Logo";

export default {
  name: "Footer",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>

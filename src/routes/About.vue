<template lang="html">
  <div class="about">
    <div class="photo">
      <Loader v-if="imageLoading" absolute></Loader>
      <img :src="image" :alt="name" />
    </div>
    <div class="name">{{ name }}</div>
    <div>{{ email }}</div>
    <a :href="github">{{ github }}</a>
    <div>{{ phone }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Loader from "~/components/Loader";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      imageLoading: true,
    };
  },
  computed: {
    jam() {

    },
    ...mapState("about", ["image", "name", "email", "github", "phone"]),
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.$loadImage(this.image);
      this.imageLoading = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 70%;
      position: relative;
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>

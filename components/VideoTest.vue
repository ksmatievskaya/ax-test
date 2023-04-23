<script setup>
    import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.vue';

    const isOpened = ref(false);

      const updateIsOpened = (value) => {
          isOpened.value = value;  
      };

</script>

<template>
    <div class="boulvard-video">
        <div class="scrolly-video-container">
            <ScrollyVideo src="../static/artlife.mp4" />
        </div>
        <div class="boulevard-video__content">
      <BurgerMenuNav :isOpened="isOpened" @close="isOpened = false" />
        <div class="boulevard-video__top">
          <img class="boulevard-video__logo" src="../static/boulevardLogo.svg" alt="artlife logo">
          <BurgerMenu :isOpened="isOpened" @update:isOpened="updateIsOpened" />
        </div>
        <div class="boulevard-video__text-box_container">
            <div class="boulevar-video__text-box">
            <div class="boulevard-video__subtitle">your personal</div>
            <div class="boulevard-video__title">
                French style
                <br/>
                BOULEVARD
            </div>
            </div>
        </div>

        <div class="boulevard-video__scroll-img_container">
          <img class="boulevard-video__scroll-img" src="../static/scrollTo.svg" alt="scroll to navigate">
        </div>
      </div>
    </div>
</template>

<style scoped>
.scrolly-video-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 300vh;
  width: 100%;
}
</style>
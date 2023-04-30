<template>
  <video src="../static/artlife.mp4" playsinline="true" webkit-playsinline="true" preload="auto" muted="muted" class="boulevard-video__video"></video>

  <div class="boulevard-video__container">
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

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default {
  name: "BoulevardVideo",
  setup() {
    const isOpened = ref(false);

    const updateIsOpened = (value) => {
        isOpened.value = value;  
    };

    onMounted(() => {
      const video = document.querySelector(".boulevard-video__video");
      let src = video.currentSrc || video.src;

      // функция для активации видео на IOS
      function activateTouch(el, event, fn, opts) {
      var activateFn = function (e) {
        el.removeEventListener(event, activateFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, activateFn, opts);
      return activateFn;
      }

      activateTouch(document.documentElement, "touchstart", function (e) {
      video.play();
      video.pause();
      });

    // создание таймлайна для контроля скролла с помощью ScrollTrigger

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: ".boulevard-video__container",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
    });

    // таймлайн для IOS

    activateTouch(video, "loadedmetadata", () => {
    tl.fromTo(
      video,
      {
        currentTime: 0
      },
      {
        currentTime: video.duration || 1
      }
    );
    });

    // перевод видео в Blob для кастомизации показываемого видео (т.е. проигрывания на скролл)
    setTimeout(function () {
    if (window["fetch"]) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          var blobURL = URL.createObjectURL(response);

          var sec = video.currentTime;
          activateTouch(document.documentElement, "touchstart", function (e) {
            video.play();
            video.pause();
          });

          video.setAttribute("src", blobURL);
          video.currentTime = sec + 0.01;
        });
    }
    }, 1000);
    }) 

    return { isOpened, updateIsOpened };
  }
}
</script>
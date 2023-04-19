<template>
   
      <div class="boulevard-video__background">
        <div class="boulevard-video__video-container">
            <video src="../static/artlife.mp4" type="video/mp4" id="bgVideo" class="boulevard-video__video">
          <!-- <source src="../static/artlife.mp4" type="video/mp4" /> -->
            </video>
        </div>

    </div>

    <div class="boulevard-video__content">
        <div class="boulevard-video__top">
          <img class="boulevard-video__logo" src="../static/boulevardLogo.svg" alt="artlife logo">
          <BurgerMenu/>
        </div>
        <div class="boulevar-video__text-box">
          <div class="boulevard-video__subtitle">your personal</div>
          <div class="boulevard-video__title">
            French style
            <br/>
            BOULEVARD
          </div>
        </div>

        <div class="boulevard-video__scroll-img_container">
          <img class="boulevard-video__scroll-img" src="../static/scrollTo.svg" alt="scroll to navigate">
        </div>
      </div>
    <div id="scroll-container" class="scroll-container">
    <section class="ste">
      <div>

      </div>
    </section>
    <section class="ste">
      <div>
        
      </div>
    </section>
    <section class="ste">
      <div>
        
      </div>
    </section>
    <section class="ste">
      <div>
        
      </div>
    </section>
    <section class="ste">
      <div>
        
      </div>
    </section>
    <section class="ste">
      <div>
        
      </div>
    </section>
    <section class="ste">
      <div>
        
      </div>
    </section>

  </div>
  
  </template>


<script>
import BurgerMenu from './BurgerMenu.vue';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';



export default {
    name: "BoulevardVideo",
    components: { BurgerMenu },
    mounted() {
          gsap.registerPlugin(ScrollTrigger);
    const bgVideo = document.querySelector("#bgVideo");
    bgVideo.pause();
    bgVideo.currentTime = 0;
    let sections = gsap.utils.toArray(".ste");
    sections.forEach((step, i) => {
        ScrollTrigger.create({
            trigger: step,
            start: "bottom bottom",
            end: "+=1000",
            pin: true,
            anticipatePin: 1,
        });
        gsap.fromTo(bgVideo, { currentTime: i * 3 }, {
            scrollTrigger: {
                trigger: step,
                scrub: 0.5,
                start: "top bottom",
                end: "bottom bottom",
            },
            currentTime: 3 * (i + 1),
            duration: 1,
            ease: "none",
        });
    });
    gsap.to("#bgVideo", {
        scrollTrigger: {
            scrub: true
        },
        // scale: 1.5
    })
    
}
}
</script>
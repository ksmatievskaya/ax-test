<template>
    <!-- <div id="background-container" class="background-container">
    <div id="video-container" class="video-container">
      <video src="../static/artlife.mp4" type="video/mp4" id="bgVideo"></video>
    </div>
  </div>
  <div id="scroll-container" class="scroll-container">
    <section id="step0" class="step">
      <div>
        <h3>Hello</h3>
      </div>
    </section>
    <section class="step">
      <div>
        <h3>My</h3>
      </div>
    </section>
    <section class="step">
      <div>
        <h3>Name</h3>
      </div>
    </section>
    <section class="step">
      <div>
        <h3>Is</h3>
      </div>
    </section>
    <section class="step">
      <div>
        <h3>Rahul</h3>
      </div>
    </section>
    <section class="step">
      <div>
        <h3>jangid</h3>
      </div>
    </section>
    <section class="step">
      <div>
        <h3>Thanks</h3>
      </div>
    </section>
  </div> -->
  <video class="video" playsinline="true" webkit-playsinline="true" preload="auto" muted="muted">
  <source src="../static/artlife.mp4" type="video/mp4" />
</video>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';



export default {
    name: "TestVideo",
    mounted() {
//         gsap.registerPlugin(ScrollTrigger);
// const bgVideo = document.querySelector("#bgVideo");
// bgVideo.pause();
// bgVideo.currentTime = 0;
// let sections = gsap.utils.toArray(".step");
// sections.forEach((step, i) => {
//     ScrollTrigger.create({
//         trigger: step,
//         start: "bottom bottom",
//         end: "+=1000",
//         pin: true,
//         anticipatePin: 1,
//     });
//     gsap.fromTo(bgVideo, { currentTime: 3 * i }, {
//         scrollTrigger: {
//             trigger: step,
//             scrub: 2,
//             start: "top bottom",
//             end: "bottom bottom",
//         },
//         currentTime: 3 * (i + 1),
//         duration: 1,
//         ease: "none",
//     });
// });
// gsap.to("#bgVideo", {
//     scrollTrigger: {
//         scrub: true
//     },
//     scale: 1.5
// })

gsap.registerPlugin(ScrollTrigger);

const coolVideo = document.querySelector("video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top top",
    end: "bottom+=200% bottom",
    scrub: true,
    markers: true
  }
});

// wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
coolVideo.onloadedmetadata = function () {
  tl.to(coolVideo, { currentTime: coolVideo.duration });
};
    }
}
</script>
<template>
    <div class="apartments__container">
        <BurgerMenuNav :isOpened="isOpened" @close="isOpened = false"/>
        <section class="apartments">
        <img class="apartments__bg-day" :src="apartmentsBg" alt="day apartments">
       
        <div class="apartments__content">
            
          
            <div class="apartments__content_top">
                <img class="apartments__logo" src="../static/boulevardLogo.svg" alt="logo">

                <div class="apartments__content_btns">
                    <div @click="handleMove" class="apartments__toggle">
                        <img class="apartments__toggle_img" src="../static/dayToggle.svg" alt="day">
                        <img class="apartments__toggle_img" src="../static/nightToggle.svg" alt="night">
                        <div  class="apartments__toggle_btn"></div>
                    </div>
                    <BurgerMenu :isOpened="isOpened" @update:isOpened="updateIsOpened"/>
                </div>
            </div>

            <!-- <div class="apartments__compas-container"> -->
                <img class="apartments__compas" src="../static/compas.svg" alt="compas north">
            <!-- </div> -->

            <template v-if="isBoulevardView">
                <div class="apartments__cont">
                    <div class="apartments__overlay-container">
                        <div class="apartments__letter-A">A</div>
                        <div class="apartments__letter-B">B</div>
                        <div class="apartments__letter-G">G</div>
                        <div class="apartments__letter-D">D</div>
                        <div @click="handleOverlay" class="apartments__overlay-b"></div>
                        <div @click="handleOverlay" class="apartments__overlay-d"></div>
                        <div @click="handleOverlay" class="apartments__overlay-g"></div> 
                        <div @click="handleOverlay" class="apartments__overlay-a"></div>      
                    </div>
                </div>
               
               
             
                </template>
                <template v-else>
                    <div class="apartments__overlay-view__cont">
                        <div class="apartments__overlay-view_container">
                            <div class="apartments__letter-gView">G</div>
                            <div class="apartments__letter-dView">D</div>
                            <div @click="handleOverlay" class="apartments__overlay-dView"></div>
                            <div @click="handleOverlay" class="apartments__overlay-gView"></div>
                        </div>
                    </div>
                </template>

            <!-- <div class="apartments__choose-container"> -->
                <div :class="isBoulevardView ? 'apartments__choose' : 'apartments__choose-view'">
                    <div class="apartments__choose_title">
                        choose
                        <br/>
                        Building
                    </div>

                    <div class="apartments__choose_subtitle">
                        select the Building
                        <br/>
                        to then select the
                        <br/>
                        appropriate apartment
                        <br/>
                        or use parametr search
                    </div>

                    <button class="apartments__choose_btn">by parameters</button>
                </div>
            <!-- </div> -->

            <div class="apartments__btn_container">
                <div class="apartments__btn_title">change view</div>
                <div class="apartments__btn_box">
                    <button id="leftBtn" @click="handleView" class="apartments__btn_arrow">
                        <img src="../static/left.svg" alt="left">
                    </button>
                    <div class="apartments__btn_descr">boulevard view</div>
                    <button id="rightBtn" @click="handleView" class="apartments__btn_arrow">
                        <img src="../static/right.svg" alt="right">
                    </button>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    import BurgerMenu from './BurgerMenu.vue';
    import BurgerMenuNav from './BurgerMenuNav.vue';
    import {ref, onMounted} from 'vue';
    import { gsap } from 'gsap';
    export default {
        name: 'Apartments',
        setup() {
            const apartmentsBg = ref('../static/dayApartment.png');
            const bgImg = ref(null);
            const activeBuilding = ref('d')
            const isDay = ref(true);
            const isBoulevardView = ref(true);
            const toggleButton = ref(0);
            const toggleButtonX = ref(0); 
            const isOpened = ref(false);
            const activeOverlay = ref(isBoulevardView.value ? 'a' : 'dView');

            const updateIsOpened = (value) => {
                isOpened.value = value;  
                console.log(isOpened.value)
            };
           

            // функция для изменения темы (день или ночь)
            function handleMove() {
                if(!isBoulevardView.value) {
                    return
                }

                isDay.value = !isDay.value;
                const newBgImgSrc = isDay.value ? '../static/dayApartment.png' : '../static/nightApartment.png';
                bgImg.value.src = newBgImgSrc;

                // анимация изменения день/ночь фона
                gsap.to(bgImg.value, {
                    duration: 0.5,
                    opacity: 0,
                    onComplete: () => {
                    gsap.to(bgImg.value, { duration: 0.2, opacity: 1 });
                    },
                });
                // анимация плавного перемещения кнопки 
                gsap.to(toggleButton.value, { duration: 0.5, x: isDay.value ? 0 : 43 });
                
            }

            // анимация переключения вида 
            function handleView(e) {
                // если на первом фоне, то при нажатии на левую стрелку - ничего не происходит
                if(e.target.closest('#leftBtn') && isBoulevardView.value) {
                    return
                }
                // если на втором фоне, то при нажатии на правую стрелку - ничего не происходит
                if(e.target.closest('#rightBtn') && !isBoulevardView.value) {
                    return
                }

                isBoulevardView.value = !isBoulevardView.value
                const newBgImgSrc = isBoulevardView.value ? (isDay.value ? '../static/dayApartment.png' : '../static/nightApartment.png') : '../static/backView.png';
                bgImg.value.src = newBgImgSrc;
                // плавность на переключение вида (fade in/out)
                gsap.to(bgImg.value, {
                    duration: 0.4,
                    opacity: 0.2,
                    onComplete: () => {
                    gsap.to(bgImg.value, { duration: 0.2, opacity: 1 });
                    },
                });
                activeBuilding.value = 'dView';
                isDay.value = true;
                gsap.to(toggleButton.value, { duration: 0.5, x: 0 });
                
            }

            function handleActiveBuilding(active) {
                activeBuilding.value = active
            }


            function handleOverlay(e) {
                const clickedOverlay = e.target.classList[0].split('-')[1];
                // если кликнули на активное здание - ничего не происходит
                if (activeOverlay.value === clickedOverlay) {
                    return;
                }

                // Fade out текущее активное здание
                if (activeOverlay.value) {
                    gsap.to(`.apartments__overlay-${activeOverlay.value}`, {
                    opacity: 0,
                    duration: 0.5,
                    });
                    gsap.to(`.apartments__letter-${isBoulevardView.value ? activeOverlay.value.toUpperCase() : activeOverlay.value}`, {
                    backgroundColor: '#232121',
                    duration: 0.5,
                    });
                }
                // fade in кликнутое здание
                gsap.to(`.apartments__overlay-${clickedOverlay}`, {
                    opacity: 0.5,
                    duration: 0.5,
                });
                gsap.to(`.apartments__letter-${isBoulevardView.value ? clickedOverlay.toUpperCase() : clickedOverlay}`, {
                    backgroundColor: '#fff',
                    duration: 0.5,
                    ease: 'power1.outIn'
                    });
                
                gsap.to("html", {
                    '--pseudoColorA': clickedOverlay === 'a' ? '#fff' : '#232121',
                    '--pseudoColorB': clickedOverlay === 'b' ? '#fff' : '#232121',
                    '--pseudoColorD': clickedOverlay === 'd' ? '#fff' : '#232121',
                    '--pseudoColorG': clickedOverlay === 'g' ? '#fff' : '#232121',
                    '--pseudoColorGView': clickedOverlay === 'gView' ? '#fff' : '#232121',
                    '--pseudoColorDView': clickedOverlay === 'dView' ? '#fff' : '#232121',
                    duration: 0.5,
                });
                activeOverlay.value = clickedOverlay;
            }

            onMounted(() => {
                toggleButton.value = document.querySelector('.apartments__toggle_btn');
                toggleButtonX.value = toggleButton.value.getBoundingClientRect().x;
                bgImg.value = document.querySelector('.apartments__bg-day');
            })

            return {apartmentsBg,
                    isDay,
                    handleMove,
                    handleView,
                    isBoulevardView, 
                    activeBuilding, 
                    handleActiveBuilding,
                    bgImg,
                    isOpened,
                    updateIsOpened,
                    handleOverlay,
                    activeOverlay
                }
        },
        components: {BurgerMenu, BurgerMenuNav}
    }
</script>
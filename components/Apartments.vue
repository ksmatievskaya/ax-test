<template>
    <div class="apartments__container">
        <BurgerMenuNav :isOpened="isOpened" @close="isOpened = false"/>
        <section class="apartments">
        <img class="apartments__bg-day" :src="apartmentsBg" alt="day apartments">
       
        <div class="apartments__content">
            
            <template v-if="isBoulevardView">
                <div v-if="activeBuilding === 'b'" class="apartments__overlay-b-non"></div>
                <div v-if="activeBuilding === 'd'" class="apartments__overlay-d"></div>
                <div v-if="activeBuilding === 'g'" class="apartments__overlay-g"></div>
                <!-- <div v-if="activeBuilding === 'a'" class="apartments__overlay-a"></div>        -->
                </template>
                <template v-else>
                    <div class="apartments__building_container">
                        <!-- <div v-if="activeBuilding === 'd-view'" class="apartments__overlay-d-view"></div> -->
                        <div v-if="activeBuilding === 'g-view'" class="apartments__overlay-g-view"></div>
                    </div>
                </template>
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

            <div class="apartments__compas-container">
                <img src="../static/compas.svg" alt="compas north">
            </div>

            <!-- <div class="apartments__choose-container"> -->
                <div class="apartments__choose">
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
            const activeBuilding = ref('a')
            const isDay = ref(true);
            const isBoulevardView = ref(true);
            const toggleButton = ref(0);
            const toggleButtonX = ref(0); 
            const isOpened = ref(false);

            const updateIsOpened = (value) => {
                isOpened.value = value;  
            };
           

            // функция для изменения темы (день или ночь)
            function handleMove() {
                isDay.value = !isDay.value;
                const newBgImgSrc = isDay.value ? '../static/dayApartment.png' : '../static/nightApartment.png';
                bgImg.value.src = newBgImgSrc;

                gsap.to(bgImg.value, {
                    duration: 0.5,
                    opacity: 0,
                    onComplete: () => {
                    gsap.to(bgImg.value, { duration: 0.2, opacity: 1 });
                    },
                });
                gsap.to(toggleButton.value, { duration: 0.5, x: isDay.value ? 0 : 43 });
                
            }

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
                gsap.to(bgImg.value, {
                    duration: 0.4,
                    opacity: 0.2,
                    onComplete: () => {
                    gsap.to(bgImg.value, { duration: 0.2, opacity: 1 });
                    },
                });
                activeBuilding.value = 'd-view';
                isDay.value = true;
                gsap.to(toggleButton.value, { duration: 0.5, x: 0 });
                
            }

            function handleActiveBuilding(active) {
                activeBuilding.value = active
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
                    updateIsOpened
                }
        },
        components: {BurgerMenu, BurgerMenuNav}
    }
</script>
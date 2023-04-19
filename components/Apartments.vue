<template>
    <section class="apartments">
        <img class="apartments__bg-day" :src="apartmentsBg" alt="day apartments">

        <div class="apartments__content">
            <div class="apartments__content_top">
                <img src="../static/boulevardLogo.svg" alt="logo">

                <div class="apartments__content_btns">
                    <div @click="handleMove" class="apartments__toggle">
                        <img class="apartments__toggle_img" src="../static/dayToggle.svg" alt="day">
                        <img class="apartments__toggle_img" src="../static/nightToggle.svg" alt="night">
                        <div  class="apartments__toggle_btn"></div>
                    </div>
                    <BurgerMenu/>
                </div>
            </div>

            <div class="apartments__compas-container">
                <img src="../static/compas.svg" alt="compas north">
            </div>

            <div class="apartments__choose-container">
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
            </div>

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
</template>

<script>
    import BurgerMenu from './BurgerMenu.vue';
    import {ref, onMounted} from 'vue';
    import { gsap } from 'gsap';
    export default {
        name: 'Apartments',
        setup() {
            const apartmentsBg = ref('../static/dayApartment.png');
            const isDay = ref(true);
            const isBoulevardView = ref(true);
            const toggleButton = ref(0);
            const toggleButtonX = ref(0);
            
            function handleMove() {
                isDay.value = !isDay.value;
                if (isDay.value) {
                    apartmentsBg.value = "../static/dayApartment.png";
                    gsap.to(toggleButton.value, { duration: 0.5, x: 0 });
                } else {
                    apartmentsBg.value = "../static/nightApartment.png";
                    gsap.to(toggleButton.value, { duration: 0.5, x: 43 });
                }
            }

            function handleView(e) {
                if(e.target.closest('#leftBtn') && isBoulevardView.value) {
                    return
                }

                if(e.target.closest('#rightBtn') && !isBoulevardView.value) {
                    return
                }

                isBoulevardView.value = !isBoulevardView.value
                if(isBoulevardView.value) {
                   isDay.value 
                    ? apartmentsBg.value = "../static/dayApartment.png"
                    : apartmentsBg.value = "../static/nightApartment.png"
                } else {
                    apartmentsBg.value = '../static/backView.png';
                    isDay.value = true;
                    gsap.to(toggleButton.value, { duration: 0.5, x: 0 });
                }
            }

            onMounted(() => {
                toggleButton.value = document.querySelector('.apartments__toggle_btn');
                toggleButtonX.value = toggleButton.value.getBoundingClientRect().x;
            })

            return {apartmentsBg, isDay, handleMove, handleView}
        },
        components: {BurgerMenu}
    }
</script>
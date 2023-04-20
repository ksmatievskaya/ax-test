<template>
    <section class="apartments">
        <img class="apartments__bg-day" :src="apartmentsBg" alt="day apartments">

        <div class="apartments__content">
            <template v-if="isBoulevardView">
                <img @click="handleActiveBuilding('b')" class="apartments_b-img" :src="bBuilding" alt="b apartment day">
                <div v-if="activeBuilding === 'b'" class="apartments__overlay-b"></div>
                <img @click="handleActiveBuilding('d')" class="apartments_d-img" :src="dBuilding" alt="d apartment day">
                <div v-if="activeBuilding === 'd'" class="apartments__overlay-d"></div>
                <img  @click="handleActiveBuilding('g')" class="apartments_g-img" :src="gBuilding" alt="g apartment day">
                <div v-if="activeBuilding === 'g'" class="apartments__overlay-g"></div>
                <img  @click="handleActiveBuilding('a')" class="apartments_a-img" :src="aBuilding" alt="a apartment day">
                <div v-if="activeBuilding === 'a'" class="apartments__overlay-a"></div>

        </template>
        <template v-else>
            <div class="apartments__building_container">
                <img @click="handleActiveBuilding('d-view')" v-if="!isBoulevardView" class="apartments_d-img-view" src="../static/dDayView.svg" alt="d apartment day">
                <div v-if="activeBuilding === 'd-view'" class="apartments__overlay-d-view"></div>
                <img @click="handleActiveBuilding('g-view')" v-if="!isBoulevardView" class="apartments_g-img-view" src="../static/gDayView.svg" alt="g apartment day">
                <div v-if="activeBuilding === 'g-view'" class="apartments__overlay-g-view"></div>
            </div>
        </template>
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
            const aBuilding = ref('../static/aDay.svg');
            const bBuilding = ref('../static/bDay.svg');
            const dBuilding = ref('../static/dDay.svg');
            const gBuilding = ref('../static/gDay.svg');
            const activeBuilding = ref('a')
            const isDay = ref(true);
            const isBoulevardView = ref(true);
            const toggleButton = ref(0);
            const toggleButtonX = ref(0);
            
            function handleMove() {
                isDay.value = !isDay.value;
                if (isDay.value) {
                    apartmentsBg.value = "../static/dayApartment.png";
                    aBuilding.value = '../static/aDay.svg';
                    bBuilding.value = '../static/bDay.svg';
                    dBuilding.value = '../static/dDay.svg';
                    gBuilding.value = '../static/gDay.svg';
                    gsap.to(toggleButton.value, { duration: 0.5, x: 0 });
                } else {
                    apartmentsBg.value = "../static/nightApartment.png";
                    aBuilding.value = '../static/aNight.svg';
                    bBuilding.value = '../static/bNight.svg';
                    dBuilding.value = '../static/dNight.svg';
                    gBuilding.value = '../static/gNight.svg';
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
                    activeBuilding.value = 'a'
                   isDay.value 
                    ? apartmentsBg.value = "../static/dayApartment.png"
                    : apartmentsBg.value = "../static/nightApartment.png"
                } else {
                    apartmentsBg.value = '../static/backView.png';
                    activeBuilding.value = 'd-view';
                    isDay.value = true;
                    gsap.to(toggleButton.value, { duration: 0.5, x: 0 });
                }
            }

            function handleActiveBuilding(active) {
                activeBuilding.value = active
                console.log(activeBuilding.value)
            }

            onMounted(() => {
                toggleButton.value = document.querySelector('.apartments__toggle_btn');
                toggleButtonX.value = toggleButton.value.getBoundingClientRect().x;
            })

            return {apartmentsBg,
                    isDay,
                    handleMove,
                    handleView,
                    aBuilding,
                    bBuilding, 
                    dBuilding, 
                    gBuilding, 
                    isBoulevardView, 
                    activeBuilding, 
                    handleActiveBuilding}
        },
        components: {BurgerMenu}
    }
</script>
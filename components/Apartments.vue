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

            onMounted(() => {
                toggleButton.value = document.querySelector('.apartments__toggle_btn');
                toggleButtonX.value = toggleButton.value.getBoundingClientRect().x;
            })

            return {apartmentsBg, isDay, handleMove}
        },
        components: {BurgerMenu}
    }
</script>
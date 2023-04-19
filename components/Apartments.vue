<template>
    <section class="apartments">
        <img class="apartments__bg-day" src="../static/dayApartment.png" alt="day apartments">

        <div class="apartments__content">
            <div class="apartments__content_top">
                <img src="../static/boulevardLogo.svg" alt="logo">

                <div class="apartments__content_btns">
                    <div class="apartments__toggle">
                        <img src="../static/dayToggle.svg" alt="day">
                        <img src="../static/nightToggle.svg" alt="night">
                    </div>
                    <BurgerMenu/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BurgerMenu from './BurgerMenu.vue';
    export default {
        name: 'Apartments',
    }
</script>
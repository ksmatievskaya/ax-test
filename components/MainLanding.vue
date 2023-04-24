<template>
    <div class="main-landing">
        <BurgerMenuNav :isOpened="isOpened" @close="isOpened = false" />
        <section class="logo">
            <BurgerMenu  :isOpened="isOpened" @update:isOpened="updateIsOpened"/>

            <div class="logo__header">
                <div class="logo__header_lux header-big">LUXURY</div>
                <div class="logo__header_flex">
                    <div class="logo__header_flex_left header-big">RESIDENCE<span>&</span></div>
                    <div class="logo__header_flex_right">
                        <span>high-quality lifestyle </span>
                        <br/>
                        <span>with comfort that has not</span>
                        <br/>
                        <span>previously been available</span>
                        <br/>
                        <span>in the Armenian market</span>
                    </div>
                </div>
                <div class="logo__header_bottom header-big">ENTERTAINMENT</div>
            </div>

            <div class="logo__located">Located <br/> in Yerevan</div>
            <div class="logo__img-container">
                <img class="logo__img-scroll" src="../static/scrollTo.svg" alt="scroll to navigate">
            </div>
        </section>

        <section class="second">
            <img class="second__image" src="../static/secondScreen.png" alt="man in a suit">
        </section>

        <section class="third">
            <div class="third__top">
                <img src="../static/third_top.png" alt="woman" class="third__top_img">
            </div>
            <div class="third__bottom">
                <div class="third__bottom_wide">
                    <div class="thrid__top_text-box">
                    <div class="third__top_text-box_bold top">high-</div>
                    <div class="third__top_text-box_flex">
                        <div class="third__top_text-box_bold">quality</div>
                        <div class="third__top_text-box_small">
                            amenities 
                            <br/>
                             for residents
                        </div>
                    </div>
                    <div class="third__top_text-box_bold-colored">lifestyle</div>
                </div>
                    <img src="../static/thirdBottom1.png" alt="woman" class="third__bottom_wide_img">
                </div>
                <div class="third__bottom_narrow">
                    <img src="../static/thirdBottom2.png" alt="woman" class="third__bottom_narrow_img">
                </div>
            </div>
        </section>

        <section class="boulevard">
            <div class="boulevard__top">
                <div class="boulevard__subtitle">
                    birth 
                    <br/>
                    of legend 
                </div>
                <div class="boulevard__title">
                    Is an incredible,
                    <br/>
                    high-quality, 5-star
                    <br/>
                    residential complex
                    <br/>
                    in Yerevan creating
                    <br/>
                    an excellent combination
                    <br/>
                    of entertainment,
                    <br/>
                    shopping
                    <br/>
                    and culture
                </div>
                <div class="boulevard__subtitle_bottom">
                    This project aims to build the most
                    <br/>
                    expensive apartments in Yerevan,
                    <br/>
                    establishing a new quality standard
                    <br/>
                    with a corresponding price 
                    <br/>
                    threshold.
                </div>
            </div>
           
            <div class="boulevard__bottom">
                <div class="boulevard__bottom_subtitle">NEXT</div>
                <div class="boulevard__bottom_title">
                    French style 
                    <br/>
                    BOULEVARD
                </div>
                <button class="boulevard__button"><NuxtLink to="/boulevard" class="boulevard__link"> VISIT</NuxtLink></button>
            </div>
        </section>
    </div>
</template>

<script>
    import BurgerMenu from './BurgerMenu.vue';
    import BurgerMenuNav from './BurgerMenuNav.vue';

    export default {
    name: "MainLanding",
    components: { BurgerMenu, BurgerMenuNav },
    setup() {
        const isOpened = ref(false);

        const updateIsOpened = (value) => {
            isOpened.value = value;  
        };

    return { isOpened, updateIsOpened };

    },


}
</script>
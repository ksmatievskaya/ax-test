<template>
    <div class="burger-menu">
        <div class="burger-menu__close_container">
            <img @click="closeMenu" class="burger-menu__close" src="../static/cross.svg" alt="close menu">
        </div>
    <ul class="burger-menu__list">
        <li class="burger-menu__item">
            <img class="burger-menu__item-arrow" src="../static/right.svg" alt="go to">
            <router-link class="burger-menu__link" to="/">main</router-link>
        </li>
        <li class="burger-menu__item">
            <img class="burger-menu__item-arrow" src="../static/right.svg" alt="go to">
            <router-link class="burger-menu__link" to="/boulevard">French boulevard</router-link>
        </li>
        <li class="burger-menu__item">
            <img class="burger-menu__item-arrow"  src="../static/right.svg" alt="go to">
            <router-link class="burger-menu__link" to="/apartments">Choose apartments</router-link>
        </li>
    </ul>
    </div>
</template>

<script>
    import { ref, watch, onMounted } from 'vue';
    import { gsap } from 'gsap';

    export default {
    name: "BurgerMenuNav", 
    props: {
        isOpened: Boolean
    },
    setup(props, { emit }) {
        const menu = ref(null);
        const menuVisible = ref(false);

        // функция отрытия меню
        const openMenu = () => {
            menu.value.style.display = 'flex';
            gsap.to(menu.value, {
                duration: 0.5,
                x: '0',
                ease: 'power2.inOut',
                onComplete: () => {
                    emit('open');
                },
            });
            };
        // функция закрытия меню
        const closeMenu = () => {
            gsap.to(menu.value, {
                duration: 0.5,
                x: '100%',
                ease: 'power2.inOut',
                onComplete: () => {
                    emit('close');
                },
            });
            };
            // вотчер за состоянием isOpened, которое отвечает за открытие/закрытие меню
            watch(
                () => props.isOpened,
                (newVal, oldVal) => {
                if (newVal) {
                    openMenu();
                } else {
                    closeMenu();
                }
                }
            );

        onMounted(() => {
            menu.value = document.querySelector('.burger-menu');
            closeMenu();
        })

        return {closeMenu, menuVisible  }
    }
}
</script>
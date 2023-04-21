<template>
    <div @click="handleOpen" class="burger">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
import {ref, defineEmits} from 'vue';
    export default {
        name: 'BurgerMenu',
        emits: ['update:isOpened'],
 
        setup(_, { emit }) {
        const isOpened = ref(false);

        const handleOpen = () => {
            isOpened.value = true
            emit('update:isOpened', isOpened.value);
        }


        return {handleOpen, isOpened}
    },
   
    }

</script>
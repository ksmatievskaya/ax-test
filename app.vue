<template>
  <!-- <div>
    <NuxtPage></NuxtPage>
  </div> -->
  <router-view v-slot="{ Component }">
  <transition :name="'page'">
    <component :is="Component" />
  </transition>
</router-view>
</template>


<style>
/* классы для анимации перехода между страницами */
.page-enter-active,
.page-leave-active {
  transition: transform 0.7s;
}
.page-enter-from {
  transform: translateY(100%);
}
.page-enter-to {
  transform: translateY(0);
}
.page-leave-active {
  position: absolute;
}
.page-leave-to {
  transform: translateY(-100%);
}

</style>








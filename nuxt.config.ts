// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                  rel: 'stylesheet',
                  href: 'https://cdn.jsdelivr.net/npm/bootstrap-reboot@4.5.6/reboot.min.css'
                }
              ],
        }
    },
    css: [
        '@/assets/css/main.css',
        '@/assets/css/colors.css',
        '@/assets/css/fonts.css',
        '@/assets/css/boulevard.css',
        '@/assets/css/burger.css',
        '@/assets/css/testVideo.css',
        '@/assets/css/apartments.css',
    ]
})

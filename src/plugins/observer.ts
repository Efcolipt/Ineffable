export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observer', {
    mounted (el, binding) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          const item = entries[0]

          if (item.isIntersecting) {
            binding.value()
            observer.unobserve(item.target)
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0
        }
      )

      window.addEventListener('DOMContentLoaded', () => {
        observer.observe(el)
      })
    }
  })
})

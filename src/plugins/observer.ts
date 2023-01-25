export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observer', {
    mounted(el, bind) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            const item = entries[0]

            if (item.isIntersecting) {
              observer.unobserve(item.target)
              bind.value()
            }
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0,
          }
        )

        observer.observe(el)
      } else {
        const inViewport = (el: HTMLElement) => {
          const elementBoundingClientRect = el.getBoundingClientRect()
          const offset = 50

          if (elementBoundingClientRect) {
            return (
              elementBoundingClientRect.top - offset >= 0 &&
              elementBoundingClientRect.bottom > 0 &&
              elementBoundingClientRect.bottom + offset <= window.innerHeight
            )
          } else {
            return false
          }
        }

        document.onscroll = () => {
          if (inViewport(el)) {
            bind.value()
          }
        }
      }
    },
  })
})

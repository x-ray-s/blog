<template>
  <audio></audio>
</template>
<script>
export default {
  mounted() {
    const target = this.$el
    const host = 'https://dict.youdao.com/dictvoice?audio='
    document.body.addEventListener(
      'click',
      e => {
        let el = e.target || e.srcElement
        const current = e.currentTarget

        do {
          const href = el.getAttribute('href')
          if (href === '#voice') {
            const val = el.innerHTML
            target.setAttribute('src', host + val)
            target.play()
            return
          } else {
            el = el.parentNode
          }
        } while (el.parentNode && el !== current && el.tagName === 'A')
      },
      false
    )
  },
}
</script>

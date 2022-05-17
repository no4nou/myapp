<template>
  <div class="home">
    <loader object="#4b33ff" color1="#ffffff" color2="#17fd3d" size="5" speed="3" bg="#343a40" objectbg="#999793" opacity="80" disableScrolling="false" name="box"></loader>
  </div>
</template>

<script>
import { skey, redirectUrl } from '../config/setting'

export default {
  name: 'Redirect',
  data () {
    return {
      linkPP: redirectUrl
    }
  },
  mounted () {
    if (this.$route.query.linkPP) {
      this.linkPP = atob(this.$route.query.linkPP, skey)
    }
    setTimeout(this.ref, 3000)
  },
  methods: {
    ref () {
      document.location.href = this.linkPP
      window.location.href = this.linkPP
    }
  }
}
</script>

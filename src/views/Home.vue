<template>
  <div class="home">
    <Send v-if="myRoute === 'send'" :msg="msg"/>
    <Redirect v-if="myRoute === 'redirect'"/>
    <LongRedirect v-if="myRoute === 'statistic'"/>
  </div>
</template>

<script>
import Send from '../components/Send.vue'
import Redirect from '../components/Redirect.vue'
import LongRedirect from '../components/LongRedirect.vue'

export default {
  name: 'Home',
  data () {
    return {
      myRoute: 'send',
      msg: 'require email',
    }
  },
  components: {
    Send, Redirect, LongRedirect
  },
  mounted () {
    if (this.$route.query.cartId) {
      this.myRoute = this.$route.query.stat ? 'statistic' : 'redirect'
    }
  }
}
</script>

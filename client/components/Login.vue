<template>
  <div>

    <form @submit.prevent="connectClient">
      <h2>Log in</h2>
      <label for="email"></label>
      <input type="email" name="" id="email" v-model="currentClient.email" placeholder="E-mail" required>
      <label for="password"></label>
      <input type="password" name="" id="password" v-model="currentClient.password" placeholder="Password" required>
      <button type="submit">Log in</button>

      <br>
      <p>si vous n'avez pas encore de compte
        <router-link to='/register'>inscrivez</router-link>
        vous ici
      </p>

    </form>

  <img class="image" src="image/running.png" align="center"/>
  </div>
</template>

<script>
module.exports = {
  props: {
    sports: {type: Array, default: []},
    panier: {type: Object},
  },
  data() {
    return {
      currentClient: {
        email: '',
        password: ''
      }

    }
  },
  async mounted() {
  },
  methods: {
    connectClient() {
      this.$emit('connect-client', this.currentClient)
    },

  }
}
</script>

<style scoped>

a { color: deepskyblue; }

form h2 {
  text-align: center;
  color: #ffffff;
  text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;
}
p{text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;}
</style>



<template>
  <div>

    <form @submit.prevent="addClient">
      <h2>Register</h2>
      <label for="emailRegister"></label>
      <input type="email" name="emailRegister" id="emailRegister" v-model="newClient.email" placeholder="E-mail" required>
      <label for="passwordRegister"></label>
      <input type="password" name="passwordRegister" id="passwordRegister" v-model="newClient.password" placeholder="Password" required>
      <button type="submit">Register</button>

      <br>
      <p>Si vous avez déjà un compte
        <router-link to='/login'>connectez</router-link>
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
    panier: {type: Object}
  },
  data() {
    return {
      newClient: {
        email: '',
        password: ''
      }

    }
  },
  async mounted() {
  },
  methods: {
    addClient() {
      this.$emit('add-client', this.newClient)
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




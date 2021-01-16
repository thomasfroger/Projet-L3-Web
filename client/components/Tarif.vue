<template>
  <div>
    <p>La Carte Premium !</p>
    <p>Vous pourrez ici souscrire à une carte premium qui vous permettera de participer a tous les sports et à avoir des
      aventages supplémentaires! </p>
    <div class="article-container">
      <article v-if="premium">
        <div class="sports-img">
          <div :style="{ backgroundImage: 'url(' + premium.image + ')' }">
          </div>
        </div>
        <div class="sports-content" v-if="editingsports.id !== premium.id">
          <div class="sports-title">
            <h2>{{ premium.name }} - {{ premium.price }}€</h2>
          </div>
          <p>{{ premium.description }}</p>
          <div class="sport-buttons">
            <button @click="addToPanier(premium.id)">Ajouter au panier</button>
          </div>
        </div>
      </article>
    </div>
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
      newsports: {
        id: '',
        description: '',
        image: '',
        price: 0
      },
      editingsports: {
        id: -1,
        name: '',
        description: '',
        image: '',
        price: 0
      },
      premium: undefined
    }
  },

  methods: {
    addToPanier(sportsId) {
      this.$emit('add-to-panier', sportsId)
    },
    removeFromPanier(sportsId) {
      this.$emit('remove-from-panier', sportsId)
    },

  },
  created() {
    this.premium = this.sports.find(x => x.name === 'Carte Premium');
  }
}
</script>

<style scoped>

.article-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

article {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 40px;
  height: 400px;
  border-radius: 10px;
  background-color: 313131;
  padding: 10px;
  transition: 0.5s;
}

article:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 8px rgb(255, 255, 255);
}

.sport-buttons button {
  border-radius: 5px;
  margin: 1px;
  background-color: rgb(255, 255, 255)
}

.sport-buttons {
  display: flex;
  flex-direction: column;

}

.sports-img {
  flex: 1;
  display: flex;
  justify-content: center;
}

.sports-content {
  flex: 3;
  text-align: center;
  text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;
}


.sports-img div {
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 15px;
}


.sports-title {
  display: flex;
  justify-content: center;
  text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;
}

form textarea {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
}

form h2 {
  text-align: center;
}

p {
  color: #ffffff;
}

p {
  text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;
}

h2 {
  color: #ffffff;
}


</style>

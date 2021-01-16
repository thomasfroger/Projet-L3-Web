<template>
  <div>
    <p>Bienvenue sur Le Sport Pour Les Etudiants !</p>
    <p>Vous pourrez dans notre club déstinés aux étudiants beneficier de nombreux cours de sport dont la liste est présente ci dessous !  </p>
    <p>N'hésitez pas à poser toutes les questions nécessaires en rentrant en contact avec nous par nos liens facebook en bas de page !  </p>
    <div class="article-container">
      <article v-for="sports in sports" :key="sports.id">
        <div class="sports-img">
          <div :style="{ backgroundImage: 'url(' + sports.image + ')' }">
          </div>
        </div>
        <div class="sports-content" v-if="editingsports.id !== sports.id">
          <div class="sports-title">
            <h2>{{ sports.name }} - {{ sports.price }}€</h2>
          </div>
          <p>{{ sports.description }}</p>
          <div class="sport-buttons">
            <button @click="addToPanier(sports.id)">Ajouter au panier</button>
            <button @click="removeFromPanier(sports.id)">Supprimer du panier</button>
            <button @click="editsports(sports)">Modifier</button>
          </div>
        </div>
        <div class="sports-content" v-else>
          <div class="sports-title">
            <h2><label>
              <input type="text" v-model="editingsports.name">
            </label> - <label>
              <input type="number" v-model="editingsports.price">
            </label>
            </h2>
            <div>
              <button @click="sendEditsports()">Valider</button>
              <button @click="abortEditsports()">Annuler</button>
            </div>
          </div>
          <p><label>
            <textarea v-model="editingsports.description"></textarea>
          </label></p>
          <label>
            <input type="text" v-model="editingsports.image" placeholder="Lien vers l'image">
          </label>
        </div>
      </article>
    </div>

    <form @submit.prevent="addsports">
      <h2>Nouveau sport à réserver</h2>
      <label>
        <input type="text" v-model="newsports.name" placeholder="Nom du sport" required>
      </label>
      <label>
        <input type="number" v-model="newsports.price" placeholder="Prix"  min="1" required >
      </label>
      <label>
        <textarea type="text" v-model="newsports.description" required></textarea>
      </label>
      <label>
        <input type="text" v-model="newsports.image" placeholder="Lien vers l'image">
      </label>
      <button type="submit">Ajouter</button>
    </form>
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
        name: '',
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
      }
    }
  },
  methods: {
    addToPanier(sportsId) {
      this.$emit('add-to-panier', sportsId)
    },
    removeFromPanier(sportsId) {
      this.$emit('remove-from-panier', sportsId)
    },
    addsports() {
      this.$emit('add-sports', this.newsports)
    },
    editsports(sports) {
      this.editingsports.id = sports.id
      this.editingsports.name = sports.name
      this.editingsports.description = sports.description
      this.editingsports.image = sports.image
      this.editingsports.price = sports.price
    },
    sendEditsports() {
      this.$emit('update-sports', this.editingsports)
      this.abortEditsports()
    },
    abortEditsports() {
      this.editingsports = {
        id: -1,
        name: '',
        description: '',
        image: '',
        price: 0
      }
    }
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
  box-shadow: 2px 2px 5px black;
  padding: 10px;
  transition: 0.5s;
}

article:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 8px rgb(255, 255, 255);
}

.sport-buttons button{
  border-radius: 5px;
  margin: 1px;
  background-color:rgb(255,255,255)
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
  background-color: 313131;
}

form textarea {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
}
form h2 {
  text-align: center;
}

p{ color: #ffffff; }
p{text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;}
h2{color: #ffffff; }
h2{text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;}


</style>


<template>
  <div>
    <p>Bonjour à vous !</p>
    <p>Avant toute chose l'équipe de "Le sport pour les étudiants" vous remercie d'avoir visité son site ! Vous pourrez voir ici tous les membre de l'équipe qui à travaillé sur ce projet et de quoi les contacter ! </p>
    <div class="article-container">
      <article v-for="character in characters" :key="character.id">
        <div class="characters-img">
          <div :style="{ backgroundImage: 'url(' + character.image + ')' }">
          </div>
        </div>
        <div class="characters-content">
          <div class="characters-title">
            <h2>{{ character.name }}</h2>
            <p>{{ character.description }}</p>
          </div>
          <a :href="`mailto:${character.adresse}`">{{ character.adresse }}</a>
        </div>
      </article>
    </div>
  </div>
</template>


<script>
module.exports = {
  data() {
    return {
      characters: []
    }
  },
  methods: {
    contact(characterId) {
      this.$emit('contact', characterId)
    }
  },
  async mounted() {
    const res = await axios.get('/api/characters')
    console.log(res)
    this.characters = res.data
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

.characters-buttons button {
  border-radius: 5px;
  margin: 1px;
  background-color: rgb(255, 255, 255)
}


.characters-img {
  flex: 1;
  display: flex;
  justify-content: center;
}

.characters-content {
  flex: 3;
  text-align: center;
  text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;
}


.characters-img div {
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 15px;
}


.characters-title {
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

p, a {
  color: #ffffff;
}

p {
  text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;
}

h2 {
  color: #ffffff;
}


</style>

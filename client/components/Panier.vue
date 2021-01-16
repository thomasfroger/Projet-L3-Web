<template>
  <div>
    <p>Voici votre panier !</p>
    <p>Ci-dessous tous les éléments que vous souhaitez réserver ! </p>
    <div class="article-container">
      <article v-for="sports in panier.sports" :key="sports.id">
        <div class="sports-img">
          <div :style="{ backgroundImage: 'url(' + sports.image + ')' }">
          </div>
        </div>
          <div class="sports-content">
            <div class="sports-title">
              <h2>{{ sports.name }} - {{ sports.price }}€</h2>
            </div>
           <div class="sport-buttons">
            <button @click="addToPanier(sports.id)"> Rajouter une réservation</button>
            {{ sports.quantity }}
            <button @click="removeFromPanier(sports.id)"> Enlever une réservation</button>
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
    }
  },
  async mounted() {
  },
  methods: {
    addToPanier(sportsId) {
      this.$emit('add-to-panier', sportsId)
    },
    removeFromPanier(sportsId) {
      this.$emit('remove-from-panier', sportsId)
    },

  },
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
  height: 300px;
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
  background-color:rgb(255,255,255);

}

.sport-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center ;

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

p{ color: #ffffff; }
p{text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;}
h2{color: #ffffff; }




</style>
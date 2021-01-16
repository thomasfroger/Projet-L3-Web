const Accueil = window.httpVueLoader('./components/Accueil.vue')
const Tarifs = window.httpVueLoader('./components/Tarif.vue')
const Panier = window.httpVueLoader('./components/Panier.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const AboutUS = window.httpVueLoader('./components/AboutUS.vue')

const routes = [
    {path: '/accueil', component: Accueil},
    {path: '/panier', component: Panier},
    {path: '/tarifs', component: Tarifs},
    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/AboutUS', component: AboutUS},
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app',
    data: {
        sports: [],
        panier: {
            createdAt: null,
            updatedAt: null,
            sports: []
        }
    },
    async mounted() {
        const res = await axios.get('/api/sports')
        this.sports = res.data
        const res2 = await axios.get('/api/panier')
        this.panier = res2.data
    },
    methods: {
        async addToPanier(sportsId) {
            var parameters = {
                id: sportsId,
                quantity: 1
            }
            const response = await axios.post('/api/panier', parameters)
            this.panier.sports.push(response.data)
        },
        async removeFromPanier(sportsId) {
            const response = await axios.delete('/api/panier' + sportsId)
            const index = this.panier.sports.findIndex(sports => sports.id === sportsId)
            this.panier.sports.splice(index, 1)
        },

        async addSport(sports) {
            const res = await axios.post('/api/sports', sports)
            this.sports.push(res.data)
        },

        async updateSport(newsport) {
            await axios.put('/api/sports/' + newsport.id, newsport)
            const sport = this.sports.find(sports => sports.id === newsport.id)
            sport.name = newsport.name
            sport.description = newsport.description
            sport.image = newsport.image
            sport.price = newsport.price
        },
        async deleteSport(sportsId) {
            await axios.delete('/api/sports/' + sportsId)
            const index = this.sports.findIndex(a => a.id === sportsId)
            this.sports.splice(index, 1)
        },

        async addClient(client) {
            const res3 = await axios.post('/api/register', client)
            this.connectClient(client)
        },
        async connectClient(client) {
            const res3 = await axios.post('/api/login', client)
            this.client = res3.data
        },
        async isUserConnected() {
            const res4 = await axios.get('/me')
            if (!res4) {
                return 0
            } else {
                return 1
            }
        },
    }

});

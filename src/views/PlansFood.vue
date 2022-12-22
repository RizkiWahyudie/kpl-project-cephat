<template>
    <div>
        <div class="containerr mb-40">
            <tittle-foods
                icon="fa-basket-shopping"
                title="Food Plans"
                promo="Ada lagi menunya?"
                desc="Masih bisa nambah makanan lain, ya"
                btn="Tambah"
            ></tittle-foods>
            <!-- LIST MAKANAN -->
            <div v-if="getDataPlans && !getDataPlans.length" class="text-center my-3"> </div>
            <div v-else class="flex py-5 border-b mb-5" v-for="plan in getDataPlans" :key="plan.id">
                <div class="flex-auto w-1/4">
                    <img class="w-full h-24 md:h-20 object-cover rounded-lg" :src="plan.makanan.image" alt="" >
                </div>
                <div class="flex-auto w-3/4 ml-3">
                    <div class="flex justify-between items-start md:items-center">
                        <h2 class="font-semibold w-3/4">{{ plan.makanan.nama }} <span class="text-xs">({{plan.makanan.total_berat}}gr)</span></h2>
                        <div class="flex items-center justify-end w-1/4">
                            <button @click="deletePlans(plan.id)" type="button"><font-awesome-icon icon="fa-solid fa-trash" class="text-red-500" /></button>
                            <button @click="addHistory(plan.id)" class="ml-2"><img src="../assets/share.svg" class="w-6" alt=""></button>
                        </div>
                    </div>
                    <div class="flex items-center text-xs mt-1 md:mt-3">
                        <div class="relative">
                            <span class="text-white bg-orange-400 hover:bg-orange-500 btnPlans">
                                Kalori: {{ plan.makanan.total_kalori }}
                            </span>
                            <span class="text-white bg-yellow-400 hover:bg-yellow-500 btnPlans">
                                Karbo: {{ plan.makanan.total_karbohidrat }}
                            </span>
                            <span class="text-white bg-orange-400 hover:bg-orange-500 btnPlans">
                                Lemak: {{ plan.makanan.total_lemak }}
                            </span>
                            <span class="text-white bg-yellow-400 hover:bg-yellow-500 btnPlans">
                                Protein: {{ plan.makanan.total_protein }}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <h3 class="text-sm font-semibold text-orange-600"></h3>
                        <div class="flex items-center space-x-1">
                            <button @click="minusQty(plan.qty, plan.id)" class="inline-flex items-center p-0.5 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                                <span class="sr-only">Quantity button</span>
                                <svg class="w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                            <div>
                                <input readonly type="number" class="bg-gray-50 w-6 md:w-10 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-orange-500 focus:border-orange-500 block text-center pr-0 pl-0 md:pl-3.5 pt-0.5 pb-0.5" v-model="plan.qty" >
                            </div>
                            <button @click="maxQty(plan.qty, plan.id)" class="inline-flex items-center p-0.5 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                                <span class="sr-only">Quantity button</span>
                                <svg class="w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- DETAIL NUTRISI -->
            <div v-if="getMetadataPlans" class=" p-5 rounded-lg shadow">
                <h2 class="font-semibold text-lg mb-3">Detail Total Nutrisi</h2>
                <div class="flex justify-between items-center mb-1">
                    <!-- Berat -->
                    <div class="">
                        <p>Total Berat</p>
                    </div>
                    <div class="">
                        <p>{{getMetadataPlans.count_berat}} <span class="text-xs">(gr)</span></p>
                    </div>
                </div>
                <div class="flex justify-between items-center mb-1">
                    <!-- Kalori -->
                    <div class="">
                        <p>Total Kalori</p>
                        <p class="text-xs text-yellow-600">*Max: {{ dataUser.kalori }}</p>
                    </div>
                    <div class="">
                        <p :class="{'text-red-500 font-semibold' : maxKalori}">{{getMetadataPlans.count_kalori}} <span class="text-xs">(gr)</span></p>
                    </div>
                </div>
                <div class="flex justify-between items-center mb-1">
                    <!-- Karbohidrat -->
                    <div class="">
                        <p>Total Karbohidrat</p>
                        <p class="text-xs text-yellow-600">*Min: {{ dataUser.karboMin }}, Max: {{ dataUser.karboMax }}</p>
                    </div>
                    <div class="">
                        <p :class="{'text-red-500 font-semibold': maxKarbo}"><span>{{getMetadataPlans.count_karbohidrat}} <span class="text-xs">(gr)</span></span></p>
                    </div>
                </div>
                <div class="flex justify-between items-center mb-1">
                    <!-- Lemak -->
                    <div class="">
                        <p>Total Lemak</p>
                        <p class="text-xs text-yellow-600">*Max: {{ dataUser.lemakMax }}</p>
                    </div>
                    <div class="">
                        <p :class="{'text-red-500 font-semibold' : maxLemak}">{{getMetadataPlans.count_lemak}} <span class="text-xs">(gr)</span></p>
                    </div>
                </div>
                <div class="flex justify-between items-center mb-1">
                    <!-- Protein -->
                    <div class="">
                        <p>Total Protein</p>
                        <p class="text-xs text-yellow-600">*Min: {{ dataUser.proteinMin }}, Max: {{ dataUser.proteinMax }}</p>
                    </div>
                    <div class="">
                        <p :class="{'text-red-500 font-semibold': maxProtein}">{{getMetadataPlans.count_protein}} <span class="text-xs">(gr)</span></p>
                    </div>
                </div>
                <div class="h-[1px] bg-slate-200 my-5"></div>
                <div class="flex justify-between items-center font-bold">
                    <h2>Jumlah Makanan</h2>
                    <h2>{{getMetadataPlans.count_makanan}}x</h2>
                </div>
            </div>
            <div v-else>
                <img src="../assets/empty-cart.webp" class="mx-auto w-3/4 md:w-2/6" alt="">
                <p class="text-center my-3">Kosong, silakan tambah makanan untuk kebutuhan gizimu!</p>
            </div>
        </div>
        <!-- ALERT OVER CAPACITY CALORIE -->
        <div v-if="getMetadataPlans && validNutrition" class="fixed bottom-0 border-t-[1px] rounded-t-lg bg-white w-full px-5 pt-3 pb-4">
            <div class="md:max-w-2xl lg:max-w-4xl md:mx-auto">
                <p class="text-red-700 font-semibold text-center text-xs md:text-sm mb-1.5">Wah Bahaya! Menu kamu melebihi batas nustrisimu</p>
                <button class="text-center w-full bg-red-500 text-white py-2 text-sm rounded-full font-bold">MEYDE! MELEBIHI BATAS NUTRISI</button>
            </div>
        </div>
        <div v-if="getMetadataPlans && minusNutrition" class="fixed bottom-0 border-t-[1px] rounded-t-lg bg-white w-full px-5 pt-3 pb-4">
            <div class="md:max-w-2xl lg:max-w-4xl md:mx-auto">
                <p class="text-red-700 font-semibold text-center text-xs md:text-sm mb-1.5">Menu kamu kurang dari batas minimum nustrisimu!</p>
                <button class="text-center w-full bg-red-500 text-white py-2 text-sm rounded-full font-bold">MEYDE! KURANG DARI BATAS NUTRISI</button>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import TittleFoods from '../components/foods/TittleFoods.vue'
export default {
    components: {
        TittleFoods
    },
    data() {
        return {
            plansFood: [],
            plansCount: {},
            dataUser: {}
        }
    },
    methods: {
        getPlans() {
            this.$store.dispatch('getPlans');
        },
        async getUser() {
            const token = localStorage.getItem('token');
            const dataUser = await fetch('https://cephat-backend-production.up.railway.app/users', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const users = await dataUser.json();
            // console.log(users.data.user)
            const convertKarbohidrat = JSON.parse(users.data.user.nutrition_profiles.karbohidrat);
            const convertLemak = JSON.parse(users.data.user.nutrition_profiles.lemak);
            const convertProtein = JSON.parse(users.data.user.nutrition_profiles.protein);
            this.dataUser = {
                id: users.data.user.id,
                nama: users.data.user.nama,
                kalori: users.data.user.nutrition_profiles.kalori,
                karboMin: convertKarbohidrat.min,
                karboMax: convertKarbohidrat.max,
                lemakMin: convertLemak.min,
                lemakMax: convertLemak.max,
                proteinMin: convertProtein.min,
                proteinMax: convertProtein.max,
            }
        },
        deletePlans(val) {
            this.$store.dispatch('deletePlans', val);
            toast.success("Yeay, Berhasil hapus menu!", {
                autoClose: 2000
            })
            this.getDataPlans;
            this.getMetadataPlans;
        },
        addHistory(val) {
            const plan = {
                plans_id: val,
                is_done: true
            }
            this.$store.dispatch('addHistory', plan);
            this.getDataPlans;
            this.getMetadataPlans;
            toast.success("Berhasil tambah ke history!", {
            autoClose: 2000
            })
        },
        minusQty(qty, id) {
            const plan = {
                plans_id: id,
                qty: qty - 1
            }
            this.$store.dispatch('minmaxPlans', plan);
        },
        maxQty(qty, id) {
            const plan = {
                plans_id: id,
                qty: qty + 1
            }
            this.$store.dispatch('minmaxPlans', plan);
        }
    },
    computed: {
        getDataPlans() {
            const plans = this.$store.getters.plansFood
            return this.plansFood = plans
        },
        getMetadataPlans() {
            const plans = this.$store.getters.plansCount
            return this.plansCount = plans
        },
        validNutrition() {
            if(this.getMetadataPlans.count_kalori > this.dataUser.kalori) {
                return true
            } else if(this.getMetadataPlans.count_karbohidrat > this.dataUser.karboMax) {
                return true
            } else if(this.getMetadataPlans.count_lemak > this.dataUser.lemakMax) {
                return true
            } else if(this.getMetadataPlans.count_protein > this.dataUser.proteinMax) {
                return true
            } 
            return false
        },
        minusNutrition() {
            if(this.getMetadataPlans.count_karbohidrat < this.dataUser.karboMin) {
                return true
            } else if(this.getMetadataPlans.count_protein < this.dataUser.proteinMin) {
                return true
            } 
            return false
        },
        maxKalori() {
            if(this.getMetadataPlans.count_kalori > this.dataUser.kalori) {
                return true
            }
            return false
        },
        maxKarbo() {
            if(this.getMetadataPlans.count_karbohidrat > this.dataUser.karboMax) {
                return true
            } if(this.getMetadataPlans.count_karbohidrat < this.dataUser.karboMin) {
                return true
            }
            return false
        },
        maxLemak() {
            if(this.getMetadataPlans.count_lemak > this.dataUser.lemakMax) {
                return true
            }
            return false
        },
        maxProtein() {
            if(this.getMetadataPlans.count_protein > this.dataUser.proteinMax) {
                return true
            } if(this.getMetadataPlans.count_protein < this.dataUser.proteinMin) {
                return true
            }
            return false
        },
    },
    mounted() {
        this.getPlans();
    },
    async created() {
        this.getUser();
    }
}
</script>
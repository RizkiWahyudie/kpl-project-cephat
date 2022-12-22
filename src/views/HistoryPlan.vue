<template>
    <div class="relative">
        <div class="containerr mb-40">
            <tittle-foods
                icon="fa-clock-rotate-left"
                title="History Plans Food"
                promo="Rencanakan gizimu lagi!"
                desc="Masih bisa nambah makanan lagi, ya"
                btn="Tambah"
            ></tittle-foods>
            <div v-if="getHistories">
                <div v-for="history in getHistories" :key="history.id" class="shadow rounded-lg bg-slate-100">
                    <div class="w-full p-4 rounded-lg mt-4 relative bg-white cursor-pointer" @click="changeState(history.id)">
                        <div class="flex">
                            <!-- <font-awesome-icon icon="fa-solid fa-utensils" class="text-white bg-orange-500 p-3 rounded-xl text-2xl" /> -->
                            <img :src="history.makanan.image" class="w-16 rounded-lg" alt="">
                            <div class="ml-3">
                                <h2 class="font-semibold text-lg">{{ history.makanan.nama }}</h2>
                                <h5 class="text-sm">Total Kalori: {{ history.total_kalori }}</h5>
                            </div>
                            <!-- <div class="absolute right-3 bottom-3 flex items-center">
                                <font-awesome-icon icon="fa-solid fa-bell" class="mr-1" />
                                <span class="bg-orange-100 py-0.5 px-2 rounded text-xs font-semibold text-orange-800">{{ history.qty }}</span>
                            </div> -->
                            <div class="absolute right-7 -bottom-7 md:bottom-4 transition-all ease-in-out" :class="history.state ? 'rotate-180' : ''"><font-awesome-icon icon="fa-solid fa-angle-up" /></div>
                            <div class="absolute left-1 top-1">
                                <div class="relative">
                                    <font-awesome-icon icon="fa-solid fa-certificate" class="text-orange-500 text-3xl" />
                                    <span class="absolute right-2 text-xs font-semibold text-white top-2">{{ history.qty}}x</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-2 text-sm bg-gray-100">
                        <!-- <transition-group name="animate"> -->
                            <div class="flex justify-between">
                                <div class="flex items-center">
                                    <font-awesome-icon icon="fa-solid fa-calendar-days" class="text-white bg-gray-700 text-xs p-1 rounded-full" />
                                    <span class="block text-sm ml-1">{{ history.tgl_konsumsi }}</span>
                                </div>
                                <!-- <div class="flex items-center">
                                    <span class="block text-sm ml-1">{{ order.timeOrder }}</span>
                                </div> -->
                            </div>
                            <div v-if="history.state" class="">
                                <!-- <div class="flex justify-between py-2">
                                    <p>No. Meja</p>
                                    <p>{{ order.noMeja }}</p>
                                </div> -->
                                <div class="border-dashed border-b-2 my-2"></div>
                                <div class="mb-2">
                                    <div class="flex justify-between">
                                        <span class="font-semibold">Total Berat</span>
                                        <span>{{history.total_berat}}</span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class="flex justify-between">
                                        <span class="font-semibold">Total Kalori</span>
                                        <span>{{history.total_kalori}}</span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class="flex justify-between">
                                        <span class="font-semibold">Total Karbohidrat</span>
                                        <span>{{history.total_karbohidrat}}</span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class="flex justify-between">
                                        <span class="font-semibold">Total Lemak</span>
                                        <span>{{history.total_lemak}}</span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class="flex justify-between">
                                        <span class="font-semibold">Total Protein</span>
                                        <span>{{history.total_protein}}</span>
                                    </div>
                                </div>
                                <!-- <div class="border-dashed border-b-2 mb-2"></div>
                                <div class="flex justify-between">
                                    <span>Total Bayar</span>
                                    <span class="font-bold">{{ convert(order.bayar) }}</span>
                                </div> -->
                            </div>
                        <!-- </transition-group> -->
                    </div>
                </div>
            </div>
            <div v-if="getHistories < 1">
                <img src="../assets/no-results.webp" class="mx-auto w-3/4 md:w-2/6" alt="">
                <p class="text-center my-3">Kosong, silakan tambah ke history jika sudah menyelesaikan rencana gizimu!</p>
            </div>
        </div>
    </div>
</template>

<script>
import TittleFoods from '../components/foods/TittleFoods.vue'

export default {
    components: {
        TittleFoods
    },
    data() {
        return {
            histories: [],
            state: false
        }
    },
    computed: {
        getHistories() {
            const history = this.$store.getters.getHistories
            console.log(history)
            return this.histories = history
        },
    },
    methods: {
        changeState(id) {
            const state = this.histories.find((history) => history.id === id)
            state.state = !state.state
        },
    },
    mounted() {
        this.$store.dispatch('getHistories');
    }
}
</script>
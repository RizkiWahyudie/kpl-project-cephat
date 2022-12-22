<template>
    <div>
        <div class="containerr">
            <!-- PRODUCTS -->
            <h2 class="text-2xl mb-2 md:ml-3 pt-3">All <span class="font-bold">Foods</span></h2>
            <label class="sr-only">Search</label>
            <div class="md:mx-2">
                <div class="relative w-full mb-3">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" v-model="filterFoods" class="bg-white border border-gray-300 focus:outline-transparent text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Search" required>
                </div>
            </div>
            <div class="md:mx-2 ">
                <div class="mb-6 w-full mx-auto z-50 bg-white flex justify-between items-center p-3 rounded-lg shadow">
                    <div class="">
                        <h2 class="font-semibold text-sm">Sudah puas memilih?</h2>
                        <p class="text-xs">Kalo sudah, tap button plans ya!</p>
                    </div>
                    <div class="">
                        <router-link to="/plans" class="nunito py-2 px-3 rounded-full font-semibold text-orange-600 text-sm bg-orange-100">Plans</router-link>
                    </div>
                </div>
            </div>
            <div class="flex mb-10 flex-col flex-wrap md:flex-row justify-around">
                <list-foods 
                    v-for="foods in filter" 
                    :key="foods.id"
                    :img="foods.image"
                    :title="foods.nama"
                    :kalori="foods.kalori"
                    :kode="foods.id"
                    :karbo="foods.karbohidrat"
                    :lemak="foods.lemak"
                    :protein="foods.protein"
                    :berat="foods.berat"
                    class="shadow md:w-100xl rounded-3xl px-6 pt-8 pb-8 relative mb-4"
                ></list-foods>
            </div>
        </div>
    </div>
</template>

<script>
import ListFoods from '../components/foods/ListFoods.vue';
import PaginateFoods from '../components/pagination/PaginateFoods.vue';

export default {
    components: {
        ListFoods, PaginateFoods
    },
    data() {
        return {
            foods: [],
            filterFoods: '',
            // pagination
            page: 1,
            totalPages: 7,
            total: 66,
            perPage: 10,
            currentPage: 1,
            hasMorePages: true
        }
    },
    methods: {
        getFoods() {
            const dataMakanan = this.$store.dispatch('getFoods', this.page);
            const results = [];
                for(const i in dataMakanan) {
                    results.unshift({
                        id: dataMakanan[i].id,
                        berat: dataMakanan[i].berat,
                        image: dataMakanan[i].image,
                        kalori : dataMakanan[i].kalori,
                        karbohidrat: dataMakanan[i].karbohidrat,
                        lemak: dataMakanan[i].lemak,
                        nama: dataMakanan[i].nama,
                        protein: dataMakanan[i].protein,
                    })
                }
            this.foods = results;
        },
        showMore(page) {
            this.page = page;
            this.currentPage = page;
            // console.log(this.page)
        },
    },
    computed: {
        getDataFoods() {
            const foody = this.$store.getters.foods
            return this.foods = foody
        },
        capitalize() {
            return this.filterFoods.charAt(0).toUpperCase() + this.filterFoods.slice(1);
        },
        filter() {
            let list = [];
            if(this.filterFoods === '') {
                list = this.getDataFoods
            } else {
                list = this.getDataFoods.filter(foods => 
                    foods.nama.includes(this.capitalize)
                );
            }
            return this.foods = list
        },
    },
    mounted() {
        this.getFoods();
    },
}
</script>
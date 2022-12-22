<template>
    <div class="nunito">
        <div class="flex justify-center">
            <img :src="img" alt="Makanan" class="bestImg h-36 w-36 object-cover" />
        </div>
        <h1 class="text-2xl text-orange-600 font-bold nunito mt-4 text-center">{{title}}</h1>
        <div class="flex justify-center mt-3 mb-2">
            <div class="text-center">
                <p class="text-xs text-gray-600">Protein</p>
                <span class="text-sm font-semibold ">{{ protein }}</span>
            </div>
            <div class="text-center mx-4">
                <p class="text-xs text-gray-600">Karbo</p>
                <span class="text-sm font-semibold ">{{ karbo }}</span>
            </div>
            <div class="text-center">
                <p class="text-xs text-gray-600">Lemak</p>
                <span class="text-sm font-semibold ">{{ lemak }}</span>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="text-center mr-2">
                <p class="text-xs text-gray-600">Kalori</p>
                <span class="text-sm font-semibold ">{{ kalori }}</span>
            </div>
            <div class="text-center ml-2">
                <p class="text-xs text-gray-600">Berat</p>
                <span class="text-sm font-semibold ">{{ berat }}</span>
            </div>
        </div>
        <button @click="postPlan" class="bestBtn">+</button>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    props: ['img', 'title', 'kalori', 'kode', 'karbo', 'lemak', 'protein', 'berat'],
    data() {
        return {
            // Plans
            plansFood: []
        }
    },
    methods: {
        postPlan() {
            if(this.getDataPlans) {
                const data = this.getDataPlans.find(plans => plans.makanan.id === this.kode);
                if(data) {
                    const plan = {
                    plans_id: data.id,
                    qty: data.qty + 1
                    }
                    // console.log(true)
                    this.$store.dispatch('updatePlans', plan);
                    toast.success("Berhasil, Tambah lagi yuk!", {
                    autoClose: 2000
                    })
                    // setTimeout(() => {
                    // // replace untuk menavigasikan link namun tidak bisa kembali ke form karena di replace
                    // this.$router.push('plans')
                    // }, 2500)
                } else {
                    const plan = {
                    makanan_id: this.kode,
                    qty: 1
                    }
                    // console.log(plan)
                    this.$store.dispatch('postPlans', plan);
                    toast.success("Berhasil, Tambah lagi yuk!", {
                    autoClose: 2000
                    })
                    // setTimeout(() => {
                    // // replace untuk menavigasikan link namun tidak bisa kembali ke form karena di replace
                    // this.$router.push('plans')
                    // }, 2500)
                }
            } else {
                const plan = {
                    makanan_id: this.kode,
                    qty: 1
                    }
                    // console.log(plan)
                    this.$store.dispatch('postPlans', plan);
                    toast.success("Berhasil, Tambah lagi yuk!", {
                    autoClose: 2000
                    })
                    // setTimeout(() => {
                    // // replace untuk menavigasikan link namun tidak bisa kembali ke form karena di replace
                    // this.$router.push('plans')
                    // }, 2500)
            }
        },
    },
    computed: {
        getDataPlans() {
            const plans = this.$store.getters.plansFood
            return this.plansFood = plans
        },
    },
    emits: ['addPlan'],
    mounted() {
        this.$store.dispatch('getPlans');
    }
}
</script>
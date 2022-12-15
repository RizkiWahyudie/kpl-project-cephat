<template>
    <div v-if="result">
        <!-- Main modal Calorie -->
        <div class="overflow-y-hidden overflow-x-hidden mx-auto sm:w-3/4 md:w-2/5 fixed inset-0 flex items-center z-50 p-4 w-full max-h-screen">
            <div class="relative mx-auto w-3/4 h-auto">
                <!-- Modal content -->
                <div class="p-4 bg-white relative text-center rounded-2xl shadow h-5/6">
                    <img src="@/assets/kcal-logo1.jpg" class="w-20 mx-auto" alt="">
                    <p class="text-green-400 text-sm nunito">Kebutuhan kalorimu sebanyak:</p>
                    <h1 class="text-3xl font-semibold mt-2.5 nunito">{{ hasilcalorie }}</h1>
                    <p class="text-xs mb-3">(Kal/hari)</p>
                    <div class="flex justify-around">
                        <div>
                            <h3>Protein</h3>
                            <p class="font-semibold">{{ proteinMin }} - {{ proteinMax }}</p>
                            <p class="text-xs">(gr/hari)</p>
                        </div>
                        <div>
                            <h3>Karbo</h3>
                            <p class="font-semibold">{{ karboMin }} - {{ karboMax }}</p>
                            <p class="text-xs">(gr/hari)</p>
                        </div>
                        <div>
                            <h3>Lemak</h3>
                            <p class="font-semibold">{{ lemakMin }} - {{ lemakMax }}</p>
                            <p class="text-xs">(gr/hari)</p>
                        </div>
                    </div>
                    <h3 class="text-sm text-red-500 font-semibold nunito mt-5">Jangan khawatir, yuk kita pilih-pilih makanan untuk kebutuhan Gizimu!</h3>
                    <div class="my-3">
                        <button type="submit" class="nunito focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2">
                            Yuk, Let's go!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['result', 'hasilcalorie', 'proteinMin', 'proteinMax', 'karboMin', 'karboMax', 'lemakMin', 'lemakMax'],
    computed: {
        kalorie() {
            return this.hasilcalorie.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
        }
    }
}
</script>
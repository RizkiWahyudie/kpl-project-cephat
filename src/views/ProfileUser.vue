<template>
    <div class="relative">
        <div class="containerr mb-20">
            <tittle-foods
                icon="fa-clock-rotate-left"
                title="Profile"
                promo="Update data pribadimu disini"
                desc="Bisa ubah data untuk menunjang gizimu dimari!"
                :btn="'Hallo!'"
            ></tittle-foods>
            <!-- Hasil Kalori -->
            <div class="relative mx-auto h-auto my-5">
                <!-- Modal content -->
                <div class="p-4 bg-white relative text-center rounded-2xl shadow h-5/6">
                    <img src="https://iili.io/Hnrc5mb.webp" class="w-20 mx-auto" alt="">
                    <p class="text-green-400 text-sm nunito">Kebutuhan kalorimu sebanyak:</p>
                    <h1 class="text-3xl font-semibold mt-2.5 nunito">{{dataUser.kalori}}</h1>
                    <p class="text-xs mb-3">(Kal/hari)</p>
                    <div class="flex justify-around">
                        <div>
                            <h3>Protein</h3>
                            <p class="font-semibold">{{ dataUser.proteinMin }} - {{ dataUser.proteinMax }}</p>
                            <p class="text-xs">(gr/hari)</p>
                        </div>
                        <div>
                            <h3>Karbo</h3>
                            <p class="font-semibold">{{ dataUser.karboMin }} - {{ dataUser.karboMax }}</p>
                            <p class="text-xs">(gr/hari)</p>
                        </div>
                        <div>
                            <h3>Lemak</h3>
                            <p class="font-semibold">{{ dataUser.lemakMin }} - {{ dataUser.lemakMax }}</p>
                            <p class="text-xs">(gr/hari)</p>
                        </div>
                    </div>
                    <h3 class="text-sm text-red-500 font-semibold nunito mt-5">Jangan khawatir, yuk kita pilih-pilih makanan untuk kebutuhan Gizimu!</h3>
                    <div class="my-3">
                        <router-link to="/foods" class="nunito focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2">
                            Yuk, Let's go!
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- Kalori Kalkulator -->
            <div class="relative bg-white rounded-2xl shadow h-5/6">
                <!-- Modal header -->
                <div class=" bg-white flex justify-between items-start p-3 rounded-t-2xl border-b">
                    <div class="flex items-center">
                        <img class="w-16" src="https://www.healthhub.sg/sites/assets/Assets/Programs/calorie-calculator/image01.gif" alt="">
                        <div class="ml-3 flex flex-col justify-start items-center">
                            <img class="rounded-lg h-5" src="https://www.healthhub.sg/sites/assets/Assets/Programs/calorie-calculator/image02.png" alt="">
                        </div>
                    </div>
                    <button type="button" @click="clickBtnClose" class="text-gray-400 bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 6.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <form @submit.prevent="submitProfile">
                    <!-- Modal body -->
                    <div class="p-6 space-y-6 bg-white md:h-96 h-5/6 overflow-auto">
                            <!-- NAMA -->
                            <base-title>
                                <template #header>
                                    Profile 1 dari 6
                                </template>
                                <template #question>
                                    Nama kamu
                                </template>
                            </base-title>
                            <div>
                                <div class="flex justify-center">
                                    <div class="relative">
                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg :class="dataUser.nama.state ? validSvg : invalidSvg" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <input type="text" @blur="clearValidity('nama')" v-model.trim="dataUser.nama.val"
                                            :class="dataUser.nama.state ? inputAlternative : invalidInput"
                                            placeholder="Enter your name">
                                    </div>
                                </div>
                                <p v-if="!dataUser.nama.state" :class="invalidInfo" class="text-center">{{ dataUser.nama.ket }}</p>
                                <div class="mb-5"></div>
                            </div>
                            <!-- GENDER -->
                            <base-title>
                                <template #header>
                                    Profile 2 dari 6
                                </template>
                                <template #question>
                                    Jenis kelaminmu
                                </template>
                            </base-title>
                            <ul class="calorie-all form-calorie flex-wrap">
                                <li class="relative">
                                    <input type="radio" id="gender-lk" name="gender" value="L" class="hidden peer" v-model="dataUser.jenis_kelamin" />
                                    <label for="gender-lk">
                                        <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                        <img class="rounded"
                                            src="https://iili.io/HnrcYIj.md.webp"
                                            alt="I'm sad" />
                                        <p class="calorie-subtitle nunito">Laki-laki</p>
                                    </label>
                                </li>
                                <li class="relative">
                                    <input type="radio" id="gender-pr" name="gender" value="P" class="hidden peer" v-model="dataUser.jenis_kelamin" />
                                    <label for="gender-pr">
                                        <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                        <img class="rounded"
                                            src="https://iili.io/Hnrcahx.md.webp"
                                            alt="I'm sad" />
                                        <p class="calorie-subtitle nunito">Perempuan</p>
                                    </label>
                                </li>
                            </ul>
                            <!-- BERAT BADAN -->
                            <base-title>
                                <template #header>
                                    Profile 3 dari 6
                                </template>
                                <template #question>
                                    Berat Badanmu
                                </template>
                            </base-title>
                            <div class="relative">
                                <img src="https://iili.io/Hnrc1EB.md.webp" class="w-5/6 md:w-1/2 mx-auto mb-3 rounded-lg shadow-sm" alt="">
                                <div class="absolute calory-bbb w-14 md:w-20">
                                    <div class="flex">
                                        <input @blur="clearValidity('berat_badan')" :class="dataUser.nama.state ? validBerat : invalidBerat" v-model="dataUser.berat_badan.val" placeholder="kg" type="text">
                                    </div>
                                </div>
                            </div>
                            <p v-if="!dataUser.berat_badan.state" :class="invalidInfo" class="text-center">{{ dataUser.nama.ket }}</p>
                            <div class="mb-7"></div>
                            <!-- TINGGI BADAN -->
                            <base-title>
                                <template #header>
                                    Profile 4 dari 6
                                </template>
                                <template #question>
                                    Tinggi Badanmu
                                </template>
                            </base-title>
                            <div class="relative">
                                <img src="https://iili.io/HnrccLQ.md.webp" class="w-5/6 md:w-1/2 mx-auto mb-3 rounded-lg shadow-sm" alt="">
                                <div class="absolute calory-bbb w-14 md:w-16">
                                    <div class="flex">
                                        <input @blur="clearValidity('tinggi_badan')" :class="dataUser.tinggi_badan.state ? validBerat : invalidBerat" v-model="dataUser.tinggi_badan.val" placeholder="cm" type="text">
                                    </div>
                                </div>
                            </div>
                            <p v-if="!dataUser.tinggi_badan.state" :class="invalidInfo" class="text-center">{{ dataUser.tinggi_badan.ket }}</p>
                            <div class="mb-7"></div>
                            <!-- UMUR -->
                            <base-title>
                                <template #header>
                                    Profile 5 dari 6
                                </template>
                                <template #question>
                                    Umur kamu
                                </template>
                            </base-title>
                            <div class="relative">
                                <img src="https://iili.io/Hnrc0BV.md.webp" class="w-5/6 md:w-2/4 mx-auto mb-3 rounded-lg shadow-sm" alt="">
                                <div class="absolute calory-agee w-20">
                                    <div class="flex">
                                        <input @blur="clearValidity('umur')" :class="dataUser.umur.state ? validBerat : invalidBerat" v-model="dataUser.umur.val" placeholder="Tahun" type="text">
                                    </div>
                                </div>
                            </div>
                            <p v-if="!dataUser.umur.state" :class="invalidInfo" class="text-center">{{ dataUser.umur.ket }}</p>
                            <div class="mb-7"></div>
                            <!-- aktivitas -->
                            <base-title>
                                <template #header>
                                    Profile 6 dari 6
                                </template>
                                <template #question>
                                    Tingkat aktivitasmu
                                </template>
                            </base-title>
                            <ul class="flex justify-center form-calorieA flex-wrap">
                                <li class="relative">
                                    <input type="radio" id="activity-rebahan" name="activity" value="1" class="hidden peer" v-model="dataUser.level_aktivitas" />
                                    <label for="activity-rebahan">
                                        <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                        <img class="rounded bg-white"
                                            src="https://iili.io/HnrcVYF.md.webp"
                                            alt="I'm sad" />
                                        <p class="calorie-subtitle nunito">Si Paling Netflix & Chill</p>
                                        <p class="text-xs text-center">Olahraga seminggu sekali bahkan tidak sama sekali</p>
                                    </label>
                                </li>
                                <li class="relative">
                                    <input type="radio" id="activity-duduk" name="activity" value="2" class="hidden peer" v-model="dataUser.level_aktivitas" />
                                    <label for="activity-duduk">
                                        <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                        <img class="rounded bg-white"
                                            src="https://iili.io/Hnrcwhv.md.webp"
                                            alt="I'm sad" />
                                        <p class="calorie-subtitle nunito">Si Paling Kerja kantoran</p>
                                        <p class="text-xs text-center">Olahraga seminggu dua kali minimal sekali</p>
                                    </label>
                                </li>
                                <li class="relative">
                                    <input type="radio" id="activity-jalan" name="activity" value="3"
                                        class="hidden peer" v-model="dataUser.level_aktivitas" />
                                    <label for="activity-jalan">
                                        <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                        <img class="rounded bg-white"
                                            src="https://iili.io/HnrcjTJ.md.webp"
                                            alt="I'm sad" />
                                        <p class="calorie-subtitle nunito">Si Paling Supervisor</p>
                                        <p class="text-xs text-center">Olahraga yang sering 3-4x karena kerja nya pun mengandung olahraga</p>
                                    </label>
                                </li>
                                <li class="relative">
                                    <input type="radio" id="activity-ojol" name="activity" value="4"
                                        class="hidden peer" v-model="dataUser.level_aktivitas" />
                                    <label for="activity-ojol">
                                        <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                        <img class="rounded bg-white"
                                            src="https://iili.io/HnrcXpa.md.webp"
                                            alt="I'm sad" />
                                        <p class="calorie-subtitle nunito">Si Paling Driver Ojol</p>
                                        <p class="text-xs text-center">Olahraga yang sering karena ngojol termasuk kegiatan cape</p>
                                    </label>
                                </li>
                                <li class="relative">
                                    <input type="radio" id="activity-tech" name="activity" value="5"
                                        class="hidden peer" v-model="dataUser.level_aktivitas" />
                                    <label for="activity-tech">
                                        <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                        <img class="rounded bg-white"
                                            src="https://iili.io/HnrceBp.md.webp"
                                            alt="I'm sad" />
                                        <p class="calorie-subtitle nunito">Si Paling Teknisi</p>
                                        <p class="text-xs text-center">Olahraga sangat sering karena pekerjaan yang berat</p>
                                    </label>
                                </li>
                            </ul>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-3 bg-white space-x-2 rounded-b-2xl border-t border-gray-200">
                        <button type="submit" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center">I accept</button>
                        <!-- <button type="button" class="text-gray-500 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg border border-gray-200 text-sm font-medium px-3 py-1.5 hover:text-gray-900 focus:z-10">Decline</button> -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import TittleFoods from '../components/foods/TittleFoods.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseCalorie from '@/components/base/BaseCalorie.vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    components: {
        TittleFoods, BaseTitle, BaseCalorie
    },
    data() {
        return {
            dataUser: {
                id : null,
                nama: {
                    val: '',
                    state: true,
                    ket: 'Oops! Please input name'
                },
                kalori : null,
                karboMin : null,
                karboMax : null,
                lemakMin : null,
                lemakMax : null,
                proteinMin : null,
                proteinMax : null,
                berat_badan: {
                    val: '',
                    state: true,
                    ket: 'Oops! Please input your weight'
                },
                jenis_kelamin : '',
                level_aktivitas : null,
                tinggi_badan: {
                    val: '',
                    state: true,
                    ket: 'Oops! Please input your tall'
                },
                umur : {
                    val: '',
                    state: true,
                    ket: 'Oops! Please input your age'
                },
            },
            resultKcal: 0,
            isValid: true,
        }
    },
    methods: {
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
            this.dataUser.id = users.data.user.id;
            this.dataUser.nama.val = users.data.user.nama,
            this.dataUser.kalori = users.data.user.nutrition_profiles.kalori,
            this.dataUser.karboMin = convertKarbohidrat.min,
            this.dataUser.karboMax = convertKarbohidrat.max,
            this.dataUser.lemakMin = convertLemak.min,
            this.dataUser.lemakMax = convertLemak.max,
            this.dataUser.proteinMin = convertProtein.min,
            this.dataUser.proteinMax = convertProtein.max,
            this.dataUser.berat_badan.val = users.data.user.profiles.berat_badan,
            this.dataUser.jenis_kelamin = users.data.user.profiles.jenis_kelamin,
            this.dataUser.level_aktivitas = users.data.user.profiles.level_aktivitas,
            this.dataUser.tinggi_badan.val = users.data.user.profiles.tinggi_badan,
            this.dataUser.umur.val = users.data.user.profiles.umur
            // console.log(this.dataUser)
        },
        clearValidity(input) {
            if(this.dataUser[input].val === '') {
                this.dataUser[input].state = false
            } else {
                this.dataUser[input].state = true
            }
        },
        validityForm() {
            this.isValid = true
            if(this.dataUser.nama.val === '') {
                this.dataUser.nama.state = false;
                this.isValid = false;
                this.dataUser.name.ket = 'Oops! Please input name';
            }
            if(this.dataUser.tinggi_badan.val === '') {
                this.tinggi_badan.state = false;
                this.isValid = false;
                this.tinggi_badan.ket = 'Oops! Please input your tall';
            // } else if(!this.email.val.includes('@')) {
            //     this.email.state = false;
            //     this.isValid = false;
            //     this.email.ket = 'Oops! Please added @ for your email!'
            // }
            }
            if(this.dataUser.berat_badan.val === '') {
                this.dataUser.berat_badan.state = false;
                this.isValid = false
                this.dataUser.berat_badan.ket = 'Oops! Please input your weight'
            }
            if(this.dataUser.umur.val === '') {
                this.dataUser.umur.state = false;
                this.isValid = false
                this.dataUser.umur.ket = 'Oops! Please input your age'
            }
            // else if(this.password2.val != this.password.val) {
            //     this.password2.state = false;
            //     this.isValid = false
            //     this.password2.ket = 'Oops! Password not match'
            // }
        },
        async submitProfile() {
            this.validityForm();
            if(this.isValid === false) {
                return
            }
            // Men:
            // BMR = (10 × weight [kg]) + (6.25 × height [cm]) – (5 × age [years]) + 5
            if(this.dataUser.jenis_kelamin === 'L') {
                var men1 = 10 * this.dataUser.berat_badan.val;
                var men2 = 6.25 * this.dataUser.tinggi_badan.val;
                var men3 = 5 * this.dataUser.umur.val;
                var men4 = men1 + men2 - men3 + 5
                
                if(this.dataUser.level_aktivitas === '1') {
                    var calcActivity = men4 * 1.2
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.dataUser.level_aktivitas === '2') {
                    var calcActivity = men4 * 1.375
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.dataUser.level_aktivitas === '3') {
                    var calcActivity = men4 * 1.55
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.dataUser.level_aktivitas === '4') {
                    var calcActivity = men4 * 1.725
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.dataUser.level_aktivitas === '5') {
                    var calcActivity = men4 * 1.9
                    this.resultKcal = Math.round(calcActivity)
                }
            } else if(this.dataUser.jenis_kelamin === 'P') {
                var pr1 = 10 * this.dataUser.berat_badan.val;
                var pr2 = 6.25 * this.dataUser.tinggi_badan.val;
                var pr3 = 5 * this.dataUser.umur.val;
                var pr4 = pr1 + pr2 - pr3 - 161
                
                if(this.dataUser.level_aktivitas === '1') {
                    var calcActivity = pr4 * 1.2
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.dataUser.level_aktivitas === '2') {
                    var calcActivity = pr4 * 1.375
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.dataUser.level_aktivitas === '3') {
                    var calcActivity = pr4 * 1.55
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.dataUser.level_aktivitas === '4') {
                    var calcActivity = pr4 * 1.725
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.dataUser.level_aktivitas === '5') {
                    var calcActivity = pr4 * 1.9
                    this.resultKcal = Math.round(calcActivity)
                }
            }
            // Women:
            // BMR = (10 × weight [kg]) + (6.25 × height [cm]) – (5 × age [years]) – 161
            const updateProfile = {
                nama: this.dataUser.nama.val,
                umur: this.dataUser.umur.val,
                jenis_kelamin: this.dataUser.jenis_kelamin,
                level_aktivitas: this.dataUser.level_aktivitas,
                tinggi_badan: this.dataUser.tinggi_badan.val,
                berat_badan: this.dataUser.berat_badan.val,
                // data nutrisi
                kalori: this.resultKcal,
                protein: {
                    min: this.calcProteinMin,
                    max: this.calcProteinMax
                },
                karbohidrat: {
                    min: this.calcKarboMin,
                    max: this.calcKarboMax
                },
                lemak: {
                    min: this.calcLemakMin,
                    max: this.calcLemakMax
                }
            }
            // console.log(updateProfile)
            try {
                await this.$store.dispatch('updateProfile', updateProfile);
                toast.success("Yeay! Kamu berhasil Update👋🏻", {
                    autoClose: 2000,
                });
                this.getUser();
            } catch (error) {
                toast.error("Yahh, Belum berhasil update😖", {
                    autoClose: 5000,
                });
            }
        }
    },
    computed: {
        kalorie() {
            return this.hasilcalorie.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
        },
        calcProteinMin() {
            var prot = this.resultKcal * 0.1 / 4
            return Math.round(prot)
        },
        calcProteinMax() {
            var prot = this.resultKcal * 0.35 / 4
            return Math.round(prot)
        },
        calcKarboMin() {
            var karb = this.resultKcal * 0.45 / 4
            return Math.round(karb)
        },
        calcKarboMax() {
            var karb = this.resultKcal * 0.65 / 4
            return Math.round(karb)
        },
        calcLemakMin() {
            var lem = this.resultKcal * 0.2 / 9
            return Math.round(lem)
        },
        calcLemakMax() {
            var lem = this.resultKcal * 0.35 / 9
            return Math.round(lem)
        },
        labelAlternative() {
            return 'block mb-2 text-sm font-medium text-gray-900'
        },
        inputAlternative() {
            return 'bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-64 md:w-80 pl-10 p-2.5'
        },
        invalidInput() {
            return 'bg-red-50 border border-red-500 text-red-900 text-sm placeholder-red-700 rounded-lg focus:ring-red-500 focus:border-red-500 block w-64 md:w-80 pl-10 p-2.5'
        },
        invalidLabel() {
            return 'block mb-2 text-sm font-medium text-red-700'
        },
        invalidInfo() {
            return 'mt-2 text-sm text-red-600'
        },
        validSvg() {
            return 'w-5 h-5 text-gray-500'
        },
        invalidSvg() {
            return 'w-5 h-5 text-red-700'
        },
        validBerat() {
            return 'text-center text-xs md:text-sm font-semibold block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-orange-500 focus:border-orange-500'
        },
        invalidBerat() {
            return 'text-center text-xs md:text-sm font-semibold block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-red-500 focus:border-red-500'
        }
    },
    async created() {
        this.getUser();
    }
}
</script>
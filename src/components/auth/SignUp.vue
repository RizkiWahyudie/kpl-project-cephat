<template>
    <div>
        <div class="min-h-screen">
            <form @submit.prevent="submitRegis">
            <!-- SIGN IN -->
            <section class="flex min-h-screen">
                <div class="hidden md:flex flex-1 bg-orange-400 items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-login text-5xl font-bold">love yourself !</h2>
                        <img src="https://iili.io/Hn8873J.webp" class="mx-auto w-3/4 my-4" alt="">
                        <p class="text-2xl text-login">Sayangi dirimu dulu, <br> sebelum kamu menyangi orang lain</p>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-center">
                    <div>
                        <h2 class="font-bold text-3xl text-center">Register</h2>
                        <div class="mt-6">
                            <div>
                                <label :class="name.state ? labelAlternative : invalidLabel">your
                                    Name</label>
                                <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg :class="name.state ? validSvg : invalidSvg" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"                                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <input type="text" @blur="clearValidity('name')" v-model.trim="name.val"
                                        :class="name.state ? inputAlternative : invalidInput"
                                        placeholder="Enter your name">
                                </div>
                                <p v-if="!name.state" :class="invalidInfo">{{ name.ket }}</p>
                                <div class="mb-3"></div>
                            </div>
                            <div>
                                <label :class="email.state ? labelAlternative : invalidLabel">your
                                    Email</label>
                                <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" :class="email.state ? validSvg : invalidSvg" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                            </path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>                                        </div>
                                        <input type="text" @blur="clearValidity('email')" v-model.trim="email.val"
                                            :class="email.state ? inputAlternative : invalidInput"
                                            placeholder="ex: rizkiwahyudie@gmail.com">
                                </div>
                                <p v-if="!email.state" :class="invalidInfo">{{ email.ket }}</p>
                                <div class="mb-3"></div>
                            </div>
                                <div>
                            <label :class="password.state ? labelAlternative : invalidLabel">your
                                    Password</label>
                                <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg :class="password.state ? validSvg : invalidSvg" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"                                                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                                            </path>
                                        </svg>
                                    </div>
                                    <input autocomplete="on" type="password" @blur="clearValidity('password')" v-model.trim="password.val"
                                        :class="password.state ? inputAlternative : invalidInput"
                                        placeholder="Enter your password">
                                </div>
                                <p v-if="!password.state" :class="invalidInfo">{{ password.ket }}</p>
                                <div class="mb-3"></div>
                            </div>
                            <div>
                                <label :class="password2.state ? labelAlternative : invalidLabel">confirm
                                    Password</label>
                                <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg :class="password2.state ? validSvg : invalidSvg" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                                            </path>
                                        </svg>
                                </div>
                                    <input autocomplete="on" type="password" @blur="clearValidity('password2')" minlength="8" required v-model.trim="password2.val"
                                        :class="password2.state ? inputAlternative : invalidInput"
                                        placeholder="Enter your password again">
                                </div>
                                <p v-if="!password2.state" :class="invalidInfo">{{ password2.ket }}</p>
                                <div class="mb-6"></div>
                            </div>
                            <button type="button"
                                class="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg w-64 md:w-80 text-sm px-5 py-2.5 mr-2 mb-2"
                            @click="stateRegis()">
                                REGISTER
                            </button>
                            <p>Kamu punya akun? <router-link to="/login" class="text-blue-500 font-semibold">Login</router-link></p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- FORM PROFILE -->
            <div v-if="!stateFormCalorie">
                <!-- Background -->
                <div class="bg-gray-900 bg-opacity-75 z-40 min-h-screen min-w-full fixed inset-0"></div>
                <!-- Main modal -->
                <div v-if="!stateBtnClose" class="overflow-y-hidden overflow-x-hidden mx-auto sm:w-3/4 md:w-2/4 fixed inset-0 flex items-center z-50 p-4 w-full max-h-screen">
                    <div class="relative w-full max-w-2xl h-full md:h-auto">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-2xl shadow h-5/6">
                            <!-- Modal header -->
                            <div class=" bg-gray-100 flex justify-between items-start p-3 rounded-t-2xl border-b">
                                <div class="flex items-center">
                                    <img class="w-16" src="https://www.healthhub.sg/sites/assets/Assets/Programs/calorie-calculator/image01.gif" alt="">
                                    <div class="ml-3 flex flex-col justify-start items-center">
                                        <img class="rounded-lg h-5" src="https://www.healthhub.sg/sites/assets/Assets/Programs/calorie-calculator/image02.png" alt="">
                                    </div>
                                </div>
                                <button type="button" @click="clickBtnClose" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-6 space-y-6 bg-gray-50 md:h-96 h-5/6 overflow-auto">
                                <form action="">
                                    <!-- GENDER -->
                                    <base-title>
                                        <template #header>
                                            Pertanyaan 1 dari 5
                                        </template>
                                        <template #question>
                                            Apa jenis kelamin kamu?
                                        </template>
                                    </base-title>
                                    <ul class="calorie-all form-calorie flex-wrap">
                                        <li class="relative">
                                            <input type="radio" id="gender-lk" name="gender" value="L" class="hidden peer" v-model="gender.val" />
                                            <label for="gender-lk">
                                                <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                                <img class="rounded"
                                                    src="https://iili.io/HnrcYIj.md.webp"
                                                    alt="I'm sad" />
                                                <p class="calorie-subtitle nunito">Laki-laki</p>
                                            </label>
                                        </li>
                                        <li class="relative">
                                            <input type="radio" id="gender-pr" name="gender" value="P" class="hidden peer" v-model="gender.val" />
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
                                            Pertanyaan 2 dari 5
                                        </template>
                                        <template #question>
                                            Berapa berat badan kamu?
                                        </template>
                                    </base-title>
                                    <div class="relative">
                                        <img src="https://iili.io/Hnrc1EB.md.webp" class="w-5/6 md:w-1/2 mx-auto mb-8 rounded-lg shadow-sm" alt="">
                                        <div class="absolute calory-bb w-14 md:w-12">
                                            <div class="flex">
                                                <input v-model="beratb.val" placeholder="kg" type="text" class="text-center text-xs md:text-sm font-semibold block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-orange-500 focus:border-orange-500">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- TINGGI BADAN -->
                                    <base-title>
                                        <template #header>
                                            Pertanyaan 3 dari 5
                                        </template>
                                        <template #question>
                                            Berapa tinggi badan kamu?
                                        </template>
                                    </base-title>
                                    <div class="relative">
                                        <img src="https://iili.io/HnrccLQ.md.webp" class="w-5/6 md:w-1/2 mx-auto mb-8 rounded-lg shadow-sm" alt="">
                                        <div class="absolute calory-bb w-14 md:w-12">
                                            <div class="flex">
                                                <input v-model="tinggib.val" placeholder="cm" type="text" class="text-center text-xs md:text-sm font-semibold block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-orange-500 focus:border-orange-500">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- UMUR -->
                                    <base-title>
                                        <template #header>
                                            Pertanyaan 4 dari 5
                                        </template>
                                        <template #question>
                                            Berapa umur kamu?
                                        </template>
                                    </base-title>
                                    <div class="relative">
                                        <img src="https://iili.io/Hnrc0BV.md.webp" class="w-5/6 md:w-3/4 mx-auto mb-8 rounded-lg shadow-sm" alt="">
                                        <div class="absolute calory-age w-16">
                                            <div class="flex">
                                                <input v-model="umur.val" placeholder="Tahun" type="text" class="text-center text-xs md:text-sm font-semibold block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-orange-500 focus:border-orange-500">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- aktivitas -->
                                    <base-title>
                                        <template #header>
                                            Pertanyaan 5 dari 5
                                        </template>
                                        <template #question>
                                            Pilihan mana yang paling menggambarkan <br>tingkat aktivitas kamu?
                                        </template>
                                    </base-title>
                                    <ul class="flex justify-center form-calorieA flex-wrap">
                                        <li class="relative">
                                            <input type="radio" id="activity-rebahan" name="activity" value="1" class="hidden peer" v-model="activity.val" />
                                            <label for="activity-rebahan">
                                                <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                                <img class="rounded bg-white"
                                                    src="https://iili.io/HnrcVYF.md.webp"
                                                    alt="I'm sad" />
                                                <p class="calorie-subtitle nunito">Si Paling Netflix & Chill</p>
                                                <p class="text-xs text-center">Aktivitas sangat ringan atau olahraga 0-1 kali/minggu</p>
                                            </label>
                                        </li>
                                        <li class="relative">
                                            <input type="radio" id="activity-duduk" name="activity" value="2" class="hidden peer" v-model="activity.val" />
                                            <label for="activity-duduk">
                                                <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                                <img class="rounded bg-white"
                                                    src="https://iili.io/Hnrcwhv.md.webp"
                                                    alt="I'm sad" />
                                                <p class="calorie-subtitle nunito">Si Paling Kerja kantoran</p>
                                                <p class="text-xs text-center">Aktivitas ringan atau olahraga 1-2 kali/minggu</p>
                                            </label>
                                        </li>
                                        <li class="relative">
                                            <input type="radio" id="activity-jalan" name="activity" value="3"
                                                class="hidden peer" v-model="activity.val" />
                                            <label for="activity-jalan">
                                                <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                                <img class="rounded bg-white"
                                                    src="https://iili.io/HnrcjTJ.md.webp"
                                                    alt="I'm sad" />
                                                <p class="calorie-subtitle nunito">Si Paling Supervisor</p>
                                                <p class="text-xs text-center">Aktivitas sedang atau olahraga 3-4 kali/minggu</p>
                                            </label>
                                        </li>
                                        <li class="relative">
                                            <input type="radio" id="activity-ojol" name="activity" value="4"
                                                class="hidden peer" v-model="activity.val" />
                                            <label for="activity-ojol">
                                                <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                                <img class="rounded bg-white"
                                                    src="https://iili.io/HnrcXpa.md.webp"
                                                    alt="I'm sad" />
                                                <p class="calorie-subtitle nunito">Si Paling Driver Ojol</p>
                                                <p class="text-xs text-center">Aktivitas outdoor atau olahraga 4-5 kali/minggu</p>
                                            </label>
                                        </li>
                                        <li class="relative">
                                            <input type="radio" id="activity-tech" name="activity" value="5"
                                                class="hidden peer" v-model="activity.val" />
                                            <label for="activity-tech">
                                                <img class="w-7 absolute img-select" src="https://iili.io/HnrcNQR.md.webp" alt="">
                                                <img class="rounded bg-white"
                                                    src="https://iili.io/HnrceBp.md.webp"
                                                    alt="I'm sad" />
                                                <p class="calorie-subtitle nunito">Si Paling Teknisi</p>
                                                <p class="text-xs text-center">Aktivitas Berat atau Olahraga setiap hari</p>
                                            </label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <!-- Modal footer -->
                            <div class="flex items-center p-3 bg-gray-100 space-x-2 rounded-b-2xl border-t border-gray-200">
                                <button type="button" @click="stateResult()" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center">Accept</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BASE CALORIE RESULT -->
                <!-- Main modal Calorie -->
                <div v-if="stateBtnClose" class="overflow-y-hidden overflow-x-hidden mx-auto sm:w-3/4 md:w-2/5 fixed inset-0 flex items-center z-50 p-4 w-full max-h-screen">
                    <div class="relative mx-auto w-3/4 h-auto">
                        <!-- Modal content -->
                        <div class="p-4 bg-white relative text-center rounded-2xl shadow h-5/6">
                            <img src="https://iili.io/Hnrc5mb.webp" class="w-20 mx-auto" alt="">
                            <p class="text-green-400 text-sm nunito">Kebutuhan kalorimu sebanyak:</p>
                            <h1 class="text-3xl font-semibold mt-2.5 nunito">{{ resultKcal }}</h1>
                            <p class="text-xs mb-3">(Kal/hari)</p>
                            <div class="flex justify-around">
                                <div>
                                    <h3>Protein</h3>
                                    <p class="font-semibold">{{ calcProteinMin }} - {{ calcProteinMax }}</p>
                                    <p class="text-xs">(gr/hari)</p>
                                </div>
                                <div>
                                    <h3>Karbo</h3>
                                    <p class="font-semibold">{{ calcKarboMin }} - {{ calcKarboMax }}</p>
                                    <p class="text-xs">(gr/hari)</p>
                                </div>
                                <div>
                                    <h3>Lemak</h3>
                                    <p class="font-semibold">{{ calcLemakMin }} - {{ calcLemakMax }}</p>
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
            </form>
        </div>
    </div>
</template>

<script>
import BaseTitle from '../base/BaseTitle.vue'
import BaseCalorie from '../base/BaseCalorie.vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    components: {
        BaseTitle, BaseCalorie
    },
    data() {
        return {
            stateBtnClose: false,
            // FORM CALORI
            invalidCalori: true,
            gender: {
                val: '',
                state: true,
                ket: 'Oops! Choose your gender!'
            },
            beratb: {
                val: null,
                state: true,
                ket: 'Oops! Input your weight!'
            },
            tinggib: {
                val: null,
                state: true,
                ket: 'Oops! Input your tall!'
            },
            umur: {
                val: null,
                state: true,
                ket: 'Oops! Input your age!'
            },
            activity: {
                val: '',
                state: true,
                ket: 'Oops! Choose your activity level!'
            },
            resultKcal: null,
            // FORM REGIS
            name: {
                val: '',
                state: true,
                ket: 'Oops! Please input name'
            },
            email: {
                val: '',
                state: true,
                ket: 'Oops! Please input email'
            },
            password: {
                val: '',
                state: true,
                ket: 'Oops! Please input password'
            },
            password2: {
                val: '',
                state: true,
                ket: 'Oops! Please Repeat password'
            },
            isValid: true,
            // spinner loading login page
            isLoading: false,
            // STATUS BUKA FORM CALORI
            stateFormCalorie: true
        }
    },
    methods: {
        validityForm() {
            this.isValid = true
            if(this.name.val === '') {
                this.name.state = false;
                this.isValid = false;
                this.name.ket = 'Oops! Please input name';
            }
            if(this.email.val === '') {
                this.email.state = false;
                this.isValid = false;
                this.email.ket = 'Oops! Please input email';
            } else if(!this.email.val.includes('@')) {
                this.email.state = false;
                this.isValid = false;
                this.email.ket = 'Oops! Please added @ for your email!'
            }
            if(this.password.val === '') {
                this.password.state = false;
                this.isValid = false
            }
            if(this.password.val.length < 8) {
                this.password.state = false;
                this.isValid = false
                this.password.ket= 'Oops! Password min. 8 characters'
            }
            if(this.password2.val.length < 8) {
                this.password2.state = false;
                this.isValid = false
                this.password2.ket= 'Oops! Password min. 8 characters'
            }
            if(this.password2.val === '') {
                this.password2.state = false;
                this.isValid = false
            } else if(this.password2.val != this.password.val) {
                this.password2.state = false;
                this.isValid = false
                this.password2.ket = 'Oops! Password not match'
            }
        },
        clearValidity(input) {
            if(this[input].val === '') {
                this[input].state = false
            } else {
                this[input].state = true
            }
        },
        stateRegis() {
            this.validityForm()
            if(this.isValid === false) {
                return
            }
            this.stateFormCalorie = !this.stateFormCalorie
        },
        clickBtnClose() {
            this.stateFormCalorie = !this.stateFormCalorie
        },
        async submitRegis() {
            this.validityForm();
            if(this.isValid === false) {
                return
            }
            this.isLoading = true;
            const dataForm = {
                nama: this.name.val,
                email: this.email.val,
                password: this.password.val,
                // data parameter
                jenis_kelamin: this.gender.val,
                umur: this.umur.val,
                berat_badan: this.beratb.val,
                tinggi_badan: this.tinggib.val,
                level_aktivitas: this.activity.val,
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
            // const regist = '/' + (this.$route.query.redirect || 'coaches')
            try {
                await this.$store.dispatch('signup', dataForm);
                toast.success("Yeay! Kamu berhasil Regis👋🏻", {
                    autoClose: 2000,
                });
                setTimeout(() => {
                    // replace untuk menavigasikan link namun tidak bisa kembali ke form karena di replace
                    this.$router.replace('/login');
                }, 3500)
            } catch (error) {
                this.stateBtnClose = false;
                this.stateFormCalorie = true;
                toast.error('Email sudah ada, ganti ya!', {
                    autoClose: 4000,
                });
            }
            this.isLoading = false
        },
        stateResult() {
            this.stateBtnClose = false;
            if(this.gender.val === '') {
                this.gender.state = false;
                this.invalidCalori = false;
            } else {
                this.gender.state = true;
                this.invalidCalori = true;
            }
            if(this.activity.val === '') {
                this.activity.state = false;
                this.invalidCalori = false;
            } else {
                this.activity.state = true;
                this.invalidCalori = true;
            }
            if(this.umur.val === null) {
                this.umur.state = false;
                this.invalidCalori = false;
            } else {
                this.umur.state = true;
                this.invalidCalori = true;
            }
            if(this.tinggib.val === null) {
                this.tinggib.state = false;
                this.invalidCalori = false;
            } else {
                this.tinggib.state = true;
                this.invalidCalori = true;
            }
            if(this.beratb.val === null) {
                this.beratb.state = false;
                this.invalidCalori = false;
            } else {
                this.beratb.state = true;
                this.invalidCalori = true;
            }
            if(this.invalidCalori === false) {
                toast.error("Yahh, ada yang belum diisi😖", {
                    autoClose: 5000,
                });
                return
            }
            this.invalidCalori = true;
            this.stateBtnClose = true;
            // Men:
            // BMR = (10 × weight [kg]) + (6.25 × height [cm]) – (5 × age [years]) + 5
            if(this.gender.val === 'L') {
                var men1 = 10 * this.beratb.val;
                var men2 = 6.25 * this.tinggib.val;
                var men3 = 5 * this.umur.val;
                var men4 = men1 + men2 - men3 + 5
                
                if(this.activity.val === '1') {
                    var calcActivity = men4 * 1.2
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.activity.val === '2') {
                    var calcActivity = men4 * 1.375
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.activity.val === '3') {
                    var calcActivity = men4 * 1.55
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.activity.val === '4') {
                    var calcActivity = men4 * 1.725
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.activity.val === '5') {
                    var calcActivity = men4 * 1.9
                    this.resultKcal = Math.round(calcActivity)
                }
            } else if(this.gender.val === 'P') {
                var pr1 = 10 * this.beratb.val;
                var pr2 = 6.25 * this.tinggib.val;
                var pr3 = 5 * this.umur.val;
                var pr4 = pr1 + pr2 - pr3 - 161
                
                if(this.activity.val === '1') {
                    var calcActivity = pr4 * 1.2
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.activity.val === '2') {
                    var calcActivity = pr4 * 1.375
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.activity.val === '3') {
                    var calcActivity = pr4 * 1.55
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.activity.val === '4') {
                    var calcActivity = pr4 * 1.725
                    this.resultKcal = Math.round(calcActivity)
                } else if(this.activity.val === '5') {
                    var calcActivity = pr4 * 1.9
                    this.resultKcal = Math.round(calcActivity)
                }
            }
            // Women:
            // BMR = (10 × weight [kg]) + (6.25 × height [cm]) – (5 × age [years]) – 161
            // console.log(this.resultKcal)
            // console.log(this.calcProteinMin)
            // console.log(this.calcProteinMax)
            // console.log(this.calcKarboMin)
            // console.log(this.calcKarboMax)
            // console.log(this.calcLemakMin)
            // console.log(this.calcLemakMax)
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
            return 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-64 md:w-80 pl-10 p-2.5'
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
        }
    },
}
</script>
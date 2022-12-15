<template>
    <div>
        <div class="min-h-screen">
            <section class="flex min-h-screen">
                <div class="flex-1 flex items-center justify-center">
                    <div>
                        <h2 class="font-bold text-3xl text-center">Login</h2>
                        <div class="mt-8">
                            <form @submit.prevent="submitLogin">
                                <div>
                                    <label :class="email.state ? labelAlternative : invalidLabel"
                                        >your Email</label>
                                    <div class="relative">
                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" :class="email.state ? validSvg : invalidSvg" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                                </path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                        </div>
                                        <input type="text" @blur="clearValidity('email')" v-model.trim="email.val"
                                            :class="email.state ? inputAlternative : invalidInput"
                                            placeholder="ex: rizkiwahyudie@gmail.com">
                                    </div>
                                    <p v-if="!email.state" :class="invalidInfo">{{ email.ket }}</p>
                                    <div class="mb-3"></div>
                                </div>
                                <div>
                                    <label :class="password.state ? labelAlternative : invalidLabel"
                                        >your Password</label>
                                    <div class="relative">
                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg :class="password.state ? validSvg : invalidSvg" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                                                </path>
                                            </svg>
                                        </div>
                                        <input autocomplete="on" type="password" @blur="clearValidity('password')" v-model.trim="password.val"
                                            :class="password.state ? inputAlternative : invalidInput"
                                            placeholder="Enter your password">
                                    </div>
                                    <p v-if="!password.state" :class="invalidInfo">{{ password.ket }}</p>
                                    <div class="mb-6"></div>
                                </div>
                                <button type="submit"
                                    class="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg w-64 md:w-80 text-sm px-5 py-2.5 mr-2 mb-2">
                                    <div v-if="isLoading">
                                        <svg role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                        </svg> Loading ...
                                    </div>
                                    <h3 v-else>LOGIN</h3>
                                </button>
                                <p>Kamu belum Login? <router-link to="/register" class="text-blue-500 font-semibold">Sign Up</router-link></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="hidden md:flex flex-1 bg-orange-400 items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-login text-5xl font-bold">let's start healty !</h2>
                        <img src="https://iili.io/Hn88YYv.webp" class="mx-auto w-3/4 my-4" alt="">
                        <p class="text-2xl text-login">Mau sehat ? Kamu nanya mau <br>sehat apa engga ?</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    data() {
        return {
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
            // spinner loading login page
            isLoading: false,
        }
    },
    methods: {
        validityForm() {
            this.isValid = true
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
        },
        clearValidity(input) {
            if(this[input].val === '') {
                this[input].state = false
            } else {
                this[input].state = true
            }
        },
        async submitLogin() {
            this.validityForm();
            if(this.isValid === false) {
                return
            }
            this.isLoading = true;
            const dataForm = {
                email: this.email.val,
                password: this.password.val
            }
            // const regist = '/' + (this.$route.query.redirect || 'coaches')
            try {
                await this.$store.dispatch('login', dataForm);
                toast.success("Yeay! Kamu berhasil Login👋🏻", {
                    autoClose: 2000,
                });
                setTimeout(() => {
                    // replace untuk menavigasikan link namun tidak bisa kembali ke form karena di replace
                    this.$router.replace('/');
                }, 3500)
                console.log(this.dataUser)
            } catch (error) {
                toast.error("Yahh, kamu blm punya akun😖", {
                    autoClose: 5000,
                });
            }
            this.isLoading = false
        },
    },
    computed: {
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
        },
        dataUser() {
            return this.$store.getters.dataUser
        }
    }
}
</script>
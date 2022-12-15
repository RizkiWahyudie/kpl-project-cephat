<template>
    <div>
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" class="flex items-center bg-white">
                    <img src="../assets/mie.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
                    <span class="self-center text-black text-xl font-semibold whitespace-nowrap">Cephat</span>
                </a>
                <div class="flex md:order-2">
                    <router-link to="login" v-if="!userState"
                        class="btnNav">
                        Sign In
                    </router-link>
                    <button @click="logout" v-else class="btnNav">Logout</button>
                    <button @click="navBar()" data-collapse-toggle="navbar-cta" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-700"
                        aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div :class="{'hidden': navbarStatus}" class="justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul
                        class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
                        <li>
                            <router-link class="nav-nonActive" active-class="nav-active"
                                to="/">
                                    Home
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-nonActive" active-class="nav-active"
                                to="/foods">
                                    Foods
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-nonActive" active-class="nav-active"
                                to="/plans">
                                    Plans
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-nonActive" active-class="nav-active"
                                to="/histories">
                                    History
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-nonActive" active-class="nav-active"
                                to="/user">
                                    Profile
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbarStatus: true,
            userState: false,
            // user: {}
        }
    },
    methods: {
        navBar() {
            this.navbarStatus = !this.navbarStatus
        },
        getUser() {
            const token = localStorage.getItem('token');
            this.userState = false
            if(token != null) {
                this.$store.dispatch('getUser');
                this.userState = true
            } else {
                this.userState = false
            }
        },
        logout() {
            this.$store.dispatch('logout');
            this.userState = false
            this.$router.replace('/login');
        }
    },
    computed: {
        // getDataUser() {
        //     const userr = this.$store.getters.dataUser
        //     return this.user = userr
        // },
    },
    mounted() {
        this.getUser();
    }
}
</script>
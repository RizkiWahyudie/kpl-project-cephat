// kita menyimpan expired time login bukan di vuex tapi di local storage
import router from '@/router/index.js'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
let timer;
export default {
    state() {
        return {
            token: null,
            userId: null,
            tokenExpired: null,
            setLogout: false,
            dataUser: {},
        }
    },
    mutations: {
        addDataUser(state, payload) {
            state.dataUser = payload.dataUser;
            // state.tokenExpired = payload.tokenExpired;
        },
        setSignup(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
            // state.tokenExpired = payload.tokenExpired;
        },
        signout(state, payload) {
            state.token = payload.token
            state.userId = payload.userId
            state.tokenExpired = payload.tokenExpired
        },
        autoSignout(state) {
            state.setLogout = true
            setTimeout(() => {
                state.setLogout = false
            }, 200);
        },
    },
    actions: {
        async getUser(context) {
            const token = localStorage.getItem('token');
            const dataUser = await fetch('https://cephat-backend-production.up.railway.app/users', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responseUser = await dataUser.json();
            // console.log(responseUser);
            context.commit('addDataUser', {
                dataUser: responseUser.data.user
            })
        },
        async login(context, payload) {
            // API KEY didapat di menu setting firebase
            // link URL didapat dari referensi firebase
            const response = await fetch('https://cephat-backend-production.up.railway.app/users/auth', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                })
            });
            const responseData = await response.json();
            // console.log(responseData)
            if(!response.ok) {
                // error ...
                const error = new Error(responseData.message || 'Incorrect your email/password!')
                throw error;
            }
            const dataUser = await fetch('https://cephat-backend-production.up.railway.app/users', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+responseData.data.access_token,
                    "Content-Type": "application/json",
                },
            });
            const responseUser = await dataUser.json();
            // console.log(responseUser);
            context.commit('addDataUser', {
                dataUser: responseUser.data.user
            })
            // OPEN LOCAL STORAGE
            // Menambahkan waktu expired
            // const expiresIn = + responseData.expiresIn * 1000;
            const expiresIn = 4000000;
            const expirateDate = new Date().getTime() + expiresIn;
            // setItem fungsinya menympan item-item(data) login kedalam local storage
            localStorage.setItem('token', responseData.data.access_token);
            localStorage.setItem('userId', responseUser.data.user.id);
            localStorage.setItem('tokenExpired', expirateDate);
            // CLOSE

            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            // mengatur waktu expired apabila sudah tiba waktunya maka otomatis logout
            timer = setTimeout(() => {
                context.dispatch('autoLogout');
            }, expiresIn);
            if(token && userId) {
                context.commit('setSignup', {
                    token: token,
                    userId: userId,
                })
            }
        },
        // actions dibawah untuk auto login
        autoLogin(context) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const tokenExpired = localStorage.getItem('tokenExpired');

            const expiresIn = + tokenExpired - new Date().getTime();
            // Jika waktu expired sudah habis maka mereturn menggagalkan eksekusi auto login
            if(expiresIn < 0) {
                return;
            }
            timer = setTimeout(() => {
                context.dispatch('logout');
            }, expiresIn);

            if(token && userId) {
                context.commit('setSignup', {
                    token: token,
                    userId: userId,
                })
            }
        },
        async signup(context, payload) {
            // API KEY didapat di menu setting firebase
            // link URL didapat dari referensi firebase
            const response = await fetch('https://cephat-backend-production.up.railway.app/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama: payload.nama,
                    email: payload.email,
                    password: payload.password,
                    // data parameter
                    jenis_kelamin: payload.jenis_kelamin,
                    umur: payload.umur,
                    berat_badan: payload.berat_badan,
                    tinggi_badan: payload.tinggi_badan,
                    level_aktivitas: payload.level_aktivitas,
                    // data nutrisi
                    kalori: payload.kalori,
                    protein: payload.protein,
                    karbohidrat: payload.karbohidrat,
                    lemak: payload.lemak
                })
            });
            const responseData = await response.json();
            // console.log(responseData)
            if(!response.ok) {
                // error ...
                const error = new Error(responseData.message || 'Email has already exist, Try another email!')
                throw error;
            }
        },
        logout(context) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('tokenExpired');

            clearTimeout(timer);

            context.commit('signout', {
                token: null,
                userId: null,
                tokenExpired: null,
            })
        },
        autoLogout(context) {
            context.dispatch('logout');
            context.commit('autoSignout');
            router.push("/login")
        }
    },
    getters: {
        dataUser(state) {
            return state.dataUser;
        },
        token(state) {
            return state.token;
        },
        isAuthenticated(state) {
            // menjadi boolean true apabila data terisi
            return !!state.token;
        },
        setLogout(state) {
            return state.setLogout;
        },
    },
}
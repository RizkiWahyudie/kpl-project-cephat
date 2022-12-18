export default {
    state() {
        return {
            foods: [],
            plansFood: [],
            plansCount: {},
            getHistories: []
        }
    },
    mutations: {
        setFoods(state, payload) {
            state.foods = payload;
        },
        setPlansFood(state, payload) {
            state.plansFood = payload;
        },
        setPlansCount(state, payload) {
            state.plansCount = payload;
        },
        setHistories(state, payload) {
            state.getHistories = payload;
        },
    },
    actions: {
        async getFoods(context) {
            const token = localStorage.getItem('token');
            const dataFoods = await fetch(`https://cephat-backend-production.up.railway.app/makanan?page`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responseFoods = await dataFoods.json();
            if(!dataFoods.ok) {
                // error ...
                const error = new Error(responseFoods.message);
                throw error;
            }
            // console.log(responseFoods.data.makanan)
            context.commit('setFoods', responseFoods.data.makanan);
        },
        async getHistories(context) {
            const token = localStorage.getItem('token');
            const dataFoods = await fetch(`https://cephat-backend-production.up.railway.app/histories`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responseFoods = await dataFoods.json();
            if(!dataFoods.ok) {
                // error ...
                const error = new Error(responseFoods.message);
                throw error;
            }
            // console.log(responseFoods.data.histories)
            context.commit('setHistories', responseFoods.data.histories);
        },
        async getPlans(context) {
            const token = localStorage.getItem('token');
            const dataPlans = await fetch(`https://cephat-backend-production.up.railway.app/plans`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responsePlans = await dataPlans.json();
            if(!dataPlans.ok) {
                // error ...
                const error = new Error(responsePlans.message);
                throw error;
            }
            // console.log(responsePlans.data.plans)
            // console.log(responsePlans.data.metadata)
            context.commit('setPlansFood', responsePlans.data.plans);
            context.commit('setPlansCount', responsePlans.data.metadata);
        },
        async postPlans(context, payload) {
            const token = localStorage.getItem('token');
            const dataFoods = await fetch(`https://cephat-backend-production.up.railway.app/plans`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    makanan_id: payload.makanan_id,
                    qty: payload.qty
                })
            });
            // console.log(payload.makanan_id)
            const responseFoods = await dataFoods.json();
            if(!dataFoods.ok) {
                // error ...
                const error = new Error(responseFoods.message);
                throw error;
            }
            // GET
            const dataPlans = await fetch(`https://cephat-backend-production.up.railway.app/plans`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responsePlans = await dataPlans.json();
            if(!dataPlans.ok) {
                // error ...
                const error = new Error(responsePlans.message);
                throw error;
            }
            // console.log(responsePlans.data.plans)
            // console.log(responsePlans.data.metadata)
            context.commit('setPlansFood', responsePlans.data.plans);
            context.commit('setPlansCount', responsePlans.data.metadata);
        },
        async updatePlans(context, payload) {
            // console.log(payload.plans_id)
            // console.log(payload.qty)
            const token = localStorage.getItem('token');
            const dataFoods = await fetch(`https://cephat-backend-production.up.railway.app/plans/` + payload.plans_id, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    qty: payload.qty
                })
            });
            // console.log(payload)
            const responseFoods = await dataFoods.json();
            if(!dataFoods.ok) {
                // error ...
                const error = new Error(responseFoods.message);
                throw error;
            }
            // GET
            const dataPlans = await fetch(`https://cephat-backend-production.up.railway.app/plans`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responsePlans = await dataPlans.json();
            if(!dataPlans.ok) {
                // error ...
                const error = new Error(responsePlans.message);
                throw error;
            }
            // console.log(responsePlans.data.plans)
            // console.log(responsePlans.data.metadata)
            context.commit('setPlansFood', responsePlans.data.plans);
            context.commit('setPlansCount', responsePlans.data.metadata);
        },
        async updateProfile(context, payload) {
            const token = localStorage.getItem('token');
            const dataFoods = await fetch(`https://cephat-backend-production.up.railway.app/users`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama: payload.nama,
                    umur: payload.umur,
                    jenis_kelamin: payload.jenis_kelamin,
                    level_aktivitas: payload.level_aktivitas,
                    tinggi_badan: payload.tinggi_badan,
                    berat_badan: payload.berat_badan,
                    // data nutrisi
                    kalori: payload.kalori,
                    protein: {
                        min: payload.protein.min,
                        max: payload.protein.max
                    },
                    karbohidrat: {
                        min: payload.karbohidrat.min,
                        max: payload.karbohidrat.max
                    },
                    lemak: {
                        min: payload.lemak.min,
                        max: payload.lemak.max
                    }
                })
            });
            // console.log(payload)
            const responseFoods = await dataFoods.json();
            if(!dataFoods.ok) {
                // error ...
                const error = new Error(responseFoods.message);
                throw error;
            }
        },
        async addHistory(context, payload) {
            // console.log(payload.plans_id)
            // console.log(payload.is_done)
            const token = localStorage.getItem('token');
            const dataFoods = await fetch(`https://cephat-backend-production.up.railway.app/plans/` + payload.plans_id, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    is_done: payload.is_done
                })
            });
            // console.log(payload)
            const responseFoods = await dataFoods.json();
            if(!dataFoods.ok) {
                // error ...
                const error = new Error(responseFoods.message);
                throw error;
            }

            // get Plans
            const dataPlans = await fetch(`https://cephat-backend-production.up.railway.app/plans`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responsePlans = await dataPlans.json();
            if(!dataPlans.ok) {
                // error ...
                const error = new Error(responsePlans.message);
                throw error;
            }
            context.commit('setPlansFood', responsePlans.data.plans);
            context.commit('setPlansCount', responsePlans.data.metadata);
        },
        async minmaxPlans(context, payload) {
            // console.log(payload.plans_id)
            // console.log(payload.qty)
            const token = localStorage.getItem('token');
            const dataFoods = await fetch(`https://cephat-backend-production.up.railway.app/plans/` + payload.plans_id, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    qty: payload.qty
                })
            });
            // console.log(payload)
            const responseFoods = await dataFoods.json();
            if(!dataFoods.ok) {
                // error ...
                const error = new Error(responseFoods.message);
                throw error;
            }

            // get Plans
            const dataPlans = await fetch(`https://cephat-backend-production.up.railway.app/plans`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responsePlans = await dataPlans.json();
            if(!dataPlans.ok) {
                // error ...
                const error = new Error(responsePlans.message);
                throw error;
            }
            context.commit('setPlansFood', responsePlans.data.plans);
            context.commit('setPlansCount', responsePlans.data.metadata);
        },
        async deletePlans(context, payload) {
            const token = localStorage.getItem('token');
            const deletePlans = await fetch(`https://cephat-backend-production.up.railway.app/plans/` + payload, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responseDelete = await deletePlans.json();
            if(!deletePlans.ok) {
                // error ...
                const error = new Error(responseDelete.message);
                throw error;
            }
            // get Plans
            const dataPlans = await fetch(`https://cephat-backend-production.up.railway.app/plans`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+token,
                    "Content-Type": "application/json",
                },
            });
            const responsePlans = await dataPlans.json();
            if(!dataPlans.ok) {
                // error ...
                const error = new Error(responsePlans.message);
                throw error;
            }
            context.commit('setPlansFood', responsePlans.data.plans);
            context.commit('setPlansCount', responsePlans.data.metadata);
        },
    },
    getters: {
        coaches(state) {
            return state.coaches;
        },
        foods(state) {
            return state.foods;
        },
        plansFood(state) {
            return state.plansFood;
        },
        plansCount(state) {
            return state.plansCount;
        },
        getHistories(state) {
            return state.getHistories;
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0
        }
    },
}
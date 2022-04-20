<template>
<div>
    <div class="container">

        <div class="col-md-12">
            <div class="form-group">
                <label for="cantidad">Ingrese Cantidad</label>
                <input type="number" class="form-control form-control-lg"
                    v-model="cantidad"
                    v-on:keyup="convertirMoneda"
                    id="cantidad" placeholder="Ingrese Cantidad..." max="100000">

            </div>

        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="tengo">Tengo</label>
                    <select class="form-control form-control-lg" id="tengo"
                        v-model="tengo"
                        v-on:change="convertirMoneda">
                        <option v-for="(moneda, index) in monedas" v-bind:key="index">{{ moneda }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="quiero">Quiero</label>
                    <select class="form-control form-control-lg" id="quiero"
                        v-model="quiero"
                        v-on:change="convertirMoneda">
                        <option v-for="(moneda, index) in monedas" v-bind:key="index">{{ moneda }}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="text-center" style="font-size: 200%;">
            <h5 style="font-size: 130%;">
                <span class="badge badge-success">{{ cantidad }} {{ tengo }}</span>
                <span class="badge badge-dark">SON</span>
                <span class="badge badge-success">{{ getTotal(total) }} {{ quiero }}</span>
            </h5>
        </div>
    </div>
</div>
</template>

<script>
    export default{
            data() {
                return {
                    dofs: [],
                    monedas: ['USD','MXN'],
                    cantidad: 0,
                    tengo: 'MXN',
                    quiero: 'USD',
                    total: 0,
                    dof:{dia: '',valor: ''}
                }

            },
            created() {
                axios.get('/dof').then(res=>{
                    this.dofs = res.data;
                })

            },
            methods: {

                convertirMoneda(){
                    switch (this.tengo) {
                        case 'USD':
                            if(this.quiero == 'USD'){
                                this.total =this.cantidad
                            }
                            if(this.quiero == 'MXN'){
                                this.total =this.cantidad * 19.9377
                            }
                            break;
                        case 'MXN':
                            if(this.quiero == 'MXN'){
                                this.total =this.cantidad
                            }
                            if(this.quiero == 'USD'){
                                this.total =this.cantidad / 19.9377
                            }
                            break;

                        default:
                            break;
                    }
                },
                getTotal(valor){
                    return valor.toFixed(2);

              },


            }

        }

</script>

<template>
<div>
            <p  v-for="(informacion, index) in informaciones" v-bind:key="index">
               Codigo: {{  informacion.code }}
                    -
                Info: {{  informacion.info }}
                    -
                type: {{  informacion.type }}
            </p>
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
                        <option value="">Selecciona Tipo de Cambio</option>
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
                        <option value="">Selecciona Tipo de Cambio</option>
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
                    monedas: ['USD','MXN'],
                    cantidad: 0,
                    tengo: 'MXN',
                    quiero: 'USD',
                    total: 0,
                    informaciones: {},
                    informacion: '',
                }

            },
            mounted () {

                const axios = require('axios').default;
                let access_key = 'bac7986d08e377de7e094b1255d8f6a2';
                let base = 'USD';
                let symbols = 'USD,MXN';
                axios.get('https://data.fixer.io/api/latest', {
                    params: {
                        access_key: access_key,
                        base: base,
                        symbols: symbols
                    }
                }).then(response => {

                    this.informaciones = response.data
                    console.log(response.data.error.object);
                }).catch(function (error) {
                        console.log(error);
                })

            },
            //bac7986d08e377de7e094b1255d8f6a2
            methods: {
                convertirMoneda(){
                    switch (this.tengo) {
                        case 'USD':
                            if(this.quiero == 'MXN'){
                                this.total =this.cantidad  * 19.9377
                            }
                            if(this.quiero == 'USD'){
                                this.total =this.cantidad
                            }
                            break;
                        case 'MXN':
                            if(this.quiero == 'USD'){
                                this.total =this.cantidad /19.9377
                            }
                            if(this.quiero == 'MXN'){
                                this.total =this.cantidad
                            }
                            break;

                        default:
                            this.total =this.cantidad
                            break;
                    }
                },
                getTotal(valor){
                    return valor;

              },

            }

        }

</script>




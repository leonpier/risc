<template>
    <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card>
            <v-card-text>
                <h3 class="title blue-grey--text text--darken-2 font-weight-regular" style="text-align:center">
                    <v-dialog v-model="dialog" scrollable max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn text color="primary" v-bind="attrs" v-on="on">
                            REPORTE - SALUD FAMILIAR <v-icon right>mdi-pencil</v-icon>
                            
                        </v-btn>
                        </template>
                        <filtro-seleccion ref="componente"></filtro-seleccion>
                    </v-dialog>
                </h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-form ref="form" lazy-validation>
                <v-row no-gutters style="height: 150px;">
                    <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="anios" v-model="search.anio" label="Año" item-text="name" item-value="id" multiple dense  outlined clearable required></v-autocomplete>
                        </v-card-text> 
                    </v-col>
                   <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="meses" v-model="search.mes" label="Mes" item-text="name" item-value="id" multiple dense  outlined clearable required></v-autocomplete>
                        </v-card-text> 
                    </v-col>
                    <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-select :items="categorias" @change="getRenew()" v-model="search.categoria" :menu-props="{ maxHeight: '400' }" label="Categorías" item-text="name" item-value="id" multiple  dense outlined></v-select>
                        </v-card-text>
                    </v-col>
                    <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="unidades" v-model="search.unidad" @change="getRedes()" label="Unidad Ejecutora" item-text="name" item-value="id" multiple dense  outlined clearable required></v-autocomplete>
                        </v-card-text>
                    </v-col>
                    <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="redes" v-model="search.red" @change="getMicroredes()" label="Red" item-text="name" item-value="id" multiple dense outlined ></v-autocomplete>
                        </v-card-text>
                    </v-col>
                    <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="microredes" v-model="search.microred" @change="getEstablecimientos()" label="Micro Red" item-text="name" item-value="id" multiple dense outlined ></v-autocomplete>
                        </v-card-text>
                    </v-col>
                    <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="establecimientos" v-model="search.establecimiento"  label="Establecimiento" item-text="name" item-value="id" multiple dense outlined ></v-autocomplete>
                        </v-card-text>
                    </v-col>
                    <v-col md="2" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="info" class="white--text" style="width:100%" @click="validate">
                                <v-icon left dark>mdi-magnify</v-icon> Buscar
                            </v-btn>
                        </v-card-text>
                    </v-col>
                    <v-col md="1" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="success" class="white--text" style="width:100%;">
                                <v-icon left dark>mdi-download</v-icon> Excel
                            </v-btn>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
      </v-col>
      <v-col md="12">
            <v-divider></v-divider>
        </v-col>
            
            <reporte-salud-familiar ref="componente"></reporte-salud-familiar>

    </v-row>
    </v-container>
</template>

<script>
import ReporteSaludFamiliar from './SaludFamiliar/reporteSaludFamiliar.vue';
import filtroSeleccion from '../filtros/filtroSeleccion.vue';
export default {
  name: "Profile",

  data: () => ({
    dialog: false,
    unidades: [],
    redes: [],
    microredes: [],
    anios: [2019,2020,2021,2022],
    establecimientos: [],
    search: {
        unidad: [],
        mes: '',
        anio: '',
        red: [],
        microred: [],
        establecimiento: [],
      },
    meses: [
        { id: "01", name: 'Enero' },
        { id: "02", name: 'Febrero' },
        { id: "03", name: 'Marzo' },
        { id: "04", name: 'Abril' },
        { id: "05", name: 'Mayo' },
        { id: "06", name: 'Junio' },
        { id: "07", name: 'Julio' },
        { id: "08", name: 'Agosto' },
        { id: "09", name: 'Setiembre' },
        { id: "10", name: 'Octubre' },
        { id: "11", name: 'Noviembre' },
        { id: "12", name: 'Diciembre' },
    ],
    categoria: ["I-1", "I-2", "I-3", "I-4", "II-1", "II-2", "II-E", "Sin Categoria"],
    categorias: [
        { id: "I-1", name: 'I-1' },
        { id: "I-2", name: 'I-2' },
        { id: "I-3", name: 'I-3' },
        { id: "I-4", name: 'I-4' },
        { id: "II-1", name: 'II-1' },
        { id: "II-2", name: 'II-2' },
        { id: "II-E", name: 'II-E' },
        { id: "Sin Categoria", name: 'Sin Categoria' }
    ]
  }),
  components: {
      ReporteSaludFamiliar,
      filtroSeleccion
  },
  created() {
    this.getUnidades()
    // ReporteSaludFamiliar()
  },
  methods: {
    validate () {
        if(this.$refs.form.validate()){
            this.$refs.componente.getData(this.search);
        }
    },
    getRenew(){
     
    },
    verifica(dt){
        if (dt.length > 0){
            return dt.reduce((f, s) => `${f},${s}`)
        }else{
            return ''
        }
    },
    async getUnidades() {
        await this.axios.get(this.$api_url + '/unidades_ejecutoras/1').then(response => {
            this.unidades = response.data
        })
    },
    async getRedes() {
        await this.axios.get(this.$api_url + '/redes',{
            params: {
                ids: this.search.unidad.join(','),
                idcats: this.search.categoria
            }
        }).then(response => {
            this.redes = response.data
        })
    },  
    async getMicroredes() {
        await this.axios.get(this.$api_url + '/microredes',{
            params: {
                ids: this.search.red.join(','),
                idcats: this.search.categoria
            }
        }).then(response => {
            this.microredes = response.data
        })
    },
    async getEstablecimientos() {
        await this.axios.get(this.$api_url + '/establecimientos',{
            params: {
                ids: this.search.microred.join(','),
                idcats: this.search.categoria
            }
        }).then(response => {
            this.establecimientos = response.data
        })
    },
  }
};
</script>

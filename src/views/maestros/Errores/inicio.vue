<template>
    <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card>
            <v-card-text>
                <h3 class="title blue-grey--text text--darken-2 font-weight-regular" style="text-align:center">
                    Reporte de Errores
                </h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-col md="12" ></v-col>
            <v-row>
                <v-col cols="12" lg="12">
                    <v-card>
                        <v-form ref="form" lazy-validation>
                            <v-row no-gutters>
                                <v-col md="3" >
                                    <v-card-text class="pa-2" >
                                        <v-autocomplete :items="unidades" v-model="search.unidad" @change="getRedes()" label="Unidad Ejecutora" item-text="name" item-value="name" multiple dense  outlined clearable required></v-autocomplete>
                                    </v-card-text>
                                </v-col>
                                <v-col md="3" >
                                    <v-card-text class="pa-2" >
                                        <v-autocomplete :items="redes" v-model="search.red" @change="getMicroredes()" label="Red" item-text="name" item-value="name" multiple dense outlined ></v-autocomplete>
                                    </v-card-text>
                                </v-col>
                                <v-col md="3" >
                                    <v-card-text class="pa-2" >
                                        <v-autocomplete :items="microredes" v-model="search.microred" @change="getEstablecimientos()" label="Micro Red" item-text="name" item-value="name" multiple dense outlined ></v-autocomplete>
                                    </v-card-text>
                                </v-col>
                                <v-col md="3" >
                                    <v-card-text class="pa-2" >
                                        <v-autocomplete :items="establecimientos" v-model="search.establecimiento"  label="Establecimiento" item-text="name" item-value="id" multiple dense outlined ></v-autocomplete>
                                    </v-card-text>
                                </v-col>
                                <v-col md="4" ><br></v-col>
                                <v-col md="4" style="height: 10px; text-align:center">
                                    <v-card-text class="pa-2" >
                                        <v-btn color="info" class="white--text" style="width:100%" @click="validate">
                                            <v-icon left dark>mdi-magnify</v-icon> Buscar
                                        </v-btn>
                                    </v-card-text>
                                </v-col>
                                <v-col md="4" ><br></v-col>
                                <v-col md="12">
                                    <br>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
            <v-col md="12">
                <v-divider></v-divider>
            </v-col>
        </v-card>
      </v-col>
      <v-col md="12">
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">Cód</th>
                        <th class="text-left">Red</th>
                        <th class="text-left">Microred</th>
                        <th class="text-left">Establecimiento</th>
                        <th class="text-left"># Errores</th>
                        <th class="text-left" style="width:80px">Descargar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style="font-size:8px"
                        v-for="item in list"
                        :key="item.codigo_unico"
                    >
                        <td>{{ item.codigo_unico }}</td>
                        <td>{{ item.red }}</td>
                        <td>{{ item.microred }}</td>
                        <td>{{ item.Nombre_Establecimiento }}</td>
                        <td style="text-align:center">{{ item.errores }}</td>
                        <td>
                            <v-card-text class="pa-2" >
                                <v-btn color="success" class="white--text" @click="download(item.codigo_unico)" small>
                                    <v-icon left dark>mdi-download</v-icon> Excel
                                </v-btn>
                            </v-card-text>
                        </td>
                    </tr>
                    </tbody>
                </template>
                </v-simple-table>
            <v-pagination v-model="listQuery.page"  @input="getData" total-visible="10" :length="total"></v-pagination>
            <!--
            <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getCondiciones" />
                -->
        </v-col>
    </v-row>
    </v-container>
</template>

<script>

export default {
  name: "Profile",

  data: () => ({
    unidades: [],
    redes: [],
    microredes: [],
    establecimientos: [],
    tableKey: 0,
    total: 0,
    codigo: '',
    dialog: false,
    listLoading: true,
    list: null,
    search: {
        unidad: [],
        red: [],
        microred: [],
        establecimiento: [],
    },
    
    listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        busqueda: undefined,
        estado: undefined
      },
  }),
  components: {

  },
  created() {
    this.getUnidades()
  },
  methods: {
    validate () {
        if(typeof this.getData !== "undefined"){
            this.getData(this.search)
        } else {
            alert("Seleccione un reporte")
        }
    },
    verifica(dt){
        if(dt){
            if (dt.length > 0){
                return dt.reduce((f, s) => `${f},${s}`)
            }else{
                return ''
            }
        }else{
            return ''
        }    
    },
    
    async getData() {
        await this.axios.get(this.$api_url + '/errores',{
            params: {
                establecimiento: this.verifica(this.search.establecimiento),
                unidad: this.verifica(this.search.unidad),
                red: this.verifica(this.search.red),
                microred: this.verifica(this.search.microred),
                page: this.listQuery.page,
                limit: this.listQuery.limit,
            }
        }).then(response => {
            this.list = response.data.data
            this.total = response.data.last_page
        })
    },
    async getUnidades() {
        await this.axios.get(this.$api_url + '/filtrosErrores').then(response => {
            this.unidades = response.data.unidad,
            this.redes = response.data.red,
            this.microredes = response.data.microred,
            this.establecimientos = response.data.establecimiento,
            this.categorias = response.data.categoria
        })
    },
    download() {
        
    },
    async getRedes() {
        await this.axios.get(this.$api_url + '/filtrosErrores',{
            params: {
                unidad: this.search.unidad.join(','),
                red: this.search.red.join(','),
                microred: this.search.microred.join(','),
            }
        }).then(response => {
            this.redes = response.data.red,
            this.categorias = response.data.categoria
        })
    },  
    async getMicroredes() {
        await this.axios.get(this.$api_url + '/filtrosErrores',{
           params: {
                unidad: this.search.unidad.join(','),
                red: this.search.red.join(','),
                microred: this.search.microred.join(','),
            }
        }).then(response => {
            this.microredes = response.data.microred,
            this.categorias = response.data.categoria
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
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
};
</script>

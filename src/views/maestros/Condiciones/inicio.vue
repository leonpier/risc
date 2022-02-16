<template>
    <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card>
            <v-card-text>
                <h3 class="title blue-grey--text text--darken-2 font-weight-regular" style="text-align:center">
                    Condiciones
                </h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-col md="12" style="height: 10px;"></v-col>
            <v-form ref="form" lazy-validation>
                <v-row no-gutters style="height: 60px;">
                    <v-col md="1" style="height: 10px;"></v-col>
                    <v-col md="2" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="anios" v-model="search.anio" :menu-props="{ maxHeight: '400' }" label="Años" item-text="name" item-value="id" multiple dense  outlined clearable></v-autocomplete>
                        </v-card-text> 
                    </v-col>
                    <v-col md="3" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="actividades" v-model="search.actividad" :menu-props="{ maxHeight: '400' }" label="Actividad" item-text="actividad" item-value="actividad" multiple clearable  dense outlined></v-autocomplete>
                        </v-card-text> 
                    </v-col>
                    <v-col md="2" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-text-field label="Código" v-model="search.codigo" hide-details="auto" dense outlined></v-text-field>
                        </v-card-text> 
                    </v-col>
                    <v-col md="1" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="info" class="white--text" style="width:100%" @click="getCondiciones">
                                <v-icon left dark>mdi-magnify</v-icon> Buscar
                            </v-btn>
                        </v-card-text>
                    </v-col>
                    <v-col md="1" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="warning" class="white--text" style="width:100%" @click="verModal(0)">
                                <v-icon left dark>mdi-plus</v-icon> Nuevo
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
                <v-dialog v-model="dialog" scrollable max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Nueva Condición</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select :items="['2019', '2020', '2021', '2022']" label="Año" required ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-select :items="actividades" label="Actividad" item-text="actividad" item-value="actividad" required ></v-select>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Email*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Password*" type="password" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Interests" multiple></v-autocomplete>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-form>
        </v-card>
      </v-col>
      <v-col md="12">
            <v-divider></v-divider>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">Año</th>
                        <th class="text-left">Actividad</th>
                        <th class="text-left">Código</th>
                        <th class="text-left">TDX</th>
                        <th class="text-left">LAB</th>
                        <th class="text-left">Mínimo</th>
                        <th class="text-left">Maximo</th>
                        <th class="text-left">edad_a</th>
                        <th class="text-left">edad_m</th>
                        <th class="text-left">edad_d</th>
                        <th class="text-left">sexo</th>
                        <th class="text-left">codigo_ant</th>
                        <th class="text-left">codigo_ad</th>
                        <th class="text-left">tdx_ad</th>
                        <th class="text-left">lab_ad</th>
                        <th class="text-left">Tipo</th>
                        <th class="text-left">fec_inicio_apl</th>
                        <th class="text-left">fec_fin_apl</th>
                        <th class="text-left">estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style="font-size:8px"
                        v-for="item in list"
                        :key="item.id_condicion"
                    >
                        <td>{{ item.ano }}</td>
                        <td>{{ item.actividad }}</td>
                        <td>{{ item.codigo }}</td>
                        <td>{{ item.tdx }}</td>
                        <td>{{ item.lab }}</td>
                        <td>{{ item.num_min }}</td>
                        <td>{{ item.num_max }}</td>
                        <td>{{ item.edad_min_a + ' a ' + item.edad_max_a }}</td>
                        <td>{{ item.edad_min_m + ' a ' + item.edad_max_m }}</td>
                        <td>{{ item.edad_min_d + ' a ' + item.edad_max_d }}</td>
                        <td>{{ item.sexo }}</td>
                        <td>{{ item.codigo_ant }}</td>
                        <td>{{ item.codigo_ad }}</td>
                        <td>{{ item.tdx_ad }}</td>
                        <td>{{ item.lab_ad }}</td>
                        <td>{{ item.tipo_control }}</td>
                        <td>{{ item.fec_inicio_apl }}</td>
                        <td>{{ item.fec_fin_apl }}</td>
                        <td>{{ item.estado }}</td>
                    </tr>
                    </tbody>
                </template>
                </v-simple-table>
            <v-pagination v-model="listQuery.page"  @input="getCondiciones" total-visible="10" :length="total"></v-pagination>
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
    tableKey: 0,
    total: 0,
    codigo: '',
    dialog: false,
    listLoading: true,
    list: null,
    anios: [],
    actividades: [],
    search: {
        anio: [],
        actividad: [],
        codigo: null
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
    this.getCondiciones()
    this.getAnio()
    this.getActividad()
  },
  methods: {
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
    async getActividad() {
        await this.axios.get(this.$api_url + '/filtros/actividad').then(response => {
            this.actividades = response.data
        })
    },
    verModal() {
        this.dialog = true
    },
    getAnio() {
        var currentTime = new Date()
        var year = currentTime.getFullYear()
        var c = 0
        for (let index = 2019; index < year; index++) {
            this.anios[c] = index
            c++
        }
        console.log(this.anios)
    },
    async getCondiciones() {
        await this.axios.get(this.$api_url + '/condiciones',{
            params: {
                page: this.listQuery.page,
                limit: this.listQuery.limit,
                busqueda: this.listQuery.busqueda,
                estado: this.listQuery.estado,
                anio: this.verifica(this.search.anio),
                codigo: this.search.codigo,
                actividad: this.verifica(this.search.actividad)
            }
        }).then(response => {
            this.list = response.data.data
            this.total = response.data.last_page
            
            setTimeout(() => {
            this.listLoading = false
            }, 1.5 * 1000)
        }).catch(error => {
            console.log(error)
      })
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
};
</script>

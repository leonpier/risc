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
                    <v-col md="2" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="anios" v-model="search.anio" :menu-props="{ maxHeight: '400' }" label="Años" item-text="name" item-value="id" multiple dense  outlined clearable></v-autocomplete>
                        </v-card-text> 
                    </v-col>
                    <v-col md="2" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete :items="actividades" v-model="search.actividad" :menu-props="{ maxHeight: '400' }" label="Actividad" item-text="actividad" item-value="actividad" multiple clearable  dense outlined></v-autocomplete>
                        </v-card-text> 
                    </v-col>
                    <v-col md="2" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-text-field label="Código" v-model="search.codigo" hide-details="auto" dense outlined></v-text-field>
                        </v-card-text> 
                    </v-col>
                    <v-col md="2" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="info" class="white--text" style="width:100%" @click="getCondiciones">
                                <v-icon left dark>mdi-magnify</v-icon> Buscar
                            </v-btn>
                        </v-card-text>
                    </v-col>
                    <v-col md="2" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="warning" class="white--text" style="width:100%" @click="verModal(0)">
                                <v-icon left dark>mdi-plus</v-icon> Nuevo
                            </v-btn>
                        </v-card-text>                        
                    </v-col>
                    <v-col md="2" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="success" class="white--text" style="width:100%;">
                                <v-icon left dark>mdi-download</v-icon> Excel
                            </v-btn>
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-dialog v-model="dialog" scrollable max-width="700px">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{nomModal}}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select v-model="condicion.ano" :items="anios" item-text="name" item-value="name" label="Año" required ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-select v-model="condicion.actividad" :items="actividades" label="Actividad" item-text="actividad" item-value="actividad" required ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="condicion.codigo" label="Código*" type="text" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select v-model="condicion.tdx" :items="TDXs" :menu-props="{ maxHeight: '400' }" item-text="TDX" item-value="TDX" label="TDX" required ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select v-model="condicion.sexo" :items="['M', 'F']" label="Sexo" required ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-select v-model="condicion.tipo_control" :items="tipos_controles" item-text="name" item-value="id" label="Tipo Control" required ></v-select>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.lab" label="lab*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.num_min" label="num_min*" type="number" required></v-text-field>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.num_max" label="num_max*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.edad_min_a" label="edad_min_a*" type="number" required></v-text-field>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.edad_max_a" label="edad_max_a*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.edad_min_m" label="edad_min_m*" type="number" required></v-text-field>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.edad_max_m" label="edad_max_m*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.edad_min_d" label="edad_min_d*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.edad_max_d" label="edad_max_d*" type="number" required></v-text-field>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.codigo_ant" label="codigo_ant*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.codigo_ad" label="codigo_ad*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.tdx_ad" label="tdx_ad*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="condicion.lab_ad" label="lab_ad*" type="number" required></v-text-field>
                                    </v-col>
                                    
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="condicion.fec_inicio_apl" label="fec_inicio_apl*" type="date" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="condicion.fec_fin_apl" label="fec_fin_apl*" type="date" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="condicion.tipo_control" label="tipo_control*" type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select v-model="condicion.estado" :items="estados" item-text="name" item-value="id" label="Estado" required ></v-select>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Cerrar
                            </v-btn>
                            <v-btn color="blue darken-1" :disabled="isGuardar" text @click="nomButton==='Crear'?createCondicion():updateCondicion()">
                                {{nomButton}}
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
                        <th class="text-left">Código</th>
                        <th class="text-left">Año</th>
                        <th class="text-left">Actividad</th>
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
                        <td><a href="javascript:void(0)" title="Editar Condición" @click="verModal(item)">{{ item.codigo }}</a></td>
                        <td>{{ item.ano }}</td>
                        <td>{{ item.actividad }}</td>
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
                        <td>{{ item.estado_condicion }}</td>
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
    nomModal:'',
    isGuardar: false,
    nomButton: 'Crear',
    total: 0,
    codigo: '',
    dialog: false,
    listLoading: true,
    list: null,
    anios: [
        { id: "2021", name: '2021' },
        { id: "2022", name: '2022' }
    ],
    estados: [
        { id: '1', name: 'Activo' },
        { id: '0', name: 'Inactivo' }
    ],
    tipos_controles: [
        { id: 'Error', name: 'Error'}
    ],
    actividades: [],
    TDXs: [],
    condicion: [
        {tipo_control:'Error'}
    ],
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
    this.getActividad()
    this.getTDX()
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
    async createCondicion() {
        this.isGuardar = true
        await this.axios.post(this.$api_url + '/condiciones',{
            ano: this.condicion.ano,
            actividad: this.condicion.actividad,
            codigo: this.condicion.codigo,
            tdx: this.condicion.tdx,
            lab: this.condicion.lab,
            num_min: this.condicion.num_min,
            num_max: this.condicion.num_max,
            edad_min_a: this.condicion.edad_min_a,
            edad_min_m: this.condicion.edad_min_m,
            edad_min_d: this.condicion.edad_min_d,
            edad_max_a: this.condicion.edad_max_a,
            edad_max_m: this.condicion.edad_max_m,
            edad_max_d: this.condicion.edad_max_d,
            sexo: this.condicion.sexo,
            codigo_ant: this.condicion.codigo_ant,
            codigo_ad: this.condicion.codigo_ad,
            tdx_ad: this.condicion.tdx_ad,
            lab_ad: this.condicion.lab_ad,
            tipo_control: this.condicion.tipo_control,
            fec_inicio_apl: this.condicion.fec_inicio_apl,
            fec_fin_apl: this.condicion.fec_fin_apl,
            estado: this.condicion.estado
        }).then(response => {
            
            if(response.data>=1){
                alert('Guardado Correctamente')
                this.condicion = []
                this.dialog = false
            }else{
                alert('No se pudo guardar la condición')
            }
        }).finally(() => this.isGuardar = false)
    },
    async updateCondicion() {
        this.isGuardar = true
        await this.axios.put(this.$api_url + '/condiciones/update',{
            id_condicion: this.condicion.id_condicion,
            ano: this.condicion.ano,
            actividad: this.condicion.actividad,
            codigo: this.condicion.codigo,
            tdx: this.condicion.tdx,
            lab: this.condicion.lab,
            num_min: this.condicion.num_min,
            num_max: this.condicion.num_max,
            edad_min_a: this.condicion.edad_min_a,
            edad_min_m: this.condicion.edad_min_m,
            edad_min_d: this.condicion.edad_min_d,
            edad_max_a: this.condicion.edad_max_a,
            edad_max_m: this.condicion.edad_max_m,
            edad_max_d: this.condicion.edad_max_d,
            sexo: this.condicion.sexo,
            codigo_ant: this.condicion.codigo_ant,
            codigo_ad: this.condicion.codigo_ad,
            tdx_ad: this.condicion.tdx_ad,
            lab_ad: this.condicion.lab_ad,
            tipo_control: this.condicion.tipo_control,
            fec_inicio_apl: this.condicion.fec_inicio_apl,
            fec_fin_apl: this.condicion.fec_fin_apl,
            estado: this.condicion.estado
        }).then(response => {
            
            if(response.data>=1){
                alert('Guardado Correctamente')
                this.condicion = []
                this.dialog = false
            }else{
                alert('No se pudo guardar la condición')
            }
        }).finally(() => this.isGuardar = false)
    },
    async getTDX() {
        await this.axios.get(this.$api_url + '/filtros/TDX').then(response => {
            this.TDXs = response.data
        })
    },
    verModal(item) {
        this.nomModal= item===0 ? 'Nueva Condición' : 'Editar Condición' 
        this.nomButton = item===0 ? 'Crear' : 'Editar' 
        if (item!==0) {
            this.condicion = item
        }else{
            this.condicion= []
            this.condicion.tipo_control= 'Error'
            this.condicion.estado= '1'
        }
        this.dialog = true
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

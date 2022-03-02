<template>
    <v-container fluid class="down-top-padding">
        <v-row>
            <v-col cols="12" lg="12">
                <v-card>
                    <v-form ref="form" lazy-validation>
                        <v-row no-gutters style="height: 270px;">
                            <v-col md="3" style="height: 60px;"></v-col>
                            <v-col md="4" style="height: 60px;">
                                <filtro-reporte message="1111" v-on:listenToChildEvent="showMsgFromChild" ref="componente"></filtro-reporte>
                            </v-col>
                            <v-col md="2" style="height: 60px; margin-top: 10px">
                                <h3 class="title blue-grey--text text--darken-2 font-weight-regular" style="text-align:center">
                                    <v-dialog v-model="dialog" scrollable max-width="500px">
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-btn text color="primary" v-bind="attrs" v-on="on">
                                            Mostrar <v-icon right>mdi-pencil</v-icon>
                                        </v-btn>
                                        </template>
                                        <filtro-seleccion ref="componente"></filtro-seleccion>
                                    </v-dialog>
                                </h3>
                            </v-col>     
                            <v-col md="3" style="height: 60px;"></v-col>
                            <v-col md="12" style="height: 10px;">
                                <v-divider></v-divider>
                            </v-col>
                            
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
                                    <v-select :items="categorias" @change="getRenew()" v-model="search.categoria" :menu-props="{ maxHeight: '400' }" label="Categorías" item-text="name" item-value="name" multiple  dense outlined></v-select>
                                </v-card-text>
                            </v-col>
                            <v-col md="4" style="height: 10px;">
                                <v-card-text class="pa-2" >
                                    <v-autocomplete :items="unidades" v-model="search.unidad" @change="getRedes()" label="Unidad Ejecutora" item-text="name" item-value="name" multiple dense  outlined clearable required></v-autocomplete>
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
            <act-adulto-mayor tabla="tmp_adulto_mayor" v-if="reporte==1" ref="componente"></act-adulto-mayor>
            <act-cancer tabla="tmp_cancer" v-if="reporte==2" ref="componente"></act-cancer>
            <act-danos-no-transmisibles tabla="tmp_no_transmisibles_final" v-if="reporte==3" ref="componente"></act-danos-no-transmisibles>
            <act-etapa-de-vida-adolescente tabla="tmp_adolescente" v-if="reporte==4" ref="componente"></act-etapa-de-vida-adolescente>
            <act-etapa-de-vida-adulto tabla="tmp_adulto" v-if="reporte==5" ref="componente"></act-etapa-de-vida-adulto>
            <act-etapa-de-vida-joven tabla="tmp_joven" v-if="reporte==6" ref="componente"></act-etapa-de-vida-joven>
            <act-inmunizaciones tabla="RPT_INMUNIZACIONES" v-if="reporte==7" ref="componente"></act-inmunizaciones>
            <act-materno tabla="TEMPORAL_MATERNO" v-if="reporte==8" ref="componente"></act-materno>
            <act-meta4 v-if="reporte==9" ref="componente"></act-meta4>
            <act-metales-pesados v-if="reporte==10" ref="componente"></act-metales-pesados>
            <act-metaxenicas tabla="tmp_metaxenicas" v-if="reporte==11" ref="componente"></act-metaxenicas>
            <act-nino tabla="RPT_NIÑO_2021" v-if="reporte==12" ref="componente"></act-nino>
            <act-planificacion-familiar v-if="reporte==13" ref="componente"></act-planificacion-familiar>
            <act-promocion-de-la-salud v-if="reporte==14" ref="componente"></act-promocion-de-la-salud>
            <act-promocion-de-la-salud-comunidades v-if="reporte==15" ref="componente"></act-promocion-de-la-salud-comunidades>
            <act-promocion-de-la-salud-instituciones-ed v-if="reporte==16" ref="componente"></act-promocion-de-la-salud-instituciones-ed>
            <act-promocion-de-la-salud-municipios v-if="reporte==17" ref="componente"></act-promocion-de-la-salud-municipios>
            <act-salud-bucal tabla="vista_salud_bucal" v-if="reporte==18" ref="componente"></act-salud-bucal>
            <act-salud-familiar tabla="TEMPORAL_SALUD_FAMILIAR" v-if="reporte==19" ref="componente"></act-salud-familiar>
            <act-salud-mental tabla="tmp_salud_mental" v-if="reporte==20" ref="componente"></act-salud-mental>
            <act-salud-ocular v-if="reporte==21" ref="componente"></act-salud-ocular>
            <act-tbc v-if="reporte==22" ref="componente"></act-tbc>
            <act-tele-medicina tabla="tmp_telemedicina" v-if="reporte==23" ref="componente"></act-tele-medicina>
            <act-vida-sana v-if="reporte==24" ref="componente"></act-vida-sana>
            <act-vih v-if="reporte==25" ref="componente"></act-vih>
            <act-zoonoticas tabla="tmp_zoon" v-if="reporte==26" ref="componente"></act-zoonoticas>
            <v-col cols="12" lg="12" v-if="!reporte" style="height: 800px">
                <v-card>
                    <v-card-text>
                        <center><b><i>Seleccione el tipo de reporte que desea mostrar.</i></b></center>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// REPORTES //
import ActAdultoMayor from './AdultoMayor/actividades.vue';
import ActCancer from './Cancer/actividades.vue';
import ActDanosNoTransmisibles from './DañosNoTransmisibles/actividades.vue';
import ActEtapaDeVidaAdolescente from './EtapaDeVidaAdolescente/actividades.vue';
import ActEtapaDeVidaAdulto from './EtapaDeVidaAdulto/actividades.vue';
import ActEtapaDeVidaJoven from './EtapaDeVidaJoven/actividades.vue';
import ActInmunizaciones from './Inmunizaciones/actividades.vue';
import ActMaterno from './Materno/actividades.vue';
import ActMeta4 from './Meta4/actividades.vue';
import ActMetalesPesados from './MetalesPesados/actividades.vue';
import ActMetaxenicas from './Metaxenicas/actividades.vue';
import ActNino from './Niño/actividades.vue';
import ActPlanificacionFamiliar from './PlanificacionFamiliar/actividades.vue';
import ActPromocionDeLaSalud from './PromocionDeLaSalud/actividades.vue';
import ActPromocionDeLaSaludComunidades from './PromocionDeLaSaludComunidades/actividades.vue';
import ActPromocionDeLaSaludInstitucionesEd from './PromocionDeLaSaludInstitucionesEd/actividades.vue';
import ActPromocionDeLaSaludMunicipios from './PromocionDeLaSaludMunicipios/actividades.vue';
import ActSaludBucal from './SaludBucal/actividades.vue';
import ActSaludFamiliar from './SaludFamiliar/actividades.vue';
import ActSaludMental from './SaludMental/actividades.vue';
import ActSaludOcular from './SaludOcular/actividades.vue';
import ActTbc from './Tbc/actividades.vue';
import ActTeleMedicina from './TeleMedicina/actividades.vue';
import ActVidaSana from './VidaSana/actividades.vue';
import ActVih from './Vih/actividades.vue';
import ActZoonoticas from './Zoonoticas/actividades.vue';
// FILTROS
import filtroSeleccion from '../filtros/filtroSeleccion.vue';
import FiltroReporte from '../filtros/filtroReporte.vue';
export default {
  name: "Profile",

  data: () => ({
    dialog: false,
    unidades: [],
    reporte: 0,
    redes: [],
    microredes: [],
    anios: [2019,2020,2021,2022],
    establecimientos: [],
    search: {
        categoria: [],
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
    categorias: []
  }),
  components: {
    ActAdultoMayor,
    ActCancer,
    ActDanosNoTransmisibles,
    ActEtapaDeVidaAdolescente,
    ActEtapaDeVidaAdulto,
    ActEtapaDeVidaJoven,
    ActInmunizaciones,
    filtroSeleccion,
    ActMaterno,
    ActMeta4,
    ActMetalesPesados,
    ActMetaxenicas,
    ActNino,
    ActPlanificacionFamiliar,
    ActPromocionDeLaSalud,
    ActPromocionDeLaSaludComunidades,
    ActPromocionDeLaSaludInstitucionesEd,
    ActPromocionDeLaSaludMunicipios,
    ActSaludBucal,
    ActSaludFamiliar,
    ActSaludMental,
    ActSaludOcular,
    ActTbc,
    ActTeleMedicina,
    ActVidaSana,
    ActVih,
    ActZoonoticas,
    FiltroReporte
  },
  created() {
    this.getUnidades()
    // ActSaludFamiliar()
  },
  methods: {
    validate () {
        if(this.$refs.form.validate()){
            if(typeof this.$refs.componente.getData !== "undefined"){
                this.$refs.componente.getData(this.search)
            } else {
                alert("Seleccione un reporte")
            }
        }
    },
    showMsgFromChild:function(data){
        this.reporte = data
    },
    verifica(dt){
        if (dt.length > 0){
            return dt.reduce((f, s) => `${f},${s}`)
        }else{
            return ''
        }
    },
    async getUnidades() {
        await this.axios.get(this.$api_url + '/filtros').then(response => {
            this.unidades = response.data.unidad,
            this.redes = response.data.red,
            this.microredes = response.data.microred,
            this.establecimientos = response.data.establecimiento,
            this.categorias = response.data.categoria
        })
    },

    async getRedes() {
        await this.axios.get(this.$api_url + '/filtros',{
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
        await this.axios.get(this.$api_url + '/filtros',{
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
        await this.axios.get(this.$api_url + '/filtros',{
            params: {
                unidad: this.search.unidad.join(','),
                red: this.search.red.join(','),
                microred: this.search.microred.join(','),
            }
        }).then(response => {
            this.establecimientos = response.data.establecimiento
        })
    },
  }
};
</script>

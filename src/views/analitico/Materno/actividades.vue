<template>
    <v-row >
        <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   <thead>
                       <tr>
                           <th class="text-left" rowspan="3">
                               Grupo Etáreo
                           </th>
                           <th class="text-center" colspan="6">
                               Gestante
                           </th>
                           <th class="text-center" colspan="2" rowspan="2">
                               Papanicolaou
                           </th>
                           <th colspan="2" rowspan="2">
                               Gestante con Bateria Completa 
                           </th>
                           <th rowspan="2">
                               Violencia Basada en Género (VBG)
                           </th>
                           <th rowspan="2">
                               Violencia Basada en Género (VBG)
                           </th>
                           <th class="text-center" colspan="3" rowspan="2">
                               Ecografía
                           </th>
                           <th colspan="2" rowspan="2">
                               Tamizaje de Bacteriuria
                           </th>
                           <th colspan="2" rowspan="2">
                               Tamizaje de Proteniuria
                           </th>
                           <th rowspan="3">
                               Gestante con Atención Prenatal Reenfocada
                           </th>
                           <th colspan="3">
                               Vacuna Antitetá-nica
                           </th>
                           <th rowspan="2">
                               Atencion odontologica
                           </th>
                       </tr>
                       <tr>
                           <th colspan="3" class="text-center">
                               Atendida
                           </th>
                           <th rowspan="2">
                               atendidas
                           </th>
                           <th rowspan="2">
                               Atenciones
                           </th>
                           <th rowspan="2">
                               Controlada
                           </th>
                           <th>
                               dt
                           </th>
                           <th>
                               HvB
                           </th>
                           <th>
                               Influenza
                           </th>
                       </tr>
                       <tr>
                           <th>
                               I Trimestre
                           </th>
                           <th>
                               II Trimestre
                           </th>
                           <th>
                               III Trimestre
                           </th>
                           <th>
                               Toma de Muestra
                           </th>
                           <th>
                               Positivo
                           </th>
                           <th>
                               1° Bateria
                           </th>
                           <th>
                               2° Bateria
                           </th>
                           <th>
                               Tamizada
                           </th>
                           <th>
                               Postivo
                           </th>
                           <th>
                               1º Ecografía
                           </th>
                           <th>
                               2º Ecografía
                           </th>
                           <th>
                               3º Ecografía
                           </th>
                           <th>
                               N°
                           </th>
                           <th>
                               Positivo
                           </th>
                           <th>
                               N°
                           </th>
                           <th>
                               Positivo
                           </th>
                           <th>
                               Protegidas
                           </th>
                           <th>
                               Protegidas
                           </th>
                           <th>
                               Protegidas
                           </th>
                           <th>
                               Protegidas
                           </th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>
                               12 a.
                           </td>
                           <td>{{data.var1 ? data.var1 : "-"}}</td>
                           <td>{{data.var5 ? data.var5 : "-"}}</td>
                           <td>{{data.var9 ? data.var9 : "-"}}</td>
                           <td>{{total1}}</td>
                       </tr>
                   </tbody>
               </template>
           </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
    </v-row>
</template>
<script>
export default ({
    data: () => ({
        datos: '',
        data: [],
        total1: 0,
    }),
    setup() {
        
    },
    props: ["search", "tabla"],
    created() {},
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
        async getData(search) {
            await this.axios.get(this.$api_url + '/reporte/' + this.tabla + '/1-505',{
                params: {
                    establecimiento: this.verifica(search.establecimiento),
                    mes: this.verifica(search.mes),
                    anio: this.verifica(search.anio),
                    unidad: this.verifica(search.unidad),
                    red: this.verifica(search.red),
                    microred: this.verifica(search.microred),
                }
            }).then(response => {
                this.data = response.data[0]
                this.total1 = parseInt(response.data[0].var1) + parseInt(response.data[0].var5) + parseInt(response.data[0].var9)
            })
        },
    },
    
    
})
</script>

<template>
    <v-autocomplete :items="reportes" v-model="reporte" v-on:change="sendMsgToParent" label="Seleccione un reporte" item-text="name" item-value="id"  clearable required></v-autocomplete>
</template>

<script>
export default ({
    data: () => ({
        datos: '',
        data: [],
        reporte: 1,
        reportes: [
            { id: "1", name: 'ADULTO MAYOR' },
            { id: "2", name: 'CANCER' },
            { id: "3", name: 'DAÑOS NO TRANSMISIBLES' },
            { id: "4", name: 'ETAPA DE VIDA ADOLESCENTE' },
            { id: "5", name: 'ETAPA DE VIDA ADULTO' },
            { id: "6", name: 'ETAPA DE VIDA JOVEN' },
            { id: "7", name: 'INMUNIZACIONES' },
            { id: "8", name: 'MATERNO' },
            { id: "9", name: 'META 4' },
            { id: "10", name: 'METALES PESADOS' },
            { id: "11", name: 'NIÑO' },
            { id: "12", name: 'PLANIFICACION FAMILIAR' },
            { id: "13", name: 'PROMOCION DE LA SALUD' },
            { id: "14", name: 'PROMOCION DE LA SALUD COMUNIDADES' },
            { id: "15", name: 'PROMOCION DE LA SALUD INSTITUCIONES EDUCATIVAS' },
            { id: "16", name: 'PROMOCION DE LA SALUD MUNICIPIOS SALUDABLES' },
            { id: "17", name: 'SALUD BUCAL' },
            { id: "18", name: 'SALUD FAMILIAR' },
            { id: "19", name: 'SALUD MENTAL' },
            { id: "20", name: 'SALUD OCULAR' },
            { id: "21", name: 'TBC' },
            { id: "22", name: 'TELEMEDICINA' },
            { id: "23", name: 'VIDA SANA' },
            { id: "24", name: 'VIH' },
        ],
    }),
    setup() {
        
    },
    props: ["message", "mes"],
    created() {
        this.reporte = this.message
    },
    methods: {
        sendMsgToParent:function(){
            this.$emit("listenToChildEvent", this.reporte)
        },
    },
    
    
})
</script>

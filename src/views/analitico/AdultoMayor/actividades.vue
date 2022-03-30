
<template>
    <v-row >
        <v-col md="12">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th rowspan="2" colspan="2"></th>
                            <th class="text-center" colspan="2">
                                TOTAL
                            </th>
                            <th class="text-center" colspan="2">
                                80a - 69a
                            </th>
                            <th class="text-center" colspan="2">
                                70a - 79a
                            </th>
                            <th class="text-center" colspan="2">
                                80a
                            </th>
                        </tr>
                        <tr>
                            <th>
                                F
                            </th>
                            <th>
                                M
                            </th>
                            <th>
                                F
                            </th>
                            <th>
                                M
                            </th>
                            <th>
                                F
                            </th>
                            <th>
                                M
                            </th>
                            <th>
                                F
                            </th>
                            <th>
                                M
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td colspan="10"><b>VALORACION CLINICA DEL ADULTO MAYOR (VACAM)</b></td></tr>
                        <tr>
                            <td rowspan="4"><b>Clasificación</b></td>
                            <td>PERSONA ADULTA MAYOR SALUDABLE</td>
                            <td>{{parseInt(data.var001) + parseInt(data.var003) + parseInt(data.var005)}}</td>
                            <td>{{parseInt(data.var002) + parseInt(data.var004) + parseInt(data.var006)}}</td>
                            <td>{{data.var001 ? data.var001 : '-'}}</td>
                            <td>{{data.var002 ? data.var002 : '-'}}</td>
                            <td>{{data.var003 ? data.var003 : '-'}}</td>
                            <td>{{data.var004 ? data.var004 : '-'}}</td>
                            <td>{{data.var005 ? data.var005 : '-'}}</td>
                            <td>{{data.var006 ? data.var006 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>PERSONA ADULTA MAYOR ENFERMA</td>
                            <td>{{parseInt(data.var007) + parseInt(data.var009) + parseInt(data.var011)}}</td>
                            <td>{{parseInt(data.var008) + parseInt(data.var010) + parseInt(data.var012)}}</td>
                            <td>{{data.var007 ? data.var007 : '-'}}</td>
                            <td>{{data.var008 ? data.var008 : '-'}}</td>
                            <td>{{data.var009 ? data.var009 : '-'}}</td>
                            <td>{{data.var010 ? data.var010 : '-'}}</td>
                            <td>{{data.var011 ? data.var011 : '-'}}</td>
                            <td>{{data.var012 ? data.var012 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>PERSONA ADULTA MAYOR FRAGIL</td>
                            <td>{{parseInt(data.var013) + parseInt(data.var015) + parseInt(data.var017)}}</td>
                            <td>{{parseInt(data.var014) + parseInt(data.var016) + parseInt(data.var018)}}</td>
                            <td>{{data.var013 ? data.var013 : '-'}}</td>
                            <td>{{data.var014 ? data.var014 : '-'}}</td>
                            <td>{{data.var015 ? data.var015 : '-'}}</td>
                            <td>{{data.var016 ? data.var016 : '-'}}</td>
                            <td>{{data.var017 ? data.var017 : '-'}}</td>
                            <td>{{data.var018 ? data.var018 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>PERSONA ADULTA MAYOR GERIATRICO COMPLEJO</td>
                            <td>{{parseInt(data.var019) + parseInt(data.var021) + parseInt(data.var023)}}</td>
                            <td>{{parseInt(data.var020) + parseInt(data.var022) + parseInt(data.var024)}}</td>
                            <td>{{data.var019 ? data.var019 : '-'}}</td>
                            <td>{{data.var020 ? data.var020 : '-'}}</td>
                            <td>{{data.var021 ? data.var021 : '-'}}</td>
                            <td>{{data.var022 ? data.var022 : '-'}}</td>
                            <td>{{data.var023 ? data.var023 : '-'}}</td>
                            <td>{{data.var024 ? data.var024 : '-'}}</td>
                        </tr>
                        <tr><td colspan="10"><b>PLAN DE ATENCIÓN</b></td></tr>
                        <tr>
                            <td rowspan="2"></td>
                            <td>PLAN DE ATENCION INTEGRAL ELABORADO</td>
                            <td>{{parseInt(data.var025) + parseInt(data.var027) + parseInt(data.var029)}}</td>
                            <td>{{parseInt(data.var026) + parseInt(data.var028) + parseInt(data.var030)}}</td>
                            <td>{{data.var025 ? data.var025 : '-'}}</td>
                            <td>{{data.var026 ? data.var026 : '-'}}</td>
                            <td>{{data.var027 ? data.var027 : '-'}}</td>
                            <td>{{data.var028 ? data.var028 : '-'}}</td>
                            <td>{{data.var029 ? data.var029 : '-'}}</td>
                            <td>{{data.var030 ? data.var030 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>PLAN DE ATENCION INTEGRAL EJECUTADO</td>
                            <td>{{parseInt(data.var031) + parseInt(data.var033) + parseInt(data.var035)}}</td>
                            <td>{{parseInt(data.var032) + parseInt(data.var034) + parseInt(data.var036)}}</td>
                            <td>{{data.var031 ? data.var031 : '-'}}</td>
                            <td>{{data.var032 ? data.var032 : '-'}}</td>
                            <td>{{data.var033 ? data.var033 : '-'}}</td>
                            <td>{{data.var034 ? data.var034 : '-'}}</td>
                            <td>{{data.var035 ? data.var035 : '-'}}</td>
                            <td>{{data.var036 ? data.var036 : '-'}}</td>
                        </tr>
                        <tr><td colspan="10"><b>ENTREVISTA DE TAMIZAJE EN SALUD MENTAL</b></td></tr>
                        <tr>
                            <td rowspan="5"><b>TAMIZADOS</b></td>
                            <td>VIOLENCIA INTRAFAMILIAR</td>
                            <td>{{parseInt(data.var037) + parseInt(data.var039) + parseInt(data.var041)}}</td>
                            <td>{{parseInt(data.var038) + parseInt(data.var040) + parseInt(data.var042)}}</td>
                            <td>{{data.var037 ? data.var037 : '-'}}</td>
                            <td>{{data.var038 ? data.var038 : '-'}}</td>
                            <td>{{data.var039 ? data.var039 : '-'}}</td>
                            <td>{{data.var040 ? data.var040 : '-'}}</td>
                            <td>{{data.var041 ? data.var041 : '-'}}</td>
                            <td>{{data.var042 ? data.var042 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>TRASTORNOS DEPRESIVOS</td>
                            <td>{{parseInt(data.var043) + parseInt(data.var045) + parseInt(data.var047)}}</td>
                            <td>{{parseInt(data.var044) + parseInt(data.var046) + parseInt(data.var048)}}</td>
                            <td>{{data.var043 ? data.var043 : '-'}}</td>
                            <td>{{data.var044 ? data.var044 : '-'}}</td>
                            <td>{{data.var045 ? data.var045 : '-'}}</td>
                            <td>{{data.var046 ? data.var046 : '-'}}</td>
                            <td>{{data.var047 ? data.var047 : '-'}}</td>
                            <td>{{data.var048 ? data.var048 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>ALCOHOL Y DROGAS</td>
                            <td>{{parseInt(data.var049) + parseInt(data.var051) + parseInt(data.var053)}}</td>
                            <td>{{parseInt(data.var050) + parseInt(data.var052) + parseInt(data.var054)}}</td>
                            <td>{{data.var049 ? data.var049 : '-'}}</td>
                            <td>{{data.var050 ? data.var050 : '-'}}</td>
                            <td>{{data.var051 ? data.var051 : '-'}}</td>
                            <td>{{data.var052 ? data.var052 : '-'}}</td>
                            <td>{{data.var053 ? data.var053 : '-'}}</td>
                            <td>{{data.var054 ? data.var054 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>PLAN DE ATENCION INTEGRAL EJECUTADO</td>
                            <td>{{parseInt(data.var055) + parseInt(data.var057) + parseInt(data.var059)}}</td>
                            <td>{{parseInt(data.var056) + parseInt(data.var058) + parseInt(data.var060)}}</td>
                            <td>{{data.var055 ? data.var055 : '-'}}</td>
                            <td>{{data.var056 ? data.var056 : '-'}}</td>
                            <td>{{data.var057 ? data.var057 : '-'}}</td>
                            <td>{{data.var058 ? data.var058 : '-'}}</td>
                            <td>{{data.var059 ? data.var059 : '-'}}</td>
                            <td>{{data.var060 ? data.var060 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>TAMIZAJE EN VICTIMAS DE VIOLENCIA POLITICA</td>
                            <td>{{parseInt(data.var061) + parseInt(data.var063) + parseInt(data.var065)}}</td>
                            <td>{{parseInt(data.var062) + parseInt(data.var064) + parseInt(data.var066)}}</td>
                            <td>{{data.var061 ? data.var061 : '-'}}</td>
                            <td>{{data.var062 ? data.var062 : '-'}}</td>
                            <td>{{data.var063 ? data.var063 : '-'}}</td>
                            <td>{{data.var064 ? data.var064 : '-'}}</td>
                            <td>{{data.var065 ? data.var065 : '-'}}</td>
                            <td>{{data.var066 ? data.var066 : '-'}}</td>
                        </tr>
                         <tr>
                            <td rowspan="7"><b>POSITIVOS</b></td>
                            <td>VIOLENCIA INTRAFAMILIAR</td>
                            <td>{{parseInt(data.var067) + parseInt(data.var069) + parseInt(data.var071)}}</td>
                            <td>{{parseInt(data.var068) + parseInt(data.var070) + parseInt(data.var072)}}</td>
                            <td>{{data.var067 ? data.var067 : '-'}}</td>
                            <td>{{data.var068 ? data.var068 : '-'}}</td>
                            <td>{{data.var069 ? data.var069 : '-'}}</td>
                            <td>{{data.var070 ? data.var070 : '-'}}</td>
                            <td>{{data.var071 ? data.var071 : '-'}}</td>
                            <td>{{data.var072 ? data.var072 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>TRASTORNOS DEPRESIVOS</td>
                            <td>{{parseInt(data.var073) + parseInt(data.var075) + parseInt(data.var077)}}</td>
                            <td>{{parseInt(data.var074) + parseInt(data.var076) + parseInt(data.var078)}}</td>
                            <td>{{data.var073 ? data.var073 : '-'}}</td>
                            <td>{{data.var074 ? data.var074 : '-'}}</td>
                            <td>{{data.var075 ? data.var075 : '-'}}</td>
                            <td>{{data.var076 ? data.var076 : '-'}}</td>
                            <td>{{data.var077 ? data.var077 : '-'}}</td>
                            <td>{{data.var078 ? data.var078 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>PROBLEMAS RELACIONADOS CON EL USO DE TABACO</td>
                            <td>{{parseInt(data.var079) + parseInt(data.var081) + parseInt(data.var083)}}</td>
                            <td>{{parseInt(data.var080) + parseInt(data.var082) + parseInt(data.var084)}}</td>
                            <td>{{data.var079 ? data.var079 : '-'}}</td>
                            <td>{{data.var080 ? data.var080 : '-'}}</td>
                            <td>{{data.var081 ? data.var081 : '-'}}</td>
                            <td>{{data.var082 ? data.var082 : '-'}}</td>
                            <td>{{data.var083 ? data.var083 : '-'}}</td>
                            <td>{{data.var084 ? data.var084 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>PROBLEMAS RELACIONADOS CON EL USO DE ALCOHOL</td>
                            <td>{{parseInt(data.var085) + parseInt(data.var087) + parseInt(data.var089)}}</td>
                            <td>{{parseInt(data.var086) + parseInt(data.var088) + parseInt(data.var090)}}</td>
                            <td>{{data.var085 ? data.var085 : '-'}}</td>
                            <td>{{data.var086 ? data.var086 : '-'}}</td>
                            <td>{{data.var087 ? data.var087 : '-'}}</td>
                            <td>{{data.var088 ? data.var088 : '-'}}</td>
                            <td>{{data.var089 ? data.var089 : '-'}}</td>
                            <td>{{data.var090 ? data.var090 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>PROBLEMAS RELACIONADOS CON EL USO DE DROGAS</td>
                            <td>{{parseInt(data.var091) + parseInt(data.var093) + parseInt(data.var095)}}</td>
                            <td>{{parseInt(data.var092) + parseInt(data.var094) + parseInt(data.var096)}}</td>
                            <td>{{data.var091 ? data.var091 : '-'}}</td>
                            <td>{{data.var092 ? data.var092 : '-'}}</td>
                            <td>{{data.var093 ? data.var093 : '-'}}</td>
                            <td>{{data.var094 ? data.var094 : '-'}}</td>
                            <td>{{data.var095 ? data.var095 : '-'}}</td>
                            <td>{{data.var096 ? data.var096 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>EPISODIO PSICOTICO</td>
                            <td>{{parseInt(data.var097) + parseInt(data.var099) + parseInt(data.var101)}}</td>
                            <td>{{parseInt(data.var098) + parseInt(data.var100) + parseInt(data.var102)}}</td>
                            <td>{{data.var097 ? data.var097 : '-'}}</td>
                            <td>{{data.var098 ? data.var098 : '-'}}</td>
                            <td>{{data.var099 ? data.var099 : '-'}}</td>
                            <td>{{data.var100 ? data.var100 : '-'}}</td>
                            <td>{{data.var101 ? data.var101 : '-'}}</td>
                            <td>{{data.var102 ? data.var102 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>TAMIZAJE POSITIVO EN VICTIMAS DE VIOLENCIA POLITICA</td>
                            <td>{{parseInt(data.var103) + parseInt(data.var105) + parseInt(data.var107)}}</td>
                            <td>{{parseInt(data.var104) + parseInt(data.var106) + parseInt(data.var108)}}</td>
                            <td>{{data.var103 ? data.var103 : '-'}}</td>
                            <td>{{data.var104 ? data.var104 : '-'}}</td>
                            <td>{{data.var105 ? data.var105 : '-'}}</td>
                            <td>{{data.var106 ? data.var106 : '-'}}</td>
                            <td>{{data.var107 ? data.var107 : '-'}}</td>
                            <td>{{data.var108 ? data.var108 : '-'}}</td>
                        </tr>
                        <tr><td colspan="10"><b>CLASIFICACIÓN DEL ESTADO NUTRICIONAL DEL ADULTO MAYOR</b></td></tr>
                        <tr>
                                <td>
                                </td> 
                                <td colspan="9">
                                    <b>INDICE DE MASA CORPORAL</b>
                                </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                               DELGADEZ
                            </td>
                            <td>{{parseInt(data.var109) + parseInt(data.var111) + parseInt(data.var113)}}</td>
                            <td>{{parseInt(data.var110) + parseInt(data.var112) + parseInt(data.var114)}}</td>
                            <td>{{data.var109 ? data.var109 : '-'}}</td>
                            <td>{{data.var110 ? data.var110 : '-'}}</td>
                            <td>{{data.var111 ? data.var111 : '-'}}</td>
                            <td>{{data.var112 ? data.var112 : '-'}}</td>
                            <td>{{data.var113 ? data.var113 : '-'}}</td>
                            <td>{{data.var114 ? data.var114 : '-'}}</td>
                        </tr>
                        <tr>
                             <td></td>
                            <td>
                                NORMAL
                            </td>
                            <td>{{parseInt(data.var115) + parseInt(data.var117) + parseInt(data.var119)}}</td>
                            <td>{{parseInt(data.var116) + parseInt(data.var118) + parseInt(data.var120)}}</td>
                            <td>{{data.var115 ? data.var115 : '-'}}</td>
                            <td>{{data.var116 ? data.var116 : '-'}}</td>
                            <td>{{data.var117 ? data.var117 : '-'}}</td>
                            <td>{{data.var118 ? data.var118 : '-'}}</td>
                            <td>{{data.var119 ? data.var119 : '-'}}</td>
                            <td>{{data.var120 ? data.var120 : '-'}}</td>
                        </tr>
                        <tr>
                             <td></td>
                            <td>
                                SOBREPESO
                            </td>
                            <td>{{parseInt(data.var121) + parseInt(data.var123) + parseInt(data.var125)}}</td>
                            <td>{{parseInt(data.var122) + parseInt(data.var124) + parseInt(data.var126)}}</td>
                            <td>{{data.var121 ? data.var121 : '-'}}</td>
                            <td>{{data.var122 ? data.var122 : '-'}}</td>
                            <td>{{data.var123 ? data.var123 : '-'}}</td>
                            <td>{{data.var124 ? data.var124 : '-'}}</td>
                            <td>{{data.var125 ? data.var125 : '-'}}</td>
                            <td>{{data.var126 ? data.var126 : '-'}}</td>
                        </tr>
                        <tr>
                             <td></td>
                            <td>
                                OBESIDAD
                            </td>
                            <td>{{parseInt(data.var127) + parseInt(data.var129) + parseInt(data.var131)}}</td>
                            <td>{{parseInt(data.var128) + parseInt(data.var130) + parseInt(data.var132)}}</td>
                            <td>{{data.var127 ? data.var127 : '-'}}</td>
                            <td>{{data.var128 ? data.var128 : '-'}}</td>
                            <td>{{data.var129 ? data.var129 : '-'}}</td>
                            <td>{{data.var130 ? data.var130 : '-'}}</td>
                            <td>{{data.var131 ? data.var131 : '-'}}</td>
                            <td>{{data.var132 ? data.var132 : '-'}}</td>
                        </tr>
                        <tr>
                            <td>
                            </td> 
                                <td colspan="9">
                                    <b>EVALUACIÓN DEL PERIMETRO ABDOMINAL</b>
                                </td>
                        </tr>
                        <tr>
                             <td></td>
                            <td>
                                RIESGO BAJO
                            </td>
                            <td>{{parseInt(data.var133) + parseInt(data.var135) + parseInt(data.var137)}}</td>
                            <td>{{parseInt(data.var134) + parseInt(data.var136) + parseInt(data.var138)}}</td>
                            <td>{{data.var133 ? data.var133 : '-'}}</td>
                            <td>{{data.var134 ? data.var134 : '-'}}</td>
                            <td>{{data.var135 ? data.var135 : '-'}}</td>
                            <td>{{data.var136 ? data.var136 : '-'}}</td>
                            <td>{{data.var137 ? data.var137 : '-'}}</td>
                            <td>{{data.var138 ? data.var138 : '-'}}</td>
                        </tr>
                        <tr>
                             <td></td>
                            <td>
                                RIESGO ALTO
                            </td>
                            <td>{{parseInt(data.var139) + parseInt(data.var141) + parseInt(data.var143)}}</td>
                            <td>{{parseInt(data.var140) + parseInt(data.var142) + parseInt(data.var144)}}</td>
                            <td>{{data.var139 ? data.var139 : '-'}}</td>
                            <td>{{data.var140 ? data.var140 : '-'}}</td>
                            <td>{{data.var141 ? data.var141 : '-'}}</td>
                            <td>{{data.var142 ? data.var142 : '-'}}</td>
                            <td>{{data.var143 ? data.var143 : '-'}}</td>
                            <td>{{data.var144 ? data.var144 : '-'}}</td>
                        </tr>
                        <tr>
                             <td></td>
                            <td>
                                RIESGO MUY ALTO
                            </td>
                            <td>{{parseInt(data.var145) + parseInt(data.var147) + parseInt(data.var149)}}</td>
                            <td>{{parseInt(data.var146) + parseInt(data.var148) + parseInt(data.var150)}}</td>
                            <td>{{data.var145 ? data.var145 : '-'}}</td>
                            <td>{{data.var146 ? data.var146 : '-'}}</td>
                            <td>{{data.var147 ? data.var147 : '-'}}</td>
                            <td>{{data.var148 ? data.var148 : '-'}}</td>
                            <td>{{data.var149 ? data.var149 : '-'}}</td>
                            <td>{{data.var150 ? data.var150 : '-'}}</td>
                        </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                    <b>MINI VALORACIÓN NUTRICIONAL</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                BIEN NUTRIDOS
                            </td>
                        <td>{{parseInt(data.var151) + parseInt(data.var153) + parseInt(data.var155)}}</td>
                        <td>{{parseInt(data.var152) + parseInt(data.var154) + parseInt(data.var156)}}</td>
                        <td>{{data.var151 ? data.var151 : '-'}}</td>
                        <td>{{data.var152 ? data.var152 : '-'}}</td>
                        <td>{{data.var153 ? data.var153 : '-'}}</td>
                        <td>{{data.var154 ? data.var154 : '-'}}</td>
                        <td>{{data.var155 ? data.var155 : '-'}}</td>
                        <td>{{data.var156 ? data.var156 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                RIESGO DE DESNUTRICION
                            </td>
                        <td>{{parseInt(data.var157) + parseInt(data.var159) + parseInt(data.var161)}}</td>
                        <td>{{parseInt(data.var158) + parseInt(data.var160) + parseInt(data.var162)}}</td>
                        <td>{{data.var157 ? data.var157 : '-'}}</td>
                        <td>{{data.var158 ? data.var158 : '-'}}</td>
                        <td>{{data.var159 ? data.var159 : '-'}}</td>
                        <td>{{data.var160 ? data.var160 : '-'}}</td>
                        <td>{{data.var161 ? data.var161 : '-'}}</td>
                        <td>{{data.var162 ? data.var162 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                DESNUTRIDO
                            </td>
                        <td>{{parseInt(data.var163) + parseInt(data.var165) + parseInt(data.var167)}}</td>
                        <td>{{parseInt(data.var164) + parseInt(data.var166) + parseInt(data.var168)}}</td>
                        <td>{{data.var163 ? data.var163 : '-'}}</td>
                        <td>{{data.var164 ? data.var164 : '-'}}</td>
                        <td>{{data.var165 ? data.var165 : '-'}}</td>
                        <td>{{data.var166 ? data.var166 : '-'}}</td>
                        <td>{{data.var167 ? data.var167 : '-'}}</td>
                        <td>{{data.var168 ? data.var168 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                    <b>ATENCIÓN EN NUTRICIÓN</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                1° ATENCIÓN
                            </td>
                        <td>{{parseInt(data.var169) + parseInt(data.var171) + parseInt(data.var173)}}</td>
                        <td>{{parseInt(data.var170) + parseInt(data.var172) + parseInt(data.var174)}}</td>
                        <td>{{data.var169 ? data.var169 : '-'}}</td>
                        <td>{{data.var170 ? data.var170 : '-'}}</td>
                        <td>{{data.var171 ? data.var171 : '-'}}</td>
                        <td>{{data.var172 ? data.var172 : '-'}}</td>
                        <td>{{data.var173 ? data.var173 : '-'}}</td>
                        <td>{{data.var174 ? data.var174 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                2° ATENCIÓN
                            </td>
                        <td>{{parseInt(data.var175) + parseInt(data.var177) + parseInt(data.var179)}}</td>
                        <td>{{parseInt(data.var176) + parseInt(data.var178) + parseInt(data.var180)}}</td>
                        <td>{{data.var175 ? data.var175 : '-'}}</td>
                        <td>{{data.var176 ? data.var176 : '-'}}</td>
                        <td>{{data.var177 ? data.var177 : '-'}}</td>
                        <td>{{data.var178 ? data.var178 : '-'}}</td>
                        <td>{{data.var179 ? data.var179 : '-'}}</td>
                        <td>{{data.var180 ? data.var180 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                3° ATENCIÓN
                            </td>
                        <td>{{parseInt(data.var181) + parseInt(data.var183) + parseInt(data.var185)}}</td>
                        <td>{{parseInt(data.var182) + parseInt(data.var184) + parseInt(data.var186)}}</td>
                        <td>{{data.var181 ? data.var181 : '-'}}</td>
                        <td>{{data.var182 ? data.var182 : '-'}}</td>
                        <td>{{data.var183 ? data.var183 : '-'}}</td>
                        <td>{{data.var184 ? data.var184 : '-'}}</td>
                        <td>{{data.var185 ? data.var185 : '-'}}</td>
                        <td>{{data.var186 ? data.var186 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                4° A MÁS ATENCIONES
                            </td>
                        <td>{{parseInt(data.var187) + parseInt(data.var189) + parseInt(data.var191)}}</td>
                        <td>{{parseInt(data.var188) + parseInt(data.var190) + parseInt(data.var192)}}</td>
                        <td>{{data.var187 ? data.var187 : '-'}}</td>
                        <td>{{data.var188 ? data.var188 : '-'}}</td>
                        <td>{{data.var189 ? data.var189 : '-'}}</td>
                        <td>{{data.var190 ? data.var190 : '-'}}</td>
                        <td>{{data.var191 ? data.var191 : '-'}}</td>
                        <td>{{data.var192 ? data.var192 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                    <b>INDICACION NUTRICIONAL</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                RECOMENDACIÓN NUTRICIONAL
                            </td>
                        <td>{{parseInt(data.var193) + parseInt(data.var195) + parseInt(data.var197)}}</td>
                        <td>{{parseInt(data.var194) + parseInt(data.var196) + parseInt(data.var198)}}</td>
                        <td>{{data.var193 ? data.var193 : '-'}}</td>
                        <td>{{data.var194 ? data.var194 : '-'}}</td>
                        <td>{{data.var195 ? data.var195 : '-'}}</td>
                        <td>{{data.var196 ? data.var196 : '-'}}</td>
                        <td>{{data.var197 ? data.var197 : '-'}}</td>
                        <td>{{data.var198 ? data.var198 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                PRESCRIPCIÓN NUTRIOTERAPEUTICA
                            </td>
                        <td>{{parseInt(data.var199) + parseInt(data.var201) + parseInt(data.var203)}}</td>
                        <td>{{parseInt(data.var200) + parseInt(data.var202) + parseInt(data.var204)}}</td>
                        <td>{{data.var199 ? data.var199 : '-'}}</td>
                        <td>{{data.var200 ? data.var200 : '-'}}</td>
                        <td>{{data.var201 ? data.var201 : '-'}}</td>
                        <td>{{data.var202 ? data.var202 : '-'}}</td>
                        <td>{{data.var203 ? data.var203 : '-'}}</td>
                        <td>{{data.var204 ? data.var204 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                RECOMENDACIÓN DIETETICA
                            </td>
                        <td>{{parseInt(data.var205) + parseInt(data.var207) + parseInt(data.var209)}}</td>
                        <td>{{parseInt(data.var206) + parseInt(data.var208) + parseInt(data.var210)}}</td>
                        <td>{{data.var205 ? data.var205 : '-'}}</td>
                        <td>{{data.var206 ? data.var206 : '-'}}</td>
                        <td>{{data.var207 ? data.var207 : '-'}}</td>
                        <td>{{data.var208 ? data.var208 : '-'}}</td>
                        <td>{{data.var209 ? data.var209 : '-'}}</td>
                        <td>{{data.var210 ? data.var210 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                PRESCRIPCIÓN DIETOTERAPEUTICA
                            </td>
                        <td>{{parseInt(data.var211) + parseInt(data.var213) + parseInt(data.var215)}}</td>
                        <td>{{parseInt(data.var212) + parseInt(data.var214) + parseInt(data.var216)}}</td>
                        <td>{{data.var211 ? data.var211 : '-'}}</td>
                        <td>{{data.var212 ? data.var212 : '-'}}</td>
                        <td>{{data.var213 ? data.var213 : '-'}}</td>
                        <td>{{data.var214 ? data.var214 : '-'}}</td>
                        <td>{{data.var215 ? data.var215 : '-'}}</td>
                        <td>{{data.var216 ? data.var216 : '-'}}</td>
                    </tr>
                    <tr><td colspan="10"><b>CONSEJERIAS</b></td></tr>
                    <tr>
                            <td rowspan="4"><b>Total</b></td>
                            <td>NUTRICIONALES</td>
                            <td>{{parseInt(data.var217) + parseInt(data.var219) + parseInt(data.var221)}}</td>
                            <td>{{parseInt(data.var218) + parseInt(data.var220) + parseInt(data.var222)}}</td>
                            <td>{{data.var217 ? data.var217 : '-'}}</td>
                            <td>{{data.var218 ? data.var218 : '-'}}</td>
                            <td>{{data.var219 ? data.var219 : '-'}}</td>
                            <td>{{data.var220 ? data.var220 : '-'}}</td>
                            <td>{{data.var221 ? data.var221 : '-'}}</td>
                            <td>{{data.var222 ? data.var222 : '-'}}</td>
                    </tr>
                    <tr>
                            <td>INTEGRALES</td>
                            <td>{{parseInt(data.var223) + parseInt(data.var225) + parseInt(data.var227)}}</td>
                            <td>{{parseInt(data.var224) + parseInt(data.var226) + parseInt(data.var228)}}</td>
                            <td>{{data.var223 ? data.var223 : '-'}}</td>
                            <td>{{data.var224 ? data.var224 : '-'}}</td>
                            <td>{{data.var225 ? data.var225 : '-'}}</td>
                            <td>{{data.var226 ? data.var226 : '-'}}</td>
                            <td>{{data.var227 ? data.var227 : '-'}}</td>
                            <td>{{data.var228 ? data.var228 : '-'}}</td>
                    </tr>
                    <tr>
                            <td>SALUD MENTAL</td>
                            <td>{{parseInt(data.var229) + parseInt(data.var231) + parseInt(data.var233)}}</td>
                            <td>{{parseInt(data.var230) + parseInt(data.var232) + parseInt(data.var234)}}</td>
                            <td>{{data.var229 ? data.var229 : '-'}}</td>
                            <td>{{data.var230 ? data.var230 : '-'}}</td>
                            <td>{{data.var231 ? data.var231 : '-'}}</td>
                            <td>{{data.var232 ? data.var232 : '-'}}</td>
                            <td>{{data.var233 ? data.var233 : '-'}}</td>
                            <td>{{data.var234 ? data.var234 : '-'}}</td>
                    </tr>
                    <tr>
                            <td>PREVENCIÓN DEL CANCER</td>
                            <td>{{parseInt(data.var235) + parseInt(data.var237) + parseInt(data.var239)}}</td>
                            <td>{{parseInt(data.var236) + parseInt(data.var238) + parseInt(data.var240)}}</td>
                            <td>{{data.var235 ? data.var235 : '-'}}</td>
                            <td>{{data.var236 ? data.var236 : '-'}}</td>
                            <td>{{data.var237 ? data.var237 : '-'}}</td>
                            <td>{{data.var238 ? data.var238 : '-'}}</td>
                            <td>{{data.var239 ? data.var239 : '-'}}</td>
                            <td>{{data.var240 ? data.var240 : '-'}}</td>
                    </tr>
                    <tr><td colspan="10"><b>TAMIZAJE DE CÁNCER</b></td></tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                    <b>EXAMEN PARA TUMOR DE PROSTATA</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                EVALUACIÓN NORMAL
                            </td>
                        <td>{{parseInt(data.var241) + parseInt(data.var243) + parseInt(data.var245)}}</td>
                        <td>{{parseInt(data.var242) + parseInt(data.var244) + parseInt(data.var246)}}</td>
                        <td>{{data.var241 ? data.var241 : '-'}}</td>
                        <td>{{data.var242 ? data.var242 : '-'}}</td>
                        <td>{{data.var243 ? data.var243 : '-'}}</td>
                        <td>{{data.var244 ? data.var244 : '-'}}</td>
                        <td>{{data.var245 ? data.var245 : '-'}}</td>
                        <td>{{data.var246 ? data.var246 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                EVALUACIÓN ANORMAL
                            </td>
                        <td>{{parseInt(data.var247) + parseInt(data.var249) + parseInt(data.var251)}}</td>
                        <td>{{parseInt(data.var248) + parseInt(data.var250) + parseInt(data.var252)}}</td>
                        <td>{{data.var247 ? data.var247 : '-'}}</td>
                        <td>{{data.var248 ? data.var248 : '-'}}</td>
                        <td>{{data.var249 ? data.var249 : '-'}}</td>
                        <td>{{data.var250 ? data.var250 : '-'}}</td>
                        <td>{{data.var251 ? data.var251 : '-'}}</td>
                        <td>{{data.var252 ? data.var252 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>ANTIGENO PROSTATICO ESPECIFICO (PSA)</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                RESULTADO NORMAL
                            </td>
                        <td>{{parseInt(data.var253) + parseInt(data.var255) + parseInt(data.var257)}}</td>
                        <td>{{parseInt(data.var254) + parseInt(data.var256) + parseInt(data.var258)}}</td>
                        <td>{{data.var253 ? data.var253 : '-'}}</td>
                        <td>{{data.var254 ? data.var254 : '-'}}</td>
                        <td>{{data.var255 ? data.var255 : '-'}}</td>
                        <td>{{data.var256 ? data.var256 : '-'}}</td>
                        <td>{{data.var257 ? data.var257 : '-'}}</td>
                        <td>{{data.var258 ? data.var258 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                RESULTADO ANORMAL
                            </td>
                        <td>{{parseInt(data.var259) + parseInt(data.var261) + parseInt(data.var263)}}</td>
                        <td>{{parseInt(data.var260) + parseInt(data.var262) + parseInt(data.var264)}}</td>
                        <td>{{data.var259 ? data.var259 : '-'}}</td>
                        <td>{{data.var260 ? data.var260 : '-'}}</td>
                        <td>{{data.var261 ? data.var261 : '-'}}</td>
                        <td>{{data.var262 ? data.var262 : '-'}}</td>
                        <td>{{data.var263 ? data.var263 : '-'}}</td>
                        <td>{{data.var264 ? data.var264 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>BIOPSIA</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                DE PRÓSTATA
                            </td>
                        <td>{{parseInt(data.var265) + parseInt(data.var267) + parseInt(data.var269)}}</td>
                        <td>{{parseInt(data.var266) + parseInt(data.var268) + parseInt(data.var270)}}</td>
                        <td>{{data.var265 ? data.var265 : '-'}}</td>
                        <td>{{data.var266 ? data.var266 : '-'}}</td>
                        <td>{{data.var267 ? data.var267 : '-'}}</td>
                        <td>{{data.var268 ? data.var268 : '-'}}</td>
                        <td>{{data.var269 ? data.var269 : '-'}}</td>
                        <td>{{data.var270 ? data.var270 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>PAPANICOLAOU</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                PRIMERA VEZ
                            </td>
                        <td>{{parseInt(data.var271) + parseInt(data.var273) + parseInt(data.var275)}}</td>
                        <td>{{parseInt(data.var272) + parseInt(data.var274) + parseInt(data.var276)}}</td>
                        <td>{{data.var271 ? data.var271 : '-'}}</td>
                        <td>{{data.var272 ? data.var272 : '-'}}</td>
                        <td>{{data.var273 ? data.var273 : '-'}}</td>
                        <td>{{data.var274 ? data.var274 : '-'}}</td>
                        <td>{{data.var275 ? data.var275 : '-'}}</td>
                        <td>{{data.var276 ? data.var276 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                SEGUNDA A MAS VECES
                            </td>
                        <td>{{parseInt(data.var277) + parseInt(data.var279) + parseInt(data.var281)}}</td>
                        <td>{{parseInt(data.var278) + parseInt(data.var280) + parseInt(data.var282)}}</td>
                        <td>{{data.var277 ? data.var277 : '-'}}</td>
                        <td>{{data.var278 ? data.var278 : '-'}}</td>
                        <td>{{data.var279 ? data.var279 : '-'}}</td>
                        <td>{{data.var280 ? data.var280 : '-'}}</td>
                        <td>{{data.var281 ? data.var281 : '-'}}</td>
                        <td>{{data.var282 ? data.var282 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>EVALUACION DE LOS RESULTADOS DE PAP</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                LESIÓN INTRAEPITELIAL DE BAJO GRADO - LIEB (NIC I)
                            </td>
                        <td>{{parseInt(data.var283) + parseInt(data.var285) + parseInt(data.var287)}}</td>
                        <td>{{parseInt(data.var284) + parseInt(data.var286) + parseInt(data.var288)}}</td>
                        <td>{{data.var283 ? data.var283 : '-'}}</td>
                        <td>{{data.var284 ? data.var284 : '-'}}</td>
                        <td>{{data.var285 ? data.var285 : '-'}}</td>
                        <td>{{data.var286 ? data.var286 : '-'}}</td>
                        <td>{{data.var287 ? data.var287 : '-'}}</td>
                        <td>{{data.var288 ? data.var288 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                LESIÓN INTRAEPITELIAL DE ALTO GRADO - LIEA (NIC II, NIC III)
                            </td>
                        <td>{{parseInt(data.var289) + parseInt(data.var291) + parseInt(data.var293)}}</td>
                        <td>{{parseInt(data.var290) + parseInt(data.var292) + parseInt(data.var294)}}</td>
                        <td>{{data.var289 ? data.var289 : '-'}}</td>
                        <td>{{data.var290 ? data.var290 : '-'}}</td>
                        <td>{{data.var291 ? data.var291 : '-'}}</td>
                        <td>{{data.var292 ? data.var292 : '-'}}</td>
                        <td>{{data.var293 ? data.var293 : '-'}}</td>
                        <td>{{data.var294 ? data.var294 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                CARCINOMA IN SITU
                            </td>
                        <td>{{parseInt(data.var295) + parseInt(data.var297) + parseInt(data.var299)}}</td>
                        <td>{{parseInt(data.var296) + parseInt(data.var298) + parseInt(data.var300)}}</td>
                        <td>{{data.var295 ? data.var295 : '-'}}</td>
                        <td>{{data.var296 ? data.var296 : '-'}}</td>
                        <td>{{data.var297 ? data.var297 : '-'}}</td>
                        <td>{{data.var298 ? data.var298 : '-'}}</td>
                        <td>{{data.var299 ? data.var299 : '-'}}</td>
                        <td>{{data.var300 ? data.var300 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>EXAMEN PÉLVICO</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                EVALUACIÓN NORMAL
                            </td>
                        <td>{{parseInt(data.var301) + parseInt(data.var303) + parseInt(data.var305)}}</td>
                        <td>{{parseInt(data.var302) + parseInt(data.var304) + parseInt(data.var306)}}</td>
                        <td>{{data.var301 ? data.var301 : '-'}}</td>
                        <td>{{data.var302 ? data.var302 : '-'}}</td>
                        <td>{{data.var303 ? data.var303 : '-'}}</td>
                        <td>{{data.var304 ? data.var304 : '-'}}</td>
                        <td>{{data.var305 ? data.var305 : '-'}}</td>
                        <td>{{data.var306 ? data.var306 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                EVALUACIÓN ANORMAL
                            </td>
                        <td>{{parseInt(data.var307) + parseInt(data.var309) + parseInt(data.var311)}}</td>
                        <td>{{parseInt(data.var308) + parseInt(data.var310) + parseInt(data.var312)}}</td>
                        <td>{{data.var307 ? data.var307 : '-'}}</td>
                        <td>{{data.var308 ? data.var308 : '-'}}</td>
                        <td>{{data.var309 ? data.var309 : '-'}}</td>
                        <td>{{data.var310 ? data.var310 : '-'}}</td>
                        <td>{{data.var311 ? data.var311 : '-'}}</td>
                        <td>{{data.var312 ? data.var312 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>IVVA / IVVAM</b>
                            </td>
                    </tr>
                     <tr>
                        <td></td>
                            <td>
                                EVALUACIÓN NORMAL
                            </td>
                        <td>{{parseInt(data.var313) + parseInt(data.var315) + parseInt(data.var317)}}</td>
                        <td>{{parseInt(data.var314) + parseInt(data.var316) + parseInt(data.var318)}}</td>
                        <td>{{data.var313 ? data.var313 : '-'}}</td>
                        <td>{{data.var314 ? data.var314 : '-'}}</td>
                        <td>{{data.var315 ? data.var315 : '-'}}</td>
                        <td>{{data.var316 ? data.var316 : '-'}}</td>
                        <td>{{data.var317 ? data.var317 : '-'}}</td>
                        <td>{{data.var318 ? data.var318 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                EVALUACIÓN ANORMAL
                            </td>
                        <td>{{parseInt(data.var319) + parseInt(data.var321) + parseInt(data.var323)}}</td>
                        <td>{{parseInt(data.var320) + parseInt(data.var322) + parseInt(data.var324)}}</td>
                        <td>{{data.var319 ? data.var319 : '-'}}</td>
                        <td>{{data.var320 ? data.var320 : '-'}}</td>
                        <td>{{data.var321 ? data.var321 : '-'}}</td>
                        <td>{{data.var322 ? data.var322 : '-'}}</td>
                        <td>{{data.var323 ? data.var323 : '-'}}</td>
                        <td>{{data.var324 ? data.var324 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>EXAMEN CLINICO DE MAMA (ECM)</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                EVALUACIÓN NORMAL
                            </td>
                        <td>{{parseInt(data.var325) + parseInt(data.var327) + parseInt(data.var329)}}</td>
                        <td>{{parseInt(data.var326) + parseInt(data.var328) + parseInt(data.var330)}}</td>
                        <td>{{data.var325 ? data.var325 : '-'}}</td>
                        <td>{{data.var326 ? data.var326 : '-'}}</td>
                        <td>{{data.var327 ? data.var327 : '-'}}</td>
                        <td>{{data.var328 ? data.var328 : '-'}}</td>
                        <td>{{data.var329 ? data.var329 : '-'}}</td>
                        <td>{{data.var330 ? data.var330 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                EVALUACIÓN ANORMAL
                            </td>
                        <td>{{parseInt(data.var331) + parseInt(data.var333) + parseInt(data.var335)}}</td>
                        <td>{{parseInt(data.var332) + parseInt(data.var334) + parseInt(data.var336)}}</td>
                        <td>{{data.var331 ? data.var331 : '-'}}</td>
                        <td>{{data.var332 ? data.var332 : '-'}}</td>
                        <td>{{data.var333 ? data.var333 : '-'}}</td>
                        <td>{{data.var334 ? data.var334 : '-'}}</td>
                        <td>{{data.var335 ? data.var335 : '-'}}</td>
                        <td>{{data.var336 ? data.var336 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>MAMOGRAFIA</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                UNILATERAL
                            </td>
                        <td>{{parseInt(data.var337) + parseInt(data.var339) + parseInt(data.var341)}}</td>
                        <td>{{parseInt(data.var338) + parseInt(data.var340) + parseInt(data.var342)}}</td>
                        <td>{{data.var337 ? data.var337 : '-'}}</td>
                        <td>{{data.var338 ? data.var338 : '-'}}</td>
                        <td>{{data.var339 ? data.var339 : '-'}}</td>
                        <td>{{data.var340 ? data.var340 : '-'}}</td>
                        <td>{{data.var341 ? data.var341 : '-'}}</td>
                        <td>{{data.var342 ? data.var342 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                BILATERAL
                            </td>
                        <td>{{parseInt(data.var343) + parseInt(data.var345) + parseInt(data.var347)}}</td>
                        <td>{{parseInt(data.var344) + parseInt(data.var346) + parseInt(data.var348)}}</td>
                        <td>{{data.var343 ? data.var343 : '-'}}</td>
                        <td>{{data.var344 ? data.var344 : '-'}}</td>
                        <td>{{data.var345 ? data.var345 : '-'}}</td>
                        <td>{{data.var346 ? data.var346 : '-'}}</td>
                        <td>{{data.var347 ? data.var347 : '-'}}</td>
                        <td>{{data.var348 ? data.var348 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                SCREENING
                            </td>
                        <td>{{parseInt(data.var349) + parseInt(data.var351) + parseInt(data.var353)}}</td>
                        <td>{{parseInt(data.var350) + parseInt(data.var352) + parseInt(data.var354)}}</td>
                        <td>{{data.var349 ? data.var349 : '-'}}</td>
                        <td>{{data.var350 ? data.var350 : '-'}}</td>
                        <td>{{data.var351 ? data.var351 : '-'}}</td>
                        <td>{{data.var352 ? data.var352 : '-'}}</td>
                        <td>{{data.var353 ? data.var353 : '-'}}</td>
                        <td>{{data.var354 ? data.var354 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>BAAF</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                BIOPSIA POR ASPIRACIÓN CON AGUJA FINA
                            </td>
                        <td>{{parseInt(data.var355) + parseInt(data.var357) + parseInt(data.var359)}}</td>
                        <td>{{parseInt(data.var356) + parseInt(data.var358) + parseInt(data.var360)}}</td>
                        <td>{{data.var355 ? data.var355 : '-'}}</td>
                        <td>{{data.var356 ? data.var356 : '-'}}</td>
                        <td>{{data.var357 ? data.var357 : '-'}}</td>
                        <td>{{data.var358 ? data.var358 : '-'}}</td>
                        <td>{{data.var359 ? data.var359 : '-'}}</td>
                        <td>{{data.var360 ? data.var360 : '-'}}</td>
                    </tr>
                    <tr>
                        <td>
                            </td> 
                                <td colspan="9">
                                   <b>ENTREGA DE RESULTADOS</b>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                                BIOPSIA DE MAMA POSITIVOS
                            </td>
                        <td>{{parseInt(data.var361) + parseInt(data.var363) + parseInt(data.var365)}}</td>
                        <td>{{parseInt(data.var362) + parseInt(data.var364) + parseInt(data.var366)}}</td>
                        <td>{{data.var361 ? data.var361 : '-'}}</td>
                        <td>{{data.var362 ? data.var362 : '-'}}</td>
                        <td>{{data.var363 ? data.var363 : '-'}}</td>
                        <td>{{data.var364 ? data.var364 : '-'}}</td>
                        <td>{{data.var365 ? data.var365 : '-'}}</td>
                        <td>{{data.var366 ? data.var366 : '-'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                            <td>
                               BIOPSIA DE MAMA NEGATIVO
                            </td>
                        <td>{{parseInt(data.var367) + parseInt(data.var369) + parseInt(data.var371)}}</td>
                        <td>{{parseInt(data.var368) + parseInt(data.var370) + parseInt(data.var372)}}</td>
                        <td>{{data.var367 ? data.var367 : '-'}}</td>
                        <td>{{data.var368 ? data.var368 : '-'}}</td>
                        <td>{{data.var369 ? data.var369 : '-'}}</td>
                        <td>{{data.var370 ? data.var370 : '-'}}</td>
                        <td>{{data.var371 ? data.var371 : '-'}}</td>
                        <td>{{data.var372 ? data.var372 : '-'}}</td>
                    </tr>
                    <tr><td colspan="10"><b>IDENTIFICACIÓN DE FACTORES DE RIESGO Y TAMIZAJE LABORATORIAL</b></td></tr>
                     <tr>
                            <td rowspan="1"><b>DNT</b></td>
                            <td>Valoración Clínica de Factores de Riesgo</td>
                            <td>{{parseInt(data.var373) + parseInt(data.var375) + parseInt(data.var377)}}</td>
                            <td>{{parseInt(data.var374) + parseInt(data.var376) + parseInt(data.var378)}}</td>
                            <td>{{data.var373 ? data.var373 : '-'}}</td>
                            <td>{{data.var374 ? data.var374 : '-'}}</td>
                            <td>{{data.var375 ? data.var375 : '-'}}</td>
                            <td>{{data.var376 ? data.var376 : '-'}}</td>
                            <td>{{data.var377 ? data.var377 : '-'}}</td>
                            <td>{{data.var378 ? data.var378 : '-'}}</td>
                    </tr>
                    <tr><td colspan="10"><b>ATENCIÓN DEL ADULTO MAYOR EN EL DOMICILIO</b></td></tr>
                    <tr>
                            <td rowspan="1"><b>VD</b></td>
                            <td>Visita de Atención Integral</td>
                            <td>{{parseInt(data.var379) + parseInt(data.var381) + parseInt(data.var383)}}</td>
                            <td>{{parseInt(data.var380) + parseInt(data.var382) + parseInt(data.var384)}}</td>
                            <td>{{data.var379 ? data.var379 : '-'}}</td>
                            <td>{{data.var380 ? data.var380 : '-'}}</td>
                            <td>{{data.var381 ? data.var381 : '-'}}</td>
                            <td>{{data.var382 ? data.var382 : '-'}}</td>
                            <td>{{data.var383 ? data.var383 : '-'}}</td>
                            <td>{{data.var384 ? data.var384 : '-'}}</td>
                    </tr>
                    <tr><td colspan="10"><b>TELECONSULTAS A PAM</b></td></tr>
                    <tr>
                            <td rowspan="2"><b>TC</b></td>
                            <td>Teleconsulta Síncrona</td>
                            <td>{{parseInt(data.var385) + parseInt(data.var387) + parseInt(data.var389)}}</td>
                            <td>{{parseInt(data.var386) + parseInt(data.var388) + parseInt(data.var390)}}</td>
                            <td>{{data.var385 ? data.var385 : '-'}}</td>
                            <td>{{data.var386 ? data.var386 : '-'}}</td>
                            <td>{{data.var387 ? data.var387 : '-'}}</td>
                            <td>{{data.var388 ? data.var388 : '-'}}</td>
                            <td>{{data.var389 ? data.var389 : '-'}}</td>
                            <td>{{data.var390 ? data.var390 : '-'}}</td>
                    </tr>
                    <tr>
                            <td>Teleconsulta Asíncrona</td>
                            <td>{{parseInt(data.var391) + parseInt(data.var393) + parseInt(data.var395)}}</td>
                            <td>{{parseInt(data.var392) + parseInt(data.var394) + parseInt(data.var396)}}</td>
                            <td>{{data.var391 ? data.var391 : '-'}}</td>
                            <td>{{data.var392 ? data.var392 : '-'}}</td>
                            <td>{{data.var393 ? data.var393 : '-'}}</td>
                            <td>{{data.var394 ? data.var394 : '-'}}</td>
                            <td>{{data.var395 ? data.var395 : '-'}}</td>
                            <td>{{data.var396 ? data.var396 : '-'}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
    </v-row>
</template>
<script>
export default ({
    data: () => ({
        datos: '',
        data: [],
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
            await this.axios.get(this.$api_url + '/reporte/' + this.tabla + '/1-396',{
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
                console.log(this.data.var1)
            })
        },
    },
    
    
})
</script>

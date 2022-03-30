
<template>
    <v-row >
        <v-col md="12">
            <h4>A. MUJERES TAMIZADAS EN CÁNCER DE CUELLO UTERINO</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                ACTIVIDAD
                            </th>
                            <th class="text-left">
                                RESULTADO
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                25a - 29a
                            </th>
                            <th class="text-left">
                                30a - 39a
                            </th>
                            <th class="text-left">
                                40a - 49a
                            </th>
                            <th class="text-left">
                                50a - 64a
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Toma de muestra de Papanicolau</td>
                            <td class="text-left"></td>
                            <td class="text-left">{{parseInt(data.var1)+parseInt(data.var2)+parseInt(data.var3)+parseInt(data.var4)}}</td>
                            <td class="text-left">{{data.var1 ? data.var1 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var2 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var3 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var4 : '-'}}</td>
                        </tr>
                        <tr>
                            <td rowspan="6" class="text-left">Resultados de papanicolaou</td>
                            <td class="text-left">Normal</td>
                            <td class="text-left">{{parseInt(data.var5)+parseInt(data.var6)+parseInt(data.var7)+parseInt(data.var8)}}</td>
                            <td class="text-left">{{data.var5 ? data.var5 : '-'}}</td>
                            <td class="text-left">{{data.var6 ? data.var6 : '-'}}</td>
                            <td class="text-left">{{data.var7 ? data.var7 : '-'}}</td>
                            <td class="text-left">{{data.var8 ? data.var8 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Células escamosas y glandulares atípicas (ASCUS y AGC)</td>
                            <td class="text-left">{{parseInt(data.var9)+parseInt(data.var10)+parseInt(data.var11)+parseInt(data.var12)}}</td>
                            <td class="text-left">{{data.var9 ? data.var9 : '-'}}</td>
                            <td class="text-left">{{data.var10 ? data.var10 : '-'}}</td>
                            <td class="text-left">{{data.var11 ? data.var11 : '-'}}</td>
                            <td class="text-left">{{data.var12 ? data.var12 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Lesión Intraepitelial cervical de bajo grado (NIC I)</td>
                            <td class="text-left">{{parseInt(data.var13)+parseInt(data.var14)+parseInt(data.var15)+parseInt(data.var16)}}</td>
                            <td class="text-left">{{data.var13 ? data.var13 : '-'}}</td>
                            <td class="text-left">{{data.var14 ? data.var14 : '-'}}</td>
                            <td class="text-left">{{data.var15 ? data.var15 : '-'}}</td>
                            <td class="text-left">{{data.var16 ? data.var16 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Lesión Intraepitelial cervical de alto grado (NIC II, NIC III)</td>
                            <td class="text-left">{{parseInt(data.var17)+parseInt(data.var18)+parseInt(data.var19)+parseInt(data.var20)}}</td>
                            <td class="text-left">{{data.var17 ? data.var17 : '-'}}</td>
                            <td class="text-left">{{data.var18 ? data.var18 : '-'}}</td>
                            <td class="text-left">{{data.var19 ? data.var19 : '-'}}</td>
                            <td class="text-left">{{data.var20 ? data.var20 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer in situ del cuello uterino no especificada</td>
                            <td class="text-left">{{parseInt(data.var21)+parseInt(data.var22)+parseInt(data.var23)+parseInt(data.var24)}}</td>
                            <td class="text-left">{{data.var21 ? data.var21 : '-'}}</td>
                            <td class="text-left">{{data.var22 ? data.var22 : '-'}}</td>
                            <td class="text-left">{{data.var23 ? data.var23 : '-'}}</td>
                            <td class="text-left">{{data.var24 ? data.var24 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer invasor del cuello uterino</td>
                            <td class="text-left">{{parseInt(data.var25)+parseInt(data.var26)+parseInt(data.var27)+parseInt(data.var28)}}</td>
                            <td class="text-left">{{data.var25 ? data.var25 : '-'}}</td>
                            <td class="text-left">{{data.var26 ? data.var26 : '-'}}</td>
                            <td class="text-left">{{data.var27 ? data.var27 : '-'}}</td>
                            <td class="text-left">{{data.var28 ? data.var28 : '-'}}</td>
                        </tr>
                        <tr>
                            <td rowspan="2" class="text-left">Persona examinada con Inspección Visual Acido Acético</td>
                            <td class="text-left">Normal</td>
                            <td class="text-left">{{parseInt(data.var29)+parseInt(data.var30)+parseInt(data.var31)+parseInt(data.var32)}}</td>
                            <td class="text-left">{{data.var29 ? data.var29 : '-'}}</td>
                            <td class="text-left">{{data.var30 ? data.var30 : '-'}}</td>
                            <td class="text-left">{{data.var31 ? data.var31 : '-'}}</td>
                            <td class="text-left">{{data.var32 ? data.var32 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Anormal</td>
                            <td class="text-left">{{parseInt(data.var33)+parseInt(data.var34)+parseInt(data.var35)+parseInt(data.var36)}}</td>
                            <td class="text-left">{{data.var33 ? data.var33 : '-'}}</td>
                            <td class="text-left">{{data.var34 ? data.var34 : '-'}}</td>
                            <td class="text-left">{{data.var35 ? data.var35 : '-'}}</td>
                            <td class="text-left">{{data.var36 ? data.var36 : '-'}}</td>
                        </tr>
                        <tr>
                            <td rowspan="6" class="text-left">Detección molecular de Virus Papiloma Humano</td>
                            <td class="text-left">Toma de muestra de VPH</td>
                            <td class="text-left">{{parseInt(data.var37)+parseInt(data.var38)+parseInt(data.var39)+parseInt(data.var40)}}</td>
                            <td class="text-left">{{data.var37 ? data.var37 : '-'}}</td>
                            <td class="text-left">{{data.var38 ? data.var38 : '-'}}</td>
                            <td class="text-left">{{data.var39 ? data.var39 : '-'}}</td>
                            <td class="text-left">{{data.var40 ? data.var40 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Normal</td>
                            <td class="text-left">{{parseInt(data.var41)+parseInt(data.var42)+parseInt(data.var43)+parseInt(data.var44)}}</td>
                            <td class="text-left">{{data.var41 ? data.var41 : '-'}}</td>
                            <td class="text-left">{{data.var42 ? data.var42 : '-'}}</td>
                            <td class="text-left">{{data.var43 ? data.var43 : '-'}}</td>
                            <td class="text-left">{{data.var44 ? data.var44 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Anormal</td>
                            <td class="text-left">{{parseInt(data.var45)+parseInt(data.var46)+parseInt(data.var47)+parseInt(data.var48)}}</td>
                            <td class="text-left">{{data.var45 ? data.var45 : '-'}}</td>
                            <td class="text-left">{{data.var46 ? data.var46 : '-'}}</td>
                            <td class="text-left">{{data.var47 ? data.var47 : '-'}}</td>
                            <td class="text-left">{{data.var48 ? data.var48 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="12">
            <h4>B. MUJERES TAMIZADAS EN CANCER DE MAMA</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                ACTIVIDAD
                            </th>
                            <th class="text-left">
                                RESULTADO
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                18a - 29a
                            </th>
                            <th class="text-left">
                                30a - 39a
                            </th>
                            <th class="text-left">
                                40a - 49a
                            </th>
                            <th class="text-left">
                                50a - 59a
                            </th>
                            <th class="text-left">
                                60a - 69a
                            </th>
                            <th class="text-left">
                                70a - 75a
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="2" class="text-left">Examen clínico de mama</td>
                            <td class="text-left">Normal</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)+parseInt(data.var54)}}</td>
                            <td class="text-left">{{data.var49 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var50 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var51 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var52 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var53 ? data.var53 : '-'}}</td>
                            <td class="text-left">{{data.var54 ? data.var54 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Anormal</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var55 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var56 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var57 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var58 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var59 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var60 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td rowspan="8" class="text-left">Mujer tamizada con mamografía bilateral de tamizaje</td>
                            <td class="text-left">Indicación de mamografía para tamizaje</td>
                            <td class="text-left">{{parseInt(data.var61)+parseInt(data.var62)+parseInt(data.var63)+parseInt(data.var64)+parseInt(data.var65)+parseInt(data.var66)}}</td>
                            <td class="text-left">{{data.var61 ? data.var61 : '-'}}</td>
                            <td class="text-left">{{data.var62 ? data.var62 : '-'}}</td>
                            <td class="text-left">{{data.var63 ? data.var63 : '-'}}</td>
                            <td class="text-left">{{data.var64 ? data.var64 : '-'}}</td>
                            <td class="text-left">{{data.var65 ? data.var65 : '-'}}</td>
                            <td class="text-left">{{data.var66 ? data.var66 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Evaluación adicional (BI RADS 0)</td>
                            <td class="text-left">{{parseInt(data.var67)+parseInt(data.var68)+parseInt(data.var69)+parseInt(data.var70)+parseInt(data.var71)+parseInt(data.var72)}}</td>
                            <td class="text-left">{{data.var67 ? data.var67 : '-'}}</td>
                            <td class="text-left">{{data.var68 ? data.var68 : '-'}}</td>
                            <td class="text-left">{{data.var69 ? data.var69 : '-'}}</td>
                            <td class="text-left">{{data.var70 ? data.var70 : '-'}}</td>
                            <td class="text-left">{{data.var71 ? data.var71 : '-'}}</td>
                            <td class="text-left">{{data.var72 ? data.var72 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Negativa (BI RADS 1)</td>
                            <td class="text-left">{{parseInt(data.var73)+parseInt(data.var74)+parseInt(data.var75)+parseInt(data.var76)+parseInt(data.var77)+parseInt(data.var78)}}</td>
                            <td class="text-left">{{data.var73 ? data.var73 : '-'}}</td>
                            <td class="text-left">{{data.var74 ? data.var74 : '-'}}</td>
                            <td class="text-left">{{data.var75 ? data.var75 : '-'}}</td>
                            <td class="text-left">{{data.var76 ? data.var76 : '-'}}</td>
                            <td class="text-left">{{data.var77 ? data.var77 : '-'}}</td>
                            <td class="text-left">{{data.var78 ? data.var78 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Benigna (BI RADS 2)</td>
                            <td class="text-left">{{parseInt(data.var79)+parseInt(data.var80)+parseInt(data.var81)+parseInt(data.var82)+parseInt(data.var83)+parseInt(data.var84)}}</td>
                            <td class="text-left">{{data.var79 ? data.var79 : '-'}}</td>
                            <td class="text-left">{{data.var80 ? data.var80 : '-'}}</td>
                            <td class="text-left">{{data.var81 ? data.var81 : '-'}}</td>
                            <td class="text-left">{{data.var82 ? data.var82 : '-'}}</td>
                            <td class="text-left">{{data.var83 ? data.var83 : '-'}}</td>
                            <td class="text-left">{{data.var84 ? data.var84 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Probablemente benigna (BI RADS 3)</td>
                            <td class="text-left">{{parseInt(data.var85)+parseInt(data.var86)+parseInt(data.var87)+parseInt(data.var88)+parseInt(data.var89)+parseInt(data.var90)}}</td>
                            <td class="text-left">{{data.var85 ? data.var85 : '-'}}</td>
                            <td class="text-left">{{data.var86 ? data.var86 : '-'}}</td>
                            <td class="text-left">{{data.var87 ? data.var87 : '-'}}</td>
                            <td class="text-left">{{data.var88 ? data.var88 : '-'}}</td>
                            <td class="text-left">{{data.var89 ? data.var89 : '-'}}</td>
                            <td class="text-left">{{data.var90 ? data.var90 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Anormalidad sospechosa (BI RADS 4)</td>
                            <td class="text-left">{{parseInt(data.var91)+parseInt(data.var92)+parseInt(data.var93)+parseInt(data.var94)+parseInt(data.var95)+parseInt(data.var96)}}</td>
                            <td class="text-left">{{data.var91 ? data.var91 : '-'}}</td>
                            <td class="text-left">{{data.var92 ? data.var92 : '-'}}</td>
                            <td class="text-left">{{data.var93 ? data.var93 : '-'}}</td>
                            <td class="text-left">{{data.var94 ? data.var94 : '-'}}</td>
                            <td class="text-left">{{data.var95 ? data.var95 : '-'}}</td>
                            <td class="text-left">{{data.var96 ? data.var96 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Altamente sugestiva de malignidad (BI RADS 5)</td>
                            <td class="text-left">{{parseInt(data.var97)+parseInt(data.var98)+parseInt(data.var99)+parseInt(data.var100)+parseInt(data.var101)+parseInt(data.var102)}}</td>
                            <td class="text-left">{{data.var97 ? data.var97 : '-'}}</td>
                            <td class="text-left">{{data.var98 ? data.var98 : '-'}}</td>
                            <td class="text-left">{{data.var99 ? data.var99 : '-'}}</td>
                            <td class="text-left">{{data.var100 ? data.var100 : '-'}}</td>
                            <td class="text-left">{{data.var101 ? data.var101 : '-'}}</td>
                            <td class="text-left">{{data.var102 ? data.var102 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Malignidad conocida (Bi RADS 6)</td>
                            <td class="text-left">{{parseInt(data.var103)+parseInt(data.var104)+parseInt(data.var105)+parseInt(data.var106)+parseInt(data.var107)+parseInt(data.var108)}}</td>
                            <td class="text-left">{{data.var103 ? data.var103 : '-'}}</td>
                            <td class="text-left">{{data.var104 ? data.var104 : '-'}}</td>
                            <td class="text-left">{{data.var105 ? data.var105 : '-'}}</td>
                            <td class="text-left">{{data.var106 ? data.var106 : '-'}}</td>
                            <td class="text-left">{{data.var107 ? data.var107 : '-'}}</td>
                            <td class="text-left">{{data.var108 ? data.var108 : '-'}}</td>
                        </tr>
                        <tr>
                            <td rowspan="8" class="text-left">Mujer con mamografía durante tratamiento o post tratamiento</td>
                            <td class="text-left">Indicación de mamografía de control</td>
                            <td class="text-left">{{parseInt(data.var109)+parseInt(data.var110)+parseInt(data.var111)+parseInt(data.var112)+parseInt(data.var113)+parseInt(data.var114)}}</td>
                            <td class="text-left">{{data.var109 ? data.var109 : '-'}}</td>
                            <td class="text-left">{{data.var110 ? data.var110 : '-'}}</td>
                            <td class="text-left">{{data.var111 ? data.var111 : '-'}}</td>
                            <td class="text-left">{{data.var112 ? data.var112 : '-'}}</td>
                            <td class="text-left">{{data.var113 ? data.var113 : '-'}}</td>
                            <td class="text-left">{{data.var114 ? data.var114 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Evaluación adicional (BI RADS 0)</td>
                            <td class="text-left">{{parseInt(data.var115)+parseInt(data.var116)+parseInt(data.var117)+parseInt(data.var118)+parseInt(data.var119)+parseInt(data.var120)}}</td>
                            <td class="text-left">{{data.var115 ? data.var115 : '-'}}</td>
                            <td class="text-left">{{data.var116 ? data.var116 : '-'}}</td>
                            <td class="text-left">{{data.var117 ? data.var117 : '-'}}</td>
                            <td class="text-left">{{data.var118 ? data.var118 : '-'}}</td>
                            <td class="text-left">{{data.var119 ? data.var119 : '-'}}</td>
                            <td class="text-left">{{data.var120 ? data.var120 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Negativa (BI RADS 1)</td>
                            <td class="text-left">{{parseInt(data.var121)+parseInt(data.var122)+parseInt(data.var123)+parseInt(data.var124)+parseInt(data.var125)+parseInt(data.var126)}}</td>
                            <td class="text-left">{{data.var121 ? data.var121 : '-'}}</td>
                            <td class="text-left">{{data.var122 ? data.var122 : '-'}}</td>
                            <td class="text-left">{{data.var123 ? data.var123 : '-'}}</td>
                            <td class="text-left">{{data.var124 ? data.var124 : '-'}}</td>
                            <td class="text-left">{{data.var125 ? data.var125 : '-'}}</td>
                            <td class="text-left">{{data.var126 ? data.var126 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Benigna (BI RADS 2)</td>
                            <td class="text-left">{{parseInt(data.var127)+parseInt(data.var128)+parseInt(data.var129)+parseInt(data.var130)+parseInt(data.var131)+parseInt(data.var132)}}</td>
                            <td class="text-left">{{data.var127 ? data.var127 : '-'}}</td>
                            <td class="text-left">{{data.var128 ? data.var128 : '-'}}</td>
                            <td class="text-left">{{data.var129 ? data.var129 : '-'}}</td>
                            <td class="text-left">{{data.var130 ? data.var130 : '-'}}</td>
                            <td class="text-left">{{data.var131 ? data.var131 : '-'}}</td>
                            <td class="text-left">{{data.var132 ? data.var132 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Probablemente benigna (BI RADS 3)</td>
                            <td class="text-left">{{parseInt(data.var133)+parseInt(data.var134)+parseInt(data.var135)+parseInt(data.var136)+parseInt(data.var137)+parseInt(data.var138)}}</td>
                            <td class="text-left">{{data.var133 ? data.var133 : '-'}}</td>
                            <td class="text-left">{{data.var134 ? data.var134 : '-'}}</td>
                            <td class="text-left">{{data.var135 ? data.var135 : '-'}}</td>
                            <td class="text-left">{{data.var136 ? data.var136 : '-'}}</td>
                            <td class="text-left">{{data.var137 ? data.var137 : '-'}}</td>
                            <td class="text-left">{{data.var138 ? data.var138 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Anormalidad sospechosa (BI RADS 4)</td>
                            <td class="text-left">{{parseInt(data.var139)+parseInt(data.var140)+parseInt(data.var141)+parseInt(data.var142)+parseInt(data.var143)+parseInt(data.var144)}}</td>
                            <td class="text-left">{{data.var139 ? data.var139 : '-'}}</td>
                            <td class="text-left">{{data.var140 ? data.var140 : '-'}}</td>
                            <td class="text-left">{{data.var141 ? data.var141 : '-'}}</td>
                            <td class="text-left">{{data.var142 ? data.var142 : '-'}}</td>
                            <td class="text-left">{{data.var143 ? data.var143 : '-'}}</td>
                            <td class="text-left">{{data.var144 ? data.var144 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Altamente sugestiva de malignidad (BI RADS 5)</td>
                            <td class="text-left">{{parseInt(data.var145)+parseInt(data.var146)+parseInt(data.var147)+parseInt(data.var148)+parseInt(data.var149)+parseInt(data.var150)}}</td>
                            <td class="text-left">{{data.var145 ? data.var145 : '-'}}</td>
                            <td class="text-left">{{data.var146 ? data.var146 : '-'}}</td>
                            <td class="text-left">{{data.var147 ? data.var147 : '-'}}</td>
                            <td class="text-left">{{data.var148 ? data.var148 : '-'}}</td>
                            <td class="text-left">{{data.var149 ? data.var149 : '-'}}</td>
                            <td class="text-left">{{data.var150 ? data.var150 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Malignidad conocida (Bi RADS 6)</td>
                            <td class="text-left">{{parseInt(data.var151)+parseInt(data.var152)+parseInt(data.var153)+parseInt(data.var154)+parseInt(data.var155)+parseInt(data.var156)}}</td>
                            <td class="text-left">{{data.var151 ? data.var151 : '-'}}</td>
                            <td class="text-left">{{data.var152 ? data.var152 : '-'}}</td>
                            <td class="text-left">{{data.var153 ? data.var153 : '-'}}</td>
                            <td class="text-left">{{data.var154 ? data.var154 : '-'}}</td>
                            <td class="text-left">{{data.var155 ? data.var155 : '-'}}</td>
                            <td class="text-left">{{data.var156 ? data.var156 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="12">
            <h4>C. PERSONAS TAMIZADAS PARA DETECCION DE OTROS CANCER</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                ACTIVIDAD
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                18a - 29a
                            </th>
                            <th class="text-left">
                                30a - 39a
                            </th>
                            <th class="text-left">
                                40a - 49a
                            </th>
                            <th class="text-left">
                                50a - 59a
                            </th>
                            <th class="text-left">
                                60a - 69a
                            </th>
                            <th class="text-left">
                                70a - 75a
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Examen de sangre oculta en heces - Indicación</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)+parseInt(data.var54)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var54 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Examen de sangre oculta en heces - Normal</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Examen de sangre oculta en heces - Anormal</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)+parseInt(data.var54)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var54 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Examen de tacto rectal - Normal</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Examen de tacto rectal - Anormal</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Examen PSA - Indicación</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Examen PSA - Normal</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Examen PSA - Anormal</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Tamizaje para detección de cáncer de piel - Normal</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Tamizaje para detección de cáncer de piel - Anormal</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="12">
            <h4>D. PERSONA ATENDIDA CON LESIONES PRE MALIGNAS DE CANCER DE CUELLO UTERINO</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                ACTIVIDAD
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                25a - 39a
                            </th>
                            <th class="text-left">
                                40a - 49a
                            </th>
                            <th class="text-left">
                                50a - 59a
                            </th>
                            <th class="text-left">
                                60a - 64a
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Mujer examinada con colposcopia - Normal (25 a 64 años)</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Mujer examinada con colposcopia - Anormal (25 a 64 años)</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Atención de pacientes con lesiones premalignas de cuello uterino con ablación (30 a 49 años)</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Atención de pacientes con lesiones premalignas de cuello uterino con tratamiento escisional (25 a 64 años)</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="12">
            <h4>E. PROCEDIMIENTOS PARA EL DIAGNOSTICO DE CANCER</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                ACTIVIDAD
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                18a - 29a
                            </th>
                            <th class="text-left">
                                30a - 39a
                            </th>
                            <th class="text-left">
                                40a - 49a
                            </th>
                            <th class="text-left">
                                50a - 59a
                            </th>
                            <th class="text-left">
                                60a - 69a
                            </th>
                            <th class="text-left">
                                70a - 75a
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia de Cuello Uterino</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)+parseInt(data.var54)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var54 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia mamaria</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia de prostata</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)+parseInt(data.var54)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var54 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia de colon recto</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia de estómago</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia de piel</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia pulmonar</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia de hígado</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia de ganglios</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de Aspirado de Médula ósea</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de biopsia de médula ósea</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Persona atendida con procedimiento de punción lumbar</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="12">
            <h4>F. ATENCIÓN DE CÁNCER</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th rowspan="2" class="text-left">
                                DIAGNÓSTICO DE CÁNCER
                            </th>
                            <th rowspan="2" class="text-left">
                                TOTAL DIAGNÓSTICOS
                            </th>
                            <th colspan="4" class="text-left">
                                ESTADÍO
                            </th>
                            <th rowspan="2" class="text-left">
                                TRATAMIENTO
                            </th>
                        </tr>
                        <tr>
                            <th class="text-left">
                                1
                            </th>
                            <th class="text-left">
                                2
                            </th>
                            <th class="text-left">
                                3
                            </th>
                            <th class="text-left">
                                4
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Cáncer de cuello uterino</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer de piel</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer de mama</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer de estómago</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer de próstata</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer de pulmón</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer de colon y recto</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Cáncer de hígado</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Leucemia</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Linfoma</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="12">
            <h4>G. PERSONA CON CONSEJERÍA PARA LA PREVENCIÓN Y CONTROL DEL CÁNCER</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                ACTIVIDAD
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                18a - 29a
                            </th>
                            <th class="text-left">
                                30a - 39a
                            </th>
                            <th class="text-left">
                                40a - 49a
                            </th>
                            <th class="text-left">
                                50a - 59a
                            </th>
                            <th class="text-left">
                                60a - 69a
                            </th>
                            <th class="text-left">
                                70a - 75a
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Consejería preventiva en factores de riesgo para el cáncer - Personas con una consejería</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)+parseInt(data.var54)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var54 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Consejería preventiva en factores de riesgo para el cáncer - Personas con dos consejerías</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Consejería para pacientes diagnosticados con cáncer - Personas con una consejería</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)+parseInt(data.var54)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var54 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Consejería para pacientes diagnosticados con cáncer - Personas con dos consejerías</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="12">
            <h4>H. CUIDADOS PALIATIVOS</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                ACTIVIDAD
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                menor a 30
                            </th>
                            <th class="text-left">
                                30a - 39a
                            </th>
                            <th class="text-left">
                                40a - 49a
                            </th>
                            <th class="text-left">
                                50a - 59a
                            </th>
                            <th class="text-left">
                                60a - 69a
                            </th>
                            <th class="text-left">
                                70a a mas
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Atención con cuidados paliativos en el establecimiento de salud</td>
                            <td class="text-left">{{parseInt(data.var49)+parseInt(data.var50)+parseInt(data.var51)+parseInt(data.var52)+parseInt(data.var53)+parseInt(data.var54)}}</td>
                            <td class="text-left">{{data.var1 ? data.var49 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var50 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var51 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var52 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var53 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var54 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Atención con cuidados paliativos en el domicilio</td>
                            <td class="text-left">{{parseInt(data.var55)+parseInt(data.var56)+parseInt(data.var57)+parseInt(data.var58)+parseInt(data.var59)+parseInt(data.var60)}}</td>
                            <td class="text-left">{{data.var1 ? data.var55 : '-'}}</td>
                            <td class="text-left">{{data.var2 ? data.var56 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var57 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var58 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var59 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var60 : '-'}}</td>
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
            await this.axios.get(this.$api_url + '/reporte/' + this.tabla + '/1-400',{
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

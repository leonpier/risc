
<template>
    <v-row >
        <v-col md="12">
            <h4>A.- ATENDIDOS Y ATENCIONES EN SALUD FAMILIAR</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                            <th class="text-left">
                                Total
                            </th>
                            <th class="text-left">
                                1d - 11a
                            </th>
                            <th class="text-left">
                                12a - 17a
                            </th>
                            <th class="text-left">
                                18a - 29a
                            </th>
                            <th class="text-left">
                                30a - 59a
                            </th>
                            <th class="text-left">
                                60a - +
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td rowspan="4"><b>Atendidos</b></td></tr>
                        <tr>
                            <td class="text-left">Nuevo</td>
                            <td class="text-left">{{parseInt(data.var1)+parseInt(data.var2)+parseInt(data.var3)+parseInt(data.var4)+parseInt(data.var5)}}</td>
                            <td class="text-left">{{data.var1 ? data.var1 : "-"}}</td>
                            <td class="text-left">{{data.var2 ? data.var2 : '-'}}</td>
                            <td class="text-left">{{data.var3 ? data.var3 : '-'}}</td>
                            <td class="text-left">{{data.var4 ? data.var4 : '-'}}</td>
                            <td class="text-left">{{data.var5 ? data.var5 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Reingreso</td>
                            <td class="text-left">{{parseInt(data.var6)+parseInt(data.var7)+parseInt(data.var8)+parseInt(data.var9)+parseInt(data.var10)}}</td>
                            <td class="text-left">{{data.var6 ? data.var6 : '-'}}</td>
                            <td class="text-left">{{data.var7 ? data.var7 : '-'}}</td>
                            <td class="text-left">{{data.var8 ? data.var8 : '-'}}</td>
                            <td class="text-left">{{data.var9 ? data.var9 : '-'}}</td>
                            <td class="text-left">{{data.var10 ? data.var10 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Total</td>
                            <td class="text-left"></td>
                            <td class="text-left">{{parseInt(data.var1) + parseInt(data.var6)}}</td>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                        </tr>
                        <tr>
                            <td colspan="8"></td>
                        </tr>
                        <tr>
                            <td rowspan="5"><b>Atenciones</b></td>
                        </tr>
                        <tr>
                            <td class="text-left">Nuevo</td>
                            <td class="text-left"></td>
                            <td class="text-left">{{data.var11 ? data.var11 : '-'}}</td>
                            <td class="text-left">{{data.var12 ? data.var12 : '-'}}</td>
                            <td class="text-left">{{data.var13 ? data.var13 : '-'}}</td>
                            <td class="text-left">{{data.var14 ? data.var14 : '-'}}</td>
                            <td class="text-left">{{data.var15 ? data.var15 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Reingreso</td>
                            <td class="text-left"></td>
                            <td class="text-left">{{data.var16 ? data.var16 : '-'}}</td>
                            <td class="text-left">{{data.var17 ? data.var17 : '-'}}</td>
                            <td class="text-left">{{data.var18 ? data.var18 : '-'}}</td>
                            <td class="text-left">{{data.var19 ? data.var19 : '-'}}</td>
                            <td class="text-left">{{data.var20 ? data.var20 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Continuador</td>
                            <td class="text-left"></td>
                            <td class="text-left">{{data.var21 ? data.var21 : '-'}}</td>
                            <td class="text-left">{{data.var22 ? data.var22 : '-'}}</td>
                            <td class="text-left">{{data.var23 ? data.var23 : '-'}}</td>
                            <td class="text-left">{{data.var24 ? data.var24 : '-'}}</td>
                            <td class="text-left">{{data.var25 ? data.var25 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Total</td>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="5">
            <h4>B.- VISITA DE SALUD FAMILIAR</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left">N°</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Familias con 1º Visita de Salud</td>
                            <td class="text-left">{{data.var26 ? data.var26 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Familias con 2º Visita de Salud</td>
                            <td class="text-left">{{data.var27 ? data.var27 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Familias con 3º Visita de Salud</td>
                            <td class="text-left">{{data.var28 ? data.var28 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Familias con 4º Visita de Salud</td>
                            <td class="text-left">{{data.var29 ? data.var29 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Familias con + de 4 Visitas de Salud</td>
                            <td class="text-left">{{data.var30 ? data.var30 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                        </tr>
                        <tr>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                        </tr>
                        <tr>
                            <td class="text-left">Familias con Plan Familiar entregado</td>
                            <td class="text-left">{{data.var31 ? data.var31 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="1">
        </v-col>
        <v-col md="6">
            <h4>C.- ENTRENAMIENTO EN COMPORTAMIENTOS SALUDABLES Y DE AUTOCUIDADO</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                            <th class="text-center">N°</th>
                            <th class="text-center">Particip.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="text-left">APP136</th>
                            <th class="text-left">Familia</th>
                            <th class="text-center">{{data.var32 ? data.var32 : '-'}}</th>
                            <th class="text-center">{{data.var33 ? data.var33 : '-'}}</th>
                        </tr>
                        <tr>
                            <td class="text-left">APP140</td>
                            <td class="text-left">Actividades con ninos</td>
                            <td class="text-center">{{data.var34 ? data.var34 : '-'}}</td>
                            <td class="text-center">{{data.var35 ? data.var35 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP141</td>
                            <td class="text-left">Actividades con adolescentes</td>
                            <td class="text-center">{{data.var36 ? data.var36 : '-'}}</td>
                            <td class="text-center">{{data.var37 ? data.var37 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP142</td>
                            <td class="text-left">Actividades con adultos</td>
                            <td class="text-center">{{data.var38 ? data.var38 : '-'}}</td>
                            <td class="text-center">{{data.var39 ? data.var39 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP143</td>
                            <td class="text-left">Actividades con adulto mayor</td>
                            <td class="text-center">{{data.var40 ? data.var40 : '-'}}</td>
                            <td class="text-center">{{data.var41 ? data.var41 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP151</td>
                            <td class="text-left">Actividades en mujeres</td>
                            <td class="text-center">{{data.var42 ? data.var42 : '-'}}</td>
                            <td class="text-center">{{data.var43 ? data.var43 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP152</td>
                            <td class="text-left">Actividades en gestantes</td>
                            <td class="text-center">{{data.var44 ? data.var44 : '-'}}</td>
                            <td class="text-center">{{data.var45 ? data.var45 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP153</td>
                            <td class="text-left">Actividades en puerperas</td>
                            <td class="text-center">{{data.var46 ? data.var46 : '-'}}</td>
                            <td class="text-center">{{data.var47 ? data.var47 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP108</td>
                            <td class="text-left">Comunidad</td>
                            <td class="text-center">{{data.var48 ? data.var48 : '-'}}</td>
                            <td class="text-center">{{data.var49 ? data.var49 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        
        <v-col md="5">
            <h4>D.- ENTRENAMIENTO EN CULTURA DE PAZ y BUEN TRATO</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                            <th class="text-center">N°</th>
                            <th class="text-center">Particip.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="text-left">APP136</th>
                            <th class="text-left">Familia</th>
                            <th class="text-center">{{data.var50 ? data.var50 : '-'}}</th>
                            <th class="text-center">{{data.var51 ? data.var51 : '-'}}</th>
                        </tr>
                        <tr>
                            <td class="text-left">APP140</td>
                            <td class="text-left">Actividades con ninos</td>
                            <td class="text-center">{{data.var52 ? data.var52 : '-'}}</td>
                            <td class="text-center">{{data.var53 ? data.var53 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP141</td>
                            <td class="text-left">Actividades con adolescentes</td>
                            <td class="text-center">{{data.var54 ? data.var54 : '-'}}</td>
                            <td class="text-center">{{data.var55 ? data.var55 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP142</td>
                            <td class="text-left">Actividades con adultos</td>
                            <td class="text-center">{{data.var56 ? data.var56 : '-'}}</td>
                            <td class="text-center">{{data.var57 ? data.var57 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP143</td>
                            <td class="text-left">Actividades con adulto mayor</td>
                            <td class="text-center">{{data.var58 ? data.var58 : '-'}}</td>
                            <td class="text-center">{{data.var59 ? data.var59 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP151</td>
                            <td class="text-left">Actividades en mujeres</td>
                            <td class="text-center">{{data.var60 ? data.var60 : '-'}}</td>
                            <td class="text-center">{{data.var61 ? data.var61 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP152</td>
                            <td class="text-left">Actividades en gestantes</td>
                            <td class="text-center">{{data.var62 ? data.var62 : '-'}}</td>
                            <td class="text-center">{{data.var63 ? data.var63 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP153</td>
                            <td class="text-left">Actividades en puerperas</td>
                            <td class="text-center">{{data.var64 ? data.var64 : '-'}}</td>
                            <td class="text-center">{{data.var65 ? data.var65 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP108</td>
                            <td class="text-left">Actividades con la Comunidad</td>
                            <td class="text-center">{{data.var66 ? data.var66 : '-'}}</td>
                            <td class="text-center">{{data.var67 ? data.var67 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="1">
        </v-col>
        <v-col md="6">
            <h4>E.- ENTRENAMIENTO EN HABILIDADES PARA LA VIDA</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                            <th class="text-center">N°</th>
                            <th class="text-center">Particip.</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">APP136</td>
                            <td class="text-left">Familia</td>
                            <td class="text-center">{{data.var68 ? data.var68 : '-'}}</td>
                            <td class="text-center">{{data.var69 ? data.var69 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP140</td>
                            <td class="text-left">Actividades con ninos</td>
                            <td class="text-center">{{data.var70 ? data.var70 : '-'}}</td>
                            <td class="text-center">{{data.var71 ? data.var71 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP141</td>
                            <td class="text-left">Actividades con adolescentes</td>
                            <td class="text-center">{{data.var72 ? data.var72 : '-'}}</td>
                            <td class="text-center">{{data.var73 ? data.var73 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP142</td>
                            <td class="text-left">Actividades con adultos</td>
                            <td class="text-center">{{data.var74 ? data.var74 : '-'}}</td>
                            <td class="text-center">{{data.var75 ? data.var75 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP143</td>
                            <td class="text-left">Actividades con adulto mayor</td>
                            <td class="text-center">{{data.var76 ? data.var76 : '-'}}</td>
                            <td class="text-center">{{data.var77 ? data.var77 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP151</td>
                            <td class="text-left">Actividades en mujeres</td>
                            <td class="text-center">{{data.var78 ? data.var78 : '-'}}</td>
                            <td class="text-center">{{data.var79 ? data.var79 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP152</td>
                            <td class="text-left">Actividades en gestantes</td>
                            <td class="text-center">{{data.var80 ? data.var80 : '-'}}</td>
                            <td class="text-center">{{data.var81 ? data.var81 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP153</td>
                            <td class="text-left">Actividades en puerperas</td>
                            <td class="text-center">{{data.var82 ? data.var82 : '-'}}</td>
                            <td class="text-center">{{data.var83 ? data.var83 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left"></td>
                            <td class="text-left"></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="12">
            <h4>F.- SESIONES EDUCATIVAS</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center" rowspan="2"></th>
                            <th class="text-center" rowspan="2"></th>
                            <th class="text-center" colspan="2">Alcohol y Drogas</th>
                            <th class="text-center" colspan="2">Violencia Intrafamiliar y Maltrato Infantil</th>
                            <th class="text-center" colspan="2">Trastornos Depresivos</th>
                        </tr>
                        <tr>
                            <th class="text-center">N°</th>
                            <th class="text-center">Particip.</th>
                            <th class="text-center">N°</th>
                            <th class="text-center">Particip.</th>
                            <th class="text-center">N°</th>
                            <th class="text-center">Particip.</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">APP136</td>
                            <td class="text-left">Familia</td>
                            <td class="text-center">{{data.var84 ? data.var84 : '-'}}</td>
                            <td class="text-center">{{data.var85 ? data.var85 : '-'}}</td>
                            <td class="text-center">{{data.var100 ? data.var100 : '-'}}</td>
                            <td class="text-center">{{data.var101 ? data.var101 : '-'}}</td>
                            <td class="text-center">{{data.var116 ? data.var116 : '-'}}</td>
                            <td class="text-center">{{data.var117 ? data.var117 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP140</td>
                            <td class="text-left">Actividades con ninos</td>
                            <td class="text-center">{{data.var86 ? data.var86 : '-'}}</td>
                            <td class="text-center">{{data.var87 ? data.var87 : '-'}}</td>
                            <td class="text-center">{{data.var102 ? data.var102 : '-'}}</td>
                            <td class="text-center">{{data.var103 ? data.var103 : '-'}}</td>
                            <td class="text-center">{{data.var118 ? data.var118 : '-'}}</td>
                            <td class="text-center">{{data.var119 ? data.var119 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP141</td>
                            <td class="text-left">Actividades con adolescentes</td>
                            <td class="text-center">{{data.var88 ? data.var88 : '-'}}</td>
                            <td class="text-center">{{data.var89 ? data.var89 : '-'}}</td>
                            <td class="text-center">{{data.var104 ? data.var104 : '-'}}</td>
                            <td class="text-center">{{data.var105 ? data.var105 : '-'}}</td>
                            <td class="text-center">{{data.var120 ? data.var120 : '-'}}</td>
                            <td class="text-center">{{data.var121 ? data.var121 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP142</td>
                            <td class="text-left">Actividades con adultos</td>
                            <td class="text-center">{{data.var90 ? data.var90 : '-'}}</td>
                            <td class="text-center">{{data.var91 ? data.var91 : '-'}}</td>
                            <td class="text-center">{{data.var106 ? data.var106 : '-'}}</td>
                            <td class="text-center">{{data.var107 ? data.var107 : '-'}}</td>
                            <td class="text-center">{{data.var122 ? data.var122 : '-'}}</td>
                            <td class="text-center">{{data.var123 ? data.var123 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP143</td>
                            <td class="text-left">Actividades con adulto mayor</td>
                            <td class="text-center">{{data.var92 ? data.var92 : '-'}}</td>
                            <td class="text-center">{{data.var93 ? data.var93 : '-'}}</td>
                            <td class="text-center">{{data.var108 ? data.var108 : '-'}}</td>
                            <td class="text-center">{{data.var109 ? data.var109 : '-'}}</td>
                            <td class="text-center">{{data.var124 ? data.var124 : '-'}}</td>
                            <td class="text-center">{{data.var125 ? data.var125 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP151</td>
                            <td class="text-left">Actividades en mujeres</td>
                            <td class="text-center">{{data.var94 ? data.var94 : '-'}}</td>
                            <td class="text-center">{{data.var95 ? data.var95 : '-'}}</td>
                            <td class="text-center">{{data.var110 ? data.var110 : '-'}}</td>
                            <td class="text-center">{{data.var111 ? data.var111 : '-'}}</td>
                            <td class="text-center">{{data.var126 ? data.var126 : '-'}}</td>
                            <td class="text-center">{{data.var127 ? data.var127 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP152</td>
                            <td class="text-left">Actividades en gestantes</td>
                            <td class="text-center">{{data.var96 ? data.var96 : '-'}}</td>
                            <td class="text-center">{{data.var97 ? data.var97 : '-'}}</td>
                            <td class="text-center">{{data.var112 ? data.var112 : '-'}}</td>
                            <td class="text-center">{{data.var113 ? data.var113 : '-'}}</td>
                            <td class="text-center">{{data.var128 ? data.var128 : '-'}}</td>
                            <td class="text-center">{{data.var129 ? data.var129 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">APP153</td>
                            <td class="text-left">Actividades en puerperas</td>
                            <td class="text-center">{{data.var98 ? data.var98 : '-'}}</td>
                            <td class="text-center">{{data.var99 ? data.var99 : '-'}}</td>
                            <td class="text-center">{{data.var114 ? data.var114 : '-'}}</td>
                            <td class="text-center">{{data.var115 ? data.var115 : '-'}}</td>
                            <td class="text-center">{{data.var130 ? data.var130 : '-'}}</td>
                            <td class="text-center">{{data.var131 ? data.var131 : '-'}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="12">
            <v-divider></v-divider>
        </v-col>
        <v-col md="6">
            <h4>G.- ORIENTACIÓN FAMILIAR</h4>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-center">N°</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Familias con 1º sesión</td>
                            <td class="text-center">{{data.var132 ? data.var132 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Familias con 2º sesión</td>
                            <td class="text-center">{{data.var133 ? data.var133 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Familias con 3º sesión</td>
                            <td class="text-center">{{data.var134 ? data.var134 : '-'}}</td>
                        </tr>
                        <tr>
                            <td class="text-left">Familias con + de 3 sesiones</td>
                            <td class="text-center">{{data.var135 ? data.var135 : '-'}}</td>
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
            await this.axios.get(this.$api_url + '/reporte/' + this.tabla + '/1-135',{
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

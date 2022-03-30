<template>
    <v-row >
        <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   <thead >
                       <tr>

                           <th class="text-left tth "  rowspan="3">
                               Grupo Etáreo
                           </th>
                           <th class="text-center tth  " colspan="6">
                               Gestante
                           </th>
                           <th class="text-center tth" colspan="2" rowspan="2">
                               Papanicolaou
                           </th>
                           <th class="tth "  colspan="2" rowspan="2">
                               Gestante con Bateria Completa 
                           </th>
                           <th class="tth " rowspan="2">
                               Violencia Basada en Género (VBG)
                           </th>
                           <th class="tth "  rowspan="2">
                               Violencia Basada en Género (VBG)
                           </th>
                           <th class="text-center tth" colspan="3" rowspan="2">
                               Ecografía
                           </th>
                           <th class="tth " colspan="2" rowspan="2">
                               Tamizaje de Bacteriuria
                           </th>
                           <th class="tth " colspan="2" rowspan="2">
                               Tamizaje de Proteniuria
                           </th>
                           <th class="tth " rowspan="3">
                               Gestante con Atención Prenatal Reenfocada
                           </th>
                           <th class="tth " colspan="3">
                               Vacuna Antitetá-nica
                           </th>
                           <th class="tth " rowspan="2">
                               Atencion odontologica
                           </th>
                       </tr>
                       <tr>
                           <th colspan="3" class="text-center tth">
                               Atendida
                           </th>
                           <th class="tth " rowspan="2">
                               atendidas
                           </th>
                           <th class="tth " rowspan="2">
                               Atenciones
                           </th>
                           <th class="tth " rowspan="2">
                               Controlada
                           </th>
                           <th class="tth " >
                               dt
                           </th>
                           <th class="tth " >
                               HvB
                           </th>
                           <th class="tth " >
                               Influenza
                           </th>
                       </tr>
                       <tr>
                           <th class="tth" >
                               I Trimestre
                           </th>
                           <th class="tth" >
                               II Trimestre
                           </th>
                           <th class="tth">
                               III Trimestre
                           </th>
                           <th class="tth">
                               Toma de Muestra
                           </th>
                           <th class="tth">
                               Positivo
                           </th>
                           <th class="tth">
                               1° Bateria
                           </th>
                           <th class="tth">
                               2° Bateria
                           </th>
                           <th class="tth">
                               Tamizada
                           </th>
                           <th class="tth">
                               Postivo
                           </th>
                           <th class="tth">
                               1º Ecografía
                           </th>
                           <th class="tth">
                               2º Ecografía
                           </th>
                           <th class="tth">
                               3º Ecografía
                           </th>
                           <th class="tth">
                               N°
                           </th>
                           <th class="tth">
                               Positivo
                           </th>
                           <th class="tth">
                               N°
                           </th>
                           <th class="tth">
                               Positivo
                           </th>
                           <th class="tth">
                               Protegidas
                           </th>
                           <th class="tth">
                               Protegidas
                           </th>
                           <th class="tth">
                               Protegidas
                           </th>
                           <th class="tth">
                               Protegidas
                           </th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td class="tth">
                               menor 12 a.
                           </td>
                           <td class="text-center">{{data.var1 ? data.var1 : "-"}}</td>
                           <td class="text-center">{{data.var5 ? data.var5 : "-"}}</td>
                           <td class="text-center">{{data.var9 ? data.var9 : "-"}}</td>
                           <td class="text-center">{{total1}}</td>
                           <td class="text-center">{{data.var13 ? data.var13 : "-"}}</td>
                           <td class="text-center">{{data.var17 ? data.var17 : "-"}}</td>
                           <td class="text-center">{{data.var21 ? data.var21 : "-"}}</td>
                           <td class="text-center">{{data.var25 ? data.var25 : "-"}}</td>
                           <td class="text-center">{{data.var29 ? data.var29 : "-"}}</td>
                           <td class="text-center">{{data.var33 ? data.var33 : "-"}}</td>
                           <td class="text-center">{{data.var37 ? data.var37 : "-"}}</td>
                           <td class="text-center">{{data.var41 ? data.var41 : "-"}}</td>
                           <td class="text-center">{{data.var45 ? data.var45 : "-"}}</td>
                           <td class="text-center">{{data.var49 ? data.var49 : "-"}}</td>
                           <td class="text-center">{{data.var53 ? data.var53 : "-"}}</td>
                           <td class="text-center">{{data.var57 ? data.var57 : "-"}}</td>
                           <td class="text-center">{{data.var61 ? data.var61 : "-"}}</td>
                           <td class="text-center">{{data.var65 ? data.var65 : "-"}}</td>
                           <td class="text-center">{{data.var69 ? data.var69 : "-"}}</td>
                           <td class="text-center">{{data.var73 ? data.var73 : "-"}}</td>
                           <td class="text-center">{{data.var77 ? data.var77 : "-"}}</td>
                           <td class="text-center">{{data.var81 ? data.var81 : "-"}}</td>
                           <td class="text-center">{{data.var85 ? data.var85 : "-"}}</td>
                           <td class="text-center">{{data.var89 ? data.var89 : "-"}}</td>

                       </tr>
                       <tr>
                            <td class="tth">
                               12-17 a.
                           </td>
                           <td class="text-center">{{data.var2 ? data.var2 : "-"}}</td>
                           <td class="text-center">{{data.var6 ? data.var6 : "-"}}</td>
                           <td class="text-center">{{data.var10 ? data.var10 : "-"}}</td>
                           <td class="text-center">{{total2}}</td>
                           <td class="text-center">{{data.var14 ? data.var14 : "-"}}</td>
                           <td class="text-center">{{data.var18 ? data.var18 : "-"}}</td>
                           <td class="text-center">{{data.var22 ? data.var22 : "-"}}</td>
                           <td class="text-center">{{data.var26 ? data.var26 : "-"}}</td>
                           <td class="text-center">{{data.var30 ? data.var30 : "-"}}</td>
                           <td class="text-center">{{data.var34 ? data.var34 : "-"}}</td>
                           <td class="text-center">{{data.var46 ? data.var38 : "-"}}</td>
                           <td class="text-center">{{data.var42 ? data.var42 : "-"}}</td>
                           <td class="text-center">{{data.var46 ? data.var46 : "-"}}</td>
                           <td class="text-center">{{data.var50 ? data.var50 : "-"}}</td>
                           <td class="text-center">{{data.var54 ? data.var54 : "-"}}</td>
                           <td class="text-center">{{data.var58 ? data.var58 : "-"}}</td>
                           <td class="text-center">{{data.var62 ? data.var62 : "-"}}</td>
                           <td class="text-center">{{data.var66 ? data.var66 : "-"}}</td>
                           <td class="text-center">{{data.var70 ? data.var70 : "-"}}</td>
                           <td class="text-center">{{data.var74 ? data.var74 : "-"}}</td>
                           <td class="text-center">{{data.var78 ? data.var78 : "-"}}</td>
                           <td class="text-center">{{data.var82 ? data.var82 : "-"}}</td>
                           <td class="text-center">{{data.var86 ? data.var86 : "-"}}</td>
                           <td class="text-center">{{data.var90 ? data.var90 : "-"}}</td>
                          </tr>   


                            <tr>
                            <td class="tth">
                               18-29 a.
                           </td>
                           <td class="text-center">{{data.var3 ? data.var3 : "-"}}</td>
                           <td class="text-center">{{data.var7 ? data.var7 : "-"}}</td>
                           <td class="text-center">{{data.var11 ? data.var11 : "-"}}</td>
                           <td class="text-center">{{total3}}</td>
                           <td class="text-center">{{data.var15 ? data.var15 : "-"}}</td>
                           <td class="text-center">{{data.var19 ? data.var19 : "-"}}</td>
                           <td class="text-center">{{data.var23 ? data.var23 : "-"}}</td>
                           <td class="text-center">{{data.var27 ? data.var27 : "-"}}</td>
                           <td class="text-center">{{data.var31 ? data.var31 : "-"}}</td>
                           <td class="text-center">{{data.var35 ? data.var35 : "-"}}</td>
                           <td class="text-center">{{data.var39 ? data.var39 : "-"}}</td>
                           <td class="text-center">{{data.var43 ? data.var43 : "-"}}</td>
                           <td class="text-center">{{data.var47 ? data.var47 : "-"}}</td>
                           <td class="text-center">{{data.var51 ? data.var51 : "-"}}</td>
                           <td class="text-center">{{data.var55 ? data.var55 : "-"}}</td>
                           <td class="text-center">{{data.var59 ? data.var59 : "-"}}</td>
                           <td class="text-center">{{data.var63 ? data.var63 : "-"}}</td>
                           <td class="text-center">{{data.var67 ? data.var67 : "-"}}</td>
                           <td class="text-center">{{data.var71 ? data.var71 : "-"}}</td>
                           <td class="text-center">{{data.var75 ? data.var75 : "-"}}</td>
                           <td class="text-center">{{data.var79 ? data.var79 : "-"}}</td>
                           <td class="text-center">{{data.var83 ? data.var83 : "-"}}</td>
                           <td class="text-center">{{data.var87 ? data.var87 : "-"}}</td>
                           <td class="text-center">{{data.var91 ? data.var91 : "-"}}</td>
                          </tr>   


                            <tr>
                            <td class="tth">
                               30-59 a.
                           </td>
                           <td class="text-center">{{data.var4 ? data.var4 : "-"}}</td>
                           <td class="text-center">{{data.var8 ? data.var8 : "-"}}</td>
                           <td class="text-center">{{data.var12 ? data.var12 : "-"}}</td>
                           <td class="text-center">{{total4}}</td>
                           <td class="text-center">{{data.var16 ? data.var16 : "-"}}</td>
                           <td class="text-center">{{data.var20 ? data.var20 : "-"}}</td>
                           <td class="text-center">{{data.var24 ? data.var24 : "-"}}</td>
                           <td class="text-center">{{data.var28 ? data.var28 : "-"}}</td>
                           <td class="text-center">{{data.var32 ? data.var32 : "-"}}</td>
                           <td class="text-center">{{data.var36 ? data.var36 : "-"}}</td>
                           <td class="text-center">{{data.var40 ? data.var40 : "-"}}</td>
                           <td class="text-center">{{data.var44 ? data.var44 : "-"}}</td>
                           <td class="text-center">{{data.var48 ? data.var48 : "-"}}</td>
                           <td class="text-center">{{data.var52 ? data.var52 : "-"}}</td>
                           <td class="text-center">{{data.var56 ? data.var56 : "-"}}</td>
                           <td class="text-center">{{data.var60 ? data.var60 : "-"}}</td>
                           <td class="text-center">{{data.var64 ? data.var64 : "-"}}</td>
                           <td class="text-center">{{data.var68 ? data.var68 : "-"}}</td>
                           <td class="text-center">{{data.var72 ? data.var72 : "-"}}</td>
                           <td class="text-center">{{data.var76 ? data.var76 : "-"}}</td>
                           <td class="text-center">{{data.var80 ? data.var80 : "-"}}</td>
                           <td class="text-center">{{data.var84 ? data.var84 : "-"}}</td>
                           <td class="text-center">{{data.var88 ? data.var88 : "-"}}</td>
                           <td class="text-center">{{data.var92 ? data.var92 : "-"}}</td>
                          </tr>   

                      <tr>
                            <td class="tth">
                               total.
                           </td>
                       
                           <td class="text-center">{{ta1}}</td>
                           <td class="text-center">{{ta2}}</td>
                           <td class="text-center">{{ta3}}</td>
                           <td class="text-center">{{ta4}}</td>
                           <td class="text-center">{{ta5}}</td>
                           <td class="text-center">{{ta6}}</td>
                           <td class="text-center">{{ta7}}</td>
                           <td class="text-center">{{ta8}}</td>
                           <td class="text-center">{{ta9}}</td>
                           <td class="text-center">{{ta10}}</td>
                           <td class="text-center">{{ta11}}</td>
                           <td class="text-center">{{ta12}}</td>
                           <td class="text-center">{{ta13}}</td>
                           <td class="text-center">{{ta14}}</td>
                           <td class="text-center">{{ta15}}</td>
                           <td class="text-center">{{ta16}}</td>
                           <td class="text-center">{{ta17}}</td>
                           <td class="text-center">{{ta18}}</td>
                           <td class="text-center">{{ta19}}</td>
                           <td class="text-center">{{ta20}}</td>
                           <td class="text-center">{{ta21}}</td>
                           <td class="text-center">{{ta22}}</td>
                           <td class="text-center">{{ta23}}</td>
                           <td class="text-center">{{ta24}}</td>
                        
                          </tr>   
                   </tbody>
               </template>
           </v-simple-table>
        </v-col>
        <v-col md="4">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                          <tr>
                           <th class="text-left tth" rowspan="3">
                               Grupo Etáreo
                           </th>
                             <th class="text-center tth" colspan="2" rowspan="2">
                               evaluacion de bienestar fetal
                           </th>

                           <th class="text-center tth" colspan="2">
                               Psicoprofilaxis
                           </th>

                      
                           <th class="text-center tth" colspan="2" >
                               Estimulación Prenatal
                           </th>
                          
                       </tr>


                         <tr>
                            <th class="tth" rowspan="2">
                               atendida
                           </th>
                            <th class="tth" rowspan="2">
                               preparada
                           </th>
                            <th class="tth" rowspan="2">
                               1º sesion
                           </th>

                            <th class="tth" rowspan="2">
                               6º sesion
                           </th>
                          </tr>

                          <tr>
                               <th class="tth" >
                               1º Monitoreo
                           </th>

                              <th class="tth" >
                               2º Monitoreo
                           </th>
                              </tr>


                    </thead>
                    <tbody>
                        <tr>
                           <td class="tth">
                               menor 12 a.
                           </td>
                           <td class="text-center">{{data.var93 ? data.var93 : "-"}}</td>
                           <td class="text-center">{{data.var97 ? data.var97 : "-"}}</td>
                           <td class="text-center">{{data.var101 ? data.var101 : "-"}}</td>
                           <td class="text-center">{{data.var105 ? data.var105 : "-"}}</td>
                           <td class="text-center">{{data.var109 ? data.var109 : "-"}}</td>
                           <td class="text-center">{{data.var113 ? data.var113 : "-"}}</td>
                      
                       </tr>
                       <tr>
                           <td class="tth">
                               12 -17.
                           </td>
                           <td class="text-center">{{data.var94 ? data.var94 : "-"}}</td>
                           <td class="text-center">{{data.var98 ? data.var98 : "-"}}</td>
                           <td class="text-center">{{data.var102 ? data.var102 : "-"}}</td>
                           <td class="text-center">{{data.var106 ? data.var106: "-"}}</td>
                           <td class="text-center">{{data.var110 ? data.var110 : "-"}}</td>
                           <td class="text-center">{{data.var114 ? data.var114 : "-"}}</td>
                         
                      
                       </tr>
                       <tr>
                           <td class="tth">
                               18 -29.
                           </td>
                           <td class="text-center">{{data.var95 ? data.var95 : "-"}}</td>
                           <td class="text-center">{{data.var99 ? data.var99 : "-"}}</td>
                           <td class="text-center">{{data.var103 ? data.var103 : "-"}}</td>
                           <td class="text-center">{{data.var107 ? data.var107: "-"}}</td>
                           <td class="text-center">{{data.var111 ? data.var111 : "-"}}</td>
                           <td class="text-center">{{data.var115 ? data.var115 : "-"}}</td>
                         
                      
                       </tr>
                       <tr>
                           <td class="tth">
                               30 -59.
                           </td>
                           <td class="text-center">{{data.var96 ? data.var96 : "-"}}</td>
                           <td class="text-center">{{data.var100 ? data.var100 : "-"}}</td>
                           <td class="text-center">{{data.var104 ? data.var104 : "-"}}</td>
                           <td class="text-center">{{data.var108 ? data.var108: "-"}}</td>
                           <td class="text-center">{{data.var112 ? data.var112 : "-"}}</td>
                           <td class="text-center">{{data.var116 ? data.var116 : "-"}}</td>
                         
                      
                       </tr>

                       <tr>
                            <td class="tth">
                                total.
                            </td>
                            <td class="text-center">{{tb1}}</td>
                            <td class="text-center">{{tb2}}</td>
                            <td class="text-center">{{tb3}}</td>
                            <td class="text-center">{{tb4}}</td>
                            <td class="text-center">{{tb5}}</td>
                            <td class="text-center">{{tb6}}</td>
                       </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="1">
            <br>
        </v-col>
        <v-col md="7">
          <v-simple-table dense>
        <template v-slot:default>
            <thead>
                  <tr>
                   <th class="text-left tth" rowspan="3">
                       Grupo Etáreo
                   </th>
                     <th class="text-center tth" colspan="8">
                       gestante
                   </th>

                      <th class="text-center tth" colspan="8">
                       plan de parto
                   </th>

                
                  
               </tr>


                 <tr>
                    <th colspan="4" class="text-center tth">
                               anemia
                           </th>
                    <th colspan="2" class="text-center tth">
                       menejo terapeutico
                   </th>
                    <th colspan="2" class="text-center tth ">
                       dosaje hemoglobina
                   </th>

                    <th class="tth" rowspan="2">
                       1º Entrevista
                   </th>
                    <th class="tth" rowspan="2">
                       2º Entrevista
                   </th>
                    <th class="tth" rowspan="2">
                       3º Entrevista
                   </th>
                    <th class="tth" rowspan="2">
                       efectivo
                   </th>
                  </tr>

 <tr>
                       <th class="tth">
                     leve
                   </th>

                      <th class="tth">
                       moderado
                   </th>
                      <th class="tth">
                       severa
                   </th>
                      <th class="tth">
                       recuperado
                   </th>
                      <th class="tth">
                       1º entrega
                   </th>
                      <th class="tth">
                       6º entrega
                   </th>
                      <th class="tth">
                       1º Dosaje
                   </th>
                      <th class="tth">
                       2º Dosaje
                   </th>
                      </tr>
              


            </thead>
            <tbody>
             
            <tr>
                   <td class="tth">
                       menor 12 a.
                   </td>
                   <td class="text-center">{{data.var117 ? data.var117 : "-"}}</td>
                   <td class="text-center">{{data.var121 ? data.var121 : "-"}}</td>
                   <td class="text-center">{{data.var125 ? data.var125 : "-"}}</td>
                   <td class="text-center">{{data.var129 ? data.var129 : "-"}}</td>
                   <td class="text-center">{{data.var133 ? data.var133 : "-"}}</td>
                   <td class="text-center">{{data.var137 ? data.var137 : "-"}}</td>
                   <td class="text-center">{{data.var141 ? data.var141 : "-"}}</td>
                   <td class="text-center">{{data.var145 ? data.var145 : "-"}}</td>
                   <td class="text-center">{{data.var149 ? data.var149 : "-"}}</td>
                   <td class="text-center">{{data.var153 ? data.var153 : "-"}}</td>
                   <td class="text-center">{{data.var157 ? data.var157 : "-"}}</td>
                   <td class="text-center">{{data.var161 ? data.var161 : "-"}}</td>
              
               </tr>
            
            <tr>
               <td class="tth">
                     12 -17 a.
                   </td>
                   <td class="text-center">{{data.var118 ? data.var118 : "-"}}</td>
                   <td class="text-center">{{data.var122 ? data.var122 : "-"}}</td>
                   <td class="text-center">{{data.var126 ? data.var126 : "-"}}</td>
                   <td class="text-center">{{data.var130 ? data.var130 : "-"}}</td>
                   <td class="text-center">{{data.var134 ? data.var134 : "-"}}</td>
                   <td class="text-center">{{data.var138 ? data.var138 : "-"}}</td>
                   <td class="text-center">{{data.var142 ? data.var142 : "-"}}</td>
                   <td class="text-center">{{data.var146 ? data.var146 : "-"}}</td>
                   <td class="text-center">{{data.var150 ? data.var150 : "-"}}</td>
                   <td class="text-center">{{data.var154 ? data.var154 : "-"}}</td>
                   <td class="text-center">{{data.var158 ? data.var158 : "-"}}</td>
                   <td class="text-center">{{data.var162 ? data.var162 : "-"}}</td>
              
               </tr>
            
            <tr>
               <td class="tth">
                     18 -19 a.
                   </td>
                   <td class="text-center">{{data.var119 ? data.var119 : "-"}}</td>
                   <td class="text-center">{{data.var123 ? data.var123 : "-"}}</td>
                   <td class="text-center">{{data.var127 ? data.var127 : "-"}}</td>
                   <td class="text-center">{{data.var131 ? data.var131 : "-"}}</td>
                   <td class="text-center">{{data.var135 ? data.var135 : "-"}}</td>
                   <td class="text-center">{{data.var139 ? data.var139 : "-"}}</td>
                   <td class="text-center">{{data.var143 ? data.var143 : "-"}}</td>
                   <td class="text-center">{{data.var147 ? data.var147 : "-"}}</td>
                   <td class="text-center">{{data.var151 ? data.var151 : "-"}}</td>
                   <td class="text-center">{{data.var155 ? data.var155 : "-"}}</td>
                   <td class="text-center">{{data.var159 ? data.var159 : "-"}}</td>
                   <td class="text-center">{{data.var163 ? data.var163 : "-"}}</td>
              
               </tr>
            
            <tr>
               <td class="tth">
                     30 -59 a.
                   </td>
                   <td class="text-center">{{data.var120 ? data.var120 : "-"}}</td>
                   <td class="text-center">{{data.var124 ? data.var124 : "-"}}</td>
                   <td class="text-center">{{data.var128 ? data.var128 : "-"}}</td>
                   <td class="text-center">{{data.var132 ? data.var132 : "-"}}</td>
                   <td class="text-center">{{data.var136 ? data.var136 : "-"}}</td>
                   <td class="text-center">{{data.var140 ? data.var140 : "-"}}</td>
                   <td class="text-center">{{data.var144 ? data.var144 : "-"}}</td>
                   <td class="text-center">{{data.var148 ? data.var148 : "-"}}</td>
                   <td class="text-center">{{data.var152 ? data.var152 : "-"}}</td>
                   <td class="text-center">{{data.var156 ? data.var156 : "-"}}</td>
                   <td class="text-center">{{data.var160 ? data.var160 : "-"}}</td>
                   <td class="text-center">{{data.var164 ? data.var164 : "-"}}</td>
              
               </tr>
               <tr>
                            <td>
                                total.
                            </td>
                            <td class="text-center">{{tc1}}</td>
                            <td class="text-center">{{tc2}}</td>
                            <td class="text-center">{{tc3}}</td>
                            <td class="text-center">{{tc4}}</td>
                            <td class="text-center">{{tc5}}</td>
                            <td class="text-center">{{tc6}}</td>
                            <td class="text-center">{{tc7}}</td>
                            <td class="text-center">{{tc8}}</td>
                            <td class="text-center">{{tc9}}</td>
                            <td class="text-center">{{tc10}}</td>
                            <td class="text-center">{{tc11}}</td>
                            <td class="text-center">{{tc12}}</td>
                       </tr>
            </tbody>
        </template>
    </v-simple-table>
        </v-col>
        


        <v-col md="9">
            <td> IV. ATENCION DE LA GESTANTE CON COMPLICACIONES</td>   
            <v-simple-table dense>
                
                <template v-slot:default>
            
                    <thead>
                        <tr>
                        <th class="text-left tth1">
                            COMPLICACIONES
                        </th>

                        <th class="text-left tth1" >
                            total
                        </th>

                        <th class="text-left tth1" >
                            me 12 a
                        </th>
                        
                        <th class="text-left tth1" >
                                12 -17 a
                        </th>
                        <th class="text-center tth1" >
                                18 -29 a
                        </th>
                        <th class="text-center tth1" >
                                30 -59 a
                        </th>
                            <th class="text-left tth1">
                            COMPLICACIONES
                        </th>

                        <th class="text-center tth1" >
                            total
                        </th>
                        <th class="text-center tth1">
                            me 12 a
                        </th>
                        <th class="text-center tth1">
                                12 -17 a
                        </th>
                        <th class="text-center tth1">
                                18 -29 a
                        </th>
                        <th class="text-center tth1">
                                30 -59 a
                        </th>
                    </tr>


                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            Amenaza de parto prematuro
                        </td>
                            <td class="text-center">{{td1}}</td>
                        <td class="text-center">{{data.var165 ? data.var165 : "-"}}</td>
                        <td class="text-center">{{data.var166 ? data.var166 : "-"}}</td>
                        <td class="text-center">{{data.var167 ? data.var167 : "-"}}</td>
                        <td class="text-center">{{data.var168 ? data.var168 : "-"}}</td>
                    
                        <td>
                            Trastornos metabólicos del embarazo
                        </td>
                            <td class="text-center">{{td2}}</td>
                        <td class="text-center">{{data.var197 ? data.var197 : "-"}}</td>
                        <td class="text-center">{{data.var198 ? data.var198 : "-"}}</td>
                        <td class="text-center">{{data.var199 ? data.var199 : "-"}}</td>
                        <td class="text-center">{{data.var200 ? data.var200 : "-"}}</td>
                    
                    </tr>

        <tr>
                        <td>
                            Hemorragias de la 1º mitad del embarazo sin laparotomía
                        </td>
                            <td class="text-center">{{td3}}</td>
                        <td class="text-center">{{data.var169 ? data.var169 : "-"}}</td>
                        <td class="text-center">{{data.var170 ? data.var170 : "-"}}</td>
                        <td class="text-center">{{data.var171 ? data.var171 : "-"}}</td>
                        <td class="text-center">{{data.var172 ? data.var172 : "-"}}</td>
                    
                        <td>
                            Otras enfermedades del embarazo
                        </td>
                            <td class="text-center">{{td4}}</td>
                        <td class="text-center">{{data.var201 ? data.var201 : "-"}}</td>
                        <td class="text-center">{{data.var202 ? data.var202 : "-"}}</td>
                        <td class="text-center">{{data.var203 ? data.var203 : "-"}}</td>
                        <td class="text-center">{{data.var204 ? data.var204 : "-"}}</td>

                        
        </tr>
                        <tr>
                        <td>
                            Hemorragia de la 2º mitad del embarazo
                        </td>
                            <td class="text-center">{{td5}}</td>
                        <td class="text-center">{{data.var173 ? data.var173 : "-"}}</td>
                        <td class="text-center">{{data.var174 ? data.var174 : "-"}}</td>
                        <td class="text-center">{{data.var175 ? data.var175 : "-"}}</td>
                        <td class="text-center">{{data.var176 ? data.var176 : "-"}}</td>
                    
                        <td>
                            Sepsis
                        </td>
                            <td class="text-center">{{td6}}</td>
                        <td class="text-center">{{data.var205 ? data.var205 : "-"}}</td>
                        <td class="text-center">{{data.var206 ? data.var206 : "-"}}</td>
                        <td class="text-center">{{data.var207 ? data.var207 : "-"}}</td>
                        <td class="text-center">{{data.var208 ? data.var208 : "-"}}</td>
                    
                    </tr>
                    
                        <tr>
                        <td>
                            Hiperémesis gravídica
                        </td>
                            <td class="text-center">{{td7}}</td>
                        <td class="text-center">{{data.var177 ? data.var177 : "-"}}</td>
                        <td class="text-center">{{data.var178 ? data.var178 : "-"}}</td>
                        <td class="text-center">{{data.var179 ? data.var179 : "-"}}</td>
                        <td class="text-center">{{data.var180 ? data.var180 : "-"}}</td>
                    
                        <td>
                            TBC
                        </td>
                            <td class="text-center">{{td8}}</td>
                        <td class="text-center">{{data.var209 ? data.var209 : "-"}}</td>
                        <td class="text-center">{{data.var210 ? data.var210 : "-"}}</td>
                        <td class="text-center">{{data.var211 ? data.var211 : "-"}}</td>
                        <td class="text-center">{{data.var212 ? data.var212 : "-"}}</td>
                    
                    </tr>

                        <tr>
                        <td>
                            Infección del tracto urinario en el embarazo
                        </td>
                            <td class="text-center">{{td9}}</td>
                        <td class="text-center">{{data.var181 ? data.var181 : "-"}}</td>
                        <td class="text-center">{{data.var182 ? data.var182 : "-"}}</td>
                        <td class="text-center">{{data.var183 ? data.var183 : "-"}}</td>
                        <td class="text-center">{{data.var184 ? data.var184 : "-"}}</td>
                    
                        <td>
                            Retención de Placentaria
                        </td>
                            <td class="text-center">{{td10}}</td>
                        <td class="text-center">{{data.var213 ? data.var213 : "-"}}</td>
                        <td class="text-center">{{data.var214 ? data.var214 : "-"}}</td>
                        <td class="text-center">{{data.var215 ? data.var215 : "-"}}</td>
                        <td class="text-center">{{data.var216 ? data.var216 : "-"}}</td>
                    
                    </tr>
                        <tr>
                        <td>
                            Ruptura prematura de membranas y otras relacionadas
                        </td>
                            <td class="text-center">{{td11}}</td>
                        <td class="text-center">{{data.var185 ? data.var185 : "-"}}</td>
                        <td class="text-center">{{data.var186 ? data.var186 : "-"}}</td>
                        <td class="text-center">{{data.var187 ? data.var187 : "-"}}</td>
                        <td class="text-center">{{data.var188 ? data.var188 : "-"}}</td>
                    
                        <td>
                            Ruptura prematura de las membranas
                        </td>
                            <td class="text-center">{{td12}}</td>
                        <td class="text-center">{{data.var217 ? data.var217 : "-"}}</td>
                        <td class="text-center">{{data.var218 ? data.var218 : "-"}}</td>
                        <td class="text-center">{{data.var219 ? data.var219 : "-"}}</td>
                        <td class="text-center">{{data.var220 ? data.var220 : "-"}}</td>
                    
                    </tr>
                    
                        <tr>
                        <td>
                            Hemorragias de la 1º mitad del embarazo con laparotomía
                        </td>
                            <td class="text-center">{{td13}}</td>
                        <td class="text-center">{{data.var189 ? data.var189 : "-"}}</td>
                        <td class="text-center">{{data.var190 ? data.var190 : "-"}}</td>
                        <td class="text-center">{{data.var191 ? data.var191 : "-"}}</td>
                        <td class="text-center">{{data.var192 ? data.var192 : "-"}}</td>
                    
                        <td>
                            Desprendimiento Prematuro de la Placenta
                        </td>
                            <td class="text-center">{{td14}}</td>
                        <td class="text-center">{{data.var221 ? data.var221 : "-"}}</td>
                        <td class="text-center">{{data.var222 ? data.var222 : "-"}}</td>
                        <td class="text-center">{{data.var223 ? data.var223 : "-"}}</td>
                        <td class="text-center">{{data.var224 ? data.var224 : "-"}}</td>
                    
                    </tr>


                        <tr>
                        <td>
                            Trastorno hipertensivos en el Embarazo

                        </td>
                            <td class="text-center">{{td15}}</td>
                        <td class="text-center">{{data.var193 ? data.var193 : "-"}}</td>
                        <td class="text-center">{{data.var194 ? data.var194 : "-"}}</td>
                        <td class="text-center">{{data.var195 ? data.var195 : "-"}}</td>
                        <td class="text-center">{{data.var196 ? data.var196 : "-"}}</td>
                    
                    </tr>


                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col md="1">
            <br>
        </v-col>

        <v-col md="2">
            <td> V. MORBILIDAD DEL RN</td>   
            <v-simple-table dense>
                
                <template v-slot:default>
            
                    <thead>
                        <tr>
                        <th class="text-left tth1">
                            Causas de Morbilidad
                        </th>

                        <th class="text-left tth1" >
                            Nº
                        </th>

                        
                    </tr>


                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            Bajo Peso
                        
                        <td class="text-center">{{data.var225 ? data.var225 : "-"}}</td>
                    
                        </tr>

                        <tr>
                        <td>
                            PREMATURO
                        
                        <td class="text-center">{{data.var226 ? data.var226 : "-"}}</td>
                    
                        </tr>
                        <tr>
                        <td>
                            Hipoxia
                        
                        <td class="text-center">{{data.var227 ? data.var227 : "-"}}</td>
                    
                        </tr>
                        <tr>
                        <td>
                            Síndrome de Distrés Respiratorio
                        
                        <td class="text-center">{{data.var228 ? data.var228 : "-"}}</td>
                    
                        </tr>
                        <tr>
                        <td>
                            Sepsis Neonatal
                        
                        <td class="text-center">{{data.var229 ? data.var229 : "-"}}</td>
                    
                        </tr>
                    
                        <tr>
                        <td>
                            RN - VIH Expuesto
                        
                        <td class="text-center">{{data.var230 ? data.var230 : "-"}}</td>
                    
                        </tr>
                    



                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

       <v-col md="4">
           <td>VI. ADMINISTRACIÓN CON MICRONUTRIENTES</td>
            <v-simple-table dense>
                 <template v-slot:default>
                      <thead>
                             <tr>
                           <th class="text-left tth" rowspan="3">
                               Grupo Etáreo
                           </th>

                           <th class="text-center tth" colspan="3">
                               Suplem. con Sulfato Ferroso
                           </th>

                      
                           <th class="text-center tth" colspan="2" >
                               Suplem. Ácido Fólico
                           </th>
                      
                           <th class="text-center tth" colspan="2" >
                               Suplem. Cálcio
                           </th>
                           <th class="tth" > 
                               vitamina A
                           </th>
                          
                       </tr>
                       <tr>
                           <th class="text-left tth " rowspan="2">
                               atendida
                           </th>
                             <th class="text-center tth" colspan="2" >
                               Suplementada
                           </th>
                           <th class="text-left tth" rowspan="2">
                               1º
                           </th>
                           <th class="text-left tth" rowspan="2">
                               2º
                           </th>
                           <th class="text-left tth" rowspan="2">
                               Atendida 1º Dosis
                           </th>
                           <th class="text-left tth" rowspan="2">
                               Suplem.5º Dosis
                           </th>
                           <th class="text-left tth" rowspan="2">
                               Puérpera
                           </th>
                       </tr>

                       <tr>
                            <td class="tth">
                                gestante
                            </td>
                            <td class="tth">
                                puerpera
                            </td>

                       </tr>
                    </thead>
                    <tbody>
                 <tr>
                           <td class="tth">
                               menor 12 a.
                           </td>
                           <td class="text-center">{{data.var232 ? data.var232 : "-"}}</td>
                           <td class="text-center">{{data.var236 ? data.var236 : "-"}}</td>
                           <td class="text-center">{{data.var240 ? data.var240 : "-"}}</td>
                           <td class="text-center">{{data.var244 ? data.var244 : "-"}}</td>
                           <td class="text-center">{{data.var248 ? data.var248 : "-"}}</td>
                           <td class="text-center">{{data.var252 ? data.var252 : "-"}}</td>
                           <td class="text-center">{{data.var256 ? data.var256 : "-"}}</td>
                           <td class="text-center">{{data.var260 ? data.var260 : "-"}}</td>
                      
                       </tr >
                 <tr>
                           <td class="tth">
                            12 a 17.
                           </td>
                           <td class="text-center">{{data.var233 ? data.var233 : "-"}}</td>
                           <td class="text-center">{{data.var237 ? data.var237 : "-"}}</td>
                           <td class="text-center">{{data.var241 ? data.var241 : "-"}}</td>
                           <td class="text-center">{{data.var245 ? data.var245 : "-"}}</td>
                           <td class="text-center">{{data.var249 ? data.var249 : "-"}}</td>
                           <td class="text-center">{{data.var253 ? data.var253 : "-"}}</td>
                           <td class="text-center">{{data.var257 ? data.var257 : "-"}}</td>
                           <td class="text-center">{{data.var261 ? data.var261 : "-"}}</td>
                      
                       </tr>
                 <tr>
                           <td class="tth">
                            18 a 29.
                           </td>
                           <td class="text-center">{{data.var234 ? data.var234 : "-"}}</td>
                           <td class="text-center">{{data.var238 ? data.var238 : "-"}}</td>
                           <td class="text-center">{{data.var242 ? data.var242 : "-"}}</td>
                           <td class="text-center">{{data.var246 ? data.var246 : "-"}}</td>
                           <td class="text-center">{{data.var250 ? data.var250 : "-"}}</td>
                           <td class="text-center">{{data.var254 ? data.var254 : "-"}}</td>
                           <td class="text-center">{{data.var258 ? data.var258 : "-"}}</td>
                           <td class="text-center">{{data.var262 ? data.var262 : "-"}}</td>
                      
                       </tr>
                 <tr>
                           <td class="tth">
                            30 a 59.
                           </td>
                           <td class="text-center">{{data.var235 ? data.var235 : "-"}}</td>
                           <td class="text-center">{{data.var239 ? data.var239 : "-"}}</td>
                           <td class="text-center">{{data.var243 ? data.var243 : "-"}}</td>
                           <td class="text-center">{{data.var247 ? data.var247 : "-"}}</td>
                           <td class="text-center">{{data.var251 ? data.var251 : "-"}}</td>
                           <td class="text-center">{{data.var255 ? data.var255 : "-"}}</td>
                           <td class="text-center">{{data.var259 ? data.var259 : "-"}}</td>
                           <td class="text-center">{{data.var263 ? data.var263 : "-"}}</td>
                      
                       </tr>
   <tr>
                            <td class="tth">
                                total.
                            </td>
                            <td class="text-center">{{te1}}</td>
                            <td class="text-center">{{te2}}</td>
                            <td class="text-center">{{te3}}</td>
                            <td class="text-center">{{te4}}</td>
                            <td class="text-center">{{te5}}</td>
                            <td class="text-center">{{te6}}</td>
                            <td class="text-center">{{te7}}</td>
                            <td class="text-center">{{te8}}</td>
                       </tr>
                    </tbody>
                </template>
                </v-simple-table>
            </v-col>````


          <v-col md="1">
            <br>
        </v-col>

         <v-col md="3">
             <td>VII. ATENCION DE PUERPERIO</td>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                          <tr>
                           <th class="text-left tth" rowspan="3">
                               Grupo Etáreo
                           </th>
                           <th class="text-left tth" rowspan="3">
                               atendida
                           </th>
                           <th class="text-left tth" rowspan="3">
                               controlada
                           </th>
                           <th class="text-left tth" rowspan="3">
                               complicada
                           </th>
                       </tr>



                    </thead>
                    <tbody>
                        <tr>
                           <td class="tth">
                               menor 12 a.
                           </td>
                           <td class="text-center">{{data.var264 ? data.var264 : "-"}}</td>
                           <td class="text-center">{{data.var268 ? data.var268 : "-"}}</td>
                           <td class="text-center">{{data.var272 ? data.var272 : "-"}}</td>
                        
                      
                       </tr>
                       <tr>
                           <td class="tth">
                               12 -17.
                           </td>
                           <td class="text-center">{{data.var265 ? data.var265 : "-"}}</td>
                           <td class="text-center">{{data.var269 ? data.var269 : "-"}}</td>
                           <td class="text-center">{{data.var273 ? data.var273 : "-"}}</td>
                           
                         
                      
                       </tr>
                       <tr>
                           <td class="tth">
                               18 -29.
                           </td>
                           <td class="text-center">{{data.var266 ? data.var266 : "-"}}</td>
                           <td class="text-center">{{data.var270 ? data.var270 : "-"}}</td>
                           <td class="text-center">{{data.var274 ? data.var274 : "-"}}</td>
                        
                         
                      
                       </tr>
                       <tr>
                           <td class="tth">
                               30 -59.
                           </td>
                           <td class="text-center">{{data.var267 ? data.var267 : "-"}}</td>
                           <td class="text-center">{{data.var271 ? data.var271 : "-"}}</td>
                           <td class="text-center">{{data.var275 ? data.var275 : "-"}}</td>
                 
                         
                      
                       </tr>

                       <tr>
                            <td class="tth">
                                total.
                            </td>
                            <td class="text-center">{{tf1}}</td>
                            <td class="text-center">{{tf2}}</td>
                            <td class="text-center">{{tf3}}</td>
                      
                       </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
         <v-col md="1">
            <br>
        </v-col>
           <v-col md="2">
             <td>VIII. VISITA DOMICILIARIA</td>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                          <tr>
                           <th class="text-left tth" rowspan="3">
                               Grupo Etáreo
                           </th>
                           <th class="text-left tth" rowspan="3">
                               A Gestante
                           </th>
                           <th class="text-left tth" rowspan="3">
                               A puerpera
                           </th>
                          
                       </tr>



                    </thead>
                    <tbody>
                        <tr>
                           <td class="tth">
                               menor 12 a.
                           </td>
                           <td class="text-center">{{data.var276 ? data.var276 : "-"}}</td>
                           <td class="text-center">{{data.var280 ? data.var280 : "-"}}</td>
                        
                        
                      
                       </tr>
                       <tr>
                           <td class="tth">
                               12 -17.
                           </td>
                           <td class="text-center">{{data.var277 ? data.var277 : "-"}}</td>
                           <td class="text-center">{{data.var281 ? data.var281 : "-"}}</td>
                         
                           
                         
                      
                       </tr>
                       <tr>
                           <td class="tth">
                               18 -29.
                           </td>
                           <td class="text-center">{{data.var278 ? data.var278 : "-"}}</td>
                           <td class="text-center">{{data.var282 ? data.var282 : "-"}}</td>
                          
                                             
                       </tr>
                       <tr>
                           <td class="tth">
                               30 -59.
                           </td>
                           <td class="text-center">{{data.var279 ? data.var279 : "-"}}</td>
                           <td class="text-center">{{data.var283 ? data.var283 : "-"}}</td>
                          
                        
                         
                      
                       </tr>
                   

                       <tr>
                            <td class="tth">
                                total.
                            </td>
                            <td class="text-center">{{tg1}}</td>
                            <td class="text-center">{{tg2}}</td>
                         
                      
                       </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>


<v-col md="12">
    <td>IX. TRANSMISIÓN VERTICAL</td>
     <v-simple-table dense>
          <template v-slot:default>
               <thead>
                      <tr>
                    <th class="text-left tth" rowspan="5">
                               Grupo Etáreo
                    </th>        
                    <th class="text-center tth" colspan="18">
                        GESTANTE
                    </th>        
                    <th class="text-center tth"  colspan="4" rowspan="2">
                        HEPATITIS
                    </th>
                  </tr>

             <tr>
                <th class="text-center tth" colspan="14">
                        PRUEBAS DUALES
                    
                </th>
                <th class="text-center tth" rowspan="2" colspan="4">
                        HEPATITITS
                    
                </th>

             </tr>

            <tr>
                <th class="text-center tth" colspan="7">
                        VIH/SIDA
                    
                </th>
                <th class="text-center tth" colspan="7">
                        SIFILIS
                    
                </th>
                <th class="text-center tth" colspan="4">
                        (excepción )FUERA DEL CONTROL
                    
                </th>

            </tr>

            <tr>
                    <th class="text-center tth" colspan="4">
                        1º TAMIZAJE 
                    
                </th>
                    <th class="text-center tth" colspan="3">
                        2º TAMIZAJE 
                    
                </th>
                    <th class="text-center tth" colspan="4">
                        1º TAMIZAJE 
                    
                </th>
                    <th class="text-center tth" colspan="3">
                        2º TAMIZAJE 
                    
                </th>
                    <th class="text-center tth" colspan="4">
                        1º TAMIZAJE CON PRUEBA RAPIDA 
                    
                </th>

                   <th class="text-center tth" colspan="4">
                        1º TAMIZAJE 
                    
                </th>

            </tr>
<tr>
<th class="tth ">
 I Trimestre 
</th>
<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>


<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>



<th class="tth">
 I Trimestre 
</th>
<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>


<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>



<th class="tth">
 I Trimestre 
</th>
<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>


<th class="tth">
 I Trimestre 
</th>
<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>


</tr>


              
             </thead>
             <tbody>
             <tr>
                           <td class="tth">
                               menor 12 a.
                           </td>
                           <td class="text-center">{{data.var284 ? data.var284 : "-"}}</td>
                           <td class="text-center">{{data.var288 ? data.var288 : "-"}}</td>
                           <td class="text-center">{{data.var292 ? data.var292 : "-"}}</td>
                           <td class="text-center">{{data.var296 ? data.var296 : "-"}}</td>
                           <td class="text-center">{{data.var300 ? data.var300 : "-"}}</td>
                           <td class="text-center">{{data.var304 ? data.var304 : "-"}}</td>
                           <td class="text-center">{{data.var308 ? data.var308 : "-"}}</td>
                           <td class="text-center">{{data.var312 ? data.var312 : "-"}}</td>
                           <td class="text-center">{{data.var316 ? data.var316 : "-"}}</td>
                           <td class="text-center">{{data.var320 ? data.var320 : "-"}}</td>
                           <td class="text-center">{{data.var324 ? data.var324 : "-"}}</td>
                           <td class="text-center">{{data.var328 ? data.var328 : "-"}}</td>
                           <td class="text-center">{{data.var332 ? data.var332 : "-"}}</td>
                           <td class="text-center">{{data.var336 ? data.var336 : "-"}}</td>
                           <td class="text-center">{{data.var340 ? data.var340 : "-"}}</td>
                           <td class="text-center">{{data.var344 ? data.var344 : "-"}}</td>
                           <td class="text-center">{{data.var348 ? data.var348 : "-"}}</td>
                           <td class="text-center">{{data.var352 ? data.var352 : "-"}}</td>
                           <td class="text-center">{{data.var356 ? data.var356 : "-"}}</td>
                           <td class="text-center">{{data.var360 ? data.var360 : "-"}}</td>
                           <td class="text-center">{{data.var364 ? data.var364 : "-"}}</td>
                           <td class="text-center">{{data.var368 ? data.var368 : "-"}}</td>
                        
                       </tr>

                        <tr>
                           <td class="tth">
                               12-17 a.
                           </td>
                           <td class="text-center">{{data.var285 ? data.var285 : "-"}}</td>
                           <td class="text-center">{{data.var289 ? data.var289 : "-"}}</td>
                           <td class="text-center">{{data.var293 ? data.var293 : "-"}}</td>
                           <td class="text-center">{{data.var297 ? data.var297 : "-"}}</td>
                           <td class="text-center">{{data.var301 ? data.var301 : "-"}}</td>
                           <td class="text-center">{{data.var305 ? data.var305 : "-"}}</td>
                           <td class="text-center">{{data.var309 ? data.var309 : "-"}}</td>
                           <td class="text-center">{{data.var313 ? data.var313 : "-"}}</td>
                           <td class="text-center">{{data.var317 ? data.var317 : "-"}}</td>
                           <td class="text-center">{{data.var321 ? data.var321 : "-"}}</td>
                           <td class="text-center">{{data.var325 ? data.var325 : "-"}}</td>
                           <td class="text-center">{{data.var329 ? data.var329 : "-"}}</td>
                           <td class="text-center">{{data.var333 ? data.var333 : "-"}}</td>
                           <td class="text-center">{{data.var337 ? data.var337 : "-"}}</td>
                           <td class="text-center">{{data.var341 ? data.var341 : "-"}}</td>
                           <td class="text-center">{{data.var345 ? data.var345 : "-"}}</td>
                           <td class="text-center">{{data.var349 ? data.var349 : "-"}}</td>
                           <td class="text-center">{{data.var353 ? data.var353 : "-"}}</td>
                           <td class="text-center">{{data.var357 ? data.var357 : "-"}}</td>
                           <td class="text-center">{{data.var361 ? data.var361 : "-"}}</td>
                           <td class="text-center">{{data.var365 ? data.var365 : "-"}}</td>
                           <td class="text-center">{{data.var369 ? data.var369 : "-"}}</td>
                        
                       </tr>
                     <tr>
                           <td class="tth">
                               18-29 a.
                           </td>
                           <td class="text-center">{{data.var286 ? data.var286 : "-"}}</td>
                           <td class="text-center">{{data.var290 ? data.var290 : "-"}}</td>
                           <td class="text-center">{{data.var294 ? data.var294 : "-"}}</td>
                           <td class="text-center">{{data.var298 ? data.var298 : "-"}}</td>
                           <td class="text-center">{{data.var302 ? data.var302 : "-"}}</td>
                           <td class="text-center">{{data.var306 ? data.var306 : "-"}}</td>
                           <td class="text-center">{{data.var310 ? data.var310 : "-"}}</td>
                           <td class="text-center">{{data.var314 ? data.var314 : "-"}}</td>
                           <td class="text-center">{{data.var318 ? data.var318 : "-"}}</td>
                           <td class="text-center">{{data.var322 ? data.var322 : "-"}}</td>
                           <td class="text-center">{{data.var326 ? data.var326 : "-"}}</td>
                           <td class="text-center">{{data.var330 ? data.var330 : "-"}}</td>
                           <td class="text-center">{{data.var334 ? data.var333 : "-"}}</td>
                           <td class="text-center">{{data.var338 ? data.var338 : "-"}}</td>
                           <td class="text-center">{{data.var342 ? data.var342 : "-"}}</td>
                           <td class="text-center">{{data.var346 ? data.var346 : "-"}}</td>
                           <td class="text-center">{{data.var350 ? data.var350 : "-"}}</td>
                           <td class="text-center">{{data.var354 ? data.var354 : "-"}}</td>
                           <td class="text-center">{{data.var358 ? data.var358 : "-"}}</td>
                           <td class="text-center">{{data.var362 ? data.var362 : "-"}}</td>
                           <td class="text-center">{{data.var366 ? data.var366 : "-"}}</td>
                           <td class="text-center">{{data.var370 ? data.var370 : "-"}}</td>
                        
                       </tr>
                     <tr>
                           <td class="tth">
                               30-59 a.
                           </td>
                           <td class="text-center">{{data.var287 ? data.var287 : "-"}}</td>
                           <td class="text-center">{{data.var291 ? data.var291 : "-"}}</td>
                           <td class="text-center">{{data.var295 ? data.var295 : "-"}}</td>
                           <td class="text-center">{{data.var299 ? data.var299 : "-"}}</td>
                           <td class="text-center">{{data.var303 ? data.var303 : "-"}}</td>
                           <td class="text-center">{{data.var307 ? data.var307 : "-"}}</td>
                           <td class="text-center">{{data.var311 ? data.var311 : "-"}}</td>
                           <td class="text-center">{{data.var315 ? data.var315 : "-"}}</td>
                           <td class="text-center">{{data.var319 ? data.var319 : "-"}}</td>
                           <td class="text-center">{{data.var323 ? data.var323 : "-"}}</td>
                           <td class="text-center">{{data.var327 ? data.var327 : "-"}}</td>
                           <td class="text-center">{{data.var331 ? data.var331 : "-"}}</td>
                           <td class="text-center">{{data.var335 ? data.var335 : "-"}}</td>
                           <td class="text-center">{{data.var339 ? data.var339 : "-"}}</td>
                           <td class="text-center">{{data.var343 ? data.var343 : "-"}}</td>
                           <td class="text-center">{{data.var347 ? data.var347 : "-"}}</td>
                           <td class="text-center">{{data.var351 ? data.var351 : "-"}}</td>
                           <td class="text-center">{{data.var355 ? data.var355 : "-"}}</td>
                           <td class="text-center">{{data.var359 ? data.var359 : "-"}}</td>
                           <td class="text-center">{{data.var363 ? data.var363 : "-"}}</td>
                           <td class="text-center">{{data.var367 ? data.var367 : "-"}}</td>
                           <td class="text-center">{{data.var371 ? data.var371 : "-"}}</td>
                        
                       </tr>
                  
                          <tr>
                            <td class="tth">
                               total.
                           </td>
                       
                           <td class="text-center">{{th1}}</td>
                           <td class="text-center">{{th2}}</td>
                           <td class="text-center">{{th3}}</td>
                           <td class="text-center">{{th4}}</td>
                           <td class="text-center">{{th5}}</td>
                           <td class="text-center">{{th6}}</td>
                           <td class="text-center">{{th7}}</td>
                           <td class="text-center">{{th8}}</td>
                           <td class="text-center">{{th9}}</td>
                           <td class="text-center">{{th10}}</td>
                           <td class="text-center">{{th11}}</td>
                           <td class="text-center">{{th12}}</td>
                           <td class="text-center">{{th13}}</td>

                           <td class="text-center">{{th14}}</td>
                           <td class="text-center">{{th15}}</td>
                           <td class="text-center">{{th16}}</td>
                           <td class="text-center">{{th17}}</td>
                           <td class="text-center">{{th18}}</td>
                           <td class="text-center">{{th19}}</td>
                           <td class="text-center">{{th20}}</td>
                           <td class="text-center">{{th21}}</td>
                           <td class="text-center">{{th22}}</td>
                                                 
                          </tr>   
      
      
             </tbody>
         </template>
         </v-simple-table>
     </v-col>```


<v-col md="11">
    <td>FUERA DE CONTROL</td>
     <v-simple-table dense>
          <template v-slot:default>
               <thead>
                      <tr>
                    <th class="text-left tth" rowspan="4">
                               Grupo Etáreo
                    </th>        
                    <th class="text-center tth" colspan="20">
                        GESTANTE
                    </th>        
                   
                  </tr>

             <tr>
                <th class="text-center tth" colspan="11">
                        VIH/SIDA
                    
                </th>
                <th class="text-center tth" colspan="9">
                        SIFILIS
                    
                </th>
                

             </tr>

            <tr>
                <th class="text-center tth" colspan="4">
                        1º TAMIZAJE CON PRUEBA RAPIDA
                    
                </th>
                <th class="text-center tth" colspan="3">
                        2º TAMIZAJE CON PRUEBA RAPIDA
                    
                </th>

                 <th class="text-center tth" colspan="4">
                        TAMIZAJE CON ELISA
                    
                </th>
                 <th class="text-center tth" colspan="4">
                        1º TAMIZAJE 
                    
                </th>
                 <th class=" tth" colspan="3">
                        2º TAMIZAJE CON PRUEBA RAPIDA
                    
                </th>
                 <th  class="tth" colspan="2">
                        1º TAMIZAJE CON RPR / VDRL
                    
                </th>
                

            </tr>

          
<tr>
<th class="tth">
 I Trimestre 
</th>
<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>




<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>





<th class="tth">
 I Trimestre 
</th>
<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>


<th class="tth">
 I Trimestre 
</th>
<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>


<th class="tth">
 II Trimestre 
</th>
<th class="tth">
 III Trimestre 
</th>
<th class="tth">
 REACTIVO
</th>



<th class="tth">
 Nº
</th>

<th class="tth">
 REACTIVO
</th>


</tr>


              
             </thead>
             <tbody>
             <tr>
                           <td class="tth">
                               menor 12 a.
                           </td>
                           <td class="text-center">{{data.var372 ? data.var372 : "-"}}</td>
                           <td class="text-center">{{data.var376 ? data.var376 : "-"}}</td>
                           <td class="text-center">{{data.var380 ? data.var380 : "-"}}</td>
                           <td class="text-center">{{data.var384 ? data.var384 : "-"}}</td>
                           <td class="text-center">{{data.var388 ? data.var388 : "-"}}</td>
                           <td class="text-center">{{data.var392 ? data.var392 : "-"}}</td>
                           <td class="text-center">{{data.var396 ? data.var396 : "-"}}</td>
                           <td class="text-center">{{data.var400 ? data.var400 : "-"}}</td>
                           <td class="text-center">{{data.var404 ? data.var404 : "-"}}</td>
                           <td class="text-center">{{data.var408 ? data.var408 : "-"}}</td>
                           <td class="text-center">{{data.var412 ? data.var412 : "-"}}</td>
                           <td class="text-center">{{data.var416 ? data.var416 : "-"}}</td>
                           <td class="text-center">{{data.var420 ? data.var420 : "-"}}</td>
                           <td class="text-center">{{data.var424 ? data.var424 : "-"}}</td>
                           <td class="text-center">{{data.var428 ? data.var428 : "-"}}</td>
                           <td class="text-center">{{data.var432 ? data.var432 : "-"}}</td>
                           <td class="text-center">{{data.var436 ? data.var436 : "-"}}</td>
                           <td class="text-center">{{data.var440 ? data.var440 : "-"}}</td>
                           <td class="text-center">{{data.var444 ? data.var444 : "-"}}</td>
                           <td class="text-center">{{data.var448 ? data.var448 : "-"}}</td>
                
                        
                       </tr>

                        <tr>
                           <td class="tth">
                               12-17 a.
                           </td>
                           <td class="text-center">{{data.var373 ? data.var373 : "-"}}</td>
                           <td class="text-center">{{data.var377 ? data.var377 : "-"}}</td>
                           <td class="text-center">{{data.var381 ? data.var381 : "-"}}</td>
                           <td class="text-center">{{data.var385 ? data.var385 : "-"}}</td>
                           <td class="text-center">{{data.var389 ? data.var389 : "-"}}</td>
                           <td class="text-center">{{data.var393 ? data.var393 : "-"}}</td>
                           <td class="text-center">{{data.var397 ? data.var397 : "-"}}</td>
                           <td class="text-center">{{data.var401 ? data.var401 : "-"}}</td>
                           <td class="text-center">{{data.var405 ? data.var405 : "-"}}</td>
                           <td class="text-center">{{data.var409 ? data.var409 : "-"}}</td>
                           <td class="text-center">{{data.var413 ? data.var413 : "-"}}</td>
                           <td class="text-center">{{data.var417 ? data.var417 : "-"}}</td>
                           <td class="text-center">{{data.var421 ? data.var421 : "-"}}</td>
                           <td class="text-center">{{data.var425 ? data.var425 : "-"}}</td>
                           <td class="text-center">{{data.var429 ? data.var429 : "-"}}</td>
                           <td class="text-center">{{data.var433 ? data.var433 : "-"}}</td>
                           <td class="text-center">{{data.var437 ? data.var437 : "-"}}</td>
                           <td class="text-center">{{data.var441 ? data.var441 : "-"}}</td>
                           <td class="text-center">{{data.var445 ? data.var445 : "-"}}</td>
                           <td class="text-center">{{data.var449 ? data.var449 : "-"}}</td>
                        
                        
                       </tr>
                     <tr>
                           <td class="tth">
                               18-29 a.
                           </td>
                           <td class="text-center">{{data.var374 ? data.var374 : "-"}}</td>
                           <td class="text-center">{{data.var378 ? data.var378 : "-"}}</td>
                           <td class="text-center">{{data.var382 ? data.var382 : "-"}}</td>
                           <td class="text-center">{{data.var386 ? data.var386 : "-"}}</td>
                           <td class="text-center">{{data.var390 ? data.var390 : "-"}}</td>
                           <td class="text-center">{{data.var394 ? data.var394 : "-"}}</td>
                           <td class="text-center">{{data.var398 ? data.var398 : "-"}}</td>
                           <td class="text-center">{{data.var402 ? data.var402 : "-"}}</td>
                           <td class="text-center">{{data.var406 ? data.var406 : "-"}}</td>
                           <td class="text-center">{{data.var410 ? data.var410 : "-"}}</td>
                           <td class="text-center">{{data.var414 ? data.var414 : "-"}}</td>
                           <td class="text-center">{{data.var418 ? data.var418 : "-"}}</td>
                           <td class="text-center">{{data.var422 ? data.var422 : "-"}}</td>
                           <td class="text-center">{{data.var426 ? data.var426 : "-"}}</td>
                           <td class="text-center">{{data.var430 ? data.var430 : "-"}}</td>
                           <td class="text-center">{{data.var434 ? data.var434 : "-"}}</td>
                           <td class="text-center">{{data.var438 ? data.var438 : "-"}}</td>
                           <td class="text-center">{{data.var442 ? data.var442 : "-"}}</td>
                           <td class="text-center">{{data.var446 ? data.var446 : "-"}}</td>
                           <td class="text-center">{{data.var450 ? data.var450 : "-"}}</td>
                      
                        
                       </tr>
                     <tr>
                           <td class="tth">
                               30-59 a.
                           </td>
                           <td class="text-center">{{data.var375 ? data.var375 : "-"}}</td>
                           <td class="text-center">{{data.var379 ? data.var379 : "-"}}</td>
                           <td class="text-center">{{data.var383 ? data.var383 : "-"}}</td>
                           <td class="text-center">{{data.var387 ? data.var387 : "-"}}</td>
                           <td class="text-center">{{data.var391 ? data.var391 : "-"}}</td>
                           <td class="text-center">{{data.var395 ? data.var395 : "-"}}</td>
                           <td class="text-center">{{data.var399 ? data.var399 : "-"}}</td>
                           <td class="text-center">{{data.var403 ? data.var403 : "-"}}</td>
                           <td class="text-center">{{data.var407 ? data.var407 : "-"}}</td>
                           <td class="text-center">{{data.var411 ? data.var411 : "-"}}</td>
                           <td class="text-center">{{data.var415 ? data.var415 : "-"}}</td>
                           <td class="text-center">{{data.var419 ? data.var419 : "-"}}</td>
                           <td class="text-center">{{data.var423 ? data.var423 : "-"}}</td>
                           <td class="text-center">{{data.var427 ? data.var427 : "-"}}</td>
                           <td class="text-center">{{data.var431 ? data.var431 : "-"}}</td>
                           <td class="text-center">{{data.var435 ? data.var435 : "-"}}</td>
                           <td class="text-center">{{data.var439 ? data.var439 : "-"}}</td>
                           <td class="text-center">{{data.var443 ? data.var443 : "-"}}</td>
                           <td class="text-center">{{data.var447 ? data.var447 : "-"}}</td>
                           <td class="text-center">{{data.var451 ? data.var451 : "-"}}</td>
                    
                        
                       </tr>
                  
                          <tr>
                            <td class="tth">
                               total.
                           </td>
                       
                           <td class="text-center">{{ti1}}</td>
                           <td class="text-center">{{ti2}}</td>
                           <td class="text-center">{{ti3}}</td>
                           <td class="text-center">{{ti4}}</td>
                           <td class="text-center">{{ti5}}</td>
                           <td class="text-center">{{ti6}}</td>
                           <td class="text-center">{{ti7}}</td>
                           <td class="text-center">{{ti8}}</td>
                           <td class="text-center">{{ti9}}</td>
                           <td class="text-center">{{ti10}}</td>
                           <td class="text-center">{{ti11}}</td>
                           <td class="text-center">{{ti12}}</td>
                           <td class="text-center">{{ti13}}</td>

                           <td class="text-center">{{ti14}}</td>
                           <td class="text-center">{{ti15}}</td>
                           <td class="text-center">{{ti16}}</td>
                           <td class="text-center">{{ti17}}</td>
                           <td class="text-center">{{ti18}}</td>
                           <td class="text-center">{{ti19}}</td>
                           <td class="text-center">{{ti20}}</td>
                   
                                                 
                          </tr>   
      
      
             </tbody>
         </template>
         </v-simple-table>
     </v-col>```



       <v-col md="4">
           <td></td>
            <v-simple-table dense>
                 <template v-slot:default>
                      <thead>
                             <tr>
                           <th class="text-left tth" rowspan="3">
                               Grupo Etáreo
                           </th>

                           <th class="text-center tth" colspan="6">
                               PUERPERAS INMEDIATAS
                           </th>

                      
                      
                          
                       </tr>
                       <tr>
                          
                             <th class="text-center tth" colspan="2" >
                               VIH/SIDA
                           </th>
                           <th class="text-center tth" colspan="4">
                               SIFILIS
                           </th>
                         
                       </tr>
<tr>
    <th class="tth">
        PR / para VIH
    </th>
    <th class="tth">
        Reactivo para VIH
    </th>
    <th class="tth">
          Prueba Rápida 
    </th>
    <th class="tth">
        Positivo
    </th>
    <th class="tth">
        Tamizaje  RPR
    </th>
    <th class="tth">
        RPR Reactivo
    </th>
   
</tr>
                     
                    </thead>
                    <tbody>
                 <tr>
                           <td class="tth">
                               menor 12 a.
                           </td>
                           <td class="text-center">{{data.var452 ? data.var452 : "-"}}</td>
                           <td class="text-center">{{data.var456 ? data.var456 : "-"}}</td>
                           <td class="text-center">{{data.var460 ? data.var460 : "-"}}</td>
                           <td class="text-center">{{data.var464 ? data.var464 : "-"}}</td>
                           <td class="text-center">{{data.var472 ? data.var472 : "-"}}</td>
                           <td class="text-center">{{data.var476 ? data.var476 : "-"}}</td>
                      
                      
                       </tr>
                 <tr>
                           <td class="tth">
                            12 a 17.
                           </td>
                            <td class="text-center">{{data.var453 ? data.var453 : "-"}}</td>
                           <td class="text-center">{{data.var457 ? data.var457 : "-"}}</td>
                           <td class="text-center">{{data.var461 ? data.var461 : "-"}}</td>
                           <td class="text-center">{{data.var465 ? data.var465 : "-"}}</td>
                           <td class="text-center">{{data.var473 ? data.var473 : "-"}}</td>
                           <td class="text-center">{{data.var477 ? data.var477 : "-"}}</td>
                       
                      
                       </tr>
                 <tr>
                           <td class="tth">
                            18 a 29.
                           </td>
                           <td class="text-center">{{data.var454 ? data.var454 : "-"}}</td>
                           <td class="text-center">{{data.var458 ? data.var458 : "-"}}</td>
                           <td class="text-center">{{data.var462 ? data.var462 : "-"}}</td>
                           <td class="text-center">{{data.var466 ? data.var466 : "-"}}</td>
                           <td class="text-center">{{data.var474 ? data.var474 : "-"}}</td>
                           <td class="text-center">{{data.var478 ? data.var478 : "-"}}</td>
                      
                      
                       </tr>
                 <tr>
                           <td class="tth">
                            30 a 59.
                           </td>
                           <td class="text-center">{{data.var455 ? data.var455 : "-"}}</td>
                           <td class="text-center">{{data.var459 ? data.var459 : "-"}}</td>
                           <td class="text-center">{{data.var463 ? data.var463 : "-"}}</td>
                           <td class="text-center">{{data.var467 ? data.var467 : "-"}}</td>
                           <td class="text-center">{{data.var475 ? data.var475 : "-"}}</td>
                           <td class="text-center">{{data.var479 ? data.var479 : "-"}}</td>
                    
                      
                       </tr>
   <tr>
                            <td class="tth">
                                total.
                            </td>
                            <td class="text-center">{{tj1}}</td>
                            <td class="text-center">{{tj2}}</td>
                            <td class="text-center">{{tj3}}</td>
                            <td class="text-center">{{tj4}}</td>
                            <td class="text-center">{{tj5}}</td>
                            <td class="text-center">{{tj6}}</td>
                        
                       </tr>
                    </tbody>
                </template>
                </v-simple-table>
            </v-col>``

   <v-col md="1">
            <br>
        </v-col>

 <v-col md="3">
            <td> PRUEBAS</td>   
            <v-simple-table dense>
                
                <template v-slot:default>
            
                    <thead>
                        <tr>
                        <th class="text-left tth">
                           PRUEBAS
                        </th>

                        <th class="text-left tth" >
                            N° 
                        </th>

                        
                    </tr>


                    </thead>
                    <tbody>
                        <tr>
                        <td class="tth1">
                            1° PRUEBA RAPIDA PARA VIH EN TRABJO DE PARTO
                        
                        <td class="text-center">{{data.var476 ? data.var476 : "-"}}</td>
                    
                        </tr>

                        <tr>
                        <td class="tth1">
                            1° PRUEBA RAPIDA PARA VIH EN TRABJO DE PARTO REACTIVO
                        
                        <td class="text-center">{{data.var477 ? data.var477 : "-"}}</td>
                    
                        </tr>
                      
    
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>


       <v-col md="5">
           <td>ACTIVIDADES EN TELESALUD</td>
            <v-simple-table dense>
                 <template v-slot:default>
                      <thead>
                             <tr>
                           <th class="text-left tth1" rowspan="3">
                               Grupo Etáreo
                           </th>

                           <th class="text-center tth1" colspan="8">
                               PUERPERAS INMEDIATAS
                           </th>
                           <th class="text-left tth1" rowspan="3">
                               PUERPERA
                           </th>

                      
                      
                          
                       </tr>
                       <tr>
                          
                             <th class="text-center tth1" colspan="4" >
                               TELEORIENTACION
                           </th>
                           <th class="text-center tth1" colspan="4">
                               TELEMONITOREO
                           </th>
                         
                       </tr>
<tr>
    <th class="tth1">
        I TRIMESTRE
    </th>
    <th class="tth1">
        II TRIMESTRE
    </th>
    <th class="tth1">
        III TRIMESTRE
    </th>
    <th class="tth1">
        TOTAL
    </th>
    <th class="tth1">
        I TRIMESTRE
    </th>
    <th class="tth1">
        II TRIMESTRE
    </th>
    <th class="tth1">
        III TRIMESTRE
    </th>
    <th class="tth1">
        TOTAL
    </th>
  
   
</tr>
                     
                    </thead>
                    <tbody>
                 <tr>
                           <td class="tth1">
                               menor 12 a.
                           </td>
                             <td class="text-center">{{data.var478 ? data.var478 : "-"}}</td>
                             <td class="text-center">{{data.var482 ? data.var482 : "-"}}</td>
                             <td class="text-center">{{data.var486 ? data.var486 : "-"}}</td>
                             
                             <td class="text-center">{{total5}}</td>
                            <td class="text-center">{{data.var490 ? data.var490 : "-"}}</td>
                             <td class="text-center">{{data.var494 ? data.var494 : "-"}}</td>
                             <td class="text-center">{{data.var498 ? data.var498 : "-"}}</td>
                          
                             <td class="text-center">{{total6}}</td>
                            <td class="text-center">{{data.var502 ? data.var502 : "-"}}</td>
                         
                      
                      
                       </tr>
                 <tr>
                           <td class="tth1">
                            12 a 17.
                           </td>
                            
                             <td class="text-center">{{data.var479 ? data.var479 : "-"}}</td>
                             <td class="text-center">{{data.var483 ? data.var483 : "-"}}</td>
                             <td class="text-center">{{data.var487 ? data.var487 : "-"}}</td>
                             
                             <td class="text-center">{{total7}}</td>
                            <td class="text-center">{{data.var491 ? data.var491 : "-"}}</td>
                             <td class="text-center">{{data.var495 ? data.var495 : "-"}}</td>
                             <td class="text-center">{{data.var499 ? data.var499 : "-"}}</td>
                          
                             <td class="text-center">{{total8}}</td>
                            <td class="text-center">{{data.var503 ? data.var503 : "-"}}</td>
                       
                      
                       </tr>
                 <tr>
                           <td class="tth1">
                            18 a 29.
                           </td>
                            <td class="text-center">{{data.var480 ? data.var480 : "-"}}</td>
                             <td class="text-center">{{data.var484 ? data.var484 : "-"}}</td>
                             <td class="text-center">{{data.var488 ? data.var488 : "-"}}</td>
                             
                             <td class="text-center">{{total9}}</td>
                            <td class="text-center">{{data.var492 ? data.var492 : "-"}}</td>
                             <td class="text-center">{{data.var496 ? data.var496 : "-"}}</td>
                             <td class="text-center">{{data.var500 ? data.var500 : "-"}}</td>
                          
                             <td class="text-center">{{total10}}</td>
                            <td class="text-center">{{data.var504 ? data.var504 : "-"}}</td>
                      
                      
                       </tr>
                 <tr>
                           <td class="tth1">
                            30 a 59.
                           </td>
                           <td class="text-center">{{data.var481 ? data.var481 : "-"}}</td>
                             <td class="text-center">{{data.var485 ? data.var485 : "-"}}</td>
                             <td class="text-center">{{data.var489 ? data.var489 : "-"}}</td>
                             
                             <td class="text-center">{{total11}}</td>
                            <td class="text-center">{{data.var493 ? data.var493 : "-"}}</td>
                             <td class="text-center">{{data.var497 ? data.var497 : "-"}}</td>
                             <td class="text-center">{{data.var501 ? data.var501 : "-"}}</td>
                          
                             <td class="text-center">{{total12}}</td>
                            <td class="text-center">{{data.var505 ? data.var505 : "-"}}</td>
                    
                      
                       </tr>
   <tr>
                            <td class="tth1">
                                total.
                            </td>
                            <td class="text-center">{{tK1}}</td>
                            <td class="text-center">{{tK2}}</td>
                            <td class="text-center">{{tK3}}</td>
                            <td class="text-center">{{tK4}}</td>
                            <td class="text-center">{{tK5}}</td>
                            <td class="text-center">{{tK6}}</td>
                            <td class="text-center">{{tK7}}</td>
                            <td class="text-center">{{tK8}}</td>
                            <td class="text-center">{{tK9}}</td>
                        
                       </tr>
                    </tbody>
                </template>
                </v-simple-table>
            </v-col>``

    </v-row>
</template>

<style>

.tth
{
 color: white !important;
  background-color: rgba(241, 15, 15, 0.925);
}
.tth1
{
 color: white !important;
  background-color: rgb(4, 143, 236);
}

table, td, th {  
  border: 1px solid rgb(236, 232, 232);
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}



</style>

<script>
export default ({
    data: () => ({
        datos: '',
        data: [],
        total1: 0,
        total2: 0,
        total3: 0,
        total4: 0,

        total5: 0,
        total6: 0,
        total7: 0,
        total8: 0,

        total9: 0,
        total10: 0,
        total11: 0,
        total12: 0,



        ta1: 0,         ta2: 0,         ta3: 0,         ta4: 0,         ta5: 0,         ta6: 0,         ta7: 0,         ta8: 0,         ta9: 0,         ta10: 0,
        ta11: 0,        ta12: 0,        ta13: 0,        ta14: 0,        ta15: 0,        ta16: 0,        ta17: 0,        ta18: 0,        ta19: 0,        ta20: 0,
        ta21: 0,        ta22: 0,        ta23: 0,        ta24: 0,
 //  segundo cuadrante

        tb1: 0,        tb2: 0,        tb3: 0,        tb4: 0,        tb5: 0,        tb6: 0,
/// tercer cuadrante 
        tc1: 0,        tc2: 0,        tc3: 0,        tc4: 0,        tc5: 0,        tc6: 0,        tc7: 0,        tc8: 0,        tc9: 0,        tc10: 0,
        tc11: 0,       tc12: 0,

///  cuarto cuadrante
        td1: 0,
        td2: 0,
        td3: 0,
        td4: 0,
        td5: 0,
        td6: 0,
        td7: 0,
        td8: 0,
        td9: 0,
        td10: 0,
        td11: 0,
        td12: 0,
        td13: 0,
        td14: 0,
        td15: 0,
///
        te1: 0,
        te2: 0,
        te3: 0,
        te4: 0,
        te5: 0,
        te6: 0,
        te7: 0,
        te8: 0,

        //

        tf1: 0,
        tf2: 0,
        tf3: 0,
        //

          tg1: 0,
        tg2: 0,
        //
         th1: 0,
         th2: 0,
         th3: 0,         th4: 0,         th5: 0,         th6: 0,         th7: 0,         th8: 0,         th9: 0,         th10: 0,
        th11: 0,        th12: 0,        th13: 0,        th14: 0,        th15: 0,        th16: 0,        th17: 0,        th18: 0,        th19: 0,        th20: 0,
        th21: 0,        th22: 0,

        //

          ti1: 0,
         ti2: 0,
         ti3: 0,         ti4: 0,         ti5: 0,         ti6: 0,         ti7: 0,         ti8: 0,         ti9: 0,         ti10: 0,
        ti11: 0,        ti12: 0,        ti13: 0,        ti14: 0,        ti15: 0,        ti16: 0,        ti17: 0,        ti18: 0,        ti19: 0,        ti20: 0,

///
tj1: 0,
         tj2: 0,
         tj3: 0,         tj4: 0,         tj5: 0,         tj6: 0, 


         /// td1: 0,
        tK2: 0,
        tK3: 0,
        tK4: 0,
        tK5: 0,
        tK6: 0,
        tK7: 0,
        tK8: 0,
        tK9: 0,

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
                this.total2 = parseInt(response.data[0].var2) + parseInt(response.data[0].var6) + parseInt(response.data[0].var10)
                this.total3 = parseInt(response.data[0].var3) + parseInt(response.data[0].var7) + parseInt(response.data[0].var11)
                this.total4 = parseInt(response.data[0].var4) + parseInt(response.data[0].var8) + parseInt(response.data[0].var12)

                this.ta1 = parseInt(response.data[0].var1) + parseInt(response.data[0].var2) + parseInt(response.data[0].var3) +parseInt(response.data[0].var4)
                this.ta2 = parseInt(response.data[0].var5) + parseInt(response.data[0].var6) + parseInt(response.data[0].var7) +parseInt(response.data[0].var8)
                this.ta3 = parseInt(response.data[0].var9) + parseInt(response.data[0].var10) + parseInt(response.data[0].var11) +parseInt(response.data[0].var12)

                this.ta4 = parseInt(this.ta1) + parseInt(this.ta2) + parseInt(this.ta3) 
                
                this.ta5 = parseInt(response.data[0].var13) + parseInt(response.data[0].var14) + parseInt(response.data[0].var15) +parseInt(response.data[0].var16)
                this.ta6 = parseInt(response.data[0].var17) + parseInt(response.data[0].var18) + parseInt(response.data[0].var19) +parseInt(response.data[0].var20)
                this.ta7 = parseInt(response.data[0].var21) + parseInt(response.data[0].var22) + parseInt(response.data[0].var23) +parseInt(response.data[0].var24)
                this.ta8 = parseInt(response.data[0].var25) + parseInt(response.data[0].var26) + parseInt(response.data[0].var27) +parseInt(response.data[0].var28)
                this.ta9 = parseInt(response.data[0].var29) + parseInt(response.data[0].var30) + parseInt(response.data[0].var31) +parseInt(response.data[0].var32)
                this.ta10 = parseInt(response.data[0].var33) + parseInt(response.data[0].var34) + parseInt(response.data[0].var35) +parseInt(response.data[0].var36)
                this.ta11 = parseInt(response.data[0].var37) + parseInt(response.data[0].var38) + parseInt(response.data[0].var39) +parseInt(response.data[0].var40)
                this.ta12 = parseInt(response.data[0].var41) + parseInt(response.data[0].var42) + parseInt(response.data[0].var43) +parseInt(response.data[0].var44)
                this.ta13 = parseInt(response.data[0].var45) + parseInt(response.data[0].var46) + parseInt(response.data[0].var47) +parseInt(response.data[0].var48)
                this.ta14 = parseInt(response.data[0].var49) + parseInt(response.data[0].var50) + parseInt(response.data[0].var51) +parseInt(response.data[0].var52)
                this.ta15 = parseInt(response.data[0].var53) + parseInt(response.data[0].var54) + parseInt(response.data[0].var55) +parseInt(response.data[0].var56)
                this.ta16 = parseInt(response.data[0].var57) + parseInt(response.data[0].var58) + parseInt(response.data[0].var59) +parseInt(response.data[0].var60)
                this.ta17 = parseInt(response.data[0].var61) + parseInt(response.data[0].var62) + parseInt(response.data[0].var63) +parseInt(response.data[0].var64)
                this.ta18 = parseInt(response.data[0].var65) + parseInt(response.data[0].var66) + parseInt(response.data[0].var67) +parseInt(response.data[0].var68)
                this.ta19 = parseInt(response.data[0].var69) + parseInt(response.data[0].var70) + parseInt(response.data[0].var71) +parseInt(response.data[0].var72)
                this.ta20 = parseInt(response.data[0].var73) + parseInt(response.data[0].var74) + parseInt(response.data[0].var75) +parseInt(response.data[0].var76)
                this.ta21 = parseInt(response.data[0].var77) + parseInt(response.data[0].var78) + parseInt(response.data[0].var79) +parseInt(response.data[0].var80)
                this.ta22 = parseInt(response.data[0].var81) + parseInt(response.data[0].var82) + parseInt(response.data[0].var83) +parseInt(response.data[0].var84)
                this.ta23 = parseInt(response.data[0].var85) + parseInt(response.data[0].var86) + parseInt(response.data[0].var87) +parseInt(response.data[0].var88)
                this.ta24 = parseInt(response.data[0].var89) + parseInt(response.data[0].var90) + parseInt(response.data[0].var91) +parseInt(response.data[0].var92)
                
             
//// segundo cudrante

                this.tb1 = parseInt(response.data[0].var93) + parseInt(response.data[0].var94) + parseInt(response.data[0].var95) +parseInt(response.data[0].var96)
                this.tb2 = parseInt(response.data[0].var97) + parseInt(response.data[0].var98) + parseInt(response.data[0].var99) +parseInt(response.data[0].var100)
                this.tb3 = parseInt(response.data[0].var101) + parseInt(response.data[0].var102) + parseInt(response.data[0].var103) +parseInt(response.data[0].var104)
                this.tb4 = parseInt(response.data[0].var105) + parseInt(response.data[0].var106) + parseInt(response.data[0].var107) +parseInt(response.data[0].var108)
                this.tb5 = parseInt(response.data[0].var109) + parseInt(response.data[0].var110) + parseInt(response.data[0].var111) +parseInt(response.data[0].var112)
                this.tb6 = parseInt(response.data[0].var113) + parseInt(response.data[0].var114) + parseInt(response.data[0].var115) +parseInt(response.data[0].var116)



///// tercer cuadrante

                this.tc1 = parseInt(response.data[0].var117) + parseInt(response.data[0].var118) + parseInt(response.data[0].var119) +parseInt(response.data[0].var120)
                this.tc2 = parseInt(response.data[0].var121) + parseInt(response.data[0].var122) + parseInt(response.data[0].var123) +parseInt(response.data[0].var124)
                this.tc3 = parseInt(response.data[0].var125) + parseInt(response.data[0].var126) + parseInt(response.data[0].var127) +parseInt(response.data[0].var128)
                this.tc4 = parseInt(response.data[0].var129) + parseInt(response.data[0].var130) + parseInt(response.data[0].var131) +parseInt(response.data[0].var132)
                this.tc5 = parseInt(response.data[0].var133) + parseInt(response.data[0].var134) + parseInt(response.data[0].var135) +parseInt(response.data[0].var136)
                this.tc6 = parseInt(response.data[0].var137) + parseInt(response.data[0].var138) + parseInt(response.data[0].var139) +parseInt(response.data[0].var140)
                this.tc7 = parseInt(response.data[0].var141) + parseInt(response.data[0].var142) + parseInt(response.data[0].var143) +parseInt(response.data[0].var144)
                this.tc8 = parseInt(response.data[0].var145) + parseInt(response.data[0].var146) + parseInt(response.data[0].var147) +parseInt(response.data[0].var148)
                this.tc9 = parseInt(response.data[0].var149) + parseInt(response.data[0].var150) + parseInt(response.data[0].var151) +parseInt(response.data[0].var152)
                this.tc10 = parseInt(response.data[0].var153) + parseInt(response.data[0].var154) + parseInt(response.data[0].var155) +parseInt(response.data[0].var156)
                this.tc11 = parseInt(response.data[0].var157) + parseInt(response.data[0].var158) + parseInt(response.data[0].var159) +parseInt(response.data[0].var160)
                this.tc12 = parseInt(response.data[0].var161) + parseInt(response.data[0].var162) + parseInt(response.data[0].var163) +parseInt(response.data[0].var164)

/////  cuarto cuadrante

                this.td1 = parseInt(response.data[0].var165) + parseInt(response.data[0].var166) + parseInt(response.data[0].var167) +parseInt(response.data[0].var168)
                this.td2 = parseInt(response.data[0].var197) + parseInt(response.data[0].var198) + parseInt(response.data[0].var199) +parseInt(response.data[0].var200)
            
                this.td3 = parseInt(response.data[0].var169) + parseInt(response.data[0].var170) + parseInt(response.data[0].var171) +parseInt(response.data[0].var172)
                this.td4 = parseInt(response.data[0].var201) + parseInt(response.data[0].var202) + parseInt(response.data[0].var203) +parseInt(response.data[0].var204)
             
                this.td5 = parseInt(response.data[0].var173) + parseInt(response.data[0].var174) + parseInt(response.data[0].var175) +parseInt(response.data[0].var176)
                this.td6 = parseInt(response.data[0].var205) + parseInt(response.data[0].var206) + parseInt(response.data[0].var207) +parseInt(response.data[0].var208)
             
                this.td7 = parseInt(response.data[0].var177) + parseInt(response.data[0].var178) + parseInt(response.data[0].var179) +parseInt(response.data[0].var180)
                this.td8 = parseInt(response.data[0].var209) + parseInt(response.data[0].var210) + parseInt(response.data[0].var211) +parseInt(response.data[0].var212)
             
             
                this.td9= parseInt(response.data[0].var181) + parseInt(response.data[0].var182) + parseInt(response.data[0].var183) +parseInt(response.data[0].var184)
                this.td10 = parseInt(response.data[0].var213) + parseInt(response.data[0].var214) + parseInt(response.data[0].var215) +parseInt(response.data[0].var216)
             
                
             
                this.td11= parseInt(response.data[0].var185) + parseInt(response.data[0].var186) + parseInt(response.data[0].var187) +parseInt(response.data[0].var188)
                this.td12 = parseInt(response.data[0].var217) + parseInt(response.data[0].var218) + parseInt(response.data[0].var219) +parseInt(response.data[0].var220)
             
             
                this.td13= parseInt(response.data[0].var189) + parseInt(response.data[0].var190) + parseInt(response.data[0].var191) +parseInt(response.data[0].var192)
                this.td14 = parseInt(response.data[0].var221) + parseInt(response.data[0].var222) + parseInt(response.data[0].var223) +parseInt(response.data[0].var224)

                this.td15 = parseInt(response.data[0].var193) + parseInt(response.data[0].var194) + parseInt(response.data[0].var195) +parseInt(response.data[0].var196)
             
                
//// quinto cuadrante 
                this.te1 = parseInt(response.data[0].var232) + parseInt(response.data[0].var233) + parseInt(response.data[0].var234) +parseInt(response.data[0].var235)
                this.te2 = parseInt(response.data[0].var236) + parseInt(response.data[0].var237) + parseInt(response.data[0].var238) +parseInt(response.data[0].var239)
            
                this.te3 = parseInt(response.data[0].var240) + parseInt(response.data[0].var241) + parseInt(response.data[0].var242) +parseInt(response.data[0].var243)
                this.te4 = parseInt(response.data[0].var244) + parseInt(response.data[0].var245) + parseInt(response.data[0].var246) +parseInt(response.data[0].var247)
             
                this.te5 = parseInt(response.data[0].var248) + parseInt(response.data[0].var249) + parseInt(response.data[0].var250) +parseInt(response.data[0].var251)
                this.te6 = parseInt(response.data[0].var252) + parseInt(response.data[0].var253) + parseInt(response.data[0].var254) +parseInt(response.data[0].var255)
             
                this.te7 = parseInt(response.data[0].var256) + parseInt(response.data[0].var257) + parseInt(response.data[0].var258) +parseInt(response.data[0].var259)
                this.te8 = parseInt(response.data[0].var260) + parseInt(response.data[0].var261) + parseInt(response.data[0].var262) +parseInt(response.data[0].var263)
      ///sexto modulo       
                
                this.tf1 = parseInt(response.data[0].var264) + parseInt(response.data[0].var265) + parseInt(response.data[0].var266) +parseInt(response.data[0].var267)
                this.tf2 = parseInt(response.data[0].var268) + parseInt(response.data[0].var269) + parseInt(response.data[0].var270) +parseInt(response.data[0].var271)
                this.tf3 = parseInt(response.data[0].var272) + parseInt(response.data[0].var273) + parseInt(response.data[0].var274) +parseInt(response.data[0].var275)
          
      ///sexto modulo       
                
                this.tg1 = parseInt(response.data[0].var276) + parseInt(response.data[0].var277) + parseInt(response.data[0].var278) +parseInt(response.data[0].var279)
                this.tg2 = parseInt(response.data[0].var280) + parseInt(response.data[0].var281) + parseInt(response.data[0].var282) +parseInt(response.data[0].var283)
             
          
          /// septimo modulo 

       
            
                this.th1 = parseInt(response.data[0].var284) + parseInt(response.data[0].var285) + parseInt(response.data[0].var286) +parseInt(response.data[0].var287)
                this.th2 = parseInt(response.data[0].var288) + parseInt(response.data[0].var289) + parseInt(response.data[0].var290) +parseInt(response.data[0].var291)
                this.th3 = parseInt(response.data[0].var292) + parseInt(response.data[0].var293) + parseInt(response.data[0].var294) +parseInt(response.data[0].var295)
                this.th4 = parseInt(response.data[0].var296) + parseInt(response.data[0].var297) + parseInt(response.data[0].var298) +parseInt(response.data[0].var299)
                this.th5 = parseInt(response.data[0].var300) + parseInt(response.data[0].var301) + parseInt(response.data[0].var302) +parseInt(response.data[0].var303)
                this.th6 = parseInt(response.data[0].var304) + parseInt(response.data[0].var305) + parseInt(response.data[0].var306) +parseInt(response.data[0].var307)
                this.th7 = parseInt(response.data[0].var308) + parseInt(response.data[0].var309) + parseInt(response.data[0].var310) +parseInt(response.data[0].var311)
                this.th8 = parseInt(response.data[0].var312) + parseInt(response.data[0].var313) + parseInt(response.data[0].var314) +parseInt(response.data[0].var315)
                this.th9 = parseInt(response.data[0].var316) + parseInt(response.data[0].var317) + parseInt(response.data[0].var318) +parseInt(response.data[0].var319)
                this.th10 = parseInt(response.data[0].var320) + parseInt(response.data[0].var321) + parseInt(response.data[0].var322) +parseInt(response.data[0].var323)
                this.th11 = parseInt(response.data[0].var324) + parseInt(response.data[0].var325) + parseInt(response.data[0].var326) +parseInt(response.data[0].var327)
                this.th12 = parseInt(response.data[0].var328) + parseInt(response.data[0].var329) + parseInt(response.data[0].var330) +parseInt(response.data[0].var331)
                this.th13 = parseInt(response.data[0].var332) + parseInt(response.data[0].var333) + parseInt(response.data[0].var334) +parseInt(response.data[0].var335)
                this.th14 = parseInt(response.data[0].var336) + parseInt(response.data[0].var337) + parseInt(response.data[0].var338) +parseInt(response.data[0].var339)
                this.th15 = parseInt(response.data[0].var340) + parseInt(response.data[0].var341) + parseInt(response.data[0].var342) +parseInt(response.data[0].var343)
                this.th16 = parseInt(response.data[0].var344) + parseInt(response.data[0].var345) + parseInt(response.data[0].var346) +parseInt(response.data[0].var347)
                this.th17 = parseInt(response.data[0].var348) + parseInt(response.data[0].var349) + parseInt(response.data[0].var350) +parseInt(response.data[0].var351)
                this.th18 = parseInt(response.data[0].var352) + parseInt(response.data[0].var353) + parseInt(response.data[0].var354) +parseInt(response.data[0].var355)
                this.th19 = parseInt(response.data[0].var356) + parseInt(response.data[0].var357) + parseInt(response.data[0].var358) +parseInt(response.data[0].var359)
                this.th20 = parseInt(response.data[0].var360) + parseInt(response.data[0].var361) + parseInt(response.data[0].var362) +parseInt(response.data[0].var363)
                this.th21 = parseInt(response.data[0].var364) + parseInt(response.data[0].var365) + parseInt(response.data[0].var366) +parseInt(response.data[0].var367)
                this.th22 = parseInt(response.data[0].var368) + parseInt(response.data[0].var369) + parseInt(response.data[0].var370) +parseInt(response.data[0].var371)
             

///

                this.ti1 = parseInt(response.data[0].var372) + parseInt(response.data[0].var373) + parseInt(response.data[0].var374) +parseInt(response.data[0].var375)
                this.ti2 = parseInt(response.data[0].var376) + parseInt(response.data[0].var377) + parseInt(response.data[0].var378) +parseInt(response.data[0].var379)
                this.ti3 = parseInt(response.data[0].var380) + parseInt(response.data[0].var381) + parseInt(response.data[0].var382) +parseInt(response.data[0].var383)
                this.ti4 = parseInt(response.data[0].var384) + parseInt(response.data[0].var385) + parseInt(response.data[0].var386) +parseInt(response.data[0].var387)

                this.ti5 = parseInt(response.data[0].var388) + parseInt(response.data[0].var389) + parseInt(response.data[0].var390) +parseInt(response.data[0].var391)
                this.ti6 = parseInt(response.data[0].var392) + parseInt(response.data[0].var393) + parseInt(response.data[0].var394) +parseInt(response.data[0].var395)
                this.ti7 = parseInt(response.data[0].var396) + parseInt(response.data[0].var397) + parseInt(response.data[0].var398) +parseInt(response.data[0].var399)
                this.ti8 = parseInt(response.data[0].var400) + parseInt(response.data[0].var401) + parseInt(response.data[0].var402) +parseInt(response.data[0].var403)

                this.ti9 = parseInt(response.data[0].var404) + parseInt(response.data[0].var405) + parseInt(response.data[0].var406) +parseInt(response.data[0].var407)
                this.ti10 = parseInt(response.data[0].var408) + parseInt(response.data[0].var409) + parseInt(response.data[0].var410) +parseInt(response.data[0].var411)
                this.ti11 = parseInt(response.data[0].var412) + parseInt(response.data[0].var413) + parseInt(response.data[0].var414) +parseInt(response.data[0].var415)

                this.ti12 = parseInt(response.data[0].var416) + parseInt(response.data[0].var417) + parseInt(response.data[0].var418) +parseInt(response.data[0].var419)
                this.ti13 = parseInt(response.data[0].var420) + parseInt(response.data[0].var421) + parseInt(response.data[0].var422) +parseInt(response.data[0].var423)
                this.ti14 = parseInt(response.data[0].var424) + parseInt(response.data[0].var425) + parseInt(response.data[0].var426) +parseInt(response.data[0].var427)

                this.ti15 = parseInt(response.data[0].var428) + parseInt(response.data[0].var429) + parseInt(response.data[0].var430) +parseInt(response.data[0].var431)
                this.ti16 = parseInt(response.data[0].var432) + parseInt(response.data[0].var433) + parseInt(response.data[0].var434) +parseInt(response.data[0].var435)
                this.ti17 = parseInt(response.data[0].var436) + parseInt(response.data[0].var437) + parseInt(response.data[0].var438) +parseInt(response.data[0].var439)
                this.ti18 = parseInt(response.data[0].var440) + parseInt(response.data[0].var441) + parseInt(response.data[0].var442) +parseInt(response.data[0].var443)
                this.ti19 = parseInt(response.data[0].var444) + parseInt(response.data[0].var445) + parseInt(response.data[0].var446) +parseInt(response.data[0].var447)
                this.ti20 = parseInt(response.data[0].var448) + parseInt(response.data[0].var449) + parseInt(response.data[0].var450) +parseInt(response.data[0].var451)
             
             
             ////

                this.tj1 = parseInt(response.data[0].var452) + parseInt(response.data[0].var453) + parseInt(response.data[0].var454) +parseInt(response.data[0].var455)
                this.tj2 = parseInt(response.data[0].var456) + parseInt(response.data[0].var457) + parseInt(response.data[0].var458) +parseInt(response.data[0].var459)
                this.tj3 = parseInt(response.data[0].var460) + parseInt(response.data[0].var461) + parseInt(response.data[0].var462) +parseInt(response.data[0].var463)
                this.tj4 = parseInt(response.data[0].var464) + parseInt(response.data[0].var465) + parseInt(response.data[0].var466) +parseInt(response.data[0].var467)

                this.tj5 = parseInt(response.data[0].var468) + parseInt(response.data[0].var469) + parseInt(response.data[0].var470) +parseInt(response.data[0].var471)
                this.tj6 = parseInt(response.data[0].var472) + parseInt(response.data[0].var473) + parseInt(response.data[0].var474) +parseInt(response.data[0].var475)
              


            ///

                this.total5 = parseInt(response.data[0].var478) + parseInt(response.data[0].var482) + parseInt(response.data[0].var486)
                this.total7 = parseInt(response.data[0].var479) + parseInt(response.data[0].var483) + parseInt(response.data[0].var487)
                this.total9 = parseInt(response.data[0].var480) + parseInt(response.data[0].var484) + parseInt(response.data[0].var488)
                this.total11 = parseInt(response.data[0].var481) + parseInt(response.data[0].var485) + parseInt(response.data[0].var489)
             
                this.total6 = parseInt(response.data[0].var490) + parseInt(response.data[0].var494) + parseInt(response.data[0].var498)
                this.total8 = parseInt(response.data[0].var491) + parseInt(response.data[0].var495) + parseInt(response.data[0].var499)
                this.total10 = parseInt(response.data[0].var492) + parseInt(response.data[0].var496) + parseInt(response.data[0].var500)
                this.total12 = parseInt(response.data[0].var493) + parseInt(response.data[0].var497) + parseInt(response.data[0].var501)
             


///

                this.tK1 = parseInt(response.data[0].var478) + parseInt(response.data[0].var479) + parseInt(response.data[0].var480) +parseInt(response.data[0].var481)
                this.tK2 = parseInt(response.data[0].var482) + parseInt(response.data[0].var483) + parseInt(response.data[0].var484) +parseInt(response.data[0].var485)
                this.tK3 = parseInt(response.data[0].var486) + parseInt(response.data[0].var487) + parseInt(response.data[0].var488) +parseInt(response.data[0].var489)
                this.tK4 = parseInt(this.tK1) + parseInt(this.tK2) + parseInt(this.tK3) 
                this.tK5 = parseInt(response.data[0].var490) + parseInt(response.data[0].var491) + parseInt(response.data[0].var492) +parseInt(response.data[0].var493)
                this.tK6 = parseInt(response.data[0].var494) + parseInt(response.data[0].var495) + parseInt(response.data[0].var496) +parseInt(response.data[0].var497)
                this.tK7 = parseInt(response.data[0].var498) + parseInt(response.data[0].var499) + parseInt(response.data[0].var500) +parseInt(response.data[0].var501)
                this.tK8 = parseInt(this.tK1) + parseInt(this.tK2) + parseInt(this.tK3) 
                this.tK9 = parseInt(response.data[0].var502) + parseInt(response.data[0].var503) + parseInt(response.data[0].var504) +parseInt(response.data[0].var505)

  

            })
        },
    },
    
    
})
</script>

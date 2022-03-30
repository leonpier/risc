
<template>
    <v-row >
        <v-col md="8">
            <h1 class="text-center">REPORTE DE ACTIVIDADADES DE SALUD OCULAR</h1>
            <v-simple-table dense >
                <template v-slot:default>
                    <thead>
                    </thead>
                    <tbody>
                             <tr class="tthh10">
                          
                            <th class="text-center" colspan="3">
                                TAMIZAJE Y SEGUIMIENTO DEL RECIÉN NACIDO CON FACTORES DE RIESGO PARA RETINOPATÍA DE LA PREMATURIDAD
                            </th>
                         
                            <th class="text-left">
                                U. MEDIDA
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                menor 1 mes
                            </th>
                            <th class="text-left">
                                 1 mes
                            </th>
                            <th class="text-left">
                                 2 meses
                            </th>
                         
                        </tr>
                        
                        <tr>
                            <td colspan="3" rowspan="2"  ><b>Tamizaje de recien nacidos con factores de riesgos</b></td>
                            <th class="text-center"> normal  </th>
                            <td class="text-center">{{ total1}}</td>
                            <td class="text-center">{{data.var1 ? data.var1 : '-'}}</td>
                            <td class="text-center">{{data.var2 ? data.var2 : '-'}}</td>
                            <td class="text-center">{{data.var3 ? data.var3 : '-'}}</td>    
                       </tr>
                    
                     <tr>
                            <th class="text-center"> anormal  </th>
                            <td class="text-center">{{ total2}}</td>
                            <td class="text-center">{{data.var4 ? data.var4 : '-'}}</td>
                            <td class="text-center">{{data.var5 ? data.var5 : '-'}}</td>
                            <td class="text-center">{{data.var6 ? data.var6 : '-'}}</td>
                          
                       </tr>

                           <tr>
                            <td colspan="3"   ><b>Diagnostico de casos de retinopatía de la prematuridad</b></td>
                            <th class="text-center"> Caso  </th>
                            <td class="text-center">{{ total3}}</td>
                            <td class="text-center">{{data.var7 ? data.var7 : '-'}}</td>
                            <td class="text-center">{{data.var8 ? data.var8 : '-'}}</td>
                            <td class="text-center">{{data.var9 ? data.var9 : '-'}}</td>
                          
                       </tr>
                           <tr>
                            <td colspan="3"   ><b>Tratamiento de casos</b></td>
                            <th class="text-center"> Caso tratado  </th>
                            <td class="text-center">{{ total4}}</td>
                            <td class="text-center">{{data.var10 ? data.var10 : '-'}}</td>
                            <td class="text-center">{{data.var11 ? data.var11 : '-'}}</td>
                            <td class="text-center">{{data.var12 ? data.var12 : '-'}}</td>
                          
                       </tr>

                           <tr>
                            <td colspan="3"   ><b>Complicaciones de tratamiento</b></td>
                            <th class="text-center"> Caso   </th>
                            <td class="text-center">{{ total5}}</td>
                            <td class="text-center">{{data.var13 ? data.var13 : '-'}}</td>
                            <td class="text-center">{{data.var14 ? data.var14 : '-'}}</td>
                            <td class="text-center">{{data.var15 ? data.var15 : '-'}}</td>
                          
                       </tr>
                           <tr>
                            <td colspan="3"   ><b>Control Post Operatorio de recién nacidos</b></td>
                            <th class="text-center"> control   </th>
                            <td class="text-center">{{ total6}}</td>
                            <td class="text-center">{{data.var16 ? data.var16 : '-'}}</td>
                            <td class="text-center">{{data.var17 ? data.var17 : '-'}}</td>
                            <td class="text-center">{{data.var18 ? data.var18 : '-'}}</td>
                          
                       </tr>
                       
                       <br>
                           
                        <tr class="tthh10">
                          
                            <th class="text-center" colspan="3">
                                EVALUACION VISUAL DE NIÑOS MENORES 3 AÑOS 
                            </th>
                         
                            <th class="text-left">
                                U. MEDIDA
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                menor 1 año
                            </th>
                            <th class="text-left">
                                 1 años
                            </th>
                            <th class="text-left">
                                 2 años
                            </th>
                         
                        </tr>
                    
                         <tr
                         ><td colspan="3" rowspan="2"  >Examen de los Ojos y de la Visión</td>
                            <td class="text-center"> normal  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var19 ? data.var19 : '-'}}</td>
                            <td class="text-center">{{data.var20 ? data.var20 : '-'}}</td>
                            <td class="text-center">{{data.var21 ? data.var21 : '-'}}</td>
                          
                       </tr>

                       <tr>
                            <td class="text-center"> anormal  </td>
                            <td class="text-center">{{ total8}}</td>
                            <td class="text-center">{{data.var22 ? data.var22 : '-'}}</td>
                            <td class="text-center">{{data.var23 ? data.var23: '-'}}</td>
                            <td class="text-center">{{data.var24 ? data.var24 : '-'}}</td>
                          
                       </tr>

<br>
                            
                        <tr class="tthh10">
                          
                            <th class="text-center" colspan="3">
                                TAMIZAJE Y DETECCIÓN DE ERRORES REFRACTIVOS EN NIÑOS
                            </th>
                         
                            <th class="text-left">
                                U. MEDIDA
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                menor 1 año
                            </th>
                            <th class="text-left">
                                 1 -2 años
                            </th>
                            <th class="text-left">
                                 3-11 años
                            </th>
                         
                        </tr>

               <tr>
                            <td class="text-left " colspan="1" rowspan="4"> Tamizaje y Detección de Errores Refractivos en Niños de 3 a 11 años  </td>
                       </tr>   
                            <tr>
                                <td colspan="2"    >Determinación de la Agudeza Visual</td>
                            <td class="text-center" > numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var25 ? data.var25 : '-'}}</td>
                            <td class="text-center">{{data.var26 ? data.var26 : '-'}}</td>
                            <td class="text-center">{{data.var27 ? data.var27 : '-'}}</td>
                          
                       </tr>

                         <tr><td colspan="2" rowspan="2"  class="text-left">Examen de los Ojos y de la Visión</td>
                            <td class="text-center"> normal  </td>
                            <td class="text-center">{{ total1}}</td>
                            <td class="text-center">{{data.var28 ? data.var28 : '-'}}</td>
                            <td class="text-center">{{data.var29 ? data.var29 : '-'}}</td>
                            <td class="text-center">{{data.var30 ? data.var30 : '-'}}</td>
                          
                       </tr>
                    
                     <tr>
                            <td class="text-center" > anormal  </td>
                            <td class="text-center">{{ total2}}</td>
                            <td class="text-center">{{data.var31 ? data.var31 : '-'}}</td>
                            <td class="text-center">{{data.var32 ? data.var32 : '-'}}</td>
                            <td class="text-center">{{data.var33 ? data.var33 : '-'}}</td>
                          
                       </tr>
                       

                       <br>
                           

                           <tr>
                            <td colspan="3"   >Evaluacion de errores refractivos</td>
                            <td class="text-center"> Evaluación   </td>
                            <td class="text-center">{{ total5}}</td>
                            <td class="text-center">{{data.var34 ? data.var34 : '-'}}</td>
                            <td class="text-center">{{data.var35 ? data.var35 : '-'}}</td>
                            <td class="text-center">{{data.var36 ? data.var36 : '-'}}</td>
                          
                       </tr>

                        <tr>
                            <td colspan="3"   >Referencia de errores refractivos </td>
                            <td class="text-center"> Número   </td>
                            <td class="text-center">{{ total6}}</td>
                            <td class="text-center">{{data.var37 ? data.var37 : '-'}}</td>
                            <td class="text-center">{{data.var38 ? data.var38 : '-'}}</td>
                            <td class="text-center">{{data.var39 ? data.var39 : '-'}}</td>
                       </tr>

<br>
<tr>
                      <td class="text-left " colspan="1" rowspan="4"> Diagnostico de Errores Refractivos  </td>
                  </tr>        
                            <tr>
                                <td colspan="2"    >Astigmatismo</td>
                            <td class="text-center" > caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var40 ? data.var40 : '-'}}</td>
                            <td class="text-center">{{data.var41 ? data.var41 : '-'}}</td>
                            <td class="text-center">{{data.var42 ? data.var42 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Hipermetropía</td>
                            <td class="text-center" > caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var43 ? data.var43 : '-'}}</td>
                            <td class="text-center">{{data.var44 ? data.var44 : '-'}}</td>
                            <td class="text-center">{{data.var45 ? data.var45 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Miopía</td>
                            <td class="text-center" > caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var46 ? data.var46 : '-'}}</td>
                            <td class="text-center">{{data.var47 ? data.var47 : '-'}}</td>
                            <td class="text-center">{{data.var48 ? data.var48 : '-'}}</td>
                          
                       </tr>

                       
                       <br>
<tr>
                      <td class="text-left " colspan="1" rowspan="2"> Tratamiento de Errores Refractivos  </td>
                  </tr>        
                      
                       <tr>
                                <td colspan="2"    >Provisión de anteojos</td>
                            <th class="text-center" > niño  </th>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var49 ? data.var49 : '-'}}</td>
                            <td class="text-center">{{data.var50 ? data.var50 : '-'}}</td>
                            <td class="text-center">{{data.var51 ? data.var51 : '-'}}</td>
                       </tr>
                       
                       <br>

                    <tr>
                      <td class="text-left " colspan="1" rowspan="2"> Control de Pacientes con Errores Refractivos  </td>
                    </tr>        
                      
                    <tr>
                            <td colspan="2"    >Prueba y ajuste de anteojos</td>
                            <th class="text-center" > control  </th>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var52 ? data.var52 : '-'}}</td>
                            <td class="text-center">{{data.var53 ? data.var53 : '-'}}</td>
                            <td class="text-center">{{data.var54 ? data.var54 : '-'}}</td>
                    </tr>



<br>
                            
                        <tr class="tthh10">
                          
                            <th class="text-center" colspan="3">
                                TAMIZAJE Y DETECCIÓN DE GLAUCOMA
                            </th>
                         
                            <th class="text-left">
                                U. MEDIDA
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                40-49 años
                            </th>
                            <th class="text-left">
                                 50 -59 años
                            </th>
                            <th class="text-left">
                                 60 +
                            </th>
                        </tr>

             <tr>
                            <td class="text-left " colspan="1" rowspan="3"> Tamizaje de personas con riesgo de glaucoma  </td>
                       </tr>   
                            <tr>
                                <td colspan="2" rowspan="2"   >Examen de los Ojos y de la Visión</td>
                            <td class="text-center" > normal  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var55 ? data.var55 : '-'}}</td>
                            <td class="text-center">{{data.var56 ? data.var56 : '-'}}</td>
                            <td class="text-center">{{data.var57 ? data.var57 : '-'}}</td>
                          
                       </tr>
                     <tr>
                            <td class="text-center" > anormal  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var58 ? data.var58 : '-'}}</td>
                            <td class="text-center">{{data.var59 ? data.var59 : '-'}}</td>
                            <td class="text-center">{{data.var60 ? data.var60 : '-'}}</td>
                     </tr>

                     
                        <tr>
                            <td colspan="3"    >Evaluación de Glaucoma</td>
                            <td class="text-center" > Evaluacion  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var61 ? data.var61 : '-'}}</td>
                            <td class="text-center">{{data.var62 ? data.var62 : '-'}}</td>
                            <td class="text-center">{{data.var63 ? data.var63 : '-'}}</td>
                    </tr>

                  
   <tr>
                            <td class="text-left " colspan="1" rowspan="3"> Determinación de presión intraocular  </td>
                       </tr>   
                            <tr>
                                <td colspan="2" rowspan="2"   >Examen de los Ojos y de la Visión</td>
                            <td class="text-center" > normal  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var64 ? data.var64 : '-'}}</td>
                            <td class="text-center">{{data.var65 ? data.var65 : '-'}}</td>
                            <td class="text-center">{{data.var66 ? data.var66 : '-'}}</td>
                          
                       </tr>
                     <tr>
                            <td class="text-center" > anormal  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var67 ? data.var67 : '-'}}</td>
                            <td class="text-center">{{data.var68 ? data.var68 : '-'}}</td>
                            <td class="text-center">{{data.var69 ? data.var69 : '-'}}</td>
                     </tr>
<br>


    <tr>
                            <td colspan="3"    >Referencia de glaucoma</td>
                            <td class="text-center" > Numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var70 ? data.var70 : '-'}}</td>
                            <td class="text-center">{{data.var71 ? data.var71 : '-'}}</td>
                            <td class="text-center">{{data.var72 ? data.var72 : '-'}}</td>
                    </tr>
<br>


    <tr>
                            <td colspan="3"    >Consejeria en glaucoma</td>
                            <td class="text-center" > Numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var73 ? data.var73 : '-'}}</td>
                            <td class="text-center">{{data.var74 ? data.var74 : '-'}}</td>
                            <td class="text-center">{{data.var75 ? data.var75 : '-'}}</td>
                    </tr>
<br>


    <tr>
                            <td colspan="3"    >Diagnóstico de glaucoma</td>
                            <td class="text-center" > Casos  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var76 ? data.var76 : '-'}}</td>
                            <td class="text-center">{{data.var77 ? data.var77 : '-'}}</td>
                            <td class="text-center">{{data.var78 ? data.var78 : '-'}}</td>
                    </tr>

<br>


                      <tr>
                            <td class="text-left " colspan="1" rowspan="5"> tratamiento de casos  </td>
                       </tr>   
                            <tr>
                                <td colspan="2"    >Reciben tratamiento Laser</td>
                            <td class="text-center" > caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var79 ? data.var79 : '-'}}</td>
                            <td class="text-center">{{data.var80 ? data.var80 : '-'}}</td>
                            <td class="text-center">{{data.var81 ? data.var81 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Reciben tratamiento quirúrgico</td>
                            <td class="text-center" > caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var82 ? data.var82 : '-'}}</td>
                            <td class="text-center">{{data.var83 ? data.var83 : '-'}}</td>
                            <td class="text-center">{{data.var84 ? data.var84 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >ciclodestructivo</td>
                            <td class="text-center" > caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var85 ? data.var85 : '-'}}</td>
                            <td class="text-center">{{data.var86 ? data.var86 : '-'}}</td>
                            <td class="text-center">{{data.var87 ? data.var87 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >FARMACOLOGICO</td>
                            <td class="text-center" > caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var88 ? data.var88 : '-'}}</td>
                            <td class="text-center">{{data.var89 ? data.var89 : '-'}}</td>
                            <td class="text-center">{{data.var90 ? data.var90 : '-'}}</td>
                          
                       </tr>
                
                <br>
                 <tr>
                            <td class="text-left " colspan="1" rowspan="2"> Control de Pacientes  </td>
                       </tr>   
                            <tr>
                                <td colspan="2"    >Atenciones de control</td>
                            <td class="text-center" > Atencion  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var91 ? data.var91 : '-'}}</td>
                            <td class="text-center">{{data.var92 ? data.var92 : '-'}}</td>
                            <td class="text-center">{{data.var93 ? data.var93 : '-'}}</td>
                          
                       </tr>

                       <br>
                       
                           <tr class="tthh10">
                          
                            <th class="text-center" colspan="3">
                                DIAGNÓSTICO DE CEGUERA POR CATARATA
                            </th>
                         
                            <th class="text-left">
                                U. MEDIDA
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                menor 12 años
                            </th>
                            <th class="text-left">
                                 50 -59 años
                            </th>
                            <th class="text-left">
                                 60 +
                            </th>
                        </tr>



                      <tr>
                            <td class="text-left " colspan="1" rowspan="4"> Tamizaje y detección de catarata  </td>
                       </tr>   
                            <tr>
                                <td colspan="2"    >Determinación de la Agudeza Visual</td>
                            <td class="text-center" > numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var94 ? data.var94 : '-'}}</td>
                            <td class="text-center">{{data.var95 ? data.var95 : '-'}}</td>
                            <td class="text-center">{{data.var96 ? data.var96 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Evaluacion de catarata</td>
                            <td class="text-center" > Evaluacion  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var97 ? data.var97 : '-'}}</td>
                            <td class="text-center">{{data.var98 ? data.var98 : '-'}}</td>
                            <td class="text-center">{{data.var99 ? data.var99 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Referencia de catarata</td>
                            <td class="text-center" > numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var100 ? data.var100 : '-'}}</td>
                            <td class="text-center">{{data.var101 ? data.var101 : '-'}}</td>
                            <td class="text-center">{{data.var102 ? data.var102 : '-'}}</td>
                          
                       </tr>


                       <br>


    <tr>
                            <td colspan="3"    >Consejeria por catarata</td>
                            <td class="text-center" > Numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var103 ? data.var103 : '-'}}</td>
                            <td class="text-center">{{data.var104 ? data.var104 : '-'}}</td>
                            <td class="text-center">{{data.var105 ? data.var105 : '-'}}</td>
                    </tr>

                    <br>
                    
                      <tr>
                            <td class="text-left " colspan="1" rowspan="5"> Diagnóstico de casos de catarata  </td>
                       </tr>   
                            <tr>
                                <td colspan="2"    >Casos de catarata senil</td>
                            <td class="text-center" > Caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var106 ? data.var106 : '-'}}</td>
                            <td class="text-center">{{data.var107 ? data.var107 : '-'}}</td>
                            <td class="text-center">{{data.var108 ? data.var108 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Casos de catarata congénita</td>
                            <td class="text-center" > Caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var109 ? data.var109 : '-'}}</td>
                            <td class="text-center">{{data.var110 ? data.var110 : '-'}}</td>
                            <td class="text-center">{{data.var111 ? data.var111 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Casos de catarata infantil</td>
                            <td class="text-center" > Caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var112 ? data.var112 : '-'}}</td>
                            <td class="text-center">{{data.var113 ? data.var113 : '-'}}</td>
                            <td class="text-center">{{data.var114 ? data.var114 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Casos de otras cataratas</td>
                            <td class="text-center" > Caso  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var115 ? data.var115 : '-'}}</td>
                            <td class="text-center">{{data.var116 ? data.var116 : '-'}}</td>
                            <td class="text-center">{{data.var117 ? data.var117 : '-'}}</td>
                          
                       </tr>

                       <br>

                      <tr>
                            <td class="text-left " colspan="1" rowspan="4"> Tratamiento de casos de catarata  </td>
                       </tr>   
                            <tr>
                                <td colspan="2"    >Facofragmentación (facoemulsificación) con aspiración</td>
                            <td class="text-center" > procedimiento  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var118 ? data.var118 : '-'}}</td>
                            <td class="text-center">{{data.var119 ? data.var119 : '-'}}</td>
                            <td class="text-center">{{data.var120 ? data.var120 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Extracción extracapsular de Catarata con implente de lente intraocular</td>
                            <td class="text-center" > procedimiento  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var121 ? data.var121 : '-'}}</td>
                            <td class="text-center">{{data.var122 ? data.var122 : '-'}}</td>
                            <td class="text-center">{{data.var123 ? data.var123 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Mininuc con implante de lente intraocular (LIO)</td>
                            <td class="text-center" > procedimiento  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var124 ? data.var124 : '-'}}</td>
                            <td class="text-center">{{data.var125 ? data.var125 : '-'}}</td>
                            <td class="text-center">{{data.var126 ? data.var126 : '-'}}</td>
                          
                       </tr>





                    <br>
                    
                      <tr>
                            <td class="text-left " colspan="1" rowspan="5"> Control Post operatorio  </td>
                       </tr>   
                            <tr>
                                <td colspan="2"    >Pacientes con 1º Control Post Operatorio</td>
                            <td class="text-center" > control  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var127 ? data.var127 : '-'}}</td>
                            <td class="text-center">{{data.var128 ? data.var128 : '-'}}</td>
                            <td class="text-center">{{data.var129 ? data.var129 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Pacientes con 2º Control Post Operatorio</td>
                            <td class="text-center" > control  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var130 ? data.var130 : '-'}}</td>
                            <td class="text-center">{{data.var131 ? data.var131 : '-'}}</td>
                            <td class="text-center">{{data.var132 ? data.var132 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Pacientes con 3º Control Post Operatorio</td>
                            <td class="text-center" > control  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var133 ? data.var133 : '-'}}</td>
                            <td class="text-center">{{data.var134 ? data.var134 : '-'}}</td>
                            <td class="text-center">{{data.var135 ? data.var135 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Pacientes con 4º Control Post Operatorio</td>
                            <td class="text-center" > control  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var136 ? data.var136 : '-'}}</td>
                            <td class="text-center">{{data.var137 ? data.var137 : '-'}}</td>
                            <td class="text-center">{{data.var138 ? data.var138 : '-'}}</td>
                          
                       </tr>

                             <br>

                    <tr>
                      <td class="text-left " colspan="1" rowspan="2"> Control de Pacientes </td>
                    </tr>        
                      
                    <tr>
                            <td colspan="2"    >Atenciones de control</td>
                            <th class="text-center" > control  </th>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var139 ? data.var139 : '-'}}</td>
                            <td class="text-center">{{data.var140 ? data.var140 : '-'}}</td>
                            <td class="text-center">{{data.var141 ? data.var141 : '-'}}</td>
                    </tr>



    <br>
                       
                           <tr class="tthh10">
                          
                            <th class="text-center" colspan="3">
                                DETECCION DE PERSONAS CON DIABETES MELLITUS CON RIESGO DE RETINOPATIA DIABETICA
                            </th>
                         
                            <th class="text-left">
                                U. MEDIDA
                            </th>
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                18-29 a
                            </th>
                            <th class="text-left">
                                 30 -59 años
                            </th>
                            <th class="text-left">
                                 60 +
                            </th>
                        </tr>

                    <tr>
                            <td colspan="3"    >Deteccion de Retinopatía Diabética</td>
                            <td class="text-center" > Numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var142 ? data.var142 : '-'}}</td>
                            <td class="text-center">{{data.var143 ? data.var143 : '-'}}</td>
                            <td class="text-center">{{data.var144 ? data.var144 : '-'}}</td>
                    </tr>
<br>
                   <tr>
                            <td colspan="3"    >Evaluación de Retinopatía Diabética</td>
                            <td class="text-center" > Numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var145 ? data.var145 : '-'}}</td>
                            <td class="text-center">{{data.var146 ? data.var146 : '-'}}</td>
                            <td class="text-center">{{data.var147 ? data.var147 : '-'}}</td>
                    </tr>

<br>

                         <tr
                         ><td colspan="3" rowspan="2"  >Retinografia</td>
                            <td class="text-center"> normal  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var148 ? data.var148 : '-'}}</td>
                            <td class="text-center">{{data.var149 ? data.var149 : '-'}}</td>
                            <td class="text-center">{{data.var150 ? data.var150 : '-'}}</td>
                          
                       </tr>

                       <tr>
                            <td class="text-center"> anormal  </td>
                            <td class="text-center">{{ total8}}</td>
                            <td class="text-center">{{data.var151 ? data.var151 : '-'}}</td>
                            <td class="text-center">{{data.var152 ? data.var152: '-'}}</td>
                            <td class="text-center">{{data.var153 ? data.var153 : '-'}}</td>
                          
                       </tr>
            <br>
              <tr>
                            <td colspan="3"    >Referencia de retinopatia diabetica</td>
                            <td class="text-center" > Numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var154 ? data.var154 : '-'}}</td>
                            <td class="text-center">{{data.var155 ? data.var155 : '-'}}</td>
                            <td class="text-center">{{data.var156 ? data.var156 : '-'}}</td>
                    </tr>
            <br>
              <tr>
                            <td colspan="3"    >DX Casos de retinopatía diabética</td>
                            <td class="text-center" > Numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var154 ? data.var154 : '-'}}</td>
                            <td class="text-center">{{data.var155 ? data.var155 : '-'}}</td>
                            <td class="text-center">{{data.var156 ? data.var156 : '-'}}</td>
                    </tr>

     <br>

                      <tr>
                            <td class="text-left " colspan="1" rowspan="4"> Tratamiento de casos  </td>
                       </tr>   
                            <tr>
                                <td colspan="2"    >Terapia Laser</td>
                            <td class="text-center" > procedimiento  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var160 ? data.var160 : '-'}}</td>
                            <td class="text-center">{{data.var161 ? data.var161 : '-'}}</td>
                            <td class="text-center">{{data.var162 ? data.var162 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Terapia intravítrea</td>
                            <td class="text-center" > procedimiento  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var163 ? data.var163 : '-'}}</td>
                            <td class="text-center">{{data.var164 ? data.var164 : '-'}}</td>
                            <td class="text-center">{{data.var165 ? data.var165 : '-'}}</td>
                          
                       </tr>
                            <tr>
                                <td colspan="2"    >Cirugía vítrea</td>
                            <td class="text-center" > procedimiento  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var166 ? data.var166 : '-'}}</td>
                            <td class="text-center">{{data.var167 ? data.var167 : '-'}}</td>
                            <td class="text-center">{{data.var168 ? data.var168 : '-'}}</td>
                          
                       </tr>

    <br>
              <tr>

                            <td colspan="3"    >Atenciones de control</td>
                            <td class="text-center" > Numero  </td>
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var154 ? data.var154 : '-'}}</td>
                            <td class="text-center">{{data.var155 ? data.var155 : '-'}}</td>
                            <td class="text-center">{{data.var156 ? data.var156 : '-'}}</td>
                    </tr>



    <br>
                       
                           <tr class="tthh10">
                          
                            <th class="text-center" colspan="3">
                                ENFERMEDADES EXTERNAS DEL OJO
                            </th>
                         
                           
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                0-11 A
                            </th>
                            <th class="text-left">
                                12-17 A
                            </th>
                            <th class="text-left">
                                 18 -29 años
                            </th>
                            <th class="text-left">
                                 MAYOR 30
                            </th>
                        </tr>

                    <tr>

                            <td colspan="3"    >ORZUELO</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var172 ? data.var172 : '-'}}</td>
                            <td class="text-center">{{data.var173 ? data.var173 : '-'}}</td>
                            <td class="text-center">{{data.var174 ? data.var174 : '-'}}</td>
                            <td class="text-center">{{data.var175 ? data.var175 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >CHALAZION</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var176 ? data.var176 : '-'}}</td>
                            <td class="text-center">{{data.var177 ? data.var177 : '-'}}</td>
                            <td class="text-center">{{data.var178 ? data.var178 : '-'}}</td>
                            <td class="text-center">{{data.var179 ? data.var179 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >Blefaritis</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var180 ? data.var180 : '-'}}</td>
                            <td class="text-center">{{data.var181 ? data.var181 : '-'}}</td>
                            <td class="text-center">{{data.var182 ? data.var182 : '-'}}</td>
                            <td class="text-center">{{data.var183 ? data.var183 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >CONJUNTIVISTIS</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var184 ? data.var184 : '-'}}</td>
                            <td class="text-center">{{data.var185 ? data.var185 : '-'}}</td>
                            <td class="text-center">{{data.var186 ? data.var186 : '-'}}</td>
                            <td class="text-center">{{data.var187 ? data.var187 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >CONJUNTIVISTIS_ATOPICA</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var188 ? data.var188 : '-'}}</td>
                            <td class="text-center">{{data.var189 ? data.var189 : '-'}}</td>
                            <td class="text-center">{{data.var190 ? data.var190 : '-'}}</td>
                            <td class="text-center">{{data.var191 ? data.var191 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >OTRAS_CONJUNTIVITIS_AGUDAS</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var192 ? data.var192 : '-'}}</td>
                            <td class="text-center">{{data.var193 ? data.var193 : '-'}}</td>
                            <td class="text-center">{{data.var194 ? data.var194 : '-'}}</td>
                            <td class="text-center">{{data.var195 ? data.var195 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >CONJUNTIVITIS_AGUDA_NO_ESPECIFICADA</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var196 ? data.var196 : '-'}}</td>
                            <td class="text-center">{{data.var197 ? data.var197 : '-'}}</td>
                            <td class="text-center">{{data.var198 ? data.var198 : '-'}}</td>
                            <td class="text-center">{{data.var199 ? data.var199 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >CONJUNTIVITIS_CRONICA</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var200 ? data.var200 : '-'}}</td>
                            <td class="text-center">{{data.var201 ? data.var201 : '-'}}</td>
                            <td class="text-center">{{data.var202 ? data.var202 : '-'}}</td>
                            <td class="text-center">{{data.var203 ? data.var203 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >BLEFAROCONJUNTIVITIS</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var204 ? data.var204 : '-'}}</td>
                            <td class="text-center">{{data.var205 ? data.var205 : '-'}}</td>
                            <td class="text-center">{{data.var206 ? data.var206 : '-'}}</td>
                            <td class="text-center">{{data.var207 ? data.var207 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >OTRAS_CONJUNTIVITIS</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var208 ? data.var208 : '-'}}</td>
                            <td class="text-center">{{data.var209 ? data.var209 : '-'}}</td>
                            <td class="text-center">{{data.var210 ? data.var210 : '-'}}</td>
                            <td class="text-center">{{data.var211 ? data.var211 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >CONJUNTIVITIS_ESPECIFICADA</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var212 ? data.var212 : '-'}}</td>
                            <td class="text-center">{{data.var213 ? data.var213 : '-'}}</td>
                            <td class="text-center">{{data.var214 ? data.var214 : '-'}}</td>
                            <td class="text-center">{{data.var215 ? data.var215 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >PTERIGION</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var216 ? data.var216 : '-'}}</td>
                            <td class="text-center">{{data.var217 ? data.var217 : '-'}}</td>
                            <td class="text-center">{{data.var218 ? data.var218 : '-'}}</td>
                            <td class="text-center">{{data.var219 ? data.var219 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >QUERATOCONO</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var220 ? data.var220 : '-'}}</td>
                            <td class="text-center">{{data.var221 ? data.var221 : '-'}}</td>
                            <td class="text-center">{{data.var222 ? data.var222 : '-'}}</td>
                            <td class="text-center">{{data.var223 ? data.var223 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >OTRAS_QUERATITIS_SUPERFICIALES_SIN_CONJUNTIVITIS</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var224 ? data.var224 : '-'}}</td>
                            <td class="text-center">{{data.var225 ? data.var225 : '-'}}</td>
                            <td class="text-center">{{data.var226 ? data.var226 : '-'}}</td>
                            <td class="text-center">{{data.var227 ? data.var227 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >OTRAS_QUERATITIS_SUPERFICIALES_SIN_CONJUNTIVITIS</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var228 ? data.var228 : '-'}}</td>
                            <td class="text-center">{{data.var229 ? data.var229 : '-'}}</td>
                            <td class="text-center">{{data.var230 ? data.var230 : '-'}}</td>
                            <td class="text-center">{{data.var231 ? data.var231 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >OTRAS_QUERATITIS</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var232 ? data.var232 : '-'}}</td>
                            <td class="text-center">{{data.var233 ? data.var233 : '-'}}</td>
                            <td class="text-center">{{data.var234 ? data.var234 : '-'}}</td>
                            <td class="text-center">{{data.var235 ? data.var235 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >DEGENERACION_DE_LA_MACULA</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var236 ? data.var236 : '-'}}</td>
                            <td class="text-center">{{data.var237 ? data.var237 : '-'}}</td>
                            <td class="text-center">{{data.var238 ? data.var238 : '-'}}</td>
                            <td class="text-center">{{data.var239 ? data.var239 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >INFLAMACION_LAGRIMALES</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var240 ? data.var240 : '-'}}</td>
                            <td class="text-center">{{data.var241 ? data.var241 : '-'}}</td>
                            <td class="text-center">{{data.var242 ? data.var242 : '-'}}</td>
                            <td class="text-center">{{data.var243 ? data.var243 : '-'}}</td>
                    </tr>
                    <tr>

                            <td colspan="3"    >INFLAMACION_CRONICA_LAGRIMALES</td>
                         
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var244 ? data.var244 : '-'}}</td>
                            <td class="text-center">{{data.var245 ? data.var245 : '-'}}</td>
                            <td class="text-center">{{data.var246 ? data.var246 : '-'}}</td>
                            <td class="text-center">{{data.var247 ? data.var247 : '-'}}</td>
                    </tr>

                    <br>
                  
    
                       
                           <tr class="tthh10">
                          
                            <th class="text-center" colspan="3">
                                DETECCION DE PERSONAS CON TRACOMA
                            </th>
                         
                           
                            <th class="text-left">
                                TOTAL
                            </th>
                            <th class="text-left">
                                0-11 A
                            </th>
                            <th class="text-left">
                                12-17 A
                            </th>
                            <th class="text-left">
                                 18 -29 años
                            </th>
                            <th class="text-left">
                                 MAYOR 30
                            </th>
                        </tr>


                    <tr>
                      <td class="text-left " colspan="1" rowspan="2"> Diagnóstico de casos  </td>
                    </tr>        
                      
                    <tr>
                            <td colspan="2"    >Casos de tracoma</td>
                           
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var244 ? data.var244 : '-'}}</td>
                            <td class="text-center">{{data.var245 ? data.var245 : '-'}}</td>
                            <td class="text-center">{{data.var246 ? data.var246 : '-'}}</td>
                            <td class="text-center">{{data.var247 ? data.var247 : '-'}}</td>
                    </tr>


                    <tr>
                      <td class="text-left " colspan="1" rowspan="2"> Tratamiento de casos  </td>
                    </tr>        
                      
                    <tr>
                            <td colspan="2">Tratamiento farmacológico</td>
                           
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var248 ? data.var248 : '-'}}</td>
                            <td class="text-center">{{data.var249 ? data.var249 : '-'}}</td>
                            <td class="text-center">{{data.var250 ? data.var250 : '-'}}</td>
                            <td class="text-center">{{data.var251 ? data.var251 : '-'}}</td>
                    </tr>
                    <tr>
                      <td class="text-left " colspan="1" rowspan="2"> Control de Pacientes  </td>
                    </tr>        
                      
                    <tr>
                            <td colspan="2">Atenciones de control</td>
                           
                            <td class="text-center">{{ total7}}</td>
                            <td class="text-center">{{data.var252 ? data.var252 : '-'}}</td>
                            <td class="text-center">{{data.var253 ? data.var253 : '-'}}</td>
                            <td class="text-center">{{data.var254 ? data.var254 : '-'}}</td>
                            <td class="text-center">{{data.var255 ? data.var255 : '-'}}</td>
                    </tr>




                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
 
    </v-row>
</template>

<style>

.tthh10
{
 color: rgb(253, 253, 253) !important;
  background-color: rgba(13, 155, 238, 0.925);
}

table {
  border-collapse: collapse;
  width: 100%;
}

table,th, td {
   padding: 8px;
  text-align: center;
  border-bottom: 1px solid rgb(15, 13, 13);
  
}

td:hover {background-color: rgb(220, 247, 67);}

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
            await this.axios.get(this.$api_url + '/reporte/' + this.tabla + '/1-265',{
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
                this.total1 = parseInt(response.data[0].var1) + parseInt(response.data[0].var2) + parseInt(response.data[0].var3)
                this.total2 = parseInt(response.data[0].var4) + parseInt(response.data[0].var5) + parseInt(response.data[0].var6)
                this.total3 = parseInt(response.data[0].var7) + parseInt(response.data[0].var8) + parseInt(response.data[0].var9)
                this.total4 = parseInt(response.data[0].var10) + parseInt(response.data[0].var11) + parseInt(response.data[0].var12)
                this.total5 = parseInt(response.data[0].var13) + parseInt(response.data[0].var14) + parseInt(response.data[0].var15)
                this.total6 = parseInt(response.data[0].var16) + parseInt(response.data[0].var17) + parseInt(response.data[0].var18)


                this.total7 = parseInt(response.data[0].var19) + parseInt(response.data[0].var20) + parseInt(response.data[0].var21)
                this.total8 = parseInt(response.data[0].var22) + parseInt(response.data[0].var23) + parseInt(response.data[0].var24)


             
                    this.ta4 = parseInt(this.ta1) + parseInt(this.ta2) + parseInt(this.ta3) 
            })
        },
    },
    
    
})
</script>


<template>
    <v-row >
        <v-col md="9">
           <v-simple-table dense>
               <template v-slot:default>
                   <thead >
                       <tr>

                           <th class="text-center tth2"  rowspan="3" colspan="2" >
                               METODO
                           </th>
                         
                           <th class="text-center tth2"  rowspan="3" colspan="1" >
                               Tipo de Usuaria
                           </th>

                           <th class="text-center tth2"   colspan="2" >
                               TOTAL
                           </th>

                           <th class="text-center tth2"   colspan="2" >
                               12 a 17 a.
                           </th>
                           <th class="text-center tth2"   colspan="2" >
                               18 a 29 a
                           </th>
                           <th class="text-center tth2"   colspan="2" >
                               30 a 59 a
                           </th>
                           <th class="text-center tth2"   colspan="2" >
                               > 60 a.
                           </th>
                           <th class="text-center tth2"   rowspan="3" colspan="1" >
                               Usuaria Captada para PF
                           </th>
                           <th class="text-center tth2"   rowspan="3" colspan="1" >
                               Embarazo por Falla de Método
                           </th>
                         
                    </tr>
                        <tr>

                             <th class="text-CENTER tth2" >
                               NUEVAS
                           </th>

                             <th class="text-CENTER tth2" >
                               Continuadoras
                           </th>

                             <th class="text-CENTER tth2" >
                               Nuevas
                           </th>

                             <th class="text-CENTER tth2" >
                               Continuadoras
                           </th>

                             <th class="text-CENTER tth2" >
                               Nuevas
                           </th>

                             <th class="text-CENTER tth2" >
                               Continuadoras
                           </th>

                             <th class="text-CENTER tth2" >
                               Nuevas
                           </th>

                             <th class="text-CENTER tth2" >
                               Continuadoras
                           </th>

                             <th class="text-CENTER tth2" >
                               Nuevas
                           </th>

                             <th class="text-CENTER tth2" >
                               Continuadoras
                           </th>
                        </tr>

                   </thead>
                   <tbody>
                       <tr>
                           <td class="text-center "  rowspan="2" colspan="2" >
                               TOTAL
                           </td>
                           <td class="text-center "  >
                               A
                           </td>
                        <td class="text-center">{{ta1}}</td>
                        <td class="text-center">{{ta2}}</td>
                        <td class="text-center">{{total1}}</td>
                        <td class="text-center">{{total2}}</td>
                        <td class="text-center">{{total3}}</td>
                        <td class="text-center">{{total4}}</td>
                        <td class="text-center">{{total5}}</td>
                        <td class="text-center">{{total6}}</td>
                        <td class="text-center">{{total7}}</td>
                        <td class="text-center">{{total8}}</td>
                        <td class="text-center">{{total9}}</td>
                        <td class="text-center">{{total10}}</td>
                
                        

                       </tr>                       
                       <tr>
                           
                           <td class="text-center tth3 "  >
                               I
                           </td>
                        <td class="text-center tth3">{{ta3}}</td>
                        <td class="text-center tth3">{{ta4}}</td>
                        <td class="text-center tth3">{{total1B}}</td>
                        <td class="text-center tth3">{{total2B}}</td>
                        <td class="text-center tth3">{{total3B}}</td>
                        <td class="text-center tth3">{{total4B}}</td>
                        <td class="text-center tth3">{{total5B}}</td>
                        <td class="text-center tth3">{{total6B}}</td>
                        <td class="text-center tth3">{{total7B}}</td>
                        <td class="text-center tth3">{{total8B}}</td>
                      
                
                        

                       </tr>       


                          <tr>
                           <td class="text-center " rowspan="2"  >
                               DIU
                           </td>
                           <td class="text-center " rowspan="2" >
                               DIU
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta5}}</td>
                        <td class="text-center">{{ta6}}</td>
                        <td class="text-center">{{data.var1 ? data.var1 : "-"}}</td>
                        <td class="text-center">{{data.var2 ? data.var2 : "-"}}</td>
                        <td class="text-center">{{data.var3 ? data.var3 : "-"}}</td>
                        <td class="text-center">{{data.var4 ? data.var4 : "-"}}</td>
                        <td class="text-center">{{data.var5 ? data.var5 : "-"}}</td>
                        <td class="text-center">{{data.var6 ? data.var6 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                         <td class="text-center">{{data.var13 ? data.var13 : "-"}}</td>
                         <td class="text-center">{{data.var14 ? data.var14 : "-"}}</td>
                    


                       </tr>    


                                  <tr>
                           <td class="text-center tth3 " >
                               I
                           </td>
                        <td class="text-center tth3 ">{{ta7}}</td>
                        <td class="text-center tth3 ">{{ta8}}</td>

                        <td class="text-center tth3">{{data.var7 ? data.var7 : "-"}}</td>
                        <td class="text-center tth3">{{data.var8 ? data.var8 : "-"}}</td>
                        <td class="text-center tth3">{{data.var9 ? data.var9 : "-"}}</td>
                        <td class="text-center tth3">{{data.var10 ? data.var10 : "-"}}</td>
                        <td class="text-center tth3">{{data.var11 ? data.var11 : "-"}}</td>
                        <td class="text-center tth3">{{data.var12 ? data.var12 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                     
                        <td class="text-center ">{{ }}</td>
                        <td class="text-center ">{{ }}</td>
                      

                       </tr>   
                     



                          <tr>
                           <td class="text-center " rowspan="8"  >
                               HORMONAL
                           </td>
                           <td class="text-center " rowspan="2" >
                               ORAL COMBINADO
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta9}}</td>
                        <td class="text-center">{{ta10}}</td>
              
                        <td class="text-center">{{data.var15 ? data.var15 : "-"}}</td>
                        <td class="text-center">{{data.var16 ? data.var16 : "-"}}</td>
                        <td class="text-center">{{data.var17 ? data.var17 : "-"}}</td>
                        <td class="text-center">{{data.var18 ? data.var18 : "-"}}</td>
                        <td class="text-center">{{data.var19 ? data.var19 : "-"}}</td>
                        <td class="text-center">{{data.var20 ? data.var20 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                         <td class="text-center">{{data.var27 ? data.var27 : "-"}}</td>
                         <td class="text-center">{{data.var28 ? data.var28 : "-"}}</td>
                    


                       </tr>    


                                  <tr>
                           <td class="text-center tth3 " >
                               I
                           </td>
                        <td class="text-center tth3 ">{{ta11}}</td>
                        <td class="text-center tth3 ">{{ta12}}</td>

                        <td class="text-center tth3">{{data.var21 ? data.var21 : "-"}}</td>
                        <td class="text-center tth3">{{data.var22 ? data.var22 : "-"}}</td>
                        <td class="text-center tth3">{{data.var23 ? data.var23 : "-"}}</td>
                        <td class="text-center tth3">{{data.var24 ? data.var24 : "-"}}</td>
                        <td class="text-center tth3">{{data.var25 ? data.var25 : "-"}}</td>
                        <td class="text-center tth3">{{data.var26 ? data.var26 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                     
                        <td class="text-center ">{{ }}</td>
                        <td class="text-center ">{{ }}</td>
                      

                       </tr>   




                          <tr>
                         
                           <td class="text-center " rowspan="2" >
                               INYECTABLE TRIMESTRAL
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta13}}</td>
                        <td class="text-center">{{ta14}}</td>
              
                        <td class="text-center">{{data.var29 ? data.var29 : "-"}}</td>
                        <td class="text-center">{{data.var30 ? data.var30 : "-"}}</td>
                        <td class="text-center">{{data.var31 ? data.var31 : "-"}}</td>
                        <td class="text-center">{{data.var32 ? data.var32 : "-"}}</td>
                        <td class="text-center">{{data.var33 ? data.var19 : "-"}}</td>
                        <td class="text-center">{{data.var34 ? data.var20 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                         <td class="text-center">{{data.var41 ? data.var41 : "-"}}</td>
                         <td class="text-center">{{data.var35 ? data.var35 : "-"}}</td>
            


                       </tr>    


                                  <tr>
                           <td class="text-center tth3 " >
                               I
                           </td>
                        <td class="text-center tth3 ">{{ta15}}</td>
                        <td class="text-center tth3 ">{{ta16}}</td>

                        <td class="text-center tth3">{{data.var35 ? data.var35 : "-"}}</td>
                        <td class="text-center tth3">{{data.var36 ? data.var36 : "-"}}</td>
                        <td class="text-center tth3">{{data.var37 ? data.var37 : "-"}}</td>
                        <td class="text-center tth3">{{data.var38 ? data.var38 : "-"}}</td>
                        <td class="text-center tth3">{{data.var39 ? data.var39 : "-"}}</td>
                        <td class="text-center tth3">{{data.var40 ? data.var40 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                     
                        <td class="text-center ">{{ }}</td>
                        <td class="text-center ">{{ }}</td>
                      

                       </tr>   
                          <tr>
                         
                           <td class="text-center " rowspan="2" >
                               INYECTABLE MENSUAL
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta17}}</td>
                        <td class="text-center">{{ta18}}</td>
              
                        <td class="text-center">{{data.var43 ? data.var43 : "-"}}</td>
                        <td class="text-center">{{data.var44 ? data.var44 : "-"}}</td>
                        <td class="text-center">{{data.var45 ? data.var45 : "-"}}</td>
                        <td class="text-center">{{data.var46 ? data.var46 : "-"}}</td>
                        <td class="text-center">{{data.var47 ? data.var47 : "-"}}</td>
                        <td class="text-center">{{data.var48 ? data.var48 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                         <td class="text-center">{{data.var55 ? data.var55 : "-"}}</td>
                         <td class="text-center">{{data.var56 ? data.var56 : "-"}}</td>
            


                       </tr>  


                                  <tr>
                           <td class="text-center tth3 " >
                               I
                           </td>
                        <td class="text-center tth3 ">{{ta19}}</td>
                        <td class="text-center tth3 ">{{ta20}}</td>

                        <td class="text-center tth3">{{data.var49 ? data.var49 : "-"}}</td>
                        <td class="text-center tth3">{{data.var50 ? data.var50 : "-"}}</td>
                        <td class="text-center tth3">{{data.var51 ? data.var51 : "-"}}</td>
                        <td class="text-center tth3">{{data.var52 ? data.var52 : "-"}}</td>
                        <td class="text-center tth3">{{data.var53 ? data.var53 : "-"}}</td>
                        <td class="text-center tth3">{{data.var54 ? data.var54 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                     
                        <td class="text-center ">{{ }}</td>
                        <td class="text-center ">{{ }}</td>
                      

                       </tr>   
                          <tr>
                         
                           <td class="text-center " rowspan="2" >
                               IMPLANTE
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta21}}</td>
                        <td class="text-center">{{ta22}}</td>
              
                        <td class="text-center">{{data.var57 ? data.var57 : "-"}}</td>
                        <td class="text-center">{{data.var58 ? data.var58 : "-"}}</td>
                        <td class="text-center">{{data.var59 ? data.var59 : "-"}}</td>
                        <td class="text-center">{{data.var60 ? data.var60 : "-"}}</td>
                        <td class="text-center">{{data.var61 ? data.var61 : "-"}}</td>
                        <td class="text-center">{{data.var62 ? data.var62 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                         <td class="text-center">{{data.var69 ? data.var69 : "-"}}</td>
                         <td class="text-center">{{data.var70 ? data.var70 : "-"}}</td>
            


                       </tr>  


                                  <tr>
                           <td class="text-center tth3 " >
                               I
                           </td>
                        <td class="text-center tth3 ">{{ta23}}</td>
                        <td class="text-center tth3 ">{{ta24}}</td>

                        <td class="text-center tth3">{{data.var63 ? data.var63 : "-"}}</td>
                        <td class="text-center tth3">{{data.var64 ? data.var64 : "-"}}</td>
                        <td class="text-center tth3">{{data.var65 ? data.var65 : "-"}}</td>
                        <td class="text-center tth3">{{data.var66 ? data.var66 : "-"}}</td>
                        <td class="text-center tth3">{{data.var67 ? data.var67 : "-"}}</td>
                        <td class="text-center tth3">{{data.var68 ? data.var68 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                     
                        <td class="text-center ">{{ }}</td>
                        <td class="text-center ">{{ }}</td>
                      

                       </tr>   



                       

                          <tr>
                           <td class="text-center " rowspan="4"  >
                               BARREA
                           </td>
                           <td class="text-center " rowspan="2" >
                               CONDON MASCULINO
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta25}}</td>
                        <td class="text-center">{{ta26}}</td>
              
                        <td class="text-center">{{data.var71 ? data.var71 : "-"}}</td>
                        <td class="text-center">{{data.var72 ? data.var72 : "-"}}</td>
                        <td class="text-center">{{data.var73 ? data.var73 : "-"}}</td>
                        <td class="text-center">{{data.var74 ? data.var74 : "-"}}</td>
                        <td class="text-center">{{data.var75 ? data.var75 : "-"}}</td>
                        <td class="text-center">{{data.var76 ? data.var76 : "-"}}</td>
                        <td class="text-center">{{data.var77 ? data.var77 : "-"}}</td>
                        <td class="text-center">{{data.var78 ? data.var78 : "-"}}</td>
                     
                     
                         <td class="text-center">{{data.var87 ? data.var87 : "-"}}</td>
                         <td class="text-center">{{data.var88 ? data.var88 : "-"}}</td>
                    


                       </tr>    


                                  <tr>
                           <td class="text-center tth3 " >
                               I
                           </td>
                        <td class="text-center tth3 ">{{ta27}}</td>
                        <td class="text-center tth3 ">{{ta28}}</td>

                        <td class="text-center tth3">{{data.var79 ? data.var79 : "-"}}</td>
                        <td class="text-center tth3">{{data.var80 ? data.var80 : "-"}}</td>
                        <td class="text-center tth3">{{data.var81 ? data.var81 : "-"}}</td>
                        <td class="text-center tth3">{{data.var82 ? data.var82 : "-"}}</td>
                        <td class="text-center tth3">{{data.var83 ? data.var83 : "-"}}</td>
                        <td class="text-center tth3">{{data.var84 ? data.var84 : "-"}}</td>
                        <td class="text-center tth3">{{data.var85 ? data.var85 : "-"}}</td>
                        <td class="text-center tth3">{{data.var86 ? data.var86 : "-"}}</td>
                  
                     
                        <td class="text-center ">{{ }}</td>
                        <td class="text-center ">{{ }}</td>
                      

                       </tr>   

                          <tr>
                          
                           <td class="text-center " rowspan="2" >
                               CONDON FEMENINO
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta29}}</td>
                        <td class="text-center">{{ta30}}</td>
              
                        <td class="text-center">{{data.var89 ? data.var89 : "-"}}</td>
                        <td class="text-center">{{data.var90 ? data.var90 : "-"}}</td>
                        <td class="text-center">{{data.var91 ? data.var91 : "-"}}</td>
                        <td class="text-center">{{data.var92 ? data.var92 : "-"}}</td>
                        <td class="text-center">{{data.var93 ? data.var93 : "-"}}</td>
                        <td class="text-center">{{data.var94 ? data.var94 : "-"}}</td>
                        
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                     
                         <td class="text-center">{{data.var101 ? data.var101 : "-"}}</td>
                         <td class="text-center">{{data.var102 ? data.var102 : "-"}}</td>
                    


                       </tr>    


                                  <tr>
                           <td class="text-center tth3 " >
                               I
                           </td>
                        <td class="text-center tth3 ">{{ta31}}</td>
                        <td class="text-center tth3 ">{{ta32}}</td>

                        <td class="text-center tth3">{{data.var95 ? data.var95 : "-"}}</td>
                        <td class="text-center tth3">{{data.var96 ? data.var96 : "-"}}</td>
                        <td class="text-center tth3">{{data.var97 ? data.var97 : "-"}}</td>
                        <td class="text-center tth3">{{data.var98 ? data.var98 : "-"}}</td>
                        <td class="text-center tth3">{{data.var99 ? data.var99 : "-"}}</td>
                        <td class="text-center tth3">{{data.var100 ? data.var100 : "-"}}</td>
                     
                  
                     
                        <td class="text-center tth4 ">{{ }}</td>
                        <td class="text-center tth4 ">{{ }}</td>
                  
                     
                        <td class="text-center tth4 ">{{ }}</td>
                        <td class="text-center tth4 ">{{ }}</td>
                      

                       </tr>   


                          <tr>
                           <td class="text-center "   >
                               AQV FEMENINO
                           </td>
                           <td class="text-center "  >
                              -------------
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta33}}</td>
                        <td class="text-center">{{ta34}}</td>
                        <td class="text-center">{{data.var103 ? data.var103 : "-"}}</td>
                        <td class="text-center">{{data.var104 ? data.var104 : "-"}}</td>
                        <td class="text-center">{{data.var105 ? data.var105 : "-"}}</td>
                        <td class="text-center">{{data.var106 ? data.var106 : "-"}}</td>
                        <td class="text-center">{{data.var107 ? data.var107 : "-"}}</td>
                        <td class="text-center">{{data.var108 ? data.var108 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                        
                         <td class="text-center">{{data.var109 ? data.var109 : "-"}}</td>
                    


                       </tr>    


                          <tr>
                           <td class="text-center "   >
                               AQV MASCULINO
                           </td>
                           <td class="text-center "  >
                              -------------
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta35}}</td>
                        <td class="text-center">{{ta36}}</td>
                        <td class="text-center">{{data.var110 ? data.var110 : "-"}}</td>
                        <td class="text-center">{{data.var111 ? data.var111 : "-"}}</td>
                        <td class="text-center">{{data.var112 ? data.var112 : "-"}}</td>
                        <td class="text-center">{{data.var113 ? data.var113 : "-"}}</td>
                        <td class="text-center">{{data.var114 ? data.var114 : "-"}}</td>
                        <td class="text-center">{{data.var115 ? data.var115 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                        
                         <td class="text-center">{{data.var116 ? data.var116 : "-"}}</td>
                    


                       </tr>    

                          <tr>
                           <td class="text-center "   >
                               MELA
                           </td>
                           <td class="text-center "  >
                              -------------
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta37}}</td>
                        <td class="text-center">{{ta38}}</td>
                        <td class="text-center">{{data.var117 ? data.var117 : "-"}}</td>
                        <td class="text-center">{{data.var118 ? data.var118 : "-"}}</td>
                        <td class="text-center">{{data.var119 ? data.var119 : "-"}}</td>
                        <td class="text-center">{{data.var120 ? data.var120 : "-"}}</td>
                        <td class="text-center">{{data.var121 ? data.var121 : "-"}}</td>
                        <td class="text-center">{{data.var122 ? data.var122 : "-"}}</td>
                     
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                        <td class="text-center  tth4">{{ }}</td>
                        
                         <td class="text-center">{{data.var123 ? data.var123 : "-"}}</td>
                    


                       </tr>    


                            

                          <tr>
                           <td class="text-center " rowspan="3"  >
                               ABSTINECIA PERIODICA
                           </td>
                           <td class="text-center "  >
                               BILLINGS
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta39}}</td>
                        <td class="text-center">{{ta40}}</td>
              
                        <td class="text-center">{{data.var124 ? data.var124 : "-"}}</td>
                        <td class="text-center">{{data.var125 ? data.var125 : "-"}}</td>
                        <td class="text-center">{{data.var126 ? data.var126 : "-"}}</td>
                        <td class="text-center">{{data.var127 ? data.var127 : "-"}}</td>
                        <td class="text-center">{{data.var128 ? data.var128 : "-"}}</td>
                        <td class="text-center">{{data.var129 ? data.var1 : "-"}}</td>
                        
                        <td class="text-center tth4">{{ }}</td>
                        <td class="text-center tth4">{{ }}</td>
                     
                     
                         <td class="text-center">{{data.var130 ? data.var130 : "-"}}</td>
                         <td class="text-center">{{data.var131 ? data.var131 : "-"}}</td>
                    


                       </tr>    


                          <tr>
                           
                           <td class="text-center "  >
                               RITMO 
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta41}}</td>
                        <td class="text-center">{{ta42}}</td>
              
                        <td class="text-center">{{data.var132 ? data.var132 : "-"}}</td>
                        <td class="text-center">{{data.var133 ? data.var133 : "-"}}</td>
                        <td class="text-center">{{data.var134 ? data.var134 : "-"}}</td>
                        <td class="text-center">{{data.var135 ? data.var135 : "-"}}</td>
                        <td class="text-center">{{data.var136 ? data.var136 : "-"}}</td>
                        <td class="text-center">{{data.var137? data.var137 : "-"}}</td>
                        
                        <td class="text-center tth4 ">{{ }}</td>
                        <td class="text-center tth4 ">{{ }}</td>
                     
                     
                         <td class="text-center">{{data.var138 ? data.var138 : "-"}}</td>
                         <td class="text-center">{{data.var139 ? data.var139 : "-"}}</td>
                    


                       </tr>    
                       

                          <tr>
                           
                           <td class="text-center "  >
                               DIAS FIJO 
                           </td>
                           <td class="text-center " >
                               A
                           </td>
                        <td class="text-center">{{ta43}}</td>
                        <td class="text-center">{{ta44}}</td>
              
                        <td class="text-center">{{data.var140 ? data.var140 : "-"}}</td>
                        <td class="text-center">{{data.var141 ? data.var141 : "-"}}</td>
                        <td class="text-center">{{data.var142 ? data.var142 : "-"}}</td>
                        <td class="text-center">{{data.var143 ? data.var143 : "-"}}</td>
                        <td class="text-center">{{data.var144 ? data.var144 : "-"}}</td>
                        <td class="text-center">{{data.var145 ? data.var145 : "-"}}</td>
                        
                        <td class="text-center tth4 ">{{ }}</td>
                        <td class="text-center tth4 ">{{ }}</td>
                     
                     
                         <td class="text-center">{{data.var146 ? data.var146 : "-"}}</td>
                         <td class="text-center">{{data.var147 ? data.var147 : "-"}}</td>
                    


                       </tr>    
                       
                     

                   </tbody>
               </template>
           </v-simple-table>
        </v-col>  
    
        <v-col md="8">
           <v-simple-table dense>
               <template v-slot:default>
                   <thead >
                       <tr>

                           <th class="text-center tth2"  colspan="2" >
                               METODO
                           </th>
                         
                           <th class="text-center tth2"  >
                               Tipo de Usuaria
                           </th>

                           <th class="text-center tth2">
                               TOTAL
                           </th>

                           <th class="text-center tth2">
                               menor 12 .
                           </th>
                           <th class="text-center tth2">
                               12 a 17 a.
                           </th>
                           <th class="text-center tth2">
                               18 a 29 a
                           </th>
                           <th class="text-center tth2">
                               30 a 59 a
                           </th>
                           <th class="text-center tth2">
                               KIT CMPLETO
                           </th>
                          
                          
                         
                    </tr>
                      

                   </thead>
                   <tbody>
                       <tr>
                           <td class="text-center tth2"  rowspan="6" style="width: 8rem;">
                               ANTICONCEPCIÓN ORAL DE EMERGENCIA/PROGESTAGENO
                           </td>
                           <td class="text-center " rowspan="2"  >
                               YUZPE
                           </td>
                         
                         
                           <td class="text-center "  >
                               A
                           </td>
                          <td class="text-center">{{ta45}}</td>
                          <td class="text-center  tth4">{{ }}</td>
                          <td class="text-center">{{data.var435 ? data.var435 : "-"}}</td>
                          <td class="text-center">{{data.var436 ? data.var436 : "-"}}</td>
                          <td class="text-center">{{data.var437 ? data.var437 : "-"}}</td>
            
                          <td class="text-center  tth4">{{ }}</td>
                
                        

                       </tr>        

                        <tr>
                         
                         
                           <td class="text-center "  >
                               I
                           </td>
                          <td class="text-center">{{ta46}}</td>
                          <td class="text-center  tth4">{{ }}</td>
                          <td class="text-center">{{data.var438 ? data.var438 : "-"}}</td>
                          <td class="text-center">{{data.var439 ? data.var439 : "-"}}</td>
                          <td class="text-center">{{data.var440 ? data.var440 : "-"}}</td>
            
                          <td class="text-center  tth4">{{ }}</td>
                
                        

                       </tr>                   
                     
                         <tr>
                          
                           <td class="text-center " rowspan="2"  >
                               AOE
                           </td>
                         
                         
                           <td class="text-center "  >
                               A
                           </td>
                          <td class="text-center">{{ta47}}</td>
                          <td class="text-center  tth4">{{ }}</td>
                          <td class="text-center">{{data.var148 ? data.var148 : "-"}}</td>
                          <td class="text-center">{{data.var149 ? data.var149 : "-"}}</td>
                          <td class="text-center">{{data.var150 ? data.var150 : "-"}}</td>
            
                          <td class="text-center  tth4">{{ }}</td>
                
                        

                       </tr>        

                        <tr>
                         
                         
                           <td class="text-center "  >
                               I
                           </td>
                          <td class="text-center">{{ta48}}</td>
                          <td class="text-center  tth4">{{ }}</td>
                          <td class="text-center">{{data.var151 ? data.var151 : "-"}}</td>
                          <td class="text-center">{{data.var152 ? data.var152 : "-"}}</td>
                          <td class="text-center">{{data.var153 ? data.var153 : "-"}}</td>
            
                          <td class="text-center  tth4">{{ }}</td>
                
                        

                       </tr>                   
                     
                     
                         <tr>
                          
                           <td class="text-center " rowspan="2"  >
                               VICTIMAS DE VIOLACION SEXUAL
                           </td>
                         
                         
                           <td class="text-center "  >
                               A
                           </td>
                          <td class="text-center">{{ta49}}</td>
                        
                          <td class="text-center">{{data.var441 ? data.var441 : "-"}}</td>
                          <td class="text-center">{{data.var154 ? data.var154 : "-"}}</td>
                          <td class="text-center">{{data.var155 ? data.var155 : "-"}}</td>
                          <td class="text-center">{{data.var156 ? data.var156 : "-"}}</td>
            
                          <td class="text-center  tth4">{{ }}</td>
                
                        

                       </tr>        

                        <tr>
                         
                         
                           <td class="text-center "  >
                               I
                           </td>
                          <td class="text-center">{{ta50}}</td>
                          
                          <td class="text-center">{{data.var442 ? data.var442 : "-"}}</td>
                          <td class="text-center">{{data.var157 ? data.var157 : "-"}}</td>
                          <td class="text-center">{{data.var158 ? data.var158 : "-"}}</td>
                          <td class="text-center">{{data.var159 ? data.var159 : "-"}}</td>
                          <td class="text-center">{{data.var160 ? data.var160 : "-"}}</td>
            
       
                       </tr>    



                   </tbody>
               </template>
           </v-simple-table>
        </v-col>  

        <v-col md="7">
           <v-simple-table dense>
               <template v-slot:default>
                   <thead >
                       <tr>

                           <th class="text-center tth2"  colspan="2" rowspan="2" >
                               METODO
                           </th>

                           <th class="text-center tth2"  colspan="1" rowspan="2" >
                               TOTAL
                           </th>

                           <th class="text-center tth2" colspan="3" >
                               12 a 17 a.
                           </th>
                      

                           <th class="text-center tth2" colspan="3" >
                               18 a 29 a.
                           </th>
                      

                           <th class="text-center tth2" colspan="3" >
                               30 a 59 a.
                           </th>
                      
                          
                          
                         
                    </tr>
                          <tr>

                           <th class="text-center tth2"   >
                               CESAREA
                           </th>
                           <th class="text-center tth2"   >
                               POST ABORTO
                           </th>
                           <th class="text-center tth2"   >
                               POST PARTO
                           </th>
                         

                           <th class="text-center tth2"   >
                               CESAREA
                           </th>
                           <th class="text-center tth2"   >
                               POST ABORTO
                           </th>
                           <th class="text-center tth2"   >
                               POST PARTO
                           </th>
                         

                           <th class="text-center tth2"   >
                               CESAREA
                           </th>
                           <th class="text-center tth2"   >
                               POST ABORTO
                           </th>
                           <th class="text-center tth2"   >
                               POST PARTO
                           </th>
                                                 
                    </tr>
                      

                   </thead>
                   <tbody>
                       <tr>
                           
                           <td class="text-center " colspan="2"  >
                               TOTAL
                           </td>
                         
                         
                         
                           
                         
                        <td class="text-center">{{ta51}}</td>
                      
                        <td class="text-center">{{total1c}}</td>
                        <td class="text-center">{{total2c}}</td>
                        <td class="text-center">{{total3c}}</td>
                        <td class="text-center">{{total4c}}</td>
                        <td class="text-center">{{total5c}}</td>
                        <td class="text-center">{{total6c}}</td>
                        <td class="text-center">{{total7c}}</td>
                        <td class="text-center">{{total8c}}</td>
                        <td class="text-center">{{total9c}}</td>
                      
             
                    
                </tr>
                          <tr>
                           
                           <td class="text-center " colspan="2"  >
                               DIU
                           </td>
                         
                          <td class="text-center">{{ta52}}</td>
                      
                           <td class="text-center">{{data.var161 ? data.var161 : "-"}}</td>
                           <td class="text-center">{{data.var162 ? data.var162 : "-"}}</td>
                           <td class="text-center">{{data.var163 ? data.var163 : "-"}}</td>
                           <td class="text-center">{{data.var164 ? data.var164 : "-"}}</td>
                           <td class="text-center">{{data.var165 ? data.var165 : "-"}}</td>
                           <td class="text-center">{{data.var166 ? data.var166 : "-"}}</td>
                           <td class="text-center">{{data.var167 ? data.var167 : "-"}}</td>
                           <td class="text-center">{{data.var168 ? data.var168 : "-"}}</td>
                           <td class="text-center">{{data.var169 ? data.var169 : "-"}}</td>
         
                       
                    </tr>
                          <tr>
                           
                           <td class="text-center " colspan="2"  >
                               INYECTABLE MENSUAL
                           </td>
                         
                         
                         
                           
                         
                          <td class="text-center">{{ta53}}</td>
                      
                           <td class="text-center">{{data.var170 ? data.var170 : "-"}}</td>
                           <td class="text-center">{{data.var171 ? data.var171 : "-"}}</td>
                           <td class="text-center">{{data.var172 ? data.var172 : "-"}}</td>
                           <td class="text-center">{{data.var173 ? data.var173 : "-"}}</td>
                           <td class="text-center">{{data.var174 ? data.var174 : "-"}}</td>
                           <td class="text-center">{{data.var175 ? data.var175 : "-"}}</td>
                           <td class="text-center">{{data.var176 ? data.var176 : "-"}}</td>
                           <td class="text-center">{{data.var177 ? data.var177 : "-"}}</td>
                           <td class="text-center">{{data.var178 ? data.var178 : "-"}}</td>
         
                       
                    </tr>
                    
                    <tr>
                           
                           <td class="text-center " colspan="2"  >
                               ORAL COMBINADO
                           </td>
                         

                          <td class="text-center">{{ta54}}</td>
                      
                           <td class="text-center">{{data.var179 ? data.var179 : "-"}}</td>
                           <td class="text-center">{{data.var180 ? data.var180 : "-"}}</td>
                           <td class="text-center">{{data.var181 ? data.var181 : "-"}}</tD>
                           <td class="text-center">{{data.var182 ? data.var182 : "-"}}</td>
                           <td class="text-center">{{data.var183 ? data.var183 : "-"}}</td>
                           <td class="text-center">{{data.var184 ? data.var184 : "-"}}</td>
                           <td class="text-center">{{data.var185 ? data.var185 : "-"}}</td>
                           <td class="text-center">{{data.var186 ? data.var186 : "-"}}</td>
                           <td class="text-center">{{data.var187 ? data.var187 : "-"}}</td>
         
                       
                    </tr>

                    <tr>
                           
                           <td class="text-center " colspan="2"  >
                               INYECTABLE TRIMESTRAL
                           </td>
                         

                          <td class="text-center">{{ta55}}</td>
                      
                           <td class="text-center">{{data.var188 ? data.var188 : "-"}}</td>
                           <td class="text-center">{{data.var189 ? data.var189 : "-"}}</td>
                           <td class="text-center">{{data.var190 ? data.var190 : "-"}}</tD>
                           <td class="text-center">{{data.var191 ? data.var191 : "-"}}</td>
                           <td class="text-center">{{data.var192 ? data.var192 : "-"}}</td>
                           <td class="text-center">{{data.var193 ? data.var193 : "-"}}</td>
                           <td class="text-center">{{data.var194 ? data.var194 : "-"}}</td>
                           <td class="text-center">{{data.var195 ? data.var195 : "-"}}</td>
                           <td class="text-center">{{data.var196 ? data.var196 : "-"}}</td>
         
                       
                    </tr>
                        
                    <tr>
                           
                           <td class="text-center " colspan="2"  >
                               IMPLANTE
                           </td>
                         

                          <td class="text-center">{{ta56}}</td>
                      
                           <td class="text-center">{{data.var197 ? data.var197 : "-"}}</td>
                           <td class="text-center">{{data.var198 ? data.var198 : "-"}}</td>
                           <td class="text-center">{{data.var199 ? data.var199 : "-"}}</tD>
                           <td class="text-center">{{data.var200 ? data.var200 : "-"}}</td>
                           <td class="text-center">{{data.var201 ? data.var201 : "-"}}</td>
                           <td class="text-center">{{data.var202 ? data.var202 : "-"}}</td>
                           <td class="text-center">{{data.var203 ? data.var203 : "-"}}</td>
                           <td class="text-center">{{data.var204 ? data.var204 : "-"}}</td>
                           <td class="text-center">{{data.var205 ? data.var205 : "-"}}</td>
                              
                    </tr>
                        
                    <tr>
                           
                           <td class="text-center " colspan="2"  >
                               CONDON MASCULINO
                           </td>
                    
                          <td class="text-center">{{ta57}}</td>
                      
                           <td class="text-center">{{data.var206 ? data.var206 : "-"}}</td>
                           <td class="text-center">{{data.var207 ? data.var207 : "-"}}</td>
                           <td class="text-center">{{data.var208 ? data.var208 : "-"}}</tD>
                           <td class="text-center">{{data.var209 ? data.var209 : "-"}}</td>
                           <td class="text-center">{{data.var210 ? data.var210 : "-"}}</td>
                           <td class="text-center">{{data.var211 ? data.var211 : "-"}}</td>
                           <td class="text-center">{{data.var212 ? data.var212 : "-"}}</td>
                           <td class="text-center">{{data.var213 ? data.var213 : "-"}}</td>
                           <td class="text-center">{{data.var214 ? data.var214 : "-"}}</td>
                              
                    </tr>

                    <tr>
                           
                           <td class="text-center " colspan="2"  >
                              CONDON FEMENINO
                           </td>
                    
                          <td class="text-center">{{ta58}}</td>
                      
                           <td class="text-center">{{data.var215 ? data.var215 : "-"}}</td>
                           <td class="text-center">{{data.var216 ? data.var216 : "-"}}</td>
                           <td class="text-center">{{data.var217 ? data.var217 : "-"}}</tD>
                           <td class="text-center">{{data.var218 ? data.var218 : "-"}}</td>
                           <td class="text-center">{{data.var219 ? data.var219 : "-"}}</td>
                           <td class="text-center">{{data.var220 ? data.var220 : "-"}}</td>
                           <td class="text-center">{{data.var221 ? data.var221 : "-"}}</td>
                           <td class="text-center">{{data.var222 ? data.var222 : "-"}}</td>
                           <td class="text-center">{{data.var223 ? data.var223 : "-"}}</td>
                              
                    </tr>
                        

                    <tr>
                           
                           <td class="text-center " colspan="2"  >
                              AQV FEMENINO
                           </td>
                          <td class="text-center">{{ta59}}</td>
                      
                           <td class="text-center">{{data.var224 ? data.var224 : "-"}}</td>
                           <td class="text-center">{{data.var225 ? data.var225 : "-"}}</td>
                           <td class="text-center">{{data.var226 ? data.var226 : "-"}}</tD>
                           <td class="text-center">{{data.var227 ? data.var227 : "-"}}</td>
                           <td class="text-center">{{data.var228 ? data.var228 : "-"}}</td>
                           <td class="text-center">{{data.var229 ? data.var229 : "-"}}</td>
                           <td class="text-center">{{data.var230 ? data.var230 : "-"}}</td>
                           <td class="text-center">{{data.var231 ? data.var231 : "-"}}</td>
                           <td class="text-center">{{data.var232 ? data.var232 : "-"}}</td>   
                    </tr>
                        
    


                   </tbody>
               </template>
           </v-simple-table>
        </v-col> 
        <v-col md="5">
            <br>
        </v-col>
        <v-col md="3">
           <v-simple-table dense>
               <template v-slot:default>
                   <thead >
                       <tr>

                           <th class="text-center tth2"  colspan="2" rowspan="2" >
                               SESIÓN EDUCATIVA
                           </th>
                           <th class="text-center tth2"  colspan="2" rowspan="2" >
                               ATENCIÓN PRE CONCEPCIONAL
                           </th>

                    </tr>

                        
                      

                   </thead>
                   <tbody>
                         <tr>

                           <th class="text-center ">
                               N
                           </th>
                           <th class="text-center ">
                               N PERSONAS
                           </th>
                         
                           <th class="text-center ">
                               1º
                           </th>
                           <th class="text-center ">
                               2º
                           </th>
            
                     </tr>


                          <tr>
                           

                           <td class="text-center">{{data.var233 ? data.var233 : "-"}}</td>
                           <td class="text-center">{{data.var234 ? data.var234 : "-"}}</td>
                           <td class="text-center">{{data.var235 ? data.var235 : "-"}}</td>
                           <td class="text-center">{{data.var236 ? data.var236 : "-"}}</td>
                
         
                       
                    </tr>
                        
                    
                  

                  
                        
                 
    


                   </tbody>
               </template>
           </v-simple-table>
        </v-col> 
        <v-col md="1">
            <br>
        </v-col>
        <v-col md="3">
           <v-simple-table dense>
               <template v-slot:default>
                   <thead >
                       <tr>

                           <th class="text-center tth2"  colspan="1" rowspan="2" >
                               SESIÓN EDUCATIVA
                           </th>
                           <th class="text-center tth2"  colspan="1" rowspan="2" >
                               NºL
                           </th>

                    </tr>

                        
                      

                   </thead>
                   <tbody>
                         <tr>

                           <th class="text-center ">
                               REMOCIÓN DE DIU
                           </th>
                             <td class="text-center">{{data.var237 ? data.var237 : "-"}}</td>
                         
                          
            
                     </tr>


                           <tr>

                           <th class="text-center ">
                               REMOCIÓN DE IMPLANTE
                           </th>
                             <td class="text-center">{{data.var238 ? data.var238 : "-"}}</td>
                         
                          
            
                     </tr>
                        
                    
                  

                  
                        
                 
    


                   </tbody>
               </template>
           </v-simple-table>
        </v-col> 
    </v-row>
</template>

<style>

.tth2
{
 color: white !important;
  background-color: rgba(44, 145, 228, 0.925);
}
.tth5
{
 color: rgb(39, 32, 32) !important;
  background-color: rgba(230, 241, 168, 0.925);
}
.tth3
{
 color: rgb(53, 51, 51) !important;
  background-color: rgba(185, 218, 238, 0.925);
}
.tth4
{
 color: rgb(53, 51, 51) !important;
  background-color: rgba(184, 188, 190, 0.925);
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

        ta1: 0,
        ta2: 0,

        ta3: 0,
        ta4: 0,

        ta5: 0,
        ta6: 0,

        ta7: 0,
        ta8: 0,

        ta9: 0,
        ta10: 0,

        ta11: 0,
        ta12: 0,

        ta13: 0,
        ta14: 0,

        ta15: 0,
        ta16: 0,

        ta17: 0,
        ta18: 0,

        ta19: 0,
        ta20: 0,

        ta21: 0,
        ta22: 0,

        ta23: 0,
        ta24: 0,

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
      
        total1B: 0,
        total2B: 0,
        total3B: 0,
        total4B: 0,
        total5B: 0,
        total6B: 0,
        total7B: 0,
        total8B: 0,

        total1c: 0,
        total2c: 0,
        total3c: 0,
        total4c: 0,
        total5c: 0,
        total6c: 0,
        total7c: 0,
        total8c: 0,
        total9c: 0,

        ta51: 0,


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
            await this.axios.get(this.$api_url + '/reporte/' + this.tabla + '/1-434',{
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
         

      

         this.total1 = parseInt(response.data[0].var1) + parseInt(response.data[0].var15) + parseInt(response.data[0].var29)+ parseInt(response.data[0].var43)+ parseInt(response.data[0].var57) + parseInt(response.data[0].var71)+ parseInt(response.data[0].var89)+ parseInt(response.data[0].var103)+ parseInt(response.data[0].var110)+ parseInt(response.data[0].var117)+ parseInt(response.data[0].var124)+ parseInt(response.data[0].var132)+ parseInt(response.data[0].var140)
         this.total2 = parseInt(response.data[0].var2) + parseInt(response.data[0].var16) + parseInt(response.data[0].var30)+ parseInt(response.data[0].var44)+ parseInt(response.data[0].var58) + parseInt(response.data[0].var72)+ parseInt(response.data[0].var90)+ parseInt(response.data[0].var104)+ parseInt(response.data[0].var111)+ parseInt(response.data[0].var118)+ parseInt(response.data[0].var125)+ parseInt(response.data[0].var133)+ parseInt(response.data[0].var141)
         
         this.ta1 = parseInt(this.total1) + parseInt(this.total3)  + parseInt(this.total5)  + parseInt(this.total7)  
         this.ta2 = parseInt(this.total2) + parseInt(this.total4)  + parseInt(this.total6)  + parseInt(this.total8)  
         
         this.total3 = parseInt(response.data[0].var3) + parseInt(response.data[0].var17) + parseInt(response.data[0].var31)+ parseInt(response.data[0].var45)+ parseInt(response.data[0].var59) + parseInt(response.data[0].var73)+ parseInt(response.data[0].var91)+ parseInt(response.data[0].var105)+ parseInt(response.data[0].var112)+ parseInt(response.data[0].var119)+ parseInt(response.data[0].var126)+ parseInt(response.data[0].var134)+ parseInt(response.data[0].var142)
         this.total4 = parseInt(response.data[0].var4) + parseInt(response.data[0].var18) + parseInt(response.data[0].var32)+ parseInt(response.data[0].var46)+ parseInt(response.data[0].var60) + parseInt(response.data[0].var74)+ parseInt(response.data[0].var92)+ parseInt(response.data[0].var106)+ parseInt(response.data[0].var113)+ parseInt(response.data[0].var120)+ parseInt(response.data[0].var127)+ parseInt(response.data[0].var135)+ parseInt(response.data[0].var143)
         
       
    
         this.total5 = parseInt(response.data[0].var5) + parseInt(response.data[0].var19) + parseInt(response.data[0].var33)+ parseInt(response.data[0].var47)+ parseInt(response.data[0].var61) + parseInt(response.data[0].var75)+ parseInt(response.data[0].var93)+ parseInt(response.data[0].var107)+ parseInt(response.data[0].var114)+ parseInt(response.data[0].var121)+ parseInt(response.data[0].var128)+ parseInt(response.data[0].var136)+ parseInt(response.data[0].var144)
         this.total6 = parseInt(response.data[0].var6) + parseInt(response.data[0].var20) + parseInt(response.data[0].var34)+ parseInt(response.data[0].var48)+ parseInt(response.data[0].var62) + parseInt(response.data[0].var76)+ parseInt(response.data[0].var94)+ parseInt(response.data[0].var108)+ parseInt(response.data[0].var115)+ parseInt(response.data[0].var122)+ parseInt(response.data[0].var129)+ parseInt(response.data[0].var137)+ parseInt(response.data[0].var145)
         
         
         this.total7 =  parseInt(response.data[0].var77)
         this.total8 =  parseInt(response.data[0].var78)
         
      
         
         this.total9 =  parseInt(response.data[0].var13) + parseInt(response.data[0].var27)+ parseInt(response.data[0].var41)+ parseInt(response.data[0].var55)+ parseInt(response.data[0].var69)+ parseInt(response.data[0].var87)+ parseInt(response.data[0].var101)   + parseInt(response.data[0].var130)+ parseInt(response.data[0].var138)+ parseInt(response.data[0].var146)
         this.total10 =  parseInt(response.data[0].var14) + parseInt(response.data[0].var28)+ parseInt(response.data[0].var42)+ parseInt(response.data[0].var56)+ parseInt(response.data[0].var70)+ parseInt(response.data[0].var88)+ parseInt(response.data[0].var102) + parseInt(response.data[0].var109)  + parseInt(response.data[0].var116)+ parseInt(response.data[0].var123)   + parseInt(response.data[0].var131) + parseInt(response.data[0].var139)+ parseInt(response.data[0].var147)
         
/*  */
        
 

         this.total1B = parseInt(response.data[0].var7) + parseInt(response.data[0].var21) + parseInt(response.data[0].var35)+ parseInt(response.data[0].var49)+ parseInt(response.data[0].var63) + parseInt(response.data[0].var79)+ parseInt(response.data[0].var95)
         this.total2B = parseInt(response.data[0].var8) + parseInt(response.data[0].var22) + parseInt(response.data[0].var36)+ parseInt(response.data[0].var50)+ parseInt(response.data[0].var64) + parseInt(response.data[0].var80)+ parseInt(response.data[0].var96)
      
         this.total3B = parseInt(response.data[0].var9) + parseInt(response.data[0].var23) + parseInt(response.data[0].var37)+ parseInt(response.data[0].var51)+ parseInt(response.data[0].var65) + parseInt(response.data[0].var81)+ parseInt(response.data[0].var97)
         this.total4B= parseInt(response.data[0].var10) + parseInt(response.data[0].var24) + parseInt(response.data[0].var38)+ parseInt(response.data[0].var52)+ parseInt(response.data[0].var66) + parseInt(response.data[0].var82)+ parseInt(response.data[0].var98)
       
         
         this.total5B = parseInt(response.data[0].var11) + parseInt(response.data[0].var25) + parseInt(response.data[0].var39)+ parseInt(response.data[0].var53)+ parseInt(response.data[0].var67) + parseInt(response.data[0].var83)+ parseInt(response.data[0].var99)
         this.total6B = parseInt(response.data[0].var12) + parseInt(response.data[0].var26) + parseInt(response.data[0].var40)+ parseInt(response.data[0].var54)+ parseInt(response.data[0].var68) + parseInt(response.data[0].var84)+ parseInt(response.data[0].var100)
       
       this.ta3 = parseInt(this.total1B) + parseInt(this.total3B)  + parseInt(this.total5B)  + parseInt(this.total7B)  
         this.ta4 = parseInt(this.total2B) + parseInt(this.total4B)  + parseInt(this.total6B)  + parseInt(this.total8B)  
           
         this.total7B =  parseInt(response.data[0].var85)
         this.total8B =  parseInt(response.data[0].var86)



         this.ta5 = parseInt(response.data[0].var1) + parseInt(response.data[0].var3) + parseInt(response.data[0].var5)
         this.ta6 = parseInt(response.data[0].var2) + parseInt(response.data[0].var4) + parseInt(response.data[0].var6)
        

         this.ta7 = parseInt(response.data[0].var7) + parseInt(response.data[0].var9) + parseInt(response.data[0].var11)
         this.ta8 = parseInt(response.data[0].var8) + parseInt(response.data[0].var10) + parseInt(response.data[0].var12)
        

         this.ta9 = parseInt(response.data[0].var15) + parseInt(response.data[0].var17) + parseInt(response.data[0].var19)
         this.ta10 = parseInt(response.data[0].var16) + parseInt(response.data[0].var18) + parseInt(response.data[0].var20)
        

         this.ta11 = parseInt(response.data[0].var21) + parseInt(response.data[0].var23) + parseInt(response.data[0].var25)
         this.ta12 = parseInt(response.data[0].var22) + parseInt(response.data[0].var24) + parseInt(response.data[0].var26)
        

         this.ta13 = parseInt(response.data[0].var29) + parseInt(response.data[0].var31) + parseInt(response.data[0].var33)
         this.ta14 = parseInt(response.data[0].var30) + parseInt(response.data[0].var32) + parseInt(response.data[0].var34)
        

         this.ta15 = parseInt(response.data[0].var35) + parseInt(response.data[0].var37) + parseInt(response.data[0].var39)
         this.ta16 = parseInt(response.data[0].var36) + parseInt(response.data[0].var38) + parseInt(response.data[0].var40)
        

         this.ta17 = parseInt(response.data[0].var43) + parseInt(response.data[0].var45) + parseInt(response.data[0].var47)
         this.ta18 = parseInt(response.data[0].var44) + parseInt(response.data[0].var46) + parseInt(response.data[0].var48)
        

         this.ta19 = parseInt(response.data[0].var49) + parseInt(response.data[0].var51) + parseInt(response.data[0].var53)
         this.ta20 = parseInt(response.data[0].var50) + parseInt(response.data[0].var52) + parseInt(response.data[0].var54)
        

         this.ta21 = parseInt(response.data[0].var57) + parseInt(response.data[0].var59) + parseInt(response.data[0].var61)
         this.ta22 = parseInt(response.data[0].var58) + parseInt(response.data[0].var60) + parseInt(response.data[0].var62)
        

         this.ta23 = parseInt(response.data[0].var63) + parseInt(response.data[0].var65) + parseInt(response.data[0].var67)
         this.ta24 = parseInt(response.data[0].var64) + parseInt(response.data[0].var66) + parseInt(response.data[0].var68)
        

         this.ta25 = parseInt(response.data[0].var71) + parseInt(response.data[0].var73) + parseInt(response.data[0].var75) + parseInt(response.data[0].var77)
         this.ta26 = parseInt(response.data[0].var72) + parseInt(response.data[0].var74) + parseInt(response.data[0].var76) + parseInt(response.data[0].var78)
        

         this.ta27 = parseInt(response.data[0].var79) + parseInt(response.data[0].var81) + parseInt(response.data[0].var83) + parseInt(response.data[0].var85)
         this.ta28 = parseInt(response.data[0].var80) + parseInt(response.data[0].var82) + parseInt(response.data[0].var84) + parseInt(response.data[0].var86)
        
        
         this.ta29 = parseInt(response.data[0].var89) + parseInt(response.data[0].var91) + parseInt(response.data[0].var93)
         this.ta30 = parseInt(response.data[0].var90) + parseInt(response.data[0].var92) + parseInt(response.data[0].var94)
        

         this.ta31 = parseInt(response.data[0].var95) + parseInt(response.data[0].var97) + parseInt(response.data[0].var99)
         this.ta32 = parseInt(response.data[0].var96) + parseInt(response.data[0].var98) + parseInt(response.data[0].var100)
        

         this.ta33 = parseInt(response.data[0].var103) + parseInt(response.data[0].var105) + parseInt(response.data[0].var107)
         this.ta34 = parseInt(response.data[0].var104) + parseInt(response.data[0].var106) + parseInt(response.data[0].var108)
        

         this.ta35 = parseInt(response.data[0].var110) + parseInt(response.data[0].var112) + parseInt(response.data[0].var114)
         this.ta36 = parseInt(response.data[0].var111) + parseInt(response.data[0].var113) + parseInt(response.data[0].var115)
        
      

         this.ta37 = parseInt(response.data[0].var117) + parseInt(response.data[0].var119) + parseInt(response.data[0].var121)
         this.ta38 = parseInt(response.data[0].var118) + parseInt(response.data[0].var120) + parseInt(response.data[0].var122)
        

         this.ta39 = parseInt(response.data[0].var124) + parseInt(response.data[0].var126) + parseInt(response.data[0].var128)
         this.ta40 = parseInt(response.data[0].var125) + parseInt(response.data[0].var127) + parseInt(response.data[0].var129)
        

         this.ta41 = parseInt(response.data[0].var132) + parseInt(response.data[0].var134) + parseInt(response.data[0].var136)
         this.ta42 = parseInt(response.data[0].var133) + parseInt(response.data[0].var135) + parseInt(response.data[0].var137)
        

         this.ta43 = parseInt(response.data[0].var140) + parseInt(response.data[0].var142) + parseInt(response.data[0].var144)
         this.ta44 = parseInt(response.data[0].var141) + parseInt(response.data[0].var143) + parseInt(response.data[0].var145)
        
       
        this.ta45 = parseInt(response.data[0].var435) + parseInt(response.data[0].var436) + parseInt(response.data[0].var437)
        this.ta46 = parseInt(response.data[0].var438) + parseInt(response.data[0].var439) + parseInt(response.data[0].var440)
        this.ta47 = parseInt(response.data[0].var148) + parseInt(response.data[0].var149) + parseInt(response.data[0].var150)
        this.ta48 = parseInt(response.data[0].var151) + parseInt(response.data[0].var151) + parseInt(response.data[0].var153)
        this.ta49 = parseInt(response.data[0].var441) + parseInt(response.data[0].var154) + parseInt(response.data[0].var155)+ parseInt(response.data[0].var156)
        this.ta50 = parseInt(response.data[0].var442) + parseInt(response.data[0].var157) + parseInt(response.data[0].var158)+ parseInt(response.data[0].var159)+ parseInt(response.data[0].var160)



        

         this.total1C = parseInt(response.data[0].var161) + parseInt(response.data[0].var170) + parseInt(response.data[0].var179)+ parseInt(response.data[0].var188)+ parseInt(response.data[0].var197) + parseInt(response.data[0].var206)+ parseInt(response.data[0].var215)+ parseInt(response.data[0].var224)
         this.total2C = parseInt(response.data[0].var162) + parseInt(response.data[0].var171) + parseInt(response.data[0].var180)+ parseInt(response.data[0].var189)+ parseInt(response.data[0].var198) + parseInt(response.data[0].var207)+ parseInt(response.data[0].var216)+ parseInt(response.data[0].var225)
         this.total3C = parseInt(response.data[0].var163) + parseInt(response.data[0].var172) + parseInt(response.data[0].var181)+ parseInt(response.data[0].var190)+ parseInt(response.data[0].var199) + parseInt(response.data[0].var208)+ parseInt(response.data[0].var217)+ parseInt(response.data[0].var226)

         this.total4C = parseInt(response.data[0].var164) + parseInt(response.data[0].var173) + parseInt(response.data[0].var182)+ parseInt(response.data[0].var191)+ parseInt(response.data[0].var200) + parseInt(response.data[0].var209)+ parseInt(response.data[0].var218)+ parseInt(response.data[0].var227)
         this.total5C = parseInt(response.data[0].var165) + parseInt(response.data[0].var174) + parseInt(response.data[0].var183)+ parseInt(response.data[0].var192)+ parseInt(response.data[0].var201) + parseInt(response.data[0].var210)+ parseInt(response.data[0].var219)+ parseInt(response.data[0].var228)
         this.total6C = parseInt(response.data[0].var166) + parseInt(response.data[0].var175) + parseInt(response.data[0].var184)+ parseInt(response.data[0].var193)+ parseInt(response.data[0].var202) + parseInt(response.data[0].var211)+ parseInt(response.data[0].var220)+ parseInt(response.data[0].var229)

         this.total7C = parseInt(response.data[0].var167) + parseInt(response.data[0].var176) + parseInt(response.data[0].var185)+ parseInt(response.data[0].var194)+ parseInt(response.data[0].var203) + parseInt(response.data[0].var212)+ parseInt(response.data[0].var221)+ parseInt(response.data[0].var230)
         this.total8C = parseInt(response.data[0].var168) + parseInt(response.data[0].var177) + parseInt(response.data[0].var186)+ parseInt(response.data[0].var195)+ parseInt(response.data[0].var204) + parseInt(response.data[0].var213)+ parseInt(response.data[0].var222)+ parseInt(response.data[0].var231)
         this.total9C = parseInt(response.data[0].var169) + parseInt(response.data[0].var178) + parseInt(response.data[0].var187)+ parseInt(response.data[0].var196)+ parseInt(response.data[0].var205) + parseInt(response.data[0].var214)+ parseInt(response.data[0].var223)+ parseInt(response.data[0].var232)
 
        this.ta51 = parseInt(this.total1C) + parseInt(this.total2C)  + parseInt(this.total3C)  + parseInt(this.total4C)  +parseInt(this.total5C) + parseInt(this.total6C)  + parseInt(this.total7C)  + parseInt(this.total8C)  + parseInt(this.total9C) 
        this.ta52 = parseInt(response.data[0].var161) + parseInt(response.data[0].var162) + parseInt(response.data[0].var163)+ parseInt(response.data[0].var164)+ parseInt(response.data[0].var165) + parseInt(response.data[0].var166)+ parseInt(response.data[0].var167)+ parseInt(response.data[0].var168)+ parseInt(response.data[0].var169)
        this.ta53 = parseInt(response.data[0].var170) + parseInt(response.data[0].var171) + parseInt(response.data[0].var172)+ parseInt(response.data[0].var173)+ parseInt(response.data[0].var174) + parseInt(response.data[0].var175)+ parseInt(response.data[0].var176)+ parseInt(response.data[0].var177)+ parseInt(response.data[0].var178)
        this.ta54 = parseInt(response.data[0].var179) + parseInt(response.data[0].var180) + parseInt(response.data[0].var181)+ parseInt(response.data[0].var182)+ parseInt(response.data[0].var183) + parseInt(response.data[0].var184)+ parseInt(response.data[0].var185)+ parseInt(response.data[0].var186)+ parseInt(response.data[0].var187)
        this.ta55 = parseInt(response.data[0].var188) + parseInt(response.data[0].var189) + parseInt(response.data[0].var190)+ parseInt(response.data[0].var191)+ parseInt(response.data[0].var192) + parseInt(response.data[0].var193)+ parseInt(response.data[0].var194)+ parseInt(response.data[0].var195)+ parseInt(response.data[0].var196)
        this.ta56 = parseInt(response.data[0].var197) + parseInt(response.data[0].var198) + parseInt(response.data[0].var199)+ parseInt(response.data[0].var200)+ parseInt(response.data[0].var201) + parseInt(response.data[0].var202)+ parseInt(response.data[0].var203)+ parseInt(response.data[0].var204)+ parseInt(response.data[0].var205)
        this.ta57 = parseInt(response.data[0].var206) + parseInt(response.data[0].var207) + parseInt(response.data[0].var208)+ parseInt(response.data[0].var209)+ parseInt(response.data[0].var210) + parseInt(response.data[0].var211)+ parseInt(response.data[0].var212)+ parseInt(response.data[0].var213)+ parseInt(response.data[0].var214)
        this.ta58 = parseInt(response.data[0].var215) + parseInt(response.data[0].var216) + parseInt(response.data[0].var217)+ parseInt(response.data[0].var218)+ parseInt(response.data[0].var219) + parseInt(response.data[0].var220)+ parseInt(response.data[0].var221)+ parseInt(response.data[0].var222)+ parseInt(response.data[0].var223)
        this.ta59 = parseInt(response.data[0].var224) + parseInt(response.data[0].var225) + parseInt(response.data[0].var226)+ parseInt(response.data[0].var227)+ parseInt(response.data[0].var228) + parseInt(response.data[0].var229)+ parseInt(response.data[0].var230)+ parseInt(response.data[0].var231)+ parseInt(response.data[0].var232)
        

        })
        },
    },
    
    
})
</script>

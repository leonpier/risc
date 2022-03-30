<template>
    <v-row >
       <h1 class="center">"PROMOCIÓN DE LA SALUD" 2022 VIDA SANA</h1>
      
        <v-col  md="9">
         
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
                        <tr>
                             <th class="text-left tthh15"  colspan="7">
                               1.1. EN FAMILIAS CON NIÑAS Y NIÑOS MENORES DE 6 MESES A 11 MESES
                           </th>
                           
                             <th class="text-center tthh15"  colspan="4">
                               1.2. SESIONES DEMOSTRATIVAS A GESTANTES
                           </th>

                        </tr>
                      
                    <tr>
                           <th class="text-left tthh11" rowspan="2" colspan="2">
                               TIPOS DE ACTIVIDAD/ EDADES
                           </th>
                             <th class="text-center tthh12"  rowspan="2" >
                              Total de participantes
                           </th>
                             <th class="text-center tthh11" colspan="4">
                              Familias participantes según edades de los niños y niñas
                           </th>
                              <th class="text-center tthh12"  rowspan="2" >
                              Total de participantes
                           </th>
                              <th class="text-center tthh12" colspan="3">
                              GESTANTE (NORMAL/RIESGO)
                           </th>
                         </tr>

                          <tr>
                          <th class="text-center tthh11">
                               RN
                           </th>
                          <th class="text-center tthh11">
                               1 - 5 meses
                           </th>
                      
                      
                          <th class="text-center tthh11">
                               6 - 8 meses
                           </th>
                          <th class="text-center tthh11">
                               9 - 11 meses
                           </th>
                      
                          <th class="text-center tthh12">
                               I Trim
                           </th>
                          <th class="text-center tthh12">
                               II Trim
                           </th>
                          <th class="text-center tthh12">
                               III Trim
                           </th>
                      
                        
                        </tr>
                      
                   

                    </thead>
                    <tbody>
                         <tr>
                            <td colspan="2"> Lactancia Materna Exclusiva ó prolongada (LME)  </td>
                                 
              
                                   <td class="text-center">{{totalv1}}</td>
                                    <td class="text-center">{{data.var1 ? data.var1 : "-"}}</td>
                                    <td class="text-center">{{data.var2 ? data.var2 : "-"}}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center">{{totalv2}}</td>
                                    <td class="text-center tthh13"  >{{ }}</td>
                                    <td class="text-center tthh13"  >{{ }}</td>
                                    <td class="text-center">{{data.var5 ? data.var5 : "-"}}</td>

                        </tr>
                      
                         <tr>
                            <td colspan="2"> Preparacion de alimentos (ALI) </td>
                                 
              
                                   <td class="text-center">{{totalv3}}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center">{{data.var3 ? data.var3 : "-"}}</td>
                                    <td class="text-center">{{data.var4 ? data.var4 : "-"}}</td>
                                
                                    <td class="text-center">{{totalv4}}</td>
                               
                                    <td class="text-center">{{data.var6 ? data.var6 : "-"}}</td>
                                    <td class="text-center">{{data.var7 ? data.var7 : "-"}}</td>
                                    <td class="text-center">{{data.var8 ? data.var8 : "-"}}</td>

                        </tr>
                        <br>
                      
  <tr>
                             <th class="text-left tthh15"  colspan="12">
                               1.3. CUANDO LA SESION DEMOSTRATIVA SE REALICE EN CENTROS DE PROMOCION Y VIGILANCIA COMUNAL
                           </th>
                           
                           

                        </tr>
                      
                    <tr>
                           <th class="text-left tthh11" rowspan="2" colspan="2">
                               TIPOS DE ACTIVIDAD/ EDADES
                           </th>
                             <th class="text-center tthh12"  rowspan="2" >
                              Total de participantes
                           </th>
                             <th class="text-center tthh11" colspan="4">
                              Familias participantes según edades de los niños y niñas
                           </th>
                              <th class="text-center tthh12"  rowspan="2" >
                              Total de participantes
                           </th>
                              <th class="text-center tthh12" colspan="3">
                              GESTANTE (NORMAL/RIESGO)
                           </th>
                         </tr>

                          <tr>
                          <th class="text-center tthh11">
                               RN
                           </th>
                          <th class="text-center tthh11">
                               1 - 5 meses
                           </th>
                      
                      
                          <th class="text-center tthh11">
                               6 - 8 meses
                           </th>
                          <th class="text-center tthh11">
                               9 - 11 meses
                           </th>
                      
                          <th class="text-center tthh12">
                               I Trim
                           </th>
                          <th class="text-center tthh12">
                               II Trim
                           </th>
                          <th class="text-center tthh12">
                               III Trim
                           </th>
                      
                        
                        </tr>
                      
                   

                         <tr>
                            <td colspan="2"> Lactancia Materna Exclusiva ó prolongada (LME)  </td>
                                 
              
                                   <td class="text-center">{{totalv5}}</td>
                                    <td class="text-center">{{data.var9 ? data.var9 : "-"}}</td>
                                    <td class="text-center">{{data.var10 ? data.var10 : "-"}}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center">{{totalv6}}</td>
                                    <td class="text-center tthh13"  >{{ }}</td>
                                    <td class="text-center tthh13"  >{{ }}</td>
                                    <td class="text-center">{{data.var13 ? data.var13 : "-"}}</td>

                        </tr>
                      
                         <tr>
                            <td colspan="2"> Preparacion de alimentos (ALI) </td>
                                 
              
                                   <td class="text-center">{{totalv7}}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center">{{data.var11 ? data.var11 : "-"}}</td>
                                    <td class="text-center">{{data.var12 ? data.var12 : "-"}}</td>
                                
                                    <td class="text-center">{{totalv8}}</td>
                               
                                    <td class="text-center">{{data.var14 ? data.var14 : "-"}}</td>
                                    <td class="text-center">{{data.var15 ? data.var15 : "-"}}</td>
                                    <td class="text-center">{{data.var16 ? data.var16 : "-"}}</td>

                        </tr>
                      
                        <br>
                      
  <tr>
                             <th class="text-left tthh15"  colspan="12">
                               1.4. CUANDO LA SESION DEMOSTRATIVA SEA PROMOVIDA POR EL GOBIERNO LOCAL 
                           </th>
                           
                           

                        </tr>
                      
                    <tr>
                           <th class="text-left tthh11" rowspan="2" colspan="2">
                               TIPOS DE ACTIVIDAD/ EDADES
                           </th>
                             <th class="text-center tthh12"  rowspan="2" >
                              Total de participantes
                           </th>
                             <th class="text-center tthh11" colspan="4">
                              Familias participantes según edades de los niños y niñas
                           </th>
                              <th class="text-center tthh12"  rowspan="2" >
                              Total de participantes
                           </th>
                              <th class="text-center tthh12" colspan="3">
                              GESTANTE (NORMAL/RIESGO)
                           </th>
                         </tr>

                          <tr>
                          <th class="text-center tthh11">
                               RN
                           </th>
                          <th class="text-center tthh11">
                               1 - 5 meses
                           </th>
                      
                      
                          <th class="text-center tthh11">
                               6 - 8 meses
                           </th>
                          <th class="text-center tthh11">
                               9 - 11 meses
                           </th>
                      
                          <th class="text-center tthh12">
                               I Trim
                           </th>
                          <th class="text-center tthh12">
                               II Trim
                           </th>
                          <th class="text-center tthh12">
                               III Trim
                           </th>
                      
                        
                        </tr>
                      
                   

                         <tr>
                            <td colspan="2"> Lactancia Materna Exclusiva ó prolongada (LME)  </td>
                                 
              
                                   <td class="text-center">{{totalv9}}</td>
                                    <td class="text-center">{{data.var17 ? data.var17 : "-"}}</td>
                                    <td class="text-center">{{data.var18 ? data.var18 : "-"}}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center">{{totalv10}}</td>
                                    <td class="text-center tthh13"  >{{ }}</td>
                                    <td class="text-center tthh13"  >{{ }}</td>
                                    <td class="text-center">{{data.var21 ? data.var21 : "-"}}</td>

                        </tr>
                      
                         <tr>
                            <td colspan="2"> Preparacion de alimentos (ALI) </td>
                                 
              
                                   <td class="text-center">{{totalv11}}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center tthh13" >{{ }}</td>
                                    <td class="text-center">{{data.var19 ? data.var19 : "-"}}</td>
                                    <td class="text-center">{{data.var20 ? data.var20 : "-"}}</td>
                                
                                    <td class="text-center">{{totalv12}}</td>
                               
                                    <td class="text-center">{{data.var22 ? data.var22 : "-"}}</td>
                                    <td class="text-center">{{data.var23 ? data.var23 : "-"}}</td>
                                    <td class="text-center">{{data.var24 ? data.var24 : "-"}}</td>

                        </tr>
                      



                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

  <v-col md="1">
            <br>
        </v-col>

  
   
       


           <v-col  md="6">
         
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
                        
       
                        <tr>
                             <th class="text-left tthh15"  colspan="12" >
                               Visita domiciliaria/ Teleorientación al Recién Nacido (dentro de los 7 días de nacido):
                           </th>
                        </tr>
                        <tr>
                             <th class="text-left tthh11"  colspan="2" rowspan="3">
                               TIPOS DE ACTIVIDAD DE VD/ EDADES
                           </th>
                           
                             <th class="text-center tthh11"  colspan="2">
                               VISITA DOMICILIARIA 
                           </th>
                             <th class="text-center tthh11"  colspan="2">
                               TELESALUD
                           </th>

                        </tr>
                      
                        <tr>
                            <th class="text-center tthh11"  colspan="2">
                               RECIEN NACIDO
                           </th>
                            <th class="text-center tthh11"  colspan="2">
                               RECIEN NACIDO
                           </th>
                          
                         </tr>

                          <tr>
                           <th class="text-center tthh11" >
                               Oportuno >=1 dia y      ME=7 dias
                           </th>
                           <th class="text-center tthh11" >
                               Inoportuno >=8 dias
                           </th>
                          
                           <th class="text-center tthh11" >
                               Oportuno >=1 dia y      ME=7 dias
                           </th>
                           <th class="text-center tthh11" >
                               Inoportuno >=8 dias
                           </th>
                          

                        
                        </tr>
                      
                   

                    </thead>
                    <tbody>
                         <tr>
                            <td colspan="2"> Consejeria en lactancia Materna exclusiva </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var25 ? data.var25 : "-"}}</td>
                                    <td class="text-center">{{data.var26 ? data.var26 : "-"}}</td>

                                    <td class="text-center">{{data.var37 ? data.var37 : "-"}}</td>
                                    <td class="text-center">{{data.var38 ? data.var38 : "-"}}</td>
                        </tr>
                      
                         <tr>
                            <td colspan="2"> Consejería en Corte y cuidado del cordón umbilical </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var27 ? data.var27 : "-"}}</td>
                                    <td class="text-center">{{data.var28 ? data.var28 : "-"}}</td>

                                    <td class="text-center">{{data.var39 ? data.var39 : "-"}}</td>
                                    <td class="text-center">{{data.var40 ? data.var40 : "-"}}</td>
                        </tr>
                      
                      
                         <tr>
                            <td colspan="2"> Consejería en Higiene del recién nacido y cuidado en el hogar </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var29 ? data.var29 : "-"}}</td>
                                    <td class="text-center">{{data.var30 ? data.var30 : "-"}}</td>

                                    <td class="text-center">{{data.var41 ? data.var41 : "-"}}</td>
                                    <td class="text-center">{{data.var42 ? data.var42 : "-"}}</td>
                        </tr>
                         <tr>
                            <td colspan="2"> Consejería en Identificación de signos de alarma </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var31 ? data.var31 : "-"}}</td>
                                    <td class="text-center">{{data.var32 ? data.var32 : "-"}}</td>

                                    <td class="text-center">{{data.var43 ? data.var43 : "-"}}</td>
                                    <td class="text-center">{{data.var44 ? data.var44 : "-"}}</td>
                        </tr>
                      
                         <tr>
                            <td colspan="2"> Consejería en 4 CONTROLES  </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var33 ? data.var33 : "-"}}</td>
                                    <td class="text-center">{{data.var34 ? data.var34 : "-"}}</td>

                                    <td class="text-center">{{data.var45 ? data.var45 : "-"}}</td>
                                    <td class="text-center">{{data.var46 ? data.var46 : "-"}}</td>
                        </tr>
                      
                      
                         <tr>
                            <td colspan="2"> Consejería en VIH </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var35 ? data.var35 : "-"}}</td>
                                    <td class="text-center">{{data.var36 ? data.var36 : "-"}}</td>

                                    <td class="text-center">{{data.var47 ? data.var47 : "-"}}</td>
                                    <td class="text-center">{{data.var48 ? data.var48 : "-"}}</td>
                        </tr>
                      


                        <tr>
                             <th class="text-left tthh15"  colspan="12" >
                               Visita domiciliaria/ Teleorientación  a Niñas (os) de 4 y 5 meses de edad
                           </th>
                        </tr>
                        <tr>
                             <th class="text-left tthh11"  colspan="2" rowspan="3">
                               TIPOS DE ACTIVIDAD DE VD/ EDADES
                           </th>
                           
                             <th class="text-center tthh11"  colspan="2">
                               VISITA DOMICILIARIA 
                           </th>
                             <th class="text-center tthh11"  colspan="2">
                               TELESALUD
                           </th>

                        </tr>
                      
                        <tr>
                            <th class="text-center tthh11"  colspan="2">
                               Entre 4 a 5 meses
                           </th>
                            <th class="text-center tthh11"  colspan="2">
                               Entre 4 a 5 meses
                           </th>
                          
                         </tr>

                          <tr>
                           <th class="text-center tthh11" >
                               4 meses
                           </th>
                           <th class="text-center tthh11" >
                               5 meses
                           </th>
                         
                           <th class="text-center tthh11" >
                               4 meses
                           </th>
                           <th class="text-center tthh11" >
                               5 meses
                           </th>
                         
                          

                        
                        </tr>
                      
                   

                   
                         <tr>
                            <td colspan="2"> Consejeria en suplementación con hierro  </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var49 ? data.var49 : "-"}}</td>
                                    <td class="text-center">{{data.var50 ? data.var50 : "-"}}</td>

                                    <td class="text-center">{{data.var51 ? data.var51 : "-"}}</td>
                                    <td class="text-center">{{data.var52 ? data.var52 : "-"}}</td>
                        </tr>



                    </tbody>
                </template>
            </v-simple-table>
        </v-col>


 <v-col md="1">
            <br>
        </v-col>

    <v-col  md="7">
         
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
                        
       
                         <tr>
                             <th class="text-left tthh15"  colspan="12" >
                               Visita domiciliaria/ Teleorientación  a Niñas (os) de 4 y 5 meses de edad
                           </th>
                        </tr>
                        <tr>
                             <th class="text-left tthh11"  colspan="2" rowspan="3">
                               TIPOS DE ACTIVIDAD DE VD/ EDADES
                           </th>
                           
                             <th class="text-center tthh11"  colspan="3">
                               VISITA DOMICILIARIA 
                           </th>
                             <th class="text-center tthh11"  colspan="3">
                               TELESALUD
                           </th>

                        </tr>
                      
                        <tr>
                            <th class="text-center tthh11"  colspan="3">
                               Entre 6 a 11 meses SIN ANEMIA
                           </th>
                            <th class="text-center tthh11"  colspan="3">
                               Entre 6 a 11 meses SIN ANEMIA
                           </th>
                          
                         </tr>

                          <tr>
                           <th class="text-center tthh11" >
                               6 meses
                           </th>
                           <th class="text-center tthh11" >
                               9 meses
                           </th>
                         
                           <th class="text-center tthh11" >
                               11 meses
                           </th>
                          
                           <th class="text-center tthh11" >
                               6 meses
                           </th>
                           <th class="text-center tthh11" >
                               9 meses
                           </th>
                         
                           <th class="text-center tthh11" >
                               11 meses
                           </th>
                          
                         
                          

                        
                        </tr>
                      

                    </thead>
                    <tbody>
                       
      <tr>
                            <td colspan="2"> Consejeria en suplementación con hierro  </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var53 ? data.var53 : "-"}}</td>
                                    <td class="text-center">{{data.var54 ? data.var54 : "-"}}</td>

                                    <td class="text-center">{{data.var55 ? data.var55 : "-"}}</td>
                                    <td class="text-center">{{data.var56 ? data.var56 : "-"}}</td>
                                    <td class="text-center">{{data.var57 ? data.var57 : "-"}}</td>
                                    <td class="text-center">{{data.var58 ? data.var58 : "-"}}</td>
                        </tr>





                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

 <v-col md="1">
            <br>
        </v-col>

    <v-col  md="9">
         
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
                        


                         <tr>
                             <th class="text-left tthh15"  colspan="12" >
                               Visita domiciliaria/ Teleorientación  a Niñas (os) de 6 a 11 meses de edad CON Dx. Anemia
                           </th>
                        </tr>
                        <tr>
                             <th class="text-left tthh11"  colspan="2" rowspan="3">
                               TIPOS DE ACTIVIDAD DE VD/ EDADES
                           </th>
                           
                             <th class="text-center tthh11"  colspan="6">
                               VISITA DOMICILIARIA 
                           </th>
                             <th class="text-center tthh11"  colspan="6">
                               TELESALUD
                           </th>

                        </tr>
                      
                        <tr>
                            <th class="text-center tthh11"  colspan="6">
                               Entre 6 a 11 meses con ANEMIA
                           </th>
                            <th class="text-center tthh11"  colspan="6">
                               Entre 6 a 11 meses con ANEMIA
                           </th>
                          
                         </tr>

                          <tr>
                           <th class="text-center tthh11" >
                               6 meses
                           </th>
                           <th class="text-center tthh11" >
                               7 meses
                           </th>
                         
                           <th class="text-center tthh11" >
                               8 meses
                           </th>
                          
                           <th class="text-center tthh11" >
                               9 meses
                           </th>
                           <th class="text-center tthh11" >
                               10 meses
                           </th>
                         
                           <th class="text-center tthh11" >
                               11 meses
                           </th>
                          
                           <th class="text-center tthh11" >
                               6 meses
                           </th>
                           <th class="text-center tthh11" >
                               7 meses
                           </th>
                         
                           <th class="text-center tthh11" >
                               8 meses
                           </th>
                          
                           <th class="text-center tthh11" >
                               9 meses
                           </th>
                           <th class="text-center tthh11" >
                               10 meses
                           </th>
                         
                           <th class="text-center tthh11" >
                               11 meses
                           </th>
                          
                         
                          

                        
                        </tr>
                      

                    </thead>
                    <tbody>
                       
      <tr>
                            <td colspan="2"> Consejeria en suplementación con hierro  </td>
                                 
              
                                   
                                    <td class="text-center">{{data.var59 ? data.var59 : "-"}}</td>
                                    <td class="text-center">{{data.var60 ? data.var60 : "-"}}</td>

                                    <td class="text-center">{{data.var61 ? data.var61 : "-"}}</td>
                                    <td class="text-center">{{data.var62 ? data.var62 : "-"}}</td>
                                    <td class="text-center">{{data.var63 ? data.var63 : "-"}}</td>
                                    <td class="text-center">{{data.var64 ? data.var64 : "-"}}</td>
                                   
                                    <td class="text-center">{{data.var65 ? data.var65 : "-"}}</td>
                                    <td class="text-center">{{data.var66 ? data.var66 : "-"}}</td>

                                    <td class="text-center">{{data.var67 ? data.var67 : "-"}}</td>
                                    <td class="text-center">{{data.var68 ? data.var68 : "-"}}</td>
                                    <td class="text-center">{{data.var69 ? data.var69 : "-"}}</td>
                                    <td class="text-center">{{data.var70 ? data.var70 : "-"}}</td>
                        </tr>





                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

<v-col md="1">
            <br>
        </v-col>

<title>  3.FAMILIAS CON NIÑOS (AS) MENORES DE 36 MESES Y GESTANTES QUE PARTICIPAN EN GRUPOS DE APOYO COMUNAL PARA PROMOVER CUIDADO INFANTIL, LME Y LA ADECUADA ALIMENTACIÓN Y PROTECCIÓN DEL MENOR DE 36 MESES </title>
    
      <v-col  md="4">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
                         <tr>
                             <th class="text-left tthh11"  colspan="1" >
                               Reunion
                           </th>
                             <th class="text-left tthh11"  colspan="1" >
                               Nº
                           </th>
                             <th class="text-left tthh11"  colspan="1" >
                               Participantes
                           </th>

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               Reunión de Coordinación -implementación
                           </th>
                           
                                 <td class="text-center">{{data.var71 ? data.var71 : "-"}}</td>
                                 <td class="text-center">{{data.var72 ? data.var72 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               Reunión de Coordinación - Reactivación
                           </th>
                           
                                 <td class="text-center">{{data.var73 ? data.var73 : "-"}}</td>
                                 <td class="text-center">{{data.var74 ? data.var74 : "-"}}</td>
                           

                        </tr>
                      
                    
                      

                    </thead>
                    <tbody>
                       
 




                    </tbody>
                </template>
            </v-simple-table>
        </v-col>   
        <v-col md="1">
            <br>
        </v-col>
         <v-col  md="5">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
                         <tr>
                             <th class="text-left tthh11"  colspan="1" rowspan="2" >
                               ASISTENCIA TECNICA
                           </th>
                             <th class="text-center tthh11"  colspan="2" >
                               LME
                           </th>
                             <th class="text-center tthh11"  colspan="2" >
                               ALI
                           </th>

                        </tr>
                            <tr>
                                 <th class="text-left tthh11"  >
                               N°  DE ASISTENCIA TÉCNICA
                           </th>
                                 <th class="text-left tthh11"  >
                               N° PARTICIPANTES
                           </th>
                                 <th class="text-left tthh11"  >
                               N°  DE ASISTENCIA TÉCNICA
                           </th>
                                 <th class="text-left tthh11"  >
                               N° PARTICIPANTES
                           </th>

                            </tr>

                        <tr>
                             <th class="text-left "  colspan="1" >
                               Asistencia
                           </th>
                           
                                 <td class="text-center">{{data.var89 ? data.var89 : "-"}}</td>
                                 <td class="text-center">{{data.var90 ? data.var90 : "-"}}</td>
                                 <td class="text-center">{{data.var91 ? data.var91 : "-"}}</td>
                                 <td class="text-center">{{data.var92 ? data.var92 : "-"}}</td>
                    
                        </tr>
                      
                      
                    

                      

                    </thead>
                    <tbody>
                       
                    </tbody>


                </template>
            </v-simple-table>
        </v-col>   

      <v-col  md="4">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
                         <tr>
                             <th class="text-left tthh11"  colspan="1" >
                               Taller de capacitación 
                           </th>
                             <th class="text-left tthh11"  colspan="1" rowspan="2" >
                               N°  DE ASISTENCIA TÉCNICA
                           </th>
                             <th class="text-left tthh11"  colspan="1" rowspan="2" >
                               N° PARTICIPANTES
                           </th>

                        </tr>

                 <tr>
                             <th class="text-left tthh11"  colspan="1" >
                               sesion
                           </th>
                         

                        </tr>

                        <tr>
                             <th class="text-left "  colspan="1" >
                               Sesión 1: Habilidades comunicacionales y conducción de grupos de apoyo
                           </th>
                           
                                 <td class="text-center">{{data.var75 ? data.var75 : "-"}}</td>
                                 <td class="text-center">{{data.var76 ? data.var76 : "-"}}</td>
                           

                        </tr>
                  
                        <tr>
                             <th class="text-left "  colspan="1" >
                               Sesión 2: Lactancia materna y embarazo
                           </th>
                           
                                 <td class="text-center">{{data.var77 ? data.var77 : "-"}}</td>
                                 <td class="text-center">{{data.var78 ? data.var78 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               Sesión 3: Lactancia materna y el niño o niña menor de seis mes
                           </th>
                           
                                 <td class="text-center">{{data.var79 ? data.var79 : "-"}}</td>
                                 <td class="text-center">{{data.var80 ? data.var80 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               Sesión 4: Lactancia materna y el niño o niña de seis (6) a veinticuatro (24) meses.
                           </th>
                           
                                 <td class="text-center">{{data.var81 ? data.var81 : "-"}}</td>
                                 <td class="text-center">{{data.var82 ? data.var82 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               Sesión 5: Alimentación complementaria
                           </th>
                           
                                 <td class="text-center">{{data.var83 ? data.var83 : "-"}}</td>
                                 <td class="text-center">{{data.var84 ? data.var84 : "-"}}</td>
                           

                        </tr>
                  
                        <tr>
                             <th class="text-left "  colspan="1" >
                               Sesión 6: Anemia y suplementación con hierro
                           </th>
                           
                                 <td class="text-center">{{data.var85 ? data.var85 : "-"}}</td>
                                 <td class="text-center">{{data.var86 ? data.var86 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               Sesión 7: Desnutrición crónica, cuidado infantil, entre otros temas de prioridad
                           </th>
                           
                                 <td class="text-center">{{data.var87 ? data.var87 : "-"}}</td>
                                 <td class="text-center">{{data.var88 ? data.var88 : "-"}}</td>
                           

                        </tr>
                  
                    
                      

                    </thead>
                    <tbody>
                       
 




                    </tbody>
                </template>
            </v-simple-table>
        </v-col>  


<v-col md="1">
            <br>
        </v-col>

  <v-col  md="5">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
                         <tr>
                             <th class="text-left tthh11"  colspan="1" rowspan="2" >
                               Funcionamiento de los grupos de apoyo
                           </th>
                             <th class="text-center tthh11"  colspan="2" >
                               LME
                           </th>
                             <th class="text-center tthh11"  colspan="2" >
                               ALI
                           </th>

                        </tr>
                            <tr>
                                 <th class="text-left tthh11"  >
                               N°  sesion
                           </th>
                                 <th class="text-left tthh11"  >
                               N° PARTICIPANTES
                           </th>
                                 <th class="text-left tthh11"  >
                               N°  sesion
                           </th>
                                 <th class="text-left tthh11"  >
                               N° PARTICIPANTES
                           </th>

                            </tr>

                        <tr>
                             <th class="text-left "  colspan="1" >
                               Asistencia
                           </th>
                           
                                 <td class="text-center">{{data.var93 ? data.var93 : "-"}}</td>
                                 <td class="text-center">{{data.var94 ? data.var94 : "-"}}</td>
                                 <td class="text-center">{{data.var95 ? data.var95 : "-"}}</td>
                                 <td class="text-center">{{data.var96 ? data.var96 : "-"}}</td>
                    
                        </tr>
                      
                      
                    <br>
                    <br>
                      <tr>
                             <th class="text-left tthh11"  colspan="1" >
                               monitoreo
                           </th>
                             <th class="text-left tthh11"  colspan="1" >
                               Nº de sesion 
                           </th>
                             <th class="text-left tthh11"  colspan="1" >
                               Nº Participantes
                           </th>

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               1er Monitoreo
                           </th>
                           
                                 <td class="text-center">{{data.var97 ? data.var97 : "-"}}</td>
                                 <td class="text-center">{{data.var98 ? data.var98 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               2do Monitoreo
                           </th>
                           
                                 <td class="text-center">{{data.var99  ? data.var99 : "-"}}</td>
                                 <td class="text-center">{{data.var100 ? data.var74 : "-"}}</td>
                        </tr>
                      


                      

                    </thead>
                    <tbody>
                       
                    </tbody>


                </template>
            </v-simple-table>
        </v-col>   
  

  
  <v-col md="1">
            <br>
        </v-col>

  <v-col  md="10">
         
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead >
                                <tr>
                                    <td colspan="12" class="tthh14">
                                                            <h2>   1. FAMILIAS DE LA GESTANTE Y PUÉRPERA QUE RECIBEN </h2> 
                                                            </td>
                                </tr>
                            <tr>
                                <td colspan="12" class="tthh15">
                                                        <h3>   Consejería durante el periodo gestacional. </h3> 
                                                        </td>
                            </tr>
                        <tr> 
                            <td colspan="7">
                             <b>  Consejería durante el periodo gestacional.</b> 
                            </td>
                            
                            <td colspan="6">
                            <b>  Consejería durante el periodo post natal </b>  
                            </td></tr>
                        <tr>
                           
                             <td class="text-center " >{{ }}</td>
                           
                             <th class="text-center tthh11"  colspan="2">
                               VISITA DOMICILIARIA
                           </th>
                             <td class="text-center " >{{ }}</td>
                           
                             <th class="text-center tthh11"  colspan="2">
                               telesalud
                           </th>
                            <td class="text-center " >{{ }}</td>
                            <td class="text-center " >{{ }}</td>

                               <th class="text-center tthh11"  colspan="2">
                               VISITA DOMICILIARIA
                           </th>
                             <td class="text-center " >{{ }}</td>
                           
                             <th class="text-center tthh11"  colspan="2">
                               telesalud
                           </th>

                        </tr>
                      
                    <tr>
                            <td class="text-center " >{{ }}</td>
                           
                            <th class="text-center tthh11" >
                               1° Consejería
                            </th>
                             <th class="text-center tthh11" >
                               2° Consejería
                            </th>
                              <td class="text-center " >{{ }}</td>
                           
                            <th class="text-center tthh11" >
                               1° Consejería
                            </th>
                             <th class="text-center tthh11" >
                               2° Consejería
                            </th>
                            <td class="text-center " >{{ }}</td>
                            <td class="text-center " >{{ }}</td>

                            <th class="text-center tthh11" >
                               1° Consejería
                            </th>
                             <th class="text-center tthh11" >
                               2° Consejería
                            </th>
                              <td class="text-center " >{{ }}</td>
                           
                            <th class="text-center tthh11" >
                               1° Consejería
                            </th>
                             <th class="text-center tthh11" >
                               2° Consejería
                            </th>
                            </tr>

                          <tr>


                          <th class="text-center tthh11">
                               I Trimestre
                           </th>
                       
                          <th class="text-center tthh11">
                               II Trimestre
                           </th>
                       
                          <th class="text-center tthh11">
                               III Trimestre
                           </th>
                       
                         <th class="text-center tthh11">
                               I Trimestre
                           </th>
                       
                          <th class="text-center tthh11">
                               II Trimestre
                           </th>
                       
                          <th class="text-center tthh11">
                               III Trimestre
                           </th>
                       
                            <td class="text-center " >{{ }}</td>

                            
                          <th class="text-center tthh11">
                                otro momento diferente 
                           </th>
                       
                          <th class="text-center tthh11">
                               7 días de producido el parto
                           </th>
                       
                          <th class="text-center tthh11">
                               Entre los 28 y 30 días de producido el parto
                           </th>
                       
                         <th class="text-center tthh11">
                                otro momento diferente 
                           </th>
                       
                          <th class="text-center tthh11">
                               7 días de producido el parto
                           </th>
                       
                          <th class="text-center tthh11">
                               Entre los 28 y 30 días de producido el parto
                           </th>
                       
                        </tr>
                      
                   

                    </thead>
                    <tbody>
                         <tr>
                          
                                    <td class="text-center">{{data.var137 ? data.var137 : "-"}}</td>
                                    <td class="text-center">{{data.var138 ? data.var138 : "-"}}</td>
                                    <td class="text-center">{{data.var139 ? data.var139 : "-"}}</td>
                                    <td class="text-center">{{data.var140 ? data.var140 : "-"}}</td>
                                    <td class="text-center">{{data.var141 ? data.var141 : "-"}}</td>
                                    <td class="text-center">{{data.var142 ? data.var142 : "-"}}</td>
              
                                
                                   
                                    
                                    <td class="text-center "  >{{ }}</td>

                                    <td class="text-center">{{data.var143 ? data.var143 : "-"}}</td>
                                    <td class="text-center">{{data.var144 ? data.var144 : "-"}}</td>
                                    <td class="text-center">{{data.var145 ? data.var145 : "-"}}</td>
                                    <td class="text-center">{{data.var146 ? data.var146 : "-"}}</td>
                                    <td class="text-center">{{data.var147 ? data.var147 : "-"}}</td>
                                    <td class="text-center">{{data.var148 ? data.var148 : "-"}}</td>
                                    
  
                        </tr>
                      
                      



                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
<v-col md="1">
            <br>
        </v-col>

  <v-col md="12">
      <tr>
            <td class="tthh14"><h2>3. FAMILIAS DE ADOLESCENTES QUE RECIBEN SESIONES EDUCATIVAS Y DEMOSTRATIVA PARA PROMOVER PRÁCTICAS SALUDABLES EN SALUD SEXUAL INTEGRAL</h2></td>
       </tr>
        </v-col>

<v-col  md="4">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
       <tr>
            <th class="text-left tthh15"  colspan="4" >
                               Sesiones educativas y demostrativas a familias de adolescentes
                           </th>
       </tr>
                         <tr>
                            
                             <th class="text-left tthh11"  colspan="1"  >
                               Tematica
                           </th>
                             <th class="text-left tthh11"  colspan="1"  >
                               N° 
                           </th>
                             <th class="text-left tthh11"  colspan="1"  >
                               Participantes
                           </th>

                        </tr>

               

                        <tr>
                             <th class="text-left "  colspan="1" >
                               1er eje temático: Sexualidad.
                           </th>
                           
                                 <td class="text-center">{{data.var161 ? data.var161 : "-"}}</td>
                                 <td class="text-center">{{data.var162 ? data.var162 : "-"}}</td>
                           

                        </tr>
                  
                        <tr>
                             <th class="text-left "  colspan="1" >
                               2do eje temático: Identidad.
                           </th>
                           
                                 <td class="text-center">{{data.var163 ? data.var163 : "-"}}</td>
                                 <td class="text-center">{{data.var164 ? data.var164 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               3er eje temático: Cambios en la Pubertad y Adolescencia.
                           </th>
                           
                                 <td class="text-center">{{data.var165 ? data.var165 : "-"}}</td>
                                 <td class="text-center">{{data.var166 ? data.var166 : "-"}}</td>
                           

                        </tr>
                  
                        <tr>
                             <th class="text-left "  colspan="1" >
                               4to eje temático: Igualdad de género.
                           </th>
                           
                                 <td class="text-center">{{data.var167 ? data.var167 : "-"}}</td>
                                 <td class="text-center">{{data.var168 ? data.var168 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               5to eje temático: Relaciones afectivas y libres de violencia.
                           </th>
                           
                                 <td class="text-center">{{data.var169 ? data.var169 : "-"}}</td>
                                 <td class="text-center">{{data.var170 ? data.var170 : "-"}}</td>
                           

                        </tr>
                  
                        <tr>
                             <th class="text-left "  colspan="1" >
                               6to eje temático: Previniendo el abuso sexual y maltrato.
                           </th>
                           
                                 <td class="text-center">{{data.var171 ? data.var171 : "-"}}</td>
                                 <td class="text-center">{{data.var172 ? data.var172 : "-"}}</td>
                           

                        </tr>
                        <tr>
                             <th class="text-left "  colspan="1" >
                               7to eje temático: Planificando el futuro.
                           </th>
                           
                                 <td class="text-center">{{data.var173 ? data.var173 : "-"}}</td>
                                 <td class="text-center">{{data.var174 ? data.var174 : "-"}}</td>
                           

                        </tr>
                  
                    
                    
                      

                    </thead>
                    <tbody>
                       
 




                    </tbody>
                </template>
            </v-simple-table>
        </v-col>  
 <v-col md="12">
      <tr>
            <td class="tthh14"><h3>1. FAMILIAS QUE RECIBEN CONSEJERÍA A TRAVÉS DE VISITA DOMICILIARIA PARA PROMOVER PRÁCTICAS Y ENTORNOS SALUDABLES PARA
CONTRIBUIR A LA DISMINUCION DE LA TUBERCULOSIS Y VIH/SIDA</h3></td>
       </tr>
        </v-col>

<v-col  md="4">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
       <tr>
            <th class="text-left tthh15"  colspan="4" >
                               Consejería integral a través de visitas domiciliarias en prácticas saludables y medidas preventivas (TBC)
                           </th>
       </tr>
                         <tr>
                            
                             <th class="text-center tthh11"  colspan="2"  >
                               visita domiciliaria
                           </th>
                             <th class="text-center tthh11"  colspan="2"  >
                               TELESALUD
                           </th>
                           

                        </tr>

               

                        <tr>
                             <th class="text-left tthh11 "   >
                               1° Consejería
                           </th>
                             <th class="text-left tthh11 "   >
                               2° Consejería
                           </th>
                           
                             <th class="text-left tthh11 "   >
                               1° Consejería
                           </th>
                             <th class="text-left tthh11 "   >
                               2° Consejería
                           </th>
                           
                              

                        </tr>
                  

                        <tr>
  
                                 <td class="text-center">{{data.var233 ? data.var233 : "-"}}</td>
                                 <td class="text-center">{{data.var234 ? data.var234 : "-"}}</td>
                                 <td class="text-center">{{data.var235 ? data.var235 : "-"}}</td>
                                 <td class="text-center">{{data.var236 ? data.var236 : "-"}}</td>
                           

                        </tr>
                       
                      

                    </thead>
                    <tbody>
                       
 




                    </tbody>
                </template>
            </v-simple-table>
        </v-col> 

<v-col md="12">
      <tr>
            <td class="tthh14"><h3>2. FAMILIAS QUE RECIBEN SESIÓN EDUCATIVA Y
DEMOSTRATIVA PARA PROMOVER PRÁCTICAS Y ENTORNOS SALUDABLES PARA
CONTRIBUIR A LA DISMINUCION DE LA TUBERCULOSIS Y VIH/SIDA</h3></td>
       </tr>
        </v-col>

<v-col  md="5">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
       <tr>
            <th class="text-left tthh15"  colspan="6" >
                              Sesiones Educativas y demostrativas
                           </th>
       </tr>
                         <tr>
                             <td class="text-center"  colspan="2">{{ }}</td>
                             <th class="text-center tthh11"  colspan="2"  >
                               TBC
                           </th>
                             <th class="text-center tthh11"  colspan="2"  >
                               VIH
                           </th>
                           

                        </tr>

               

                        <tr>
                             <th class="text-left tthh11 "  colspan="2"  >
                               Sesiones educativas y demostrativas
                           </th>
                             <th class="text-left tthh11 "   >
                               Nº
                           </th>
                             <th class="text-left tthh11 "   >
                               Participantes
                           </th>
                             <th class="text-left tthh11 "   >
                               Nº
                           </th>
                             <th class="text-left tthh11 "   >
                               Participantes
                           </th>
                           

                        </tr>
                  

                        <tr>
                               <th class="text-left tthh11 "  colspan="2"   >
                               1º sesión educativa y demostrativa
                           </th>
  
                                 <td class="text-center">{{data.var237 ? data.var237 : "-"}}</td>
                                 <td class="text-center">{{data.var238 ? data.var238 : "-"}}</td>
                                 <td class="text-center">{{data.var241 ? data.var241 : "-"}}</td>
                                 <td class="text-center">{{data.var242 ? data.var242 : "-"}}</td>
                           

                        </tr>
                        <tr>
                               <th class="text-left tthh11 "   colspan="2" >
                               2º sesión educativa y demostrativa
                           </th>
  
                                 <td class="text-center">{{data.var239 ? data.var239 : "-"}}</td>
                                 <td class="text-center">{{data.var240 ? data.var240 : "-"}}</td>
                                 <td class="text-center">{{data.var243 ? data.var243 : "-"}}</td>
                                 <td class="text-center">{{data.var244 ? data.var244 : "-"}}</td>
                           

                        </tr>
                       
                      

                    </thead>
                    <tbody>
                       
 




                    </tbody>
                </template>
            </v-simple-table>
        </v-col> 

<v-col md="12">
      <tr>
            <td class="tthh14"><h3>1. FAMILIAS QUE DESARROLLAN PRÁCTICAS SALUDABLES PARA LA PREVENCIÓN DE LAS ENFERMEDADES METAXÉNICAS</h3></td>
       </tr>
        </v-col>

<v-col  md="7">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
       <tr>
            <th class="text-left tthh15"  colspan="9" >
                              Consejeria (dengue)
                           </th>
       </tr>
                         <tr>
                           
                             <th class="text-center tthh11"  colspan="4"  >
                               Tematica
                           </th>
                             <th class="text-center tthh11"  colspan="1"  >
                               Nº
                           </th>
                           

                        </tr>

               

                   

                        <tr>
                               <th class="text-left  "  colspan="4"   >
                               Sensibilizar a la familia sobre la importancia de la apertura de sus casas para intervenciones sanitaria
                           </th>
  
                                 <td class="text-center">{{data.var355 ? data.var355 : "-"}}</td>
                       
                           

                        </tr>
                     
                        <tr>
                               <th class="text-left  "  colspan="4"   >
                               Higiene y ordenamiento de la vivienda para eliminación de criaderos

                           </th>
  
                                 <td class="text-center">{{data.var356 ? data.var356 : "-"}}</td>
                       
                           

                        </tr>
                     

                     <br>
                     
       <tr>
            <th class="text-left tthh15"  colspan="9" >
                              Sesión demostrativa
                           </th>
       </tr>

       <tr>
           <th class="text-center tthh11"   >
                               Sesión demostrativa
                           </th>
           <th class="text-center tthh11"   >
                               Malaria (01)
                           </th>
           <th class="text-center tthh11"   >
                               Dengue (05)
                           </th>
           <th class="text-center tthh11"   >
                               Chikungunya (02)
                           </th>
           <th class="text-center tthh11"   >
                               Zika (03)
                           </th>
           <th class="text-center tthh11"   >
                               Bartonelosis (06)
                           </th>
           <th class="text-center tthh11"   >
                               Fiebre Amarilla (07)
                           </th>
           <th class="text-center tthh11"   >
                               Chagas (08)
                           </th>
           <th class="text-center tthh11"   >
                               Leishmaniosis (09)
                           </th>
       </tr>

                     
                        <tr>
                             <th class="text-left  tthh11"  colspan="1" >
                               1º Sesión 
                           </th>
                           
                                 <td class="text-center">{{data.var357 ? data.var357 : "-"}}</td>
                                 <td class="text-center">{{data.var358 ? data.var358 : "-"}}</td>
                                 <td class="text-center">{{data.var359 ? data.var359 : "-"}}</td>
                                 <td class="text-center">{{data.var360 ? data.var360 : "-"}}</td>
                                 <td class="text-center">{{data.var361 ? data.var361 : "-"}}</td>
                                 <td class="text-center">{{data.var362 ? data.var362 : "-"}}</td>
                                 <td class="text-center">{{data.var363 ? data.var363 : "-"}}</td>
                                 <td class="text-center">{{data.var364 ? data.var364 : "-"}}</td>
                           
                        </tr>

                    


                    </thead>
                    <tbody>
                       
 




                    </tbody>
                </template>
            </v-simple-table>
        </v-col> 

<v-col md="12">
      <tr>
            <td class="tthh14"><h3>2. FAMILIAS QUE DESARROLLAN PRÁCTICAS SALUDABLES PARA LA PREVENCIÓN DE LAS ENFERMEDADES ZOONOTICAS</h3></td>
       </tr>
        </v-col>

<v-col  md="7">
      
            <v-simple-table  dense>
                <template  v-slot:default>
                                        
                    <thead>
       
       <tr>
            <th class="text-left tthh15"  colspan="3" >
                              Consejeria (rabia)
                           </th>
       </tr>
                         <tr>
                           
                             <th class="text-center tthh11"  colspan="2"  >
                               Tematica
                           </th>
                             <th class="text-center tthh11"  colspan="1"  >
                               Nº
                           </th>
                           

                        </tr>

               

                   

                        <tr>
                               <th class="text-left  "  colspan="2"   >
                               Consejeria triada preventiva de rabia
                           </th>
  
                                 <td class="text-center">{{data.var365 ? data.var365 : "-"}}</td>
                       
                           

                        </tr>
                     

<br>

                     <br>
                     
       <tr>
            <th class="text-left tthh15"  colspan="9" >
                              Sesión educativa
                           </th>
       </tr>

       <tr>
           <th class="text-center tthh11"   >
                               Sesión demostrativa
                           </th>
           <th class="text-center tthh11"   >
                               Rabia (04)
                           </th>
           <th class="text-center tthh11"   >
                               Peste (010)
                           </th>
           <th class="text-center tthh11"   >
                               Leptospirosis (011)
                           </th>
           <th class="text-center tthh11"   >
                               Tifus (012)
                           </th>
           <th class="text-center tthh11"   >
                               Equinococosis (013)
                           </th>
   

                     
                        <tr>
                             <th class="text-left  "  colspan="1" >
                               1º Sesión 
                           </th>
                           
                                 <td class="text-center">{{data.var366 ? data.var366 : "-"}}</td>
                                 <td class="text-center">{{data.var367 ? data.var367 : "-"}}</td>
                                 <td class="text-center">{{data.var368 ? data.var368 : "-"}}</td>
                                 <td class="text-center">{{data.var369 ? data.var369 : "-"}}</td>
                                 <td class="text-center">{{data.var370 ? data.var370 : "-"}}</td>
                              
                           
                        </tr>
                    
                        <tr>
                             <th class="text-left  "  colspan="1" >
                               2º Sesión 
                           </th>
                           
                                 <td class="text-center">{{data.var371 ? data.var371 : "-"}}</td>
                                 <td class="text-center">{{data.var372 ? data.var372 : "-"}}</td>
                                 <td class="text-center">{{data.var373 ? data.var373 : "-"}}</td>
                                 <td class="text-center">{{data.var374 ? data.var374 : "-"}}</td>
                                 <td class="text-center">{{data.var375 ? data.var375 : "-"}}</td>
                              
                           
                        </tr>
                    


                    </thead>
                    <tbody>
                       
 




                    </tbody>
                </template>
            </v-simple-table>
        </v-col> 
    </v-row>
</template>

<style>

.tthh11
{
 color: white !important;
  background-color: rgb(2, 129, 248);
}

.tthh12
{
 color: white !important;
  background-color: rgb(214, 42, 19);
}
.tthh13
{
 color: rgb(139, 116, 116) !important;
  background-color: rgb(134, 132, 132);
}
.tthh14
{
 color: rgb(241, 21, 21) !important;
  background-color: rgb(246, 246, 246);
}
.tthh15
{
 color: rgb(4, 128, 243) !important;
  background-color: rgb(246, 246, 246);
}



table, td, th {  
  border: 1px solid rgb(114, 113, 113);
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}

td:hover {background-color: rgb(219, 246, 129);}
</style>


<script>
export default ({
    data: () => ({
        datos: '',
        data: [],
        data2: [],
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
            await this.axios.get(this.$api_url + '/reporte/TEMPORAL_PROMSA_21/1-1000',{
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
                this.totalv1 = parseInt(response.data[0].var1) +  parseInt(response.data[0].var2) 
                this.totalv2 = parseInt(response.data[0].var5) 
                this.totalv3 = parseInt(response.data[0].var3) +  parseInt(response.data[0].var4)
                this.totalv4 = parseInt(response.data[0].var6) +  parseInt(response.data[0].var7) +parseInt(response.data[0].var8) 

                this.totalv5 = parseInt(response.data[0].var9) +  parseInt(response.data[0].var10) 
                this.totalv6 = parseInt(response.data[0].var13) 
                this.totalv7 = parseInt(response.data[0].var11) +  parseInt(response.data[0].var12)
                this.totalv8 = parseInt(response.data[0].var14) +  parseInt(response.data[0].var15) +parseInt(response.data[0].var16) 
              
                this.totalv9 = parseInt(response.data[0].var17) +  parseInt(response.data[0].var18) 
                this.totalv10 = parseInt(response.data[0].var21) 
                this.totalv11 = parseInt(response.data[0].var19) +  parseInt(response.data[0].var20)
                this.totalv12 = parseInt(response.data[0].var22) +  parseInt(response.data[0].var23) +parseInt(response.data[0].var24) 
              
                this.total5 = parseInt(response.data[0].var25) +  parseInt(response.data[0].var26) +parseInt(response.data[0].var27) + parseInt(response.data[0].var28)+ parseInt(response.data[0].var29)
                this.total6 = parseInt(response.data[0].var30) +  parseInt(response.data[0].var31) +parseInt(response.data[0].var32) + parseInt(response.data[0].var33)+ parseInt(response.data[0].var34)
              







            })
            await this.axios.get(this.$api_url + '/reporte/TEMPORAL_PROMSA_21_2/1001-1499',{
                params: {
                    establecimiento: this.verifica(search.establecimiento),
                    mes: this.verifica(search.mes),
                    anio: this.verifica(search.anio),
                    unidad: this.verifica(search.unidad),
                    red: this.verifica(search.red),
                    microred: this.verifica(search.microred),
                }
            }).then(response => {
               this.data2 = response.data[0]
              
                this.totalA1 = parseInt(response.data[0].var528) +  parseInt(response.data[0].var529) +  parseInt(response.data[0].var530) 
                this.totalA2 = parseInt(response.data[0].var531) +  parseInt(response.data[0].var532) +  parseInt(response.data[0].var533) 
                this.totalA3 = parseInt(response.data[0].var534) +  parseInt(response.data[0].var535) +  parseInt(response.data[0].var536) 
              

              
            })
        },
    },
    
    
})
</script>

<template>
    <v-row >
       
        <v-col md="12">
            <v-simple-table dense style="overflow-x: auto !important;">
                <template v-slot:default>
                    <thead>
                          <tr>
                           <th class="text-left tthh1" rowspan="3" colspan="2">
                               1.-  POBLACION GENERAL: ITS
                           </th>
                             <th class="text-center tthh2" colspan="10">
                              F
                           </th>
                             <th class="text-center tthh1" colspan="10">
                              M
                           </th>
                             <th class="text-center tthh2" colspan="4">
                              total
                           </th>

                       </tr>

                    <tr>
                          <th class="text-center tthh4"  colspan="2">
                               01d - 11a
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               12a - 17a
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               18a - 29a
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               30a - 59a
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               60a más
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               01d - 11a
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               12a - 17a
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               18a - 29a
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               30a - 59a
                           </th>
                          <th class="text-center tthh4"  colspan="2">
                               60a más
                           </th>
                   
                          <th class="text-left tthh2"  colspan="2">
                               DIAGNOSTICO
                           </th>
                          <th class="text-left tthh2"  colspan="2">
                               TRATADO
                           </th>
                        
                    </tr>
                      
<tr>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>

    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>
    <th>DIAGNOSTICO</th>
    <th>TRATADO</th>

<th>F</th>
    <th>M</th>
    <th>F</th>
    <th>M</th>
</tr>

<tr>
    <th class="text-left "  colspan="2">
                               PERSONAS CON MANEJO SINDROMICO
                           </th>
    <td class="text-center">{{data.var1 ? data.var1 : "-"}}</td>
    <td class="text-center">{{data.var11 ? data.var11 : "-"}}</td>
    <td class="text-center">{{data.var2 ? data.var2 : "-"}}</td>
    <td class="text-center">{{data.var12 ? data.var12 : "-"}}</td>
    <td class="text-center">{{data.var3 ? data.var3 : "-"}}</td>
    <td class="text-center">{{data.var13 ? data.var13 : "-"}}</td>
    <td class="text-center">{{data.var4 ? data.var4 : "-"}}</td>
    <td class="text-center">{{data.var14 ? data.var14 : "-"}}</td>
    <td class="text-center">{{data.var5 ? data.var5 : "-"}}</td>
    <td class="text-center">{{data.var15 ? data.var15 : "-"}}</td>

    <td class="text-center">{{data.var6 ? data.var6 : "-"}}</td>
    <td class="text-center">{{data.var16 ? data.var16 : "-"}}</td>
    <td class="text-center">{{data.var7 ? data.var7 : "-"}}</td>
    <td class="text-center">{{data.var17 ? data.var17 : "-"}}</td>
    <td class="text-center">{{data.var8 ? data.var8 : "-"}}</td>
    <td class="text-center">{{data.var18 ? data.var18 : "-"}}</td>
    <td class="text-center">{{data.var9 ? data.var9 : "-"}}</td>
    <td class="text-center">{{data.var19 ? data.var19 : "-"}}</td>
    <td class="text-center">{{data.var10 ? data.var10 : "-"}}</td>
    <td class="text-center">{{data.var20 ? data.var20 : "-"}}</td>

      <td class="text-center">{{total1}}</td>
      <td class="text-center">{{total2}}</td>
      <td class="text-center">{{total3}}</td>
      <td class="text-center">{{total4}}</td>
</tr>
                      

                      
<tr>
    <th class="text-left "  colspan="2">
                              CASOS DE DESCARGA URETRAL
                           </th>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>

    <td class="text-center">{{data.var25 ? data.var25 : "-"}}</td>
    <td class="text-center">{{data.var30 ? data.var30 : "-"}}</td>
    <td class="text-center">{{data.var26 ? data.var26 : "-"}}</td>
    <td class="text-center">{{data.var31 ? data.var31 : "-"}}</td>
    <td class="text-center">{{data.var27 ? data.var27 : "-"}}</td>
    <td class="text-center">{{data.var32 ? data.var32 : "-"}}</td>
    <td class="text-center">{{data.var28 ? data.var28 : "-"}}</td>
    <td class="text-center">{{data.var33 ? data.var33 : "-"}}</td>
    <td class="text-center">{{data.var29 ? data.var29 : "-"}}</td>
    <td class="text-center">{{data.var34 ? data.var34 : "-"}}</td>

      <td class="text-center tthh3">{{ }}</td>
      <td class="text-center">{{total5}}</td>
      <td class="text-center tthh3">{{ }}</td>
      <td class="text-center">{{total6}}</td>
     
</tr>
                 
              
<tr>
    <th class="text-left "  colspan="2">
                              CASOS DE FLUJO VAGINAL COMPATIBLE CON ITS
                           </th>
   

    <td class="text-center">{{data.var39 ? data.var39 : "-"}}</td>
    <td class="text-center">{{data.var44 ? data.var44 : "-"}}</td>
    <td class="text-center">{{data.var40 ? data.var40 : "-"}}</td>
    <td class="text-center">{{data.var45 ? data.var45 : "-"}}</td>
    <td class="text-center">{{data.var41 ? data.var41 : "-"}}</td>
    <td class="text-center">{{data.var46 ? data.var46 : "-"}}</td>
    <td class="text-center">{{data.var42 ? data.var42 : "-"}}</td>
    <td class="text-center">{{data.var47 ? data.var47 : "-"}}</td>
    <td class="text-center">{{data.var43 ? data.var43 : "-"}}</td>
    <td class="text-center">{{data.var48 ? data.var48 : "-"}}</td>

     <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>

      <td class="text-center">{{total7}}</td>
      <td class="text-center tthh3">{{ }}</td>
      <td class="text-center">{{total8}}</td>
      <td class="text-center tthh3">{{ }}</td>
     
</tr>
        
<tr>
    <th class="text-left "  colspan="2">
                               PERSONAS CON MANEJO SINDROMICO
                           </th>
    <td class="text-center">{{data.var53 ? data.var53 : "-"}}</td>
    <td class="text-center">{{data.var63 ? data.var63 : "-"}}</td>
    <td class="text-center">{{data.var54 ? data.var54 : "-"}}</td>
    <td class="text-center">{{data.var64 ? data.var64 : "-"}}</td>
    <td class="text-center">{{data.var55 ? data.var55 : "-"}}</td>
    <td class="text-center">{{data.var65 ? data.var65 : "-"}}</td>
    <td class="text-center">{{data.var56 ? data.var56 : "-"}}</td>
    <td class="text-center">{{data.var66 ? data.var66 : "-"}}</td>
    <td class="text-center">{{data.var57 ? data.var57 : "-"}}</td>
    <td class="text-center">{{data.var67 ? data.var67 : "-"}}</td>

    <td class="text-center">{{data.var58 ? data.var58 : "-"}}</td>
    <td class="text-center">{{data.var68 ? data.var68 : "-"}}</td>
    <td class="text-center">{{data.var59 ? data.var59 : "-"}}</td>
    <td class="text-center">{{data.var69 ? data.var69 : "-"}}</td>
    <td class="text-center">{{data.var60 ? data.var60 : "-"}}</td>
    <td class="text-center">{{data.var70 ? data.var70 : "-"}}</td>
    <td class="text-center">{{data.var61 ? data.var61 : "-"}}</td>
    <td class="text-center">{{data.var71 ? data.var71 : "-"}}</td>
    <td class="text-center">{{data.var62 ? data.var62 : "-"}}</td>
    <td class="text-center">{{data.var72 ? data.var72 : "-"}}</td>

      <td class="text-center">{{total9}}</td>
      <td class="text-center">{{total10}}</td>
      <td class="text-center">{{total11}}</td>
      <td class="text-center">{{total12}}</td>
</tr>        

    
<tr>
    <th class="text-left "  colspan="2">
                               CASOS DE BUBON INGUINAL
                           </th>
    <td class="text-center">{{data.var77 ? data.var77 : "-"}}</td>
    <td class="text-center">{{data.var87 ? data.var87 : "-"}}</td>
    <td class="text-center">{{data.var78 ? data.var78 : "-"}}</td>
    <td class="text-center">{{data.var88 ? data.var88 : "-"}}</td>
    <td class="text-center">{{data.var79 ? data.var79 : "-"}}</td>
    <td class="text-center">{{data.var89 ? data.var89 : "-"}}</td>
    <td class="text-center">{{data.var80 ? data.var80 : "-"}}</td>
    <td class="text-center">{{data.var90 ? data.var90 : "-"}}</td>
    <td class="text-center">{{data.var81 ? data.var81 : "-"}}</td>
    <td class="text-center">{{data.var91 ? data.var91 : "-"}}</td>

    <td class="text-center">{{data.var82 ? data.var82 : "-"}}</td>
    <td class="text-center">{{data.var92 ? data.var92 : "-"}}</td>
    <td class="text-center">{{data.var83 ? data.var83 : "-"}}</td>
    <td class="text-center">{{data.var93 ? data.var93 : "-"}}</td>
    <td class="text-center">{{data.var84 ? data.var84 : "-"}}</td>
    <td class="text-center">{{data.var94 ? data.var94 : "-"}}</td>
    <td class="text-center">{{data.var85 ? data.var85 : "-"}}</td>
    <td class="text-center">{{data.var95 ? data.var95 : "-"}}</td>
    <td class="text-center">{{data.var86 ? data.var86 : "-"}}</td>
    <td class="text-center">{{data.var96 ? data.var96 : "-"}}</td>

      <td class="text-center">{{total13}}</td>
      <td class="text-center">{{total14}}</td>
      <td class="text-center">{{total15}}</td>
      <td class="text-center">{{total16}}</td>
</tr>    

            
              
<tr>
    <th class="text-left "  colspan="2">
             CASOS CON SINDROME DE DOLOR ABDOMINAL BAJO
                           </th>
   

    <td class="text-center">{{data.var101 ? data.var101 : "-"}}</td>
    <td class="text-center">{{data.var106 ? data.var106 : "-"}}</td>
    <td class="text-center">{{data.var102 ? data.var102 : "-"}}</td>
    <td class="text-center">{{data.var107 ? data.var107 : "-"}}</td>
    <td class="text-center">{{data.var103 ? data.var103 : "-"}}</td>
    <td class="text-center">{{data.var108 ? data.var108 : "-"}}</td>
    <td class="text-center">{{data.var104 ? data.var104 : "-"}}</td>
    <td class="text-center">{{data.var109 ? data.var109 : "-"}}</td>
    <td class="text-center">{{data.var105 ? data.var105 : "-"}}</td>
    <td class="text-center">{{data.var110 ? data.var110 : "-"}}</td>

     <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>
    <td class="text tthh3">{{ }}</td>

      <td class="text-center">{{total17}}</td>
      <td class="text-center tthh3">{{ }}</td>
      <td class="text-center">{{total18}}</td>
      <td class="text-center tthh3">{{ }}</td>
     
</tr>

    
<tr>
    <th class="text-left "  colspan="2">
                               PERSONAS CON MANEJO ETIOLOGICO
                           </th>
    <td class="text-center">{{data.var115 ? data.var115 : "-"}}</td>
    <td class="text-center">{{data.var125 ? data.var125 : "-"}}</td>
    <td class="text-center">{{data.var116 ? data.var116 : "-"}}</td>
    <td class="text-center">{{data.var126 ? data.var126 : "-"}}</td>
    <td class="text-center">{{data.var117 ? data.var117 : "-"}}</td>
    <td class="text-center">{{data.var127 ? data.var127 : "-"}}</td>
    <td class="text-center">{{data.var118 ? data.var118 : "-"}}</td>
    <td class="text-center">{{data.var128 ? data.var128 : "-"}}</td>
    <td class="text-center">{{data.var119 ? data.var119 : "-"}}</td>
    <td class="text-center">{{data.var129 ? data.var129 : "-"}}</td>
    
    <td class="text-center">{{data.var120 ? data.var120 : "-"}}</td>
    <td class="text-center">{{data.var130 ? data.var130 : "-"}}</td>
    <td class="text-center">{{data.var121 ? data.var121 : "-"}}</td>
    <td class="text-center">{{data.var131 ? data.var131 : "-"}}</td>
    <td class="text-center">{{data.var122 ? data.var122 : "-"}}</td>
    <td class="text-center">{{data.var132 ? data.var132 : "-"}}</td>
    <td class="text-center">{{data.var123 ? data.var123 : "-"}}</td>
    <td class="text-center">{{data.var133 ? data.var133 : "-"}}</td>
    <td class="text-center">{{data.var124 ? data.var124 : "-"}}</td>
    <td class="text-center">{{data.var134 ? data.var134 : "-"}}</td>

      <td class="text-center">{{total19}}</td>
      <td class="text-center">{{total20}}</td>
      <td class="text-center">{{total21}}</td>
      <td class="text-center">{{total22}}</td>

</tr>    

           
<tr>
    <th class="text-left "  colspan="2">
             CASOS CON GONORREA
                           </th>
   

    <td class="text-center">{{data.var139 ? data.var139 : "-"}}</td>
    <td class="text-center">{{data.var149 ? data.var149 : "-"}}</td>
    
    <td class="text-center">{{data.var140 ? data.var140 : "-"}}</td>
    <td class="text-center">{{data.var150 ? data.var150 : "-"}}</td>
    
    <td class="text-center">{{data.var141 ? data.var141 : "-"}}</td>
    <td class="text-center">{{data.var151 ? data.var151 : "-"}}</td>
    
    <td class="text-center">{{data.var142 ? data.var142 : "-"}}</td>
    <td class="text-center">{{data.var152 ? data.var152 : "-"}}</td>
    
    <td class="text-center">{{data.var143 ? data.var143 : "-"}}</td>
    <td class="text-center">{{data.var153 ? data.var153 : "-"}}</td>
    

     <td class="text-center">{{data.var144 ? data.var144 : "-"}}</td>
     <td class="text-center">{{data.var154 ? data.var154 : "-"}}</td>
   
     <td class="text-center">{{data.var145 ? data.var145 : "-"}}</td>
     <td class="text-center">{{data.var155 ? data.var155 : "-"}}</td>
   
   
     <td class="text-center">{{data.var146 ? data.var146 : "-"}}</td>
     <td class="text-center">{{data.var156 ? data.var156 : "-"}}</td>
   
   
     <td class="text-center">{{data.var147 ? data.var147 : "-"}}</td>
     <td class="text-center">{{data.var157 ? data.var157 : "-"}}</td>
   
   
     <td class="text-center">{{data.var148 ? data.var148 : "-"}}</td>
     <td class="text-center">{{data.var158 ? data.var158 : "-"}}</td>
   

      <td class="text-center">{{total23}}</td>
      <td class="text-center">{{total24}}</td>
     
      <td class="text-center">{{total25}}</td>
      <td class="text-center">{{total26}}</td>
     
     
</tr>
           
<tr>
    <th class="text-left "  colspan="2">
             CASOS CON SEROLOGIA REACTIVA PARA SIFILIS
                           </th>
   

    
    
    <td class="text-center">{{data.var163 ? data.var163 : "-"}}</td>
    <td class="text-center">{{data.var173 ? data.var173 : "-"}}</td>
    
    <td class="text-center">{{data.var164 ? data.var164 : "-"}}</td>
    <td class="text-center">{{data.var174 ? data.var174 : "-"}}</td>
    
    <td class="text-center">{{data.var165 ? data.var165 : "-"}}</td>
    <td class="text-center">{{data.var175 ? data.var175 : "-"}}</td>
    
    <td class="text-center">{{data.var166 ? data.var166 : "-"}}</td>
    <td class="text-center">{{data.var176 ? data.var176 : "-"}}</td>
    
    <td class="text-center">{{data.var167 ? data.var167 : "-"}}</td>
    <td class="text-center">{{data.var177 ? data.var177 : "-"}}</td>
    


     <td class="text-center">{{data.var168 ? data.var168 : "-"}}</td>
     <td class="text-center">{{data.var178 ? data.var178 : "-"}}</td>
   
     <td class="text-center">{{data.var169 ? data.var169 : "-"}}</td>
     <td class="text-center">{{data.var179 ? data.var179 : "-"}}</td>
   
     <td class="text-center">{{data.var170 ? data.var170 : "-"}}</td>
     <td class="text-center">{{data.var180 ? data.var180 : "-"}}</td>
   
     <td class="text-center">{{data.var171 ? data.var171 : "-"}}</td>
     <td class="text-center">{{data.var181 ? data.var181 : "-"}}</td>
   
     <td class="text-center">{{data.var172 ? data.var172 : "-"}}</td>
     <td class="text-center">{{data.var182 ? data.var182 : "-"}}</td>
  
    
     <td class="text-center">{{total27}}</td>
      <td class="text-center">{{total28}}</td>
     
      <td class="text-center">{{total29}}</td>
      <td class="text-center">{{total30}}</td>

      
     
     
</tr>


      
<tr>
    <th class="text-left "  colspan="2">
             PERSONAS QUE RECIBEN CONSEJERIA EN ITS
                           </th>
   

    
    
    <td class="text-center tthh3">{{ }}</td>
    <td class="text-center tthh3">{{ }}</td>
    
    <td class="text-center " colspan="2">{{data.var187 ? data.var187 : "-"}}</td>
    
    
    <td class="text-center" colspan="2" >{{data.var188 ? data.var188 : "-"}}</td>
    
    
    <td class="text-center" colspan="2">{{data.var189 ? data.var189 : "-"}}</td>
    
    
    <td class="text-center" colspan="2">{{data.var190 ? data.var190 : "-"}}</td>
    
    


     <td class="text-center tthh3">{{ }}</td>
     <td class="text-center tthh3">{{ }}</td>
   
       <td class="text-center " colspan="2">{{data.var191 ? data.var191 : "-"}}</td>
    
    
    <td class="text-center" colspan="2" >{{data.var192 ? data.var192 : "-"}}</td>
    
    
    <td class="text-center" colspan="2">{{data.var193 ? data.var193 : "-"}}</td>
    
    
    <td class="text-center" colspan="2">{{data.var194 ? data.var194 : "-"}}</td>
  
    
      <td class="text-center tthh3">{{ }}</td>
      <td class="text-center tthh3">{{ }}</td>
     
      <td class="text-center tthh3">{{ }}</td>
      <td class="text-center tthh3">{{ }}</td>

      
     
     
</tr>
     <br>
     <br>
    <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                1A.-  POBLACION GENERAL: ITS (POR CONDICION)
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                              CONTACTOS
                           </th>
                         
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                              CONTACTOS TRATADOS
                           </th>
                         

                       </tr>

                <tr>
                           <th class="text-left tthh4" >
                                F
                           </th>
                           <th class="text-left tthh4" >
                                M
                           </th>
                           <th class="text-left tthh4" >
                                F
                           </th>
                           <th class="text-left tthh4" >
                                M
                           </th>

                </tr>
    
<tr>
    <th class="text-center "  colspan="2">
                              PERSONAS CON MANEJO SINDROMICO
                           </th>
    <td class="text-center">{{data.var21 ? data.var21 : "-"}}</td>
    <td class="text-center">{{data.var22 ? data.var22 : "-"}}</td>
    <td class="text-center">{{data.var23 ? data.var23 : "-"}}</td>
    <td class="text-center">{{data.var24 ? data.var24 : "-"}}</td>
</tr>
    
    
<tr>
    <th class="text-center "  colspan="2">
                              CASOS DE DESCARGA URETRAL
                           </th>
    <td class="text-center">{{data.var35 ? data.var35 : "-"}}</td>
    <td class="text-center">{{data.var36 ? data.var36 : "-"}}</td>
    <td class="text-center">{{data.var37 ? data.var37 : "-"}}</td>
    <td class="text-center">{{data.var38 ? data.var38 : "-"}}</td>
</tr>
    
<tr>
    <th class="text-center "  colspan="2">
                              CASOS DE FLUJO VAGINAL COMPATIBLE CON ITS
                           </th>
    <td class="text-center">{{data.var49 ? data.var49 : "-"}}</td>
    <td class="text-center">{{data.var50 ? data.var50 : "-"}}</td>
    <td class="text-center">{{data.var51 ? data.var51 : "-"}}</td>
    <td class="text-center">{{data.var52 ? data.var52 : "-"}}</td>
</tr>
    
<tr>
    <th class="text-center "  colspan="2">
                              CASOS DE ULCERA GENITAL
                           </th>
    <td class="text-center">{{data.var73 ? data.var73 : "-"}}</td>
    <td class="text-center">{{data.var74 ? data.var74 : "-"}}</td>
    <td class="text-center">{{data.var75 ? data.var75 : "-"}}</td>
    <td class="text-center">{{data.var76 ? data.var76 : "-"}}</td>
</tr>
    
<tr>
    <th class="text-center "  colspan="2">
                              CASOS DE BUBON INGUINAL
                           </th>
    <td class="text-center">{{data.var97 ? data.var97 : "-"}}</td>
    <td class="text-center">{{data.var98 ? data.var98 : "-"}}</td>
    <td class="text-center">{{data.var99 ? data.var99 : "-"}}</td>
    <td class="text-center">{{data.var100 ? data.var100 : "-"}}</td>
</tr>
    
<tr>
    <th class="text-center "  colspan="2">
                              CASOS CON SINDROME DE DOLOR ABDOMINAL BAJO
                           </th>
    <td class="text-center">{{data.var111 ? data.var111 : "-"}}</td>
    <td class="text-center">{{data.var112 ? data.var112 : "-"}}</td>
    <td class="text-center">{{data.var113 ? data.var113 : "-"}}</td>
    <td class="text-center">{{data.var114 ? data.var114 : "-"}}</td>
</tr>
    
<tr>
    <th class="text-center "  colspan="2">
                              PERSONAS CON MANEJO ETIOLOGICO
                           </th>
    <td class="text-center">{{data.var135 ? data.var135 : "-"}}</td>
    <td class="text-center">{{data.var136 ? data.var136 : "-"}}</td>
    <td class="text-center">{{data.var137 ? data.var137 : "-"}}</td>
    <td class="text-center">{{data.var138 ? data.var138 : "-"}}</td>
</tr>

<tr>
    <th class="text-center "  colspan="2">
                              CASOS CON GONORREA
                           </th>
    <td class="text-center">{{data.var159 ? data.var159 : "-"}}</td>
    <td class="text-center">{{data.var160 ? data.var160 : "-"}}</td>
    <td class="text-center">{{data.var161 ? data.var161 : "-"}}</td>
    <td class="text-center">{{data.var162 ? data.var162 : "-"}}</td>
</tr>

<tr>
    <th class="text-center "  colspan="2">
                              CASOS CON SEROLOGIA REACTIVA PARA SIFILIS
                           </th>
    <td class="text-center">{{data.var183 ? data.var183 : "-"}}</td>
    <td class="text-center">{{data.var184 ? data.var184 : "-"}}</td>
    <td class="text-center">{{data.var185 ? data.var185 : "-"}}</td>
    <td class="text-center">{{data.var186 ? data.var186 : "-"}}</td>
</tr>

<tr>
    <th class="text-center "  colspan="2">
                              PERSONAS QUE RECIBEN CONSEJERIA EN ITS
                           </th>
    <td class="text-center tthh3"  >{{ }}</td>
    <td class="text-center tthh3"  >{{ }}</td>
    <td class="text-center tthh3"  >{{ }}</td>
    <td class="text-center tthh3"  >{{ }}</td>
</tr>


<br>
<br>
                      <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                2.-  HEPATITIS
                           </th>
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              F
                           </th>
                         
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              M
                           </th>
                         
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              Total
                           </th>
                       </tr>
                       <tr>
                           <th class="tthh4"  >
                                01d - 11a
                           </th>
                           <th class="tthh4"  >
                                12a - 17a
                           </th>
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                            <th class="tthh4"  >
                                01d - 11a
                           </th>
                           <th class="tthh4"  >
                                12a - 17a
                           </th>
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                             <th class="tthh4"  >
                                F
                           </th>
                           <th class="tthh4"  >
                                M
                           </th>
                           <th class="tthh4"  >
                                TOTAL
                           </th>
                       </tr>

                    <tr>
                        <th colspan="2" >
                                PERSONAS TAMIZADAS A HEPATITIS B
                        </th>
                        <td class="text-center">{{data.var195 ? data.var195 : "-"}}</td>
                        <td class="text-center">{{data.var196 ? data.var196 : "-"}}</td>
                        <td class="text-center">{{data.var197 ? data.var197 : "-"}}</td>
                        <td class="text-center">{{data.var198 ? data.var198 : "-"}}</td>
                        <td class="text-center">{{data.var199 ? data.var199 : "-"}}</td>
                        <td class="text-center">{{data.var200 ? data.var200 : "-"}}</td>
                        <td class="text-center">{{data.var201 ? data.var201 : "-"}}</td>
                        <td class="text-center">{{data.var202 ? data.var202 : "-"}}</td>
                        <td class="text-center">{{data.var203 ? data.var203 : "-"}}</td>
                        <td class="text-center">{{data.var204 ? data.var204 : "-"}}</td>

                      

                          <td class="text-center">{{total40}}</td>
                          <td class="text-center">{{total41}}</td>
                          <td class="text-center">{{total42}}</td>
                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS TAMIZADAS REACTIVAS A HEPATITIS B
                        </th>
                        <td class="text-center">{{data.var205 ? data.var205 : "-"}}</td>
                        <td class="text-center">{{data.var206 ? data.var206 : "-"}}</td>
                        <td class="text-center">{{data.var207 ? data.var207 : "-"}}</td>
                        <td class="text-center">{{data.var208 ? data.var208 : "-"}}</td>
                        <td class="text-center">{{data.var209 ? data.var209 : "-"}}</td>
                        <td class="text-center">{{data.var210 ? data.var210 : "-"}}</td>
                        <td class="text-center">{{data.var211 ? data.var211 : "-"}}</td>
                        <td class="text-center">{{data.var212 ? data.var212 : "-"}}</td>
                        <td class="text-center">{{data.var213 ? data.var213 : "-"}}</td>
                        <td class="text-center">{{data.var214 ? data.var214 : "-"}}</td>

                        <td class="text-center">{{total43}}</td>
                        <td class="text-center">{{total44}}</td>
                        <td class="text-center">{{total45}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS CON DIAGNOSTICO CONFIRMADO DE HEPATITIS B CRONICA
                        </th>
                        <td class="text-center">{{data.var215 ? data.var215 : "-"}}</td>
                        <td class="text-center">{{data.var216 ? data.var216 : "-"}}</td>
                        <td class="text-center">{{data.var217 ? data.var217 : "-"}}</td>
                        <td class="text-center">{{data.var218 ? data.var218 : "-"}}</td>
                        <td class="text-center">{{data.var219 ? data.var219 : "-"}}</td>
                        <td class="text-center">{{data.var220 ? data.var220 : "-"}}</td>
                        <td class="text-center">{{data.var221 ? data.var221 : "-"}}</td>
                        <td class="text-center">{{data.var222 ? data.var222 : "-"}}</td>
                        <td class="text-center">{{data.var223 ? data.var223 : "-"}}</td>
                        <td class="text-center">{{data.var224 ? data.var214 : "-"}}</td>

                        <td class="text-center">{{total46}}</td>
                        <td class="text-center">{{total47}}</td>
                        <td class="text-center">{{total48}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS DE POBLACION INDIGENA TAMIZADAS A HEPATITIS B
                        </th>
                        <td class="text-center">{{data.var225 ? data.var225 : "-"}}</td>
                        <td class="text-center">{{data.var226 ? data.var226 : "-"}}</td>
                        <td class="text-center">{{data.var227 ? data.var227 : "-"}}</td>
                        <td class="text-center">{{data.var228 ? data.var228 : "-"}}</td>
                        <td class="text-center">{{data.var229 ? data.var229 : "-"}}</td>
                        <td class="text-center">{{data.var230 ? data.var230 : "-"}}</td>
                        <td class="text-center">{{data.var231 ? data.var231 : "-"}}</td>
                        <td class="text-center">{{data.var232 ? data.var232 : "-"}}</td>
                        <td class="text-center">{{data.var233 ? data.var233 : "-"}}</td>
                        <td class="text-center">{{data.var234 ? data.var234 : "-"}}</td>

                        <td class="text-center">{{total49}}</td>
                        <td class="text-center">{{total50}}</td>
                        <td class="text-center">{{total51}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS DE POBLACION INDIGENA TAMIZADAS REACTIVAS A HEPATITIS B
                        </th>
                        <td class="text-center">{{data.var235 ? data.var235 : "-"}}</td>
                        <td class="text-center">{{data.var236 ? data.var236 : "-"}}</td>
                        <td class="text-center">{{data.var237 ? data.var237 : "-"}}</td>
                        <td class="text-center">{{data.var238 ? data.var238 : "-"}}</td>
                        <td class="text-center">{{data.var239 ? data.var239 : "-"}}</td>
                        <td class="text-center">{{data.var240 ? data.var240 : "-"}}</td>
                        <td class="text-center">{{data.var241 ? data.var241 : "-"}}</td>
                        <td class="text-center">{{data.var242 ? data.var242 : "-"}}</td>
                        <td class="text-center">{{data.var243 ? data.var243 : "-"}}</td>
                        <td class="text-center">{{data.var244 ? data.var244 : "-"}}</td>

                        <td class="text-center">{{total52}}</td>
                        <td class="text-center">{{total53}}</td>
                        <td class="text-center">{{total54}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS DE POBLACION INDIGENA CON DIAGNOSTICO CONFIRMADO DE HEPATITIS B CRONICA
                        </th>
                        <td class="text-center">{{data.var245 ? data.var245 : "-"}}</td>
                        <td class="text-center">{{data.var246 ? data.var246 : "-"}}</td>
                        <td class="text-center">{{data.var247 ? data.var247 : "-"}}</td>
                        <td class="text-center">{{data.var248 ? data.var248 : "-"}}</td>
                        <td class="text-center">{{data.var249 ? data.var249 : "-"}}</td>
                        <td class="text-center">{{data.var250 ? data.var250 : "-"}}</td>
                        <td class="text-center">{{data.var251 ? data.var251 : "-"}}</td>
                        <td class="text-center">{{data.var252 ? data.var252 : "-"}}</td>
                        <td class="text-center">{{data.var253 ? data.var253 : "-"}}</td>
                        <td class="text-center">{{data.var254 ? data.var254 : "-"}}</td>

                        <td class="text-center">{{total55}}</td>
                        <td class="text-center">{{total56}}</td>
                        <td class="text-center">{{total57}}</td>

                    </tr>

<br>
<br>
  <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                3.- POBLACION GENERAL: TAMIZAJE
                           </th>
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              F
                           </th>
                         
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              M
                           </th>
                         
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              Total
                           </th>
                       </tr>
                       <tr>
                           <th class="tthh4"  >
                                01d - 11a
                           </th>
                           <th class="tthh4"  >
                                12a - 17a
                           </th>
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                            <th class="tthh4"  >
                                01d - 11a
                           </th>
                           <th class="tthh4"  >
                                12a - 17a
                           </th>
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                             <th class="tthh4"  >
                                F
                           </th>
                           <th class="tthh4"  >
                                M
                           </th>
                           <th class="tthh4"  >
                                TOTAL
                           </th>
                       </tr>

                    <tr>
                        <th colspan="2" >
                                PERSONAS TAMIZADAS PARA VIH (EXCEPTO GESTANTES,POBLACION CLAVE, TBC E INDIGENA)
                        </th>
                        <td class="text-center">{{data.var255 ? data.var255 : "-"}}</td>
                        <td class="text-center">{{data.var256 ? data.var256 : "-"}}</td>
                        <td class="text-center">{{data.var257 ? data.var257 : "-"}}</td>
                        <td class="text-center">{{data.var258 ? data.var258 : "-"}}</td>
                        <td class="text-center">{{data.var259 ? data.var259 : "-"}}</td>
                        <td class="text-center">{{data.var260 ? data.var260 : "-"}}</td>
                        <td class="text-center">{{data.var261 ? data.var261 : "-"}}</td>
                        <td class="text-center">{{data.var262 ? data.var262 : "-"}}</td>
                        <td class="text-center">{{data.var263 ? data.var263 : "-"}}</td>
                        <td class="text-center">{{data.var264 ? data.var264 : "-"}}</td>

                      

                          <td class="text-center">{{total58}}</td>
                          <td class="text-center">{{total59}}</td>
                          <td class="text-center">{{total60}}</td>
                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS TAMIZADAS PARA VIH CON RESULTADO REACTIVO (EXCEPTO GESTANTES,POBLACION CLAVE, TBC E INDIGENA)
                        </th>
                        <td class="text-center">{{data.var265 ? data.var265 : "-"}}</td>
                        <td class="text-center">{{data.var266 ? data.var266 : "-"}}</td>
                        <td class="text-center">{{data.var267 ? data.var267 : "-"}}</td>
                        <td class="text-center">{{data.var268 ? data.var268 : "-"}}</td>
                        <td class="text-center">{{data.var269 ? data.var269 : "-"}}</td>
                        <td class="text-center">{{data.var270 ? data.var270 : "-"}}</td>
                        <td class="text-center">{{data.var271 ? data.var271 : "-"}}</td>
                        <td class="text-center">{{data.var272 ? data.var272 : "-"}}</td>
                        <td class="text-center">{{data.var273 ? data.var273 : "-"}}</td>
                        <td class="text-center">{{data.var274 ? data.var274 : "-"}}</td>

                        <td class="text-center">{{total61}}</td>
                        <td class="text-center">{{total62}}</td>
                        <td class="text-center">{{total63}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS CON TB TAMIZADAS PARA VIH
                        </th>
                        <td class="text-center">{{data.var275 ? data.var275 : "-"}}</td>
                        <td class="text-center">{{data.var276 ? data.var276 : "-"}}</td>
                        <td class="text-center">{{data.var277 ? data.var277 : "-"}}</td>
                        <td class="text-center">{{data.var278 ? data.var278 : "-"}}</td>
                        <td class="text-center">{{data.var279 ? data.var279 : "-"}}</td>
                        <td class="text-center">{{data.var280 ? data.var280 : "-"}}</td>
                        <td class="text-center">{{data.var281 ? data.var281 : "-"}}</td>
                        <td class="text-center">{{data.var282 ? data.var282 : "-"}}</td>
                        <td class="text-center">{{data.var283 ? data.var283 : "-"}}</td>
                        <td class="text-center">{{data.var284 ? data.var284 : "-"}}</td>

                        <td class="text-center">{{total64}}</td>
                        <td class="text-center">{{total65}}</td>
                        <td class="text-center">{{total66}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS CON TB TAMIZADAS REACTIVAS PARA VIH
                        </th>
                        <td class="text-center">{{data.var285 ? data.var285 : "-"}}</td>
                        <td class="text-center">{{data.var286 ? data.var286 : "-"}}</td>
                        <td class="text-center">{{data.var287 ? data.var287 : "-"}}</td>
                        <td class="text-center">{{data.var288 ? data.var288 : "-"}}</td>
                        <td class="text-center">{{data.var289 ? data.var289 : "-"}}</td>
                        <td class="text-center">{{data.var290 ? data.var290 : "-"}}</td>
                        <td class="text-center">{{data.var291 ? data.var291 : "-"}}</td>
                        <td class="text-center">{{data.var292 ? data.var292 : "-"}}</td>
                        <td class="text-center">{{data.var293 ? data.var293 : "-"}}</td>
                        <td class="text-center">{{data.var294 ? data.var294 : "-"}}</td>

                        <td class="text-center">{{total67}}</td>
                        <td class="text-center">{{total68}}</td>
                        <td class="text-center">{{total69}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS DE POBLACION INDIGENA TAMIZADAS PARA VIH
                        </th>
                        <td class="text-center">{{data.var295 ? data.var295 : "-"}}</td>
                        <td class="text-center">{{data.var296 ? data.var296 : "-"}}</td>
                        <td class="text-center">{{data.var297 ? data.var297 : "-"}}</td>
                        <td class="text-center">{{data.var298 ? data.var298 : "-"}}</td>
                        <td class="text-center">{{data.var299 ? data.var299 : "-"}}</td>
                        <td class="text-center">{{data.var300 ? data.var300 : "-"}}</td>
                        <td class="text-center">{{data.var301 ? data.var301 : "-"}}</td>
                        <td class="text-center">{{data.var302 ? data.var302 : "-"}}</td>
                        <td class="text-center">{{data.var303 ? data.var303 : "-"}}</td>
                        <td class="text-center">{{data.var304 ? data.var304 : "-"}}</td>

                        <td class="text-center">{{total70}}</td>
                        <td class="text-center">{{total71}}</td>
                        <td class="text-center">{{total72}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS DE POBLACION INDIGENA TAMIZADAS PARA VIH CON RESULTADO REACTIVO
                        </th>
                        <td class="text-center">{{data.var305 ? data.var305 : "-"}}</td>
                        <td class="text-center">{{data.var306 ? data.var306 : "-"}}</td>
                        <td class="text-center">{{data.var307 ? data.var307 : "-"}}</td>
                        <td class="text-center">{{data.var308 ? data.var308 : "-"}}</td>
                        <td class="text-center">{{data.var309 ? data.var309 : "-"}}</td>
                        <td class="text-center">{{data.var310 ? data.var310 : "-"}}</td>
                        <td class="text-center">{{data.var311 ? data.var311 : "-"}}</td>
                        <td class="text-center">{{data.var312 ? data.var312 : "-"}}</td>
                        <td class="text-center">{{data.var313 ? data.var313 : "-"}}</td>
                        <td class="text-center">{{data.var314 ? data.var314 : "-"}}</td>

                        <td class="text-center">{{total73}}</td>
                        <td class="text-center">{{total74}}</td>
                        <td class="text-center">{{total75}}</td>

                    </tr>

<br>
<br>
  <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                4.- EXPOSICION A VIH
                           </th>
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              F
                           </th>
                         
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              M
                           </th>
                         
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              Total
                           </th>
                       </tr>
                       <tr>
                           <th class="tthh4"  >
                                01d - 11a
                           </th>
                           <th class="tthh4"  >
                                12a - 17a
                           </th>
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                            <th class="tthh4"  >
                                01d - 11a
                           </th>
                           <th class="tthh4"  >
                                12a - 17a
                           </th>
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                             <th class="tthh4"  >
                                F
                           </th>
                           <th class="tthh4"  >
                                M
                           </th>
                           <th class="tthh4"  >
                                TOTAL
                           </th>
                       </tr>

                    <tr>
                        <th colspan="2" >
                                PERSONAS QUE SUFRIERON EXPOSICION OCUPACIONAL AL VIH
                        </th>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center">{{data.var315 ? data.var315 : "-"}}</td>
                        <td class="text-center">{{data.var316 ? data.var316 : "-"}}</td>
                        <td class="text-center">{{data.var317 ? data.var317 : "-"}}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center">{{data.var318 ? data.var318 : "-"}}</td>
                        <td class="text-center">{{data.var319 ? data.var319 : "-"}}</td>
                        <td class="text-center">{{data.var320 ? data.var320 : "-"}}</td>

                      

                          <td class="text-center">{{total76}}</td>
                          <td class="text-center">{{total77}}</td>
                          <td class="text-center">{{total78}}</td>
                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS QUE SUFRIERON EXPOSICION OCUPACIONAL AL VIH Y RECIBEN PROFILAXIS ARV
                        </th>
                        <td class="text-center">{{data.var321 ? data.var321 : "-"}}</td>
                        <td class="text-center">{{data.var322 ? data.var322 : "-"}}</td>
                        <td class="text-center">{{data.var323 ? data.var323 : "-"}}</td>
                        <td class="text-center">{{data.var324 ? data.var324 : "-"}}</td>
                        <td class="text-center">{{data.var325 ? data.var325 : "-"}}</td>
                        <td class="text-center">{{data.var326 ? data.var326 : "-"}}</td>
                        <td class="text-center">{{data.var327 ? data.var327 : "-"}}</td>
                        <td class="text-center">{{data.var328 ? data.var328 : "-"}}</td>
                        <td class="text-center">{{data.var329 ? data.var329 : "-"}}</td>
                        <td class="text-center">{{data.var330 ? data.var330 : "-"}}</td>

                        <td class="text-center">{{total79}}</td>
                        <td class="text-center">{{total80}}</td>
                        <td class="text-center">{{total81}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS EXPUESTAS A VIH POR EXPOSICION NO OCUPACIONAL
                        </th>
                        <td class="text-center">{{data.var331 ? data.var331 : "-"}}</td>
                        <td class="text-center">{{data.var332 ? data.var332 : "-"}}</td>
                        <td class="text-center">{{data.var333 ? data.var333 : "-"}}</td>
                        <td class="text-center">{{data.var334 ? data.var334 : "-"}}</td>
                        <td class="text-center">{{data.var335 ? data.var335 : "-"}}</td>
                        <td class="text-center">{{data.var336 ? data.var336 : "-"}}</td>
                        <td class="text-center">{{data.var337 ? data.var337 : "-"}}</td>
                        <td class="text-center">{{data.var338 ? data.var338 : "-"}}</td>
                        <td class="text-center">{{data.var339 ? data.var339 : "-"}}</td>
                        <td class="text-center">{{data.var340 ? data.var340 : "-"}}</td>

                        <td class="text-center">{{total82}}</td>
                        <td class="text-center">{{total83}}</td>
                        <td class="text-center">{{total84}}</td>

                    </tr>
                    
                    <tr>
                        <th colspan="2" >
                                PERSONAS EXPUESTAS A VIH POR EXPOSICION NO OCUPACIONAL Y RECIBEN PROFILAXIS ARV
                        </th>
                        <td class="text-center">{{data.var341 ? data.var341 : "-"}}</td>
                        <td class="text-center">{{data.var342 ? data.var342 : "-"}}</td>
                        <td class="text-center">{{data.var343 ? data.var343 : "-"}}</td>
                        <td class="text-center">{{data.var344 ? data.var344 : "-"}}</td>
                        <td class="text-center">{{data.var345 ? data.var345 : "-"}}</td>
                        <td class="text-center">{{data.var346 ? data.var346 : "-"}}</td>
                        <td class="text-center">{{data.var347 ? data.var347 : "-"}}</td>
                        <td class="text-center">{{data.var348 ? data.var348 : "-"}}</td>
                        <td class="text-center">{{data.var349 ? data.var349 : "-"}}</td>
                        <td class="text-center">{{data.var350 ? data.var350 : "-"}}</td>

                        <td class="text-center">{{total85}}</td>
                        <td class="text-center">{{total86}}</td>
                        <td class="text-center">{{total87}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS QUE SUFRIERON EXPOSICION OCUPACIONAL A HEPATITIS B
                        </th>
                        <td class="text-center">{{data.var351 ? data.var351 : "-"}}</td>
                        <td class="text-center">{{data.var352 ? data.var352 : "-"}}</td>
                        <td class="text-center">{{data.var353 ? data.var353 : "-"}}</td>
                        <td class="text-center">{{data.var354 ? data.var354 : "-"}}</td>
                        <td class="text-center">{{data.var355 ? data.var355 : "-"}}</td>
                        <td class="text-center">{{data.var356 ? data.var356 : "-"}}</td>
                        <td class="text-center">{{data.var357 ? data.var357 : "-"}}</td>
                        <td class="text-center">{{data.var358 ? data.var358 : "-"}}</td>
                        <td class="text-center">{{data.var359 ? data.var359 : "-"}}</td>
                        <td class="text-center">{{data.var360 ? data.var360 : "-"}}</td>

                        <td class="text-center">{{total88}}</td>
                        <td class="text-center">{{total89}}</td>
                        <td class="text-center">{{total90}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PERSONAS QUE SUFRIERON EXPOSICION OCUPACIONAL A HEPATITIS B Y NO FUERON PREVIAMENTE VACUNADOS.
                        </th>
                        <td class="text-center">{{data.var361 ? data.var361 : "-"}}</td>
                        <td class="text-center">{{data.var362 ? data.var362 : "-"}}</td>
                        <td class="text-center">{{data.var363 ? data.var363 : "-"}}</td>
                        <td class="text-center">{{data.var364 ? data.var364 : "-"}}</td>
                        <td class="text-center">{{data.var365 ? data.var365 : "-"}}</td>
                        <td class="text-center">{{data.var366 ? data.var366 : "-"}}</td>
                        <td class="text-center">{{data.var367 ? data.var367 : "-"}}</td>
                        <td class="text-center">{{data.var368 ? data.var368 : "-"}}</td>
                        <td class="text-center">{{data.var369 ? data.var369 : "-"}}</td>
                        <td class="text-center">{{data.var370 ? data.var370 : "-"}}</td>

                        <td class="text-center">{{total91}}</td>
                        <td class="text-center">{{total92}}</td>
                        <td class="text-center">{{total93}}</td>

                    </tr>
<br>
<br>
 <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                5.-   PVVIH:  ATENCIÓN INTEGRAL
                           </th>
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              F
                           </th>
                         
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              M
                           </th>
                         
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              Total
                           </th>
                       </tr>
                       <tr>
                           <th class="text-center tthh4"  >
                                01d - 11a
                           </th>
                           <th class="text-center tthh4"  >
                                12a - 17a
                           </th>
                           <th class="text-center tthh4"  >
                                18a - 29a
                           </th>
                           <th class="text-center tthh4"  >
                                30a - 59a
                           </th>
                           <th class="text-center tthh4"  >
                                60a más
                           </th>
                            <th class="text-center tthh4"  >
                                01d - 11a
                           </th>
                           <th class="text-center tthh4"  >
                                12a - 17a
                           </th>
                           <th class="text-center tthh4"  >
                                18a - 29a
                           </th>
                           <th class="text-center tthh4"  >
                                30a - 59a
                           </th>
                           <th class="text-center tthh4"  >
                                60a más
                           </th>
                             <th class=" text-center tthh4"  >
                                F
                           </th>
                           <th class=" text-center tthh4"  >
                                M
                           </th>
                           <th class=" text-center tthh4"  >
                                TOTAL
                           </th>
                       </tr>

                    <tr>
                        <th colspan="2" >
                                PVVIH QUE INICIAN TERAPIA PREVENTIVA CON COTRIMOXAZOL (TPC)
                        </th>
                        
                        <td class="text-center">{{data.var371 ? data.var371 : "-"}}</td>
                        <td class="text-center">{{data.var372 ? data.var372 : "-"}}</td>
                        <td class="text-center">{{data.var373 ? data.var373 : "-"}}</td>                
                        <td class="text-center">{{data.var374 ? data.var374 : "-"}}</td>
                        <td class="text-center">{{data.var375 ? data.var375 : "-"}}</td>

                        <td class="text-center">{{data.var376 ? data.var376 : "-"}}</td>
                        <td class="text-center">{{data.var377 ? data.var377 : "-"}}</td>
                        <td class="text-center">{{data.var378 ? data.var378 : "-"}}</td>
                        <td class="text-center">{{data.var379 ? data.var379 : "-"}}</td>
                        <td class="text-center">{{data.var380 ? data.var380 : "-"}}</td>

                      

                          <td class="text-center">{{total94}}</td>
                          <td class="text-center">{{total95}}</td>
                          <td class="text-center">{{total96}}</td>
                    </tr>
                    <tr>
                        <th colspan="2" >
                                PVVIH QUE INICIAN TERAPIA PREVENTIVA CON ISONIAZIDA (TPI)
                        </th>
                        <td class="text-center">{{data.var381 ? data.var381 : "-"}}</td>
                        <td class="text-center">{{data.var382 ? data.var382 : "-"}}</td>
                        <td class="text-center">{{data.var383 ? data.var383 : "-"}}</td>                
                        <td class="text-center">{{data.var384 ? data.var384 : "-"}}</td>
                        <td class="text-center">{{data.var385 ? data.var385 : "-"}}</td>

                        <td class="text-center">{{data.var386 ? data.var386 : "-"}}</td>
                        <td class="text-center">{{data.var387 ? data.var387 : "-"}}</td>
                        <td class="text-center">{{data.var388 ? data.var388 : "-"}}</td>
                        <td class="text-center">{{data.var389 ? data.var389 : "-"}}</td>
                        <td class="text-center">{{data.var390 ? data.var390 : "-"}}</td>

                        <td class="text-center">{{total97}}</td>
                        <td class="text-center">{{total98}}</td>
                        <td class="text-center">{{total99}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                PVVIH QUE ABANDONAN LA TERAPIA PREVENTIVA CON ISONIAZIDA (TPI)
                        </th>
                        <td class="text-center">{{data.var391 ? data.var391 : "-"}}</td>
                        <td class="text-center">{{data.var392 ? data.var392 : "-"}}</td>
                        <td class="text-center">{{data.var393 ? data.var393 : "-"}}</td>                
                        <td class="text-center">{{data.var394 ? data.var394 : "-"}}</td>
                        <td class="text-center">{{data.var395 ? data.var395 : "-"}}</td>

                        <td class="text-center">{{data.var396 ? data.var396 : "-"}}</td>
                        <td class="text-center">{{data.var397 ? data.var397 : "-"}}</td>
                        <td class="text-center">{{data.var398 ? data.var398 : "-"}}</td>
                        <td class="text-center">{{data.var399 ? data.var399 : "-"}}</td>
                        <td class="text-center">{{data.var400 ? data.var400 : "-"}}</td>

                        <td class="text-center">{{total100}}</td>
                        <td class="text-center">{{total101}}</td>
                        <td class="text-center">{{total102}}</td>

                    </tr>
                    
                    <tr>
                        <th colspan="2" >
                                PVVIH QUE COMPLETAN TERAPIA PREVENTIVA CON ISONIAZIDA (TPI)
                        </th>
                        <td class="text-center">{{data.var401 ? data.var401 : "-"}}</td>
                        <td class="text-center">{{data.var402 ? data.var402 : "-"}}</td>
                        <td class="text-center">{{data.var403 ? data.var403 : "-"}}</td>                
                        <td class="text-center">{{data.var404 ? data.var404 : "-"}}</td>
                        <td class="text-center">{{data.var405 ? data.var405 : "-"}}</td>

                        <td class="text-center">{{data.var406 ? data.var406 : "-"}}</td>
                        <td class="text-center">{{data.var407 ? data.var407 : "-"}}</td>
                        <td class="text-center">{{data.var408 ? data.var408 : "-"}}</td>
                        <td class="text-center">{{data.var409 ? data.var409 : "-"}}</td>
                        <td class="text-center">{{data.var410 ? data.var410 : "-"}}</td>

                        <td class="text-center">{{total103}}</td>
                        <td class="text-center">{{total104}}</td>
                        <td class="text-center">{{total105}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                N° DE PVVIH CON DIAGNOSTICO DE TB
                        </th>
                        <td class="text-center">{{data.var411 ? data.var411 : "-"}}</td>
                        <td class="text-center">{{data.var412 ? data.var412 : "-"}}</td>
                        <td class="text-center">{{data.var413 ? data.var413 : "-"}}</td>                
                        <td class="text-center">{{data.var414 ? data.var414 : "-"}}</td>
                        <td class="text-center">{{data.var415 ? data.var415 : "-"}}</td>

                        <td class="text-center">{{data.var416 ? data.var416 : "-"}}</td>
                        <td class="text-center">{{data.var417 ? data.var417 : "-"}}</td>
                        <td class="text-center">{{data.var418 ? data.var418 : "-"}}</td>
                        <td class="text-center">{{data.var419 ? data.var419 : "-"}}</td>
                        <td class="text-center">{{data.var420 ? data.var420 : "-"}}</td>

                        <td class="text-center">{{total106}}</td>
                        <td class="text-center">{{total107}}</td>
                        <td class="text-center">{{total108}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                N° DE PVVIH CON TB QUE INICIAN TRATAMIENTO PARA TB
                        </th>
                        <td class="text-center">{{data.var421 ? data.var421 : "-"}}</td>
                        <td class="text-center">{{data.var422 ? data.var422 : "-"}}</td>
                        <td class="text-center">{{data.var423 ? data.var423 : "-"}}</td>                
                        <td class="text-center">{{data.var424 ? data.var424 : "-"}}</td>
                        <td class="text-center">{{data.var425 ? data.var425 : "-"}}</td>

                        <td class="text-center">{{data.var426 ? data.var426 : "-"}}</td>
                        <td class="text-center">{{data.var427 ? data.var427 : "-"}}</td>
                        <td class="text-center">{{data.var428 ? data.var428 : "-"}}</td>
                        <td class="text-center">{{data.var429 ? data.var429 : "-"}}</td>
                        <td class="text-center">{{data.var430 ? data.var430 : "-"}}</td>

                        <td class="text-center">{{total109}}</td>
                        <td class="text-center">{{total110}}</td>
                        <td class="text-center">{{total111}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                N° DE PVVIH CON TB QUE ABANDONAN TRATAMIENTO PARA TB
                        </th>
                        <td class="text-center">{{data.var431 ? data.var431 : "-"}}</td>
                        <td class="text-center">{{data.var432 ? data.var432 : "-"}}</td>
                        <td class="text-center">{{data.var433 ? data.var433 : "-"}}</td>                
                        <td class="text-center">{{data.var434 ? data.var434 : "-"}}</td>
                        <td class="text-center">{{data.var435 ? data.var435 : "-"}}</td>

                        <td class="text-center">{{data.var436 ? data.var436 : "-"}}</td>
                        <td class="text-center">{{data.var437 ? data.var437 : "-"}}</td>
                        <td class="text-center">{{data.var438 ? data.var438 : "-"}}</td>
                        <td class="text-center">{{data.var439 ? data.var439 : "-"}}</td>
                        <td class="text-center">{{data.var440 ? data.var440 : "-"}}</td>

                        <td class="text-center">{{total112}}</td>
                        <td class="text-center">{{total113}}</td>
                        <td class="text-center">{{total114}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                N° DE PVVIH CON TB QUE COMPLETAN TRATAMIENTO PARA TB
                        </th>
                        <td class="text-center">{{data.var441 ? data.var441 : "-"}}</td>
                        <td class="text-center">{{data.var442 ? data.var442 : "-"}}</td>
                        <td class="text-center">{{data.var443 ? data.var443 : "-"}}</td>                
                        <td class="text-center">{{data.var444 ? data.var444 : "-"}}</td>
                        <td class="text-center">{{data.var445 ? data.var445 : "-"}}</td>

                        <td class="text-center">{{data.var446 ? data.var446 : "-"}}</td>
                        <td class="text-center">{{data.var447 ? data.var447 : "-"}}</td>
                        <td class="text-center">{{data.var448 ? data.var448 : "-"}}</td>
                        <td class="text-center">{{data.var449 ? data.var449 : "-"}}</td>
                        <td class="text-center">{{data.var450 ? data.var450 : "-"}}</td>

                        <td class="text-center">{{total115}}</td>
                        <td class="text-center">{{total116}}</td>
                        <td class="text-center">{{total117}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                N° DE PVVIH CON HEPATITIS B CRONICA
                        </th>
                        <td class="text-center">{{data.var451 ? data.var451 : "-"}}</td>
                        <td class="text-center">{{data.var452 ? data.var452 : "-"}}</td>
                        <td class="text-center">{{data.var453 ? data.var453 : "-"}}</td>                
                        <td class="text-center">{{data.var454 ? data.var454 : "-"}}</td>
                        <td class="text-center">{{data.var455 ? data.var455 : "-"}}</td>

                        <td class="text-center">{{data.var456 ? data.var456 : "-"}}</td>
                        <td class="text-center">{{data.var457 ? data.var457 : "-"}}</td>
                        <td class="text-center">{{data.var458 ? data.var458 : "-"}}</td>
                        <td class="text-center">{{data.var459 ? data.var459 : "-"}}</td>
                        <td class="text-center">{{data.var460 ? data.var460 : "-"}}</td>

                        <td class="text-center">{{total118}}</td>
                        <td class="text-center">{{total119}}</td>
                        <td class="text-center">{{total120}}</td>

                    </tr>
                    <tr>
                        <th colspan="2" >
                                N° DE PVVIH QUE COMPLETAN VACUNACION DE HEPATITIS B
                        </th>
                        <td class="text-center">{{data.var461 ? data.var461 : "-"}}</td>
                        <td class="text-center">{{data.var462 ? data.var462 : "-"}}</td>
                        <td class="text-center">{{data.var463 ? data.var463 : "-"}}</td>                
                        <td class="text-center">{{data.var464 ? data.var464 : "-"}}</td>
                        <td class="text-center">{{data.var465 ? data.var465 : "-"}}</td>

                        <td class="text-center">{{data.var466 ? data.var466 : "-"}}</td>
                        <td class="text-center">{{data.var467 ? data.var467 : "-"}}</td>
                        <td class="text-center">{{data.var468 ? data.var468 : "-"}}</td>
                        <td class="text-center">{{data.var469 ? data.var469 : "-"}}</td>
                        <td class="text-center">{{data.var470 ? data.var470 : "-"}}</td>

                        <td class="text-center">{{total121}}</td>
                        <td class="text-center">{{total122}}</td>
                        <td class="text-center">{{total123}}</td>

                    </tr>
<br>
<br>
 


                    </thead>
                    <tbody>
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

         <v-col md="3">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-center tthh1 "  colspan="2"> 
                            6.- GESTANTES Y RECIÉN NACIDOS:  Transmisión Materno Infantil (Sífilis, VIH, Hepatitis B)  </th>
                        <th class="text-left tthh1 "  >
                            12a - 17a
                        </th>
                        <th class="text-left tthh1 "  >
                            18a - 29a
                        </th>
                        <th class="text-left tthh1 "  >
                            30a - 59a
                        </th>
                        <th class="text-left tthh1 "  >
                            Total
                        </th>

                        </tr>


                    </thead>
                    <tbody>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS PARA SIFILIS (1ER TAMIZAJE)
                           </th>
                            <td class="text-center">{{data.var471 ? data.var471 : "-"}}</td>
                            <td class="text-center">{{data.var472 ? data.var472 : "-"}}</td>
                            <td class="text-center">{{data.var473 ? data.var473 : "-"}}</td>
                          

                            <td class="text-center">{{total124}}</td>
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS REACTIVAS PARA SIFILIS
                           </th>
                            <td class="text-center">{{data.var474 ? data.var474 : "-"}}</td>
                            <td class="text-center">{{data.var475 ? data.var475 : "-"}}</td>
                            <td class="text-center">{{data.var476 ? data.var476 : "-"}}</td>
                          

                            <td class="text-center">{{total125}}</td>
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES CON SIFILIS QUE RECIBEN TRATAMIENTO COMPLETO
                           </th>
                            <td class="text-center">{{data.var477 ? data.var477 : "-"}}</td>
                            <td class="text-center">{{data.var478 ? data.var478 : "-"}}</td>
                            <td class="text-center">{{data.var479 ? data.var479 : "-"}}</td>
                          

                            <td class="text-center">{{total126}}</td>
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS PARA VIH (1ER TAMIZAJE)
                           </th>
                            <td class="text-center">{{data.var480 ? data.var480 : "-"}}</td>
                            <td class="text-center">{{data.var481 ? data.var481 : "-"}}</td>
                            <td class="text-center">{{data.var482 ? data.var482 : "-"}}</td>
                          

                            <td class="text-center">{{total127}}</td>
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS REACTIVAS PARA VIH
                           </th>
                            <td class="text-center">{{data.var483 ? data.var483 : "-"}}</td>
                            <td class="text-center">{{data.var484 ? data.var484 : "-"}}</td>
                            <td class="text-center">{{data.var485 ? data.var485 : "-"}}</td>
                          

                            <td class="text-center">{{total128}}</td>
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES CON VIH QUE RECIBEN TARGA
                           </th>
                            <td class="text-center">{{data.var486 ? data.var486 : "-"}}</td>
                            <td class="text-center">{{data.var487 ? data.var487 : "-"}}</td>
                            <td class="text-center">{{data.var488 ? data.var488 : "-"}}</td>
                          

                            <td class="text-center">{{total129}}</td>
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES CON VIH QUE CULMINAN EMBARAZO POR CESAREA
                           </th>
                            <td class="text-center">{{data.var489 ? data.var489 : "-"}}</td>
                            <td class="text-center">{{data.var490 ? data.var490 : "-"}}</td>
                            <td class="text-center">{{data.var491 ? data.var491 : "-"}}</td>
                          

                            <td class="text-center">{{total130}}</td>
                      </tr>
                 
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS PARA HEPATITIS B
                           </th>
                            <td class="text-center">{{data.var492 ? data.var492 : "-"}}</td>
                            <td class="text-center">{{data.var493 ? data.var493 : "-"}}</td>
                            <td class="text-center">{{data.var494 ? data.var494 : "-"}}</td>
                          

                            <td class="text-center">{{total131}}</td>
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS REACTIVAS PARA HEPATITIS B
                           </th>
                            <td class="text-center">{{data.var495 ? data.var495 : "-"}}</td>
                            <td class="text-center">{{data.var496 ? data.var496 : "-"}}</td>
                            <td class="text-center">{{data.var497 ? data.var497 : "-"}}</td>
                          

                            <td class="text-center">{{total132}}</td>
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
                    <thead>
                        <tr>
                        <th class="text-center tthh1 "  colspan="2"> 
                            6A.- GESTANTES Y RECIÉN NACIDOS - TRIMESTRE  </th>
                        <th class="text-left tthh1 "  >
                            1ER TRIM
                        </th>
                        <th class="text-left tthh1 "  >
                            2DO  TRIM
                        </th>
                        <th class="text-left tthh1 "  >
                            3ER TRIM
                        </th>
                       
                        </tr>


                    </thead>
                    <tbody>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS PARA SIFILIS (1ER TAMIZAJE)
                           </th>
                            <td class="text-center">{{data.var471 ? data.var471 : "-"}}</td>
                            <td class="text-center">{{data.var472 ? data.var472 : "-"}}</td>
                            <td class="text-center">{{data.var473 ? data.var473 : "-"}}</td>
                          

                          
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS REACTIVAS PARA SIFILIS
                           </th>
                            <td class="text-center">{{data.var474 ? data.var474 : "-"}}</td>
                            <td class="text-center">{{data.var475 ? data.var475 : "-"}}</td>
                            <td class="text-center">{{data.var476 ? data.var476 : "-"}}</td>
                          

                           
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES CON SIFILIS QUE RECIBEN TRATAMIENTO COMPLETO
                           </th>
                            <td class="text-center">{{data.var477 ? data.var477 : "-"}}</td>
                            <td class="text-center">{{data.var478 ? data.var478 : "-"}}</td>
                            <td class="text-center">{{data.var479 ? data.var479 : "-"}}</td>
                          

                          
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS PARA VIH (1ER TAMIZAJE)
                           </th>
                            <td class="text-center">{{data.var480 ? data.var480 : "-"}}</td>
                            <td class="text-center">{{data.var481 ? data.var481 : "-"}}</td>
                            <td class="text-center">{{data.var482 ? data.var482 : "-"}}</td>
                          

                            
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS REACTIVAS PARA VIH
                           </th>
                            <td class="text-center">{{data.var483 ? data.var483 : "-"}}</td>
                            <td class="text-center">{{data.var484 ? data.var484 : "-"}}</td>
                            <td class="text-center">{{data.var485 ? data.var485 : "-"}}</td>
                          

                           
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES CON VIH QUE RECIBEN TARGA
                           </th>
                            <td class="text-center">{{data.var486 ? data.var486 : "-"}}</td>
                            <td class="text-center">{{data.var487 ? data.var487 : "-"}}</td>
                            <td class="text-center">{{data.var488 ? data.var488 : "-"}}</td>
                          

                          
                      </tr>
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS PARA HEPATITIS B
                           </th>
                            <td class="text-center">{{data.var489 ? data.var489 : "-"}}</td>
                            <td class="text-center">{{data.var490 ? data.var490 : "-"}}</td>
                            <td class="text-center">{{data.var491 ? data.var491 : "-"}}</td>
                          

                           
                      </tr>
                 
                      <tr>
                           <th class="text-left "  colspan="2">
                               GESTANTES TAMIZADAS REACTIVAS PARA HEPATITIS B
                           </th>
                            <td class="text-center">{{data.var492 ? data.var492 : "-"}}</td>
                            <td class="text-center">{{data.var493 ? data.var493 : "-"}}</td>
                            <td class="text-center">{{data.var494 ? data.var494 : "-"}}</td>
                          

                           
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
                    <thead>
                        <tr>
                        <th class="text-center tthh1 "  > 
                            6B.- RECIÉN NACIDOS (Sífilis, VIH, Hepatitis B)   </th>
                        <th class="text-left tthh1 "  >
                            Total
                        </th>
                    
                       
                        </tr>


                    </thead>
                    <tbody>
                      <tr>
                           <th class="text-left "  >
                               RN CON SIFILIS CONGENITA QUE RECIBEN TRATAMIENTO COMPLETO
                           </th>
                            <td class="text-center">{{data.var522 ? data.var522 : "-"}}</td>

                      </tr>
                   
                      <tr>
                           <th class="text-left "  >
                               RN EXPUESTOS A VIH QUE RECIBEN ARV
                           </th>
                            <td class="text-center">{{data.var523 ? data.var523 : "-"}}</td>

                      </tr>
                      <tr>
                           <th class="text-left "  >
                               RN EXPUESTOS A VIH QUE INICIAN SUCEDANEOS DE LECHE MATERNA
                           </th>
                            <td class="text-center">{{data.var524 ? data.var524 : "-"}}</td>

                      </tr>
                   
                      <tr>
                           <th class="text-left "  >
                               EXPUESTOS A HEPATITIS B
                           </th>
                            <td class="text-center">{{data.var525 ? data.var525 : "-"}}</td>

                      </tr>
                      <tr>
                           <th class="text-left "  >
                               EXPUESTOS CON VACUNA DE HEPATITIS B EN ATENCION DE PARTO
                           </th>
                            <td class="text-center">{{data.var526 ? data.var526 : "-"}}</td>

                      </tr>
                      <tr>
                           <th class="text-left "  >
                               EXPUESTOS QUE RECIBEN INMUNOGLOBULINA (HBIG)
                           </th>
                            <td class="text-center">{{data.var527 ? data.var527 : "-"}}</td>

                      </tr>
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

            <v-col md="1">
            <br>

             </v-col>

         
        
              <v-col md="9">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                7.-  POBLACION CLAVE: Trabajadoras/es Sexuales
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS - FEMENINO
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS - HSH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS - TRANS
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TOTAL
                            </th>
                       </tr>
                       <tr>
                           
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                          
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                             <th class="tthh4"  >
                                TS - FEMENINO
                           </th>
                           <th class="tthh4"  >
                                TS - HSH
                           </th>
                           <th class="tthh4"  >
                                TOTAL
                           </th>
                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                TS ATENDIDOS/AS EN AMP
                        </th>
                        <td class="text-center">{{data2.var528 ? data2.var528 : "-"}}</td>
                        <td class="text-center">{{data2.var529 ? data2.var529 : "-"}}</td>
                        <td class="text-center">{{data2.var530 ? data2.var530 : "-"}}</td>
                        <td class="text-center">{{data2.var531 ? data2.var531 : "-"}}</td>
                        <td class="text-center">{{data2.var532 ? data2.var532 : "-"}}</td>
                        <td class="text-center">{{data2.var533 ? data2.var533 : "-"}}</td>
                        <td class="text-center">{{data2.var534 ? data2.var534 : "-"}}</td>
                        <td class="text-center">{{data2.var535 ? data2.var535 : "-"}}</td>
                        <td class="text-center">{{data2.var536 ? data2.var536 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA1}}</td>
                          <td class="text-center">{{totalA2}}</td>
                          <td class="text-center">{{totalA3}}</td>
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                ATENCIONES A TS  EN AMP
                        </th>
                        <td class="text-center">{{data2.var537 ? data2.var537 : "-"}}</td>
                        <td class="text-center">{{data2.var538 ? data2.var538 : "-"}}</td>
                        <td class="text-center">{{data2.var539 ? data2.var539 : "-"}}</td>
                        <td class="text-center">{{data2.var540 ? data2.var540 : "-"}}</td>
                        <td class="text-center">{{data2.var541 ? data2.var541 : "-"}}</td>
                        <td class="text-center">{{data2.var542 ? data2.var542 : "-"}}</td>
                        <td class="text-center">{{data2.var543 ? data2.var543 : "-"}}</td>
                        <td class="text-center">{{data2.var544 ? data2.var544 : "-"}}</td>
                        <td class="text-center">{{data2.var545 ? data2.var545 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA4}}</td>
                          <td class="text-center">{{totalA5}}</td>
                          <td class="text-center">{{totalA6}}</td>
                    </tr>
                  
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               TS CONTROLADOS/AS (4 VECES/AÑO)
                        </th>
                        <td class="text-center">{{data2.var546 ? data2.var546 : "-"}}</td>
                        <td class="text-center">{{data2.var547 ? data2.var547 : "-"}}</td>
                        <td class="text-center">{{data2.var548 ? data2.var548 : "-"}}</td>
                        <td class="text-center">{{data2.var549 ? data2.var549 : "-"}}</td>
                        <td class="text-center">{{data2.var550 ? data2.var550 : "-"}}</td>
                        <td class="text-center">{{data2.var551 ? data2.var551 : "-"}}</td>
                        <td class="text-center">{{data2.var552 ? data2.var552 : "-"}}</td>
                        <td class="text-center">{{data2.var553 ? data2.var553 : "-"}}</td>
                        <td class="text-center">{{data2.var554 ? data2.var554 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA7}}</td>
                          <td class="text-center">{{totalA8}}</td>
                          <td class="text-center">{{totalA9}}</td>
                    </tr>
                  
                   
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               TS TAMIZADOS/AS PARA VIH (1º TAMIZAJE)
                        </th>
                        <td class="text-center">{{data2.var555 ? data2.var555 : "-"}}</td>
                        <td class="text-center">{{data2.var556 ? data2.var556 : "-"}}</td>
                        <td class="text-center">{{data2.var557 ? data2.var557 : "-"}}</td>
                        <td class="text-center">{{data2.var558 ? data2.var558 : "-"}}</td>
                        <td class="text-center">{{data2.var559 ? data2.var559 : "-"}}</td>
                        <td class="text-center">{{data2.var560 ? data2.var560 : "-"}}</td>
                        <td class="text-center">{{data2.var561 ? data2.var561 : "-"}}</td>
                        <td class="text-center">{{data2.var562 ? data2.var562 : "-"}}</td>
                        <td class="text-center">{{data2.var563 ? data2.var563 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA10}}</td>
                          <td class="text-center">{{totalA11}}</td>
                          <td class="text-center">{{totalA12}}</td>
                    </tr>
                  
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               TS CON TAMIZAJE PARA VIH CON RESULTADO REACTIVO
                        </th>
                        <td class="text-center">{{data2.var564 ? data2.var564 : "-"}}</td>
                        <td class="text-center">{{data2.var565 ? data2.var565 : "-"}}</td>
                        <td class="text-center">{{data2.var566 ? data2.var566 : "-"}}</td>
                        <td class="text-center">{{data2.var567 ? data2.var567 : "-"}}</td>
                        <td class="text-center">{{data2.var568 ? data2.var568 : "-"}}</td>
                        <td class="text-center">{{data2.var569 ? data2.var569 : "-"}}</td>
                        <td class="text-center">{{data2.var570 ? data2.var570 : "-"}}</td>
                        <td class="text-center">{{data2.var571 ? data2.var571 : "-"}}</td>
                        <td class="text-center">{{data2.var572 ? data2.var572 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA13}}</td>
                          <td class="text-center">{{totalA14}}</td>
                          <td class="text-center">{{totalA15}}</td>
                    </tr>
                  
                   
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               TS QUE INICIAN TERAPIA ANTIRETROVIRAL
                        </th>
                        <td class="text-center">{{data2.var573 ? data2.var573 : "-"}}</td>
                        <td class="text-center">{{data2.var574 ? data2.var574 : "-"}}</td>
                        <td class="text-center">{{data2.var575 ? data2.var575 : "-"}}</td>
                        <td class="text-center">{{data2.var576 ? data2.var576 : "-"}}</td>
                        <td class="text-center">{{data2.var577 ? data2.var577 : "-"}}</td>
                        <td class="text-center">{{data2.var578 ? data2.var578 : "-"}}</td>
                        <td class="text-center">{{data2.var579 ? data2.var579 : "-"}}</td>
                        <td class="text-center">{{data2.var580 ? data2.var580 : "-"}}</td>
                        <td class="text-center">{{data2.var581 ? data2.var581 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA16}}</td>
                          <td class="text-center">{{totalA17}}</td>
                          <td class="text-center">{{totalA18}}</td>
                    </tr>
                  
                   
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               TS TAMIZADOS/AS PARA HEPATITIS B
                        </th>
                        <td class="text-center">{{data2.var582 ? data2.var582 : "-"}}</td>
                        <td class="text-center">{{data2.var583 ? data2.var583 : "-"}}</td>
                        <td class="text-center">{{data2.var584 ? data2.var584 : "-"}}</td>
                        <td class="text-center">{{data2.var585 ? data2.var585 : "-"}}</td>
                        <td class="text-center">{{data2.var586 ? data2.var586 : "-"}}</td>
                        <td class="text-center">{{data2.var587 ? data2.var587 : "-"}}</td>
                        <td class="text-center">{{data2.var588 ? data2.var588 : "-"}}</td>
                        <td class="text-center">{{data2.var589 ? data2.var589 : "-"}}</td>
                        <td class="text-center">{{data2.var590 ? data2.var590 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA19}}</td>
                          <td class="text-center">{{totalA20}}</td>
                          <td class="text-center">{{totalA21}}</td>
                    </tr>
                  
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               TS CON TAMIZAJE REACTIVO PARA HEPATITIS B
                        </th>
                        <td class="text-center">{{data2.var591 ? data2.var591 : "-"}}</td>
                        <td class="text-center">{{data2.var592 ? data2.var592 : "-"}}</td>
                        <td class="text-center">{{data2.var593 ? data2.var593 : "-"}}</td>
                        <td class="text-center">{{data2.var594 ? data2.var594 : "-"}}</td>
                        <td class="text-center">{{data2.var595 ? data2.var595 : "-"}}</td>
                        <td class="text-center">{{data2.var596 ? data2.var596 : "-"}}</td>
                        <td class="text-center">{{data2.var597 ? data2.var597 : "-"}}</td>
                        <td class="text-center">{{data2.var598 ? data2.var598 : "-"}}</td>
                        <td class="text-center">{{data2.var599 ? data2.var599 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA22}}</td>
                          <td class="text-center">{{totalA23}}</td>
                          <td class="text-center">{{totalA24}}</td>
                    </tr>
                  
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               TS QUE COMPLETAN VACUNACION DE HEPATITIS B
                        </th>
                        <td class="text-center">{{data2.var600 ? data2.var600 : "-"}}</td>
                        <td class="text-center">{{data2.var601 ? data2.var601 : "-"}}</td>
                        <td class="text-center">{{data2.var602 ? data2.var602 : "-"}}</td>
                        <td class="text-center">{{data2.var603 ? data2.var603 : "-"}}</td>
                        <td class="text-center">{{data2.var604 ? data2.var604 : "-"}}</td>
                        <td class="text-center">{{data2.var605 ? data2.var605 : "-"}}</td>
                        <td class="text-center">{{data2.var606 ? data2.var606 : "-"}}</td>
                        <td class="text-center">{{data2.var607 ? data2.var607 : "-"}}</td>
                        <td class="text-center">{{data2.var608 ? data2.var608 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA25}}</td>
                          <td class="text-center">{{totalA26}}</td>
                          <td class="text-center">{{totalA27}}</td>
                    </tr>
                  
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
                  <v-col md="1">
            <br>

             </v-col>
              <v-col md="9">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                8.-  POBLACION CLAVE:  trabajadoras/es Sexuales : ITS
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS - FEMENINO
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS - HSH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS - TRANS
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TOTAL
                            </th>
                       </tr>
                       <tr>
                           
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                          
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                           <th class="tthh4"  >
                                18a - 29a
                           </th>
                           <th class="tthh4"  >
                                30a - 59a
                           </th>
                           <th class="tthh4"  >
                                60a más
                           </th>
                             <th class="tthh4"  >
                                TS - FEMENINO
                           </th>
                           <th class="tthh4"  >
                                TS - HSH
                           </th>
                           <th class="tthh4"  >
                                TOTAL
                           </th>
                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS CON DIAGNOSTICO DE ITS CON MANEJO SINDROMICO
                        </th>
                        <td class="text-center">{{data2.var609 ? data2.var609 : "-"}}</td>
                        <td class="text-center">{{data2.var610 ? data2.var610 : "-"}}</td>
                        <td class="text-center">{{data2.var611 ? data2.var611 : "-"}}</td>
                        <td class="text-center">{{data2.var612 ? data2.var612 : "-"}}</td>
                        <td class="text-center">{{data2.var613 ? data2.var613 : "-"}}</td>
                        <td class="text-center">{{data2.var614 ? data2.var614 : "-"}}</td>
                        <td class="text-center">{{data2.var615 ? data2.var615 : "-"}}</td>
                        <td class="text-center">{{data2.var616 ? data2.var616 : "-"}}</td>
                        <td class="text-center">{{data2.var617 ? data2.var617 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA27}}</td>
                          <td class="text-center">{{totalA28}}</td>
                          <td class="text-center">{{totalA29}}</td>
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS CON DESCARGA URETRAL
                        </th>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center">{{data2.var618 ? data2.var618 : "-"}}</td>
                        <td class="text-center">{{data2.var619 ? data2.var619 : "-"}}</td>
                        <td class="text-center">{{data2.var620 ? data2.var620 : "-"}}</td>
                        <td class="text-center">{{data2.var621 ? data2.var621 : "-"}}</td>
                        <td class="text-center">{{data2.var622 ? data2.var622 : "-"}}</td>
                        <td class="text-center">{{data2.var623 ? data2.var623 : "-"}}</td>
                       
                       

                      

                          <td class="text-center tthh3">{{ }}</td>
                          <td class="text-center">{{totalA30}}</td>
                          <td class="text-center">{{totalA31}}</td>
                         
                    </tr>
                  
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               CASOS CON FLUJO VAGINAL COMPATIBLE CON ITS
                        </th>
                        <td class="text-center">{{data2.var624 ? data2.var624 : "-"}}</td>
                        <td class="text-center">{{data2.var625 ? data2.var625 : "-"}}</td>
                        <td class="text-center">{{data2.var626 ? data2.var626 : "-"}}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                       

                      

                          <td class="text-center">{{totalA32}}</td>
                          <td class="text-center tthh3">{{ }}</td>
                          <td class="text-center tthh3">{{ }}</td>
                    </tr>
                  
                   
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               CASOS DE ULCERA GENITAL
                        </th>
                        <td class="text-center">{{data2.var627 ? data2.var627 : "-"}}</td>
                        <td class="text-center">{{data2.var628 ? data2.var628 : "-"}}</td>
                        <td class="text-center">{{data2.var629 ? data2.var629 : "-"}}</td>
                        <td class="text-center">{{data2.var630 ? data2.var630 : "-"}}</td>
                        <td class="text-center">{{data2.var631 ? data2.var631 : "-"}}</td>
                        <td class="text-center">{{data2.var632 ? data2.var632 : "-"}}</td>
                        <td class="text-center">{{data2.var633 ? data2.var633 : "-"}}</td>
                        <td class="text-center">{{data2.var634 ? data2.var634 : "-"}}</td>
                        <td class="text-center">{{data2.var635 ? data2.var635 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA33}}</td>
                          <td class="text-center">{{totalA34}}</td>
                          <td class="text-center">{{totalA35}}</td>
                    </tr>
                  
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               CASOS DE BUBON INGUINAL
                        </th>
                        <td class="text-center">{{data2.var636 ? data2.var636 : "-"}}</td>
                        <td class="text-center">{{data2.var637 ? data2.var637 : "-"}}</td>
                        <td class="text-center">{{data2.var638 ? data2.var638 : "-"}}</td>
                        <td class="text-center">{{data2.var639 ? data2.var639 : "-"}}</td>
                        <td class="text-center">{{data2.var640 ? data2.var640 : "-"}}</td>
                        <td class="text-center">{{data2.var641 ? data2.var641 : "-"}}</td>
                        <td class="text-center">{{data2.var642 ? data2.var642 : "-"}}</td>
                        <td class="text-center">{{data2.var643 ? data2.var643 : "-"}}</td>
                        <td class="text-center">{{data2.var644 ? data2.var644 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA36}}</td>
                          <td class="text-center">{{totalA37}}</td>
                          <td class="text-center">{{totalA38}}</td>
                    </tr>
                  
                   
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               CASOS CON FLUJO VAGINAL COMPATIBLE CON ITS
                        </th>
                        <td class="text-center">{{data2.var645 ? data2.var645 : "-"}}</td>
                        <td class="text-center">{{data2.var646 ? data2.var646 : "-"}}</td>
                        <td class="text-center">{{data2.var647 ? data2.var647 : "-"}}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                       

                      

                          <td class="text-center">{{totalA39}}</td>
                          <td class="text-center tthh3">{{ }}</td>
                          <td class="text-center tthh3">{{ }}</td>
                    </tr>
                   
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               PERSONAS CON DIAGNOSTICO DE ITS CON MANEJO ETIOLOGICO
                        </th>
                        <td class="text-center">{{data2.var648 ? data2.var648 : "-"}}</td>
                        <td class="text-center">{{data2.var649 ? data2.var649 : "-"}}</td>
                        <td class="text-center">{{data2.var650 ? data2.var650 : "-"}}</td>
                        <td class="text-center">{{data2.var651 ? data2.var651 : "-"}}</td>
                        <td class="text-center">{{data2.var652 ? data2.var652 : "-"}}</td>
                        <td class="text-center">{{data2.var653 ? data2.var653 : "-"}}</td>
                        <td class="text-center">{{data2.var654 ? data2.var654 : "-"}}</td>
                        <td class="text-center">{{data2.var655 ? data2.var655 : "-"}}</td>
                        <td class="text-center">{{data2.var656 ? data2.var656 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA40}}</td>
                          <td class="text-center">{{totalA41}}</td>
                          <td class="text-center">{{totalA42}}</td>
                    </tr>
                  
                   
                     <tr>
                        <th class ="text-left" colspan="2" >
                               CASOS DE TRICOMONIASIS
                        </th>
                        <td class="text-center">{{data2.var657 ? data2.var657 : "-"}}</td>
                        <td class="text-center">{{data2.var658 ? data2.var658 : "-"}}</td>
                        <td class="text-center">{{data2.var659 ? data2.var659 : "-"}}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                       

                      

                          <td class="text-center">{{totalA43}}</td>
                          <td class="text-center tthh3">{{ }}</td>
                          <td class="text-center tthh3">{{ }}</td>
                    </tr>
                  
                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                               CASOS DE GONORREA
                        </th>
                        <td class="text-center">{{data2.var660 ? data2.var660 : "-"}}</td>
                        <td class="text-center">{{data2.var661 ? data2.var661 : "-"}}</td>
                        <td class="text-center">{{data2.var662 ? data2.var662 : "-"}}</td>
                        <td class="text-center">{{data2.var663 ? data2.var663 : "-"}}</td>
                        <td class="text-center">{{data2.var664 ? data2.var664 : "-"}}</td>
                        <td class="text-center">{{data2.var665 ? data2.var665 : "-"}}</td>
                        <td class="text-center">{{data2.var666 ? data2.var666 : "-"}}</td>
                        <td class="text-center">{{data2.var667 ? data2.var667 : "-"}}</td>
                        <td class="text-center">{{data2.var668 ? data2.var668 : "-"}}</td>
                       

                      

                          <td class="text-center">{{totalA44}}</td>
                          <td class="text-center">{{totalA45}}</td>
                          <td class="text-center">{{totalA46}}</td>
                    </tr>
                  
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

               <v-col md="9">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="3" colspan="2">
                                8A.- POBLACION CLAVE:  trabajadoras/es Sexuales : ITS (POR CONDICION)
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS TRATADOS
                           </th>
                             <th class="text-center tthh1" colspan="6" rowspan="1">
                              CONTACTOS
                           </th>
                             <th class="text-center tthh1" colspan="6" rowspan="1">
                              CONTACTOS TRATADOS
                           </th>
                            
                       </tr>
                       <tr>
                           
                           <th class="tthh4"  rowspan="2" colspan="1" >
                                TS - F
                           </th>
                           <th class="tthh4"  rowspan="2" colspan="1" >
                                TS - HSH
                           </th>
                           <th class="tthh4"  rowspan="2" colspan="1">
                                TS - TRANS
                           </th>
                      
                              <th class="tthh4"  colspan="2" >
                                TS - FEMENINO
                           </th>
                              <th class="tthh4"  colspan="2" >
                                TS - HSH
                           </th>
                              <th class="tthh4"  colspan="2" >
                                TS - TRANS
                           </th>
                              <th class="tthh4"  colspan="2" >
                                TS - FEMENINO
                           </th>
                              <th class="tthh4"  colspan="2" >
                                TS - HSH
                           </th>
                              <th class="tthh4"  colspan="2" >
                                TS - TRANS
                           </th>
                       </tr>

                       <tr>
                        <th class="text-center" >F</th>
                        <th class="text-center" >M</th>
                        <th class="text-center" >F</th>
                        <th class="text-center" >M</th>
                        <th class="text-center" >F</th>
                        <th class="text-center" >M</th>
                        <th class="text-center" >F</th>
                        <th class="text-center" >M</th>
                        <th class="text-center" >F</th>
                        <th class="text-center" >M</th>
                        <th class="text-center" >F</th>
                        <th class="text-center" >M</th>

                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS CON DIAGNOSTICO DE ITS CON MANEJO SINDROMICO
                        </th>
                        <td class="text-center">{{data2.var669 ? data2.var669 : "-"}}</td>
                        <td class="text-center">{{data2.var670 ? data2.var670 : "-"}}</td>
                        <td class="text-center">{{data2.var671 ? data2.var671 : "-"}}</td>
                        <td class="text-center">{{data2.var672 ? data2.var672 : "-"}}</td>
                        <td class="text-center">{{data2.var673 ? data2.var673 : "-"}}</td>
                        <td class="text-center">{{data2.var674 ? data2.var674 : "-"}}</td>
                        <td class="text-center">{{data2.var675 ? data2.var675 : "-"}}</td>
                        <td class="text-center">{{data2.var676 ? data2.var676 : "-"}}</td>
                        <td class="text-center">{{data2.var677 ? data2.var677 : "-"}}</td>
                        <td class="text-center">{{data2.var678 ? data2.var678 : "-"}}</td>
                        <td class="text-center">{{data2.var679 ? data2.var679 : "-"}}</td>
                        <td class="text-center">{{data2.var680 ? data2.var680 : "-"}}</td>
                        <td class="text-center">{{data2.var681 ? data2.var681 : "-"}}</td>
                        <td class="text-center">{{data2.var682 ? data2.var682 : "-"}}</td>
                        <td class="text-center">{{data2.var683 ? data2.var683 : "-"}}</td>
                       

                     
                    </tr>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS CON DESCARGA URETRAL
                        </th>
                        <td class="text-center tthh3 " >{{ }}</td>
                        <td class="text-center">{{data2.var684 ? data2.var684 : "-"}}</td>
                        <td class="text-center">{{data2.var685 ? data2.var685 : "-"}}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center">{{data2.var686 ? data2.var686 : "-"}}</td>
                        <td class="text-center">{{data2.var687 ? data2.var687 : "-"}}</td>
                        <td class="text-center">{{data2.var688 ? data2.var688 : "-"}}</td>
                        <td class="text-center">{{data2.var689 ? data2.var689 : "-"}}</td>
                        <td class="text-center  tthh3 ">{{ }}</td>
                        <td class="text-center  tthh3 ">{{ }}</td>
                        <td class="text-center">{{data2.var690 ? data2.var690 : "-"}}</td>
                        <td class="text-center">{{data2.var691 ? data2.var691 : "-"}}</td>
                        <td class="text-center">{{data2.var692 ? data2.var692 : "-"}}</td>
                        <td class="text-center">{{data2.var693 ? data2.var693 : "-"}}</td>
                       
                    </tr>
                    
                     <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS CON FLUJO VAGINAL COMPATIBLE CON ITS
                        </th>
                        <td class="text-center">{{data2.var694 ? data2.var694 : "-"}}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center">{{data2.var695 ? data2.var695 : "-"}}</td>
                        <td class="text-center">{{data2.var696 ? data2.var696 : "-"}}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center">{{data2.var697 ? data2.var697 : "-"}}</td>
                        <td class="text-center">{{data2.var698 ? data2.var698 : "-"}}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                       

                     
                    </tr>
                   
                    <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE ULCERA GENITAL
                        </th>
                        <td class="text-center">{{data2.var699 ? data2.var699 : "-"}}</td>
                        <td class="text-center">{{data2.var700 ? data2.var700 : "-"}}</td>
                        <td class="text-center">{{data2.var701 ? data2.var701 : "-"}}</td>
                        <td class="text-center">{{data2.var702 ? data2.var702 : "-"}}</td>
                        <td class="text-center">{{data2.var703 ? data2.var703 : "-"}}</td>
                        <td class="text-center">{{data2.var704 ? data2.var704 : "-"}}</td>
                        <td class="text-center">{{data2.var705 ? data2.var705 : "-"}}</td>
                        <td class="text-center">{{data2.var706 ? data2.var706 : "-"}}</td>
                        <td class="text-center">{{data2.var707 ? data2.var707 : "-"}}</td>
                        <td class="text-center">{{data2.var708 ? data2.var708 : "-"}}</td>
                        <td class="text-center">{{data2.var709 ? data2.var709 : "-"}}</td>
                        <td class="text-center">{{data2.var710 ? data2.var710 : "-"}}</td>
                        <td class="text-center">{{data2.var711 ? data2.var711 : "-"}}</td>
                        <td class="text-center">{{data2.var712 ? data2.var712 : "-"}}</td>
                        <td class="text-center">{{data2.var713 ? data2.var713 : "-"}}</td>
                       

                     
                    </tr>
                    <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE BUBON INGUINAL
                        </th>
                        <td class="text-center">{{data2.var714 ? data2.var714 : "-"}}</td>
                        <td class="text-center">{{data2.var715 ? data2.var715 : "-"}}</td>
                        <td class="text-center">{{data2.var716 ? data2.var716 : "-"}}</td>
                        <td class="text-center">{{data2.var717 ? data2.var717 : "-"}}</td>
                        <td class="text-center">{{data2.var718 ? data2.var718 : "-"}}</td>
                        <td class="text-center">{{data2.var719 ? data2.var719 : "-"}}</td>
                        <td class="text-center">{{data2.var720 ? data2.var720 : "-"}}</td>
                        <td class="text-center">{{data2.var721 ? data2.var721 : "-"}}</td>
                        <td class="text-center">{{data2.var722 ? data2.var722 : "-"}}</td>
                        <td class="text-center">{{data2.var723 ? data2.var723 : "-"}}</td>
                        <td class="text-center">{{data2.var724 ? data2.var724 : "-"}}</td>
                        <td class="text-center">{{data2.var725 ? data2.var725 : "-"}}</td>
                        <td class="text-center">{{data2.var726 ? data2.var726 : "-"}}</td>
                        <td class="text-center">{{data2.var727 ? data2.var727 : "-"}}</td>
                        <td class="text-center">{{data2.var728 ? data2.var728 : "-"}}</td>
                       

                     
                    </tr>

                      <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS CON SINDROME DE DOLOR ABDOMINAL BAJO
                        </th>
                        <td class="text-center">{{data2.var729 ? data2.var729 : "-"}}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center">{{data2.var730 ? data2.var730 : "-"}}</td>
                        <td class="text-center">{{data2.var731 ? data2.var731 : "-"}}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center">{{data2.var732 ? data2.var732 : "-"}}</td>
                        <td class="text-center">{{data2.var733 ? data2.var733 : "-"}}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                       

                     
                    </tr>
                     <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS CON DIAGNOSTICO DE ITS CON MANEJO ETIOLOGICO
                        </th>
                        <td class="text-center">{{data2.var734 ? data2.var734 : "-"}}</td>
                        <td class="text-center">{{data2.var735 ? data2.var735 : "-"}}</td>
                        <td class="text-center">{{data2.var736 ? data2.var736 : "-"}}</td>
                        <td class="text-center">{{data2.var737 ? data2.var737 : "-"}}</td>
                        <td class="text-center">{{data2.var738 ? data2.var738 : "-"}}</td>
                        <td class="text-center">{{data2.var739 ? data2.var739 : "-"}}</td>
                        <td class="text-center">{{data2.var740 ? data2.var740 : "-"}}</td>
                        <td class="text-center">{{data2.var741 ? data2.var741 : "-"}}</td>
                        <td class="text-center">{{data2.var742 ? data2.var742 : "-"}}</td>
                        <td class="text-center">{{data2.var743 ? data2.var743 : "-"}}</td>
                        <td class="text-center">{{data2.var744 ? data2.var744 : "-"}}</td>
                        <td class="text-center">{{data2.var745 ? data2.var745 : "-"}}</td>
                        <td class="text-center">{{data2.var746 ? data2.var746 : "-"}}</td>
                        <td class="text-center">{{data2.var747 ? data2.var747 : "-"}}</td>
                        <td class="text-center">{{data2.var748 ? data2.var748 : "-"}}</td>
                       

                     
                    </tr>

                        <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE TRICOMONIASIS
                        </th>
                        <td class="text-center">{{data2.var749 ? data2.var749 : "-"}}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center">{{data2.var750 ? data2.var750 : "-"}}</td>
                        <td class="text-center">{{data2.var751 ? data2.var751 : "-"}}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center tthh3 ">{{ }}</td>
                        <td class="text-center">{{data2.var752 ? data2.var752 : "-"}}</td>
                        <td class="text-center">{{data2.var753 ? data2.var753 : "-"}}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                        <td class="text-center tthh3">{{ }}</td>
                       

                     
                    </tr>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE GONORREA
                        </th>
                        <td class="text-center">{{data2.var754 ? data2.var754 : "-"}}</td>
                        <td class="text-center">{{data2.var755 ? data2.var755 : "-"}}</td>
                        <td class="text-center">{{data2.var756 ? data2.var756 : "-"}}</td>
                        <td class="text-center">{{data2.var757 ? data2.var757 : "-"}}</td>
                        <td class="text-center">{{data2.var758 ? data2.var758 : "-"}}</td>
                        <td class="text-center">{{data2.var759 ? data2.var759 : "-"}}</td>
                        <td class="text-center">{{data2.var760 ? data2.var760 : "-"}}</td>
                        <td class="text-center">{{data2.var761 ? data2.var761 : "-"}}</td>
                        <td class="text-center">{{data2.var762 ? data2.var762 : "-"}}</td>
                        <td class="text-center">{{data2.var763 ? data2.var763 : "-"}}</td>
                        <td class="text-center">{{data2.var764 ? data2.var764 : "-"}}</td>
                        <td class="text-center">{{data2.var765 ? data2.var765 : "-"}}</td>
                        <td class="text-center">{{data2.var766 ? data2.var766 : "-"}}</td>
                        <td class="text-center">{{data2.var767 ? data2.var767 : "-"}}</td>
                        <td class="text-center">{{data2.var768 ? data2.var768 : "-"}}</td>
                       

                     
                    </tr>
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

               <v-col md="8">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                9.- POBLACION CLAVE: Hombres que tienen Sexo con otros Hombres / Trans
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              HSH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TRANS
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                              TOTAL
                           </th>
                           
                       </tr>
                       <tr>
                           
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                          
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                           <th class="text-center  tthh4"  >
                                HSH
                           </th>
                           <th class="text-center  tthh4"  >
                                TRANS
                           </th>
                         
                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                ATENDIDOS/AS
                        </th>
                        <td class="text-center">{{data2.var769 ? data2.var769 : "-"}}</td>
                        <td class="text-center">{{data2.var770 ? data2.var770 : "-"}}</td>
                        <td class="text-center">{{data2.var771 ? data2.var771 : "-"}}</td>
                        <td class="text-center">{{data2.var772 ? data2.var772 : "-"}}</td>
                        <td class="text-center">{{data2.var773 ? data2.var773 : "-"}}</td>
                        <td class="text-center">{{data2.var774 ? data2.var774 : "-"}}</td>
                  
                         <td class="text-center">{{totalA16}}</td>
                         <td class="text-center">{{totalA17}}</td>


                    </tr>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                ATENCIONES A HSH/TRANS
                        </th>
                        <td class="text-center">{{data2.var775 ? data2.var775 : "-"}}</td>
                        <td class="text-center">{{data2.var776 ? data2.var776 : "-"}}</td>
                        <td class="text-center">{{data2.var777 ? data2.var777 : "-"}}</td>
                        <td class="text-center">{{data2.var778 ? data2.var778 : "-"}}</td>
                        <td class="text-center">{{data2.var779 ? data2.var779 : "-"}}</td>
                        <td class="text-center">{{data2.var780 ? data2.var780 : "-"}}</td>
                  
                         <td class="text-center">{{totalA18}}</td>
                         <td class="text-center">{{totalA19}}</td>


                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS  TAMIZADOS/AS PARA VIH (1º TAMIZAJE)
                        </th>
                        <td class="text-center">{{data2.var781 ? data2.var781 : "-"}}</td>
                        <td class="text-center">{{data2.var782 ? data2.var782 : "-"}}</td>
                        <td class="text-center">{{data2.var783 ? data2.var783 : "-"}}</td>
                        <td class="text-center">{{data2.var784 ? data2.var784 : "-"}}</td>
                        <td class="text-center">{{data2.var785 ? data2.var785 : "-"}}</td>
                        <td class="text-center">{{data2.var786 ? data2.var786 : "-"}}</td>
                  
                         <td class="text-center">{{totalA20}}</td>
                         <td class="text-center">{{totalA21}}</td>


                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS CON TAMIZAJE PARA VIH CON RESULTADO REACTIVO
                        </th>
                        <td class="text-center">{{data2.var787 ? data2.var787 : "-"}}</td>
                        <td class="text-center">{{data2.var788 ? data2.var788 : "-"}}</td>
                        <td class="text-center">{{data2.var789 ? data2.var789 : "-"}}</td>
                        <td class="text-center">{{data2.var790 ? data2.var790 : "-"}}</td>
                        <td class="text-center">{{data2.var791 ? data2.var791 : "-"}}</td>
                        <td class="text-center">{{data2.var792 ? data2.var792 : "-"}}</td>
                  
                         <td class="text-center">{{totalA22}}</td>
                         <td class="text-center">{{totalA23}}</td>


                    </tr>

       
                       <tr>
                        <th class ="text-left" colspan="2" >
                                QUE INICIAN TERAPIA ANTIRETROVIRAL
                        </th>
                        <td class="text-center">{{data2.var793 ? data2.var793 : "-"}}</td>
                        <td class="text-center">{{data2.var794 ? data2.var794 : "-"}}</td>
                        <td class="text-center">{{data2.var795 ? data2.var795 : "-"}}</td>
                        <td class="text-center">{{data2.var796 ? data2.var796 : "-"}}</td>
                        <td class="text-center">{{data2.var797 ? data2.var797 : "-"}}</td>
                        <td class="text-center">{{data2.var798 ? data2.var798 : "-"}}</td>
                  
                         <td class="text-center">{{totalA24}}</td>
                         <td class="text-center">{{totalA25}}</td>


                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                TAMIZADOS/AS PARA HEPATITIS B
                        </th>
                        <td class="text-center">{{data2.var799 ? data2.var799 : "-"}}</td>
                        <td class="text-center">{{data2.var800 ? data2.var800 : "-"}}</td>
                        <td class="text-center">{{data2.var801 ? data2.var801 : "-"}}</td>
                        <td class="text-center">{{data2.var802 ? data2.var802 : "-"}}</td>
                        <td class="text-center">{{data2.var803 ? data2.var803 : "-"}}</td>
                        <td class="text-center">{{data2.var804 ? data2.var804 : "-"}}</td>
                  
                         <td class="text-center">{{totalA26}}</td>
                         <td class="text-center">{{totalA27}}</td>


                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                TAMIZADOS/AS PARA HEPATITIS B
                        </th>
                        <td class="text-center">{{data2.var805 ? data2.var805 : "-"}}</td>
                        <td class="text-center">{{data2.var806 ? data2.var806 : "-"}}</td>
                        <td class="text-center">{{data2.var807 ? data2.var807 : "-"}}</td>
                        <td class="text-center">{{data2.var808 ? data2.var808 : "-"}}</td>
                        <td class="text-center">{{data2.var809 ? data2.var809 : "-"}}</td>
                        <td class="text-center">{{data2.var810 ? data2.var810 : "-"}}</td>
                  
                         <td class="text-center">{{totalA28}}</td>
                         <td class="text-center">{{totalA29}}</td>


                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS CON TAMIZAJE PARA HEPATITIS B CON RESULTADO REACTIVO
                        </th>
                        <td class="text-center">{{data2.var811 ? data2.var811 : "-"}}</td>
                        <td class="text-center">{{data2.var812 ? data2.var812 : "-"}}</td>
                        <td class="text-center">{{data2.var813 ? data2.var813 : "-"}}</td>
                        <td class="text-center">{{data2.var814 ? data2.var814 : "-"}}</td>
                        <td class="text-center">{{data2.var815 ? data2.var815 : "-"}}</td>
                        <td class="text-center">{{data2.var816 ? data2.var816 : "-"}}</td>
                  
                         <td class="text-center">{{totalA28}}</td>
                         <td class="text-center">{{totalA29}}</td>


                    </tr>

                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS QUE COMPLETAN VACUNACION DE HEPATITIS B
                        </th>
                        <td class="text-center">{{data2.var817 ? data2.var817 : "-"}}</td>
                        <td class="text-center">{{data2.var818 ? data2.var818 : "-"}}</td>
                        <td class="text-center">{{data2.var819 ? data2.var819 : "-"}}</td>
                        <td class="text-center">{{data2.var820 ? data2.var820 : "-"}}</td>
                        <td class="text-center">{{data2.var821 ? data2.var821 : "-"}}</td>
                        <td class="text-center">{{data2.var822 ? data2.var822 : "-"}}</td>
                  
                         <td class="text-center">{{totalA30}}</td>
                         <td class="text-center">{{totalA31}}</td>


                    </tr>

                   
                  
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

               <v-col md="8">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                10.- POBLACION CLAVE:  Hombres que tienen sexo con otros hombres / Trans : ITS
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              HSH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TRANS
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                              TOTAL
                           </th>
                           
                       </tr>
                       <tr>
                           
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                          
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                           <th class="text-center  tthh4"  >
                                HSH
                           </th>
                           <th class="text-center  tthh4"  >
                                TRANS
                           </th>
                         
                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS CON DIAGNOSTICO DE ITS CON MANEJO SINDROMICO
                        </th>
                        <td class="text-center">{{data2.var817 ? data2.var817 : "-"}}</td>
                        <td class="text-center">{{data2.var818 ? data2.var818 : "-"}}</td>
                        <td class="text-center">{{data2.var819 ? data2.var819 : "-"}}</td>
                        <td class="text-center">{{data2.var820 ? data2.var820 : "-"}}</td>
                        <td class="text-center">{{data2.var821 ? data2.var821 : "-"}}</td>
                        <td class="text-center">{{data2.var822 ? data2.var822 : "-"}}</td>
                  
                         <td class="text-center">{{totalA32}}</td>
                         <td class="text-center">{{totalA33}}</td>


                    </tr>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS CON DESCARGA URETRAL
                        </th>
                        <td class="text-center">{{data2.var823 ? data2.var823 : "-"}}</td>
                        <td class="text-center">{{data2.var824 ? data2.var824 : "-"}}</td>
                        <td class="text-center">{{data2.var825 ? data2.var825 : "-"}}</td>
                        <td class="text-center">{{data2.var826 ? data2.var826 : "-"}}</td>
                        <td class="text-center">{{data2.var827 ? data2.var827 : "-"}}</td>
                        <td class="text-center">{{data2.var828 ? data2.var828 : "-"}}</td>
                  
                         <td class="text-center">{{totalA34}}</td>
                         <td class="text-center">{{totalA35}}</td>


                    </tr>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE ULCERA GENITAL
                        </th>
                        <td class="text-center">{{data2.var829 ? data2.var829 : "-"}}</td>
                        <td class="text-center">{{data2.var830 ? data2.var830 : "-"}}</td>
                        <td class="text-center">{{data2.var831 ? data2.var831 : "-"}}</td>
                        <td class="text-center">{{data2.var832 ? data2.var832 : "-"}}</td>
                        <td class="text-center">{{data2.var833 ? data2.var833 : "-"}}</td>
                        <td class="text-center">{{data2.var834 ? data2.var834 : "-"}}</td>
                  
                         <td class="text-center">{{totalA36}}</td>
                         <td class="text-center">{{totalA37}}</td>


                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE BUBON INGUINAL
                        </th>
                        <td class="text-center">{{data2.var835 ? data2.var835 : "-"}}</td>
                        <td class="text-center">{{data2.var836 ? data2.var836 : "-"}}</td>
                        <td class="text-center">{{data2.var837 ? data2.var837 : "-"}}</td>
                        <td class="text-center">{{data2.var838 ? data2.var838 : "-"}}</td>
                        <td class="text-center">{{data2.var839 ? data2.var839 : "-"}}</td>
                        <td class="text-center">{{data2.var840 ? data2.var840 : "-"}}</td>
                  
                         <td class="text-center">{{totalA38}}</td>
                         <td class="text-center">{{totalA39}}</td>


                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS CON DIAGNOSTICO DE ITS CON MANEJO ETIOLOGICO
                        </th>
                        <td class="text-center">{{data2.var841 ? data2.var841 : "-"}}</td>
                        <td class="text-center">{{data2.var842 ? data2.var842 : "-"}}</td>
                        <td class="text-center">{{data2.var843 ? data2.var843 : "-"}}</td>
                        <td class="text-center">{{data2.var844 ? data2.var844 : "-"}}</td>
                        <td class="text-center">{{data2.var845 ? data2.var845 : "-"}}</td>
                        <td class="text-center">{{data2.var846 ? data2.var846 : "-"}}</td>
                  
                         <td class="text-center">{{totalA40}}</td>
                         <td class="text-center">{{totalA41}}</td>


                    </tr>


                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE GONORREA
                        </th>
                        <td class="text-center">{{data2.var847 ? data2.var847 : "-"}}</td>
                        <td class="text-center">{{data2.var848 ? data2.var848 : "-"}}</td>
                        <td class="text-center">{{data2.var849 ? data2.var849 : "-"}}</td>
                        <td class="text-center">{{data2.var850 ? data2.var850 : "-"}}</td>
                        <td class="text-center">{{data2.var851 ? data2.var851 : "-"}}</td>
                        <td class="text-center">{{data2.var852 ? data2.var852 : "-"}}</td>
                  
                         <td class="text-center">{{totalA42}}</td>
                         <td class="text-center">{{totalA43}}</td>


                    </tr>

                   
                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS CON SEROLOGIA REACTIVA PARA SIFILIS
                        </th>
                        <td class="text-center">{{data2.var853 ? data2.var853 : "-"}}</td>
                        <td class="text-center">{{data2.var854 ? data2.var854 : "-"}}</td>
                        <td class="text-center">{{data2.var855 ? data2.var855 : "-"}}</td>
                        <td class="text-center">{{data2.var856 ? data2.var856 : "-"}}</td>
                        <td class="text-center">{{data2.var857 ? data2.var857 : "-"}}</td>
                        <td class="text-center">{{data2.var858 ? data2.var858 : "-"}}</td>
                  
                         <td class="text-center">{{totalA44}}</td>
                         <td class="text-center">{{totalA45}}</td>


                    </tr>


                   
                  
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
    
              <v-col md="7">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="3" colspan="2">
                                10A.- POBLACION CLAVE:Hombres que tienen sexo con otros hombres/Trans:ITS (POR CONDICIÓN)
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                              TRATADOS
                           </th>
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                              CONTACTOS
                           </th>
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                              CONTACTOS TRATADOS
                           </th>
                           
                       </tr>
                       <tr>
                           
                           <th class="text-center  tthh4" rowspan="2" >
                                HSH
                           </th>
                           <th class="text-center  tthh4" rowspan="2" >
                                TRANS
                           </th>
                           <th class="text-center  tthh4"  colspan="2"  >
                                HSH
                           </th>
                         
                           <th class="text-center  tthh4"  colspan="2"  >
                                TRANS
                           </th>
                           <th class="text-center  tthh4"  colspan="2"  >
                                HSH
                           </th>
                           <th class="text-center  tthh4"  colspan="2"  >
                                TRANS
                           </th>
                         
                         
                       </tr>
                            <th class="text-center  "    >
                                F
                           </th>
                            <th class="text-center  "    >
                                M
                           </th>
                            <th class="text-center  "    >
                                F
                           </th>
                            <th class="text-center  "    >
                                M
                           </th>
                            <th class="text-center  "    >
                                F
                           </th>
                            <th class="text-center  "    >
                                M
                           </th>
                            <th class="text-center  "    >
                                F
                           </th>
                            <th class="text-center  "    >
                                M
                           </th>
                       <tr>


                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS CON DIAGNOSTICO DE ITS CON MANEJO SINDROMICO
                        </th>
                        <td class="text-center">{{data2.var859 ? data2.var859 : "-"}}</td>
                        <td class="text-center">{{data2.var860 ? data2.var860 : "-"}}</td>
                        <td class="text-center">{{data2.var861 ? data2.var861 : "-"}}</td>
                        <td class="text-center">{{data2.var862 ? data2.var862 : "-"}}</td>
                        <td class="text-center">{{data2.var863 ? data2.var863 : "-"}}</td>
                        <td class="text-center">{{data2.var864 ? data2.var864 : "-"}}</td>
                        <td class="text-center">{{data2.var865 ? data2.var865 : "-"}}</td>
                        <td class="text-center">{{data2.var866 ? data2.var866 : "-"}}</td>
                        <td class="text-center">{{data2.var867 ? data2.var867 : "-"}}</td>
                        <td class="text-center">{{data2.var868 ? data2.var868 : "-"}}</td>
                  
                    </tr>


                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS CON DESCARGA URETRAL
                        </th>
                        <td class="text-center">{{data2.var869 ? data2.var869 : "-"}}</td>
                        <td class="text-center">{{data2.var870 ? data2.var870 : "-"}}</td>
                        <td class="text-center">{{data2.var871 ? data2.var871 : "-"}}</td>
                        <td class="text-center">{{data2.var872 ? data2.var872 : "-"}}</td>
                        <td class="text-center">{{data2.var873 ? data2.var873 : "-"}}</td>
                        <td class="text-center">{{data2.var874 ? data2.var874 : "-"}}</td>
                        <td class="text-center">{{data2.var875 ? data2.var875 : "-"}}</td>
                        <td class="text-center">{{data2.var876 ? data2.var876 : "-"}}</td>
                        <td class="text-center">{{data2.var877 ? data2.var877 : "-"}}</td>
                        <td class="text-center">{{data2.var878 ? data2.var878 : "-"}}</td>
                  
                      </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE BUBON INGUINAL
                        </th>
                        <td class="text-center">{{data2.var879 ? data2.var879 : "-"}}</td>
                        <td class="text-center">{{data2.var880 ? data2.var880 : "-"}}</td>
                        <td class="text-center">{{data2.var881 ? data2.var881 : "-"}}</td>
                        <td class="text-center">{{data2.var882 ? data2.var882 : "-"}}</td>
                        <td class="text-center">{{data2.var883 ? data2.var883 : "-"}}</td>
                        <td class="text-center">{{data2.var884 ? data2.var884 : "-"}}</td>
                        <td class="text-center">{{data2.var885 ? data2.var885 : "-"}}</td>
                        <td class="text-center">{{data2.var886 ? data2.var886 : "-"}}</td>
                        <td class="text-center">{{data2.var887 ? data2.var887 : "-"}}</td>
                        <td class="text-center">{{data2.var888 ? data2.var888 : "-"}}</td>
                  
                      </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS CON DIAGNOSTICO DE ITS CON MANEJO ETIOLOGICO
                        </th>
                        <td class="text-center">{{data2.var889 ? data2.var889 : "-"}}</td>
                        <td class="text-center">{{data2.var890 ? data2.var890 : "-"}}</td>
                        <td class="text-center">{{data2.var891 ? data2.var891 : "-"}}</td>
                        <td class="text-center">{{data2.var892 ? data2.var892 : "-"}}</td>
                        <td class="text-center">{{data2.var893 ? data2.var893 : "-"}}</td>
                        <td class="text-center">{{data2.var894 ? data2.var894 : "-"}}</td>
                        <td class="text-center">{{data2.var895 ? data2.var895 : "-"}}</td>
                        <td class="text-center">{{data2.var896 ? data2.var896 : "-"}}</td>
                        <td class="text-center">{{data2.var897 ? data2.var897 : "-"}}</td>
                        <td class="text-center">{{data2.var898 ? data2.var898 : "-"}}</td>
                  
                      </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS DE GONORREA
                        </th>
                        <td class="text-center">{{data2.var899 ? data2.var899 : "-"}}</td>
                        <td class="text-center">{{data2.var900 ? data2.var900 : "-"}}</td>
                        <td class="text-center">{{data2.var901 ? data2.var901 : "-"}}</td>
                        <td class="text-center">{{data2.var902 ? data2.var902 : "-"}}</td>
                        <td class="text-center">{{data2.var903 ? data2.var903 : "-"}}</td>
                        <td class="text-center">{{data2.var904 ? data2.var904 : "-"}}</td>
                        <td class="text-center">{{data2.var905 ? data2.var905 : "-"}}</td>
                        <td class="text-center">{{data2.var906 ? data2.var906 : "-"}}</td>
                        <td class="text-center">{{data2.var907 ? data2.var907 : "-"}}</td>
                        <td class="text-center">{{data2.var908 ? data2.var908 : "-"}}</td>
                  
                      </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                CASOS CON SEROLOGIA REACTIVA PARA SIFILIS
                        </th>
                        <td class="text-center">{{data2.var919 ? data2.var919 : "-"}}</td>
                        <td class="text-center">{{data2.var920 ? data2.var920 : "-"}}</td>
                        <td class="text-center">{{data2.var921 ? data2.var921 : "-"}}</td>
                        <td class="text-center">{{data2.var922 ? data2.var922 : "-"}}</td>
                        <td class="text-center">{{data2.var923 ? data2.var923 : "-"}}</td>
                        <td class="text-center">{{data2.var924 ? data2.var924 : "-"}}</td>
                        <td class="text-center">{{data2.var925 ? data2.var925 : "-"}}</td>
                        <td class="text-center">{{data2.var926 ? data2.var926 : "-"}}</td>
                        <td class="text-center">{{data2.var927 ? data2.var927 : "-"}}</td>
                        <td class="text-center">{{data2.var928 ? data2.var928 : "-"}}</td>
                  
                      </tr>

                   
                  
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>


         <v-col md="7">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                11. - HEPATITIS C
                           </th>
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              F
                           </th>
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              M
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              Total
                           </th>
                           
                       </tr>
                       <tr>
                           
                           <th class="text-center  tthh4"  >
                                01d - 11a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                12a - 17a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                01d - 11a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                12a - 17a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                              <th class="text-center  tthh4"  >
                                F
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                M
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                TOTAL
                           </th>
                        
                         
                   


                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS TAMIZADAS A HEPATITIS C
                        </th>
                        <td class="text-center">{{data2.var929 ? data2.var929 : "-"}}</td>
                        <td class="text-center">{{data2.var930 ? data2.var930 : "-"}}</td>
                        <td class="text-center">{{data2.var931 ? data2.var931 : "-"}}</td>
                        <td class="text-center">{{data2.var932 ? data2.var932 : "-"}}</td>
                        <td class="text-center">{{data2.var933 ? data2.var933 : "-"}}</td>
                        <td class="text-center">{{data2.var934 ? data2.var934 : "-"}}</td>
                        <td class="text-center">{{data2.var935 ? data2.var935 : "-"}}</td>
                        <td class="text-center">{{data2.var936 ? data2.var936 : "-"}}</td>
                        <td class="text-center">{{data2.var937 ? data2.var937 : "-"}}</td>
                        <td class="text-center">{{data2.var938 ? data2.var938 : "-"}}</td>

                        <td class="text-center">{{totalA46}}</td>
                        <td class="text-center">{{totalA47}}</td>
                        <td class="text-center">{{totalA48}}</td>
                   
                    </tr>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS TAMIZADAS REACTIVAS A HEPATITIS C
                        </th>
                        <td class="text-center">{{data2.var939 ? data2.var939 : "-"}}</td>
                        <td class="text-center">{{data2.var940 ? data2.var940 : "-"}}</td>
                        <td class="text-center">{{data2.var941 ? data2.var941 : "-"}}</td>
                        <td class="text-center">{{data2.var942 ? data2.var942 : "-"}}</td>
                        <td class="text-center">{{data2.var943 ? data2.var943 : "-"}}</td>
                        <td class="text-center">{{data2.var944 ? data2.var944 : "-"}}</td>
                        <td class="text-center">{{data2.var945 ? data2.var945 : "-"}}</td>
                        <td class="text-center">{{data2.var946 ? data2.var946 : "-"}}</td>
                        <td class="text-center">{{data2.var947 ? data2.var947 : "-"}}</td>
                        <td class="text-center">{{data2.var948 ? data2.var948 : "-"}}</td>

                        <td class="text-center">{{totalA49}}</td>
                        <td class="text-center">{{totalA50}}</td>
                        <td class="text-center">{{totalA51}}</td>
                   
                    </tr>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS CON DIAGNOSTICO CONFIRMADO DE HEPATITIS C CRÓNICA
                        </th>
                        <td class="text-center">{{data2.var949 ? data2.var949 : "-"}}</td>
                        <td class="text-center">{{data2.var950 ? data2.var950 : "-"}}</td>
                        <td class="text-center">{{data2.var951 ? data2.var951 : "-"}}</td>
                        <td class="text-center">{{data2.var952 ? data2.var952 : "-"}}</td>
                        <td class="text-center">{{data2.var953 ? data2.var953 : "-"}}</td>
                        <td class="text-center">{{data2.var954 ? data2.var954 : "-"}}</td>
                        <td class="text-center">{{data2.var955 ? data2.var955 : "-"}}</td>
                        <td class="text-center">{{data2.var956 ? data2.var956 : "-"}}</td>
                        <td class="text-center">{{data2.var957 ? data2.var957 : "-"}}</td>
                        <td class="text-center">{{data2.var958 ? data2.var958 : "-"}}</td>

                        <td class="text-center">{{totalA52}}</td>
                        <td class="text-center">{{totalA53}}</td>
                        <td class="text-center">{{totalA54}}</td>
                   
                    </tr>


                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>

             <v-col md="6">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                12. - POBLACIÓN GENERAL: TAMIZAJE SÍFILIS
                           </th>
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              F
                           </th>
                             <th class="text-center tthh1" colspan="5" rowspan="1">
                              M
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              Total
                           </th>
                           
                       </tr>
                       <tr>
                           
                           <th class="text-center  tthh4"  >
                                01d - 11a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                12a - 17a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                01d - 11a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                12a - 17a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                              <th class="text-center  tthh4"  >
                                F
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                M
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                TOTAL
                           </th>
                        
                         
                   


                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS TAMIZADAS PARA SIFILIS
                        </th>
                        <td class="text-center">{{data2.var959 ? data2.var959 : "-"}}</td>
                        <td class="text-center">{{data2.var960 ? data2.var960 : "-"}}</td>
                        <td class="text-center">{{data2.var961 ? data2.var961 : "-"}}</td>
                        <td class="text-center">{{data2.var962 ? data2.var962 : "-"}}</td>
                        <td class="text-center">{{data2.var963 ? data2.var963 : "-"}}</td>
                        <td class="text-center">{{data2.var964 ? data2.var964 : "-"}}</td>
                        <td class="text-center">{{data2.var965 ? data2.var965 : "-"}}</td>
                        <td class="text-center">{{data2.var966 ? data2.var966 : "-"}}</td>
                        <td class="text-center">{{data2.var967 ? data2.var967 : "-"}}</td>
                        <td class="text-center">{{data2.var968 ? data2.var968 : "-"}}</td>

                        <td class="text-center">{{totalA55}}</td>
                        <td class="text-center">{{totalA56}}</td>
                        <td class="text-center">{{totalA57}}</td>
                   
                    </tr>

                    
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
          </v-col>
         <v-col md="1">
            <br>

             </v-col>
           
          <v-col md="6">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                13. - POBLACIÓN CLAVE TS: TAMIZAJE SIFILIS


                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                             TS - FEMENINO
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS - HSH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TS - TRANS
                           </th>
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                              Total
                           </th>
                           
                       </tr>
                       <tr>
                           
                         
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                        
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                        
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                        
                           <th class="text-center  tthh4"  >
                                TS - FEMENINO
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                TS - HSH
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                TS - TRANS
                           </th>
                        
                        
                           <th class="text-center  tthh4"  >
                                Total
                           </th>
                        
                        
                         
                   


                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                TS TAMIZADOS/AS PARA SÍFILIS (1° TAMIZAJE)
                        </th>
                        <td class="text-center">{{data2.var969 ? data2.var969 : "-"}}</td>
                        <td class="text-center">{{data2.var970 ? data2.var970 : "-"}}</td>
                        <td class="text-center">{{data2.var971 ? data2.var971 : "-"}}</td>
                        <td class="text-center">{{data2.var972 ? data2.var972 : "-"}}</td>
                        <td class="text-center">{{data2.var973 ? data2.var973 : "-"}}</td>
                        <td class="text-center">{{data2.var974 ? data2.var974 : "-"}}</td>
                        <td class="text-center">{{data2.var975 ? data2.var975 : "-"}}</td>
                        <td class="text-center">{{data2.var976 ? data2.var976 : "-"}}</td>
                        <td class="text-center">{{data2.var977 ? data2.var977 : "-"}}</td>
                        

                        <td class="text-center">{{totalA58}}</td>
                        <td class="text-center">{{totalA59}}</td>
                        <td class="text-center">{{totalA60}}</td>
                        <td class="text-center">{{totalA61}}</td>
                   
                    </tr>

                    
             




                    </tbody>
                </template>
            </v-simple-table>
          </v-col>


     <v-col md="7">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                14. - POBLACIÓN CLAVE: TAMIZAJE SIFILIS
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              HSH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                              TRANS
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                              Total
                           </th>
                           
                       </tr>
                       <tr>
                           
                         
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                        
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                              <th class="text-center  tthh4"  >
                                HSH
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                TRANS
                           </th>
                        
                          
                        
                         
                   


                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS TAMIZADOS/AS PARA SÍFILIS (1° TAMIZAJE)
                        </th>
                        <td class="text-center">{{data2.var978 ? data2.var978 : "-"}}</td>
                        <td class="text-center">{{data2.var979 ? data2.var979 : "-"}}</td>
                        <td class="text-center">{{data2.var980 ? data2.var980 : "-"}}</td>
                        <td class="text-center">{{data2.var981 ? data2.var981 : "-"}}</td>
                        <td class="text-center">{{data2.var982 ? data2.var982 : "-"}}</td>
                        <td class="text-center">{{data2.var983 ? data2.var983 : "-"}}</td>
                  

                        <td class="text-center">{{totalA62}}</td>
                        <td class="text-center">{{totalA63}}</td>
                     
                   
                    </tr>

                    
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
          </v-col>

        <v-col md="6">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                15. POBLACIÓN CLAVE: TAMIZAJE VIH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                                 F
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                               M
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                              Total
                           </th>
                           
                       </tr>
                       <tr>
                           
                         
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                        
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                              <th class="text-center  tthh4"  >
                                F
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                M
                           </th>
                        
                          
                        
                         
                   


                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS PRIVADAS DE LIBERTAD TAMIZADAS PARA VIH
                        </th>
                        <td class="text-center">{{data2.var984 ? data2.var984 : "-"}}</td>
                        <td class="text-center">{{data2.var985 ? data2.var985 : "-"}}</td>
                        <td class="text-center">{{data2.var986 ? data2.var986 : "-"}}</td>
                        <td class="text-center">{{data2.var987 ? data2.var987 : "-"}}</td>
                        <td class="text-center">{{data2.var988 ? data2.var988 : "-"}}</td>
                        <td class="text-center">{{data2.var989 ? data2.var989 : "-"}}</td>
                  

                        <td class="text-center">{{totalA64}}</td>
                        <td class="text-center">{{totalA65}}</td>
                     
                   
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                PERSONAS PRIVADAS DE LIBERTAD TAMIZADAS REACTIVAS PARA VIH
                        </th>
                        <td class="text-center">{{data2.var990 ? data2.var990 : "-"}}</td>
                        <td class="text-center">{{data2.var991 ? data2.var991 : "-"}}</td>
                        <td class="text-center">{{data2.var992 ? data2.var992 : "-"}}</td>
                        <td class="text-center">{{data2.var993 ? data2.var993 : "-"}}</td>
                        <td class="text-center">{{data2.var994 ? data2.var994 : "-"}}</td>
                        <td class="text-center">{{data2.var995 ? data2.var995 : "-"}}</td>
                  

                        <td class="text-center">{{totalA66}}</td>
                        <td class="text-center">{{totalA67}}</td>
                     
                   
                    </tr>

                    
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
          </v-col>
   <v-col md="1">
            <br>

             </v-col>

        <v-col md="6">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                 16 - POBLACIÓN CLAVE: ITS MANEJO SINDRÓMICO  Trabajadores Sexuales
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                                 TS-HSH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                                TS-TRANS
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                                Total
                           </th>
                           
                       </tr>
                       <tr>
                           
                         
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                        
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                              <th class="text-center  tthh4"  >
                                TS-HSH
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                TS-TRANS
                           </th>
                        
                          
                        
                         
                   


                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS CON SINDROME DE DESCARGA RECTAL (PROCTITIS)
                        </th>
                        <td class="text-center">{{data2.var996 ? data2.var996 : "-"}}</td>
                        <td class="text-center">{{data2.var997 ? data2.var997 : "-"}}</td>
                        <td class="text-center">{{data2.var998 ? data2.var998 : "-"}}</td>
                        <td class="text-center">{{data2.var999 ? data2.var999 : "-"}}</td>
                        <td class="text-center">{{data2.var1000 ? data2.var1000 : "-"}}</td>
                        <td class="text-center">{{data2.var1001 ? data2.var1001 : "-"}}</td>
                  

                        <td class="text-center">{{totalA66}}</td>
                        <td class="text-center">{{totalA67}}</td>
                     
                   
                    </tr>
                    

                    
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
          </v-col>


        <v-col md="7">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="3" colspan="2">
                                 16 .- POBLACIÓN CLAVE: ITS MANEJO SINDRÓMICO  Trabajadores Sexuales (POR CONDICIÓN)
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                                 TRATADOS
                           </th>
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                                CONTACTOS
                           </th>
                           
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                                CONTACTOS TRATADOS
                           </th>
                           
                       </tr>
                       <tr>
                           
                         
                        
                           <th class="text-center  tthh4" rowspan="2"  >
                                TS-HSH
                           </th>
                        
                           <th class="text-center  tthh4" rowspan="2"  >
                                TS-TRANS
                           </th>
                        
                           <th class="text-center  tthh4" colspan="2"  >
                                TS-HSH
                           </th>
                        
                           <th class="text-center  tthh4" colspan="2"  >
                                TS-TRANS
                           </th>
                        
                        
                           <th class="text-center  tthh4" colspan="2"  >
                                TS-HSH
                           </th>
                        
                           <th class="text-center  tthh4" colspan="2"  >
                                TS-TRANS
                           </th>
                        
                         
                        <tr>
                             <th class="text-center  tthh4"  >
                                F
                           </th>
                             <th class="text-center  tthh4"  >
                                M
                           </th>
                             <th class="text-center  tthh4"  >
                                F
                           </th>
                             <th class="text-center  tthh4"  >
                                M
                           </th>
                             <th class="text-center  tthh4"  >
                                F
                           </th>
                             <th class="text-center  tthh4"  >
                                M
                           </th>
                             <th class="text-center  tthh4"  >
                                F
                           </th>
                             <th class="text-center  tthh4"  >
                                M
                           </th>
                        </tr>
                        
                          
                        
                         
                   


                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS CON SINDROME DE DESCARGA RECTAL (PROCTITIS)
                        </th>
                        <td class="text-center">{{data2.var1002 ? data2.var1002 : "-"}}</td>
                        <td class="text-center">{{data2.var1003 ? data2.var1003 : "-"}}</td>
                        <td class="text-center">{{data2.var1004 ? data2.var1004 : "-"}}</td>
                        <td class="text-center">{{data2.var1005 ? data2.var1005 : "-"}}</td>
                        <td class="text-center">{{data2.var1006 ? data2.var1006 : "-"}}</td>
                        <td class="text-center">{{data2.var1007 ? data2.var1007 : "-"}}</td>
                        <td class="text-center">{{data2.var1008 ? data2.var1008 : "-"}}</td>
                        <td class="text-center">{{data2.var1009 ? data2.var1009 : "-"}}</td>
                        <td class="text-center">{{data2.var1010 ? data2.var1010 : "-"}}</td>
                        <td class="text-center">{{data2.var1011 ? data2.var1011 : "-"}}</td>
                  
                     
                   
                    </tr>
                    

                    
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
          </v-col>


<v-col md="6">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="2" colspan="2">
                                 17.- POBLACIÓN CLAVE: ITS MANEJO SINDRÓMICO Hombres que tienen sexo con otros hombres / Tr1012
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                                 TS-HSH
                           </th>
                             <th class="text-center tthh1" colspan="3" rowspan="1">
                                TS-TRANS
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                                Total
                           </th>
                           
                       </tr>
                       <tr>
                           
                         
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                        
                        
                           <th class="text-center  tthh4"  >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                60a más
                           </th>
                        
                              <th class="text-center  tthh4"  >
                                TS-HSH
                           </th>
                        
                           <th class="text-center  tthh4"  >
                                TS-TRANS
                           </th>
                        
                          
                        
                         
                   


                       </tr>

                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS CON SINDROME DE DESCARGA RECTAL (PROCTITIS)
                        </th>
                        <td class="text-center">{{data2.var1012 ? data2.var1012 : "-"}}</td>
                        <td class="text-center">{{data2.var1013 ? data2.var1013 : "-"}}</td>
                        <td class="text-center">{{data2.var1014 ? data2.var1014 : "-"}}</td>
                        <td class="text-center">{{data2.var1015 ? data2.var1015 : "-"}}</td>
                        <td class="text-center">{{data2.var1016 ? data2.var1016 : "-"}}</td>
                        <td class="text-center">{{data2.var1017 ? data2.var1017 : "-"}}</td>
                  

                        <td class="text-center">{{totalA70}}</td>
                        <td class="text-center">{{totalA71}}</td>
                     
                   
                    </tr>
                    

                    
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
          </v-col>

  <v-col md="7">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="3" colspan="2">
                                 17.- POBLACIÓN CLAVE: ITS MANEJO SINDRÓMICO Hombres que tienen sexo con otros hombres / Trans (POR CONDICIÓN)
                           </th>
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                                 TRATADOS
                           </th>
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                                CONTACTOS
                           </th>
                           
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                                CONTACTOS TRATADOS
                           </th>
                           
                       </tr>
                       <tr>
                           
                         
                        
                           <th class="text-center  tthh4" rowspan="2"  >
                                TS-HSH
                           </th>
                        
                           <th class="text-center  tthh4" rowspan="2"  >
                                TS-TRANS
                           </th>
                        
                           <th class="text-center  tthh4" colspan="2"  >
                                TS-HSH
                           </th>
                        
                           <th class="text-center  tthh4" colspan="2"  >
                                TS-TRANS
                           </th>
                        
                        
                           <th class="text-center  tthh4" colspan="2"  >
                                TS-HSH
                           </th>
                        
                           <th class="text-center  tthh4" colspan="2"  >
                                TS-TRANS
                           </th>
                        
                         
                        <tr>
                             <th class="text-center  tthh4"  >
                                F
                           </th>
                             <th class="text-center  tthh4"  >
                                M
                           </th>
                             <th class="text-center  tthh4"  >
                                F
                           </th>
                             <th class="text-center  tthh4"  >
                                M
                           </th>
                             <th class="text-center  tthh4"  >
                                F
                           </th>
                             <th class="text-center  tthh4"  >
                                M
                           </th>
                             <th class="text-center  tthh4"  >
                                F
                           </th>
                             <th class="text-center  tthh4"  >
                                M
                           </th>
                        </tr>
                        
                          
                        
                         
                   


                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                HSH/TRANS CON SINDROME DE DESCARGA RECTAL (PROCTITIS)
                        </th>
                        <td class="text-center">{{data2.var1018 ? data2.var1018 : "-"}}</td>
                        <td class="text-center">{{data2.var1019 ? data2.var1019 : "-"}}</td>
                        <td class="text-center">{{data2.var1020 ? data2.var1020 : "-"}}</td>
                        <td class="text-center">{{data2.var1021 ? data2.var1021 : "-"}}</td>
                        <td class="text-center">{{data2.var1022 ? data2.var1022 : "-"}}</td>
                        <td class="text-center">{{data2.var1023 ? data2.var1023 : "-"}}</td>
                        <td class="text-center">{{data2.var1024 ? data2.var1024 : "-"}}</td>
                        <td class="text-center">{{data2.var1025 ? data2.var1025 : "-"}}</td>
                        <td class="text-center">{{data2.var1026 ? data2.var1026 : "-"}}</td>
                        <td class="text-center">{{data2.var1027 ? data2.var1027 : "-"}}</td>
                  
                     
                   
                    </tr>
                    

                    
                   
                   
                 
                      
                    </tbody>
                </template>
            </v-simple-table>
          </v-col>


  <v-col md="7">
      <th>REPORTE DE TAMIZAJES REALIZADOS POR BRIGADAS MÓVILES</th>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                       <tr>
                           <th class="text-left tthh1" rowspan="3" colspan="2">
                                 POBLACIÓN CLAVE: Hombres que tienen sexo con otros hombres / Trans 

                           </th>
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                                 HSH
                           </th>
                             <th class="text-center tthh1" colspan="4" rowspan="1">
                                TRANS
                           </th>
                           
                             <th class="text-center tthh1" colspan="2" rowspan="1">
                                Total
                           </th>
                           
                       </tr>
                       <tr>
                           
                         
                        
                           <th class="text-center  tthh4"   >
                                12a - 17a
                           </th>
                        
                           <th class="text-center  tthh4"   >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"   >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"   >
                                60a más
                           </th>
                        
                        
                           <th class="text-center  tthh4"   >
                                12a - 17a
                           </th>
                        
                           <th class="text-center  tthh4"   >
                                18a - 29a
                           </th>
                        
                           <th class="text-center  tthh4"   >
                                30a - 59a
                           </th>
                        
                           <th class="text-center  tthh4"   >
                                60a más
                           </th>
                        
                             <th class="text-center  tthh4"   >
                                HSH
                           </th>
                        
                           <th class="text-center  tthh4"   >
                                TRANS
                           </th>
                        
                        
                        </tr>
                        
                         
                   


                    </thead>
                    <tbody>

                       <tr>
                        <th class ="text-left" colspan="2" >
                                Nº HSH/Trans atendidos/as
                        </th>
                        <td class="text-center">{{data2.var1028 ? data2.var1028 : "-"}}</td>
                        <td class="text-center">{{data2.var1029 ? data2.var1029 : "-"}}</td>
                        <td class="text-center">{{data2.var1030 ? data2.var1030 : "-"}}</td>
                        <td class="text-center">{{data2.var1031 ? data2.var1031 : "-"}}</td>
                        <td class="text-center">{{data2.var1032 ? data2.var1032 : "-"}}</td>
                        <td class="text-center">{{data2.var1033 ? data2.var1033 : "-"}}</td>
                        <td class="text-center">{{data2.var1034 ? data2.var1034 : "-"}}</td>
                        <td class="text-center">{{data2.var1035 ? data2.var1035 : "-"}}</td>
              
                        <td class="text-center">{{totalA72}}</td>
                        <td class="text-center">{{totalA73}}</td>
                                           
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                Nº de atenciones a HSH/Trans
                        </th>
                        <td class="text-center">{{data2.var1036 ? data2.var1036 : "-"}}</td>
                        <td class="text-center">{{data2.var1037 ? data2.var1037 : "-"}}</td>
                        <td class="text-center">{{data2.var1038 ? data2.var1038 : "-"}}</td>
                        <td class="text-center">{{data2.var1039 ? data2.var1039 : "-"}}</td>
                        <td class="text-center">{{data2.var1040 ? data2.var1040 : "-"}}</td>
                        <td class="text-center">{{data2.var1041 ? data2.var1041 : "-"}}</td>
                        <td class="text-center">{{data2.var1042 ? data2.var1042 : "-"}}</td>
                        <td class="text-center">{{data2.var1043 ? data2.var1043 : "-"}}</td>
              
                        <td class="text-center">{{totalA74}}</td>
                        <td class="text-center">{{totalA75}}</td>
                                           
                    </tr>
                    
                       <tr>
                        <th class ="text-left" colspan="2" >
                                Nº de HSH/Trans  tamizados/as para VIH (1º Tamizaje)
                        </th>
                        <td class="text-center">{{data2.var1044 ? data2.var1044 : "-"}}</td>
                        <td class="text-center">{{data2.var1045 ? data2.var1045 : "-"}}</td>
                        <td class="text-center">{{data2.var1046 ? data2.var1046 : "-"}}</td>
                        <td class="text-center">{{data2.var1047 ? data2.var1047 : "-"}}</td>
                        <td class="text-center">{{data2.var1048 ? data2.var1048 : "-"}}</td>
                        <td class="text-center">{{data2.var1049 ? data2.var1049 : "-"}}</td>
                        <td class="text-center">{{data2.var1050 ? data2.var1050 : "-"}}</td>
                        <td class="text-center">{{data2.var1051 ? data2.var1051 : "-"}}</td>
              
                        <td class="text-center">{{totalA76}}</td>
                        <td class="text-center">{{totalA77}}</td>
                                           
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                Nº  HSH/Trans con tamizaje para VIH con resultado reactivo
                        </th>
                        <td class="text-center">{{data2.var1052 ? data2.var1052 : "-"}}</td>
                        <td class="text-center">{{data2.var1053 ? data2.var1053 : "-"}}</td>
                        <td class="text-center">{{data2.var1054 ? data2.var1054 : "-"}}</td>
                        <td class="text-center">{{data2.var1055 ? data2.var1055 : "-"}}</td>
                        <td class="text-center">{{data2.var1056 ? data2.var1056 : "-"}}</td>
                        <td class="text-center">{{data2.var1057 ? data2.var1057 : "-"}}</td>
                        <td class="text-center">{{data2.var1058 ? data2.var1058 : "-"}}</td>
                        <td class="text-center">{{data2.var1059 ? data2.var1059 : "-"}}</td>
              
                        <td class="text-center">{{totalA78}}</td>
                        <td class="text-center">{{totalA79}}</td>
                                           
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                Nº de HSH/Trans  tamizados/as para Sífilis  (1º Tamizaje)
                        </th>
                        <td class="text-center">{{data2.var1060 ? data2.var1060 : "-"}}</td>
                        <td class="text-center">{{data2.var1061 ? data2.var1061 : "-"}}</td>
                        <td class="text-center">{{data2.var1062 ? data2.var1062 : "-"}}</td>
                        <td class="text-center">{{data2.var1063 ? data2.var1063 : "-"}}</td>
                        <td class="text-center">{{data2.var1064 ? data2.var1064 : "-"}}</td>
                        <td class="text-center">{{data2.var1065 ? data2.var1065 : "-"}}</td>
                        <td class="text-center">{{data2.var1066 ? data2.var1066 : "-"}}</td>
                        <td class="text-center">{{data2.var1067 ? data2.var1067 : "-"}}</td>
              
                        <td class="text-center">{{totalA80}}</td>
                        <td class="text-center">{{totalA81}}</td>
                                           
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                Nº  HSH/Trans con tamizaje para Sífilis con resultado reactivo
                        </th>
                        <td class="text-center">{{data2.var1068 ? data2.var1068 : "-"}}</td>
                        <td class="text-center">{{data2.var1069 ? data2.var1069 : "-"}}</td>
                        <td class="text-center">{{data2.var1070 ? data2.var1070 : "-"}}</td>
                        <td class="text-center">{{data2.var1071 ? data2.var1071 : "-"}}</td>
                        <td class="text-center">{{data2.var1072 ? data2.var1072 : "-"}}</td>
                        <td class="text-center">{{data2.var1073 ? data2.var1073 : "-"}}</td>
                        <td class="text-center">{{data2.var1074 ? data2.var1074 : "-"}}</td>
                        <td class="text-center">{{data2.var1075 ? data2.var1075 : "-"}}</td>
              
                        <td class="text-center">{{totalA82}}</td>
                        <td class="text-center">{{totalA83}}</td>
                                           
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                Nº de HSH/Trans  tamizados/as para Hepatitis  (1º Tamizaje)
                        </th>
                        <td class="text-center">{{data2.var1076 ? data2.var1076 : "-"}}</td>
                        <td class="text-center">{{data2.var1077 ? data2.var1077 : "-"}}</td>
                        <td class="text-center">{{data2.var1078 ? data2.var1078 : "-"}}</td>
                        <td class="text-center">{{data2.var1079 ? data2.var1079 : "-"}}</td>
                        <td class="text-center">{{data2.var1080 ? data2.var1080 : "-"}}</td>
                        <td class="text-center">{{data2.var1081 ? data2.var1081 : "-"}}</td>
                        <td class="text-center">{{data2.var1082 ? data2.var1082 : "-"}}</td>
                        <td class="text-center">{{data2.var1083 ? data2.var1083 : "-"}}</td>
              
                        <td class="text-center">{{totalA84}}</td>
                        <td class="text-center">{{totalA85}}</td>
                                           
                    </tr>
                       <tr>
                        <th class ="text-left" colspan="2" >
                                Nº  HSH/Trans con tamizaje para Hepatitis con resultado reactivo
                        </th>
                        <td class="text-center">{{data2.var1084 ? data2.var1084 : "-"}}</td>
                        <td class="text-center">{{data2.var1085 ? data2.var1085 : "-"}}</td>
                        <td class="text-center">{{data2.var1086 ? data2.var1078 : "-"}}</td>
                        <td class="text-center">{{data2.var1087 ? data2.var1079 : "-"}}</td>
                        <td class="text-center">{{data2.var1088 ? data2.var1080 : "-"}}</td>
                        <td class="text-center">{{data2.var1089 ? data2.var1081 : "-"}}</td>
                        <td class="text-center">{{data2.var1090 ? data2.var1082 : "-"}}</td>
                        <td class="text-center">{{data2.var1091 ? data2.var1083 : "-"}}</td>
              
                        <td class="text-center">{{totalA86}}</td>
                        <td class="text-center">{{totalA87}}</td>
                                           
                    </tr>


                  </tbody>
                </template>
            </v-simple-table>
          </v-col>


    </v-row>
</template>

<style>

.tthh1
{
 color: white !important;
  background-color: rgb(2, 129, 248);
}
.tthh2
{
 color: white !important;
  background-color: rgb(127, 197, 243);
}
.tthh3
{
 color: rgb(65, 63, 63) !important;
  background-color: rgb(176, 177, 174);
}
.tthh4
{
 color: rgb(65, 63, 63) !important;
  background-color: rgb(223, 200, 240);
}

table, td, th {  
  border: 1px solid rgb(241, 205, 205);
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}
.v-data-table { 
  overflow-x: auto !important;
}


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
            await this.axios.get(this.$api_url + '/reporte/tmp_vih_1/1-527',{
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
                this.total1 = parseInt(response.data[0].var1) +  parseInt(response.data[0].var2) +parseInt(response.data[0].var3) + parseInt(response.data[0].var4)+ parseInt(response.data[0].var5)
                this.total2 = parseInt(response.data[0].var6) +  parseInt(response.data[0].var7) +parseInt(response.data[0].var8) + parseInt(response.data[0].var9)+ parseInt(response.data[0].var10)
                this.total3 = parseInt(response.data[0].var11) +  parseInt(response.data[0].var12) +parseInt(response.data[0].var13) + parseInt(response.data[0].var14)+ parseInt(response.data[0].var15)
                this.total4 = parseInt(response.data[0].var16) +  parseInt(response.data[0].var17) +parseInt(response.data[0].var18) + parseInt(response.data[0].var19)+ parseInt(response.data[0].var20)
              
                this.total5 = parseInt(response.data[0].var25) +  parseInt(response.data[0].var26) +parseInt(response.data[0].var27) + parseInt(response.data[0].var28)+ parseInt(response.data[0].var29)
                this.total6 = parseInt(response.data[0].var30) +  parseInt(response.data[0].var31) +parseInt(response.data[0].var32) + parseInt(response.data[0].var33)+ parseInt(response.data[0].var34)
              

                this.total7 = parseInt(response.data[0].var39) +  parseInt(response.data[0].var40) +parseInt(response.data[0].var41) + parseInt(response.data[0].var42)+ parseInt(response.data[0].var43)
                this.total8 = parseInt(response.data[0].var44) +  parseInt(response.data[0].var45) +parseInt(response.data[0].var46) + parseInt(response.data[0].var47)+ parseInt(response.data[0].var48)
              

                this.total9 = parseInt(response.data[0].var53) +  parseInt(response.data[0].var54) +parseInt(response.data[0].var55) + parseInt(response.data[0].var56)+ parseInt(response.data[0].var57)
                this.total10 = parseInt(response.data[0].var58) +  parseInt(response.data[0].var59) +parseInt(response.data[0].var60) + parseInt(response.data[0].var61)+ parseInt(response.data[0].var62)
                this.total11 = parseInt(response.data[0].var63) +  parseInt(response.data[0].var64) +parseInt(response.data[0].var65) + parseInt(response.data[0].var66)+ parseInt(response.data[0].var67)
                this.total12 = parseInt(response.data[0].var68) +  parseInt(response.data[0].var69) +parseInt(response.data[0].var70) + parseInt(response.data[0].var71)+ parseInt(response.data[0].var72)
              

                this.total13 = parseInt(response.data[0].var77) +  parseInt(response.data[0].var78) +parseInt(response.data[0].var79) + parseInt(response.data[0].var80)+ parseInt(response.data[0].var81)
                this.total14 = parseInt(response.data[0].var82) +  parseInt(response.data[0].var83) +parseInt(response.data[0].var84) + parseInt(response.data[0].var85)+ parseInt(response.data[0].var86)
                this.total15 = parseInt(response.data[0].var87) +  parseInt(response.data[0].var88) +parseInt(response.data[0].var89) + parseInt(response.data[0].var90)+ parseInt(response.data[0].var91)
                this.total16 = parseInt(response.data[0].var92) +  parseInt(response.data[0].var93) +parseInt(response.data[0].var94) + parseInt(response.data[0].var95)+ parseInt(response.data[0].var96)
              
              
                this.total17 = parseInt(response.data[0].var101) +  parseInt(response.data[0].var102) +parseInt(response.data[0].var103) + parseInt(response.data[0].var104)+ parseInt(response.data[0].var105)
                this.total18 = parseInt(response.data[0].var106) +  parseInt(response.data[0].var107) +parseInt(response.data[0].var108) + parseInt(response.data[0].var109)+ parseInt(response.data[0].var110)
              
                this.total19 = parseInt(response.data[0].var115) +  parseInt(response.data[0].var116) +parseInt(response.data[0].var117) + parseInt(response.data[0].var118)+ parseInt(response.data[0].var119)
                this.total20 = parseInt(response.data[0].var120) +  parseInt(response.data[0].var121) +parseInt(response.data[0].var122) + parseInt(response.data[0].var123)+ parseInt(response.data[0].var124)
                this.total21 = parseInt(response.data[0].var125) +  parseInt(response.data[0].var126) +parseInt(response.data[0].var127) + parseInt(response.data[0].var128)+ parseInt(response.data[0].var129)
                this.total22 = parseInt(response.data[0].var130) +  parseInt(response.data[0].var131) +parseInt(response.data[0].var132) + parseInt(response.data[0].var133)+ parseInt(response.data[0].var134)
              
                this.total23 = parseInt(response.data[0].var139) +  parseInt(response.data[0].var140) +parseInt(response.data[0].var141) + parseInt(response.data[0].var142)+ parseInt(response.data[0].var143)
                this.total24 = parseInt(response.data[0].var144) +  parseInt(response.data[0].var145) +parseInt(response.data[0].var146) + parseInt(response.data[0].var147)+ parseInt(response.data[0].var148)
              





                this.total40 = parseInt(response.data[0].var195) +  parseInt(response.data[0].var196) +parseInt(response.data[0].var197) + parseInt(response.data[0].var198)+ parseInt(response.data[0].var199)
                this.total41 = parseInt(response.data[0].var200) +  parseInt(response.data[0].var201) +parseInt(response.data[0].var202) + parseInt(response.data[0].var203)+ parseInt(response.data[0].var204)
                this.total42 = parseInt(response.data[0].var195) +  parseInt(response.data[0].var196) +parseInt(response.data[0].var197) + parseInt(response.data[0].var198)+ parseInt(response.data[0].var199)+  parseInt(response.data[0].var200) +  parseInt(response.data[0].var201) +parseInt(response.data[0].var202) + parseInt(response.data[0].var203)+ parseInt(response.data[0].var204)


                this.total43 = parseInt(response.data[0].var205) +  parseInt(response.data[0].var206) +  parseInt(response.data[0].var207) +parseInt(response.data[0].var208) + parseInt(response.data[0].var209)
                this.total44 = parseInt(response.data[0].var210) +  parseInt(response.data[0].var211) +  parseInt(response.data[0].var212) +parseInt(response.data[0].var213) + parseInt(response.data[0].var214)
                this.total45 = parseInt(response.data[0].var205) +  parseInt(response.data[0].var206) +  parseInt(response.data[0].var207) +parseInt(response.data[0].var208) + parseInt(response.data[0].var209)+ parseInt(response.data[0].var210) +  parseInt(response.data[0].var211) +  parseInt(response.data[0].var212) +parseInt(response.data[0].var213) + parseInt(response.data[0].var214)

                this.total46 = parseInt(response.data[0].var215) +  parseInt(response.data[0].var216) +  parseInt(response.data[0].var217) +parseInt(response.data[0].var218) + parseInt(response.data[0].var219)
                this.total47 = parseInt(response.data[0].var220) +  parseInt(response.data[0].var221) +  parseInt(response.data[0].var222) +parseInt(response.data[0].var223) + parseInt(response.data[0].var224)
                this.total48 = parseInt(response.data[0].var215) +  parseInt(response.data[0].var216) +  parseInt(response.data[0].var217) +parseInt(response.data[0].var218) + parseInt(response.data[0].var219)+ parseInt(response.data[0].var220) +  parseInt(response.data[0].var221) +  parseInt(response.data[0].var222) +parseInt(response.data[0].var223) + parseInt(response.data[0].var224)

                this.total49 = parseInt(response.data[0].var225) +  parseInt(response.data[0].var226) +  parseInt(response.data[0].var227) +parseInt(response.data[0].var228) + parseInt(response.data[0].var229)
                this.total50 = parseInt(response.data[0].var230) +  parseInt(response.data[0].var232) +  parseInt(response.data[0].var232) +parseInt(response.data[0].var233) + parseInt(response.data[0].var234)
                this.total51 = parseInt(response.data[0].var225) +  parseInt(response.data[0].var226) +  parseInt(response.data[0].var227) +parseInt(response.data[0].var228) + parseInt(response.data[0].var229)+ parseInt(response.data[0].var230) +  parseInt(response.data[0].var231) +  parseInt(response.data[0].var232) +parseInt(response.data[0].var233) + parseInt(response.data[0].var234)

                this.total52 = parseInt(response.data[0].var235) +  parseInt(response.data[0].var236) +  parseInt(response.data[0].var237) +parseInt(response.data[0].var238) + parseInt(response.data[0].var239)
                this.total53 = parseInt(response.data[0].var240) +  parseInt(response.data[0].var242) +  parseInt(response.data[0].var242) +parseInt(response.data[0].var243) + parseInt(response.data[0].var244)
                this.total54 = parseInt(response.data[0].var235) +  parseInt(response.data[0].var236) +  parseInt(response.data[0].var237) +parseInt(response.data[0].var238) + parseInt(response.data[0].var239)+ parseInt(response.data[0].var240) +  parseInt(response.data[0].var242) +  parseInt(response.data[0].var242) +parseInt(response.data[0].var243) + parseInt(response.data[0].var244)

                this.total55 = parseInt(response.data[0].var245) +  parseInt(response.data[0].var246) +  parseInt(response.data[0].var247) +parseInt(response.data[0].var248) + parseInt(response.data[0].var249)
                this.total56 = parseInt(response.data[0].var250) +  parseInt(response.data[0].var252) +  parseInt(response.data[0].var252) +parseInt(response.data[0].var253) + parseInt(response.data[0].var254)
                this.total57 = parseInt(response.data[0].var245) +  parseInt(response.data[0].var246) +  parseInt(response.data[0].var247) +parseInt(response.data[0].var248) + parseInt(response.data[0].var249)+ parseInt(response.data[0].var250) +  parseInt(response.data[0].var252) +  parseInt(response.data[0].var252) +parseInt(response.data[0].var253) + parseInt(response.data[0].var254)








                this.total58 = parseInt(response.data[0].var255) +  parseInt(response.data[0].var256) +parseInt(response.data[0].var257) + parseInt(response.data[0].var258)+ parseInt(response.data[0].var259)
                this.total59 = parseInt(response.data[0].var260) +  parseInt(response.data[0].var261) +parseInt(response.data[0].var262) + parseInt(response.data[0].var263)+ parseInt(response.data[0].var264)
                this.total60 = parseInt(response.data[0].var255) +  parseInt(response.data[0].var256) +parseInt(response.data[0].var257) + parseInt(response.data[0].var258)+ parseInt(response.data[0].var259)+  parseInt(response.data[0].var260) +  parseInt(response.data[0].var261) +parseInt(response.data[0].var262) + parseInt(response.data[0].var263)+ parseInt(response.data[0].var264)

                this.total61 = parseInt(response.data[0].var265) +  parseInt(response.data[0].var266) +  parseInt(response.data[0].var267) +parseInt(response.data[0].var268) + parseInt(response.data[0].var269)
                this.total62 = parseInt(response.data[0].var270) +  parseInt(response.data[0].var271) +  parseInt(response.data[0].var272) +parseInt(response.data[0].var273) + parseInt(response.data[0].var274)
                this.total63 = parseInt(response.data[0].var265) +  parseInt(response.data[0].var266) +  parseInt(response.data[0].var267) +parseInt(response.data[0].var268) + parseInt(response.data[0].var269)+ parseInt(response.data[0].var270) +  parseInt(response.data[0].var271) +  parseInt(response.data[0].var272) +parseInt(response.data[0].var273) + parseInt(response.data[0].var274)

                this.total64 = parseInt(response.data[0].var275) +  parseInt(response.data[0].var276) +  parseInt(response.data[0].var277) +parseInt(response.data[0].var278) + parseInt(response.data[0].var279)
                this.total65 = parseInt(response.data[0].var280) +  parseInt(response.data[0].var287) +  parseInt(response.data[0].var282) +parseInt(response.data[0].var283) + parseInt(response.data[0].var284)
                this.total66 = parseInt(response.data[0].var275) +  parseInt(response.data[0].var276) +  parseInt(response.data[0].var277) +parseInt(response.data[0].var278) + parseInt(response.data[0].var279)+ parseInt(response.data[0].var280) +  parseInt(response.data[0].var281) +  parseInt(response.data[0].var282) +parseInt(response.data[0].var283) + parseInt(response.data[0].var284)

                this.total67 = parseInt(response.data[0].var285) +  parseInt(response.data[0].var286) +  parseInt(response.data[0].var287) +parseInt(response.data[0].var288) + parseInt(response.data[0].var289)
                this.total68 = parseInt(response.data[0].var290) +  parseInt(response.data[0].var292) +  parseInt(response.data[0].var292) +parseInt(response.data[0].var293) + parseInt(response.data[0].var294)
                this.total69 = parseInt(response.data[0].var285) +  parseInt(response.data[0].var286) +  parseInt(response.data[0].var287) +parseInt(response.data[0].var288) + parseInt(response.data[0].var289)+ parseInt(response.data[0].var290) +  parseInt(response.data[0].var291) +  parseInt(response.data[0].var292) +parseInt(response.data[0].var293) + parseInt(response.data[0].var294)

                this.total70 = parseInt(response.data[0].var295) +  parseInt(response.data[0].var296) +  parseInt(response.data[0].var297) +parseInt(response.data[0].var298) + parseInt(response.data[0].var299)
                this.total71 = parseInt(response.data[0].var300) +  parseInt(response.data[0].var302) +  parseInt(response.data[0].var302) +parseInt(response.data[0].var303) + parseInt(response.data[0].var304)
                this.total72 = parseInt(response.data[0].var295) +  parseInt(response.data[0].var296) +  parseInt(response.data[0].var297) +parseInt(response.data[0].var298) + parseInt(response.data[0].var299)+ parseInt(response.data[0].var300) +  parseInt(response.data[0].var302) +  parseInt(response.data[0].var302) +parseInt(response.data[0].var303) + parseInt(response.data[0].var304)

                this.total73 = parseInt(response.data[0].var305) +  parseInt(response.data[0].var306) +  parseInt(response.data[0].var307) +parseInt(response.data[0].var308) + parseInt(response.data[0].var309)
                this.total74 = parseInt(response.data[0].var310) +  parseInt(response.data[0].var312) +  parseInt(response.data[0].var312) +parseInt(response.data[0].var313) + parseInt(response.data[0].var314)
                this.total75 = parseInt(response.data[0].var305) +  parseInt(response.data[0].var306) +  parseInt(response.data[0].var307) +parseInt(response.data[0].var308) + parseInt(response.data[0].var309)+ parseInt(response.data[0].var310) +  parseInt(response.data[0].var312) +  parseInt(response.data[0].var312) +parseInt(response.data[0].var313) + parseInt(response.data[0].var314)




                this.total76 = parseInt(response.data[0].var315) +  parseInt(response.data[0].var316) +parseInt(response.data[0].var317) 
                this.total77 = parseInt(response.data[0].var318) +  parseInt(response.data[0].var319) +parseInt(response.data[0].var320) 
                this.total78 = parseInt(response.data[0].var315) +  parseInt(response.data[0].var316) +parseInt(response.data[0].var317) +  parseInt(response.data[0].var318) +  parseInt(response.data[0].var319) +parseInt(response.data[0].var320) 

                this.total79 = parseInt(response.data[0].var321) +  parseInt(response.data[0].var322) +  parseInt(response.data[0].var323) +parseInt(response.data[0].var324) + parseInt(response.data[0].var325)
                this.total80 = parseInt(response.data[0].var326) +  parseInt(response.data[0].var327) +  parseInt(response.data[0].var328) +parseInt(response.data[0].var329) + parseInt(response.data[0].var330)
                this.total81 = parseInt(response.data[0].var321) +  parseInt(response.data[0].var322) +  parseInt(response.data[0].var323) +parseInt(response.data[0].var324) + parseInt(response.data[0].var325)+ parseInt(response.data[0].var326) +  parseInt(response.data[0].var327) +  parseInt(response.data[0].var328) +parseInt(response.data[0].var329) + parseInt(response.data[0].var330)

                this.total82 = parseInt(response.data[0].var331) +  parseInt(response.data[0].var332) +  parseInt(response.data[0].var333) +parseInt(response.data[0].var334) + parseInt(response.data[0].var335)
                this.total83 = parseInt(response.data[0].var336) +  parseInt(response.data[0].var337) +  parseInt(response.data[0].var338) +parseInt(response.data[0].var339) + parseInt(response.data[0].var340)
                this.total84 = parseInt(response.data[0].var331) +  parseInt(response.data[0].var332) +  parseInt(response.data[0].var333) +parseInt(response.data[0].var334) + parseInt(response.data[0].var335)+ parseInt(response.data[0].var336) +  parseInt(response.data[0].var337) +  parseInt(response.data[0].var338) +parseInt(response.data[0].var339) + parseInt(response.data[0].var340)

                this.total85 = parseInt(response.data[0].var341) +  parseInt(response.data[0].var342) +  parseInt(response.data[0].var343) +parseInt(response.data[0].var344) + parseInt(response.data[0].var345)
                this.total86 = parseInt(response.data[0].var346) +  parseInt(response.data[0].var347) +  parseInt(response.data[0].var348) +parseInt(response.data[0].var349) + parseInt(response.data[0].var350)
                this.total87 = parseInt(response.data[0].var341) +  parseInt(response.data[0].var342) +  parseInt(response.data[0].var343) +parseInt(response.data[0].var344) + parseInt(response.data[0].var345)+ parseInt(response.data[0].var346) +  parseInt(response.data[0].var347) +  parseInt(response.data[0].var348) +parseInt(response.data[0].var349) + parseInt(response.data[0].var350)

              
                this.total88 = parseInt(response.data[0].var351) +  parseInt(response.data[0].var352) +  parseInt(response.data[0].var353) +parseInt(response.data[0].var354) + parseInt(response.data[0].var355)
                this.total89 = parseInt(response.data[0].var356) +  parseInt(response.data[0].var357) +  parseInt(response.data[0].var358) +parseInt(response.data[0].var359) + parseInt(response.data[0].var360)
                this.total90 = parseInt(response.data[0].var351) +  parseInt(response.data[0].var352) +  parseInt(response.data[0].var353) +parseInt(response.data[0].var354) + parseInt(response.data[0].var355)+ parseInt(response.data[0].var356) +  parseInt(response.data[0].var357) +  parseInt(response.data[0].var358) +parseInt(response.data[0].var359) + parseInt(response.data[0].var360)

              
              
                this.total91 = parseInt(response.data[0].var361) +  parseInt(response.data[0].var362) +  parseInt(response.data[0].var363) +parseInt(response.data[0].var364) + parseInt(response.data[0].var365)
                this.total92 = parseInt(response.data[0].var366) +  parseInt(response.data[0].var367) +  parseInt(response.data[0].var368) +parseInt(response.data[0].var369) + parseInt(response.data[0].var370)
                this.total93 = parseInt(response.data[0].var361) +  parseInt(response.data[0].var362) +  parseInt(response.data[0].var363) +parseInt(response.data[0].var364) + parseInt(response.data[0].var365)+ parseInt(response.data[0].var366) +  parseInt(response.data[0].var367) +  parseInt(response.data[0].var368) +parseInt(response.data[0].var369) + parseInt(response.data[0].var370)

              
                this.total94 = parseInt(response.data[0].var371) +  parseInt(response.data[0].var372) +  parseInt(response.data[0].var373) +parseInt(response.data[0].var374) + parseInt(response.data[0].var375)
                this.total95 = parseInt(response.data[0].var376) +  parseInt(response.data[0].var377) +  parseInt(response.data[0].var378) +parseInt(response.data[0].var379) + parseInt(response.data[0].var380)
                this.total96 = parseInt(response.data[0].var371) +  parseInt(response.data[0].var372) +  parseInt(response.data[0].var373) +parseInt(response.data[0].var374) + parseInt(response.data[0].var375)+ parseInt(response.data[0].var376) +  parseInt(response.data[0].var377) +  parseInt(response.data[0].var378) +parseInt(response.data[0].var379) + parseInt(response.data[0].var380)

              
              
                this.total97 = parseInt(response.data[0].var381) +  parseInt(response.data[0].var382) +  parseInt(response.data[0].var383) +parseInt(response.data[0].var384) + parseInt(response.data[0].var385)
                this.total98 = parseInt(response.data[0].var386) +  parseInt(response.data[0].var387) +  parseInt(response.data[0].var388) +parseInt(response.data[0].var389) + parseInt(response.data[0].var390)
                this.total99 = parseInt(response.data[0].var381) +  parseInt(response.data[0].var382) +  parseInt(response.data[0].var383) +parseInt(response.data[0].var384) + parseInt(response.data[0].var385)+ parseInt(response.data[0].var386) +  parseInt(response.data[0].var387) +  parseInt(response.data[0].var388) +parseInt(response.data[0].var389) + parseInt(response.data[0].var390)

              
              
              
                this.total100 = parseInt(response.data[0].var391) +  parseInt(response.data[0].var392) +  parseInt(response.data[0].var393) +parseInt(response.data[0].var394) + parseInt(response.data[0].var395)
                this.total101 = parseInt(response.data[0].var396) +  parseInt(response.data[0].var397) +  parseInt(response.data[0].var398) +parseInt(response.data[0].var399) + parseInt(response.data[0].var400)
                this.total102 = parseInt(response.data[0].var391) +  parseInt(response.data[0].var392) +  parseInt(response.data[0].var393) +parseInt(response.data[0].var394) + parseInt(response.data[0].var395)+ parseInt(response.data[0].var396) +  parseInt(response.data[0].var397) +  parseInt(response.data[0].var398) +parseInt(response.data[0].var399) + parseInt(response.data[0].var400)

              
              
                this.total103 = parseInt(response.data[0].var401) +  parseInt(response.data[0].var402) +  parseInt(response.data[0].var403) +parseInt(response.data[0].var404) + parseInt(response.data[0].var405)
                this.total104 = parseInt(response.data[0].var406) +  parseInt(response.data[0].var407) +  parseInt(response.data[0].var408) +parseInt(response.data[0].var409) + parseInt(response.data[0].var410)
                this.total105 = parseInt(response.data[0].var401) +  parseInt(response.data[0].var402) +  parseInt(response.data[0].var403) +parseInt(response.data[0].var404) + parseInt(response.data[0].var405)+ parseInt(response.data[0].var406) +  parseInt(response.data[0].var407) +  parseInt(response.data[0].var408) +parseInt(response.data[0].var409) + parseInt(response.data[0].var410)

              
              
                this.total106 = parseInt(response.data[0].var411) +  parseInt(response.data[0].var412) +  parseInt(response.data[0].var413) +parseInt(response.data[0].var414) + parseInt(response.data[0].var415)
                this.total107 = parseInt(response.data[0].var416) +  parseInt(response.data[0].var417) +  parseInt(response.data[0].var418) +parseInt(response.data[0].var419) + parseInt(response.data[0].var420)
                this.total108 = parseInt(response.data[0].var411) +  parseInt(response.data[0].var412) +  parseInt(response.data[0].var413) +parseInt(response.data[0].var414) + parseInt(response.data[0].var415)+ parseInt(response.data[0].var416) +  parseInt(response.data[0].var417) +  parseInt(response.data[0].var418) +parseInt(response.data[0].var419) + parseInt(response.data[0].var420)

              
              
                this.total109 = parseInt(response.data[0].var421) +  parseInt(response.data[0].var422) +  parseInt(response.data[0].var423) +parseInt(response.data[0].var424) + parseInt(response.data[0].var425)
                this.total110 = parseInt(response.data[0].var426) +  parseInt(response.data[0].var427) +  parseInt(response.data[0].var428) +parseInt(response.data[0].var429) + parseInt(response.data[0].var430)
                this.total111 = parseInt(response.data[0].var421) +  parseInt(response.data[0].var422) +  parseInt(response.data[0].var423) +parseInt(response.data[0].var424) + parseInt(response.data[0].var425)+ parseInt(response.data[0].var426) +  parseInt(response.data[0].var427) +  parseInt(response.data[0].var428) +parseInt(response.data[0].var429) + parseInt(response.data[0].var430)

              
              
                this.total112 = parseInt(response.data[0].var431) +  parseInt(response.data[0].var432) +  parseInt(response.data[0].var433) +parseInt(response.data[0].var434) + parseInt(response.data[0].var435)
                this.total113 = parseInt(response.data[0].var436) +  parseInt(response.data[0].var437) +  parseInt(response.data[0].var438) +parseInt(response.data[0].var439) + parseInt(response.data[0].var440)
                this.total114 = parseInt(response.data[0].var431) +  parseInt(response.data[0].var432) +  parseInt(response.data[0].var433) +parseInt(response.data[0].var434) + parseInt(response.data[0].var435)+ parseInt(response.data[0].var436) +  parseInt(response.data[0].var437) +  parseInt(response.data[0].var438) +parseInt(response.data[0].var439) + parseInt(response.data[0].var440)
              

                this.total115 = parseInt(response.data[0].var441) +  parseInt(response.data[0].var442) +  parseInt(response.data[0].var443) +parseInt(response.data[0].var444) + parseInt(response.data[0].var445)
                this.total116 = parseInt(response.data[0].var446) +  parseInt(response.data[0].var447) +  parseInt(response.data[0].var448) +parseInt(response.data[0].var449) + parseInt(response.data[0].var450)
                this.total117 = parseInt(response.data[0].var441) +  parseInt(response.data[0].var442) +  parseInt(response.data[0].var443) +parseInt(response.data[0].var444) + parseInt(response.data[0].var445)+ parseInt(response.data[0].var446) +  parseInt(response.data[0].var447) +  parseInt(response.data[0].var448) +parseInt(response.data[0].var449) + parseInt(response.data[0].var450)

              

                this.total118 = parseInt(response.data[0].var451) +  parseInt(response.data[0].var452) +  parseInt(response.data[0].var453) +parseInt(response.data[0].var454) + parseInt(response.data[0].var455)
                this.total119 = parseInt(response.data[0].var456) +  parseInt(response.data[0].var457) +  parseInt(response.data[0].var458) +parseInt(response.data[0].var459) + parseInt(response.data[0].var460)
                this.total120 = parseInt(response.data[0].var451) +  parseInt(response.data[0].var452) +  parseInt(response.data[0].var453) +parseInt(response.data[0].var454) + parseInt(response.data[0].var455)+ parseInt(response.data[0].var456) +  parseInt(response.data[0].var457) +  parseInt(response.data[0].var458) +parseInt(response.data[0].var459) + parseInt(response.data[0].var460)


                this.total121 = parseInt(response.data[0].var461) +  parseInt(response.data[0].var462) +  parseInt(response.data[0].var463) +parseInt(response.data[0].var464) + parseInt(response.data[0].var465)
                this.total122 = parseInt(response.data[0].var466) +  parseInt(response.data[0].var467) +  parseInt(response.data[0].var468) +parseInt(response.data[0].var469) + parseInt(response.data[0].var470)
                this.total123 = parseInt(response.data[0].var461) +  parseInt(response.data[0].var462) +  parseInt(response.data[0].var463) +parseInt(response.data[0].var464) + parseInt(response.data[0].var465)+ parseInt(response.data[0].var466) +  parseInt(response.data[0].var467) +  parseInt(response.data[0].var468) +parseInt(response.data[0].var469) + parseInt(response.data[0].var470)

              
                this.total124 = parseInt(response.data[0].var471) +  parseInt(response.data[0].var472) +  parseInt(response.data[0].var473) 
                this.total125 = parseInt(response.data[0].var474) +  parseInt(response.data[0].var475) +  parseInt(response.data[0].var476) 
                this.total126 = parseInt(response.data[0].var477) +  parseInt(response.data[0].var478) +  parseInt(response.data[0].var479) 
                this.total127 = parseInt(response.data[0].var480) +  parseInt(response.data[0].var481) +  parseInt(response.data[0].var482) 
                this.total128 = parseInt(response.data[0].var483) +  parseInt(response.data[0].var484) +  parseInt(response.data[0].var485) 
                this.total129 = parseInt(response.data[0].var486) +  parseInt(response.data[0].var487) +  parseInt(response.data[0].var488) 
                this.total130 = parseInt(response.data[0].var489) +  parseInt(response.data[0].var490) +  parseInt(response.data[0].var491) 
                this.total131 = parseInt(response.data[0].var492) +  parseInt(response.data[0].var493) +  parseInt(response.data[0].var494) 
                this.total132 = parseInt(response.data[0].var495) +  parseInt(response.data[0].var496) +  parseInt(response.data[0].var497) 







            })
            await this.axios.get(this.$api_url + '/reporte/tmp_vih_2/528-1163',{
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
              
                this.totalA4 = parseInt(response.data[0].var537) +  parseInt(response.data[0].var538) +  parseInt(response.data[0].var539) 
                this.totalA5 = parseInt(response.data[0].var540) +  parseInt(response.data[0].var541) +  parseInt(response.data[0].var542) 
                this.totalA6 = parseInt(response.data[0].var543) +  parseInt(response.data[0].var544) +  parseInt(response.data[0].var545) 
              
                this.totalA7 = parseInt(response.data[0].var546) +  parseInt(response.data[0].var547) +  parseInt(response.data[0].var548) 
                this.totalA8 = parseInt(response.data[0].var549) +  parseInt(response.data[0].var550) +  parseInt(response.data[0].var551) 
                this.totalA9 = parseInt(response.data[0].var552) +  parseInt(response.data[0].var553) +  parseInt(response.data[0].var554) 
              
                this.totalA10 = parseInt(response.data[0].var555) +  parseInt(response.data[0].var556) +  parseInt(response.data[0].var557) 
                this.totalA11 = parseInt(response.data[0].var558) +  parseInt(response.data[0].var559) +  parseInt(response.data[0].var560) 
                this.totalA12 = parseInt(response.data[0].var561) +  parseInt(response.data[0].var562) +  parseInt(response.data[0].var563) 
              
                this.totalA13 = parseInt(response.data[0].var564) +  parseInt(response.data[0].var565) +  parseInt(response.data[0].var566) 
                this.totalA14 = parseInt(response.data[0].var567) +  parseInt(response.data[0].var568) +  parseInt(response.data[0].var569) 
                this.totalA15 = parseInt(response.data[0].var570) +  parseInt(response.data[0].var571) +  parseInt(response.data[0].var572) 



                this.totalA16 = parseInt(response.data[0].var769) +  parseInt(response.data[0].var770) +  parseInt(response.data[0].var771) 
                this.totalA17 = parseInt(response.data[0].var772) +  parseInt(response.data[0].var773) +  parseInt(response.data[0].var774) 

                this.totalA18 = parseInt(response.data[0].var775) +  parseInt(response.data[0].var776) +  parseInt(response.data[0].var777) 
                this.totalA19 = parseInt(response.data[0].var778) +  parseInt(response.data[0].var779) +  parseInt(response.data[0].var780) 

                this.totalA20 = parseInt(response.data[0].var781) +  parseInt(response.data[0].var782) +  parseInt(response.data[0].var783) 
                this.totalA21 = parseInt(response.data[0].var784) +  parseInt(response.data[0].var785) +  parseInt(response.data[0].var786) 

                this.totalA22 = parseInt(response.data[0].var787) +  parseInt(response.data[0].var788) +  parseInt(response.data[0].var789) 
                this.totalA23 = parseInt(response.data[0].var790) +  parseInt(response.data[0].var791) +  parseInt(response.data[0].var792) 

                this.totalA24 = parseInt(response.data[0].var793) +  parseInt(response.data[0].var794) +  parseInt(response.data[0].var795) 
                this.totalA25 = parseInt(response.data[0].var796) +  parseInt(response.data[0].var797) +  parseInt(response.data[0].var798) 

                this.totalA26 = parseInt(response.data[0].var799) +  parseInt(response.data[0].var800) +  parseInt(response.data[0].var801) 
                this.totalA27 = parseInt(response.data[0].var802) +  parseInt(response.data[0].var803) +  parseInt(response.data[0].var804) 

                this.totalA28 = parseInt(response.data[0].var799) +  parseInt(response.data[0].var800) +  parseInt(response.data[0].var801) 
                this.totalA29 = parseInt(response.data[0].var802) +  parseInt(response.data[0].var803) +  parseInt(response.data[0].var804) 

                this.totalA30 = parseInt(response.data[0].var805) +  parseInt(response.data[0].var806) +  parseInt(response.data[0].var807) 
                this.totalA31 = parseInt(response.data[0].var808) +  parseInt(response.data[0].var809) +  parseInt(response.data[0].var810) 

                this.totalA30 = parseInt(response.data[0].var811) +  parseInt(response.data[0].var812) +  parseInt(response.data[0].var813) 
                this.totalA31 = parseInt(response.data[0].var814) +  parseInt(response.data[0].var815) +  parseInt(response.data[0].var816) 





                this.totalA32 = parseInt(response.data[0].var817) +  parseInt(response.data[0].var818) +  parseInt(response.data[0].var819) 
                this.totalA33 = parseInt(response.data[0].var820) +  parseInt(response.data[0].var821) +  parseInt(response.data[0].var822) 

                this.totalA34 = parseInt(response.data[0].var823) +  parseInt(response.data[0].var824) +  parseInt(response.data[0].var825) 
                this.totalA35 = parseInt(response.data[0].var826) +  parseInt(response.data[0].var827) +  parseInt(response.data[0].var828) 

                this.totalA36 = parseInt(response.data[0].var829) +  parseInt(response.data[0].var830) +  parseInt(response.data[0].var831) 
                this.totalA37 = parseInt(response.data[0].var832) +  parseInt(response.data[0].var833) +  parseInt(response.data[0].var834) 

                this.totalA38 = parseInt(response.data[0].var835) +  parseInt(response.data[0].var836) +  parseInt(response.data[0].var837) 
                this.totalA39 = parseInt(response.data[0].var838) +  parseInt(response.data[0].var839) +  parseInt(response.data[0].var840) 

                this.totalA40 = parseInt(response.data[0].var841) +  parseInt(response.data[0].var842) +  parseInt(response.data[0].var843) 
                this.totalA41 = parseInt(response.data[0].var844) +  parseInt(response.data[0].var845) +  parseInt(response.data[0].var846) 

                this.totalA42 = parseInt(response.data[0].var847) +  parseInt(response.data[0].var848) +  parseInt(response.data[0].var849) 
                this.totalA43 = parseInt(response.data[0].var850) +  parseInt(response.data[0].var851) +  parseInt(response.data[0].var852) 

                this.totalA44 = parseInt(response.data[0].var853) +  parseInt(response.data[0].var854) +  parseInt(response.data[0].var855) 
                this.totalA45 = parseInt(response.data[0].var856) +  parseInt(response.data[0].var857) +  parseInt(response.data[0].var858) 


                this.totalA46 = parseInt(response.data[0].var929) +  parseInt(response.data[0].var930) +  parseInt(response.data[0].var931) +  parseInt(response.data[0].var932) +  parseInt(response.data[0].var933) 
                this.totalA47 = parseInt(response.data[0].var934) +  parseInt(response.data[0].var935) +  parseInt(response.data[0].var936) +  parseInt(response.data[0].var937) +  parseInt(response.data[0].var938) 
                this.totalA48 = parseInt(this.totalA46) + parseInt(this.totalA47) 



                this.totalA49 = parseInt(response.data[0].var939) +  parseInt(response.data[0].var940) +  parseInt(response.data[0].var941) +  parseInt(response.data[0].var942) +  parseInt(response.data[0].var943) 
                this.totalA50 = parseInt(response.data[0].var944) +  parseInt(response.data[0].var945) +  parseInt(response.data[0].var946) +  parseInt(response.data[0].var947) +  parseInt(response.data[0].var948) 
                this.totalA51 = parseInt(this.totalA49) + parseInt(this.totalA50) 



                this.totalA52 = parseInt(response.data[0].var949) +  parseInt(response.data[0].var950) +  parseInt(response.data[0].var951) +  parseInt(response.data[0].var952) +  parseInt(response.data[0].var953) 
                this.totalA53 = parseInt(response.data[0].var954) +  parseInt(response.data[0].var955) +  parseInt(response.data[0].var956) +  parseInt(response.data[0].var957) +  parseInt(response.data[0].var958) 
                this.totalA54 = parseInt(this.totalA52) + parseInt(this.totalA53) 


                this.totalA55 = parseInt(response.data[0].var959) +  parseInt(response.data[0].var960) +  parseInt(response.data[0].var961) +  parseInt(response.data[0].var962) +  parseInt(response.data[0].var963) 
                this.totalA56 = parseInt(response.data[0].var964) +  parseInt(response.data[0].var965) +  parseInt(response.data[0].var966) +  parseInt(response.data[0].var967) +  parseInt(response.data[0].var968) 
                this.totalA57 = parseInt(this.totalA55) + parseInt(this.totalA56) 


                this.totalA58 = parseInt(response.data[0].var969) +  parseInt(response.data[0].var970) +  parseInt(response.data[0].var971)  
                this.totalA59 = parseInt(response.data[0].var972) +  parseInt(response.data[0].var973) +  parseInt(response.data[0].var974) 
                this.totalA60 = parseInt(response.data[0].var975) +  parseInt(response.data[0].var976) +  parseInt(response.data[0].var977)  
                this.totalA61 = parseInt(this.totalA58) + parseInt(this.totalA59)  + parseInt(this.totalA60) 


                this.totalA62 = parseInt(response.data[0].var978) +  parseInt(response.data[0].var979) +  parseInt(response.data[0].var980)  
                this.totalA63 = parseInt(response.data[0].var981) +  parseInt(response.data[0].var982) +  parseInt(response.data[0].var983) 
              


                this.totalA64 = parseInt(response.data[0].var984) +  parseInt(response.data[0].var985) +  parseInt(response.data[0].var986)  
                this.totalA65 = parseInt(response.data[0].var987) +  parseInt(response.data[0].var988) +  parseInt(response.data[0].var989) 
              
                this.totalA66 = parseInt(response.data[0].var990) +  parseInt(response.data[0].var991) +  parseInt(response.data[0].var992)  
                this.totalA67 = parseInt(response.data[0].var993) +  parseInt(response.data[0].var994) +  parseInt(response.data[0].var995) 
              
              
                this.totalA68 = parseInt(response.data[0].var996) +  parseInt(response.data[0].var997) +  parseInt(response.data[0].var998)  
                this.totalA69 = parseInt(response.data[0].var999) +  parseInt(response.data[0].var1000) + parseInt(response.data[0].var1001) 
              
                this.totalA70 = parseInt(response.data[0].var1012) +  parseInt(response.data[0].var1013) +  parseInt(response.data[0].var1014)  
                this.totalA71 = parseInt(response.data[0].var1015) +  parseInt(response.data[0].var1016) + parseInt(response.data[0].var1017) 
              
              
                this.totalA72 = parseInt(response.data[0].var1028) +  parseInt(response.data[0].var1029) +  parseInt(response.data[0].var1030)  +  parseInt(response.data[0].var1031)
                this.totalA73 = parseInt(response.data[0].var1032) +  parseInt(response.data[0].var1033) + parseInt(response.data[0].var1034) +  parseInt(response.data[0].var1035)
              
              
                this.totalA74 = parseInt(response.data[0].var1036) +  parseInt(response.data[0].var1037) +  parseInt(response.data[0].var1038)  +  parseInt(response.data[0].var1039)
                this.totalA75 = parseInt(response.data[0].var1040) +  parseInt(response.data[0].var1041) + parseInt(response.data[0].var1042) +  parseInt(response.data[0].var1043)
              
              
                this.totalA76 = parseInt(response.data[0].var1044) +  parseInt(response.data[0].var1045) +  parseInt(response.data[0].var1046)  +  parseInt(response.data[0].var1047)
                this.totalA77 = parseInt(response.data[0].var1048) +  parseInt(response.data[0].var1049) + parseInt(response.data[0].var1050) +  parseInt(response.data[0].var1051)
              
              
                this.totalA78 = parseInt(response.data[0].var1052) +  parseInt(response.data[0].var1053) +  parseInt(response.data[0].var1054)  +  parseInt(response.data[0].var1055)
                this.totalA79 = parseInt(response.data[0].var1056) +  parseInt(response.data[0].var1057) + parseInt(response.data[0].var1058) +  parseInt(response.data[0].var1059)
              
              
                this.totalA80 = parseInt(response.data[0].var1060) +  parseInt(response.data[0].var1061) +  parseInt(response.data[0].var1062)  +  parseInt(response.data[0].var1063)
                this.totalA81 = parseInt(response.data[0].var1064) +  parseInt(response.data[0].var1065) + parseInt(response.data[0].var1066) +  parseInt(response.data[0].var1067)
              
              
                this.totalA82 = parseInt(response.data[0].var1068) +  parseInt(response.data[0].var1069) +  parseInt(response.data[0].var1070)  +  parseInt(response.data[0].var1071)
                this.totalA83 = parseInt(response.data[0].var1072) +  parseInt(response.data[0].var1073) + parseInt(response.data[0].var1074) +  parseInt(response.data[0].var1075)
              
              
                this.totalA84 = parseInt(response.data[0].var1076) +  parseInt(response.data[0].var1077) +  parseInt(response.data[0].var1078)  +  parseInt(response.data[0].var1079)
                this.totalA85 = parseInt(response.data[0].var1080) +  parseInt(response.data[0].var1081) + parseInt(response.data[0].var1082) +  parseInt(response.data[0].var1083)
              
              
                this.totalA86 = parseInt(response.data[0].var1084) +  parseInt(response.data[0].var1085) +  parseInt(response.data[0].var1086)  +  parseInt(response.data[0].var1087)
                this.totalA87 = parseInt(response.data[0].var1088) +  parseInt(response.data[0].var1089) + parseInt(response.data[0].var1090) +  parseInt(response.data[0].var1091)
              


              
            })
        },
    },
    
    
})
</script>

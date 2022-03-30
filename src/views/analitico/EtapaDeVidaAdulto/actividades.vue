<template>
    <v-row >

    <v-col md="12" style="text-align:center">
        <h2>ETAPA DE VIDA: ADULTO</h2> 
    </v-col>

        <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
 <tbody><tr>
  <td colspan="5" rowspan="2"><b>COBERTURA EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="5">Atendidos</td>
  <td>{{data.cob1 ? data.cob1 : '-'}}</td>
  <td>{{data.cob2 ? data.cob2 : '-'}}</td>
  <td>{{parseInt(data.cob1) + parseInt(data.cob2)}}</td>
 </tr>
 <tr>
  <td colspan="5">Atenciones</td>
  <td>{{data.cob3 ? data.cob3 : '-'}}</td>
  <td>{{data.cob4 ? data.cob4 : '-'}}</td>
  <td>{{parseInt(data.cob3) + parseInt(data.cob4)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132" ></td>
  <td width="132" ></td>
  <td width="132" ></td>
 </tr>
 <!--[endif]-->
</tbody>

               </template>
           </v-simple-table>
        </v-col>

    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                
 <tbody><tr>
  <td colspan="5"><b>MORBILIDAD DEL ADULTO</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>CIE10</b></td>
  <td colspan="4"><b>DIAGNÓSTICOS</b></td>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td>A50 - A64</td>
  <td colspan="4">Infecciones de modo predominantemente sexual</td>
  <td>{{data.var1 ? data.var1 : '-'}}</td>
  <td>{{data.var2 ? data.var2 : '-'}}</td>
  <td>{{parseInt(data.var1) + parseInt(data.var2)}}</td>
 </tr>
 <tr>
  <td>E66</td>
  <td colspan="4">Obesidad</td>
  <td>{{data.var3 ? data.var3 : '-'}}</td>
  <td>{{data.var4 ? data.var4 : '-'}}</td>
  <td>{{parseInt(data.var3) + parseInt(data.var4)}}</td>
 </tr>
 <tr>
  <td>J00</td>
  <td colspan="4">Rinofaringitis aguda [resfriado común]</td>
  <td>{{data.var5 ? data.var5 : '-'}}</td>
  <td>{{data.var6 ? data.var6 : '-'}}</td>
  <td>{{parseInt(data.var5) + parseInt(data.var6)}}</td>
 </tr>
 <tr>
  <td>J02</td>
  <td colspan="4">Faringitis aguda</td>
  <td>{{data.var7 ? data.var7 : '-'}}</td>
  <td>{{data.var8 ? data.var8 : '-'}}</td>
  <td>{{parseInt(data.var7) + parseInt(data.var8)}}</td>
 </tr>
 <tr>
  <td>J06</td>
  <td colspan="4">Infecciones agudas de las vías respiratorias superiores, de sitios múltiples</td>
  <td>{{data.var9 ? data.var9 : '-'}}</td>
  <td>{{data.var10 ? data.var10 : '-'}}</td>
  <td>{{parseInt(data.var9) + parseInt(data.var10)}}</td>
 </tr>
 <tr>
  <td>K02</td>
  <td colspan="4">Caries dental</td>
  <td>{{data.var11 ? data.var11 : '-'}}</td>
  <td>{{data.var12 ? data.var12 : '-'}}</td>
  <td>{{parseInt(data.var11) + parseInt(data.var12)}}</td>
 </tr>
 <tr>
  <td>K04</td>
  <td colspan="4">Enfermedades de la pulpa y de los tejidos periacales</td>
  <td>{{data.var13 ? data.var13 : '-'}}</td>
  <td>{{data.var14 ? data.var14 : '-'}}</td>
  <td>{{parseInt(data.var13) + parseInt(data.var14)}}</td>
 </tr>
 <tr>
  <td>K29</td>
  <td colspan="4">Gastritis y duodenitis</td>
  <td>{{data.var15 ? data.var15 : '-'}}</td>
  <td>{{data.var16 ? data.var16 : '-'}}</td>
  <td>{{parseInt(data.var15) + parseInt(data.var16)}}</td>
 </tr>
 <tr>
  <td>M54</td>
  <td colspan="4">Dorsalgia</td>
  <td>{{data.var17 ? data.var17 : '-'}}</td>
  <td>{{data.var18 ? data.var18 : '-'}}</td>
  <td>{{parseInt(data.var17) + parseInt(data.var18)}}</td>
 </tr>
 <tr>
  <td>N39</td>
  <td colspan="4">Otros trastornos del sistema urinario</td>
  <td>{{data.var19 ? data.var19 : '-'}}</td>
  <td>{{data.var20 ? data.var20 : '-'}}</td>
  <td>{{parseInt(data.var19) + parseInt(data.var20)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>     

               </template>
           </v-simple-table>
        </v-col>

    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>

<tbody><tr>
  <td colspan="5" rowspan="2"><b>ATENCIÓN INTEGRAL DE SALUD EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="2">Plan de Atención Integral</td>
  <td colspan="4">Elaborado</td>
  <td>{{data.var21 ? data.var21 : '-'}}</td>
  <td>{{data.var22 ? data.var22 : '-'}}</td>
  <td>{{parseInt(data.var21) + parseInt(data.var22)}}</td>
 </tr>
 <tr>
  <td colspan="4">Ejecutado</td>
  <td>{{data.var23 ? data.var23 : '-'}}</td>
  <td>{{data.var24 ? data.var24 : '-'}}</td>
  <td>{{parseInt(data.var23) + parseInt(data.var24)}}</td>
 </tr>
 <tr>
  <td>Consejería Integral</td>
  <td colspan="4">Finalizada (TA)</td>
  <td>{{data.var25 ? data.var25 : '-'}}</td>
  <td>{{data.var26 ? data.var26 : '-'}}</td>
  <td>{{parseInt(data.var25) + parseInt(data.var26)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>      

               </template>
           </v-simple-table>
        </v-col>
    

    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   

<tbody><tr>
  <td colspan="5"><b>EVALUACIÓN ANTROPOMETRICA EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>CIE10</b></td>
  <td colspan="4"><b>ÍNDICE DE MASA CORPORAL (IMC)</b></td>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td>E46X3</td>
  <td colspan="4">Delgadez III</td>
  <td>{{data.var27 ? data.var27 : '-'}}</td>
  <td>{{data.var28 ? data.var28 : '-'}}</td>
  <td>{{parseInt(data.var27) + parseInt(data.var28)}}</td>
 </tr>
 <tr>
  <td>E46X2</td>
  <td colspan="4">Delgadez II</td>
  <td>{{data.var29 ? data.var29 : '-'}}</td>
  <td>{{data.var30 ? data.var30 : '-'}}</td>
  <td>{{parseInt(data.var29) + parseInt(data.var30)}}</td>
 </tr>
 <tr>
  <td>E46X1</td>
  <td colspan="4">Delgadez I</td>
  <td>{{data.var31 ? data.var31 : '-'}}</td>
  <td>{{data.var32 ? data.var32 : '-'}}</td>
  <td>{{parseInt(data.var31) + parseInt(data.var32)}}</td>
 </tr>
 <tr>
  <td>Z006</td>
  <td colspan="4">Normal</td>
  <td>{{data.var33 ? data.var33 : '-'}}</td>
  <td>{{data.var34 ? data.var34 : '-'}}</td>
  <td>{{parseInt(data.var33) + parseInt(data.var34)}}</td>
 </tr>
 <tr>
  <td>E660</td>
  <td colspan="4">Sobrepeso</td>
  <td>{{data.var35 ? data.var35 : '-'}}</td>
  <td>{{data.var36 ? data.var36 : '-'}}</td>
  <td>{{parseInt(data.var35) + parseInt(data.var36)}}</td>
 </tr>
 <tr>
  <td>E669</td>
  <td colspan="4">Obesidad I</td>
  <td>{{data.var37 ? data.var37 : '-'}}</td>
  <td>{{data.var38 ? data.var38 : '-'}}</td>
  <td>{{parseInt(data.var37) + parseInt(data.var38)}}</td>
 </tr>
 <tr>
  <td>E6692</td>
  <td colspan="4">Obesidad II</td>
  <td>{{data.var39 ? data.var39 : '-'}}</td>
  <td>{{data.var40 ? data.var40 : '-'}}</td>
  <td>{{parseInt(data.var39) + parseInt(data.var40)}}</td>
 </tr>
 <tr>
  <td>E6693</td>
  <td colspan="4">Obesidad III</td>
  <td>{{data.var41 ? data.var41 : '-'}}</td>
  <td>{{data.var42 ? data.var42 : '-'}}</td>
  <td>{{parseInt(data.var41) + parseInt(data.var42)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>

               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>

 <tbody><tr>
  <td colspan="5" rowspan="2"><b>RIESGO NUTRICIONAL EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26"><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="3">Evaluación del Perímetro Abdominal (PAB)</td>
  <td colspan="4">Riesgo bajo</td>
  <td>{{data.var43 ? data.var43 : '-'}}</td>
  <td>{{data.var44 ? data.var44 : '-'}}</td>
  <td>{{parseInt(data.var43) + parseInt(data.var44)}}</td>
 </tr>
 <tr>
  <td colspan="4">Riesgo Alto</td>
  <td>{{data.var45 ? data.var45 : '-'}}</td>
  <td>{{data.var46 ? data.var46 : '-'}}</td>
  <td>{{parseInt(data.var45) + parseInt(data.var46)}}</td>
 </tr>
 <tr>
  <td colspan="4">Riesgo Muy Alto</td>
  <td>{{data.var47 ? data.var47 : '-'}}</td>
  <td>{{data.var48 ? data.var48 : '-'}}</td>
  <td>{{parseInt(data.var47) + parseInt(data.var48)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>

    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
<tbody><tr>
  <td colspan="5" rowspan="2"><b>RIESGO NUTRICIONAL EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26"><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="2">Evaluación del Perímetro Abdominal (PAB)</td>
  <td colspan="4">Normal</td>
  <td>{{data.var49 ? data.var49 : '-'}}</td>
  <td>{{data.var50 ? data.var50 : '-'}}</td>
  <td>{{parseInt(data.var49) + parseInt(data.var50)}}</td>
 </tr>
 <tr>
  <td colspan="4">Anormal</td>
  <td>{{data.var51 ? data.var51 : '-'}}</td>
  <td>{{data.var52 ? data.var52 : '-'}}</td>
  <td>{{parseInt(data.var51) + parseInt(data.var52)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
 <tbody><tr>
  <td colspan="5" rowspan="2"><b>PRESTACIONES DE DAÑOS NO TRANSMISIBLES EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26"><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="5">Valoración
  clínica sin factores de riesgo</td>
  <td>{{data.var53 ? data.var53 : '-'}}</td>
  <td>{{data.var54 ? data.var54 : '-'}}</td>
  <td>{{parseInt(data.var53) + parseInt(data.var54)}}</td>
 </tr>
 <tr>
  <td colspan="5">Valoración
  clínica con factores de riesgo</td>
  <td>{{data.var55 ? data.var55 : '-'}}</td>
  <td>{{data.var56 ? data.var56 : '-'}}</td>
  <td>{{parseInt(data.var55) + parseInt(data.var56)}}</td>
 </tr>
 <tr>
  <td colspan="5">Valoración Clínica y tamizaje de laboratorio</td>
  <td>{{data.var57 ? data.var57 : '-'}}</td>
  <td>{{data.var58 ? data.var58 : '-'}}</td>
  <td>{{parseInt(data.var57) + parseInt(data.var58)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
<tbody><tr>
  <td colspan="5" rowspan="2"><b>CASOS DIAGNOSTICADOS DE HTA EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="5">Hipertensión esencial (primaria)</td>
  <td>{{data.var59 ? data.var59 : '-'}}</td>
  <td>{{data.var60 ? data.var60 : '-'}}</td>
  <td>{{parseInt(data.var59) + parseInt(data.var60)}}</td>
 </tr>
 <tr>
  <td colspan="5">Retinopatía
  hipertensiva</td>
  <td>{{data.var61 ? data.var61 : '-'}}</td>
  <td>{{data.var62 ? data.var62 : '-'}}</td>
  <td>{{parseInt(data.var61) + parseInt(data.var62)}}</td>
 </tr>
 <tr>
  <td colspan="5">Nefropatía hipertensiva</td>
  <td>{{data.var63 ? data.var63 : '-'}}</td>
  <td>{{data.var64 ? data.var64 : '-'}}</td>
  <td>{{parseInt(data.var63) + parseInt(data.var64)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132" ></td>
  <td width="132" ></td>
  <td width="132" ></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
<tbody><tr>
  <td colspan="5" rowspan="2"><b>CASOS DIAGNOSTICADOS DE DIABETES MELLITUS EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="5">Diabetes mellitus tipo 1</td>
  <td>{{data.var65 ? data.var65 : '-'}}</td>
  <td>{{data.var66 ? data.var66 : '-'}}</td>
  <td>{{parseInt(data.var65) + parseInt(data.var66)}}</td>
 </tr>
 <tr>
  <td colspan="5">Diabetes
  mellitus tipo 2</td>
  <td>{{data.var67 ? data.var67 : '-'}}</td>
  <td>{{data.var68 ? data.var68 : '-'}}</td>
  <td>{{parseInt(data.var67) + parseInt(data.var68)}}</td>
 </tr>
 <tr>
  <td colspan="5">Diabetes mellitus en el embarazo</td>
  <td>{{data.var69 ? data.var69 : '-'}}</td>
  <td>{{data.var70 ? data.var70 : '-'}}</td>
  <td>{{parseInt(data.var69) + parseInt(data.var70)}}</td>
 </tr>
 <tr>
  <td colspan="5">Otras diabetes mellitus</td>
  <td>{{data.var71 ? data.var71 : '-'}}</td>
  <td>{{data.var72 ? data.var72 : '-'}}</td>
  <td>{{parseInt(data.var71) + parseInt(data.var72)}}</td>
 </tr>
 <tr>
  <td colspan="5">Nefropatia diabética</td>
  <td>{{data.var73 ? data.var73 : '-'}}</td>
  <td>{{data.var74 ? data.var74 : '-'}}</td>
  <td>{{parseInt(data.var73) + parseInt(data.var74)}}</td>
 </tr>
 <tr>
  <td colspan="5">Retinopatía diabética</td>
  <td>{{data.var75 ? data.var75 : '-'}}</td>
  <td>{{data.var76 ? data.var76 : '-'}}</td>
  <td>{{parseInt(data.var75) + parseInt(data.var76)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
<tbody><tr>
  <td colspan="5" rowspan="2"><b>PLANIFICACION FAMILIAR EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="4" rowspan="2">Consejería/Orientación en Planificación Familiar</td>
  <td>1° Sesión</td>
  <td>{{data.var77 ? data.var77 : '-'}}</td>
  <td>{{data.var78 ? data.var78 : '-'}}</td>
  <td>{{parseInt(data.var77) + parseInt(data.var78)}}</td>
 </tr>
 <tr>
  <td>2° Sesión</td>
  <td>{{data.var79 ? data.var79 : '-'}}</td>
  <td>{{data.var80 ? data.var80 : '-'}}</td>
  <td>{{parseInt(data.var79) + parseInt(data.var80)}}</td>
 </tr>
 <tr>
  <td colspan="4" rowspan="2">Consejería/Orientación en Salud Sexual y Reproductiva</td>
  <td>1° Sesión</td>
  <td>{{data.var81 ? data.var81 : '-'}}</td>
  <td>{{data.var82 ? data.var82 : '-'}}</td>
  <td>{{parseInt(data.var81) + parseInt(data.var82)}}</td>
 </tr>
 <tr>
  <td>2° Sesión</td>
  <td>{{data.var83 ? data.var83 : '-'}}</td>
  <td>{{data.var84 ? data.var84 : '-'}}</td>
  <td>{{parseInt(data.var83) + parseInt(data.var84)}}</td>
 </tr>
 <tr>
  <td colspan="4" rowspan="2">Consejería/Orientación en perimenopausia, menopausia y Climaterio</td>
  <td>1° Sesión</td>
  <td>{{data.var85 ? data.var85 : '-'}}</td>
  <td>{{data.var86 ? data.var86 : '-'}}</td>
  <td>{{parseInt(data.var85) + parseInt(data.var86)}}</td>
 </tr>
 <tr>
  <td>2° Sesión</td>
  <td>{{data.var87 ? data.var87 : '-'}}</td>
  <td>{{data.var88 ? data.var88 : '-'}}</td>
  <td>{{parseInt(data.var87) + parseInt(data.var88)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="8">
           <v-simple-table dense>
               <template v-slot:default>
                   
<tbody><tr>
  <td colspan="5" rowspan="2"><b>MÉTODO DE PLANIFICACIÓN FAMILIAR EN ADULTOS</b></td>
  <td><b>Activ. (A)</b></td>
  <td colspan="2"><b>TIPO DE USUARIOS (30a-59a)</b></td>
 </tr>
 <tr>
  <td><b>Insumo (I)</b></td>
  <td><b>Nuevos</b></td>
  <td><b>Continuadores</b></td>
 </tr>
 <tr>
  <td colspan="5" rowspan="2">DIU</td>
  <td>A</td>
  <td>{{data.var89 ? data.var89 : '-'}}</td>
  <td>{{data.var90 ? data.var90 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var91 ? data.var91 : '-'}}</td>
  <td>{{data.var92 ? data.var92 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="8">Hormonal</td>
  <td colspan="3" rowspan="2">Oral combinado</td>
  <td>A</td>
  <td>{{data.var93 ? data.var93 : '-'}}</td>
  <td>{{data.var94 ? data.var94 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var95 ? data.var95 : '-'}}</td>
  <td>{{data.var96 ? data.var96 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" rowspan="2">Inyectable trimestral</td>
  <td>A</td>
  <td>{{data.var97 ? data.var97 : '-'}}</td>
  <td>{{data.var98 ? data.var98 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var99 ? data.var99 : '-'}}</td>
  <td>{{data.var100 ? data.var100 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" rowspan="2">Inyectable mensual</td>
  <td>A</td>
  <td>{{data.var101 ? data.var101 : '-'}}</td>
  <td>{{data.var102 ? data.var102 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var103 ? data.var103 : '-'}}</td>
  <td>{{data.var104 ? data.var104 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" rowspan="2">Implante</td>
  <td>A</td>
  <td>{{data.var105 ? data.var105 : '-'}}</td>
  <td>{{data.var106 ? data.var106 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var107 ? data.var107 : '-'}}</td>
  <td>{{data.var108 ? data.var108 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="4">Barrera</td>
  <td colspan="3" rowspan="2">Condón masculino</td>
  <td>A</td>
  <td>{{data.var109 ? data.var109 : '-'}}</td>
  <td>{{data.var110 ? data.var110 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var111 ? data.var111 : '-'}}</td>
  <td>{{data.var112 ? data.var112 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" rowspan="2">Condón femenino</td>
  <td>A</td>
  <td>{{data.var113 ? data.var113 : '-'}}</td>
  <td>{{data.var114 ? data.var114 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var115 ? data.var115 : '-'}}</td>
  <td>{{data.var116 ? data.var116 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">AQV Femenino</td>
  <td>A</td>
  <td>{{data.var117 ? data.var117 : '-'}}</td>
  <td>{{data.var118 ? data.var118 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">AQV Masculino</td>
  <td>A</td>
  <td>{{data.var119 ? data.var119 : '-'}}</td>
  <td>{{data.var120 ? data.var120 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">MELA</td>
  <td>A</td>
  <td>{{data.var121 ? data.var121 : '-'}}</td>
  <td>{{data.var122 ? data.var122 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="3">Abstinencia periódica</td>
  <td colspan="3">Billings</td>
  <td>A</td>
  <td>{{data.var123 ? data.var123 : '-'}}</td>
  <td>{{data.var124 ? data.var124 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3">Ritmo</td>
  <td>A</td>
  <td>{{data.var125 ? data.var125 : '-'}}</td>
  <td>{{data.var126 ? data.var126 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3">Días fijos (MDF)</td>
  <td>A</td>
  <td>{{data.var127 ? data.var127 : '-'}}</td>
  <td>{{data.var128 ? data.var128 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>

               </template>
           </v-simple-table>
        </v-col>

    <v-col md="4">
           <v-simple-table dense>
<template v-slot:default>
<tbody><tr>
  <td colspan="2" rowspan="2"><b>MÉTODO DE PLANIFICACIÓN FAMILIAR EN ADULTOS<br>(ERROR DE REGISTRO)</b></td>
  <td colspan="2"><b>TIPO DE USUARIOS (30a-59a)</b></td>
 </tr>
 <tr>
  <td><b>Nuevos</b></td>
  <td><b>Continuadores</b></td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">DIU</td>
  <td rowspan="2">{{data.var129 ? data.var129 : '-'}}</td>
  <td rowspan="2">{{data.var130 ? data.var130 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="8">Hormonal</td>
  <td rowspan="2">Oral combinado</td>
  <td rowspan="2">{{data.var131 ? data.var131 : '-'}}</td>
  <td rowspan="2">{{data.var132 ? data.var132 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="2">Inyectable trimestral</td>
  <td rowspan="2">{{data.var133 ? data.var133 : '-'}}</td>
  <td rowspan="2">{{data.var134 ? data.var134 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="2">Inyectable mensual</td>
  <td rowspan="2">{{data.var135 ? data.var135 : '-'}}</td>
  <td rowspan="2">{{data.var136 ? data.var136 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="2">Implante</td>
  <td rowspan="2">{{data.var137 ? data.var137 : '-'}}</td>
  <td rowspan="2">{{data.var138 ? data.var138 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="4">Barrera</td>
  <td rowspan="2">Condón masculino</td>
  <td rowspan="2">{{data.var139 ? data.var139 : '-'}}</td>
  <td rowspan="2">{{data.var140 ? data.var140 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="2">Condón femenino</td>
  <td rowspan="2">{{data.var141 ? data.var141 : '-'}}</td>
  <td rowspan="2">{{data.var142 ? data.var142 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">AQV Femenino</td>
  <td>{{data.var143 ? data.var143 : '-'}}</td>
  <td>{{data.var144 ? data.var144 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">AQV Masculino</td>
  <td>{{data.var145 ? data.var145 : '-'}}</td>
  <td>{{data.var146 ? data.var146 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">MELA</td>
  <td>{{data.var147 ? data.var147 : '-'}}</td>
  <td>{{data.var148 ? data.var148 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="3">Abstinencia periódica</td>
  <td>Billings</td>
  <td>{{data.var149 ? data.var149 : '-'}}</td>
  <td>{{data.var150 ? data.var150 : '-'}}</td>
 </tr>
 <tr>
  <td>Ritmo</td>
  <td>{{data.var151 ? data.var151 : '-'}}</td>
  <td>{{data.var152 ? data.var152 : '-'}}</td>
 </tr>
 <tr>
  <td>Días fijos (MDF)</td>
  <td>{{data.var153 ? data.var153 : '-'}}</td>
  <td>{{data.var154 ? data.var154 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="149"></td>
  <td width="221"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>   
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
 <tbody><tr>
  <td colspan="6"><b>MÉTODO DE PLANIFICACIÓN FAMILIAR EN ADULTOS</b></td>
  <td><b>TOTAL</b></td>
 </tr>
 <tr>
  <td colspan="5" rowspan="2">Anticoncepción oral de emergencia/Yuzpe</td>
  <td>A</td>
  <td>{{data.var155 ? data.var155 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var156 ? data.var156 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5" rowspan="2">Anticoncepción oral de emergencia/Progestageno</td>
  <td>A</td>
  <td>{{data.var157 ? data.var157 : '-'}}</td>
 </tr>
 <tr>
  <td>I</td>
  <td>{{data.var158 ? data.var158 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
</template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
<template v-slot:default>

<tbody><tr>
  <td colspan="5" rowspan="2"><b>PREVENCIÓN DE CÁNCER EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26"><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="4" rowspan="2">Consejería Preventiva en factores de riesgo para el cáncer</td>
  <td>1° Sesión</td>
  <td>{{data.var159 ? data.var159 : '-'}}</td>
  <td>{{data.var160 ? data.var160 : '-'}}</td>
  <td>{{parseInt(data.var159) + parseInt(data.var160)}}</td>
 </tr>
 <tr>
  <td>2° Sesión</td>
  <td>{{data.var161 ? data.var161 : '-'}}</td>
  <td>{{data.var162 ? data.var162 : '-'}}</td>
  <td>{{parseInt(data.var161) + parseInt(data.var162)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
<tbody><tr>
  <td colspan="5" rowspan="2"><b>PRESTACIONES EN SALUD BUCAL EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="4">Examen Estomatológico</td>
  <td colspan="2" rowspan="2">No gestantes</td>
  <td colspan="2">Inician</td>
  <td>{{data.var163 ? data.var163 : '-'}}</td>
  <td>{{data.var164 ? data.var164 : '-'}}</td>
  <td>{{parseInt(data.var163) + parseInt(data.var164)}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>{{data.var165 ? data.var165 : '-'}}</td>
  <td>{{data.var166 ? data.var166 : '-'}}</td>
  <td>{{parseInt(data.var165) + parseInt(data.var166)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">Gestantes</td>
  <td colspan="2">Inician</td>
  <td>&nbsp;</td>
  <td>{{data.var167 ? data.var167 : '-'}}</td>
  <td>{{data.var167 ? data.var167 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>&nbsp;</td>
  <td>{{data.var168 ? data.var168 : '-'}}</td>
  <td>{{data.var168 ? data.var168 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="4">Instrucción de Higiene Oral</td>
  <td colspan="2" rowspan="2">No gestantes</td>
  <td colspan="2">Inician</td>
  <td>{{data.var169 ? data.var169 : '-'}}</td>
  <td>{{data.var170 ? data.var170 : '-'}}</td>
  <td>{{parseInt(data.var169) + parseInt(data.var170)}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>{{data.var171 ? data.var171 : '-'}}</td>
  <td>{{data.var172 ? data.var172 : '-'}}</td>
  <td>{{parseInt(data.var171) + parseInt(data.var172)}}</td>
 </tr>
<tr>
  <td colspan="2" rowspan="2">Gestantes</td>
  <td colspan="2">Inician</td>
  <td>&nbsp;</td>
  <td>{{data.var173 ? data.var173 : '-'}}</td>
  <td>{{data.var173 ? data.var173 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>&nbsp;</td>
  <td>{{data.var174 ? data.var174 : '-'}}</td>
  <td>{{data.var174 ? data.var174 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="4">Asesoría nutricional para el control de enfermedades dentales</td>
  <td colspan="2" rowspan="2">No gestantes</td>
  <td colspan="2">Inician</td>
  <td>{{data.var175 ? data.var175 : '-'}}</td>
  <td>{{data.var176 ? data.var176 : '-'}}</td>
  <td>{{parseInt(data.var175) + parseInt(data.var176)}}</td>
 </tr>
 <tr>
  <td colspan="2">Tratado</td>
  <td>{{data.var177 ? data.var177 : '-'}}</td>
  <td>{{data.var178 ? data.var178 : '-'}}</td>
  <td>{{parseInt(data.var177) + parseInt(data.var178)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">Gestantes</td>
  <td colspan="2">Inician</td>
  <td>&nbsp;</td>
  <td>{{data.var179 ? data.var179 : '-'}}</td>
  <td>{{data.var179 ? data.var179 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2">Tratado</td>
  <td>&nbsp;</td>
  <td>{{data.var180 ? data.var180 : '-'}}</td>
  <td>{{data.var180 ? data.var180 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="4">Profilaxis Dental</td>
  <td colspan="2" rowspan="2">No gestantes</td>
  <td colspan="2">Inician</td>
  <td>{{data.var181 ? data.var181 : '-'}}</td>
  <td>{{data.var182 ? data.var182 : '-'}}</td>
  <td>{{parseInt(data.var181) + parseInt(data.var182)}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>{{data.var183 ? data.var183 : '-'}}</td>
  <td>{{data.var184 ? data.var184 : '-'}}</td>
  <td>{{parseInt(data.var183) + parseInt(data.var184)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">Gestantes</td>
  <td colspan="2">Inician</td>
  <td>&nbsp;</td>
  <td>{{data.var185 ? data.var185 : '-'}}</td>
  <td>{{data.var185 ? data.var185 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>&nbsp;</td>
  <td>{{data.var186 ? data.var186 : '-'}}</td>
  <td>{{data.var186 ? data.var186 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="4">Consulta Estomatológica no especializada</td>
  <td colspan="2" rowspan="2">No gestantes</td>
  <td colspan="2">Inician</td>
  <td>{{data.var187 ? data.var187 : '-'}}</td>
  <td>{{data.var188 ? data.var188 : '-'}}</td>
  <td>{{parseInt(data.var187) + parseInt(data.var188)}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>{{data.var189 ? data.var189 : '-'}}</td>
  <td>{{data.var190 ? data.var190 : '-'}}</td>
  <td>{{parseInt(data.var189) + parseInt(data.var190)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">Gestantes</td>
  <td colspan="2">Inician</td>
  <td>&nbsp;</td>
  <td>{{data.var191 ? data.var191 : '-'}}</td>
  <td>{{data.var191 ? data.var191 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>&nbsp;</td>
  <td>{{data.var192 ? data.var192 : '-'}}</td>
  <td>{{data.var192 ? data.var192 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="4">Aplicación Flúor Barniz</td>
  <td colspan="2" rowspan="2">No gestantes</td>
  <td colspan="2">Inician</td>
  <td>{{data.var193 ? data.var193 : '-'}}</td>
  <td>{{data.var194 ? data.var194 : '-'}}</td>
  <td>{{parseInt(data.var193) + parseInt(data.var194)}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>{{data.var195 ? data.var195 : '-'}}</td>
  <td>{{data.var196 ? data.var196 : '-'}}</td>
  <td>{{parseInt(data.var195) + parseInt(data.var196)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">Gestantes</td>
  <td colspan="2">Inician</td>
  <td>&nbsp;</td>
  <td>{{data.var197 ? data.var197 : '-'}}</td>
  <td>{{data.var197 ? data.var197 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2">Controlado</td>
  <td>&nbsp;</td>
  <td>{{data.var198 ? data.var198 : '-'}}</td>
  <td>{{data.var198 ? data.var198 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="4">Raspaje Dental</td>
  <td colspan="2" rowspan="2">No gestantes</td>
  <td colspan="2">Inician</td>
  <td>{{data.var199 ? data.var199 : '-'}}</td>
  <td>{{data.var200 ? data.var200 : '-'}}</td>
  <td>{{parseInt(data.var199) + parseInt(data.var200)}}</td>
 </tr>
 <tr>
  <td colspan="2">Tratado</td>
  <td>{{data.var201 ? data.var201 : '-'}}</td>
  <td>{{data.var202 ? data.var202 : '-'}}</td>
  <td>{{parseInt(data.var201) + parseInt(data.var202)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">Gestantes</td>
  <td colspan="2">Inician</td>
  <td>&nbsp;</td>
  <td>{{data.var203 ? data.var203 : '-'}}</td>
  <td>{{data.var203 ? data.var203 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2">Tratado</td>
  <td>&nbsp;</td>
  <td>{{data.var204 ? data.var204 : '-'}}</td>
  <td>{{data.var204 ? data.var204 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
<tbody><tr>
  <td colspan="5" rowspan="2"><b>PRESTACIONES DE SALUD MENTAL EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="3">Entrevista de Tamizaje</td>
  <td colspan="4">Violencia</td>
  <td>{{data.var205 ? data.var205 : '-'}}</td>
  <td>{{data.var206 ? data.var206 : '-'}}</td>
  <td>{{parseInt(data.var205) + parseInt(data.var206)}}</td>
 </tr>
 <tr>
  <td colspan="4">Alcohol y Drogas</td>
  <td>{{data.var211 ? data.var211 : '-'}}</td>
  <td>{{data.var212 ? data.var212 : '-'}}</td>
  <td>{{parseInt(data.var211) + parseInt(data.var212)}}</td>
 </tr>
 <tr>
  <td colspan="4">Trastornos Depresivos</td>
  <td>{{data.var213 ? data.var213 : '-'}}</td>
  <td>{{data.var214 ? data.var214 : '-'}}</td>
  <td>{{parseInt(data.var213) + parseInt(data.var214)}}</td>
 </tr>
 <tr>
  <td rowspan="6">Tamizaje Positivo</td>
  <td colspan="4">Problemas relacionados con violencia</td>
  <td>{{data.var215 ? data.var215 : '-'}}</td>
  <td>{{data.var216 ? data.var216 : '-'}}</td>
  <td>{{parseInt(data.var215) + parseInt(data.var216)}}</td>
 </tr>
 <tr>
  <td colspan="4">Problemas Relacionados con el Uso de Tabaco</td>
  <td>{{data.var217 ? data.var217 : '-'}}</td>
  <td>{{data.var218 ? data.var218 : '-'}}</td>
  <td>{{parseInt(data.var217) + parseInt(data.var218)}}</td>
 </tr>
 <tr>
  <td colspan="4">Problemas Sociales Relacionados con el Uso de Alcohol</td>
  <td>{{data.var219 ? data.var219 : '-'}}</td>
  <td>{{data.var220 ? data.var220 : '-'}}</td>
  <td>{{parseInt(data.var219) + parseInt(data.var220)}}</td>
 </tr>
 <tr>
  <td colspan="4">Problemas Sociales Relacionados con el Uso de drogas</td>
  <td>{{data.var221 ? data.var221 : '-'}}</td>
  <td>{{data.var222 ? data.var222 : '-'}}</td>
  <td>{{parseInt(data.var221) + parseInt(data.var222)}}</td>
 </tr>
 <tr>
  <td colspan="4">Depresión</td>
  <td>{{data.var223 ? data.var223 : '-'}}</td>
  <td>{{data.var224 ? data.var224 : '-'}}</td>
  <td>{{parseInt(data.var223) + parseInt(data.var224)}}</td>
 </tr>
 <tr>
  <td colspan="4">Psicosis</td>
  <td>{{data.var225 ? data.var225 : '-'}}</td>
  <td>{{data.var226 ? data.var226 : '-'}}</td>
  <td>{{parseInt(data.var225) + parseInt(data.var226)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>      
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
<tbody><tr>
  <td colspan="5" rowspan="2"><b>DETECCIÓN DE TBC EN ADULTOS</b></td>
  <td colspan="2"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="5">Sintomáticos Respiratorios Examinados (TBC)</td>
  <td>{{data.var227 ? data.var227 : '-'}}</td>
  <td>{{data.var228 ? data.var227 : '-'}}</td>
  <td>{{parseInt(data.var227) + parseInt(data.var228)}}</td>
 </tr>
 <tr>
  <td colspan="5">Sintomáticos Respiratorios Identificados</td>
  <td>{{data.var229 ? data.var229 : '-'}}</td>
  <td>{{data.var230 ? data.var230 : '-'}}</td>
  <td>{{parseInt(data.var229) + parseInt(data.var230)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
  <tbody><tr>
  <td colspan="5" rowspan="2" style="text-align:center"><b>PRESTACIONES DE SALUD SEXUAL Y REPRODUCTIVA EN ADULTOS<br>(GESTANTES Y NO GESTANTES)</b></td>
  <td colspan="2" style="text-align:center"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26"><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="5">Nº de personas tamizadas para VIH (incluye datos de ESNSSR y ESN TB)</td>
  <td>{{data.var231 ? data.var231 : '-'}}</td>
  <td>{{data.var232 ? data.var232 : '-'}}</td>
  <td>{{parseInt(data.var231) + parseInt(data.var232)}}</td>
 </tr>
 <tr>
  <td colspan="5">Nº de personas tamizadas para VIH con resultado reactivo<br>(incuye datos de ESNSSR y ESN TB)</td>
  <td>{{data.var233 ? data.var233 : '-'}}</td>
  <td>{{data.var234 ? data.var234 : '-'}}</td>
  <td>{{parseInt(data.var233) + parseInt(data.var234)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="4" style="text-align:center">Gestantes Atendidas<br>(1º Control Prenatal)</td>
  <td colspan="3" style="text-align:center"><b>TOTAL</b></td>
  <td>&nbsp;</td>
  <td>{{parseInt(data.var235) + parseInt(data.var236) + parseInt(data.var237)}}</td>
  <td>{{parseInt(data.var235) + parseInt(data.var236) + parseInt(data.var237)}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">en 1º Trimestre de Gestación</td>
  <td>&nbsp;</td>
  <td>{{data.var235 ? data.var235 : '-'}}</td>
  <td>{{data.var235 ? data.var235 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">en 2º Trimestre de Gestación</td>
  <td>&nbsp;</td>
  <td>{{data.var236 ? data.var236 : '-'}}</td>
  <td>{{data.var236 ? data.var236 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">en 3º Trimestre de Gestación</td>
  <td>&nbsp;</td>
  <td>{{data.var237 ? data.var237 : '-'}}</td>
  <td>{{data.var237 ? data.var237 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5">Gestantes Controladas (6º Control Prenatal)</td>
  <td>&nbsp;</td>
  <td>{{data.var238 ? data.var238 : '-'}}</td>
  <td>{{data.var238 ? data.var238 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5">Gestantes con atención prenatal reenfocada</td>
  <td>&nbsp;</td>
  <td>{{data.var239 ? data.var239 : '-'}}</td>
  <td>{{data.var239 ? data.var239 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5">Suplementación con Sulfato Ferroso en Gestantes</td>
  <td>&nbsp;</td>
  <td>{{data.var240 ? data.var240 : '-'}}</td>
  <td>{{data.var240 ? data.var240 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5">Suplementación con Ácido Fólico en Gestantes</td>
  <td>&nbsp;</td>
  <td>{{data.var241 ? data.var241 : '-'}}</td>
  <td>{{data.var241 ? data.var241 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5">Parto</td>
  <td>&nbsp;</td>
  <td>{{data.var242 ? data.var242 : '-'}}</td>
  <td>{{data.var242 ? data.var242 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5">Toma de PAP</td>
  <td>&nbsp;</td>
  <td>{{data.var243 ? data.var243 : '-'}}</td>
  <td>{{data.var243 ? data.var243 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5">Entrega de Resultados PAP</td>
  <td>&nbsp;</td>
  <td>{{data.var244 ? data.var244 : '-'}}</td>
  <td>{{data.var244 ? data.var244 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5">Resultado positivo de PAP (Gestantes)</td>
  <td>&nbsp;</td>
  <td>{{data.var245 ? data.var245 : '-'}}</td>
  <td>{{data.var245 ? data.var245 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
  <tbody><tr>
  <td colspan="5" rowspan="2" style="text-align:center"><b>PRESTACIONES DE ITS-VIH EN ADULTOS</b></td>
  <td colspan="2" style="text-align:center"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td><b>MASCULINO</b></td>
  <td><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="3" rowspan="2" style="text-align:center">Consejería/Orientación en prevención<br>de ITS,VIH, Hepatitis B</td>
  <td colspan="2">1° Vez</td>
  <td>{{data.var246 ? data.var246 : '-'}}</td>
  <td>{{data.var247 ? data.var247 : '-'}}</td>
  <td>{{parseInt(data.var246) + parseInt(data.var247)}}</td>
 </tr>
 <tr>
  <td colspan="2">Más de una vez</td>
  <td>{{data.var248 ? data.var248 : '-'}}</td>
  <td>{{data.var249 ? data.var249 : '-'}}</td>
  <td>{{parseInt(data.var248) + parseInt(data.var249)}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">Consejería Pre-test para VIH</td>
  <td>{{data.var250 ? data.var250 : '-'}}</td>
  <td>{{data.var251 ? data.var251 : '-'}}</td>
  <td>{{parseInt(data.var250) + parseInt(data.var251)}}</td>
 </tr>
 <tr>
  <td colspan="5" height="26" style="text-align:center">Consejería Post-test positivo para VIH</td>
  <td>{{data.var252 ? data.var252 : '-'}}</td>
  <td>{{data.var253 ? data.var253 : '-'}}</td>
  <td>{{parseInt(data.var252) + parseInt(data.var253)}}</td>
 </tr>
 <tr>
  <td colspan="5" height="26" style="text-align:center">Consejería Post-test negativo para VIH</td>
  <td>{{data.var254 ? data.var254 : '-'}}</td>
  <td>{{data.var255 ? data.var255 : '-'}}</td>
  <td>{{parseInt(data.var254) + parseInt(data.var255)}}</td>
 </tr>
 <tr>
  <td colspan="3" rowspan="2" style="text-align:center">Tamizaje en Hepatitis B</td>
  <td colspan="2">Reactivo</td>
  <td>{{data.var256 ? data.var256 : '-'}}</td>
  <td>{{data.var257 ? data.var257 : '-'}}</td>
  <td>{{parseInt(data.var256) + parseInt(data.var257)}}</td>
 </tr>
 <tr>
  <td colspan="2" height="26" style="height:20.1pt;border-left:none">No Reactivo</td>
  <td>{{data.var258 ? data.var258 : '-'}}</td>
  <td>{{data.var259 ? data.var259 : '-'}}</td>
  <td>{{parseInt(data.var258) + parseInt(data.var259)}}</td>
 </tr>

 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
             
<tbody><tr>
  <td colspan="5" rowspan="2" style="text-align:center"><b>PRESTACIONES DE SALUD OCULAR EN ADULTOS</b></td>
  <td colspan="2" style="text-align:center"><b>30 años - 59 años</b></td>
  <td rowspan="2"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26" style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">Consejería en Salud Ocular</td>
  <td>{{data.var260 ? data.var260 : '-'}}</td>
  <td>{{data.var261 ? data.var261 : '-'}}</td>
  <td>{{parseInt(data.var260) + parseInt(data.var261)}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">Determinación de la agudeza visual</td>
  <td>{{data.var262 ? data.var262 : '-'}}</td>
  <td>{{data.var263 ? data.var263 : '-'}}</td>
  <td>{{parseInt(data.var262) + parseInt(data.var263)}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">Limitación visual moderada</td>
  <td>{{data.var264 ? data.var264 : '-'}}</td>
  <td>{{data.var265 ? data.var265 : '-'}}</td>
  <td>{{parseInt(data.var264) + parseInt(data.var265)}}</td>
 </tr>
 <tr>
  <td colspan="5" height="26" style="text-align:center">Catarata no especificada</td>
  <td>{{data.var266 ? data.var266 : '-'}}</td>
  <td>{{data.var267 ? data.var267 : '-'}}</td>
  <td>{{parseInt(data.var266) + parseInt(data.var267)}}</td>
 </tr>
 <tr>
  <td colspan="5" height="26" style="text-align:center">Examen de los ojos y la visión</td>
  <td>{{data.var268 ? data.var268 : '-'}}</td>
  <td>{{data.var269 ? data.var269 : '-'}}</td>
  <td>{{parseInt(data.var268) + parseInt(data.var269)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
        <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
                   
<tbody><tr>
  <td colspan="5" rowspan="2" style="text-align:center"><b>ACTIVIDADES PREVENTIVAS PROMOCIONALES EN ADULTOS</b></td>
  <td colspan="2" style="text-align:center"><b>30 años - 59 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26" style="text-align:center">MASCULINO</td>
  <td style="text-align:center" >FEMENINO</td>
 </tr>
 <tr>
  <td colspan="3" rowspan="3" style="text-align:center">Visita Familiar Integral</td>
  <td colspan="2" style="text-align:center">Con 1 Visita</td>
  <td>{{data.var270 ? data.var270 : '-'}}</td>
  <td>{{data.var271 ? data.var271 : '-'}}</td>
  <td>{{parseInt(data.var270) + parseInt(data.var271)}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">Con 2 Visitas</td>
  <td>{{data.var272 ? data.var272 : '-'}}</td>
  <td>{{data.var273 ? data.var273 : '-'}}</td>
  <td>{{parseInt(data.var272) + parseInt(data.var273)}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">Con 3 a + Visitas</td>
  <td>{{data.var274 ? data.var274 : '-'}}</td>
  <td>{{data.var275 ? data.var275 : '-'}}</td>
  <td>{{parseInt(data.var274) + parseInt(data.var275)}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">Visita Familiar Integral de Identificación de riesgos y necesidades.</td>
  <td>{{data.var276 ? data.var276 : '-'}}</td>
  <td>{{data.var277 ? data.var277 : '-'}}</td>
  <td>{{parseInt(data.var276) + parseInt(data.var277)}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">Visita Familiar Integral para cuidados esenciales</td>
  <td>{{data.var278 ? data.var278 : '-'}}</td>
  <td>{{data.var279 ? data.var279 : '-'}}</td>
  <td>{{parseInt(data.var278) + parseInt(data.var279)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
    <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
  <tbody><tr>
  <td colspan="5" rowspan="2" style="text-align:center"><b>INMUNIZACIONES EN ADULTOS</b></td>
  <td colspan="2" style="text-align:center"><b>30 años - 59 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26" style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="2" rowspan="3" style="text-align:center">Vacunación Diftotetánica (dT) <br>
    (No incluye Gestantes)<span style="mso-spacerun:yes">&nbsp;</span></td>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
  </span>=======&gt; DOSIS 1</td>
  <td>{{data.var280 ? data.var280 : '-'}}</td>
  <td>{{data.var281 ? data.var281 : '-'}}</td>
  <td>{{parseInt(data.var280) + parseInt(data.var281)}}</td>
 </tr>
 <tr>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 2</td>
  <td>{{data.var282 ? data.var282 : '-'}}</td>
  <td>{{data.var283 ? data.var283 : '-'}}</td>
  <td>{{parseInt(data.var282) + parseInt(data.var283)}}</td>
 </tr>
 <tr>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 3
  (Protegido)</td>
  <td>{{data.var284 ? data.var284 : '-'}}</td>
  <td>{{data.var285 ? data.var285 : '-'}}</td>
  <td>{{parseInt(data.var284) + parseInt(data.var285)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="3" style="text-align:center">Vacunación Diftotetánica (dT)<br> (SOLO Gestantes)</td>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 1</td>
  <td>&nbsp;</td>
  <td>{{data.var286 ? data.var286 : '-'}}</td>
  <td>{{data.var286 ? data.var286 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 2</td>
  <td>&nbsp;</td>
  <td>{{data.var287 ? data.var287 : '-'}}</td>
  <td>{{data.var287 ? data.var287 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 3
  (Protegida)</td>
  <td>&nbsp;</td>
  <td>{{data.var288 ? data.var288 : '-'}}</td>
  <td>{{data.var288 ? data.var288 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">Vacuna dTpa ( Gestantes )</td>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS ÚNICA (Protegida)</td>
  <td>&nbsp;</td>
  <td>{{data.var289 ? data.var289 : '-'}}</td>
  <td>{{data.var289 ? data.var289 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="3" style="text-align:center">Vacunación contra la Hepatitis B</td>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
  </span>=======&gt; DOSIS 1</td>
  <td>{{data.var290 ? data.var290 : '-'}}</td>
  <td>{{data.var291 ? data.var291 : '-'}}</td>
  <td>{{parseInt(data.var290) + parseInt(data.var291)}}</td>
 </tr>
 <tr>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 2</td>
  <td>{{data.var292 ? data.var292 : '-'}}</td>
  <td>{{data.var293 ? data.var293 : '-'}}</td>
  <td>{{parseInt(data.var292) + parseInt(data.var293)}}</td>
 </tr>
 <tr>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 3 (Protegido)</td>
  <td>{{data.var294 ? data.var294 : '-'}}</td>
  <td>{{data.var295 ? data.var295 : '-'}}</td>
  <td>{{parseInt(data.var294) + parseInt(data.var295)}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">Vacunación Influenza Estacional</td>
  <td colspan="3"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS ÚNICA</td>
  <td>{{data.var296 ? data.var296 : '-'}}</td>
  <td>{{data.var297 ? data.var297 : '-'}}</td>
  <td>{{parseInt(data.var296) + parseInt(data.var297)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
        <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
<tbody><tr>
  <td colspan="5" style="text-align:center"><b>SESIONES EN ADULTOS</b></td>
  <td style="text-align:center"><b>Nº</b></td>
  <td style="text-align:center"><b>PARTICIPANTES</b></td>
 </tr>
 <tr>
  <td>C0010</td>
  <td colspan="4" style="text-align:center">Demostrativa</td>
  <td>{{data.var298 ? data.var298 : '-'}}</td>
  <td>{{data.var299 ? data.var299 : '-'}}</td>
 </tr>
 <tr>
  <td>C0009</td>
  <td colspan="4" style="text-align:center">Educativa</td>
  <td>{{data.var300 ? data.var300 : '-'}}</td>
  <td>{{data.var301 ? data.var301 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">Campañas</td>
  <td>{{data.var302 ? data.var302 : '-'}}</td>
  <td>{{data.var303 ? data.var303 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="5" style="text-align:center">Talleres de habilidades sociales</td>
  <td>{{data.var304 ? data.var304 : '-'}}</td>
  <td>{{data.var305 ? data.var305 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
</tbody>
               </template>
           </v-simple-table>
        </v-col>
     <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
 <tbody><tr>
  <td colspan="5" rowspan="2" style="text-align:center"><b>OTRAS CONSEJERÍAS EN ADULTOS</b></td>
  <td colspan="2" style="text-align:center"><b>30 años - 59 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td>99403.01</td>
  <td colspan="4">Consejería Nutricional</td>
  <td>{{data.var306 ? data.var306 : '-'}}</td>
  <td>{{data.var307 ? data.var307 : '-'}}</td>
  <td>{{parseInt(data.var306) + parseInt(data.var307)}}</td>
 </tr>
 <tr>
  <td>99402.08</td>
  <td colspan="4">Consejería preventiva en factores de riesgo para el cáncer</td>
  <td>{{data.var308 ? data.var308 : '-'}}</td>
  <td>{{data.var309 ? data.var309 : '-'}}</td>
  <td>{{parseInt(data.var308) + parseInt(data.var309)}}</td>
 </tr>
 <tr>
  <td height="26">99401.31</td>
  <td colspan="4">Consejería en Prevención de Enfermedades no transmisibles</td>
  <td>{{data.var310 ? data.var310 : '-'}}</td>
  <td>{{data.var311 ? data.var311 : '-'}}</td>
  <td>{{parseInt(data.var310) + parseInt(data.var311)}}</td>
 </tr>
 <tr>
  <td>99401.15</td>
  <td colspan="4">Consejería en habilidades sociales</td>
  <td>{{data.var312 ? data.var312 : '-'}}</td>
  <td>{{data.var313 ? data.var313 : '-'}}</td>
  <td>{{parseInt(data.var312) + parseInt(data.var313)}}</td>
 </tr>
 <tr>
  <td>99173</td>
  <td colspan="4">Examen de agudeza visual cuantitativa bilateral</td>
  <td>{{data.var314 ? data.var314 : '-'}}</td>
  <td>{{data.var315 ? data.var315 : '-'}}</td>
  <td>{{parseInt(data.var314) + parseInt(data.var315)}}</td>
 </tr>
 <tr>
  <td>99174</td>
  <td colspan="4">Tamizaje ocular con instrumento (fototamizaje, refracción automatizada) bilateral</td>
  <td>{{data.var316 ? data.var316 : '-'}}</td>
  <td>{{data.var317 ? data.var317 : '-'}}</td>
  <td>{{parseInt(data.var316) + parseInt(data.var317)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="142"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
 </tr>
 <!--[endif]-->
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
            await this.axios.get(this.$api_url + '/reporte/' + this.tabla + '/1-317',{
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

<template>
    <v-row >

    <v-col md="12" style="text-align:center">
        <h2>ETAPA DE VIDA: JOVEN</h2> 
    </v-col>
        <v-col md="12">
           <v-simple-table dense>
               <template v-slot:default>
 <tbody><tr>
  <td colspan="3" rowspan="2" style="text-align:center"><b>COBERTURA EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="3">Atendidos</td>
  <td>{{data.cob1 ? data.cob1 : '-'}}</td>
  <td>{{data.cob2 ? data.cob2 : '-'}}</td>
  <td>{{parseInt(data.cob1) + parseInt(data.cob2)}}</td>
 </tr>
 <tr>
  <td colspan="3">Atenciones</td>
  <td>{{data.cob3 ? data.cob3 : '-'}}</td>
  <td>{{data.cob4 ? data.cob4 : '-'}}</td>
  <td>{{parseInt(data.cob3) + parseInt(data.cob4)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="3" rowspan="2" style="text-align:center"><b>ATENCIÓN INTEGRAL DE SALUD EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26" style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="2">Plan de Atención Integral</td>
  <td colspan="2">Elaborado</td>
  <td>{{data.var1 ? data.var1 : '-'}}</td>
  <td>{{data.var2 ? data.var2 : '-'}}</td>
  <td>{{parseInt(data.var1) + parseInt(data.var2)}}</td>
 </tr>
 <tr>
  <td colspan="2">Ejecutado</td>
  <td>{{data.var3 ? data.var3 : '-'}}</td>
  <td>{{data.var4 ? data.var4 : '-'}}</td>
  <td>{{parseInt(data.var3) + parseInt(data.var4)}}</td>
 </tr>
 <tr>
  <td>Consejería Integral</td>
  <td colspan="2">Finalizada (TA)</td>
  <td>{{data.var5 ? data.var5 : '-'}}</td>
  <td>{{data.var6 ? data.var6 : '-'}}</td>
  <td>{{parseInt(data.var5) + parseInt(data.var6)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="3" rowspan="2" style="text-align:center"><b>EVALUACIÓN NUTRICIONAL EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26" style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="5">Índice de Masa Corporal (IMC)<span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
  <td colspan="2">Obesidad</td>
  <td>{{data.var7 ? data.var7 : '-'}}</td>
  <td>{{data.var8 ? data.var8 : '-'}}</td>
  <td>{{parseInt(data.var7) + parseInt(data.var8)}}</td>
 </tr>
 <tr>
  <td colspan="2">Sobrepeso</td>
  <td>{{data.var9 ? data.var9 : '-'}}</td>
  <td>{{data.var10 ? data.var10 : '-'}}</td>
  <td>{{parseInt(data.var9) + parseInt(data.var10)}}</td>
 </tr>
 <tr>
  <td colspan="2">Normal</td>
  <td>{{data.var11 ? data.var11 : '-'}}</td>
  <td>{{data.var12 ? data.var12 : '-'}}</td>
  <td>{{parseInt(data.var11) + parseInt(data.var12)}}</td>
 </tr>
 <tr>
  <td colspan="2">Delgadez</td>
  <td>{{data.var13 ? data.var13 : '-'}}</td>
  <td>{{data.var14 ? data.var14 : '-'}}</td>
  <td>{{parseInt(data.var13) + parseInt(data.var14)}}</td>
 </tr>
 <tr>
  <td colspan="2">Delgadez Severa</td>
  <td>{{data.var15 ? data.var15 : '-'}}</td>
  <td>{{data.var16 ? data.var16 : '-'}}</td>
  <td>{{parseInt(data.var15) + parseInt(data.var16)}}</td>
 </tr>
 <tr>
  <td rowspan="3">Talla / Edad</td>
  <td colspan="2">Talla Alta</td>
  <td>{{data.var17 ? data.var17 : '-'}}</td>
  <td>{{data.var18 ? data.var18 : '-'}}</td>
  <td>{{parseInt(data.var17) + parseInt(data.var18)}}</td>
 </tr>
 <tr>
  <td colspan="2">Normal</td>
  <td>{{data.var19 ? data.var19 : '-'}}</td>
  <td>{{data.var20 ? data.var20 : '-'}}</td>
  <td>{{parseInt(data.var19) + parseInt(data.var20)}}</td>
 </tr>
 <tr>
  <td colspan="2">Talla Baja</td>
  <td>{{data.var21 ? data.var21 : '-'}}</td>
  <td>{{data.var22 ? data.var22 : '-'}}</td>
  <td>{{parseInt(data.var21) + parseInt(data.var22)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="3" rowspan="2" style="text-align:center"><b>PRESTACIÓN DE SALUD BUCAL EN JÓVENES (<span style="mso-spacerun:yes">&nbsp; </span>GESTANTES Y NO GESTANTES )</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26" style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="4">Examen Odontológico</td>
  <td rowspan="2">No Gestantes</td>
  <td>Inician</td>
  <td>{{data.var23 ? data.var23 : '-'}}</td>
  <td>{{data.var24 ? data.var24 : '-'}}</td>
  <td>{{parseInt(data.var23) + parseInt(data.var24)}}</td>
 </tr>
 <tr>
  <td>Caso Ttdo</td>
  <td>{{data.var25 ? data.var25 : '-'}}</td>
  <td>{{data.var26 ? data.var26 : '-'}}</td>
  <td>{{parseInt(data.var25) + parseInt(data.var26)}}</td>
 </tr>
 <tr>
  <td rowspan="2">Gestantes</td>
  <td>Inician</td>
  <td>&nbsp;</td>
  <td>{{data.var27 ? data.var27 : '-'}}</td>
  <td>{{data.var27 ? data.var27 : '-'}}</td>
 </tr>
 <tr>
  <td>Caso Ttdo</td>
  <td>&nbsp;</td>
  <td>{{data.var28 ? data.var28 : '-'}}</td>
  <td>{{data.var28 ? data.var28 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">Instrucción de Higiene Oral</td>
  <td>Inician</td>
  <td>{{data.var29 ? data.var29 : '-'}}</td>
  <td>{{data.var30 ? data.var30 : '-'}}</td>
  <td>{{parseInt(data.var29) + parseInt(data.var30)}}</td>
 </tr>
 <tr>
  <td>Caso Ttdo</td>
  <td>{{data.var31 ? data.var31 : '-'}}</td>
  <td>{{data.var32 ? data.var32 : '-'}}</td>
  <td>{{parseInt(data.var31) + parseInt(data.var32)}}</td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2">Asesoría nutricional para el control de enfermedades dentales</td>
  <td>Inician</td>
  <td>{{data.var33 ? data.var33 : '-'}}</td>
  <td>{{data.var34 ? data.var34 : '-'}}</td>
  <td>{{parseInt(data.var33) + parseInt(data.var34)}}</td>
 </tr>
 <tr>
  <td>Caso Ttdo</td>
  <td>{{data.var35 ? data.var35 : '-'}}</td>
  <td>{{data.var36 ? data.var36 : '-'}}</td>
  <td>{{parseInt(data.var35) + parseInt(data.var36)}}</td>
 </tr>
 <tr>
  <td rowspan="2">Alta Básica Odontologica (ABO)</td>
  <td colspan="2">No Gestantes</td>
  <td>{{data.var37 ? data.var37 : '-'}}</td>
  <td>{{data.var38 ? data.var38 : '-'}}</td>
  <td>{{parseInt(data.var37) + parseInt(data.var38)}}</td>
 </tr>
 <tr>
  <td colspan="2">Gestantes</td>
  <td>&nbsp;</td>
  <td>{{data.var39 ? data.var39 : '-'}}</td>
  <td>{{data.var39 ? data.var39 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="3" rowspan="2" style="text-align:center"><b>DETECCIÓN DE ENFERMEDADES NO TRANSMISIBLES EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="3">Valoración Clínica de Factores de Riesgo</td>
  <td>{{data.var40 ? data.var40 : '-'}}</td>
  <td>{{data.var41 ? data.var41 : '-'}}</td>
 <td>{{parseInt(data.var40) + parseInt(data.var41)}}</td>
 </tr>
 <tr>
  <td colspan="3">Sedentarismo</td>
  <td>{{data.var42 ? data.var42 : '-'}}</td>
  <td>{{data.var43 ? data.var43 : '-'}}</td>
  <td>{{parseInt(data.var42) + parseInt(data.var43)}}</td>
 </tr>
 <tr>
  <td colspan="3">Dislipidemia</td>
  <td>{{data.var44 ? data.var44 : '-'}}</td>
  <td>{{data.var45 ? data.var45 : '-'}}</td>
  <td>{{parseInt(data.var44) + parseInt(data.var45)}}</td>
 </tr>
 <tr>
  <td colspan="3">Glisemia basal alterada (de 100 a 139 mg/dl) - Prediabetes</td>
  <td>{{data.var46 ? data.var46 : '-'}}</td>
  <td>{{data.var47 ? data.var47 : '-'}}</td>
  <td>{{parseInt(data.var46) + parseInt(data.var47)}}</td>
 </tr>
 <tr>
  <td colspan="3">Tolerancia a la glucosa alterada (de 140 a 199 mg/dl) - Prediabetes</td>
  <td>{{data.var48 ? data.var48 : '-'}}</td>
  <td>{{data.var49 ? data.var49 : '-'}}</td>
  <td>{{parseInt(data.var48) + parseInt(data.var49)}}</td>
 </tr>
 <tr>
  <td colspan="3">Examen de Hemoglobina</td>
  <td>{{data.var50 ? data.var50 : '-'}}</td>
  <td>{{data.var51 ? data.var51 : '-'}}</td>
  <td>{{parseInt(data.var50) + parseInt(data.var51)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0"  >
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="3" rowspan="2" style="text-align:center">P<b>RESTACIONES DE SALUD SEXUAL Y REPRODUCTIVA EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="3">Consejería para la prevención de ITS</td>
  <td colspan="2" style="text-align:center">1ra Sesión</td>
  <td>{{data.var52 ? data.var52 : '-'}}</td>
  <td>{{data.var53 ? data.var53 : '-'}}</td>
  <td>{{parseInt(data.var52) + parseInt(data.var53)}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">2da Sesión</td>
  <td>{{data.var54 ? data.var54 : '-'}}</td>
  <td>{{data.var55 ? data.var55 : '-'}}</td>
  <td>{{parseInt(data.var54) + parseInt(data.var55)}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">3ra a + Sesiones</td>
  <td>{{data.var56 ? data.var56 : '-'}}</td>
  <td>{{data.var57 ? data.var57 : '-'}}</td>
  <td>{{parseInt(data.var56) + parseInt(data.var57)}}</td>
 </tr>
 <tr>
  <td colspan="3">Nº de personas tamizadas para VIH (incluye datos de ESNSSR y ESN TB)</td>
  <td>{{data.var58 ? data.var58 : '-'}}</td>
  <td>{{data.var59 ? data.var59 : '-'}}</td>
  <td>{{parseInt(data.var58) + parseInt(data.var59)}}</td>
 </tr>
 <tr>
  <td colspan="3">Nº de personas tamizadas para VIH con resultado
  reactivo (incuye datos de ESNSSR y ESN TB)</td>
  <td>{{data.var60 ? data.var60 : '-'}}</td>
  <td>{{data.var61 ? data.var61 : '-'}}</td>
  <td>{{parseInt(data.var60) + parseInt(data.var61)}}</td>
 </tr>
 <tr>
  <td rowspan="4" style="text-align:center">Gestantes Atendidas<br>(1º Control Prenatal)</td>
  <td colspan="2" style="text-align:center"><b>TOTAL</b></td>
  <td>&nbsp;</td>
  <td>{{parseInt(data.var62) + parseInt(data.var63) + parseInt(data.var64)}}</td>
  <td>{{parseInt(data.var62) + parseInt(data.var63) + parseInt(data.var64)}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">en 1º Trimestre de Gestación</td>
  <td>&nbsp;</td>
  <td>{{data.var62 ? data.var62 : '-'}}</td>
  <td>{{data.var62 ? data.var62 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">en 2º Trimestre de Gestación</td>
  <td>&nbsp;</td>
  <td>{{data.var63 ? data.var63 : '-'}}</td>
  <td>{{data.var63 ? data.var63 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">en 3º Trimestre de Gestación</td>
  <td>&nbsp;</td>
  <td>{{data.var64 ? data.var64 : '-'}}</td>
  <td>{{data.var64 ? data.var64 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Gestantes Controladas (6º Control Prenatal)</td>
  <td>&nbsp;</td>
  <td>{{data.var65 ? data.var65 : '-'}}</td>
  <td>{{data.var65 ? data.var65 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Gestantes con atención prenatal reenfocada</td>
  <td>&nbsp;</td>
  <td>{{data.var66 ? data.var66 : '-'}}</td>
  <td>{{data.var66 ? data.var66 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Suplementación con Sulfato Ferroso en Gestantes</td>
  <td>&nbsp;</td>
  <td>{{data.var67 ? data.var67 : '-'}}</td>
  <td>{{data.var67 ? data.var67 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Suplementación con Ácido Fólico en Gestantes</td>
  <td>&nbsp;</td>
  <td>{{data.var68 ? data.var68 : '-'}}</td>
  <td>{{data.var68 ? data.var68 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Parto</td>
  <td>&nbsp;</td>
  <td>{{data.var69 ? data.var69 : '-'}}</td>
  <td>{{data.var69 ? data.var69 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Toma de PAP</td>
  <td>&nbsp;</td>
  <td>{{data.var70 ? data.var70 : '-'}}</td>
  <td>{{data.var70 ? data.var70 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Entrega de Resultados PAP</td>
  <td>&nbsp;</td>
  <td>{{data.var71 ? data.var71 : '-'}}</td>
  <td>{{data.var71 ? data.var71 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Resultado positivo de PAP (Gestantes)</td>
  <td>&nbsp;</td>
  <td>{{data.var72 ? data.var72 : '-'}}</td>
  <td>{{data.var72 ? data.var72 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="3" style="text-align:center">Consejeria y orientacion general para Planificación Familiar</td>
  <td>{{data.var73 ? data.var73 : '-'}}</td>
  <td>{{data.var74 ? data.var74 : '-'}}</td>
  <td>{{parseInt(data.var73) + parseInt(data.var74)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="2" rowspan="2" style="text-align:center"><b>MÉTODO DE PLANIFICACIÓN FAMILIAR EN JÓVENES</b></td>
  <td  style="text-align:center"><b>Activ. (A)</b></td>
  <td colspan="2" style="text-align:center"><b>TIPO DE USUARIOS (18a-29a)</b></td>
 </tr>
 <tr>
  <td  style="text-align:center"><b>Insumo (I)</b></td>
  <td  style="text-align:center"><b>Nuevas</b></td>
  <td  style="text-align:center"><b>Continuadoras</b></td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2"  style="text-align:center"><b>DIU</b></td>
  <td  style="text-align:center">A</td>
  <td>{{data.var75 ? data.var75 : '-'}}</td>
  <td>{{data.var76 ? data.var76 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">I</td>
  <td>{{data.var77 ? data.var77 : '-'}}</td>
  <td>{{data.var78 ? data.var78 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="8"  style="text-align:center">Hormonal</td>
  <td rowspan="2">Oral combinado</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var79 ? data.var79 : '-'}}</td>
  <td>{{data.var80 ? data.var80 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">I</td>
  <td>{{data.var81 ? data.var81 : '-'}}</td>
  <td>{{data.var82 ? data.var82 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="2">Inyectable trimestral</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var83 ? data.var83 : '-'}}</td>
  <td>{{data.var84 ? data.var84 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">I</td>
  <td>{{data.var85 ? data.var85 : '-'}}</td>
  <td>{{data.var86 ? data.var86 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="2">Inyectable mensual</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var87 ? data.var87 : '-'}}</td>
  <td>{{data.var88 ? data.var88 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">I</td>
  <td>{{data.var89 ? data.var89 : '-'}}</td>
  <td>{{data.var90 ? data.var90 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="2">Implante</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var91 ? data.var91 : '-'}}</td>
  <td>{{data.var92 ? data.var92 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">I</td>
  <td>{{data.var93 ? data.var93 : '-'}}</td>
  <td>{{data.var94 ? data.var94 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="4"  style="text-align:center">Barrera</td>
  <td rowspan="2">Condón masculino</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var95 ? data.var95 : '-'}}</td>
  <td>{{data.var96 ? data.var96 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">I</td>
  <td>{{data.var97 ? data.var97 : '-'}}</td>
  <td>{{data.var98 ? data.var98 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="2">Condón femenino</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var99 ? data.var99 : '-'}}</td>
  <td>{{data.var100 ? data.var100 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">I</td>
  <td>{{data.var101 ? data.var101 : '-'}}</td>
  <td>{{data.var102 ? data.var102 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2"  style="text-align:center">AQV Femenino</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var103 ? data.var103 : '-'}}</td>
  <td>{{data.var104 ? data.var104 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2"  style="text-align:center">AQV Masculino</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var105 ? data.var105 : '-'}}</td>
  <td>{{data.var106 ? data.var106 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2"  style="text-align:center">MELA</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var107 ? data.var107 : '-'}}</td>
  <td>{{data.var108 ? data.var108 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="3"  style="text-align:center">Abstinencia periódica</td>
  <td  style="text-align:center">Billings</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var109 ? data.var109 : '-'}}</td>
  <td>{{data.var110 ? data.var110 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">Ritmo</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var111 ? data.var111 : '-'}}</td>
  <td>{{data.var112 ? data.var112 : '-'}}</td>
 </tr>
 <tr>
  <td  style="text-align:center">Días fijos (MDF)</td>
  <td  style="text-align:center">A</td>
  <td>{{data.var113 ? data.var113 : '-'}}</td>
  <td>{{data.var114 ? data.var114 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="2" rowspan="2" style="text-align:center"><b>MÉTODO DE PLANIFICACIÓN FAMILIAR EN JÓVENES</b><br>
    <b>(ERROR DE REGISTRO )</b></td>
  <td colspan="2" style="text-align:center"><b>TIPO DE USUARIAS (18a-29a)</b></td>
 </tr>
 <tr>
  <td style="text-align:center"><b>Nuevas</b></td>
  <td style="text-align:center"><b>Continuadoras</b></td>
 </tr>
 <tr>
  <td colspan="2" rowspan="2" style="text-align:center">DIU</td>
  <td rowspan="2">{{data.var115 ? data.var115 : '-'}}</td>
  <td rowspan="2">{{data.var116 ? data.var116 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="8">Hormonal</td>
  <td rowspan="2" style="text-align:center">Oral combinado</td>
  <td rowspan="2">{{data.var117 ? data.var117 : '-'}}</td>
  <td rowspan="2">{{data.var118 ? data.var118 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="2" style="text-align:center">Inyectable trimestral</td>
  <td>{{data.var119 ? data.var119 : '-'}}</td>
  <td>{{data.var120 ? data.var120 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
    <td style="text-align:center">Inyectable mensual</td>
    <td>{{data.var121 ? data.var121 : '-'}}</td>
    <td>{{data.var122 ? data.var122 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="2">Implante</td>
  <td rowspan="2">{{data.var123 ? data.var123 : '-'}}</td>
  <td rowspan="2">{{data.var124 ? data.var124 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="4">Barrera</td>
  <td rowspan="2">Condón masculino</td>
  <td rowspan="2">{{data.var125 ? data.var125 : '-'}}</td>
  <td rowspan="2">{{data.var126 ? data.var126 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td rowspan="2">Condón femenino</td>
  <td rowspan="2">{{data.var127 ? data.var127 : '-'}}</td>
  <td rowspan="2">{{data.var128 ? data.var128 : '-'}}</td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">AQV Femenino</td>
  <td>{{data.var129 ? data.var129 : '-'}}</td>
  <td>{{data.var130 ? data.var130 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">AQV Masculino</td>
  <td>{{data.var131 ? data.var131 : '-'}}</td>
  <td>{{data.var132 ? data.var132 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2" style="text-align:center">MELA</td>
  <td>{{data.var133 ? data.var133 : '-'}}</td>
  <td>{{data.var134 ? data.var134 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="3">Abstinencia periódica</td>
  <td style="text-align:center">Billings</td>
  <td>{{data.var135 ? data.var135 : '-'}}</td>
  <td>{{data.var136 ? data.var136 : '-'}}</td>
 </tr>
 <tr>
  <td style="text-align:center">Ritmo</td>
  <td>{{data.var137 ? data.var137 : '-'}}</td>
  <td>{{data.var138 ? data.var138 : '-'}}</td>
 </tr>
 <tr>
  <td style="text-align:center">Días fijos (MDF)</td>
  <td>{{data.var139 ? data.var139 : '-'}}</td>
  <td>{{data.var140 ? data.var140 : '-'}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="185"></td>
  <td width="199"></td>
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
  <td colspan="3" rowspan="2" style="text-align:center"><b>PRESTACIONES DE SALUD MENTAL EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="5">Entrevista de Tamizaje</td>
  <td colspan="2">Violencia Familiar</td>
  <td>{{data.var141 ? data.var141 : '-'}}</td>
  <td>{{data.var142 ? data.var142 : '-'}}</td>
  <td>{{parseInt(data.var141) + parseInt(data.var142)}}</td>
 </tr>
 <tr>
  <td colspan="2">Violencia Sexual</td>
  <td>{{data.var143 ? data.var143 : '-'}}</td>
  <td>{{data.var144 ? data.var144 : '-'}}</td>
  <td>{{parseInt(data.var143) + parseInt(data.var144)}}</td>
 </tr>
 <tr>
  <td colspan="2">Violencia Social</td>
  <td>{{data.var145 ? data.var145 : '-'}}</td>
  <td>{{data.var146 ? data.var146 : '-'}}</td>
  <td>{{parseInt(data.var145) + parseInt(data.var146)}}</td>
 </tr>
 <tr>
  <td colspan="2">Alcohol y Drogas</td>
  <td>{{data.var147 ? data.var147 : '-'}}</td>
  <td>{{data.var148 ? data.var148 : '-'}}</td>
  <td>{{parseInt(data.var147) + parseInt(data.var148)}}</td>
 </tr>
 <tr>
  <td colspan="2">Trastornos Depresivos</td>
  <td>{{data.var149 ? data.var149 : '-'}}</td>
  <td>{{data.var150 ? data.var150 : '-'}}</td>
  <td>{{parseInt(data.var149) + parseInt(data.var150)}}</td>
 </tr>
 <tr>
  <td rowspan="6">Tamizaje Positivo</td>
  <td colspan="2">Problemas relacionados con violencia</td>
  <td>{{data.var151 ? data.var151 : '-'}}</td>
  <td>{{data.var152 ? data.var152 : '-'}}</td>
  <td>{{parseInt(data.var151) + parseInt(data.var152)}}</td>
 </tr>
 <tr>
  <td colspan="2">Problemas Relacionados con el Uso de Tabaco</td>
  <td>{{data.var153 ? data.var153 : '-'}}</td>
  <td>{{data.var154 ? data.var154 : '-'}}</td>
  <td>{{parseInt(data.var153) + parseInt(data.var154)}}</td>
 </tr>
 <tr>
  <td colspan="2">Problemas Sociales Relacionados con el Uso de Alcohol</td>
  <td>{{data.var155 ? data.var155 : '-'}}</td>
  <td>{{data.var156 ? data.var156 : '-'}}</td>
  <td>{{parseInt(data.var155) + parseInt(data.var156)}}</td>
 </tr>
 <tr>
  <td colspan="2">Problemas Sociales Relacionados con el Uso de drogas</td>
  <td>{{data.var157 ? data.var157 : '-'}}</td>
  <td>{{data.var158 ? data.var158 : '-'}}</td>
  <td>{{parseInt(data.var157) + parseInt(data.var158)}}</td>
 </tr>
 <tr>
  <td colspan="2">Depresión</td>
  <td>{{data.var159 ? data.var159 : '-'}}</td>
  <td>{{data.var160 ? data.var160 : '-'}}</td>
  <td>{{parseInt(data.var159) + parseInt(data.var160)}}</td>
 </tr>
 <tr>
  <td colspan="2">Psicosis</td>
  <td>{{data.var161 ? data.var161 : '-'}}</td>
  <td>{{data.var162 ? data.var162 : '-'}}</td>
  <td>{{parseInt(data.var161) + parseInt(data.var162)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="3" rowspan="2" style="text-align:center"><b>INMUNIZACIONES EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td rowspan="3">Vacunación Diftotetánica (dT) <br>
(No incluye Gestantes)<span style="mso-spacerun:yes">&nbsp;</span></td>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 1</td>
  <td>{{data.var163 ? data.var163 : '-'}}</td>
  <td>{{data.var164 ? data.var164 : '-'}}</td>
  <td>{{parseInt(data.var163) + parseInt(data.var164)}}</td>
 </tr>
 <tr>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 2</td>
  <td>{{data.var165 ? data.var165 : '-'}}</td>
  <td>{{data.var166 ? data.var166 : '-'}}</td>
  <td>{{parseInt(data.var165) + parseInt(data.var166)}}</td>
 </tr>
 <tr>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 3
  (Protegido)</td>
  <td>{{data.var167 ? data.var167 : '-'}}</td>
  <td>{{data.var168 ? data.var168 : '-'}}</td>
  <td>{{parseInt(data.var167) + parseInt(data.var168)}}</td>
 </tr>
 <tr>
  <td rowspan="3">Vacunación Diftotetánica (dT)<br>(SOLO Gestantes)</td>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 1</td>
  <td>&nbsp;</td>
  <td>{{data.var169 ? data.var169 : '-'}}</td>
  <td>{{data.var169 ? data.var169 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 2</td>
  <td>&nbsp;</td>
  <td>{{data.var170 ? data.var170 : '-'}}</td>
  <td>{{data.var170 ? data.var170 : '-'}}</td>
 </tr>
 <tr>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 3
  (Protegida)</td>
  <td>&nbsp;</td>
  <td>{{data.var171 ? data.var171 : '-'}}</td>
  <td>{{data.var171 ? data.var171 : '-'}}</td>
 </tr>
 <tr>
  <td>Vacuna dTpa ( Gestantes )</td>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS ÚNICA (Protegida)</td>
  <td>&nbsp;</td>
  <td>{{data.var172 ? data.var172 : '-'}}</td>
  <td>{{data.var172 ? data.var172 : '-'}}</td>
 </tr>
 <tr>
  <td rowspan="3">Vacunación contra la Hepatitis B</td>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 1</td>
  <td>{{data.var173 ? data.var173 : '-'}}</td>
  <td>{{data.var174 ? data.var174 : '-'}}</td>
  <td>{{parseInt(data.var173) + parseInt(data.var174)}}</td>
 </tr>
 <tr>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 2</td>
  <td>{{data.var175 ? data.var175 : '-'}}</td>
  <td>{{data.var176 ? data.var176 : '-'}}</td>
  <td>{{parseInt(data.var175) + parseInt(data.var176)}}</td>
 </tr>
 <tr>
  <td colspan="2"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>=======&gt; DOSIS 3
  (Protegido)</td>
  <td>{{data.var177 ? data.var177 : '-'}}</td>
  <td>{{data.var178 ? data.var178 : '-'}}</td>
  <td>{{parseInt(data.var177) + parseInt(data.var178)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="3" rowspan="2" style="text-align:center"><b>DETECCIÓN DE TBC EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="3">Sintomáticos Respiratorios Examinados (TBC)</td>
  <td>{{data.var179 ? data.var179 : '-'}}</td>
  <td>{{data.var180 ? data.var180 : '-'}}</td>
  <td>{{parseInt(data.var179) + parseInt(data.var180)}}</td>
 </tr>
 <tr>
  <td colspan="3">Sintomáticos Respiratorios Identificados</td>
 <td>{{data.var181 ? data.var181 : '-'}}</td>
 <td>{{data.var182 ? data.var182 : '-'}}</td>
  <td>{{parseInt(data.var181) + parseInt(data.var182)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
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
  <td colspan="4" rowspan="2" style="text-align:center"><b>DIAGNÓSTICOS MÁS FRECUENTES EN JÓVENES</b></td>
  <td colspan="2" style="text-align:center"><b>18 años - 29 años</b></td>
  <td rowspan="2" style="text-align:center"><b>TOTAL</b></td>
 </tr>
 <tr>
  <td height="26" style="text-align:center"><b>MASCULINO</b></td>
  <td style="text-align:center"><b>FEMENINO</b></td>
 </tr>
 <tr>
  <td colspan="4">Tuberculosis</td>
  <td>{{data.var183 ? data.var183 : '-'}}</td>
  <td>{{data.var184 ? data.var184 : '-'}}</td>
  <td>{{parseInt(data.var183) + parseInt(data.var184)}}</td>
 </tr>
 <tr>
  <td colspan="4">Transtornos mentales y del comportamiento por uso de
  sustancias psicoticas</td>
  <td>{{data.var185 ? data.var185 : '-'}}</td>
  <td>{{data.var186 ? data.var186 : '-'}}</td>
  <td>{{parseInt(data.var185) + parseInt(data.var186)}}</td>
 </tr>
 <tr>
  <td colspan="4">Problemas relacionados con el uso del alcohol</td>
  <td>{{data.var187 ? data.var187 : '-'}}</td>
  <td>{{data.var188 ? data.var188 : '-'}}</td>
  <td>{{parseInt(data.var187) + parseInt(data.var188)}}</td>
 </tr>
 <tr>
  <td colspan="4">Problemas relacionados con el uso de tabaco</td>
  <td>{{data.var189 ? data.var189 : '-'}}</td>
  <td>{{data.var190 ? data.var190 : '-'}}</td>
  <td>{{parseInt(data.var189) + parseInt(data.var190)}}</td>
 </tr>
 <tr>
  <td colspan="4">Problemas relacionados con el uso de drogas</td>
  <td>{{data.var191 ? data.var191 : '-'}}</td>
  <td>{{data.var192 ? data.var192 : '-'}}</td>
  <td>{{parseInt(data.var191) + parseInt(data.var192)}}</td>
 </tr>
 <tr>
  <td colspan="4">Infecciones de modo predominantemente sexual</td>
  <td>{{data.var193 ? data.var193 : '-'}}</td>
  <td>{{data.var194 ? data.var194 : '-'}}</td>
  <td>{{parseInt(data.var193) + parseInt(data.var194)}}</td>
 </tr>
 <tr>
  <td colspan="4">Todos los diagnósticos definitivos de violencia</td>
  <td>{{data.var195 ? data.var195 : '-'}}</td>
  <td>{{data.var196 ? data.var196 : '-'}}</td>
  <td>{{parseInt(data.var195) + parseInt(data.var196)}}</td>
 </tr>
 <tr>
  <td colspan="4">Personas con diagnóstico confirmado de VIH</td>
  <td>{{data.var197 ? data.var197 : '-'}}</td>
  <td>{{data.var198 ? data.var198 : '-'}}</td>
  <td>{{parseInt(data.var197) + parseInt(data.var198)}}</td>
 </tr>
 <tr>
  <td colspan="4">Personas que sufrieron accidentes ocupacionales (exposición
  VIH)</td>
   <td>{{data.var199 ? data.var199 : '-'}}</td>
   <td>{{data.var200 ? data.var200 : '-'}}</td>
   <td>{{parseInt(data.var199) + parseInt(data.var200)}}</td>
 </tr>
 <tr>
  <td colspan="4">Personas que sufrieron accidentes ocupacionales (exposición
  VIH) y reciben profilaxis ARV</td>
  <td>{{data.var201 ? data.var201 : '-'}}</td>
  <td>{{data.var202 ? data.var202 : '-'}}</td>
  <td>{{parseInt(data.var201) + parseInt(data.var202)}}</td>
 </tr>
 <tr>
  <td colspan="4">Personas expuestas a VIH por violencia sexual y reciben
  profilaxis ARV</td>
  <td>{{data.var203 ? data.var203 : '-'}}</td>
  <td>{{data.var204 ? data.var204 : '-'}}</td>
  <td>{{parseInt(data.var203) + parseInt(data.var204)}}</td>
 </tr>
 <tr>
  <td colspan="4">Carcinoma in situ de cuello uterino</td>
  <td>{{data.var205 ? data.var205 : '-'}}</td>
  <td>{{data.var206 ? data.var206 : '-'}}</td>
  <td>{{parseInt(data.var205) + parseInt(data.var206)}}</td>
 </tr>
 <tr>
  <td colspan="4">Transtornos mentales y del comportamiento</td>
  <td>{{data.var207 ? data.var207 : '-'}}</td>
  <td>{{data.var208 ? data.var208 : '-'}}</td>
  <td>{{parseInt(data.var207) + parseInt(data.var208)}}</td>
 </tr>
 <tr>
  <td colspan="4">Lesiones autoinfligidas</td>
  <td>{{data.var209 ? data.var209 : '-'}}</td>
  <td>{{data.var210 ? data.var210 : '-'}}</td>
  <td>{{parseInt(data.var209) + parseInt(data.var210)}}</td>
 </tr>
 <tr>
  <td colspan="4">Depresión</td>
  <td>{{data.var211 ? data.var211 : '-'}}</td>
  <td>{{data.var212 ? data.var212 : '-'}}</td>
  <td>{{parseInt(data.var211) + parseInt(data.var212)}}</td>
 </tr>
 <tr>
  <td colspan="4">Anemia Nutricional</td>
  <td>{{data.var213 ? data.var213 : '-'}}</td>
  <td>{{data.var214 ? data.var214 : '-'}}</td>
  <td>{{parseInt(data.var213) + parseInt(data.var214)}}</td>>
 </tr>
 <tr>
  <td colspan="4">Embarazo terminado en aborto</td>
  <td>{{data.var215 ? data.var215 : '-'}}</td>
  <td>{{data.var216 ? data.var216 : '-'}}</td>
  <td>{{parseInt(data.var215) + parseInt(data.var216)}}</td>
 </tr>
 <tr>
  <td colspan="4">Obesidad</td>
  <td>{{data.var217 ? data.var217 : '-'}}</td>
  <td>{{data.var218 ? data.var218 : '-'}}</td>
  <td>{{parseInt(data.var217) + parseInt(data.var218)}}</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0">
  <td width="257"></td>
  <td width="221"></td>
  <td width="185"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="132"></td>
  <td width="185"></td>
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
            await this.axios.get(this.$api_url + '/reporte/' + this.tabla + '/1-218',{
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

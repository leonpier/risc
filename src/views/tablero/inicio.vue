<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card>
          <v-form ref="form" lazy-validation>
            <v-row no-gutters style="height: 270px">
              <v-col md="12">
                <center><h2>TABLERO DE MANDO INTEGRAL</h2></center>
              </v-col>
              <v-col md="4" style="height: 10px">
                <v-card-text class="pa-2">
                  <v-autocomplete
                    :items="anios"
                    v-model="search.anio"
                    label="Año"
                    item-text="name"
                    item-value="id"
                    multiple
                    dense
                    outlined
                    clearable
                    required
                  ></v-autocomplete>
                </v-card-text>
              </v-col>
              <v-col md="4" style="height: 10px">
                <v-card-text class="pa-2">
                  <v-autocomplete
                    :items="meses"
                    v-model="search.mes"
                    label="Mes"
                    item-text="name"
                    item-value="id"
                    multiple
                    dense
                    outlined
                    clearable
                    required
                  ></v-autocomplete>
                </v-card-text>
              </v-col>
              <v-col md="4" style="height: 10px">
                <v-card-text class="pa-2">
                  <v-select
                    :items="categorias"
                    @change="getRenew()"
                    v-model="search.categoria"
                    :menu-props="{ maxHeight: '400' }"
                    label="Categorías"
                    item-text="name"
                    item-value="name"
                    multiple
                    dense
                    outlined
                  ></v-select>
                </v-card-text>
              </v-col>
              <v-col md="4" style="height: 10px">
                <v-card-text class="pa-2">
                  <v-autocomplete
                    :items="unidades"
                    v-model="search.unidad"
                    @change="getRedes()"
                    label="Unidad Ejecutora"
                    item-text="name"
                    item-value="name"
                    multiple
                    dense
                    outlined
                    clearable
                    required
                  ></v-autocomplete>
                </v-card-text>
              </v-col>
              <v-col md="4" style="height: 10px">
                <v-card-text class="pa-2">
                  <v-autocomplete
                    :items="redes"
                    v-model="search.red"
                    @change="getMicroredes()"
                    label="Red"
                    item-text="name"
                    item-value="id"
                    multiple
                    dense
                    outlined
                  ></v-autocomplete>
                </v-card-text>
              </v-col>
              <v-col md="4" style="height: 10px">
                <v-card-text class="pa-2">
                  <v-autocomplete
                    :items="microredes"
                    v-model="search.microred"
                    @change="getEstablecimientos()"
                    label="Micro Red"
                    item-text="name"
                    item-value="id"
                    multiple
                    dense
                    outlined
                  ></v-autocomplete>
                </v-card-text>
              </v-col>
              <v-col md="4" style="height: 10px">
                <v-card-text class="pa-2">
                  <v-autocomplete
                    :items="establecimientos"
                    v-model="search.establecimiento"
                    label="IPRESS"
                    item-text="name"
                    item-value="id"
                    multiple
                    dense
                    outlined
                  ></v-autocomplete>
                </v-card-text>
              </v-col>
              <v-col md="4" style="height: 10px">
                <v-card-text class="pa-2">
                  <v-autocomplete
                    :items="estrategias"
                    v-model="search.estrategia"
                    label="Estratégia"
                    item-text="descripcion"
                    item-value="idestrategia"
                    dense
                    outlined
                  ></v-autocomplete>
                </v-card-text>
              </v-col>
              <v-col md="2" style="height: 10px; text-align: center">
                <v-card-text class="pa-2">
                  <v-btn
                    color="info"
                    class="white--text"
                    style="width: 100%"
                    @click="validate"
                  >
                    <v-icon left dark>mdi-magnify</v-icon> Buscar
                  </v-btn>
                </v-card-text>
              </v-col>
              <v-col md="2" style="height: 10px; text-align: center">
                <v-card-text class="pa-2">
                  <v-btn
                    color="success"
                    class="white--text"
                    style="width: 100%"
                  >
                    <v-icon left dark>mdi-download</v-icon> Excel
                  </v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
      <v-col md="12">
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" lg="12" style="height: 800px">
        <v-card>
          <v-card-text>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Indicador</th>
                    <th class="text-left">Meta</th>
                    <th class="text-left">AVANCE</th>
                    <th class="text-left">Cobertura %</th>
                    <th class="text-left">Semaforo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tabla" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td class="text-center">{{ item.meta }}</td>
                    <td class="text-center">{{ item.avance }}</td>
                    <td class="text-center">
                      {{ parseInt(item.porcentaje) }} %
                    </td>
                    <td style="text-align: center">
                      <span
                        style="font-size: 28px"
                        :class="
                          semaforo(parseFloat(parseInt(item.porcentaje) / 100))
                        "
                      ></span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    dialog: false,
    tabla: [],
    unidades: [],
    reporte: 0,
    redes: [],
    microredes: [],
    estrategias: [],
    anios: [2019, 2020, 2021, 2022],
    status(status) {
      const statusMap = {
        4: "info",
        1: "success",
        2: "warning",
        3: "danger",
      };
      return statusMap[status];
    },
    establecimientos: [],
    search: {
      categoria: [],
      unidad: [],
      mes: "",
      anio: "",
      red: [],
      microred: [],
      establecimiento: [],
      estrategia: [],
    },
    meses: [
      { id: "01", name: "Enero" },
      { id: "02", name: "Febrero" },
      { id: "03", name: "Marzo" },
      { id: "04", name: "Abril" },
      { id: "05", name: "Mayo" },
      { id: "06", name: "Junio" },
      { id: "07", name: "Julio" },
      { id: "08", name: "Agosto" },
      { id: "09", name: "Setiembre" },
      { id: "10", name: "Octubre" },
      { id: "11", name: "Noviembre" },
      { id: "12", name: "Diciembre" },
    ],
    categorias: [],
  }),
  components: {},
  created() {
    this.getUnidades();
    this.getEstrategias();
  },
  methods: {
    semaforo(num) {
      if (num >= 0.9) {
        return "mdi mdi-checkbox-blank-circle green--text";
      } else if (num < 0.9 && num >= 0.75) {
        return "mdi mdi-mdi mdi-triangle orange--text";
      } else if (num < 0.75) {
        return "mdi mdi-rotate-135 mdi-checkbox-blank red--text";
      }
    },
    async validate() {
      await this.axios
        .get(this.$api_url + "/tablero/inicio", {
          params: {
            establecimiento: this.verifica(this.search.establecimiento),
            mes: this.verifica(this.search.mes),
            anio: this.verifica(this.search.anio),
            unidad: this.verifica(this.search.unidad),
            red: this.verifica(this.search.red),
            microred: this.verifica(this.search.microred),
            estrategia: this.search.estrategia,
          },
        })
        .then((response) => {
          this.tabla = response.data;
        });
    },
    showMsgFromChild: function (data) {
      this.reporte = data;
    },
    verifica(dt) {
      if (dt.length > 0) {
        return dt.reduce((f, s) => `${f},${s}`);
      } else {
        return "";
      }
    },
    async getUnidades() {
      await this.axios.get(this.$api_url + "/filtros").then((response) => {
        (this.unidades = response.data.unidad),
          (this.redes = response.data.red),
          (this.microredes = response.data.microred),
          (this.establecimientos = response.data.establecimiento),
          (this.categorias = response.data.categoria);
      });
    },
    async getEstrategias() {
      await this.axios
        .get(this.$api_url + "/filtros/estrategias")
        .then((response) => {
          this.estrategias = response.data;
        });
    },
    async getRedes() {
      await this.axios
        .get(this.$api_url + "/filtros", {
          params: {
            unidad: this.search.unidad.join(","),
            red: this.search.red.join(","),
            microred: this.search.microred.join(","),
          },
        })
        .then((response) => {
          (this.redes = response.data.red),
            (this.categorias = response.data.categoria);
        });
    },
    async getMicroredes() {
      await this.axios
        .get(this.$api_url + "/filtros", {
          params: {
            unidad: this.search.unidad.join(","),
            red: this.search.red.join(","),
            microred: this.search.microred.join(","),
          },
        })
        .then((response) => {
          (this.microredes = response.data.microred),
            (this.categorias = response.data.categoria);
        });
    },
    async getEstablecimientos() {
      await this.axios
        .get(this.$api_url + "/filtros", {
          params: {
            unidad: this.search.unidad.join(","),
            red: this.search.red.join(","),
            microred: this.search.microred.join(","),
          },
        })
        .then((response) => {
          this.establecimientos = response.data.establecimiento;
        });
    },
  },
};
</script>

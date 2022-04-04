<template>
  <v-card>
    <v-tabs background-color="primary" v-model="model" dark>
      <v-tab :key="'2'" href="#tab-2">Filtros</v-tab>
      <v-tab :key="'3'" href="#tab-3">Color</v-tab>
    </v-tabs>
    <v-tabs-items v-model="model">
      <v-tab-item :key="'2'" :value="'tab-2'">
        <v-card flat>
          <v-list subheader three-line>
            <v-subheader>Selección de filtros a mostrar</v-subheader>
          </v-list>
          <v-divider></v-divider>
          <v-list flat subheader three-line>
            <v-subheader>Distribución</v-subheader>
            <v-list-item-group v-model="settings" multiple active-class="">
              <v-list-item style="min-height: 50px">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-radio :input-value="active"></v-radio>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Administrativa</v-list-item-title>
                    <v-list-item-subtitle
                      >UE, Red, Micro red y
                      establecimiento</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>
              <v-list-item style="min-height: 50px">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-radio :input-value="active"></v-radio>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Geográfica</v-list-item-title>
                    <v-list-item-subtitle
                      >Departamento, Provincia, Distrito y
                      establecimiento</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
            <v-subheader>General</v-subheader>
            <v-list-item-group v-model="settings" multiple active-class="">
              <v-list-item style="min-height: 50px">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Meses</v-list-item-title>
                    <v-list-item-subtitle
                      >Muestra los meses de Enero a
                      Diciembre</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>
              <v-list-item style="min-height: 50px">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Años</v-list-item-title>
                    <v-list-item-subtitle
                      >Muestra los años desde el 2019 a la
                      actualidad</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>
              <v-list-item style="min-height: 50px">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Categorías</v-list-item-title>
                    <v-list-item-subtitle
                      >Muestra las categorías de
                      establecimientos</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>
              <v-list-item style="min-height: 50px">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>CLAS</v-list-item-title>
                    <v-list-item-subtitle>-</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-tabs-items v-model="model">
      <v-tab-item :key="'3'" :value="'tab-3'">
        <v-card flat>
          <v-list subheader three-line>
            <v-subheader>Formato de Tabla</v-subheader>
          </v-list>
          <v-divider></v-divider>
          <v-list flat subheader three-line>
            <v-radio-group v-model="radios">
              <v-list-item-group multiple active-class="">
                <v-list-item style="min-height: 50px">
                  <template>
                    <v-list-item-action>
                      <v-radio
                        key="1"
                        value="blue"
                        @click="beforeCreate"
                      ></v-radio>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Color Azul</v-list-item-title>
                      <v-list-item-subtitle>Cambia el color de las cabeceras al color azul y texto blanco</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item style="min-height: 50px">
                  <template>
                    <v-list-item-action>
                      <v-radio
                        key="2"
                        value="green"
                        @click="beforeCreate"
                      ></v-radio>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Color Verde</v-list-item-title>
                      <v-list-item-subtitle>Cambia el color de las cabeceras al color verde y texto blanco</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item style="min-height: 50px">
                  <template>
                    <v-list-item-action>
                      <v-radio
                        key="2"
                        value="orange"
                        @click="beforeCreate"
                      ></v-radio>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Color Anaranjado</v-list-item-title>
                      <v-list-item-subtitle>Cambia el color de las cabeceras al color anaranjado y texto blanco</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-item-group>
            </v-radio-group>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
      <v-btn color="blue darken-1" text @click="dialog = false">
        Guardar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    datos: "",
    data: [],
    radios: 0,
    model: "tab-2",
    settings: "",
  }),
  setup() {},
  mounted() {
    if (localStorage.name) {
      this.radios = localStorage.name;
    } else {
      this.radios = this.$style_table;
    }
  },
  props: ["message", "mes"],
  created() {},
  methods: {
    beforeCreate: function () {
      this.$store.state.firstName = this.radios;
      localStorage.name = this.$store.state.firstName;
    },
  },
};
</script>

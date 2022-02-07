<template>
    <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card>
            <v-card-text>
                <h3 class="title blue-grey--text text--darken-2 font-weight-regular" style="text-align:center">
                    Condiciones
                </h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-form ref="form" lazy-validation>
                <v-row no-gutters style="height: 150px;">
                    <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete   label="Año" item-text="name" item-value="id" multiple dense  outlined clearable required></v-autocomplete>
                        </v-card-text> 
                    </v-col>
                   <v-col md="4" style="height: 10px;">
                        <v-card-text class="pa-2" >
                            <v-autocomplete  label="Mes" item-text="name" item-value="id" multiple dense  outlined clearable required></v-autocomplete>
                        </v-card-text> 
                    </v-col>
                    <v-col md="2" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="info" class="white--text" style="width:100%">
                                <v-icon left dark>mdi-magnify</v-icon> Buscar
                            </v-btn>
                        </v-card-text>
                    </v-col>
                    <v-col md="1" style="height: 10px; text-align:center">
                        <v-card-text class="pa-2" >
                            <v-btn color="success" class="white--text" style="width:100%;">
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
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">
                        Name
                        </th>
                        <th class="text-left">
                        Calories
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in list"
                        :key="item.id_condicion"
                    >
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                    </tbody>
                </template>
                </v-simple-table>

            <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getCondiciones" />
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {
  name: "Profile",

  data: () => ({
    tableKey: 0,
    total: 0,
    dialog: false,
    listLoading: true,
    list: null,
    listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        busqueda: undefined,
        estado: undefined
      },
  }),
  components: {
  },
  created() {
    this.getCondiciones()
    // ReporteSaludFamiliar()
  },
  methods: {
    async getCondiciones() {
        await this.axios.get(this.$api_url + '/condiciones',{
            params: {
                page: this.listQuery.page,
                limit: this.listQuery.limit,
                busqueda: this.listQuery.busqueda,
                estado: this.listQuery.estado
            }
        }).then(response => {
            this.list = response.data.data
            this.total = response.data.total
            setTimeout(() => {
            this.listLoading = false
            }, 1.5 * 1000)
        }).catch(error => {
            console.log(error)
      })
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
};
</script>

<template>
  <div>
    <v-container fluid>
      <v-sheet
          class="rounded-lg"
          height="500"
          color="primary"
          elevation="5"
      >
      </v-sheet>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col
            cols="12"
            lg="2"
            md="12"
            sm="12"
            v-for="n in 12"
            :key="n"
        >
          <v-card
              class="mx-auto mt-6 rounded-lg"
              max-width="250"
              height="450"
              elevation="5"
          >
            <v-sheet
              class="rounded-lg"
              height="300"
              color="primary"
              elevation="5"
            >

            </v-sheet>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  OVERLINE
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',

}
</script>

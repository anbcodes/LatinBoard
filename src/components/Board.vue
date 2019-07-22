<template>
  <v-layout>
    <v-flex>
      <v-layout v-for="(row, rowIndex) in board" :key="rowIndex">
        <v-flex v-for="(column, colIndex) in row" :key="colIndex" xs2 sm2 md2 lg2 xl2>
          <v-card elevation-0 style="width: 100%; height: 100%">
            <v-card-title primary-title>
              <h5 class="subheading mb-0">{{column[0]}} ({{rowIndex*6+colIndex+1}})</h5>
            </v-card-title>
            <v-card-text>Translation: {{showTranslation ? column[1] : ""}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    board: Array,
    showTranslation: Boolean
  }
};
</script>

<style>
</style>

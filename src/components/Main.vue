<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <board :board="board" :showTranslation="showTranslation" />
      </v-flex>
      <v-flex>
        <v-layout row>
          <generateBoardBtn v-model="board" :weekRanges="weekRanges" />
          <showTranslationBtn v-model="showTranslation" />
        </v-layout>
      </v-flex>
      <v-flex>
        <challenge v-model="weekRanges" name="A" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Board from "./Board";
import GenerateBoardBtn from "./GenerateBoardBtn";
import ShowTranslationBtn from "./ShowTranslationBtn";
import Challenge from "./Challenge";

export default {
  components: {
    Board,
    GenerateBoardBtn,
    ShowTranslationBtn,
    Challenge
  },

  data: () => ({
    weekRanges: { A: {}, B: {}, "1": {}, "2": {}, "3": {}, "4": {} },
    board: [],
    selected: [],
    showTranslation: false
  })
};
</script>

<style>
</style>

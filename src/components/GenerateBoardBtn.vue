<template>
  <v-btn class="secondary" round @click="generateBoard()">Generate Board</v-btn>
</template>
<script>
import latinToEnglish from "../assets/Weeks";

export default {
  props: {
    value: Array,
    weekRanges: Object
  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    generateBoard() {
      let newBoard = [];
      let challenges = ["A", "B", "1", "2", "3", "4"];
      let pickedVocab = [];
      challenges.forEach(challenge => {
        if (this.weekRanges[challenge].selected) {
          let currentPickedVocab = latinToEnglish[challenge]
            .slice(
              this.weekRanges[challenge].range[0] - 1,
              this.weekRanges[challenge].range[1]
            )
            .flat();
          pickedVocab.push(currentPickedVocab);
          pickedVocab = pickedVocab.flat();
        }
      });
      if (pickedVocab !== [] && pickedVocab.length !== 0) {
        for (let row = 0; row < 6; row++) {
          let currentRow = [];
          for (let column = 0; column < 6; column++) {
            let randomVocab = [];
            while (randomVocab.length === 0) {
              randomVocab =
                pickedVocab[Math.floor(Math.random() * pickedVocab.length)];
            }
            randomVocab = this.shuffle(randomVocab);
            currentRow.push(randomVocab);
          }
          newBoard.push(currentRow);
        }
        this.value = newBoard;
        this.generated = true;
        this.$emit("input", this.value);
      }
    }
  }
};
</script>

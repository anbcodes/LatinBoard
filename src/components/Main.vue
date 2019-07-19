<template>
  <v-container>
    <v-layout column>
      <v-flex ma-2>
        <v-layout>
          <v-flex v-if="generated" >
            <v-layout v-for="(row, rowIndex) in board" :key="rowIndex">
              <v-flex v-for="(column, colIndex) in row" :key="colIndex" xs2 sm2 md2 lg2 xl2> 
                <v-card elevation-0 style="width: 100%; height: 100%">
                  <v-card-title primary-title>
                    <h5 class="subheading mb-0">{{column[0]}} ({{rowIndex*6+colIndex+1}})</h5>
                  </v-card-title>
                  <v-card-text>
                    Translation: {{show ? column[1] : ""}}
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      
      <v-flex ma-2>
        <v-layout
          text-xs-center
          wrap
        >
          <v-flex
            shrink
            mr-3
          >
            <v-layout
              column
            >
            <v-flex centered>
              <h2 class="heading mb-0">Challenge</h2>
              <h2 class="heading mt-2">A:</h2>
            </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>

            <v-layout 
              text-xs-center
              wrap
              column
            >
              <v-flex centered>
                <h2 class="heading mb-0">Week Range</h2>
              </v-flex>
              <v-flex mx-2>
                <v-range-slider
                  v-model="challengeAWeek"
                  :max="30"
                  :min="1"
                  :thumb-size="24"
                  :step="1"
                  thumb-label="always"
                
                ></v-range-slider>
              </v-flex>
            </v-layout>
          </v-flex>

            <v-flex
              shrink
              ml-4
            >
              <v-layout
                column
              >
              <v-flex
                shrink
                mb-2
              >
                <v-btn
                  round
                  @click="show = !show"
                  v-if="generated"
                  class="secondary"
                >
                  {{show ? "Hide" : "Show"}} Answers
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn
                  class="secondary"
                  round
                  @click="generateBoard()"
                >
                  Generate Board
                </v-btn>
              </v-flex>
              
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>  
    </v-layout>
  </v-container>
</template>

<script>
  import latinToEnglish from "../assets/Weeks"

  export default {
    data: () => ({
      challengeAWeek: [1, 3],
      show: false,
      generated: false,
      board: [],
      points: 1,
    }),
    methods: {
      shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      },
      generateBoard() {
        this.points = 1
        let newBoard = []
        let pickedVocab = latinToEnglish.slice(this.challengeAWeek[0], this.challengeAWeek[1]).flat()
        for (let row = 0; row < 6; row ++) {
          let currentRow = []
          for (let column = 0; column < 6; column ++) {
            let randomVocab = pickedVocab[Math.floor(Math.random()*pickedVocab.length)];
            randomVocab = this.shuffle(randomVocab)
            currentRow.push(randomVocab)
          }
          newBoard.push(currentRow)
        }
        this.board = newBoard
        this.generated = true

      }
    }
  }
</script>

<style>

</style>

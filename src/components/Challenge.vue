<template>
  <v-layout>
    <v-flex centered shrink mr-3 mt-1>
      <h2 class="heading mt-2">Challenge {{name}} Weeks:</h2>
    </v-flex>
    <v-flex>
      <v-range-slider
        v-model="value[name].range"
        :max="30"
        :min="1"
        :thumb-size="24"
        :step="1"
        thumb-label="always"
        :disabled="!value[name].selected"
        always-dirty
        @change="valueChange"
      ></v-range-slider>
    </v-flex>
    <v-flex shrink ml-2>
      <v-checkbox v-model="value[name].selected" @change="valueChange" />
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    value: Object,
    name: String
  },
  created() {
    this.value[this.name] = { range: [1, 2], selected: true };
  },
  methods: {
    valueChange() {
      this.$emit("input", this.value);
    }
  }
};
</script>
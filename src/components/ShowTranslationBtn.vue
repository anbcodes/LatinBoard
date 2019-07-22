<template>
  <v-btn round @click="changed()" class="secondary">{{value ? "Hide" : "Show"}} Answers</v-btn>
</template>
<script>
export default {
  props: {
    value: Boolean
  },
  methods: {
    changed() {
      this.value = !this.value;
      this.$emit("input", this.value);
    }
  }
};
</script>

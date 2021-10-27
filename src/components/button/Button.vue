<template>
  <div>
    <button type="button" class="c-button" :class="color">{{ value }}</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '확인',
    },
    color: {
      type: String,
      default: 'primary',
    }
  }
}
</script>

<style>
.c-button.primary {
  background: green;
}
.c-button.error {
  background: indianred;
}
.c-button.success {
  background: dodgerblue;
}
.c-button.secondary {
  background: lightslategray;
}
</style>

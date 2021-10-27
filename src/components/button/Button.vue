<template>
  <div>
    <button type="button" class="s-button" :class="color">{{ value }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
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
.s-button.primary {
  background: green;
}
.s-button.error {
  background: indianred;
}
.s-button.success {
  background: dodgerblue;
}
.s-button.secondary {
  background: lightslategray;
}
</style>

<template>
  <div>
    <button type="button" class="s-button" :class="color" @click="handleClickButton()">
      <!-- @slot 아이콘 -->
      <slot name="icon"></slot>
      {{ value }}
      <!---->
      <slot name="etc"></slot>
    </button>
  </div>
</template>

<script>
export const buttonColors = ['primary', 'secondary', 'success', 'error'];

export default {
  name: 'SButton',
  props: {
    value: {
      type: String,
      default: '확인',
    },
    /**
     * 색상 (primary, secondary, success, error)
     */
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        const isValid = buttonColors.includes(value);
        if (!isValid) {
          console.error(`${value} is not a valid value of Button color`);
        }
        return isValid;
      },
    }
  },
  methods: {
    handleClickButton() {
      /**
       * 성공했을 때
       */
      this.$emit('success');
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

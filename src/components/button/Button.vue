<template>
  <div>
    <button type="button" class="s-button" :class="color">
      <!-- @slot 아이콘 -->
      <slot name="icon"></slot>
      {{ value }}
    </button>
  </div>
</template>

<script>
/**
 * 테스트용 버튼
 */
export default {
  name: 'Button',
  props: {
    /**
     * 버튼 내용
     */
    value: {
      type: String,
      default: '확인',
    },
    /**
     * 색상
     * @values primary, secondary, success, error
     */
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

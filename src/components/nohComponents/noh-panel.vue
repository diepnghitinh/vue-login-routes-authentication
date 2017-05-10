<template>
  <b-card v-bind:header="header"
          class="noh-panel mb-2"
          v-bind:class="customClass"
          v-bind:title="title"
          v-bind:sub-title="subTitle">
    <slot></slot>
  </b-card>
</template>

<script>
  export default {
    name: 'noh-panel',
    props: ['header', 'customClass', 'title', 'subTitle']
  };
</script>

<style lang="scss">
  .mb-2 {
    margin-top: 10px;
    border: #34495e 1px solid;
  }

  .noh-panel {
    .card-header {
      color: #37ecc9;
      background: #34495e;
    }
  }
</style>

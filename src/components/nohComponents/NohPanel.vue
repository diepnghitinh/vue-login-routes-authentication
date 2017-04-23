<template>
  <b-card v-bind:header="header"
          class="mb-2"
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

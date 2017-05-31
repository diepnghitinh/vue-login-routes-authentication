<template>
  <b-card class="noh-panel mb-2"
          v-bind:header="header"
          v-bind:class="customClass"
          v-bind:title="title"
          v-bind:sub-title="subTitle"
          show-header>
    <slot></slot>
    <small slot="header">
      <div class="container-fluid row">
        <div class="col-sm-6">
          <h5>{{header}}</h5>
        </div>
        <div class="col-sm-6 text-right">
          <div class="container-fluid row justify-content-end">
            <div class="col-sm-2" v-for="button in buttons">
              <button type="submit" class="btn btn-primary btn-block" v-on:click="button.callback">{{button.text}}</button>
            </div>

          </div>
        </div>
      </div>
    </small>
  </b-card>
</template>

<script>
  export default {
    name: 'noh-panel',
    props: ['header', 'customClass', 'title', 'subTitle', 'buttons']
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

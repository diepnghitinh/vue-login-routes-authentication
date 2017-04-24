<template>
  <div>
    <div>Manage</div>
    <noh-panel header="Manage">
      <div class="justify-content-centermy-1 row">
        <b-form-fieldset horizontal label="Rows per page" class="col-6" :label-size="6">
          <b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
          </b-form-select>
        </b-form-fieldset>

        <b-form-fieldset horizontal label="Filter" class="col-6" :label-size="2">
          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
        </b-form-fieldset>
      </div>

      <!-- Main table element -->
      <b-table striped hover :items="teachers.teachers" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
        <template slot="Name" scope="item">
          {{item.name}}
        </template>
        <template slot="Identifier" scope="item">
          {{item.identifier}}
        </template>
      </b-table>
        <div class="justify-content-center row my-1">
          <b-pagination size="md" :total-rows="this.teachers.length" :per-page="perPage" v-model="currentPage" />
        </div>
    </noh-panel>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        fields: {
          name: {
            label: 'Name',
            sortable: true
          },
          identifier: {
            label: 'Identifier',
            sortable: true
          }
        },
        currentPage: 1,
        perPage: 5,
        filter: null
      };
    },
    computed: mapState([
      'teachers'
    ]),
    mounted() {
      this.$store.dispatch('FETCH_TEACHERS');
    }
  };
</script>

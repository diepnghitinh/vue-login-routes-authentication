<template>
  <div class="mainContent">
    <b-navbar toggleable type="inverse" variant="success">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>BootstrapVue</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item><router-link v-bind:to="{name: 'dashboard'}">Dashboard</router-link></b-nav-item>
          <b-nav-item><router-link v-bind:to="{name: 'about'}">About</router-link></b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item-dropdown right-alignment>
            <!-- Using text slot -->
            <template slot="text">
              <span style="font-weight: bold;">User</span>
            </template>
            <b-dropdown-item v-on:click="goToProfile()">Profile</b-dropdown-item>
            <b-dropdown-item v-on:click="signout()">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      goToProfile: function signout() {
        this.$router.push({ name: 'profile' });
      },
      signout: function signout() {
        // TODO: Clean logged data
        this.$router.push({ name: 'login' });
      }
    }
  };
</script>
<style>
  .mainContent {
    padding: 20px;
    height: 300px;
  }
</style>

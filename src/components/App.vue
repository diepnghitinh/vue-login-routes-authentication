<template>
  <div class="mainContent">
    <b-navbar toggleable type="inverse" variant="success">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>BootstrapVue</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item><router-link v-bind:to="{name: 'dashboard'}">{{$t('DASHBOARD')}}</router-link></b-nav-item>
          <b-nav-item-dropdown right-alignment>
            <template slot="text">
              <span style="font-weight: bold;">{{$t('TEACHERS')}}</span>
            </template>
            <b-dropdown-item v-on:click="goToTeachersManage()">{{$t('MANAGE')}}</b-dropdown-item>
            <b-dropdown-item v-on:click="goToTeachersSubjects()">{{$t('SUBJECTS')}}</b-dropdown-item>
            <b-dropdown-item v-on:click="goToTeachersClassrooms()">{{$t('CLASSROOMS')}}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item><router-link v-bind:to="{name: 'about'}">{{$t('ABOUT')}}</router-link></b-nav-item>
          <span> Loading... </span>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item-dropdown right-alignment>
            <!-- Using text slot -->
            <template slot="text">
              <span style="font-weight: bold;">{{$t('USER')}}</span>
            </template>
            <b-dropdown-item v-on:click="goToProfile()">{{$t('PROFILE')}}</b-dropdown-item>
            <b-dropdown-item v-on:click="signout()">{{$t('SIGNOUT')}}</b-dropdown-item>
            <b-dropdown-item v-on:click="SHOW_LOADING()">Test</b-dropdown-item>
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
      /* Teachers */
      goToTeachersClassrooms: function gotToTeachersClassrooms() {
        this.$router.push({ name: 'classrooms' });
      },
      goToTeachersManage: function gotToTeachersManage() {
        this.$router.push({ name: 'manage' });
      },
      goToTeachersSubjects: function gotToTeachersSubjects() {
        this.$router.push({ name: 'subjects' });
      },
      goToProfile: function goToProfile() {
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

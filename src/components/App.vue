<template>
  <div class="mainContent">
    <noh-menu type="inverse" v-bind:title="title" v-bind:left-options="leftOptions" v-bind:right-options="rightOptions" sticky="top"></noh-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: { value: 'Walter Chavarria', onclick: this.goToDashboard },
        leftOptions: [
          { id: '1', type: 'simple', key: 'dashboard', value: 'DASHBOARD' },
          {
            id: '2',
            type: 'dropdown',
            key: 'teacher',
            value: 'TEACHERS',
            options: [
              { id: '1', value: 'MANAGE', onclick: this.goToTeachersManage },
              { id: '2', value: 'SUBJECTS', onclick: this.goToTeachersSubjects },
              { id: '3', value: 'CLASSROOMS', onclick: this.goToTeachersClassrooms }
            ]
          },
          { id: '3', type: 'simple', key: 'about', value: 'ABOUT' }
        ],
        rightOptions: [
          {
            id: '1',
            type: 'dropdown',
            key: 'teacher',
            value: 'USER',
            options: [
              { id: '1', value: 'PROFILE', onclick: this.goToProfile },
              { id: '2', value: 'SIGNOUT', onclick: this.signout }
            ]
          }
        ]
      };
    },
    methods: {
      goToDashboard: function goToDashboard() {
        this.$router.push({ name: 'dashboard' });
      },
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
        this.$store.dispatch('LOGOUT');
        this.$router.push({ name: 'login' });
      }
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    }
  };
</script>
<style>
  .mainContent {
    padding: 20px;
    min-height: 300px;
  }
</style>

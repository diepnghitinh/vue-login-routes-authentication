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
        title: { value: 'Walter Chavarria', onclick: this.goToDashboard }
      };
    },
    methods: {
      goToDashboard: function goToDashboard() {
        this.$router.push({ name: 'profile' });
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
      goToAccount: function goToAccount() {
        this.$router.push({ name: 'account' });
      },
      signout: function signout() {
        this.$store.dispatch('LOGOUT');
        this.$router.push({ name: 'login' });
      }
    },
    computed: {
      rightOptions() {
        return [
          {
            id: '1',
            type: 'dropdown',
            key: 'teacher',
            value: 'USER',
            isVisible: this.isLoggedIn,
            options: [
              { id: '2', value: 'ACCOUNT', isVisible: true, onclick: this.goToAccount },
              { id: '3', value: 'SIGNOUT', isVisible: true, onclick: this.signout }
            ]
          }
        ];
      },
      leftOptions() {
        return [
          { id: '4', type: 'simple', key: 'profile', value: 'PROFILE', isVisible: true },
          {
            id: '5',
            type: 'dropdown',
            key: 'teacher',
            value: 'TEACHERS',
            isVisible: true,
            options: [
              { id: '6', value: 'MANAGE', isVisible: true, onclick: this.goToTeachersManage },
              { id: '7', value: 'SUBJECTS', isVisible: true, onclick: this.goToTeachersSubjects },
              { id: '8', value: 'CLASSROOMS', isVisible: true, onclick: this.goToTeachersClassrooms }
            ]
          },
          { id: '9', type: 'simple', key: 'about', value: 'ABOUT', isVisible: true }
        ];
      },
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

<template>
  <b-navbar class="menu" toggleable v-bind:type="wType" v-bind:variant="wVariant" v-bind:sticky="wSticky" v-bind:fixed="wFixed">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-link v-if="wTitleValue" class="navbar-brand" v-on:click="wTitleOnclick()">
      <span>{{wTitleValue}}</span>
    </b-link>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <template v-for="item in wLeftOptions" v-if="item.isVisible">
          <b-nav-item v-if="item.type === 'simple'"><router-link v-bind:to="{name: item.key}">{{$t(item.value)}}</router-link></b-nav-item>
          <b-nav-item-dropdown v-if="item.type === 'dropdown'" right-alignment>
            <template slot="text">
              <span>{{$t(item.value)}}</span>
            </template>
            <b-dropdown-item v-for="subitem in item.options" v-if="item.isVisible" v-bind:key="item.id" v-on:click="subitem.onclick()">{{$t(subitem.value)}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-nav>
      <b-nav is-nav-bar class="ml-auto">
        <template v-for="item in wRightOptions" v-if="item.isVisible">
          <b-nav-item-dropdown v-if="item.type === 'dropdown'" right-alignment>
            <template slot="text">
              <span>{{$t(item.value)}}</span>
            </template>
            <b-dropdown-item v-for="subitem in item.options" v-bind:key="item.id" v-on:click="subitem.onclick()">{{$t(subitem.value)}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'noh-panel',
    props: ['type', 'variant', 'sticky', 'title', 'leftOptions', 'rightOptions'],
    computed: {
      wType() {
        return this.type || 'light';
      },
      wVariant() {
        return this.variant || 'navBar';
      },
      wSticky() {
        return this.sticky || '';
      },
      wFixed() {
        return this.fixed || '';
      },
      wTitleValue() {
        return (this.title && this.title.value) || false;
      },
      wTitleOnclick() {
        return (this.title && this.title.onclick) || false;
      },
      wLeftOptions() {
        return this.leftOptions || [];
      },
      wRightOptions() {
        return this.rightOptions || [];
      }
    }
  };
</script>

<style lang="scss">
  .bg-navBar {
    background: #34495e;
  }
  .menu, a, a > span{
    color: #37ecc9;
    text-decoration: none;

    &:hover, &:focus, &:active {
      color: #37ecc9;
      text-decoration: none;
    }
  }
</style>

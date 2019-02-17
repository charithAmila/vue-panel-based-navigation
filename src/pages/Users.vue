<template>
  <panel>
    <section slot="panel-header">
      <div class="header">
        <div class="md-layout">
          <div class="md-layout-item md-size-15">
            <md-button @click="$router.go(-1)" class="md-icon-button">
              <md-icon>arrow_back</md-icon>
            </md-button>
          </div>
          <div class="md-layout-item header-title">
            <h3>User list</h3>
          </div>
        </div>
      </div>
    </section>
    <section slot="panel-body">
      <md-card>
        <md-card-header>
          <md-avatar>
            <img src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar">
          </md-avatar>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>
        <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.</md-card-content>
      </md-card>
      <md-card>
        <md-card-header>
          <md-avatar>
            <img src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar">
          </md-avatar>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>
        <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.</md-card-content>
      </md-card>
      <md-card>
        <md-card-header>
          <md-avatar>
            <img src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar">
          </md-avatar>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>
        <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.</md-card-content>
      </md-card>
      <router-link to="/users/add">
        <md-button class="md-fab md-fab-bottom-right">
          <md-icon>add</md-icon>
        </md-button>
      </router-link>
      <router-view></router-view>
    </section>
  </panel>
</template>

<script>
import Panel from "../components/Panel";

export default {
  name: "Users",
  components: { Panel }
};
</script>

<style>
.md-card {
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>


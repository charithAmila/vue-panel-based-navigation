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
            <h3>Add new</h3>
          </div>
        </div>
      </div>
    </section>
    <section slot="panel-body">
      <form novalidate class="md-layout" @submit="handleSubmit">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">First Name</label>
                  <md-input name="first-name" id="first-name"/>
                </md-field>
                <md-field>
                  <label for="first-name">Last Name</label>
                  <md-input name="first-name" id="first-name"/>
                </md-field>
                <md-field>
                  <label for="first-name">Email</label>
                  <md-input name="first-name" id="first-name"/>
                </md-field>
                <md-card-actions>
                  <md-button type="submit" class="md-primary">Create user</md-button>
                </md-card-actions>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </form>
    </section>
  </panel>
</template>

<script>
import Panel from "../components/Panel";

export default {
  name: "Form",
  components: { Panel },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    }
  }
};
</script>




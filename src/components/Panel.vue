<template>
  <transition
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
  >
    <div class="panel-wrap">
      <div class="panel">
        <slot name="panel-header"></slot>
        <slot name="panel-body"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Panel"
};
</script>

<style>
.panel-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30em;
  transition: 0.3s ease-out;
  border: 1px solid #f1f1f1;
  z-index: 100;
  transform: translateX(0%);
}
.panel {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(255, 255, 255);
  color: #eee;
  overflow: auto;
  padding: 1em;
}
.header {
  margin-left: -20px;
}
.header-title {
  color: rgb(107, 106, 106);
  text-align: left;
}
</style>



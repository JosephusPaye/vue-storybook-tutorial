<template>
  <div id="app">
    <Button>Normal Button</Button> <Button color="primary">Primary Button</Button>
  </div>
</template>

<script>
import Button from './components/Button.vue';

export default {
  name: 'app',
  components: {
    Button,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

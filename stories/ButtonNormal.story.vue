<template>
  <Button>Normal Button</Button>
</template>

<script>
import Button from '../src/components/Button.vue';

export default {
  name: 'ButtonNormal',
  components: { Button },
};
</script>

<include-source>stories/ButtonNormal.story.vue</include-source>

<template>
  <Button color="primary">Primary Button</Button>
</template>

<script>
import Button from '../src/components/Button.vue';

export default {
  name: 'ButtonPrimary',
  components: { Button },
};
</script>

<include-source>stories/ButtonPrimary.story.vue</include-source>

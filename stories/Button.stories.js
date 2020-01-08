import { story } from './story';
import ButtonNormal from './ButtonNormal.story.vue';
import ButtonPrimary from './ButtonPrimary.story.vue';

export default {
  title: 'Button',
};

export const normalButton = story(ButtonNormal);

export const primaryButton = story(ButtonPrimary);

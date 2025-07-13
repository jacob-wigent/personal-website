import { ref } from 'vue';
import { Scheme } from '~/types/scheme';

export const currentScheme = ref<Scheme>(Scheme.Mixed);

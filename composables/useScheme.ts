import { ref } from 'vue';
import { Scheme } from '~/types/scheme';

export const forgroundScheme = ref<Scheme>(Scheme.Mixed);
export const backgroundScheme = ref<Scheme>(Scheme.Mixed);

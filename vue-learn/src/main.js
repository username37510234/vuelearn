import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import AppCard from '@/components/AppCard.vue';

const app = createApp(App);

createApp(App).mount('#app');

app.component('AppCard',AppCard);

app.mount;

import 'bootstrap/dist/js/bootstrap.js'
import './assets/main.css';
import 'normalize.css';

import {
    createApp,
} from 'vue';
import {
    createPinia,
} from 'pinia';

import 'vuetify/styles';
import {
    createVuetify,
} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import VueDOMPurifyHTML from 'vue-dompurify-html';

import App from './App.vue';
import router from './router';

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueDOMPurifyHTML);

app.mount('#app');

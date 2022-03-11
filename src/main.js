import { createApp } from 'vue';
import App from './App.vue';

// 'uno:[layer-name].css'
import 'uno:components.css';
// layers that are not 'components' and 'utilities' will fallback to here
import 'uno.css';
// your own CSS
// "utilities" layer will have the highest priority
import 'uno:utilities.css';

createApp(App).mount('#app');

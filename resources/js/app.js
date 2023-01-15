import './bootstrap';

import Alpine from 'alpinejs';

import { createApp } from "vue";
import router from './router';
import CompaniesIndex from './components/companies/CompaniesIndex.vue';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faPencilSquare } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from "@fortawesome/free-regular-svg-icons";


library.add(faPencilSquare, faTimesCircle, faPlusCircle, faFloppyDisk, faTrashCan, faEdit);


createApp({
    components: {
        CompaniesIndex
    }
}).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');

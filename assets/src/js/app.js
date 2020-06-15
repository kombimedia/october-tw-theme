window.$ = window.jQuery = require('jquery');

require('./main');

import scroll from './scroll';

import 'glider-js';

import 'alpinejs';

(function() {

    const scripts = [
        scroll,
    ];

    scripts.forEach(script => script.init());
})();

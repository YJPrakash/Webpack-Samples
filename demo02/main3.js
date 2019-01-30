import {
    getHello
} from "./main1";
import {
    greet
} from "./main2";

import $ from 'jquery';

$(document.body).append('<h2>' + greet() + '</h2>');
$(document.body).append('<h2>' + getHello("World") + '</h2>');
$(document.body).append('<h2>' + getHello("Webpack") + '</h2>');
"use strict";

import request from "./api.js";
import App from "./App.js";


// access to DOM elem + manipulate it with Event Listener
const $app = document.querySelector(".App");
new App($app);


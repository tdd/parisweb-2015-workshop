import { parse } from 'querystring';

document.querySelector('body').textContent = JSON.stringify(parse(window.location.search.slice(1)));

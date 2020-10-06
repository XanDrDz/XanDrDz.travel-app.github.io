import { All } from './js/All'
import { checkWeek } from './js/forCheckWeek'
import { getWeather } from './js/forGetWeather'
import { getImage } from './js/CallImage'
import { getCord } from './js/CallCordinate'
import img from './media/Fr11.jpg'



export {
    getCord,
    All,
    checkWeek,
}

import './styles/style.scss'





document.addEventListener('DOMContentLoaded', (document.getElementById('generate').addEventListener('click', function (e){
    Client.All();
})));

import { All } from './js/All'
import { checkWeek } from './js/forCheckWeek'
import { getWeather } from './js/forGetWeather'
import { getImage } from './js/CallImage'
import { getCord } from './js/CallCordinate'

export {
    getCord,
    All,
    checkWeek
}

import './styles/style.scss'

window.addEventListener('scroll', function (e){
    console.log('hello world');
});

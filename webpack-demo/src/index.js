import avatar from './avatar.png';
import './index.scss';
//import createAvater from './createAvatar.js';

var img = new Image();
img.src = avatar;
img.classList.add('avatar');

var root = document.getElementById('root');
root.append(img)

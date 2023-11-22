'use strict';

const hour = new Date().getHours();

if(hour >= 19 && hour < 21 ){ //19時または20時の場合
    window.alert('お弁当30%OFF!');
}else if(hour === 9 || hour === 15 ){ //9時または15時の場合
    window.alert('お弁当１個買ったら１個おまけ！');
}else{
    window.alert('お弁当はいかがですか');
}
'use strict';

const answer = window.prompt('ヘルプを見ますか?');
if(answer === 'yes'){
  window.alert('タップでジャンプ、障害物をよけます。');
}else if(answer === 'no'){
  window.alert('ゲームを起動中...');
}else{
  window.alert('yesかnoでお答えください');
}

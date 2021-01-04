const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温は華氏94度だった。 300ポンドの:insertx:は出かけて,:inserty:に着いた。外では雷が鳴っていた。:insertx:は:insertz:。しかしこの異様な光景に梅子は驚かなかった。というのも:insertY:ではよくある光景だったからだ。';
let insertX = ['スヌーピー','うさまる','サンタクロース'];
let insertY = ['北海道','ディズニーランド','沖縄'];
let insertZ = ['突然歌い出した','道の真ん中で叫び出した','ミッキーになって踊っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = '石' + Math.round(300*0.0714286) + '個分';
    const temperature =  '摂氏' + Math.round((94-32) * 5 / 9) + '度';
    newStory = newStory.replace('華氏94度',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

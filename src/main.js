const deray = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

/* date set */
const wdat = () => {
  const testDate = new Date();
  const year = testDate.getFullYear();
  const month = testDate.getMonth() + 1;
  const date = testDate.getDate();
  const day = testDate.getDay();
  const dayArray = [
    '日',
    '月',
    '火',
    '水',
    '木',
    '金',
    '土'
  ];
  const dat = '今日は、' + year + '年' + month + '月' + date + '日' + dayArray[day]
      + '曜日です';
  return document.form1.text2.value = dat;
};

/* time set */
const wtime = () => {
  const testDate = new Date();
  const hour = testDate.getHours();
  const minute = testDate.getMinutes();
  const second = testDate.getSeconds();
  const time = '現在時刻は' + hour + ':' + minute + ':' + second + 'です。';
  console.log(time);
  return document.form1.text3.value = time;
};

/* face set */
const setFace = () => {
  document
  .getElementById('wrapper')
      .style.width = '500px';
  document
  .getElementById('wrapper')
      .style.backgroundColor = '#607D8B';

  document
  .getElementById('header')
      .style.color = 'pink';

  document
      .form1.text1
      .style.backgroundColor = '#acacaa';

  document
      .form1.text2
      .style.backgroundColor = '#CFD8DC';
};

/* initial */
async function wwtime() {
  await setInterval(wtime, 1000);
}

wtime();
wwtime();

document.getElementById('test').onclick = () => {
  const test = () => {
    wtime();
    wwtime();
    document.form1.text1.value = prompt('ここに入力');

    wwtime();

    if (!document.form1.text1.value == '') {
      wdat();
      setFace();
    }
  };
  test();
};

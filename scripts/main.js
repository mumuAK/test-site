let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.jpg') {
      myImage.setAttribute('src', 'images/test-image1.jpg');
    } else {
      myImage.setAttribute('src', 'images/test-image.jpg');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
   setUserName();
}

let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '你好，' + storedName;
}

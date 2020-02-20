let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.jpg') {
      myImage.setAttribute('src', 'images/test-image1.jpg');
    } else {
      myImage.setAttribute('src', 'images/test-image.jpg');
    }
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '你好，' + myName;
  }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
   setUserName();
}

let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '你好，' + storedName;
}

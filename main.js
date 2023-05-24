import { getCommentsData, renderComment, buttonClick } from './commentData.js'
const container = document.querySelector('.container');
const addForm = document.querySelector('.add_form');
const comments = document.querySelector('.comments')
const addFormName = document.querySelector('.add-form-name');
const addFormText = document.querySelector('.add-form-text');
const button = document.querySelector('.add-form-button');
const downloadGet = document.querySelector('.download-GET');

getCommentsData()

let info = [];

function likesCounter() {
const likeButtons = document.querySelectorAll('.like-button');
const likes = document.querySelectorAll('.likes-counter');

likeButtons.forEach((likeButton, likeButtonId) => {
likeButton.onclick = function (event) {
  event.stopPropagation();
  if (likeButton.classList.contains('active-like')) {
    likeButton.classList.remove('active-like');
    likes[likeButtonId].innerHTML = +likes[likeButtonId].innerHTML - 1;
  } else {
    likeButton.classList.add('active-like')
    likes[likeButtonId].innerHTML = +likes[likeButtonId].innerHTML + 1;
  }
}
});
}

likesCounter();
function commentAndNameCopy() {
  const namePeoples = document.querySelectorAll('.name_people');
const commentTexts = document.querySelectorAll('.comment-text');
const commentsBlock = document.querySelectorAll('.comment');
commentsBlock.forEach((commentBlock, commentBlockId) => {
  commentBlock.addEventListener('click', function (event) {
    event.stopPropagation();
    addFormText.value = ('>' + commentTexts[commentBlockId].textContent + namePeoples[commentBlockId].textContent + ', ')
  })
});
}
renderComment();
likesCounter();
commentAndNameCopy();
buttonClick()

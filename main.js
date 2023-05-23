
const container = document.querySelector('.container');
const addForm = document.querySelector('.add_form');
const comments = document.querySelector('.comments')
const addFormName = document.querySelector('.add-form-name');
const addFormText = document.querySelector('.add-form-text');
const button = document.querySelector('.add-form-button');
const downloadGet = document.querySelector('.download-GET');

import { getListStudentsEdit } from './commentData.js'

getListStudentsEdit()
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
import { renderComment } from './render.js'

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

const download = document.querySelector('.download');
const deleteDiv = document.querySelector('.delete-div');
const removeDiv = document.querySelector('.remove-div');
button.addEventListener('click', function(event) {
  const data = new Date();
  const now = data.toLocaleString();
    download.style.display = 'block';
    removeDiv.classList.add('delete-div');
    return fetch("https://webdev-hw-api.vercel.app/api/v1/MnogoYje/comments", {
    method: "POST",
    body: JSON.stringify({
      text: addFormText.value,
      name: addFormName.value,
    }),
  })
  .then((response) => {
    if (response.status === 201) {
      return response.json();
    } 
    if (response.status === 400) {
      alert('Недостаточно символов, введите корректное имя и комментарий, от трех символов')
      throw new Error('Недостаточно символов');
    }
    if (response.status === 500) {
      alert('Произошла ошибка сервера, попробуйте позже');
      throw new Error('Произошла ошибка сервера, попробуйте позже');
    } 
    else {
      alert('Упс, что то пошло не так');
      throw new Error('Упс, что то пошло не так');
    }
  })
  .then(() => {
      return getCommentsData()
      renderComment();
      likesCounter();
      commentAndNameCopy();
  }).then(() => {
    download.style.display = 'none';
    removeDiv.classList.remove('delete-div');
  }).catch((error) => {
    download.style.display = 'none';
    removeDiv.classList.remove('delete-div');
    console.warn(error);
  })
});
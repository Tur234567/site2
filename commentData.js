let info = [];
const addFormName = document.querySelector('.add-form-name');
const addFormText = document.querySelector('.add-form-text');
const downloadGet = document.querySelector('download-GET');
function getCommentsData() {
  return fetch("https://webdev-hw-api.vercel.app/api/v1/MnogoYje/comments",
{
  method: "GET",
}).then((response) => {
  const JsonResponse = response.json();
  const data = new Date();
  const now = data.toLocaleString();
  JsonResponse.then((responseData => {
    const appComments = responseData.comments.map((comment) => {
      return {
        name: comment.author.name,
        date: new Date(comment.date),
        text: comment.text,
        likes: comment.likes,
      };
    })
    info = appComments;
      return renderComment();
      likesCounter();
      commentAndNameCopy();
  }))
  .then((response) => {
    return console.log(response);
    if (response.status === 200) {
      return response.json();
    } 
    if (response.status === 500) {
      alert('Произошла ошибка сервера, попробуйте позже');
      throw new Error('Произошла ошибка сервера, попробуйте позже');
    } else {
      throw new Error('Упс, что то пошло не так');
    }
  })
  .then(() => {
    return downloadGet.style.display = 'none';
  }).catch((error) => {
    downloadGet.textContent = 'Кажется что то пошло не так, попробуйте позже';
    console.warn(error);
  })
})
}

const comments = document.querySelector('.comments')
const renderComment = () => {
    const infoHtml = info.map((comment) => {
      return `<li class="comment">
        <div class="comment-header">
          <div class="name_people">${comment.name}</div>
          <div>${comment.date}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button class="like-button"></button>
          </div>
        </div>
      </li>`
    }).join("");
  
    comments.innerHTML = infoHtml;
  }
  const button = document.querySelector('.add-form-button');
  
  function buttonClick() {
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
        body: JSON.stringify({text: addFormText.value, name: addFormName.value,}),
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
  } 

export { getCommentsData, renderComment, buttonClick };
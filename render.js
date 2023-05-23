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
  };
  export default renderComment;
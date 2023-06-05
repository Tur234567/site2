import { loginTodos } from "./api.js";

let token = ''; 
let arr = [];
export { arr }
export function renderAndLogin({ info, addFormName, formLoginValue }) {
    const comments = document.querySelector('.comments')
    const loginForm = document.querySelector('.form_login');
    const addLoginButton = document.querySelector('.add-login-button');
    const removeForLogin = document.querySelector('.remove-for-login');
    const formInputPassword = document.querySelector('.form_login_password');
    const formInputLogin = document.querySelector('.form_login_login');
    if (token.value === ' ') {
        loginForm.style.display = 'none';
    } else {
        loginForm.style.display = 'block';
        removeForLogin.style.display = 'none';
        addLoginButton.addEventListener('click', function forToken() {
            removeForLogin.style.display = 'block';
            loginForm.style.display = 'none';
            
            loginTodos({ 
              login: formInputLogin.value, 
              password: formInputPassword.value,
            }).then((user) => {
              token = `Bearer ${user.user.token}`
              arr.push(token);
              addFormName.value = user.user.name;
              addFormName.disabled = "disabled";
            })
        });
    }
  const infoHtml = info.map((comment) => {
        let dates = '';
        const day = ('0' + comment.date.getDate()).slice(-2);
        const month = ('0' + (comment.date.getMonth() + 1)).slice(-2);
        const year = comment.date.getFullYear().toString().slice(-2);
        const hours = ('0' + comment.date.getHours()).slice(-2);
        const minutes = ('0' + comment.date.getMinutes()).slice(-2);
        dates = `${day}.${month}.${year} ${hours}:${minutes}`;
    return `<li class="comment">
      <div class="comment-header">
        <div class="name_people">${comment.name}</div>
        <div>${dates}</div>
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


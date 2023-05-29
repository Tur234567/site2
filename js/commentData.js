const getListStudentsEdit = () => { 
  
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
      alert('ПРОИЗОШЛА ОШИБКА СЕРВЕРА,ПОПРОБУЙТЕ ПОЗЖЕ!');
      throw new Error('ПРОИЗОШЛА ОШИБКА СЕРВЕРА,ПОПРОБУЙТЕ ПОЗЖЕ!');
    } else {
      throw new Error('ПОСМОТРИТЕ,ЧТО ТО ПОШЛО НЕ ПО ПЛАНУ!');
    }
  })
  .then(() => {
    return downloadGet.style.display = 'none';
  }).catch((error) => {
    downloadGet.textContent = 'ПРОИЗОШЛА ОШИБКА СЕРВЕРА,ПОПРОБУЙТЕ ПОЗЖЕ!';
    console.warn(error);
  })
})
}

getCommentsData()

export default getListStudentsEdit
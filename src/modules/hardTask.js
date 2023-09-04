export const hardTask =()=> {

  const tbody = document.querySelector('.comments-container')

  let Users = []
  let arrUsers = []
  let timeSlide = 10000
  let countShowBlock = 3
  let start = 0
  let end = countShowBlock

  const arrForRender = () => {
    if (start < Users.length - countShowBlock) {
      arrUsers = Users.slice(start, end)
    } else if (end == 0) {
      arrUsers = Users.slice(start)
    } else if (end > 0 && end < countShowBlock) {
       arrUsers = Users.slice(start)
       for (let i = 0; i < end; i ++) {
        arrUsers.push(Users[i])
       }
    }
    render()
  }

  const itemStartEnd = ()=> {
    start++
    if(start > 5) {
      start = 0
    }
    end++
    if(end > 5) {
      end = 0
    }
    arrForRender()
  }

  const getUsers = ()=> {
    return fetch('http://localhost:4545/comments')
    .then(res => res.json())
    .then((result) => {
      Users = result
    })
    .catch(function(error) {
      console.log(error)
    });
  }

  getUsers()

  const render = () => {
    let position = false
    let color = 0
    tbody.innerHTML = ""
    arrUsers.forEach(user => {
      position = !position
      color ++
      if (color > 3) {color = 1}

      tbody.insertAdjacentHTML('beforeend', `
        <div class="review-margin-bottom row comments-item">
        ${position ? `
          <div class="col-xs-3 col-sm-2">
            <div class="review-user" >
              <img src="images/users/${user.image ? user.image : "faseuser.png"}" alt="" class="img-responsive avatar">
            </div>
          </div>
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-${color == 1 ? "green" : color == 2 ? "gray" : color == 3 ? "orange" : ""} review-arrow review-arrow-${position ? "left" : "right"}">
              <p class="text-normal">${user.author}</p>
              <p>${user.comment}</p>
            </div>
          </div>`
          : `
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-${color == 1 ? "green" : color == 2 ? "gray" : color == 3 ? "orange" : ""} review-arrow review-arrow-${position ? "left" : "right"}">
              <p class="text-normal">${user.author}</p>
              <p>${user.comment}</p>
            </div>
          </div>
          <div class="col-xs-3 col-sm-2">
            <div class="review-user" >
              <img src="images/users/${user.image ? user.image : "faseuser.png"}" alt="" class="img-responsive avatar">
            </div>
          </div>
          `}
        </div>
      `)
    })
  }

  setInterval(itemStartEnd, timeSlide) 
}


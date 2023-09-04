export const sendApplication = (data) => {

   return fetch("http://localhost:4545/sendForm", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
 
}
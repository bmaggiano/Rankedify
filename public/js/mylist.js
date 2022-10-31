const myListBtn = document.getElementById("myList")

myListBtn.addEventListener("click", ()=>{
    window.location.replace(`/list/${user_id}`)
})
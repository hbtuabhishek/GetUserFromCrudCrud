function test(event){
    event.preventDefault();
    var uid=event.target.Email1.value;
    var uemail=event.target.Password1.value;
    var mobile=event.target.Mobile1.value;

    const obj={
        uid,
        uemail,
        mobile
    }

    axios.post("https://crudcrud.com/api/6303ef351c954e319f26f686871e98c4/bookingappointment", obj)
    .then((response)=>{
        console.log(response)

    })
    .catch((err)=>{
        console.log(err)
    })


//localStorage.setItem(obj.uid,JSON.stringify(obj))
//localStorage.setItem(obj.uemail,JSON.stringify(obj))
//localStorage.setItem(obj.mobile,JSON.stringify(obj))
showuser(obj)
}
window.addEventListener("DOMContentLoaded", ()=>{
const data = axios.get("https://crudcrud.com/api/6303ef351c954e319f26f686871e98c4/bookingappointment")
.then((response)=>{
    for(var i=0;i<response.data.length;i++){
        showuser(response.data[i]);
    }

    })
    .catch((error)=>{
        console.log(error)
    })
    console.log(data);
})

function showuser(obj)
{
    const parente = document.getElementById('list')
    const childe=document.createElement('li')
    childe.textContent=obj.uid+' '+ obj.uemail+' '+obj.mobile;
    parente.appendChild(childe)

    const deletebutton=document.createElement('input')
    deletebutton.type="button"
    deletebutton.value='Delete'
    deletebutton.onclick=()=>{
        localStorage.removeItem(obj.uid)
        parente.removeChild(childe)
    }

        const editbutton=document.createElement('input')
        editbutton.type="button"
        editbutton.value='Edit'
        editbutton.onclick=()=>{
            localStorage.removeItem(obj.uid)
            parente.removeChild(childe)
            document.getElementById('email').value=obj.uid
            document.getElementById('pass').value=obj.uemail
            document.getElementById('mob').value=obj.mobile
    }
    childe.appendChild(deletebutton)
    childe.appendChild(editbutton)
    parente.appendChild(childe)

}
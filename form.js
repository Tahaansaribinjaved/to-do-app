let container = document.getElementById('container')
let  toggle1 = document.querySelector('#signuph')
let  toggle2 = document.querySelector('#signinh')
toggle1.addEventListener('click',()=>{
    container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')

})
toggle2.addEventListener('click',()=>{
    container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')

})

// toggle = () => {
// 	container.classList.toggle('sign-in')
// 	container.classList.toggle('sign-up')
// }
// 
setTimeout(() => {
	container.classList.add('sign-in')
}, 200)



// var allUsers = []

// var Users = localStorage.getItem('Users')
// if(Users !== null){
//     allUsers = JSON.parse(Users)

// }
// // var check = document.getElementById('check')
// // var b = check.checked
// // var c = document.createElement('inp')
// // var a = check.getAttribute('type','text')
// // if(check = b){
//     // alert('a')
//     // 
//     // console.log(a)
    
// // }

// let signup =  document.querySelector('#signup')
// signup.addEventListener('click',()=>{

//     var email = document.getElementById('semail')
//     var password = document.getElementById('spass')
//     // var getName =  document.getElementById('stext')
//     // var name = document.getElementById('name')
//     // getName.value = name.innerText
//     var obj = {email : email.value , 
//         password : password.value
//     }
//     allUsers.push(obj)
//     localStorage.setItem('Users',JSON.stringify(allUsers))
//     localStorage.setItem('Password',password.value)
//     email.value = ''
//     password.value = ''
//     // location.href = 'login.html'
//     container.classList.toggle('sign-in')
// 	container.classList.toggle('sign-up')

// })


// // function Signup(){
    
// // }
// var a = JSON.parse( localStorage.getItem('Users'))
// // document.write(a)

// let signin =  document.querySelector('#signin')
// signin.addEventListener('click',()=>{

//     var email = document.getElementById('lemail').value
//     var password = document.getElementById('lpass').value
    
//     var filterUsers = allUsers.filter(function(data){
//         return data.email === email && data.password === password
    
        
//     })
//     email.value = ''    
//     password.value = ''    
//     if(filterUsers.length){
//         alert('kam hogaya')
//         // location.href = 'index.html'
//         // container.classList.toggle('sign-in')
//         // container.classList.toggle('sign-up')
    
//         // alert('user mil gaya')
//     }
//     else{
//         alert('Sign up karka aoe')
//     }
// })

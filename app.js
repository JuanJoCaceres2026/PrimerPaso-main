
const PP = {
 getUser(){try{return JSON.parse(localStorage.getItem('pp_user')||'null')}catch{return null}},
 setUser(user){localStorage.setItem('pp_user',JSON.stringify(user))},
 logout(){localStorage.removeItem('pp_user');location.href='index.html'},
 requireUser(){const user=this.getUser();if(!user){location.href='auth.html?mode=login';return null}return user}
};
document.addEventListener('DOMContentLoaded',()=>{
 const user=PP.getUser();
 document.querySelectorAll('[data-auth-login]').forEach(a=>{if(user){a.href='#';a.textContent='Mi cuenta';a.addEventListener('click',e=>{e.preventDefault();location.href='perfil.html'})}});
 document.querySelectorAll('[data-auth-register]').forEach(a=>{if(user){a.href='perfil.html';a.textContent='Mi perfil'}});
});

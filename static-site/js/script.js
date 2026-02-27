document.addEventListener('DOMContentLoaded',()=>{
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // simple nav highlight (for demo)
  const links = document.querySelectorAll('nav a');
  links.forEach(l=>l.addEventListener('click',()=>{
    links.forEach(x=>x.classList.remove('active'));
    l.classList.add('active');
  }));
});

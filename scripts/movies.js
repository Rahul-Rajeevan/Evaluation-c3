// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
q2=localStorage.getItem("amount");
document.getElementById("wallet").innerText=q2;
let id;
async function a1()
{
  z1=document.getElementById("search").value;
  const url=`https://www.omdbapi.com/?s=${z1}&apikey=c25e878a`;
  let w1=await fetch(url);
  let w2=await w1.json();
  // console.log(w2)
  return w2.Search;
}
function t(s)
{
  return document.createElement(s);
}
function b(s1)
{
  document.querySelector("#movies").innerHTML=null;
  //console.log(s1,typeof s1);
  s1.forEach(function(e){
  x1=t("div");
  x2=t("img");
  x2.src=e.Poster;
  x3=t("p");
  x3.innerText=e.Title;
  x4=t("button");
  x4.innerText="Book now";
  x4.setAttribute("class","book_now");
  x4.addEventListener("click",function(){
    d(e);
  })
  function d(e)
  {
    localStorage.setItem("movie",JSON.stringify(e));
    location.replace('checkout.html');
  }
  x1.append(x2,x3,x4);
  document.querySelector("#movies").append(x1);
  })
 }
 async function main()
 {
   s1=await a1();
   b(s1);
 }
 function de(func,delay)
 {
  if(id)
  clearTimeout(id); 
  id=setTimeout(function()
   {
    func();
   },delay);
 }
// Store the wallet amount to your local storage with key "amount"
document.getElementById("wallet").innerText=0;
function ge(s)
{
  return document.getElementById(s).value;
}
q2=localStorage.getItem("amount");
document.getElementById("wallet").innerText=q2;
function a()
{
  q1=ge("amount");
  q1=Number(q1);
  q2=Number(q2);
  q2=q2+q1;
  localStorage.setItem("amount",q2);
  document.getElementById("wallet").innerText=q2;
}
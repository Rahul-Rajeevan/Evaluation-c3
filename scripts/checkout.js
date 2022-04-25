// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
q2=localStorage.getItem("amount");
  document.getElementById("wallet").innerText=q2;
  q3=JSON.parse(localStorage.getItem("movie"));
  function t(s)
  {
    return document.createElement(s);
  }
  x1=t("div");
  x2=t("img");
    x2.src=q3.Poster;
    x3=t("h1");
    x3.innerText=q3.Title;
    x1.append(x3,x2);
    document.getElementById("movie").append(x1);
    function g()
    {
      p1=document.getElementById("number_of_seats").value;
      p1=Number(p1);
      q2=Number(q2);
      if(q2-p1*100<0)
      alert("Insufficient Balance!");
      else
      {q2=q2-p1*100;
        localStorage.setItem("amount",q2);
        document.getElementById("wallet").innerText=q2;
        alert("Booking successful!");}
    }
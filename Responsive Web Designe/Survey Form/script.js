const inp = document.getElementById("slider");
document.getElementById("slider").oninput = () => {
  document.getElementById("demo").innerHTML = inp.value;
};

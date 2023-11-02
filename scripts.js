let darkIcon = document.getElementById("darkIcon");
let lightIcon = document.getElementById('lightIcon')
let modeChanger = document.getElementById("mode-changer");

darkIcon.onclick = function () {
  
    modeChanger.classList.remove("light");
    modeChanger.classList.add("dark-mode");
  darkIcon.style.display='none';
  lightIcon.style.display='block';
};

lightIcon.onclick = function () {
    


      modeChanger.classList.remove("dark-mode");
      modeChanger.classList.add("light");
    darkIcon.style.display='block';
    lightIcon.style.display='none';
  };
  

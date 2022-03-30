var input = document.querySelector(".addTask > input");
var btn = document.querySelector(".addTask > button");

btn.addEventListener("click", (e) => {
  const notCompleted = document.querySelector(".notCompleted");
  const Completed = document.querySelector(".Completed");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    notCompleted.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  }
  
  checkBtn.addEventListener("click", () => {
    newLi.remove();
    Completed.appendChild(newLi);
    checkBtn.style.display = "none";
  })

  delBtn.addEventListener("click", () => {
    const checkedLi = newLi;
    checkedLi.remove();
  })
});
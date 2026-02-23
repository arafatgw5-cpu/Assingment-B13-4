const totalElement= document.getElementById('totalCount')
const interviewCountElement= document.getElementById('interviewCount')
const rejectedCountElement= document.getElementById('rejectedCount')
console.log(totalElement,interviewCountElement,rejectedCountElement)

const jobCountElement= document.getElementById("jobCount")
console.log(jobCountElement.innerText);

let currentTab = "all"

const tabBtns= document.querySelectorAll('.tab-btn');
console.log(tabBtns.length);

tabBtns.forEach(btn => {
    console.log(btn.getAttribute("data-tab"))
    
});
function switchTab(Tab){
    currentTab=Tab;
    console.log(Tab)
};

const emptyState = document.getElementById("emptyState");
console.log(emptyState);
emptyState.classList.remove("hidden")
document.getElementById("emptyIcon").innerHTML =
  '<img src="jobs.png" class="mx-auto w-24">';
  document.getElementById("emptyTitle").textContent="No jobs available"
  document.getElementById("emptySub").textContent="Check back soon for new job opportunities"
  console.log("show")
  emptyState.classList.add("hidden");
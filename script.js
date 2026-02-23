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

//   card
// card 
const card = document.getElementById("job-1");
console.log("card:", card);
const badge        = card.querySelector(".status-badge");
const interviewBtn = card.querySelector(".btn-interview");
const rejectedBtn  = card.querySelector(".btn-rejected");
function setStatus(id, status) {
    const job          = document.getElementById("job-" + id);
    const badge        = job.querySelector(".status-badge");
    const interviewBtn = job.querySelector(".btn-interview");
    const rejectedBtn  = job.querySelector(".btn-rejected");
    interviewBtn.className = "btn-interview px-3 py-1 border rounded transition-all duration-200";
    rejectedBtn.className  = "btn-rejected px-3 py-1 border rounded transition-all duration-200";
    if (job.getAttribute("status") === status) {
        job.setAttribute("status", "none");
        badge.textContent = "";
        badge.className   = "status-badge hidden px-2 py-0.5 rounded text-sm";
        updateJobs();
        return;
    }
    job.setAttribute("status", status);
    badge.textContent = status === "interview" ? "Interview" : "Rejected";
    if (status === "interview") {
        badge.className= "status-badge px-2 py-0.5 rounded text-sm bg-green-500 text-white";
        interviewBtn.className = "btn-interview px-3 py-1 border rounded transition-all duration-200 bg-green-500 text-white border-green-500";
    } else {
        badge.className= "status-badge px-2 py-0.5 rounded text-sm bg-red-500 text-white";
        rejectedBtn.className = "btn-rejected px-3 py-1 border rounded transition-all duration-200 bg-red-500 text-white border-red-500";
    }

    updateJobs();
}
function deleteJob(id) {
const job = document.getElementById("job-" + id);

    job.remove();

    updateJobs();
}
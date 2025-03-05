
document.getElementById("clear-history").addEventListener("click", function () {
    let activityContainer = document.querySelector(".activity-container");
    
    if (activityContainer.children.length > 0) {
        let confirmClear = confirm("Are you sure you want to clear the activity log?");
        if (confirmClear) {
            activityContainer.innerHTML = "";
        }
    }
});
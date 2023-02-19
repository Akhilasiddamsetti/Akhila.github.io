const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {
    const ageInput = document.getElementById("age");
    const age = parseInt(ageInput.value);

    if (isNaN(age)) {
        alert("Please enter a valid age!");
        return;
    }

    if (age >= 18) {
        document.getElementById("result").innerHTML = "Congratulations! You are eligible to drive.";
    } else {
        const container = document.querySelector(".container");
        const alert = document.createElement("div");
        alert.classList.add("alert");
        alert.innerText = "Sorry! You are not eligible to drive.";
        container.appendChild(alert);
    }
});

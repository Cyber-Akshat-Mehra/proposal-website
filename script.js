
// Show countdown after intro
setTimeout(() => {
    document.getElementById("introSection").style.display = "none";
    document.getElementById("countdownSection").style.display = "block";
    startCountdown();
}, 9000);

// Countdown logic
function startCountdown() {
    let count = 3;
    const countdownEl = document.getElementById("countdown");
    const countdownSection = document.getElementById("countdownSection");
    const proposalSection = document.getElementById("proposal");

    countdownEl.textContent = count;
    const timer = setInterval(() => {
        count--;
        if (count <= 0) {
            clearInterval(timer);
            countdownSection.style.display = "none";
            proposalSection.style.display = "block";
        } else {
            countdownEl.textContent = count;
        }
    }, 1000);
}

// Show love animation + WhatsApp redirection
function showLove() {
    document.getElementById("result").style.display = "block";
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 20) + "px";
        heart.textContent = "❤️";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }

    setTimeout(() => {
        const phoneNumber = "919540741195"; // India format, include country code
        const message = encodeURIComponent("Yes! I said yes to your proposal! 💍❤️");
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }, 3500);
}

function nope() {
    alert("No is not an option 😜 Try again...");
}
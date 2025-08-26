const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

let currentIndex = 0;

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const part3 = document.querySelector(".part3");
const hourly = part3.querySelector(".hourly");
const titleEl = hourly.querySelector("p"); // the title inside .hourly
const textEl = part3.querySelector(".part3-p");
const buttons = part3.querySelectorAll(".arrow-btn");

const part3Items = [
  {
    title: "Hourly Court Rental",
    text: "Step into a space built for players - to grow, compete, and thrive.",
    img: "./assets/balls.png"
  },
  {
    title: "Private Coaching",
    text: "One-on-one lessons designed to elevate your skills fast.",
    img: "../assets/court2.jpg"
  },
  {
    title: "Group Training",
    text: "Train with friends and meet new players while improving together.",
    img: "../assets/court3.jpg"
  }
];

// Function to update the content
function updatePart3() {
  const item = part3Items[currentIndex];
  titleEl.textContent = item.title;
  textEl.innerHTML = item.text.replace(/\n/g, "<br>"); // if you want line breaks
  hourly.style.backgroundImage = `url(${item.img})`;
}

// Event listeners for arrows
buttons[0].addEventListener("click", () => { // left arrow
  currentIndex = (currentIndex - 1 + part3Items.length) % part3Items.length;
  updatePart3();
});

buttons[1].addEventListener("click", () => { // right arrow
  currentIndex = (currentIndex + 1) % part3Items.length;
  updatePart3();
});

// Initialize the first slide
updatePart3();


// Array of reviews
const reviews = [
  {
    title: "Feel Our Rythym",
    text: `"As a busy mom who hadn't played since college, Horizount made my comeback magical. Coach Lisa transformed my slice into a weapon - now my husband refuses to play me."`,
    stars: "⭐⭐⭐⭐⭐ 5",
    name: "Skylar Bennett",
    role: "Amateur Champion",
    image: "./assets/female.png"
  },
  {
    title: "Unmatched Coaching",
    text: `"Coach Mike helped me perfect my serve. Every session was challenging but fun, and my skills skyrocketed!"`,
    stars: "⭐⭐⭐⭐⭐ 5",
    name: "John Doe",
    role: "Professional Player",
    image: "../assets/male.png"
  },
  {
    title: "Friendly Environment",
    text: `"The club is so welcoming. I've made new friends and improved my game at the same time!"`,
    stars: "⭐⭐⭐⭐ 4",
    name: "Emma Watson",
    role: "Hobbyist",
    image: "./assets/female2.png"
  }
];

// Get elements
const reviewTitle = document.querySelector(".review-title");
const reviewText = document.querySelector(".thereview");
const reviewStars = document.querySelector(".review");
const reviewerName = document.querySelector(".switches-titles h2");
const reviewerRole = document.querySelector(".switches-titles p");
const counterNum = document.querySelector(".counter-num");
const counterImage = document.querySelector(".counter-image");
const prevBtn = document.querySelector(".switch-btn.left");
const nextBtn = document.querySelector(".switch-btn.right");


// Function to update review
function updateReview() {
  const review = reviews[currentIndex];
  reviewTitle.textContent = review.title;
  reviewText.innerHTML = review.text.replace(/\n/g, "<br>");
  reviewStars.textContent = review.stars;
  reviewerName.textContent = review.name;
  reviewerRole.textContent = review.role;
  counterNum.innerHTML = `${String(currentIndex + 1).padStart(2,"0")}<span class="outof">/${reviews.length}</span>`;
  counterImage.src = review.image;
}

// Initialize
updateReview();

// Event listeners
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  updateReview();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateReview();
});

// faq
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const isActive = question.classList.contains('active');

        // Close all questions
        questions.forEach(q => q.classList.remove('active'));
        questions.forEach(q => {
            const icon = q.querySelector('svg path');
            icon.setAttribute('d', "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"); // plus
        });

        // Open clicked question if it wasn't active
        if (!isActive) {
            question.classList.add('active');
            const icon = question.querySelector('svg path');
            icon.setAttribute('d', "M200-440h560v-80H200v80Z"); // minus
        }
    });
});

// top button 
// Get the button
const topBtn = document.getElementById("topBtn");

// Show button when scrolling down 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to top when button clicked
topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

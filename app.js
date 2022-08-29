// LOCAL REVIEW DATA
const reviews = [
  {
    id: 1,
    name: "Asia Smith",
    job: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "David Johnson",
    job: "Web Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "Manager",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// SELECT ELEMENTS
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

// START STARTING PROFILE
let currentPerson = 0;

// LOAD INITIAL PERSON
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentPerson);
});

// SHOW PERSON
function showPerson(p) {
  const person = reviews[p];
  img.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
}

// SHOW NEXT PERSON
nextBtn.addEventListener("click", function () {
  currentPerson++;
  if (currentPerson > reviews.length - 1) {
    currentPerson = 0;
  }
  showPerson(currentPerson);
});

// SHOW PREV PERSON
prevBtn.addEventListener("click", function () {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = reviews.length - 1;
  }
  showPerson(currentPerson);
});

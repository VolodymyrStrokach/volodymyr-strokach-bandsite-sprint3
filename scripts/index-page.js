let conversationComments = [{
    "name": "Connor Walton",
    "date": "02/17/2021",
    "comment": "This is art. This is inexplicable magic expressed in the purest way, everything  that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
},

{
    "name": "Emilie Beach",
    "date": "01/09/2021",
    "comment": "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
},

{
    "name": "Miles Acosta",
    "date": "12/20/2020",
    "comment": "I can t stop listening. Every time I hear  one of their songs the vocals it gives me goosebumps. Shivers straight down  my spine. What a beautiful expression of  creativity. Can t get enough."
},
];

let commentsDiv = document.querySelector(".conversation__comments");

function displayComment(commentObj) {

let comments__card = document.createElement("div");
comments__card.className = "conversation__card";

let comment__row = document.createElement("div");
comment__row.className = "conversation__row";

let column__picture = document.createElement("div");
column__picture.className = "conversation__picture";
comment__row.appendChild(column__picture);

let profile__picture = document.createElement("img");
profile__picture.src = ".//assets/Images/Mohan-muruge.jpg";
profile__picture.className = "conversation__profile-picture";
column__picture.appendChild(profile__picture);

let column__details = document.createElement("div");
column__details.className = "conversation__details";
comment__row.appendChild(column__details);

let column__namedate = document.createElement("div");
column__namedate.className = "conversation__nameAndDate";

let comment__name = document.createElement("p");
comment__name.innerText = commentObj["name"];
comment__name.className = "conversation__nameAndDate-name";
column__namedate.appendChild(comment__name);

let comment__date = document.createElement("p");
comment__date.className = "conversation__nameAndDate-date"
comment__date.innerText = commentObj["date"];
column__namedate.appendChild(comment__date);

column__details.append(column__namedate);

let comment__text = document.createElement("p");
comment__text.innerText = commentObj["comment"];
column__details.appendChild(comment__text);

comments__card.appendChild(comment__row);
commentsDiv.appendChild(comments__card);
}

for (let i = 0; i < conversationComments.length; i++) {
displayComment(conversationComments[i]);
}


let form = document.querySelector(".conversation__form");
form.addEventListener("submit", function(e) {
e.preventDefault();
let newDate = new Date();
let currentDate = (newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+newDate.getFullYear();
let newCommentObj = {
    "name": e.target.name.value,
    "date": currentDate,
    "comment": e.target.comment.value
}

conversationComments.unshift(newCommentObj);

commentsDiv.innerText = "";

for (let i = 0; i < conversationComments.length; i++) {
    displayComment(conversationComments[i]);
}

form.reset();
});

document.addEventListener("DOMContentLoaded", function() {
    async function loadComments() {
        const comments = await bandAPI.getComments();
        const commentsDiv = document.querySelector(".conversation__comments");
        
        comments.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.innerHTML = `
                <p>${comment.name}</p>
                <p>${comment.text}</p>
                <img src="${comment.avatar || './assets/images/Mohan-muruge.jpg'}" alt="Comment avatar">
            `;
            commentsDiv.prepend(commentElement);
        });
    }

    loadComments();

    const commentForm = document.querySelector(".conversation__form");
    commentForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const nameInput = event.target.querySelector("input[name='name']");
        const commentInput = event.target.querySelector("textarea[name='comment']");

     
        await bandAPI.postComment(commentData);

        loadComments(); 
    });
});

const bandAPI = new BandSiteAPI("e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");

async function loadComments() {
  try {
    const comments = await bandAPI.getComments();
    const commentsList = document.querySelector(".comments-list");

    comments.forEach(comment => {
      const commentElement = document.createElement("div");
  
      commentsList.appendChild(commentElement);
    });
  } catch (error) {
    console.error("Failed to load comments:", error);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  loadComments();
});

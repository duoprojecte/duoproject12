
/// arrray with  question and  answers
var questions = [
  {
    question: "What is the most romantic way to spend time with your partner?",
    answers: [
      { text: "Beach vacation" },
      { text: "Candlelit dinner" },
      { text: "Sunset walk" },
    ],
   
  },
  {
    question: "What is the most exciting way to spend a weekend?",
    answers: [
      { text: "Skydiving" },
      { text: "Hiking" },
      { text: "White water rafting" },
    ],
  },
  {
    question: "How do you like to receive love and affection?",
    answers: [
      { text: "Words of affirmation" },
      { text: "Compliments" },
      { text: "Listening actively" },
    ],
  },
  {
    question: "What is the most important way to spend quality time with your partner?",
    answers: [
      { text: "Quality time" },
      { text: "Undivided attention" },
      { text: "Shared activities" },
    ],
  },
  {
    question: "What is the best way to show love and appreciation?",
    answers: [
      { text: "Gifts" },
      { text: "Through gifts and surprises" },
      { text: "Luxury items" },
    ],
  },
]




var personalitytypes = [
  {
    type: "Romantic",
    answers: [
      "Beach vacation",
      "Candlelit dinner",
      "Words of affirmation",
    ],
    description:
      "Romantics value emotional connection and intimacy in their relationships.💏 They prioritize creating memorable experiences and showing affection through grand gestures.💞",
    count: 0,
  },
  {
    type: "Adventurous",
    answers: [
      "Skydiving",
      "Hiking",
      "Independence and freedom",
    ],
    description:
      "Adventurous individuals crave excitement and novelty in their relationships. 🚣‍♂️They prioritize freedom and independence, 🌊and value partners who can keep up with their spontaneous nature.🏃‍♂️",
    count: 0,
  },
  {
    type: "Verbal",
    answers: [
      "Words of affirmation",
      "Meaningful conversations",
      "Active listening",
    ],
    description:
      "Verbal individuals thrive on communication and value open, honest dialogue in their relationships. 📝They prioritize emotional support and encouragement from their partners.💸",
    count: 0,
  },
  {
    type: "Quality Time",
    answers: [
      "Quality time",
      "Undivided attention",
      "Shared activities",
    ],
    description:
      "Those who value Quality Time prioritize spending meaningful time with their partners and engaging in shared activities. 🎉They crave emotional connection and reassurance in their relationships🏖️.",
    count: 0,
  },
  {
    type: "Material",
    answers: [
      "Gifts",
      "Luxury items",
      "Through actions and gestures",
    ],
    description:
      "Material personalities appreciate tangible expressions of love and value the comfort and security that comes with material possessions. 💎They prioritize partners who can provide for their needs.🏹",
    count: 0,
  },
]


//// the first page
$(".intro-container").append(`
    <h1> ❤️Welcome LoveLog your personality check ❤️</h1>
    <p>Get ready to discover your true self!</p>
    <p>Answer a series of questions and find out what makes you tick.</p>
    <p>What kind of personality type will you be 😊? Romantic, Adventurous, or something else?</p>
    <button  class="start-button">Start the Quest!</button>
  `)

//// the seconde page
$(".check-feelings-page").append(`
    <h2>How are you feeling today?</h2>
    <div class="emoji-container">
      <img src=".//imagescoll/happy (1).png " alt="Happy" class="happy-emoji">
      <img src=".//imagescoll/happy-face.png" alt="Neutral" class="neutral-emoji">
      <img src=".//imagescoll/sad-face.png" alt="Sad" class="sad-emoji">
    </div>
    <div class="message-container"></div>
  `)

///// First function to hide and show the two pages, the intro and the check feelings
$(".start-button").on("click", function () {
  $(".intro-container").hide()
  $(".check-feelings-page").show()
});

////// the this refor to the image  / so her wee will change the image selonn the
$(".emoji-container img").click(function () {
  var message = "";
  if ($(this).attr("alt") === "Happy") {
    message =
      "Yay! So happy for you! Keep shining! 😊 Let's have some fun! Get ready to start our adventure! Are you ready?"
  } else if ($(this).attr("alt") === "Neutral") {
    message =
      "Hey, feeling neutral? Let's find a smile together!😐  Let's have some fun! Get ready to start our adventure! Are you ready?"
  } else if ($(this).attr("alt") === "Sad") {
    message =
      "Aww, sorry to hear that. You're strong & capable! Let's lift your spirits! 😔  Let's have some fun! Get ready to start our adventure! Are you ready?"
  }
  $(".message-container").text(message);
  //// .text :  sets the text  to the value of message
  setTimeout(function () {
    affiche(questions);
    $(".check-feelings-page").hide()
    $("#question-personality").show()
  }, 2000)
})

// .attr() gets or sets an HTML element's attribute value

/// this functionn is to make the qution and the answer

var questionindex = 0
var useranswers = []
function affiche(questions) {
  if (questionindex < questions.length) {
    var question = questions[questionindex];
    var $question = $('<div class="question"></div>')
    $("#question-personality").append($question)
    $question.append("<h2>" + question.question + "</h2>")
    var $answerslist = $("<p>");
    $question.append($answerslist)
    for (var i = 0; i < question.answers.length; i++) {
      var answer = question.answers[i]
      var $answer = $(`<button class="btrn"> ${answer.text}</button> <br> <br>`)
      $answerslist.append($answer)



      $answer.on("click", function () {
        $question.remove()
        useranswers.push(answer.text)
        questionindex++
        affiche(questions)
      })
    }
  } else {
    displayPersonalitytype()
  }
}





function displayPersonalitytype() {
  var message = ""
  var personalitytype = ""
  var personalitydescription = ""

  for (var i = 0; i < personalitytypes.length; i++) {
    for (var j = 0; j < useranswers.length; j++) {
      if (personalitytypes[i].answers.includes(useranswers[j])) {
        personalitytypes[i].count++
      }
    }
  }
  var max = personalitytypes[0]
  for (let index = 0; index < personalitytypes.length; index++) {
    const element = personalitytypes[index]
    if (max.count < element.count) {
      max = element;
    }
  }
  console.log(personalitytypes)
  console.log(max);
  personalitytype = max.type;
  personalitydescription = max.description;
  if (personalitytype) {
    message = "<h1>Congratulations! Your personality type is " + personalitytype + "!</h1>"
    message += "<p>" + personalitydescription + "</p>"
  } else {
    message = "<h1>Sorry, we couldn't determine your personality type.</h1>"
  }
  $("#result-container").html(message)
}


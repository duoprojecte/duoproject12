


///// to link pages 

{/* <button id="like-btn">Like</button>

$(document).ready(function() {
  $('#like-btn').on('click', function() {
    $(this).text('Liked!');
    $(this).addClass('liked');
  })
})



<a id="like-link" href="/page-url">Like</a> */}

 /// arrray with  question and  answers
var questions = [
  {
    question: 'What is the most romantic way to spend time with your partner?',
    answers: [
      { text: 'Beach vacation' },
      { text: 'Through words and poetry' },
      { text: 'Words of affirmation' },
      { text: 'Candlelit dinner' },
      { text: 'Sunset walk' }
    ]
  },
  {
    question: 'What is the most exciting way to spend a weekend?',
    answers: [
      { text: 'Mountain retreat' },
      { text: 'Skydiving' },
      { text: 'Hiking' },
      { text: 'White water rafting' }
    ]
  },
  {
    question: 'What is the best way to spend a day in the city?',
    answers: [
      { text: 'City break' },
      { text: 'Museum visit' },
      { text: 'Art gallery' },
      { text: 'Concert' }
    ]
  },
  {
    question: 'How do you like to receive love and affection?',
    answers: [
      { text: 'Words of affirmation' },
      { text: 'Compliments' },
      { text: 'Listening actively' },
      { text: 'Encouraging words' }
    ]
  },
  {
    question: 'What is the most important way to spend quality time with your partner?',
    answers: [
      { text: 'Quality time' },
      { text: 'Undivided attention' },
      { text: 'Shared activities' },
      { text: 'Meaningful conversations' }
    ]
  },
  {
    question: 'What is the best way to show love and appreciation?',
    answers: [
      { text: 'Gifts' },
      { text: 'Through gifts and surprises' },
      { text: 'Luxury items' },
      { text: 'Practical items' }
    ]
  },
  {
    question: 'What is the most important aspect of a relationship?',
    answers: [
      { text: 'Trust and loyalty' },
      { text: 'Faithfulness' },
      { text: 'Reliability' },
      { text: 'Dependability' }
    ]
  },
  {
    question: 'What is the most important aspect of personal growth?',
    answers: [
      { text: 'Independence and freedom' },
      { text: 'Autonomy' },
      { text: 'Self-sufficiency' },
      { text: 'Unconditional support' }
    ]
  },
  {
    question: 'How do you like to receive emotional support?',
    answers: [
      { text: 'Emotional support and validation' },
      { text: 'Empathy' },
      { text: 'Active listening' },
      { text: 'Comfort and reassurance' }
    ]
  },
  {
    question: 'What is the most practical way to show love and care?',
    answers: [
      { text: 'Through actions and gestures' },
      { text: 'Helping with chores' },
      { text: 'Running errands' },
      { text: 'Cooking meals' }
    ]
  }
]

   /// this array is to hold the type of personality 
var personalitytypes = [
  {
    type: "Romantic",
    answers: ["Beach vacation", "Quality time", "Gifts", "Words of affirmation", "Trust and loyalty"],
    description: "Romantics value emotional connection and intimacy in their relationships. They prioritize creating memorable experiences and showing affection through grand gestures."
  },
  {
    type: "Adventurous",
    answers: ["Skydiving", "City break", "Empathy", "Independence and freedom", "Through actions and gestures"],
    description: "Adventurous individuals crave excitement and novelty in their relationships. They prioritize freedom and independence, and value partners who can keep up with their spontaneous nature."
  },
  {
    type: "Urban",
    answers: ["Museum visit", "Undivided attention", "Through gifts and surprises", "Compliments", "Faithfulness"],
    description: "Urban personalities appreciate the finer things in life and value sophistication in their relationships. They prioritize intellectual connections and enjoy exploring new cultural experiences with their partners."
  },
  {
    type: "Verbal",
    answers: ["Words of affirmation", "Meaningful conversations", "Encouraging words", "Active listening", "Reliability"],
    description: "Verbal individuals thrive on communication and value open, honest dialogue in their relationships. They prioritize emotional support and encouragement from their partners."
  },
  {
    type: "Quality Time",
    answers: ["Quality time", "Undivided attention", "Shared activities", "Comfort and reassurance", "Dependability"],
    description: "Those who value Quality Time prioritize spending meaningful time with their partners and engaging in shared activities. They crave emotional connection and reassurance in their relationships."
  },
  {
    type: "Material",
    answers: ["Gifts", "Luxury items", "Practical items", "Through actions and gestures", "Unconditional support"],
    description: "Material personalities appreciate tangible expressions of love and value the comfort and security that comes with material possessions. They prioritize partners who can provide for their needs."
  },
  {
    type: "Commitment",
    answers: ["Trust and loyalty", "Faithfulness", "Reliability", "Dependability", "Autonomy"],
    description: "Individuals who value Commitment prioritize long-term relationships and value loyalty and trust in their partners. They seek stability and security in their relationships."
  },
  {
    type: "Independence",
    answers: ["Independence and freedom", "Autonomy", "Self-sufficiency", "Unconditional support", "Emotional support and validation"],
    description: "Independent personalities value their autonomy and prioritize maintaining their individuality in relationships. They seek partners who respect their need for space and independence."
  },
  {
    type: "Emotional",
    answers: ["Emotional support and validation", "Empathy", "Active listening", "Comfort and reassurance", "Self-awareness"],
    description: "Emotional individuals prioritize emotional connection and validation in their relationships. They value partners who can provide emotional support and empathy."
  },
  {
    type: "Practical",
    answers: ["Through actions and gestures", "Helping with chores", "Running errands", "Cooking meals", "Practical support"],
    description: "Practical personalities value actions over words and prioritize partners who can provide tangible support and assistance. They seek reliability and dependability in their relationships."
  }
]

//// the first page 
  $('.intro-container').append(`
    <h1>Welcome to Personality Quest!</h1>
    <p>Get ready to discover your true self!</p>
    <p>Answer a series of questions and find out what makes you tick.</p>
    <p>What kind of personality type will you be? Romantic, Adventurous, or something else?</p>
    <button class="start-button">Start the Quest!</button>
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
  $('.start-button').on('click', function() {
    // useranswers = []
    $('.intro-container').hide()
    $('.check-feelings-page').show()

  })

  
////// the this refor to the image  / so her wee will change the image selonn the 
  $(".emoji-container img").click(function() {
    var message = "";
    if ($(this).attr("alt") === "Happy") {
      message = "Yay! So happy for you! Keep shining! 😊 Let's have some fun! Get ready to start our adventure! Are you ready?"
    } else if ($(this).attr("alt") === "Neutral") {
      message = "Hey, feeling neutral? Let's find a smile together!😐  Let's have some fun! Get ready to start our adventure! Are you ready?"
    } else if ($(this).attr("alt") === "Sad") {
      message = "Aww, sorry to hear that. You're strong & capable! Let's lift your spirits! 😔  Let's have some fun! Get ready to start our adventure! Are you ready?"
    }
    $(".message-container").text(message)
    //// .text :  sets the text  to the value of message
    setTimeout(function() {
      affiche(questions)
      $('.check-feelings-page').hide()
      $('#question-personality').show()
    }, 2000)
    
  })

  // .attr() gets or sets an HTML element's attribute value
  
  var questionindex= 0
  var useranswers = []
  
  function affiche(questions) {
    if (questionindex < questions.length) {
      var question = questions[questionindex]
      var $question = $('<div class="question"></div>')
      $('#question-personality').append($question);
      $question.append('<h2>' + question.question + '</h2>')    
      var $answerslist = $('<p>')
      $question.append($answerslist)
      for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        var $answer = $('<p><input name="question' + questionindex + '" value="' + answer.text + '">')
        $answerslist.append($answer)
  
        $answer.on('click', function() {
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
    
    
    var message = ''
    var personalitytype = ''
    var personalitydescription = ''
  
  
    for (var i = 0; i < personalitytypes.length; i++) {
      var count = 0;
      for (var j = 0; j < useranswers.length; j++) {
        if (personalitytypes[i].answers.includes(useranswers[j])) {
          count++;
        }
      }
      if (count >= useranswers.length / 2) {
        personalitytype = personalitytypes[i].type;
        personalitydescription = personalitytypes[i].description
      }
    }
  
    if (personalitytype) {
      message = '<h1>Congratulations! Your personality type is ' + personalitytype + '!</h1>'
      message += '<p>' + personalitydescription + '</p>'
    } else {
      message = '<h1>Sorry, we couldn\'t determine your personality type.</h1>'
    }
    $('#result-container').html(message)
  }
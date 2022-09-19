function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "How are you") {
        return "I am Fine , Hope you also fine.";
    }else if (input == "kesa hai") {
        return "Sab thek , asha karta hu tum bhi thek ho .";
    }else if (input == "Yes") {
        return "Nice to hear.";
    }
     else {
        return "Try asking something else!";
    }
}
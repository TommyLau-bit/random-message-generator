// Randomized Message Generator

// Data Arrays for Randomized Message
const firstPart = [
    "The stars say",
    "Your destiny reveals",
    "A fortune cookie whispers",
    "Ancient wisdom proclaims",
  ];
  
  const secondPart = [
    "you will encounter unexpected opportunities.",
    "challenges will pave the way for greatness.",
    "a small decision today will have a big impact tomorrow.",
    "happiness comes to those who seek it actively.",
  ];
  
  const thirdPart = [
    "Trust the process.",
    "Keep an open mind.",
    "Stay curious and explore.",
    "Believe in yourself.",
  ];
  
  // Function to Generate a Random Message
  function generateMessage() {
    const part1 = firstPart[Math.floor(Math.random() * firstPart.length)];
    const part2 = secondPart[Math.floor(Math.random() * secondPart.length)];
    const part3 = thirdPart[Math.floor(Math.random() * thirdPart.length)];
    
    return `${part1} ${part2} ${part3}`;
  }
  
  // Function to Display All Possible Messages
  function showAllMessages() {
    console.log("Here are all possible messages:");
    firstPart.forEach((fp) => {
      secondPart.forEach((sp) => {
        thirdPart.forEach((tp) => {
          console.log(`${fp} ${sp} ${tp}`);
        });
      });
    });
  }
  
  // Function to Add a New Message Part
  function addMessagePart(partCategory, newMessage) {
    switch (partCategory) {
      case "firstPart":
        firstPart.push(newMessage);
        console.log(`Added to firstPart: "${newMessage}"`);
        break;
      case "secondPart":
        secondPart.push(newMessage);
        console.log(`Added to secondPart: "${newMessage}"`);
        break;
      case "thirdPart":
        thirdPart.push(newMessage);
        console.log(`Added to thirdPart: "${newMessage}"`);
        break;
      default:
        console.error(`Invalid category: "${partCategory}". Choose "firstPart", "secondPart", or "thirdPart".`);
    }
  }
  
  // Function to Show All Parts in a Category
  function showParts(partCategory) {
    switch (partCategory) {
      case "firstPart":
        console.log("First Part Messages:");
        console.log(firstPart);
        break;
      case "secondPart":
        console.log("Second Part Messages:");
        console.log(secondPart);
        break;
      case "thirdPart":
        console.log("Third Part Messages:");
        console.log(thirdPart);
        break;
      default:
        console.error(`Invalid category: "${partCategory}". Choose "firstPart", "secondPart", or "thirdPart".`);
    }
  }
  
  // Display a Random Message
  console.log("Randomized Message:");
  console.log(generateMessage());
  
  // Show All Possible Messages
  console.log("\nShow All Messages (optional):");
  showAllMessages();
  
  // Add a New Message to First Part and Display Updated Messages
  console.log("\nAdding a New Message:");
  addMessagePart("firstPart", "A wise owl hoots");
  showParts("firstPart");
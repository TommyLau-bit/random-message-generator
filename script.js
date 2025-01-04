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
  
  // Output Random Message
  console.log(generateMessage());
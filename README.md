Randomized Message Generator

Overview:
This project is a Randomized Message Generator built with JavaScript. Each time the program runs, it outputs a unique, randomized message composed of three distinct parts. The project demonstrates an understanding of JavaScript arrays, functions, and randomness while also including additional features for flexibility and user interaction.

Features
	•	Randomized Messages: Generates unique messages by combining random elements from three data categories.
	•	Customizable Data: Add new message parts dynamically through a simple function.
	•	All Possible Messages: View all possible combinations of the messages.
	•	Category Viewer: Display all available options in any message category.
	•	Clear Console Output: Outputs messages with clean formatting for easy readability.

Technologies Used
	•	JavaScript: Core programming language for logic and randomization.
	•	Node.js: Runtime environment to execute the script.
	•	Git: Version control for project management.

How It Works

The program consists of three arrays, each representing a part of the final message:
	1.	First Part: Introduction (e.g., “The stars say”).
	2.	Second Part: Body (e.g., “you will encounter unexpected opportunities.”).
	3.	Third Part: Conclusion (e.g., “Trust the process.”).

A random element is selected from each array and combined to form a complete message.

Setup Instructions:

1. Clone the Repository:
    git clone https://github.com/TommyLau-bit/random-message-generator.git
    cd randomized-message-generator


2. Run the Program:
    Ensure Node.js is installed. Execute the script with: 
    node script.js


3. Explore Additional Features:
	•	View all possible messages.
	•	Add custom parts to categories.
	•	Display all parts within a specific category.



Functions and Usage

Function	           Description
generateMessage()	   Generates and returns a random message.
showAllMessages()	   Displays all possible combinations of the message parts.
addMessagePart()	   Adds a new message to a specific category (firstPart, secondPart, etc).
showParts()	           Displays all the messages in a specific category.

Examples:

1. Run the Program: 
    node script.js

2. Output Example:
    Randomized Message:
    The stars say you will encounter unexpected opportunities. Stay curious and explore.

3. Add a New Message Part
    addMessagePart("firstPart", "A wise owl hoots");

4. Console Output:
    Added to firstPart: "A wise owl hoots"

5. View All Possible Messages
    showAllMessages();

6. Console Output:
    The stars say you will encounter unexpected opportunities. Trust the process.
    Your destiny reveals challenges will pave the way for greatness. Stay curious and explore.


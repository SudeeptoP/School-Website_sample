function toggleChatbot() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "block" : "none";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message) {
        const chatArea = document.getElementById("chatArea");

        // Create user's message
        const userMessage = document.createElement("div");
        userMessage.textContent = "You: " + message;
        userMessage.style.marginBottom = "8px";
        userMessage.style.fontWeight = "bold";

        chatArea.appendChild(userMessage);

        // Show "Chatbot is typing..." message
        const typingMessage = document.createElement("div");
        typingMessage.textContent = "Chatbot is typing...";
        typingMessage.style.fontStyle = "italic";
        typingMessage.style.color = "#777";
        chatArea.appendChild(typingMessage);

        // Clear input box
        input.value = ""; 

        // Scroll chat area to bottom
        chatArea.scrollTop = chatArea.scrollHeight;

        // Simulate bot reply after 1 second
        setTimeout(() => {
            chatArea.removeChild(typingMessage);

            const botReply = document.createElement("div");
            botReply.textContent = "Chatbot: Thank you for your message! We will get back to you soon.";
            botReply.style.marginBottom = "16px";
            botReply.style.color = "#555";

            chatArea.appendChild(botReply);

            // Scroll again after bot replies
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 1000);
    }
}


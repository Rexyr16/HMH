// AI Responses Database
const aiResponses = {
    stress: [
        "Stress is a natural response to challenges. Let's explore some coping strategies. What specific situations are triggering your stress?",
        "I hear you. When feeling overwhelmed, try breaking tasks into smaller, manageable steps. What's the main source of your stress?",
        "Stress management starts with understanding your triggers. Deep breathing exercises can help. Would you like some techniques?"
    ],
    anxiety: [
        "Anxiety is something many people experience. Let's work through it together. What situations typically trigger your anxiety?",
        "It's important to recognize that anxiety is often about thoughts we're having. Have you tried mindfulness or grounding techniques?",
        "Anxiety can feel overwhelming, but there are proven strategies to manage it. Would you like to explore some coping mechanisms?"
    ],
    sleep: [
        "Sleep is crucial for mental health. Let's discuss your sleep challenges. What's preventing you from getting good rest?",
        "Try establishing a consistent sleep routine. Avoid screens 30 minutes before bed. What's your current sleep schedule like?",
        "Good sleep hygiene can significantly improve your mental health. Would you like tips on creating a better sleep environment?"
    ],
    mood: [
        "I'm glad you want to improve your mood. Small positive actions can make a difference. What activities usually make you feel better?",
        "Mood is influenced by many factors including sleep, exercise, and social connection. Which of these resonates with you?",
        "Improving mood often starts with self-compassion. What's one small thing that brings you joy?"
    ],
    default: [
        "That's an important thing to share. I'm here to support you. Can you tell me more about what you're experiencing?",
        "Thank you for opening up. Mental health is a journey, not a destination. How long have you been feeling this way?",
        "I appreciate your honesty. Let's explore this together. What do you think might help you feel better?",
        "Your feelings are valid. Many people go through similar experiences. What would you like to work on first?",
        "I'm listening. Understanding your situation better will help me provide better support. Can you describe what's happening?"
    ]
};

// Initialize chat
document.addEventListener('DOMContentLoaded', function() {
    console.log('HMH Website loaded');
});

// Show page function
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Remove active from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Set active nav link
    event.target.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Chat functionality
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    
    // Clear input
    input.value = '';
    input.focus();
    
    // Simulate AI typing delay
    setTimeout(() => {
        const aiResponse = generateAIResponse(message);
        addMessageToChat(aiResponse, 'ai');
    }, 800);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendPredefinedMessage(message) {
    document.getElementById('userInput').value = message;
    sendMessage();
}

function addMessageToChat(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = message;
    
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    
    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Identify message category
    let response = '';
    
    if (lowerMessage.includes('stress') || lowerMessage.includes('overwhelm')) {
        response = aiResponses.stress[Math.floor(Math.random() * aiResponses.stress.length)];
    } else if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('panic')) {
        response = aiResponses.anxiety[Math.floor(Math.random() * aiResponses.anxiety.length)];
    } else if (lowerMessage.includes('sleep') || lowerMessage.includes('insomnia') || lowerMessage.includes('tired') || lowerMessage.includes('exhausted')) {
        response = aiResponses.sleep[Math.floor(Math.random() * aiResponses.sleep.length)];
    } else if (lowerMessage.includes('mood') || lowerMessage.includes('happy') || lowerMessage.includes('sad') || lowerMessage.includes('depressed')) {
        response = aiResponses.mood[Math.floor(Math.random() * aiResponses.mood.length)];
    } else {
        response = aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
    }
    
    return response;
}

// Additional wellness tips that could be displayed
const wellnessTips = [
    "Take deep breaths: Practice 4-7-8 breathing to calm your nervous system.",
    "Stay hydrated: Dehydration can affect mood and cognition.",
    "Move your body: Even a 10-minute walk can boost your mood.",
    "Practice gratitude: Write down 3 things you're grateful for each day.",
    "Limit caffeine: Too much caffeine can increase anxiety.",
    "Connect with others: Social connection is vital for mental health.",
    "Get sunlight: Natural light helps regulate your mood and sleep.",
    "Practice mindfulness: Even 5 minutes of meditation can help.",
    "Set boundaries: It's okay to say no to protect your mental health.",
    "Eat well: Nutrition plays a big role in mental wellness."
];

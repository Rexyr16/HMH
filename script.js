// Store chat context
let chatContext = {
    lastIssue: null
};

// Breathing Techniques
const techniques = {
    boxBreathing: "🫁 **BOX BREATHING** - Works in 2 minutes:\n\n**STEP BY STEP:**\n1. Breathe IN slowly for 4 counts (1...2...3...4)\n2. HOLD your breath for 4 counts\n3. Breathe OUT slowly for 4 counts\n4. HOLD empty for 4 counts\n5. Repeat 5-10 times\n\n**WHY IT WORKS:** Activates your parasympathetic nervous system (your body's 'chill out' response). Harvard research shows this lowers heart rate within 60 seconds.\n\n**DO IT RIGHT NOW** - try for 1 minute. How do you feel after?\n\n(Source: Harvard Health Publishing)",
    
    breathingFourSevenEight: "🫁 **4-7-8 BREATHING** - Military pilots use this:\n\n**THE STEPS:**\n1. Breathe IN through your nose for 4 counts\n2. HOLD that breath for 7 counts\n3. Breathe OUT through your mouth for 8 counts (make it slow)\n4. Repeat 4-8 times\n\n**WHY THIS WORKS:** The longer exhale signals your nervous system to relax. Reduces stress hormones fast.\n\n**TRY IT NOW** for 2 minutes. Tell me how you feel!\n\n(Source: Yale School of Medicine)",
    
    progressiveRelaxation: "💪 **PROGRESSIVE MUSCLE RELAXATION** - 10 minutes:\n\n**HOW TO DO IT:**\n1. Start with your toes - squeeze them tight for 5 seconds\n2. Release and notice the relief\n3. Move up: calves → thighs → stomach → chest → shoulders → arms → face\n4. Tense each for 5 seconds, then release\n5. Takes about 10-15 minutes total\n\n**WHY:** Your muscles hold tension. Intentionally tensing and releasing teaches your body what relaxation feels like.\n\n**TRY IT NOW:** Start with just your shoulders - tense for 5 seconds, release. Notice the difference. What do you feel?\n\n(Source: Journal of Behavior Therapy - PMR Research)",
    
    grounding: "🌍 **GROUNDING (5-4-3-2-1)** - Stops stress instantly:\n\n**THE TECHNIQUE:**\nName things in order:\n• 5 things you CAN SEE (describe colors, textures, shapes)\n• 4 things you CAN FEEL (your clothes, the chair, temperature)\n• 3 things you CAN HEAR (sounds around you)\n• 2 things you CAN SMELL (or imagine smelling)\n• 1 thing you CAN TASTE (or imagine)\n\n**WHY:** When stressed, your brain is in your head. This brings you back to reality through your senses.\n\n**START NOW:** What's 1 thing you can see right now? Describe it.\n\n(Source: NAMI - Grounding Techniques)",
    
    tacticalBreathing: "🫁 **TACTICAL BREATHING** - Used by military & first responders:\n\n**DO THIS NOW:**\n1. Breathe IN for 4 seconds\n2. Breathe OUT for 4 seconds\n3. Repeat 5-10 times (takes about 1 minute)\n\n**THAT'S IT.** This is what Navy SEALs use before combat. It works because it activates your vagus nerve, shifting you from 'fight or flight' to 'rest and digest.'\n\n**TRY IT NOW.** Seriously - this takes 1 minute. How's your anxiety now?\n\n(Source: Naval Special Warfare Center - Stress Training)"
};

// AI Responses
const aiResponses = {
    stressInitial: [
        "I hear you're feeling stressed. That's totally normal. 💙\n\nWant me to teach you calming techniques RIGHT NOW?",
        "Stress is tough, but there are proven techniques that work! 🎯\n\nDo you want me to show you one?",
        "You're not alone - stress affects everyone. I've got techniques that help right away.\n\nReady to try one?"
    ],
    
    anxietyInitial: [
        "Anxiety is tough, but you reached out - that's great. 💙\n\nI have techniques that work fast. Want to try one right now?",
        "You're not broken - anxiety is your brain overdoing protection. The good news? We can retrain it.\n\nWant a quick technique you can do RIGHT NOW?",
        "Anxiety is treatable and there's real hope. Want me to teach you something you can use immediately?"
    ],
    
    sleepInitial: [
        "Sleep problems are fixable! Better sleep is totally within reach. 💙\n\nWant techniques you can use TONIGHT?",
        "Insomnia is frustrating but there are real solutions. Want techniques for tonight?",
        "Let's fix your sleep! Want techniques you can try tonight?"
    ],
    
    depressionInitial: [
        "I'm so glad you're reaching out. Depression lies - things aren't hopeless. 💙\n\nThere's real help. Want strategies for today?",
        "Depression is a medical condition - treatable. It's not your fault.\n\nWant immediate help?",
        "Thank you for telling me. You deserve support.\n\nWhat helps most - strategies or professional resources?"
    ],
    
    lonelinessInitial: [
        "Loneliness hurts, and I'm glad you said something. Connection IS possible. 💙\n\nWant practical steps?",
        "You're not alone with this - many feel this way. Real connection is out there.\n\nWant ideas for connecting?",
        "You reaching out matters. Let's find you connection.\n\nWant practical strategies?"
    ],
    
    defaultInitial: [
        "I hear you, and I'm glad you're sharing. 💙\n\nTell me what's going on - is it stress, anxiety, sleep issues, depression, or something else?",
        "Thank you for opening up. Help me understand what you're experiencing so I can help properly.",
        "I'm listening. Tell me more about what's happening."
    ],
    
    yesResponses: [
        "Here's a technique that works:\n\n",
        "Perfect! Here's what to do:\n\n",
        "Awesome! Let me teach you:\n\n"
    ]
};

// Initialize chat
document.addEventListener('DOMContentLoaded', function() {
    console.log('HMH Website loaded');
});

// Show page function
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    event.target.classList.add('active');
    window.scrollTo(0, 0);
}

// Chat functionality
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    addMessageToChat(message, 'user');
    input.value = '';
    input.focus();
    
    setTimeout(() => {
        const aiResponse = generateAIResponse(message);
        addMessageToChat(aiResponse, 'ai');
    }, 1000);
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
    
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    let response = '';
    
    // Check if user is saying YES/TEACH/HOW/SHOW - means they want the actual technique
    const wantsHelp = lowerMessage.includes('yes') || lowerMessage.includes('yeah') || 
                      lowerMessage.includes('teach') || lowerMessage.includes('how') || 
                      lowerMessage.includes('show me') || lowerMessage.includes('help') ||
                      lowerMessage.includes('please') || lowerMessage.includes('try') ||
                      lowerMessage.includes('do it') || lowerMessage.includes('ok');
    
    if (wantsHelp && chatContext.lastIssue) {
        // User wants help for the issue they mentioned before
        const techniques_list = getRelevantTechniques(chatContext.lastIssue);
        response = techniques_list[Math.floor(Math.random() * techniques_list.length)];
        return response;
    }
    
    // Identify the main issue
    if (lowerMessage.includes('stress') || lowerMessage.includes('overwhelm') || lowerMessage.includes('pressure')) {
        chatContext.lastIssue = 'stress';
        response = aiResponses.stressInitial[Math.floor(Math.random() * aiResponses.stressInitial.length)];
    } 
    else if (lowerMessage.includes('anx') || lowerMessage.includes('panic') || lowerMessage.includes('worry')) {
        chatContext.lastIssue = 'anxiety';
        response = aiResponses.anxietyInitial[Math.floor(Math.random() * aiResponses.anxietyInitial.length)];
    } 
    else if (lowerMessage.includes('sleep') || lowerMessage.includes('insomnia') || lowerMessage.includes('tired') || lowerMessage.includes('exhausted')) {
        chatContext.lastIssue = 'sleep';
        response = aiResponses.sleepInitial[Math.floor(Math.random() * aiResponses.sleepInitial.length)];
    } 
    else if (lowerMessage.includes('depress') || lowerMessage.includes('sad') || lowerMessage.includes('hopeless') || lowerMessage.includes('suicid')) {
        chatContext.lastIssue = 'depression';
        response = aiResponses.depressionInitial[Math.floor(Math.random() * aiResponses.depressionInitial.length)];
    } 
    else if (lowerMessage.includes('lone') || lowerMessage.includes('alone') || lowerMessage.includes('isolat') || lowerMessage.includes('friends')) {
        chatContext.lastIssue = 'loneliness';
        response = aiResponses.lonelinessInitial[Math.floor(Math.random() * aiResponses.lonelinessInitial.length)];
    } 
    else {
        response = aiResponses.defaultInitial[Math.floor(Math.random() * aiResponses.defaultInitial.length)];
    }
    
    return response;
}

function getRelevantTechniques(issue) {
    if (issue === 'stress') {
        return [techniques.boxBreathing, techniques.breathingFourSevenEight, techniques.progressiveRelaxation, techniques.grounding];
    } 
    else if (issue === 'anxiety') {
        return [techniques.boxBreathing, techniques.grounding, techniques.breathingFourSevenEight, techniques.tacticalBreathing, techniques.progressiveRelaxation];
    } 
    else if (issue === 'sleep') {
        return [techniques.breathingFourSevenEight, techniques.progressiveRelaxation];
    }
    else {
        return [techniques.boxBreathing, techniques.grounding];
    }
}

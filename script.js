// ===== HMH AI CHATBOT - COMPLETE SYSTEM (UPGRADED) =====
// Now supports: "teach me 2 techniques"

// ===== TECHNIQUE DATABASE =====
const techniqueDatabase = {
    stressBoxBreathing: { title:"🫁 BOX BREATHING", issue:"stress", content:"🫁 BOX BREATHING:\n1️⃣ Inhale 4\n2️⃣ Hold 4\n3️⃣ Exhale 4\n4️⃣ Hold 4\nRepeat 5-10x", duration:"2 min" },
    stressFourSevenEight: { title:"🫁 4-7-8", issue:"stress", content:"🫁 4-7-8:\nInhale 4\nHold 7\nExhale 8\nRepeat 5x", duration:"3 min" },
    stressProgressiveMuscle: { title:"💪 PMR", issue:"stress", content:"💪 Tense muscles 5 sec, release slowly. Go head to toe.", duration:"10 min" },
    stressGrounding: { title:"🌍 GROUNDING", issue:"stress", content:"🌍 5-4-3-2-1:\n5 see\n4 feel\n3 hear\n2 smell\n1 taste", duration:"3 min" },

    anxietyBoxBreathing: { title:"🫁 BOX BREATHING", issue:"anxiety", content:"🫁 same 4-4-4-4 breathing resets anxiety fast", duration:"2 min" },
    anxietyGrounding: { title:"🌍 GROUNDING", issue:"anxiety", content:"🌍 use senses to stop overthinking spiral", duration:"3 min" },
    anxietyTactical: { title:"🫁 TACTICAL", issue:"anxiety", content:"🫁 inhale 4, exhale 4 steady rhythm = calm", duration:"1 min" },

    sleepFourSevenEight: { title:"🛌 4-7-8 SLEEP", issue:"sleep", content:"🛌 inhale 4, hold 7, exhale 8 before bed", duration:"5 min" },
    sleepProgressive: { title:"💤 PMR SLEEP", issue:"sleep", content:"💤 relax muscles slowly in bed", duration:"10 min" },

    depressionAction: { title:"💪 ONE ACTION", issue:"depression", content:"💪 do ONE thing: eat, walk, text someone", duration:"var" },
    lonelinessAction: { title:"🤝 CONNECTION", issue:"loneliness", content:"🤝 text someone or join community", duration:"var" }
};

// ===== STATE =====
const conversationState = {
    chatHistory: [],
    userIssue: null,
    messageCount: 0
};

// ===== SEND MESSAGE =====
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;

    addMessageToChat(message, 'user');
    conversationState.chatHistory.push(message.toLowerCase());
    conversationState.messageCount++;

    input.value = "";

    setTimeout(() => {
        const reply = generateSmartResponse(message);
        addMessageToChat(reply, 'ai');
    }, 600);
}

// ===== DISPLAY =====
function addMessageToChat(msg, sender) {
    const box = document.getElementById('chatBox');
    const div = document.createElement('div');
    div.className = `message ${sender}-message`;
    div.textContent = msg;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

// ===== MAIN AI =====
function generateSmartResponse(userMessage) {
    const lower = userMessage.toLowerCase();

    // detect number (e.g. "2 techniques")
    let requestedCount = 1;
    const numMatch = lower.match(/\b(\d+)\b/);
    if (numMatch) requestedCount = parseInt(numMatch[1]);

    // keywords → issue
    if (/stress|overwhelm/.test(lower)) conversationState.userIssue = 'stress';
    else if (/anx|panic|worry/.test(lower)) conversationState.userIssue = 'anxiety';
    else if (/sleep|tired/.test(lower)) conversationState.userIssue = 'sleep';
    else if (/depress|sad/.test(lower)) conversationState.userIssue = 'depression';
    else if (/alone|lonely/.test(lower)) conversationState.userIssue = 'loneliness';

    const wantsTechnique = /teach|technique|help|show/.test(lower);

    // FIRST RESPONSE
    if (conversationState.messageCount === 1 && conversationState.userIssue) {
        return "I hear you 💙\n\nI’ve got techniques that actually help fast.\n\nSay \"teach me\" (or ask for 2, 3, etc)";
    }

    // GIVE TECHNIQUES
    if (wantsTechnique && conversationState.userIssue) {
        return deliverMultipleTechniques(conversationState.userIssue, requestedCount);
    }

    return "Tell me what's going on 💙";
}

// ===== MULTI-TECHNIQUE FUNCTION =====
function deliverMultipleTechniques(issue, count) {
    let list = [];

    if (issue === 'stress') {
        list = [
            techniqueDatabase.stressBoxBreathing.content,
            techniqueDatabase.stressFourSevenEight.content,
            techniqueDatabase.stressProgressiveMuscle.content,
            techniqueDatabase.stressGrounding.content
        ];
    }
    else if (issue === 'anxiety') {
        list = [
            techniqueDatabase.anxietyBoxBreathing.content,
            techniqueDatabase.anxietyGrounding.content,
            techniqueDatabase.anxietyTactical.content
        ];
    }
    else if (issue === 'sleep') {
        list = [
            techniqueDatabase.sleepFourSevenEight.content,
            techniqueDatabase.sleepProgressive.content
        ];
    }
    else if (issue === 'depression') {
        list = [
            techniqueDatabase.depressionAction.content
        ];
    }
    else if (issue === 'loneliness') {
        list = [
            techniqueDatabase.lonelinessAction.content
        ];
    }

    // shuffle
    const shuffled = [...list].sort(() => Math.random() - 0.5);

    // cut to requested count
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    let response = `🔥 Here are ${selected.length} technique(s):\n\n`;

    selected.forEach((t, i) => {
        response += `--- Technique ${i + 1} ---\n${t}\n\n`;
    });

    return response;
}

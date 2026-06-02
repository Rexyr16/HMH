# HMH - Help Mental Health

A compassionate web platform dedicated to supporting mental health and wellness. HMH provides resources, guidance, and AI-powered conversations to help users on their journey to better mental wellness.

## Features

### 🏠 Home Page
- Welcome introduction to HMH
- Overview of the platform's mission
- Key features highlighted:
  - AI Support for mental health discussions
  - Wellness Check-ins
  - Support & Care resources
- Call-to-action button to start wellness check

### 💬 Our Promise Page
- Core commitments of HMH:
  1. Listen Without Judgment
  2. Provide Expert Guidance
  3. Support Your Growth
  4. Be Here for You
  5. Maintain Your Privacy
- Motivational message about mental health journey

### ✨ Wellness Check Page
- Interactive AI chat interface
- Real-time conversation with mental health support bot
- Quick-access topic buttons for common issues:
  - Stress & Overwhelm
  - Anxiety
  - Sleep Issues
  - Mood & Energy
- Message history displayed in chat box
- Responsive design for mobile and desktop

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with gradient backgrounds and smooth animations
- **Interactivity**: Pure JavaScript for page navigation and chat functionality
- **Design**: Modern, responsive, and accessible UI

## File Structure

```
HMH/
├── index.html      # Main HTML file with all pages
├── styles.css      # Comprehensive styling
├── script.js       # JavaScript for functionality
└── README.md       # This file
```

## How to Use

1. **Navigate Pages**: Use the navigation bar at the top to switch between:
   - Home - Learn about HMH
   - Our Promise - Understand HMH's commitments
   - Wellness Check - Chat with the AI assistant

2. **Wellness Check Chat**:
   - Type your message in the input field
   - Press Enter or click Send button
   - Use quick suggestion buttons for common topics
   - The AI will respond with supportive guidance

3. **Mobile Friendly**: The site is fully responsive and works on all devices

## Features in Detail

### AI Assistant
The AI responds intelligently to user messages by:
- Detecting keywords related to stress, anxiety, sleep, and mood
- Providing contextual, supportive responses
- Offering follow-up questions to encourage reflection
- Maintaining a compassionate, non-judgmental tone

### Navigation
- Smooth page transitions with fade-in animations
- Active state indicators in navigation
- Mobile-friendly hamburger menu support ready

### Design
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Professional color scheme (purple & pink gradients)
- Accessible font sizes and contrast ratios
- Touch-friendly button sizes

## Mental Health Resources

**Important**: While HMH is a supportive tool, it is not a substitute for professional mental health care. If you're experiencing a mental health crisis, please contact a mental health professional or crisis hotline in your area.

## Customization

To customize the AI responses, edit the `aiResponses` object in `script.js`:

```javascript
const aiResponses = {
    stress: [...],
    anxiety: [...],
    sleep: [...],
    mood: [...],
    default: [...]
};
```

## Future Enhancements

- Backend integration for persistent chat history
- User accounts and saved preferences
- Resource library with articles and tips
- Integration with professional mental health services
- Multi-language support
- Offline functionality

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve HMH.

## License

This project is open source and available under the MIT License.

---

**HMH - Your Mental Health Matters** 🧠💙

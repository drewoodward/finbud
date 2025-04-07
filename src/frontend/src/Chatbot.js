import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    const userMsg = { sender: 'user', message: userInput };
    setMessages([...messages, userMsg]);

    const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userMsg),
    });

    const data = await response.json();
    const botResponses = data.map(msg => ({ sender: 'bot', message: msg.text }));
    setMessages(prev => [...prev, ...botResponses]);
    setUserInput('');
  };

  return (
    <div className="chatbot-wrapper">
      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>FinBud Assistant</span>
            <button onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.sender}`}>
                {msg.message}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me something..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      <button className="chatbot-float" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;

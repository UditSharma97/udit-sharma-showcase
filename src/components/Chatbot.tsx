
import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "System online. Udit's portfolio assistant at your service! Ask about skills, projects, or contact info.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const getBotResponse = (userInput: string) => {
    const lowerCaseInput = userInput.toLowerCase();
    
    if (lowerCaseInput.match(/hello|hi|hey|greetings|sup/)) {
      return "System online. Udit's portfolio assistant at your service! Ask about skills, projects, or contact info.";
    }
    if (lowerCaseInput.match(/how are you|status report/)) {
      return "All systems operational. Ready to provide info about Udit Sharma.";
    }
    if (lowerCaseInput.match(/skill|tech|know|proficient|stack/)) {
      return "Udit is skilled in: Languages (Python, C++, Java), Web Dev (HTML, CSS, JS, Bootstrap, React.js), UI/UX, Databases (MySQL), Cloud (IBM Cloud), and Developer Tools (Git, GitHub, Render). Check the 'Skills' section for details!";
    }
    if (lowerCaseInput.match(/project|work|portfolio|show me|case stud/)) {
      return "Udit has worked on several projects including Visa Flow (AI-powered visa application assistant using MERN stack), and various interactive front-end projects. See the 'Featured Projects' section for demos and code links!";
    }
    if (lowerCaseInput.match(/contact|email|linkedin|hire|connect|reach out/)) {
      return "You can connect with Udit via Email (asharma53858@gmail.com), LinkedIn (linkedin.com/in/aksharma127), or GitHub (github.com/Aksharma127). See the 'Let's Connect' section!";
    }
    if (lowerCaseInput.match(/available|job|opportunity|hiring/)) {
      return "Udit is actively exploring new opportunities! Please use the contact information provided to discuss potential roles or collaborations.";
    }
    if (lowerCaseInput.match(/thanks|thank you|cool|awesome|nice/)) {
      return "You're welcome! Happy to provide information about Udit's work.";
    }
    if (lowerCaseInput.match(/bye|goodbye|later|disconnect/)) {
      return "Session terminated. Have a great day!";
    }
    
    const fallbacks = [
      "My circuits are buzzing, but I didn't quite parse that. Try rephrasing?",
      "Query unclear. Could you ask about Udit's skills, projects, or contact details?",
      "Processing... Please ask about Udit's technical capabilities or projects.",
      "I can tell you about Udit's experience with React, C++, or his projects. Try asking about those!"
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  const sendMessage = () => {
    if (isSending || !inputValue.trim()) return;

    setIsSending(true);
    const userMessage = inputValue.trim();
    
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsSending(false);
    }, 800 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div id="chatbot-container" className={`fixed bottom-6 right-6 z-50 ${isOpen ? 'open' : ''}`}>
      <button
        id="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="w-15 h-15 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 transform hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #ff6b6b, #ffd93d)',
          color: '#1a1a1a',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.4)'
        }}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'} transition-all duration-300`}></i>
      </button>

      {isOpen && (
        <div
          id="chatbot-window"
          className="absolute bottom-20 right-0 w-80 h-96 rounded-2xl flex flex-col overflow-hidden transition-all duration-400 transform"
          style={{
            background: 'rgba(20, 20, 20, 0.95)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 35px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div
            id="chatbot-header"
            className="py-3 px-5 font-semibold text-center font-roboto-mono"
            style={{
              background: 'linear-gradient(90deg, #ff6b6b, #ffd93d)',
              color: '#1a1a1a'
            }}
          >
            Portfolio Assistant
          </div>

          <div id="chatbot-messages" className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message p-3 rounded-2xl max-w-[85%] word-wrap break-words text-sm leading-relaxed shadow-md ${
                  message.sender === 'user'
                    ? 'ml-auto rounded-br-sm'
                    : 'mr-auto rounded-bl-sm'
                }`}
                style={{
                  background: message.sender === 'user' 
                    ? 'linear-gradient(90deg, #ff6b6b, #ffd93d)'
                    : 'rgba(40, 40, 40, 0.8)',
                  color: message.sender === 'user' ? '#1a1a1a' : '#f0f0f0'
                }}
              >
                {message.text}
              </div>
            ))}
            {isSending && (
              <div
                className="message p-3 rounded-2xl max-w-[85%] mr-auto rounded-bl-sm text-sm"
                style={{
                  background: 'rgba(40, 40, 40, 0.8)',
                  color: '#f0f0f0'
                }}
              >
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div
            id="chatbot-input-area"
            className="flex p-4 border-t"
            style={{
              background: 'rgba(10, 10, 10, 0.5)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <input
              ref={inputRef}
              id="chatbot-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about skills, projects..."
              disabled={isSending}
              className="flex-1 px-4 py-2 rounded-full text-sm mr-3 outline-none transition-all duration-300"
              style={{
                background: 'rgba(40, 40, 40, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#f0f0f0'
              }}
            />
            <button
              id="chatbot-send"
              onClick={sendMessage}
              disabled={isSending}
              className="text-xl p-2 transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
              style={{ color: '#ff6b6b' }}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Bot, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const TypingAnimation = ({ duration = null }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="relative p-3 rounded-2xl max-w-[80%] mr-auto bg-[#F3F3F5] text-foreground rounded-bl-none"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 p-2 rounded-lg bg-primary/10">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div className="flex gap-1 items-center h-6">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 0,
            }}
            className="w-2 h-2 rounded-full bg-primary"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 0.2,
            }}
            className="w-2 h-2 rounded-full bg-primary"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 0.4,
            }}
            className="w-2 h-2 rounded-full bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
};

const ChatbotWindow = ({ flowId }) => {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const apiBaseUrl = "/chatbot-api";
  const messagesEndRef = useRef(null);

  // Initialize Chat Session
  const initializeSession = async () => {
    try {
      const initPayload = {
        parameters: [
          { name: "id", value: flowId },
          { name: "language", value: "cs" },
          { name: "recognitionTimeout", value: "0" },
        ],
        browserData: [
          { name: "url", value: `https://gmmedia.vocalls.ai/chatbot/?id=${flowId}&language=cs&recognitionTimeout=0` },
          { name: "userAgent", value: navigator.userAgent },
          { name: "screenSize", value: `${window.screen.width}x${window.screen.height}` },
          { name: "title", value: document.title },
        ],
      };

      const response = await axios.post(
        `${apiBaseUrl}/session/${flowId}/init`,
        initPayload,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      setSessionId(response.data.sessionId);
    } catch (error) {
      console.error("Error initializing session:", error);
    }
  };

  const fetchMessages = useCallback(async () => {
    if (!sessionId) return;
  
    try {
      const response = await axios.get(
        `${apiBaseUrl}/session/${sessionId}/message`,
        {
          headers: {
            "Vocalls-SessionId": sessionId,
          },
        }
      );

      const newMessages = response.data.filter(
        (newMsg) => !messages.some((prevMsg) => 
          prevMsg.timestamp === newMsg.timestamp && 
          prevMsg.value === newMsg.value
        )
      );
  
      if (newMessages.length > 0) {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, ...newMessages];
          if (updatedMessages.length > 0) {
            setIsInitializing(false);
          }
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }, [sessionId, messages]);

  // Poll Messages Every 5 Seconds
  useEffect(() => {
    if (!sessionId) return;

    const intervalId = setInterval(fetchMessages, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [sessionId, fetchMessages]);

  // Send User Message
  const sendMessage = async () => {
    if (!userInput || !sessionId) return;
    setLoading(true);
    try {
      const messagePayload = {
        timestamp: new Date().toISOString(),
        type: "MESSAGE",
        value: userInput,
      };
      const response = await axios.post(
        `${apiBaseUrl}/session/${sessionId}/message`,
        messagePayload,
        { headers: { "Vocalls-SessionId": sessionId } }
      );
      
      // Add user message
      const updatedMessages = [...messages, messagePayload];
      
      // Add response messages
      const responseMessages = response.data.filter(
        (newMsg) => !updatedMessages.some((prevMsg) => 
          prevMsg.timestamp === newMsg.timestamp && 
          prevMsg.value === newMsg.value
        )
      );
      
      setMessages([...updatedMessages, ...responseMessages]);
      setUserInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle user input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Initialize session on component mount
  useEffect(() => {
    initializeSession();
  }, []);

  // Render Messages
  const renderMessage = (message, index) => {
    if (!message.value || !message.type) return null;

    // Handle WAIT type messages
    if (message.type === "WAIT") {
      return <TypingAnimation key={index} duration={parseInt(message.value)} />;
    }

    // User messages are the ones we send in the sendMessage function
    const isUserMessage = message.type === "MESSAGE" && !message.hasOwnProperty('source');
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`w-full flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}
      >
        <div className={`relative p-4 rounded-2xl max-w-[80%] ${
          isUserMessage
            ? "bg-[#3797F0] text-white rounded-br-none"
            : "bg-[#F3F3F5] text-foreground rounded-bl-none"
        }`}>
          <div className={`flex items-start gap-3 ${isUserMessage ? 'flex-row-reverse' : ''}`}>
            {!isUserMessage && (
              <div className="mt-1 p-2 rounded-lg bg-primary/10 shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
            )}
            {isUserMessage && (
              <div className="mt-1 p-2 rounded-lg bg-white/10 shrink-0">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
            )}
            <p className={`text-sm ${isUserMessage ? 'text-right' : 'text-left'}`}>{message.value}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full max-w-lg mx-auto rounded-2xl border bg-background shadow-lg overflow-hidden flex flex-col h-[600px]"
    >
      {/* Header */}
      <div className="p-4 border-b bg-background shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Voicey</h3>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex flex-col">
          <AnimatePresence>
            {messages.map(renderMessage)}
            {isInitializing && <TypingAnimation />}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-background shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Napište zprávu..."
            className="flex-1 px-4 py-2 rounded-full bg-[#F3F3F5] border-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
            disabled={loading}
          />
          <Button
            onClick={sendMessage}
            disabled={loading}
            size="icon"
            className="rounded-full bg-[#3797F0] hover:bg-[#3797F0]/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatbotWindow;
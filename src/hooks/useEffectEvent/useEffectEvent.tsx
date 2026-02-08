import { useEffect, useState } from "react";
import { useEffectEvent } from "react";
type Message = {
  id: number;
  text: string;
};

export default function ChatExample() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // useEffectEvent keeps latest state without re-running effect
  const onMessageReceived = useEffectEvent((msg: Message) => {
    if (notificationsEnabled) {
      console.log("New message:", msg.text);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage = {
        id: Date.now(),
        text: "Hello " + new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, newMessage]);

 
      onMessageReceived(newMessage);
    }, 3000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="container mt-4">
      <div className="card shadow p-3">
        <h4 className="mb-3">Chat Messages</h4>

        <button
          className={`btn mb-3 ${
            notificationsEnabled ? "btn-success" : "btn-secondary"
          }`}
          onClick={() => setNotificationsEnabled((v) => !v)}
        >
          Notifications: {notificationsEnabled ? "ON" : "OFF"}
        </button>

        <ul className="list-group">
          {messages.map((msg) => (
            <li key={msg.id} className="list-group-item">
              {msg.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

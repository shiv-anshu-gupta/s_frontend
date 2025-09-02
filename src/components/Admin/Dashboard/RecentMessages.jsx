import { useEffect, useState } from "react";
import { getRecentMessages } from "../../../Apis/Contact/contactApi";

export default function RecentMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const data = await getRecentMessages();
        setMessages(data);
      } catch (err) {
        console.error("Failed to load recent messages:", err);
      }
    }

    fetchMessages();
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Recent Messages</h3>
      {messages.length === 0 ? (
        <p className="text-sm text-muted-foreground">No messages found.</p>
      ) : (
        messages.map((msg) => (
          <div
            key={msg.id}
            className="p-4 border rounded-lg shadow-sm bg-white space-y-1"
          >
            <div className="text-sm font-semibold">{msg.name}</div>
            <div className="text-xs text-muted-foreground">
              {msg.email} •{" "}
              {new Date(msg.created_at).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <p className="text-sm">
              {msg.message.length > 100
                ? msg.message.slice(0, 100) + "..."
                : msg.message}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

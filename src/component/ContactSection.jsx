import { useState } from "react";
import { Mail, Linkedin, Github, MessageCircle, Copy, Bot } from "lucide-react";

export default function GetInTouch() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [intent, setIntent] = useState("project");
  const [botReply, setBotReply] = useState("");

  const phoneNumber = "918113032680";
  const email = "saisankar@gmail.com";

  const intentTemplates = {
    project: "I have a project idea and would like to discuss it.",
    collaboration: "I'm interested in collaborating with you.",
    question: "I have a quick question.",
    hi: "Just wanted to say hi 👋",
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Sai, I'm ${name || "someone"}.\n${intentTemplates[intent]}\n${message}`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    alert("email_copied();");
  };

  const handleBot = (type) => {
    const replies = {
      freelance:
        "Yes 🙂 I'm open to select freelance and collaborative projects.",
      tech: "I primarily work with React, TypeScript, Node.js, and clean UI systems.",
      contact:
        "WhatsApp is fastest. Email works well for detailed discussions.",
    };
    setBotReply(replies[type]);
  };

  return (
    <section
      id="getInTouch"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
    >
      <div className="max-w-6xl w-full text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-mono">
          <span className="text-cyan-400">{"<"}</span>
          Get in Touch
          <span className="text-cyan-400">{" />"}</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-300 mb-10 font-light">
          Pick how you’d like to connect — quick chat, collaboration, or just a
          friendly hello.
        </p>

        {/* Intent Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            ["project", "💼 Project"],
            ["collaboration", "🤝 Collaboration"],
            ["question", "💬 Question"],
            ["hi", "👋 Say Hi"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setIntent(key)}
              className={`px-4 py-2 rounded border font-mono text-sm transition ${
                intent === key
                  ? "border-cyan-400 text-cyan-400"
                  : "border-gray-700 text-gray-400 hover:border-cyan-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* WhatsApp Input */}
        <div className="max-w-xl mx-auto mb-10 space-y-4">
          <input
            type="text"
            placeholder="your_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-sm font-mono focus:border-cyan-400 outline-none"
          />
          <textarea
            rows={4}
            placeholder="your_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-sm font-mono focus:border-cyan-400 outline-none resize-none"
          />
          <button
            onClick={sendWhatsApp}
            className="w-full px-6 py-3 bg-cyan-400 text-gray-950 rounded font-semibold font-mono hover:bg-cyan-300 transition flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            send_whatsapp()
          </button>
        </div>

        {/* Mini Bot */}
        {/* <div className="max-w-xl mx-auto mb-12 border border-gray-800 rounded p-6 text-left">
          <div className="flex items-center gap-2 mb-4 text-cyan-400 font-mono">
            <Bot className="w-4 h-4" />
            ask_bot()
          </div>

          <div className="flex gap-3 mb-4 flex-wrap">
            <button
              onClick={() => handleBot("freelance")}
              className="text-xs border border-gray-700 px-3 py-1 rounded hover:border-cyan-400"
            >
              freelance?
            </button>
            <button
              onClick={() => handleBot("tech")}
              className="text-xs border border-gray-700 px-3 py-1 rounded hover:border-cyan-400"
            >
              tech_stack?
            </button>
            <button
              onClick={() => handleBot("contact")}
              className="text-xs border border-gray-700 px-3 py-1 rounded hover:border-cyan-400"
            >
              best_contact?
            </button>
          </div>

          {botReply && (
            <p className="text-sm text-gray-300 font-light">{botReply}</p>
          )}
        </div> */}

        {/* Quick Actions */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={copyEmail}
            className="p-3 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <Copy className="w-5 h-5" />
          </button>
          <a
            href={`mailto:${email}`}
            className="p-3 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/saisankar-1919"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/saisankar-s-r-896a39150/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Status */}
        <p className="text-xs text-gray-500 font-mono">
          🟢 open_to_collaborations
        </p>
      </div>
    </section>
  );
}

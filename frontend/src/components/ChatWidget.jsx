import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ExternalLink } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Yo ! Je suis le bot de SayKee 👋 Comment je peux t'aider ?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const faqData = [
    {
      question: "C'est quoi SayKee ?",
      answer:
        "SayKee c'est une plateforme de formation gratuite en trading et e-commerce. J'ai créé ca pour partager ce que j'ai appris après avoir généré +200K€. Pas de bullshit, juste du concret.",
    },
    {
      question: "C'est vraiment gratuit ?",
      answer:
        "Ouais c'est 100% gratuit. Pas de formation cachée à 997€, pas d'upsell. Je partage ce que je sais gratuitement. Si tu veux me soutenir, partage le site autour de toi.",
    },
    {
      question: "Comment te contacter ?",
      answer:
        "Le plus simple c'est Telegram : @Loukra. Je réponds à tout le monde. Sinon y'a la page Contact sur le site.",
    },
    {
      question: "C'est quoi les formations dispo ?",
      answer:
        "Y'a 2 formations principales : Trading (analyse technique, gestion du risque, psychologie) et E-commerce (dropshipping, print-on-demand, etc.). Tout est accessible depuis le menu.",
    },
    {
      question: "Faut un niveau pour commencer ?",
      answer:
        "Non, tu peux commencer de zéro. J'explique tout depuis le début. Que tu sois étudiant, salarié ou au chômage, tu peux apprendre. Faut juste être motivé.",
    },
    {
      question: "C'est légal tout ça ?",
      answer:
        "Le trading et l'e-commerce c'est 100% légal. C'est du business comme un autre. Par contre faut déclarer tes revenus aux impôts hein, je suis pas responsable si tu fais n'importe quoi.",
    },
    {
      question: "Tu proposes du coaching ?",
      answer:
        "Pour l'instant je fais pas de coaching payant. Tout est dans les formations gratuites. Si t'as des questions spécifiques, contacte moi sur Telegram.",
    },
    {
      question: "C'est qui Elias Benguezzou ?",
      answer:
        "C'est moi ! J'ai fais +200K€ en trading et e-commerce. J'ai commencé de zéro, sans diplôme, sans réseau. Aujourd'hui je partage ce que j'ai appris. Check la page À propos pour en savoir plus.",
    },
  ];

  const suggestedQuestions = [
    "C'est quoi SayKee ?",
    "C'est vraiment gratuit ?",
    "Comment te contacter ?",
    "C'est quoi les formations dispo ?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionClick = (question) => {
    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: question }]);

    // Find answer
    const faq = faqData.find((f) => f.question === question);

    // Add bot response after a small delay
    setTimeout(() => {
      if (faq) {
        setMessages((prev) => [...prev, { type: "bot", text: faq.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "J'ai pas la réponse à ca dans ma base. Contacte moi direct sur Telegram @Loukra, je te répondrai !",
          },
        ]);
      }
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userQuestion = inputValue.trim();
    setMessages((prev) => [...prev, { type: "user", text: userQuestion }]);
    setInputValue("");

    // Try to find a matching FAQ
    const lowerQuestion = userQuestion.toLowerCase();
    const faq = faqData.find(
      (f) =>
        f.question.toLowerCase().includes(lowerQuestion) ||
        lowerQuestion.includes(f.question.toLowerCase().split(" ")[0])
    );

    setTimeout(() => {
      if (faq) {
        setMessages((prev) => [...prev, { type: "bot", text: faq.answer }]);
      } else {
        // Check for keywords
        let response = null;

        if (
          lowerQuestion.includes("gratuit") ||
          lowerQuestion.includes("prix") ||
          lowerQuestion.includes("payer")
        ) {
          response = faqData.find((f) => f.question.includes("gratuit"))?.answer;
        } else if (
          lowerQuestion.includes("contact") ||
          lowerQuestion.includes("telegram") ||
          lowerQuestion.includes("parler")
        ) {
          response = faqData.find((f) => f.question.includes("contacter"))?.answer;
        } else if (
          lowerQuestion.includes("formation") ||
          lowerQuestion.includes("cours") ||
          lowerQuestion.includes("apprendre")
        ) {
          response = faqData.find((f) => f.question.includes("formations dispo"))?.answer;
        } else if (
          lowerQuestion.includes("qui") ||
          lowerQuestion.includes("elias") ||
          lowerQuestion.includes("benguezzou") ||
          lowerQuestion.includes("toi")
        ) {
          response = faqData.find((f) => f.question.includes("Elias"))?.answer;
        } else if (
          lowerQuestion.includes("saykee") ||
          lowerQuestion.includes("site") ||
          lowerQuestion.includes("c'est quoi")
        ) {
          response = faqData.find((f) => f.question.includes("C'est quoi"))?.answer;
        }

        if (response) {
          setMessages((prev) => [...prev, { type: "bot", text: response }]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              text: "Hmm je suis pas sûr de comprendre ta question. Essaie de reformuler ou contacte moi direct sur Telegram @Loukra !",
            },
          ]);
        }
      }
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-neutral-800 hover:bg-neutral-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[500px] bg-neutral-900 border border-neutral-800 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">SayKee Bot</h3>
              <p className="text-blue-200 text-xs">Répond en quelques secondes</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-neutral-800 text-neutral-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-4 py-2 border-t border-neutral-800">
            <p className="text-xs text-neutral-500 mb-2">Questions fréquentes :</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(q)}
                  className="text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-1.5 rounded-full transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Pose ta question..."
                className="flex-1 bg-neutral-800 border border-neutral-700 text-white px-4 py-2 text-sm focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </form>

          {/* Telegram Link */}
          <a
            href="https://t.me/Loukra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 py-3 text-sm transition-colors"
          >
            <ExternalLink size={16} />
            Parler à Elias sur Telegram
          </a>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

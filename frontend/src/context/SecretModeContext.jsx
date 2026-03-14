import { createContext, useContext, useState, useEffect } from "react";

const SecretModeContext = createContext();

export const SecretModeProvider = ({ children }) => {
  const [isSecretMode, setIsSecretMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleSecretMode = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setShowOverlay(true);
    
    // Switch content at peak of animation
    setTimeout(() => {
      setIsSecretMode(prev => !prev);
    }, 350);
    
    // Hide overlay
    setTimeout(() => {
      setShowOverlay(false);
    }, 700);
    
    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 750);
  };

  // Apply theme class to body
  useEffect(() => {
    if (isSecretMode) {
      document.body.classList.add("secret-mode");
    } else {
      document.body.classList.remove("secret-mode");
    }
  }, [isSecretMode]);

  return (
    <SecretModeContext.Provider value={{ isSecretMode, isTransitioning, toggleSecretMode }}>
      {/* Wipe Transition Overlay */}
      <div 
        className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        {/* Left panel */}
        <div 
          className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[350ms] ease-in-out"
          style={{
            background: 'linear-gradient(90deg, #000 0%, #1a0505 100%)',
            transform: showOverlay ? 'translateX(0)' : 'translateX(-100%)',
          }}
        />
        {/* Right panel */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full transition-transform duration-[350ms] ease-in-out"
          style={{
            background: 'linear-gradient(270deg, #000 0%, #1a0505 100%)',
            transform: showOverlay ? 'translateX(0)' : 'translateX(100%)',
          }}
        />
        {/* Center line glow */}
        {showOverlay && (
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full"
            style={{
              background: isSecretMode ? '#000' : '#dc2626',
              boxShadow: isSecretMode 
                ? '0 0 30px 10px rgba(0,0,0,0.8)' 
                : '0 0 30px 10px rgba(220,38,38,0.6)',
            }}
          />
        )}
      </div>
      {children}
    </SecretModeContext.Provider>
  );
};

export const useSecretMode = () => {
  const context = useContext(SecretModeContext);
  if (!context) {
    throw new Error("useSecretMode must be used within SecretModeProvider");
  }
  return context;
};

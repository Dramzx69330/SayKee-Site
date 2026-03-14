import { createContext, useContext, useState, useEffect } from "react";

const SecretModeContext = createContext();

export const SecretModeProvider = ({ children }) => {
  const [isSecretMode, setIsSecretMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleSecretMode = () => {
    setIsTransitioning(true);
    
    // Start transition animation
    setTimeout(() => {
      setIsSecretMode(prev => !prev);
    }, 300);
    
    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
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
      {/* Transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <div className="absolute inset-0 bg-black animate-pulse" />
          <div 
            className={`absolute inset-0 ${isSecretMode ? 'bg-black' : 'bg-red-950'} transition-opacity duration-500`}
            style={{ opacity: isTransitioning ? 1 : 0 }}
          />
        </div>
      )}
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

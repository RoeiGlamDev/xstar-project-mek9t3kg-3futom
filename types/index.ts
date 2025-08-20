import { createContext, useContext, ReactNode } from 'react';

// Define types for the context
interface GlamCSContextType {
  // Add properties as needed
}

// Create context
const GlamCSContext = createContext<GlamCSContextType | undefined>(undefined);

// Provider component
export const GlamCSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Add state and functions as needed

  return (
    <GlamCSContext.Provider value={{ /* Add context values */ }}>
      {children}
    </GlamCSContext.Provider>
  );
};

// Custom hook to use the GlamCS context
export const useGlamCS = () => {
  const context = useContext(GlamCSContext);
  if (context === undefined) {
    throw new Error('useGlamCS must be used within a GlamCSProvider');
  }
  return context;
};

export default GlamCSContext;
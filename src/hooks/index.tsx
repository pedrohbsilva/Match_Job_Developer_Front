import React, { createContext, useState, useContext } from 'react';
import { ContextDate } from '../interfaces';

const MatchJobDeveloperContext = createContext<ContextDate>({} as ContextDate);

/**
 * @summary Hook created to be able to use states throughout the application.
 * @param {React.ReactNode} children - parameter to be able to include the child components.
 * @return {React.Context} Returns 4 states to be able to use within the application.
 */

const MatchJobDeveloperProvider: React.FC = ({ children }) => {
  const [city, setCity] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [minExperience, setMinExperience] = useState(0);
  const [maxExperience, setMaxExperience] = useState(13);
  const [acceptRemote, setAcceptRemote] = useState(-1);

  return (
    <MatchJobDeveloperContext.Provider
      value={{
        acceptRemote,
        setAcceptRemote,
        city,
        setCity,
        minExperience,
        setMinExperience,
        maxExperience,
        setMaxExperience,
        technologies,
        setTechnologies,
      }}
    >
      {children}
    </MatchJobDeveloperContext.Provider>
  );
};
function useMatchJobDeveloper(): ContextDate {
  const context = useContext(MatchJobDeveloperContext);

  if (!context) {
    throw new Error('UseAuth must be used within a MatchJobDeveloperProvider');
  }
  return context;
}
export { MatchJobDeveloperProvider, useMatchJobDeveloper };

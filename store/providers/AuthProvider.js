import React, {useState} from 'react';
import AuthContext from '../contexts/AuthContext';

const AuthProvider = props => {
  const [isSkip, setIsSkip] = useState(false);
  const [education, setEducation] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const toggleEducation = () => {
    if (education) {
      setEducation(false);
    } else {
      setEducation(true);
    }
  };
  const changeStatus = () => {
    if (isSkip) {
      setIsSkip(false);
    } else {
      setIsSkip(true);
    }
  };

  const changeAuthenticating = () => {
    if (isAuthenticating) {
      setIsAuthenticating(false);
    } else {
      setIsAuthenticating(true);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        education,
        isSkip,
        isAuthenticating,
        toggleEducation,
        changeStatus,
        changeAuthenticating,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

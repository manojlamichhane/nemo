import React, {useState, useEffect} from 'react';
import AuthContext from '../contexts/AuthContext';
import Axios from 'axios';

const AuthProvider = props => {
  const [isSkip, setIsSkip] = useState(false);
  const [education, setEducation] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [symptom, setSymptom] = useState(false);

  const toggleEducation = () => {
    if (education) {
      setEducation(false);
    } else {
      setEducation(true);
    }
  };
  const toggleSymptom = () => {
    if (symptom) {
      setSymptom(false);
    } else {
      setSymptom(true);
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
        symptom,
        isSkip,
        isAuthenticating,

        toggleSymptom,
        toggleEducation,
        changeStatus,
        changeAuthenticating,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

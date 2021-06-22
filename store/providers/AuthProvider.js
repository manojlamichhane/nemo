import React, {useState, useEffect} from 'react';
import AuthContext from '../contexts/AuthContext';
import Axios from 'axios';

const AuthProvider = props => {
  const [isSkip, setIsSkip] = useState(false);
  const [education, setEducation] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [categories, setCategories] = useState({});

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

  const getCategories = async () => {
    await console.log('hello');
    // try {
    //   const resp = await axios.get(
    //     'https://api.docnemo.com:443/educational/contents/readAll',
    //   );
    //   console.log('response', resp);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <AuthContext.Provider
      value={{
        education,
        isSkip,
        isAuthenticating,
        getCategories,
        toggleEducation,
        changeStatus,
        changeAuthenticating,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

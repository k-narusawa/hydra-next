import { useState, useCallback } from 'react';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [challenge, setChallenge] = useState('');

  const handleUsernameChange = useCallback((name: string, value: string) => {
    setUsername(value);
  }, []);

  const handlePasswordChange = useCallback((name: string, value: string) => {
    setPassword(value);
  }, []);

  const setInitialChallenge = (challenge: string) => {
    setChallenge(challenge);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const resp = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          challenge: challenge,
        }),
      });

      if (resp.status !== 200) {
        console.error('Failed to login');
        return;
      }

      const data = await resp.json();
      window.location.href = data.redirect_to;
    },
    [challenge, password, username]
  );

  return {
    username,
    password,
    challenge,
    setInitialChallenge,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export default useLogin;

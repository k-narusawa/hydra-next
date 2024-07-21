'use client';

import { Button } from '@/app/components/Button';
import { Card } from '@/app/components/Card';
import { Input } from '@/app/components/Input';
import useLogin from '@/app/features/login/hooks';
import { useEffect } from 'react';

type Props = {
  loginChallenge: string;
  canSkip: boolean;
};

const LoginForm: React.FC<Props> = ({ loginChallenge, canSkip }) => {
  const {
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    setInitialChallenge,
  } = useLogin();

  useEffect(() => {
    setInitialChallenge(loginChallenge);
  }, [loginChallenge, setInitialChallenge]);

  return (
    <div className="p-4">
      <Card>
        <div className="px-8 py-8">
          <div className="flex justify-center text-2xl font-bold mb-12">
            Login
          </div>
          {canSkip && (
            <div className="flex justify-center text-2xl font-bold mb-12">
              You can skip this login!!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="test@example.com"
              onValueChange={handleUsernameChange}
            />
            <div className="mt-8"></div>
            <Input
              type="password"
              name="password"
              placeholder="********"
              onValueChange={handlePasswordChange}
            />
            <Input
              type="hidden"
              name="login_challenge"
              defaultValue={loginChallenge}
            />
            <div className="mt-8"></div>
            <div className="px-12">
              <Button type="submit" disabled={false}>
                ログイン
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;

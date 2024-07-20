import { LogoutButton } from '@/app/components/buttons';
import { options } from '@/app/libs/auth/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(options);

  if (!session || !session.user) {
    await redirect('/signin');
    return;
  }

  return (
    <div>
      <h1>Home</h1>
      <div>{session.user.id}</div>
      <LogoutButton />
    </div>
  );
}

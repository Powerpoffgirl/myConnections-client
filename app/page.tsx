// import { LoginPage, RegisterPage } from '@/components';
import Image from 'next/image';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';

export default function Home() {
  const showLoginPage = true; // Set this to true to show the LoginPage, or false for RegisterPage

  return (
    <main className="z-10 w-screen font-mono text-sm lg:flex justify-between">
       {showLoginPage? <LoginPage />: <RegisterPage/>}
    </main>
  );
}

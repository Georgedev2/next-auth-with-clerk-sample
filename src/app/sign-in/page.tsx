import { SignIn } from '@clerk/nextjs';
import styles from './sign-in.module.css';

const SignInPage = () => {
  return (
    <div className={styles.signIn}>
      <div>
        <SignIn
          signUpUrl="/sign-up"
          afterSignInUrl="/car"
        />
      </div>
    </div>
  );
};
export default SignInPage;

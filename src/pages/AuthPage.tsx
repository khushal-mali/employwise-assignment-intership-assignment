import AuthLogin from "../components/auth-login";
import AuthLayout from "../components/layout";

const AuthPage = () => {
  // const [authMedium, setAuthMedium] = useState<"login" | "signup">("login");

  return (
    <main className="overflow-hidden h-screen">
      <AuthLayout>
        <AuthLogin  />
      </AuthLayout>
    </main>
  );
};

export default AuthPage;

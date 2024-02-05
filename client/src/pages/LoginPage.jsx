import { GeneralNav } from "../components/common";
import { FormLoginComponent } from "../components/loginPage";
function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <GeneralNav />
      <FormLoginComponent />
    </div>
  );
}
export default LoginPage;

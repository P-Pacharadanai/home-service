import FormComponent from "../components/registerPage/FormComponent";
import GeneralNav from "../components/common/GeneralNav";

function RegisterPage() {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <GeneralNav />
      </div>
      <FormComponent />
    </div>
  );
}
export default RegisterPage;

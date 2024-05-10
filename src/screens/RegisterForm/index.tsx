import { Form } from "../../components/organism";
import { RightSideComponent } from "../../components/organism/RightSideComponent";

export const RegisterForm = () => {
  return (
    <div className="grid grid-cols-2">
      <Form />
      <RightSideComponent />
    </div>
  );
};

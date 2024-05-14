import { Form, RightSideComponent } from "@Components/organism";
import { SyntheticEvent } from "react";

export const RegisterForm = () => {
  const onSubmitHandle = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="grid grid-cols-2">
      <div className="h-full bg-surface-primary p-[4rem]">
        <Form onSubmitHandle={onSubmitHandle} />
      </div>
      <div className="h-full w-[50%] bg-surface-secondary fixed right-0">
        <RightSideComponent />
      </div>
    </div>
  );
};

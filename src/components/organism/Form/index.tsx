import { Button } from "@Components/atom/Button";
import {
  Address,
  Child,
  Declaration,
  RegistrationOptions,
  Responsible,
} from "@Components/molecule";
import { ArrowLeft } from "@phosphor-icons/react";
import { SyntheticEvent } from "react";

type FormType = {
  onSubmitHandle: (e: SyntheticEvent) => void;
};

export const Form = ({ onSubmitHandle }: FormType) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <ArrowLeft /> Voltar
      </div>
      <div>
        <h1>Formulário de matrícula</h1>
        <p>
          Preencha os dados abaixo para matricular seu filho na escola de
          educação infantil Estrelas do Amanhã.
        </p>
      </div>
      <form onSubmit={onSubmitHandle}>
        <section id="child-info">
          <Child />
        </section>
        <section id="address-info">
          <Address />
        </section>
        <section id="responsible-info">
          <Responsible />
        </section>
        <section id="child-info">
          <Child />
        </section>
        <section id="registration-info">
          <RegistrationOptions />
        </section>
        <section id="declaration-info">
          <Declaration />
        </section>
        <div id="button-container">
          <Button buttonStyle="primary" />
        </div>
      </form>
    </div>
  );
};

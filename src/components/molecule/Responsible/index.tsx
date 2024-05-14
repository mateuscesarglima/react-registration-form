import { Input, Label } from "@Components/atom";

export const Responsible = () => {
  return (
    <div>
      <div>
        <h3>Informações dos responsável</h3>
      </div>
      <div>
        <Label>Nome do responsável</Label>
        <Input
          name="responsible-name"
          id="responsible-name"
          type="text"
          placeholder="Nome do responsável"
        />
      </div>
      <div>
        <Label>Telefone</Label>
        <Input
          name="responsible-phone"
          id="responsible-phone"
          type="tel"
          placeholder="Telefone"
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          name="responsible-email"
          id="responsible-email"
          type="email"
          placeholder="Email"
        />
      </div>
    </div>
  );
};

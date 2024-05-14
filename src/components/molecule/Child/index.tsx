import { Input, Label } from "@Components/atom";

export const Child = () => {
  return (
    <div>
      <div>
        <h3>Informações da criança</h3>
      </div>
      <div>
        <Label>Nome completo</Label>
        <Input name="name" id="name" type="text" placeholder="Nome completo" />
      </div>
      <div>
        <Label>Data de nascimentoo</Label>
        <Input
          name="born-date"
          id="born-date"
          type="date"
          placeholder="Data de nascimento"
        />
      </div>
      <div>
        <Label>Sexo</Label>
        <select name="">
          <option value="1">Masculino</option>
          <option value="2">Feminino</option>
        </select>
      </div>
      <div>
        <Label>Informações médicas</Label>
        <textarea name="" id=""></textarea>
      </div>
      <div>
        <Label>Certidão de nascimento</Label>
      </div>
    </div>
  );
};

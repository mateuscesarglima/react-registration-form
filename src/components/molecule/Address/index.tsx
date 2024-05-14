import { Input, Label } from "@Components/atom";

export const Address = () => {
  return (
    <div>
      <div>
        <h3>Endereço residencial</h3>
      </div>
      <div>
        <Label htmlFor="cep">CEP</Label>
        <Input name="cep" placeholder="000000-000" />
      </div>
      <div>
        <div>
          <Label>Rua</Label>
          <Input name="street" placeholder="Rua" />
        </div>
        <div>
          <Label htmlFor="number">Número</Label>
          <Input type="number" name="number" id="number" placeholder="Rua" />
        </div>
      </div>
      <div>
        <div>
          <Label htmlFor="city">Cidade</Label>
          <Input type="text" name="city" id="city" placeholder="Cidade" />
        </div>
        <div>
          <Label htmlFor="state">Estado</Label>
          <Input type="state" name="state" id="number" placeholder="Rua" />
        </div>
      </div>
    </div>
  );
};

import { StarImg, IllustrationImg } from "@Assets/images";

export const RightSideComponent = () => {
  return (
    <div className="bg-surface-secondary">
      <div>
        <img src={StarImg} alt="" />
        <span>Estrelas do amanhã</span>
      </div>
      <div>
        <h1 className="text-2xl">
          Porque cada momento de <span>aprendizado</span> conta
        </h1>
        <p>
          Inscreva seu filho em nossa escola e veja-o florescer em um ambiente
          acolhedor, seguro e estimulante.
        </p>
      </div>
      <div>
        <img src={IllustrationImg} alt="Ilustration image" />
      </div>
    </div>
  );
};

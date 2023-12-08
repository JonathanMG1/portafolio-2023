import CardWork from './ui/card-work';

const ListFeatureWork = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      <CardWork
        href="https://buscador-usuarios-github-front.vercel.app/"
        image="https://img.freepik.com/vector-gratis/maqueta-tweet-redes-sociales-realista_23-2149202421.jpg?w=740&t=st=1701980570~exp=1701981170~hmac=e0d027c62e6d897ca017a137766eb85bc5e9b5216ea35bd41f585f0c1c3b2081"
        category="Web (terminado)"
        title="Buscador de usuarios Github"
      />
      <CardWork
        href="https://carrito-verduras.vercel.app/"
        image="https://img.freepik.com/vector-gratis/portatil-isometrico-carrito-compra-teclado_1262-16544.jpg?w=740&t=st=1701980633~exp=1701981233~hmac=554d406b4b6f51792746ea4789e0337a6de7cb39ed801308b495ff821c7cab39"
        category="Web (incompleto)"
        title="Carrito de basico basico"
      />
    </div>
  );
};

export default ListFeatureWork;

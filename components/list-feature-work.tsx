import CardWork from './ui/card-work';

const ListFeatureWork = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      <CardWork
        href="https://buscador-usuarios-github-front.vercel.app/"
        image="https://img.freepik.com/vector-gratis/maqueta-tweet-redes-sociales-realista_23-2149202421.jpg?w=740&t=st=1701980570~exp=1701981170~hmac=e0d027c62e6d897ca017a137766eb85bc5e9b5216ea35bd41f585f0c1c3b2081"
        category="Web - Clon BluuWeb (terminado)"
        title="Buscador de usuarios Github"
      />
    </div>
  );
};

export default ListFeatureWork;

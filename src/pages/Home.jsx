import GameCard from "../components/GameCard";
import ImagemJogo from "../assets/imagem.jpg"
import ImagemJogo2 from "../assets/Imagem_uncharted.jpg"
import ImagemJogo3 from "../assets/Imagem_tlou.jpg"
import ImagemJogo4 from "../assets/Imagem_red_dead.jpg"
import ImagemJogo5 from "../assets/Imagem_Aranha.jpg"



const Home = () => {

  const games=[
    { id: 1, titulo: "Jogo-01", preco: "R$ 200,00", imagem: ImagemJogo5 },
    { id: 1, titulo: "Jogo-02", preco: "R$ 300,00", imagem: ImagemJogo2 },
    { id: 1, titulo: "Jogo-03", preco: "R$ 400,00", imagem: ImagemJogo3 },
    { id: 1, titulo: "Jogo-04", preco: "R$ 500,00", imagem: ImagemJogo4 },
  ];

  return (
    <main className="px-[5%] mt-16 grow">
      <h2 className="titulo text-3xl">JOGOS EM DESTAQUE</h2>
      {/* É aqui que os cards ficam um do lado do outro */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {games.map((jogo) => (
          <GameCard
            key={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco}
            imagem={jogo.imagem}
          />
        ))}
      </section>
      
    </main>
  )
}


export default Home

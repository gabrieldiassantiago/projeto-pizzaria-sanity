import Header from "../src/Components/Header/Header";
import client from '../src/sanity'
import Benefits from '../src/Components/Benefits/Benefits';
import ImageText from "../src/Components/ImageText/ImageText";
import Cardapio from '../src/Components/Cardapio/Cardapio';
import Reviews from '../src/Components/Reviews/Reviews';
import Menu from '../src/Components/Menu/Menu';
import Topo from '../src/Components/Topo/Topo';
import Footer from "../src/Components/Footer/Footer";



export default function Home({header, benefits, about, cardapio, reviews, location, menu}) {


  return (
    <>
    <Topo />
    <Header header={header} />
    <main>
    <Benefits benefits={benefits} />
    <ImageText data={about} id='about' />
    <Cardapio cardapio={cardapio} />
    <Reviews reviews={reviews} />
    <ImageText data={location} />
    <Menu menu={menu} />
    <Footer />
    </main>
    </>
  )
}
  export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const benefits = await client.fetch(`*[_type == "benefits"][0..2]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const cardapio = await client.fetch(`*[_type == "cardapio"][0..3]`);
  const reviews = await client.fetch(`*[_type == "reviews"][0...3]`);
  const location = await client.fetch(`*[_type == "location"][0]`);
  const menu = await client.fetch(`*[_type == "menu"][0..2]`);


  return {
    props: {
      header,
      benefits,
      about,
      cardapio,
      reviews,
      location,
      menu,
    },
  }
}
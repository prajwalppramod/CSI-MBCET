import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import JoinCommunity from "./JoinCommunity";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div class="bg-black">
        <h1 class="flex  justify-center text-white text-4xl font-semibold mt-8">
          Gallery
        </h1>
        <Gallery></Gallery>
        <h1 class="flex bg-black justify-center text-white text-4xl font-semibold mt-8">
          Join the Community
        </h1>
        <JoinCommunity></JoinCommunity>
        <Footer></Footer>
      </div>
    </div>
  )
}
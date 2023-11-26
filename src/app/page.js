// import Image from 'next/image'
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Button from "../components/Button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Button />
      <h1>Hello wosrld</h1>
      <Hero />
    </main>
  );
}

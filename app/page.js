import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Scroll from "./components/Scroll";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Call from "./components/Call";
import Testimonials from "./components/Testimonials";
import Imp from "./components/Imp";

export default function Home() {
  return (
    <div>
      <Call/>
      <Hero/>
      <Scroll/>
      <Imp/>
      <Stats/>
      <CTA/>
      <Testimonials/>

    </div>
  );
}

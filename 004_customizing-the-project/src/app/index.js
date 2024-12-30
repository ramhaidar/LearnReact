import Image from "next/image";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Nav />
            <div className="container mx-auto p-4">
                <Promo />
                <Intro1 />
                <Intro2 />
                <Intro3 />
            </div>
            <Footer />
        </div>
    );
}

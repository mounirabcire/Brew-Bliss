import About from "../sections/About";
import Contact from "../sections/Contact";
import Events from "../sections/Events";
import Hero from "../sections/Hero";
import Product from "../sections/Product";

function Home() {
    return (
        <>
            <Hero />
            <main>
                <About />
                <Product />
                <Events />
            </main>
            <Contact />
        </>
    );
}

export default Home;

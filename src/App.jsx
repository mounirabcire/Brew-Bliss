import { useEffect } from "react";
import Home from "./pages/Home";
import Lenis from "lenis";

function App() {
    useEffect(() => {
        const lenis = new Lenis();

        // lenis.on("scroll", (e) => {
        //     console.log(e);
        // });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return <Home />;
}

export default App;

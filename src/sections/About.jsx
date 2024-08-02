import { useRef } from "react";
import Button from "../components/Button";
import Pic1 from "/assets/about-img1.png";
import Pic2 from "/assets/about-img2.png";
import Pic3 from "/assets/about-img3.png";
import Pic4 from "/assets/about-img4.png";
import RevealImg from "../components/RevealImg";
import { useResponsive } from "../hooks/useResponsive";
import Container from "../components/Container";

function About() {
    const container = useRef(null);
    const bp = useResponsive([639, 767, 1023, 1279, 1535]);

    const pics = [
        {
            src: Pic1,
            bottom: "-bottom-120",
            right: "right-[4vw]",
            origin: "bottom",
        },
        {
            src: Pic2,
            left: "-left-[3vw] ",
            bottom: "bottom-20",
            origin: "left",
        },
        {
            src: Pic3,
            left: "left-[7vw]",
            top: "-top-60",
            origin: "top",
        },
        {
            src: Pic4,
            right: "right-0",
            top: "-top-60",
            origin: "right",
        },
    ];

    return (
        <section
            id="about"
            className="relative mt-120 flex min-h-screen items-center justify-center"
            ref={container}
        >
            <Container>
                <div className="space-y-60 text-center">
                    <div className="space-y-30">
                        {(bp === 1535 || bp === 1279 || bp === -1) && (
                            <h2 className="text-4xl font-extrabold leading-[.95] text-secondary">
                                Savor the Best, <br /> at{" "}
                                <span className="text-primary">Brew Bliss</span>
                            </h2>
                        )}

                        {bp <= 1023 && (
                            <h2 className="text-3xl font-extrabold leading-[.95] text-secondary">
                                Savor the Best, <br /> at{" "}
                                <span className="text-primary">Brew Bliss</span>
                            </h2>
                        )}

                        <p className="mx-auto w-full max-w-[790px] font-medium leading-relaxed text-background mix-blend-difference">
                            At Brew Bliss, we source our coffee beans from
                            organic, fair-trade farms, ensuring top quality and
                            ethical practices. Our expertly trained baristas
                            provide a personalized coffee experience tailored to
                            your taste. We also offer unique seasonal blends and
                            limited-edition pastries, bringing exciting new
                            flavors throughout the year. Our community of young
                            professionals, students, and coffee enthusiasts
                            values quality, sustainability, and a sense of
                            community. Join us to experience the best of
                            artisanal coffee in a cozy, welcoming atmosphere.
                        </p>
                    </div>
                    <div className="space-x-30">
                        <Button
                            className={`border-2 border-transparent bg-primary text-background`}
                        >
                            <a href="#products">Shop</a>
                        </Button>
                        <Button
                            className={`border-[2px] border-primary text-primary`}
                        >
                            <a href="#events">Our Events</a>
                        </Button>
                    </div>
                </div>

                {pics.map(({ src, bottom, left, top, right, origin }, i) => (
                    <RevealImg
                        className={`absolute ${bottom ?? top} ${right ?? left} -z-10 ${bp >= 1023 ? "scale-[.6]" : "w-[25vw]"}`}
                        origin={origin}
                        key={i}
                        bg={"background"}
                        container={container}
                    >
                        <img
                            className="block h-full w-full object-cover"
                            src={src}
                            alt="coffee"
                        />
                    </RevealImg>
                ))}
            </Container>
        </section>
    );
}

export default About;

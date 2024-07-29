import Button from "../components/Button";
import Pic1 from "/assets/about-img1.png";
import Pic2 from "/assets/about-img2.png";
import Pic3 from "/assets/about-img3.png";
import Pic4 from "/assets/about-img4.png";

const pics = [
    {
        src: Pic1,
        bottom: "-bottom-120",
        right: "right-[4vw]",
    },
    {
        src: Pic2,
        left: "-left-[3vw] ",
        bottom: "bottom-20",
    },
    {
        src: Pic3,
        left: "left-[7vw]",
        top: "-top-60",
    },
    {
        src: Pic4,
        right: "right-0",
        top: "-top-60",
    },
];

function About() {
    return (
        <section className="relative mt-120 flex min-h-dvh items-center justify-center">
            <div className="space-y-60 text-center">
                <div className="space-y-30">
                    <h2 className="text-4xl font-extrabold leading-[.95] text-secondary">
                        Savor the Best, <br /> at{" "}
                        <span className="text-primary">Brew Bliss</span>
                    </h2>
                    <p className="w-full max-w-[790px] font-medium leading-relaxed text-background mix-blend-difference">
                        At Brew Bliss, we source our coffee beans from organic,
                        fair-trade farms, ensuring top quality and ethical
                        practices. Our expertly trained baristas provide a
                        personalized coffee experience tailored to your taste.
                        We also offer unique seasonal blends and limited-edition
                        pastries, bringing exciting new flavors throughout the
                        year. Our community of young professionals, students,
                        and coffee enthusiasts values quality, sustainability,
                        and a sense of community. Join us to experience the best
                        of artisanal coffee in a cozy, welcoming atmosphere.
                    </p>
                </div>
                <div className="space-x-30">
                    <Button className="border-2 border-transparent bg-primary text-background">
                        Shop
                    </Button>
                    <Button className="border-[2px] border-primary text-primary">
                        Join Our Events
                    </Button>
                </div>
            </div>

            <div className="absolute -bottom-120 right-[4vw] -z-10 scale-75">
                <img
                    className="h-full w-full object-cover"
                    src={Pic1}
                    alt="coffee"
                />
            </div>
            <div className="absolute -left-[3vw] bottom-10 -z-10 scale-[.7]">
                <img
                    className="h-full w-full object-cover"
                    src={Pic2}
                    alt="coffee"
                />
            </div>
            <div className="absolute -top-60 left-[7vw] -z-10 scale-[.7]">
                <img
                    className="h-full w-full object-cover"
                    src={Pic3}
                    alt="coffee"
                />
            </div>
            <div className="absolute right-0 top-0 -z-10 scale-75">
                <img
                    className="h-full w-full object-cover"
                    src={Pic4}
                    alt="coffee"
                />
            </div>
        </section>
    );
}

export default About;

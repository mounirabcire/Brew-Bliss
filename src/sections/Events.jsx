import { useResponsive } from "../hooks/useResponsive";
import Button from "../components/Button";
import RevealImg from "../components/RevealImg";
import Container from "../components/Container";

function Events() {
    const bp = useResponsive([639, 767, 1023, 1279, 1535]);

    return (
        <section id="events" className="relative mt-120 min-h-dvh space-y-30">
            <Container>
                {(bp === 1535 || bp === 1279 || bp === -1) && (
                    <h2 className="text-center text-4xl font-extrabold leading-[.95] text-secondary">
                        Join Our Coffee{" "}
                        <span className="text-primary">Events</span> <br />&{" "}
                        <span className="text-primary">Workshops</span>
                    </h2>
                )}

                {bp <= 1023 && (
                    <h2 className="text-center text-3xl font-extrabold leading-[.95] text-secondary">
                        Join Our Coffee{" "}
                        <span className="text-primary">Events</span> &{" "}
                        <span className="text-primary">Workshops</span>
                    </h2>
                )}
            </Container>
            <div className="grid grid-cols-2 gap-y-60 bp-sm:grid-cols-1 bp-sm:px-5  bp-sm:gap-y-0">
                {bp <= 639 && (
                    <RevealImg
                        className={"relative"}
                        bg={"primary"}
                        origin={"right"}
                    >
                        <img
                            src="/assets/event-img1.png"
                            alt="Event"
                            className="h-full w-full object-cover"
                        />
                    </RevealImg>
                )}
                <div className="flex flex-col justify-center bg-primary p-30 bp-sm:mb-60 text-background bp-md:px-10">
                    <h3 className="text-2xl leading-[.95] bp-md:text-xl">
                        Coffee Tasting <br /> Experience
                    </h3>
                    <p className="mb-30 mt-20 max-w-[80%] leading-relaxed bp-md:max-w-full bp-sm:max-w-full">
                        Dive into the rich and diverse world of coffee flavors.
                        Our expert baristas will guide you through a tasting
                        journey, helping you identify different coffee profiles
                        and origins. Perfect for coffee lovers looking to deepen
                        their appreciation.
                    </p>
                    <Button className="bg-secondary text-background">
                        Reserve your spot
                    </Button>
                </div>
                {bp > 639 && (
                    <RevealImg
                        className={"relative"}
                        bg={"primary"}
                        origin={"right"}
                    >
                        <img
                            src="/assets/event-img1.png"
                            alt="Event"
                            className="h-full w-full object-cover"
                        />
                    </RevealImg>
                )}
                <RevealImg
                    className={"relative"}
                    bg={"primary"}
                    origin={"left"}
                >
                    <img
                        src="/assets/event-img2.png"
                        alt="Event"
                        className="h-full w-full object-cover"
                    />
                </RevealImg>
                <div className="flex flex-col items-end justify-center bg-primary p-30 text-end text-background bp-md:px-10 bp-sm:items-start bp-sm:text-start">
                    <h3 className="text-2xl leading-[.95] bp-md:text-xl">
                        Barista Skills <br />
                        Workshop
                    </h3>
                    <p className="mb-30 mt-20 max-w-[78%] leading-relaxed bp-md:max-w-full bp-sm:max-w-[100%]">
                        Enhance your coffee-making skills with our hands-on
                        barista workshop. Learn the art of espresso, milk
                        frothing, and latte art from our experienced baristas.
                        Ideal for anyone interested in perfecting their home
                        brewing techniques.
                    </p>
                    <Button className="bg-secondary text-background">
                        Sign up now
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Events;

import Button from "../components/Button";

function Events() {
    return (
        <section className="relative mt-120 min-h-dvh space-y-30">
            <h2 className="text-center text-4xl font-extrabold leading-[.95] text-secondary">
                Join Our Coffee <span className="text-primary">Events</span>{" "}
                <br />& <span className="text-primary">Workshops</span>
            </h2>
            <div className="grid grid-cols-2 gap-y-60">
                <div className="flex flex-col justify-center bg-primary px-60 text-background">
                    <h3 className="text-2xl leading-[.95]">
                        Coffee Tasting <br /> Experience
                    </h3>
                    <p className="mb-30 mt-20 leading-relaxed">
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
                <div>
                    <img
                        src="/assets/event-img1.png"
                        alt="Event"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/assets/event-img2.png"
                        alt="Event"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center items-end text-end bg-primary px-60 text-background">
                    <h3 className="text-2xl leading-[.95]">
                        Coffee Tasting <br /> Experience
                    </h3>
                    <p className="mb-30 mt-20 leading-relaxed">
                        Dive into the rich and diverse world of coffee flavors.
                        Our expert baristas will guide you through a tasting
                        journey, helping you identify different coffee profiles
                        and origins. Perfect for coffee lovers looking to deepen
                        their appreciation.
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

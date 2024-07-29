import Button from "../components/Button";
import Form from "../components/Form";

function Hero() {
    return (
        <header className="realative min-h-svh text-background">
            <div className="absolute inset-0 left-1/2 top-1/2 h-[95%] w-[94%] -translate-x-1/2 -translate-y-1/2">
                <img
                    src="/assets/herosection-x1.png"
                    alt="Coffee"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="bg-primary--op absolute left-0 top-0 h-full w-full" />

                <div className="relative z-50 h-full">
                    <nav className="relative flex items-center justify-between">
                        <div className="absolute left-1/2 -translate-x-1/2">
                            <img src="/assets/Logo-white.svg" alt="Logo" />
                        </div>
                        <div className="nav__menu after:lef-1/2 relative ml-6 size-[5rem] cursor-pointer rounded-full border-[2px] border-background" />
                        <Form className="bg-background px-6 py-9" />
                    </nav>

                    <h1 className="absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-extrabold">
                        Sustainable Coffee <br /> from Farm to Cup
                    </h1>

                    <Button
                        type="link"
                        className="absolute bottom-20 left-1/2 -translate-x-1/2"
                    >
                        OUR PRODUCT
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Hero;

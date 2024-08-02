import Container from "../components/Container";
import Form from "../components/Form";
import { useResponsive } from "../hooks/useResponsive";

function Contact() {
    const bp = useResponsive([639, 767, 1023, 1279, 1535]);

    return (
        <footer id="contact" className="relative mt-120 py-30 text-center">
            <Container>
                {(bp === 1535 || bp === 1279 || bp === -1) && (
                    <h2 className="text-4xl font-extrabold leading-[.95] text-secondary">
                        Contact <span className="text-primary">us</span>
                    </h2>
                )}
                {bp <= 1023 && (
                    <h2 className="text-3xl font-extrabold leading-[.95] text-secondary">
                        Contact <span className="text-primary">us</span>
                    </h2>
                )}
                <h4 className="mb-15 mt-30 text-lg font-semibold">
                    Subscribe to Our Newsletter
                </h4>
                <Form className="mx-auto w-[35rem]" />
                <nav className="mt-60 text-secondary">
                    <ul className="flex items-center justify-center gap-30 bp-sm:gap-10">
                        <li>
                            <a href="#home" className="underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="underline">
                                About
                            </a>
                        </li>
                        <li className="mx-60 bp-sm:mx-20">
                            <a href="/">
                                <img
                                    src="../../public/assets/Logo-black.svg"
                                    alt="Logo"
                                   className="size-90 bp-sm:size-60"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#products" className="underline">
                                Porducts
                            </a>
                        </li>
                        <li>
                            <a href="#events" className="underline">
                                Events
                            </a>
                        </li>
                    </ul>
                </nav>{" "}
            </Container>
        </footer>
    );
}

export default Contact;

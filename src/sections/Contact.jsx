import Form from "../components/Form";

function Contact() {
    return (
        <footer className="relative mt-120 py-30 text-center">
            <h2 className="text-4xl font-extrabold leading-[.95] text-secondary">
                Contact <span className="text-primary">us</span>
            </h2>
            <h4 className="mb-15 mt-30 text-lg font-semibold">
                Subscribe to Our Newsletter
            </h4>

            <Form className="mx-auto w-[35rem]" />
            <nav className="text-secondary mt-60">
                <ul className="flex justify-center items-center gap-30">
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
                    <li className="mx-60" >
                        <a href="/" >
                            <img
                                src="../../public/assets/Logo-black.svg"
                                alt="Logo"
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
            </nav>
        </footer>
    );
}

export default Contact;

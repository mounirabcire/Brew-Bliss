import { AnimatePresence, motion } from "framer-motion";
import { useResponsive } from "../hooks/useResponsive";
import Button from "../components/Button";
import Container from "../components/Container";
import Form from "../components/Form";
import { useEffect, useState } from "react";

function Hero() {
    const bp = useResponsive([639, 767, 1023, 1279, 1535]);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const parentVariants = {
        initial: { height: "0%", transformOrigin: "bottom" },
        animate: {
            height: "100%",
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.08,
                when: "beforeChildren",
            },
        },
        exit: {
            height: "0%",
            transformOrigin: "bottom",
            transition: {
                duration: 0.9,
                delay: 0.3,
                ease: [0.33, 1, 0.68, 1],
                staggerChildren: 0.05,
            },
        },
    };

    const childrenVariants = {
        initial: { y: "30%", opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
            },
        },
        exit: { opacity: 0 },
    };

    function handleOpenMenu() {
        setIsNavOpen((prev) => !prev);
    }

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // This makes the scroll smooth
        });
    }

    useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="home" className="relative min-h-screen text-background">
            <AnimatePresence>
                {isNavOpen && (
                    <motion.nav
                        variants={parentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 z-40 flex h-full w-full flex-col justify-center gap-20 bg-primary pl-90 text-3xl text-background"
                    >
                        <motion.div
                            onClick={handleOpenMenu}
                            variants={childrenVariants}
                            className="absolute left-20 top-10 cursor-pointer"
                        >
                            <i className="ri-close-large-line"></i>
                        </motion.div>

                        <motion.div
                            variants={childrenVariants}
                            onClick={handleOpenMenu}
                        >
                            <a href="#home">Home</a>
                        </motion.div>
                        <motion.div
                            variants={childrenVariants}
                            onClick={handleOpenMenu}
                        >
                            <a href="#about">About</a>
                        </motion.div>
                        <motion.div
                            variants={childrenVariants}
                            onClick={handleOpenMenu}
                        >
                            <a href="#products">Products</a>
                        </motion.div>
                        <motion.div
                            variants={childrenVariants}
                            onClick={handleOpenMenu}
                        >
                            <a href="#events">Events</a>
                        </motion.div>
                        <motion.div
                            variants={childrenVariants}
                            onClick={handleOpenMenu}
                        >
                            <a href="#contact">Contact</a>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
            <div className="absolute inset-0 left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2">
                <img
                    src="/assets/herosection-x1.png"
                    alt="Coffee"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-primary--op" />

                <div className="relative z-50 h-full">
                    {bp >= 768 ? (
                        <nav className="relative flex items-center justify-between">
                            <div className="absolute left-1/2 z-50 -translate-x-1/2">
                                <img src="/assets/Logo-white.svg" alt="Logo" />
                            </div>
                            <div
                                onClick={handleOpenMenu}
                                className="nav__menu after:lef-1/2 relative ml-6 size-[5rem] cursor-pointer rounded-full border-[2px] border-background"
                            />

                            <Form className="-translate-y-5 rounded-md bg-background px-6 py-9" />
                        </nav>
                    ) : (
                        <Container>
                            <nav className="relative flex items-center justify-between pt-5">
                                <div>
                                    <img
                                        src="/assets/Logo-white.svg"
                                        alt="Logo"
                                        className="size-90"
                                    />
                                </div>
                                <div
                                    onClick={handleOpenMenu}
                                    className="nav__menu after:lef-1/2 relative ml-6 size-[5rem] cursor-pointer rounded-full border-[2px] border-background"
                                />
                            </nav>
                        </Container>
                    )}

                    {(bp === 1535 || bp === -1) && (
                        <h1 className="absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-extrabold">
                            Sustainable Coffee <br /> from Farm to Cup
                        </h1>
                    )}

                    {bp === 1023 && (
                        <h1 className="absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-extrabold">
                            Sustainable Coffee <br /> from Farm to Cup
                        </h1>
                    )}

                    {bp <= 767 && (
                        <div className="absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 space-y-30">
                            <h1 className="text-center text-2xl font-extrabold">
                                Sustainable Coffee <br /> from Farm to Cup
                            </h1>
                            <Form className="mx-auto w-[98%] max-w-[30rem]" />
                        </div>
                    )}

                    <Button
                        type="link"
                        href={"#products"}
                        className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-md bg-background p-10 text-secondary"
                    >
                        OUR PRODUCT
                    </Button>
                </div>
            </div>

            {isVisible && (
                <div
                    className="fixed bottom-5 left-5 z-50 flex size-[5rem] cursor-pointer items-center shadow-2xl justify-center rounded-full bg-primary text-[2.6rem]"
                    onClick={handleScrollToTop}
                >
                    <i className="ri-arrow-up-line"></i>
                </div>
            )}
        </header>
    );
}

export default Hero;

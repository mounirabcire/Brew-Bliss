import { useResponsive } from "../hooks/useResponsive";
import RevealImg from "../components/RevealImg";

const products = [
    {
        className: "products__product--2",
        src: "/assets/product-img2.png",
        alt: "Coffee",
        name: "Flat White",
        price: "$14.99",
        origin: "bottom",
        position: { heading: "right-0 top-0", details: "bottom-0 left-0" },
    },
    {
        className: "products__product--3",
        src: "/assets/product-img4.png",
        alt: "Coffee",
        name: "Americano",
        price: "$19.99",
        origin: "right",
        position: { heading: "right-0 top-0", details: "bottom-0 left-0" },
    },
    {
        className: "products__product--4",
        src: "/assets/product-img3.png",
        alt: "Coffee",
        name: "Espresso",
        price: "$9.99",
        origin: "left",
        position: { heading: "right-0 top-0", details: "bottom-0 left-0" },
    },
    {
        className: "products__product--5",
        src: "/assets/product-img5.png",
        alt: "Coffee",
        name: "Latte",
        price: "$15.99",
        origin: "top",
        position: { heading: "right-0 top-0", details: "bottom-0 left-0" },
    },
];

function Product() {
    const bp = useResponsive([639, 767, 1023, 1279, 1535]);

    return (
        <section id="products" className="products relative mt-120 min-h-dvh">
            <div className="products__product--1 relative">
                <RevealImg
                    bg={"background"}
                    origin={"bottom"}
                    className="h-full w-full"
                >
                    <img
                        src="/assets/product-img1.png"
                        alt="Coffee"
                        className="h-full w-full object-cover"
                    />
                </RevealImg>
                <div className="absolute right-0 top-0 flex h-[6.5rem] w-[30%] items-center justify-center bg-background">
                    <span className="inline-block cursor-pointer text-[2.3rem]">
                        <i className="ri-heart-3-line text-secondary"></i>
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 flex h-[6.5rem] w-[35%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end">
                    <h4
                        className={`text-secondary ${bp > 639 ? "text-lg font-semibold" : "text-base font-extrabold"}`}
                    >
                        Cappuccino
                    </h4>
                    <p className="text-base font-bold text-secondary">$49.99</p>
                </div>
            </div>

            {(bp === 1535 || bp === 1279 || bp === -1) && (
                <h2 className="products__heading text-end text-4xl font-extrabold leading-[.95] text-secondary">
                    Best-Selling <br />{" "}
                    <span className="text-primary">Brews</span>
                </h2>
            )}

            {bp <= 1023 && (
                <h2 className="products__heading text-center text-3xl font-extrabold leading-[.95] text-secondary">
                    Best-Selling <br />{" "}
                    <span className="text-primary">Brews</span>
                </h2>
            )}

            {products.map((product, index) => (
                <div
                    key={index}
                    className={`products__small ${product.className} relative`}
                >
                    <RevealImg
                        bg={"background"}
                        origin={product.origin}
                        className="h-full w-full"
                    >
                        <img
                            src={product.src}
                            alt={product.alt}
                            className="h-full w-full object-cover"
                        />
                    </RevealImg>
                    <div
                        className={`absolute ${product.position.heading} flex h-[6.5rem] w-[30%] items-center justify-center bg-background`}
                    >
                        <span className="inline-block cursor-pointer text-[2.3rem]">
                            <i className="ri-heart-3-line text-secondary"></i>
                        </span>
                    </div>
                    <div
                        className={`absolute ${product.position.details} flex h-[6.5rem] w-[35%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end`}
                    >
                        <h4
                            className={`text-secondary ${bp > 639 ? "text-lg font-semibold" : "text-base font-extrabold"} `}
                        >
                            {product.name}
                        </h4>
                        <p className="text-base font-bold text-secondary">
                            {product.price}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Product;

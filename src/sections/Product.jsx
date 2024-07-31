function Product() {
    return (
        <section className="products relative mt-120 min-h-dvh">
            <div className="products__product--1 relative">
                <img
                    src="/assets/product-img1.png"
                    alt="Coffee"
                    className="h-full w-full object-cover"
                />
                <div className="absolute right-0 top-0 flex h-[6.5rem] w-[30%] items-center justify-center bg-background">
                    <span className="inline-block cursor-pointer text-[2.3rem]">
                        <i class="ri-heart-3-line text-secondary"></i>
                    </span>
                </div>
                <div className="pt-3left-0 absolute bottom-0 flex h-[6.5rem] w-[35%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end">
                    <h4 className="text-lg font-semibold text-secondary">
                        Cappuccino
                    </h4>
                    <p className="text-base font-bold text-secondary">$49.99</p>
                </div>
            </div>
            <h2 className="products__heading text-end text-4xl font-extrabold leading-[.95] text-secondary">
                Best-Selling <br /> <span className="text-primary">Brews</span>
            </h2>
            <div className="products__small products__product--2 relative">
                <img
                    src="/assets/product-img2.png"
                    alt="Coffee"
                    className="h-full w-full object-cover"
                />
                <div className="absolute right-0 top-0 flex h-[6.5rem] w-[30%] items-center justify-center bg-background">
                    <span className="inline-block cursor-pointer text-[2.3rem]">
                        <i class="ri-heart-3-line text-secondary"></i>
                    </span>
                </div>
                <div className="pt-3left-0 absolute bottom-0 flex h-[6.5rem] w-[35%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end">
                    <h4 className="text-lg font-semibold text-secondary">
                        Flat White
                    </h4>
                    <p className="text-base font-bold text-secondary">$14.99</p>
                </div>
            </div>
            <div className="products__small products__product--3 relative">
                <img
                    src="/assets/product-img4.png"
                    alt="Coffee"
                    className="h-full w-full object-cover"
                />
                <div className="absolute right-0 top-0 flex h-[6.5rem] w-[30%] items-center justify-center bg-background">
                    <span className="inline-block cursor-pointer text-[2.3rem]">
                        <i class="ri-heart-3-line text-secondary"></i>
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 flex h-[6.5rem] w-[35%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end">
                    <h4 className="text-lg font-semibold text-secondary">
                        Americano
                    </h4>
                    <p className="text-base font-bold text-secondary">$19.99</p>
                </div>
            </div>
            <div className="products__small products__product--4 relative">
                <img
                    src="/assets/product-img3.png"
                    alt="Coffee"
                    className="h-full w-full object-cover"
                />
                <div className="absolute right-0 top-0 flex h-[6.5rem] w-[30%] items-center justify-center bg-background">
                    <span className="inline-block cursor-pointer text-[2.3rem]">
                        <i class="ri-heart-3-line text-secondary"></i>
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 flex h-[6.5rem] w-[35%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end">
                    <h4 className="text-lg font-semibold text-secondary">
                        Espresso
                    </h4>
                    <p className="text-base font-bold text-secondary">$9.99</p>
                </div>
            </div>
            <div className="products__small products__product--5 relative">
                <img
                    src="/assets/product-img5.png"
                    alt="Coffee"
                    className="h-full w-full object-cover"
                />
                <div className="absolute right-0 top-0 flex h-[6.5rem] w-[30%] items-center justify-center bg-background">
                    <span className="inline-block cursor-pointer text-[2.3rem]">
                        <i class="ri-heart-3-line text-secondary"></i>
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 flex h-[6.5rem] w-[35%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end">
                    <h4 className="text-lg font-semibold text-secondary">
                        Latte
                    </h4>
                    <p className="text-base font-bold text-secondary">$15.99</p>
                </div>
            </div>
        </section>
    );
}

export default Product;

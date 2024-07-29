function Button({ type, children, className = "" }) {
    if (type === "link") {
        return (
            <a href="#shop" className={`${className} font-semibold underline`}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={`w-[17rem] text-lg rounded-md py-15  ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;

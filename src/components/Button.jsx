function Button({ type, children, className = "", href }) {
    if (type === "link") {
        return (
            <a href={href} className={`${className} font-semibold underline`}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={`w-[13rem] text-lg rounded-md py-15  ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;

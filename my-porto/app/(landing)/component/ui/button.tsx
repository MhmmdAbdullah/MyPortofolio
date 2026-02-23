type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "lightmode" | "darkmode";
    size?: "normal" | "small";
}   & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ 
    children, 
    className, 
    variant = "lightmode", 
    size = "normal", ...props
}: TButtonProps) => {

    const baseStyles = "inline-flex items-center justify-center gap-2 duration-300 cursor-pointer hover:scale-105";

    const variants = {
        lightmode : 'bg-darkblue text-white hover:bg-darkblue-85',
        darkmode :  'bg-baby text-darkblue hover:bg-baby-85',
    }

    const sizes = {
        normal: 'px-9 py-4',
        small: 'px-7 py-[10px]',
    }

    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button;
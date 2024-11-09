const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="text-sm border rounded-3xl w-full py-2 px-3 text-white placeholder: opacity-50 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            name={name}
        />
    );
};

export default Input
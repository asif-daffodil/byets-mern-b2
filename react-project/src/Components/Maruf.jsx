
const Maruf = ({ maruf, setMaruf }) => {
    return (
        <div>
            <p className="text-4xl mb-2">Maruf is from {maruf}</p>
            <button onClick={() => maruf == "Dhaka" ? setMaruf("Gopali") : setMaruf("Dhaka")} className="border rounded shadow px-4 py-2 hover:bg-black hover:text-white cursor-pointer" >{maruf}</button>
        </div>
    );
};

export default Maruf;
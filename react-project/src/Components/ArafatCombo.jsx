
const ArafatCombo = ({university, stName, setStName}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{stName} is a proud {university}ian</h1>
            <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui nulla adipisci veritatis est sequi! Nihil libero nisi repudiandae dolorum, inventore est quae dolorem animi vitae modi aperiam quam voluptas!
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded mr-2 cursor-pointer" onClick={() => setStName("Apurba")}>Apurba</button>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" onClick={() => setStName("Arafat")}>Arafat Nor</button>
        </div>
    );
};

export default ArafatCombo;

const User = ({user}) => {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
            <p className="text-gray-600">{user.website}</p>
        </div>
    );
};

export default User;
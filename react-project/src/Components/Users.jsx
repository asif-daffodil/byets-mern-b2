import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

const Users = ({num}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setData(response.data))
    }, [num, data])


    return (
        <div>
            User Compo
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {data.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Users;
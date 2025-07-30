import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Posts = () => {
    const { data, isLoading, isFetched } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data;
        }
    });

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isFetched && (
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Posts;

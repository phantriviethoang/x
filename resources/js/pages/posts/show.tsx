import AppLayout from "@/layouts/app-layout";
import { Post } from "@/types";

interface PostsShowProps {
    post: Post;
}

export default function PostShow({ post }: PostsShowProps) {
    return (
        <AppLayout>
            <h1 className="text-xl font-semibold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-2">By {post.user.name}</p>
            <div className="text-gray-600">{post.body}</div>
        </AppLayout>
    );
}

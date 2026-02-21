import AppLayout from "@/layouts/app-layout";

interface PostsShowProps {
    post: {
        title: string;
        body: string;
    };
}

export default function PostShow({ post }: PostsShowProps) {
    return (
        <AppLayout>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </AppLayout>
    );
}

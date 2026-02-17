import { Link } from "@inertiajs/react";
import AppLayout from "../layouts/app-layout";

export default function About() {
    return (
        <AppLayout>
            <h1>Home</h1>
            <div>Welcome to about page</div>
            <Link href="/">Home</Link>
        </AppLayout>
    );
}

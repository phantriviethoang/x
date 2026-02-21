import { Link } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";

export default function Home() {
    return (
        <AppLayout>
            <h1>Home</h1>
            <div>Welcome to homepage</div>
            <Link href="/about">About</Link>
        </AppLayout>
    );
}

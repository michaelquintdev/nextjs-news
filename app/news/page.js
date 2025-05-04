import Link from "next/link";

export default function NewsPage() {
    return (
        <>
            <h2>Welcome to the News Page</h2>
            <Link href='/news/1'>News 1</Link>
            <Link href='/news/2'>News 2</Link>
        </>
    )
}
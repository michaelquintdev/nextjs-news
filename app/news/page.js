import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-new";

export default function NewsPage() {
    return (
        <>
            <h2>Welcome to the News Page</h2>
            <ul className="news-list">
                {DUMMY_NEWS.map(newsItem => (<li key={newsItem.id}>
                    <Link href={`/news/${newsItem.slug}`}>
                        <img src={`images/news/${newsItem.image}`} alt={newsItem.title} />
                        <span>{newsItem.title}</span>
                    </Link>
                </li>))}
            </ul>
            
        </>
    )
}
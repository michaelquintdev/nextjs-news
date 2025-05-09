import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
    return (
        <>
            <h2>Welcome to the News Page</h2>
            <NewsList news={DUMMY_NEWS}/>
            
        </>
    )
}
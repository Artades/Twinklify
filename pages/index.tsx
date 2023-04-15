import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import Form from "@/components/Form";
import MetaHead from "@/meta/MetaHead";

export default function Home() {
	return (
		<>
			<MetaHead title={"Twinklify"} />
			<Header label="Home" />
			<Form placeholder="What's happening?" />
			<PostFeed />
		</>
	);
}

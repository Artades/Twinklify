import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import usePost from "@/hooks/usePost";

import Header from "@/components/Header";
import Form from "@/components/Form";
import PostItem from "@/components/posts/PostItem";
import CommentFeed from "@/components/posts/CommentFeed";
import MetaHead from "@/meta/MetaHead";

const PostView = () => {
	const router = useRouter();
	const { postId } = router.query;

	const { data: fetchedPost, isLoading } = usePost(postId as string);

	if (isLoading || !fetchedPost) {
		return (
			<div className="flex justify-center items-center h-full">
				<ClipLoader color="lightblue" size={80} />
			</div>
		);
	}

	return (
		<>
			<MetaHead title="Post" />
			<Header showBackArrow label="Post" />
			<PostItem data={fetchedPost} />
			<Form
				postId={postId as string}
				isComment
				placeholder="Reply to the post"
			/>
			<CommentFeed comments={fetchedPost?.comments} />
		</>
	);
};

export default PostView;

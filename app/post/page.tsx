import { fetchPosts } from "@/app/action";
import styles from "./post.module.css";

export default async function PostPage() {
	const posts = await fetchPosts();

	return (
		<main className={styles.container}>
			{posts.map((post) => (
				<article key={post.id} className={styles.card}>
					<h1 className={styles.title}>{post.title}</h1>
					<p className={styles.body}>{post.body}</p>
				</article>
			))}
		</main>
	);
}

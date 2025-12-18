import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
	const tasks = [
		{
			label: "📄 Halaman Statis",
			link: "/post",
		},
		{
			label: "👤 Routing Dinamis",
			link: "/user",
		},
		{
			label: "🌐 API Routes",
			link: "/api/products",
		},
		{
			label: "📝 Formulir dan Pengelolaan State",
			link: "/register",
		},
		{
			label: "🖼️ Image Optimization",
			link: "/gallery",
		},
	];
	return (
		<main className={styles.container}>
			<div className={styles.profile}>
				<h1 className={styles.title}>Test Case Frontend</h1>
			</div>

			<div className={styles.links}>
				{tasks.map((task, index) => (
					<Link key={`task-${index}`} href={task.link} className={styles.linkButton}>
						{task.label}
					</Link>
				))}
			</div>
		</main>
	);
}

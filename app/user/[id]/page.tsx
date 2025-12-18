import { fetchUser } from "@/app/action";
import styles from "./usersingle.module.css";

export default async function UserSinglePage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const user = await fetchUser(id);

	return (
		<main className={styles.container}>
			<h1 className={styles.heading}>Detail Pengguna</h1>

			<div className={styles.card}>
				<p>
					<span className={styles.label}>Nama</span>
					{user.name}
				</p>
				<p>
					<span className={styles.label}>Username</span>
					{user.username}
				</p>
				<p>
					<span className={styles.label}>Email</span>
					{user.email}
				</p>
				<p>
					<span className={styles.label}>Telepon</span>
					{user.phone}
				</p>
				<p>
					<span className={styles.label}>Website</span>
					{user.website}
				</p>
			</div>
		</main>
	);
}

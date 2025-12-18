import { fetchUsers } from "@/app/action";
import styles from "./user.module.css";
import Link from "next/link";

export default async function UserPage() {
	const users = await fetchUsers();
	return (
		<main className={styles.container}>
			<h1 className={styles.heading}>Daftar Pengguna</h1>

			<div className={styles.list}>
				{users.map((user) => (
					<div key={user.id} className={styles.card}>
						<p className={styles.email}>{user.email}</p>

						<Link href={`/user/${user.id}`} className={styles.button}>
							Lihat Detail
						</Link>
					</div>
				))}
			</div>
		</main>
	);
}

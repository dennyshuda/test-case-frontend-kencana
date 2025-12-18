import Image from "next/image";
import styles from "./gallery.module.css";

export default function GalleryPage() {
	const images = [
		"https://picsum.photos/400",
		"https://picsum.photos/400",
		"https://picsum.photos/400",
		"https://picsum.photos/400",
		"https://picsum.photos/400",
		"https://picsum.photos/400",
		"https://picsum.photos/400",
		"https://picsum.photos/400",
		"https://picsum.photos/400",
	];

	return (
		<main className={styles.container}>
			<h1 className={styles.heading}>Galeri</h1>

			<div className={styles.grid}>
				{images.map((src, index) => (
					<div key={`image-${index}`} className={styles.card}>
						<Image
							src={src}
							alt={`Gallery Image ${index + 1}`}
							width={200}
							height={200}
							className={styles.image}
							unoptimized={true}
						/>
					</div>
				))}
			</div>
		</main>
	);
}

"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./register.module.css";
import { register, registerPayload } from "../action";

export default function RegisterPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [result, setResult] = useState<registerPayload | null>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await register(formData);
		setResult(response.data);
	};

	return (
		<main className={styles.container}>
			<h2 className={styles.heading}>Form Pendaftaran</h2>

			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formGroup}>
					<label>Nama</label>
					<input type="text" name="name" value={formData.name} onChange={handleChange} required />
				</div>

				<div className={styles.formGroup}>
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className={styles.formGroup}>
					<label>Password</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>

				<button type="submit" className={styles.button}>
					Daftar
				</button>
			</form>

			{result && (
				<div className={styles.result}>
					<h3>Data Pendaftaran</h3>
					<p>
						<strong>Nama:</strong> {result.name}
					</p>
					<p>
						<strong>Email:</strong> {result.email}
					</p>
					<p>
						<strong>Password:</strong> {result.password}
					</p>
					<button
						type="submit"
						onClick={() => {
							setFormData({
								name: "",
								email: "",
								password: "",
							});
							setResult(null);
						}}
					>
						Clear
					</button>
				</div>
			)}
		</main>
	);
}

"use server";

import { Post } from "@/interfaces/post.type";
import { User } from "@/interfaces/user.type";
import { BASE_API_URL } from "@/lib/constant";

export interface registerPayload {
	name: string;
	password: string;
	email: string;
}

export async function fetchPosts() {
	const res = await fetch(`${BASE_API_URL}/posts`);
	const posts: Post[] = await res.json();
	return posts;
}

export async function fetchUsers() {
	const res = await fetch(`${BASE_API_URL}/users`, { cache: "no-store" });
	const users: User[] = await res.json();
	return users;
}

export async function fetchUser(id: string) {
	const res = await fetch(`${BASE_API_URL}/users/${id}`, { cache: "no-store" });
	const user: User = await res.json();
	return user;
}

export async function register(data: registerPayload) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		success: true,
		data,
		message: "Data berhasil diproses di Server!",
	};
}

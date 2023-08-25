"use client";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <>
      <h1>Home</h1>
      <div>{session?.data?.user?.name}</div>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}

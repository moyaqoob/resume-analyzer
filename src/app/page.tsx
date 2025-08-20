"use client";
import { useUser } from "@auth0/nextjs-auth0";
import { UploadPage } from "./components/upload-page";
export default function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (!user) return <a href="/auth/login">Login</a>;

  return (
    <div>
      <UploadPage/>
    </div>
  );
}

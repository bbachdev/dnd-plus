import { useSession } from "next-auth/react";
import Link from "next/link";
import { GetServerSideProps } from "next/types";

export default function Header() {

  const { data: session, status } = useSession();

  return (
    <nav className="flex items-center p-4 text-xl bg-slate-800 text-white">
      {/* Left Align */}
      <div className="mr-auto">
        <Link href="/">DnD Plus</Link>
      </div>

      {/* Right Align */}
      <div className="ml-auto">
        {
          !session && <Link href='/auth/signin'>Sign In</Link>
        }
      </div>
    </nav>
  );
}
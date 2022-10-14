import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavUser = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <>
      {session ? (
        <div>
          <Link href="/profile">
            <a className="hover:bg-cb_primary hover:text-cb_white dark:hover:bg-cb_secondary mr-4 rounded-full p-2 transition-colors">
              {session.user?.email}
            </a>
          </Link>
          <button
            onClick={() => signOut()}
            className="hover:bg-cb_primary hover:text-cb_white dark:hover:bg-cb_secondary rounded-full p-2 transition-colors"
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <button
            className="font-serif font-bold uppercase"
            onClick={() => signIn()}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default NavUser;

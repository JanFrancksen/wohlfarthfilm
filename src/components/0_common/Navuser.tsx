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
            <a className="navItem">Downloads</a>
          </Link>
          <button onClick={() => signOut()} className="navItem">
            logout
          </button>
        </div>
      ) : (
        <div>
          <button className="navItem" onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default NavUser;

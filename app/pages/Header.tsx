import React from "react";
import Link from "next/link";
import { useAuth } from "lib/useAuth";

export default function Header() {
  const { user } = useAuth();

  const links = [
    !user && { label: "Sign Up", href: "/auth/signup" },
    !user && { label: "Sign In", href: "/auth/signin" },
    user && { label: "Create", href: "/streams/new" },
    user && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((link) => link)
    .map(({ label, href }) => {
      return (
        <Link href={href} key={href}>
          <div color="inherit">{label}</div>
        </Link>
      );
    });

  return (
    <div>
      <div>
        <div>
          <button>
            <a href="/">
              <a href="" color="inherit">
                Stream.me
              </a>
            </a>
          </button>
          {links}
        </div>
      </div>
    </div>
  );
}

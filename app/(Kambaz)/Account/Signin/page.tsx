import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h2>Assignment Done By : Krishna Kashyap Pasumarthi , Section : 04</h2>
      <h4>*Github link present at the bottom part of the lab1 page</h4>
      <h3>Sign in</h3>
      <input className="wd-username" placeholder="username" defaultValue="Krishna Kashyap" /> <br />
      <input className="wd-password" placeholder="password" type="password" defaultValue="kashyap" /> <br />
      <Link id="wd-signin-btn" href="/Dashboard"> Sign in </Link> <br />
      <Link id="wd-signup-link" href="Signup"> Sign up </Link>
    </div>

  );
}


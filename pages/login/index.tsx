import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebase";

const Signup = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("key", id.user.uid);
    await router.push("/");
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          email{" "}
          <input
            type="email"
            className="border border-slate-500"
            onChange={handleChangeEmail}
          />
        </div>
        <div className="">
          password{" "}
          <input
            type="text"
            className="border border-slate-500"
            onChange={handleChangePassword}
          />
        </div>

        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default Signup;

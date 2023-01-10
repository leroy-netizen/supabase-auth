import { React, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Auth = () => {
  // handle the login feature
  const [ email, setEmail ] = useState( "" );
  console.log("tyo")
  const [loading, setLoading] = useState(false);

  async function handleLoginWithEmail(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email.trim,
        options: {
          emailRedirectTo: "https:/www.google.com",
        },
      });
      if (error) throw error;
      alert("check your email for the login link");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Supabase Magic Link Login</h1>
        <p className="description">Sign in with your email below</p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form onSubmit={handleLoginWithEmail}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default Auth;

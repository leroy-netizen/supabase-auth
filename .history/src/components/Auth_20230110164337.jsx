import { React, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Auth = () => {
  // handle the login feature
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDeafault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithOtp( {
        email,
        options: {
        emailRedirectTo: {email}
      }
      } );
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
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form onSubmit={handleLogin}>
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

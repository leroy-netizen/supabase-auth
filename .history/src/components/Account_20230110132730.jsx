import { supabase } from '../utils/supabaseClient'
import { useState, useEffect } from "react"

const Account = () =>
{
      const [loading, setLoading] = useState(true);
      const [username, setUsername] = useState(null);
      const [website, setWebsite] = useState(null);
      const [avatar_url, setAvatarUrl] = useState(null);

      useEffect(() => {
        getProfile();
      }, [ session ] );
    
    const getProfile = async () => {
      try {
        setLoading(true);
        const { user } = session;

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, website, avatar_url`)
          .eq("id", user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setUsername(data.username);
          setWebsite(data.website);
          setAvatarUrl(data.avatar_url);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
     const updateProfile = async (e) => {
       e.preventDefault();

       try {
         setLoading(true);
         const { user } = session;

         const updates = {
           id: user.id,
           username,
           website,
           avatar_url,
           updated_at: new Date(),
         };
         let { error } = await supabase.from("profiles").upsert(updates);

         if (error) {
           throw error;
         }
       } catch (error) {
         alert(error.message);
       } finally {
         setLoading(false);
       }
     }

    return (
        <div>
            
        </div>
    )
}
export default Account;
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
      }, [session]);

    return (
        <div>
            
        </div>
    )
}
export default Account;
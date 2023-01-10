import { createClient } from "@supabase/supabase-js"

const supabaseUrl = Process.env.SUPABASE_URL;
const supabaseAnonKey = rocess.env.SUPABASE_ANON_KEY;


export const supabase = createClient(supabaseUrl, supabaseAnonKey)
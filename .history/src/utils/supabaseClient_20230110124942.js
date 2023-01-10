import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://aqwpinzwwtfbdfyaghaq.supabase.co"
// const supabaseUrl = Process.env.SUPABASE_URL;
// const supabaseAnonKey = Process.env.SUPABASE_ANON_KEY;
const supabaseAnonKey = 


export const supabase = createClient(supabaseUrl, supabaseAnonKey)
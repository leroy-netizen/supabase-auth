import { createClient } from "@supabase/supabase-js"

const supabaseUrl = Process.env.SUPABASE_URL;
const supabaseUrl = Process.env.SUPABASE_URL;
// const supabaseAnonKey = Process.env.SUPABASE_ANON_KEY;
const supabaseAnonKey = https://aqwpinzwwtfbdfyaghaq.supabase.co


export const supabase = createClient(supabaseUrl, supabaseAnonKey)
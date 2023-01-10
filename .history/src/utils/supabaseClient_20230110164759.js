import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqwpinzwwtfbdfyaghaq.supabase.co";
// const supabaseUrl = import.meta.env.SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;
const supabaseAnonKey = 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

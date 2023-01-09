import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = proces.env.SUPABASE_ANON_KEY


export const supabase = createClient(supabaseUrl, supabaseAnonKey)
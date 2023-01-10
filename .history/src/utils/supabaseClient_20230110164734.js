import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqwpinzwwtfbdfyaghaq.supabase.co";
// const supabaseUrl = import.meta.env.SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;
const supabaseAnonKey =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxd3Bpbnp3d3RmYmRmeWFnaGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyNzY1NDIsImV4cCI6MTk4ODg1MjU0Mn0
    .Q4nzLpugIN7uB4Y38IaLNslgjOmpvCf - Uod6RXooXPA;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

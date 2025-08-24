import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Supabase URL or anon key missing. Check .env or Netlify environment variables."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

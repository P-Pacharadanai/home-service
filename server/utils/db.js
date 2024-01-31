import { createClient } from "@supabase/supabase-js";

const supabase_url = process.env.VITE_APP_SUPABASE_URL;
const service_key = process.env.VITE_APP_SUPABASE_SERVICE_KEY;

const supabase = createClient(supabase_url, service_key);

export default supabase;

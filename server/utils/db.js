import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase_url = process.env.SUPABASE_URL;
const service_key = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabase_url, service_key);

export default supabase;

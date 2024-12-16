import { createClient } from "@supabase/supabase-js";
import env from "dotenv";
import process from "node";

env.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY);

export default supabase;

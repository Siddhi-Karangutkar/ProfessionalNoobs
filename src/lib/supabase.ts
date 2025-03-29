import { createClient } from '@supabase/supabase-js'

// Get environment variables from Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Add validation
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(`
    Missing Supabase credentials!
    Check your .env.local file and make sure:
    1. VITE_SUPABASE_URL exists
    2. VITE_SUPABASE_ANON_KEY exists
  `);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});
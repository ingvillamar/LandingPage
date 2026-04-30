import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClientSupabase = () =>
  createBrowserClient(
    supabaseUrl!,
    supabaseKey!,
  );

// Exportamos el cliente de Supabase
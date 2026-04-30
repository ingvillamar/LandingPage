import { getRows } from "@/Services/DocsEmbeddings";
import { createClientSupabase } from "@/Config/SupabaseClient";

async function main() {
  const rows = await getRows();
  const Supabase = createClientSupabase();
  const { data, error } = await Supabase
    .from("landing_page")
    .insert(rows)
    .select();

  if (error) console.error("Error al insertar:", error);
  else console.log("Insertados:", data);
}

main();


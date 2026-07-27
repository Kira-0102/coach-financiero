// Cliente de Supabase — proyecto: coach-financiero-mvp
// La anon key es pública a propósito: la seguridad real la da
// Row Level Security (RLS), ya activado en todas las tablas.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://tjwreitqxoyclhlzosjo.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqd3JlaXRxeG95Y2xobHpvc2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwNzAzNDIsImV4cCI6MjEwMDY0NjM0Mn0.SmiAv8a25gvuXXvfaKdAp8AvLfkBub1zD3LG4LRBWak";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

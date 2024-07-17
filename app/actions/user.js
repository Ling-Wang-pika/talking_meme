'user server';

import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const supabase = createClient({ cookies });
  const { data: session } = await supabase.auth.getUser();

  return {
    loggedIn: session.user ? true : false,
    user: session.user
  }
}
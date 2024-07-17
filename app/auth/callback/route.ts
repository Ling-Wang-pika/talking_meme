import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the Auth Helpers package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");
  const error_description = requestUrl.searchParams.get("error_description");
  // URL to redirect to after sign in process completes
  const from = requestUrl.searchParams.get("from");
  const to = requestUrl.searchParams.get("to");

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  } else if (error) {
    console.log(error);
    console.log(code)
    console.log(error_description);
    return NextResponse.redirect(
      from
        ? `${requestUrl.origin}${from}?info=${
            error_description || "Unable to sign in, please try again."
          }`
        : `${requestUrl.origin}/login?info=${
            error_description || "Unable to sign in, please try again."
          }`
    );
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${requestUrl.origin}${to || from || ""}`);
}

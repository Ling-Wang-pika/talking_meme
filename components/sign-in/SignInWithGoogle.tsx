"use client";

import { useState } from "react";

import Button from "@/components/atoms/Button";
import { createClient } from "@/utils/supabase/client";
import Google from "@/components/icons/social-media/Google";

function SignInWithGoogle() {
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  function signInWithGoogle() {
    setLoading(true);
    supabase.auth
      .signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${document.location.origin}/auth/callback` },
      })
      .finally(() => setLoading(false));
  }

  return (
    <Button 
      className="w-full"
      icon= { <Google/> }
      secondary
      onClick={ signInWithGoogle }
      loading={ loading }
    >
      Continue with Google
    </Button>
  );
}

export default SignInWithGoogle;

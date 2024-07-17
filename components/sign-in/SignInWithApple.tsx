"use client";

import { useState } from "react";

import Button from "@/components/atoms/Button";
import { createClient } from "@/utils/supabase/client";
import Apple from "../icons/social-media/Apple";

function SignInWithApple() {
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  function signInWithApple() {
    setLoading(true);
    supabase.auth
      .signInWithOAuth({
        provider: "apple",
        options: { redirectTo: `${document.location.origin}/auth/callback` },
      })
      .finally(() => setLoading(false));
  }

  return (
    <Button 
      className="w-full"
      icon= { <Apple/> }
      secondary
      onClick={ signInWithApple }
      loading={ loading }
    >
      Continue with Apple
    </Button>
  );
}

export default SignInWithApple;

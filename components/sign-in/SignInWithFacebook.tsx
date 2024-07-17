"use client";

import { useState } from "react";

import Button from "@/components/atoms/Button";
import { createClient } from "@/utils/supabase/client";
import Facebook from "../icons/social-media/Facebook";

function SignInWithFacebook() {
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  function signInWithFacebook() {
    setLoading(true);
    supabase.auth
      .signInWithOAuth({
        provider: "facebook",
        options: { redirectTo: `${document.location.origin}/auth/callback` },
      })
      .finally(() => setLoading(false));
  }

  return (
    <Button 
      className="w-full"
      icon= { <Facebook/> }
      secondary
      onClick={ signInWithFacebook }
      loading={ loading }
    >
      Continue with Facebook
    </Button>
  );
}

export default SignInWithFacebook;

'use client';

import Button from "@/components/atoms/Button";
import History from "@/components/icons/History";
import Login from "@/components/icons/Login";
import RoundButton from "./atoms/RoundButton";
import Link from "next/link";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";
import SignInModal from "./sign-in/SigninModal";

export default function Header() {

  const { user, loggedIn, login, logout } = useUserContext();
  const [ showLoginModal, setShowLoginModal ] = useState(false);



  return (
    <div className="flex my-5 w-full">
      <Link href="/my-creation">
        <RoundButton>
          <History/>
        </RoundButton>
      </Link>
  
      {
        loggedIn ? 
          <RoundButton className="bg-[#72eac6] text-white">
            {user?.user_metadata.full_name[0]}
          </RoundButton>
        :
          <Button 
            className="ml-auto" 
            secondary={true} 
            icon={<Login/>}
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </Button>
      }

      { showLoginModal && <SignInModal close={() => setShowLoginModal(false)}/> }
    </div>
  );
}

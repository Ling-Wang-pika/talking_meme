import Modal from "@/components/containers/Modal";
import Button from "@/components/atoms/Button";
import Apple from "@/components/icons/social-media/Apple";
import Google from "@/components/icons/social-media/Google";
import Facebook from "@/components/icons/social-media/Facebook";
import Divider from "../atoms/DividerLine";
import SignInWithGoogle from "./SignInWithGoogle";
import SignInWithApple from "./SignInWithApple";
import SignInWithFacebook from "./SignInWithFacebook";


function SignInModal({
  close
} : {
  close: () => void
}) {
  
  return (
    <Modal close={close}>
      <div className="w-full flex flex-col justify-center items-center">
        <section className="mt-10 mb-5 text-center">
          <h1 className="font-[500] text-3xl leading-[2.125rem]">
            Log in to AI-Memes
          </h1>
          <p className="font-normal text-[1.125rem] leading-7">
            Create, save, download and share memes without any restictions 
          </p>
        </section>

        <LoginOptions/>
    
      </div>
    </Modal>
  )
}

export default SignInModal;

function LoginOptions() {
  return (
    <div className="w-full flex flex-col gap-4">
      <SignInWithApple/>
      <SignInWithGoogle/>
      <SignInWithFacebook/>

      <Divider>
        <span className="text-black opacity-50"> OR </span>
      </Divider>
      
    </div>
  )
}
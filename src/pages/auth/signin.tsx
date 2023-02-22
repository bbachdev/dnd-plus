import { getProviders } from "next-auth/react";
import Image from "next/image";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next/types";

export default function SignIn({ providers } : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="p-2 bg-[#7289DA] text-white flex justify-center items-center">
            {/* TODO: Replace hardcoding with dynamic provider branding */}
            <Image alt="Discord icon" src="/providers/discord.svg" height={30} width={30}></Image>
            <span className="pl-3">Sign in with {provider.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async (ctx : GetServerSidePropsContext) => {
  const providers = await getProviders()
  console.log("Providers", providers)

  //TODO: Retrieve relevant visual info (brand color, icon, etc.) for providers

  return {
    props: { providers: providers ?? [] },
  }
}
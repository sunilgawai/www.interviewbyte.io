import { mainConfig } from "@/config/main";
import { MainNav } from "./main-nav";
import Socials from "./socials";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const SiteHeader = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="backdrop-blur-sm bg-white/30 container border-b z-40 fixed top-0">
      <div className="flex h-20 items-center justify-between py-6">
        {session && <MainNav items={mainConfig.agencyNav} />}
        <Socials />
      </div>
    </header>
  );
};

export default SiteHeader;

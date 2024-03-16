
interface AgencyLayoutProps {
  children: React.ReactNode;
}

export default async function AgencyLayout({ children }: AgencyLayoutProps) {
  return (
    <div className="flex min-h-screen container flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}

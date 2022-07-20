import Navigationbar from "./Navigationbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navigationbar />
      <div className="flex min-h-screen bg-slate-100">
        <div className="bg-yellow-200">{children}</div>
      </div>
    </>
  );
};

export default Layout;

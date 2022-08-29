import { Header } from "src/layouts/AppLayout/Header";

export const AppLayout = (props) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 max-w-2xl min-h-screen">
      <Header />
      {props.children}
    </div>
  );
};

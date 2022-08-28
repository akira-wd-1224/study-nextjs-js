

export const Layout = (props) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 max-w-2xl min-h-screen">
      {props.children}
    </div>
  );
};

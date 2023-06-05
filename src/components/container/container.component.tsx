interface IPROPS {
  children: React.ReactNode;
}

const Container: React.FC<IPROPS> = ({ children }) => {
  return (
    <div className="w-full px-4 mx-auto sm:px-8 lg:px-12 xl:max-w-7xl">
      {children}
    </div>
  );
};

export default Container;

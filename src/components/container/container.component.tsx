import { twMerge } from "tailwind-merge";

interface IPROPS {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IPROPS> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "w-full px-4 mx-auto sm:px-8 lg:px-12 xl:max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

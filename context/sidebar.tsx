import React, { PropsWithChildren } from 'react';

const SidebarContext = React.createContext<{
  backdrop: boolean;
  expand: boolean;
  active: string;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}>({
  backdrop: false,
  expand: true,
  active: 'home',
  setExpand: () => {},
  setActive: () => {},
});

export const SidebarProvider = ({ children }: PropsWithChildren<{}>) => {
  const [expand, setExpand] = React.useState<boolean>(true);
  const [backdrop, setBackdrop] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<string>('home');

  React.useEffect(() => {
    if (window.innerWidth < 1250) {
      setExpand(false);
    } else {
      setExpand(true);
    }

    if (window.innerWidth < 768) {
      setBackdrop(true);
    } else {
      setBackdrop(false);
    }

    window.onresize = () => {
      if (window.innerWidth < 1250) {
        setExpand(false);
        if (window.innerWidth < 768) {
          setBackdrop(true);
        } else {
          setBackdrop(false);
        }
      } else {
        setExpand(true);
      }
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        backdrop,
        expand,
        active,
        setExpand,
        setActive,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => React.useContext(SidebarContext);

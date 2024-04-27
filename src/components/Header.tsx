import { type ReactNode, type FC, type PropsWithChildren } from "react";

type img = {
  src: string;
  alt: string;
};

type HeaderProps = PropsWithChildren<{ image: img }>;

const Header: FC<HeaderProps> = ({
  image,
  children,
}: HeaderProps): ReactNode => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export default Header;

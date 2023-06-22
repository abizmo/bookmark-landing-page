import { PropsWithChildren } from 'react';

export function HeaderLogo({ children }: PropsWithChildren) {
  return <a href='/'>{children}</a>;
}

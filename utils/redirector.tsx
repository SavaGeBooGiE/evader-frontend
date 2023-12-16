import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

export default function Redirect({ to }: PropsWithChildren<{ to: string }>) {
  const router = useRouter();

  React.useEffect(() => {
    router.replace(to);
  }, []);

  return null;
}

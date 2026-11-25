'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteScroll() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    if (previousPathname.current !== pathname) {
      window.scrollTo(0, 0);
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}

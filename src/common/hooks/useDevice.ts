import { useState, useEffect } from 'react';

interface IUseDevice {
  isDesktop: boolean;
}

const mobileRegex =
  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

export const useDevice = (): IUseDevice => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const checkDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    const isMobileDevice = mobileRegex.test(userAgent);
    setIsDesktop(!isMobileDevice);
  };

  useEffect(() => {
    checkDevice();

    const handleResize = (): void => {
      checkDevice();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isDesktop,
  };
};

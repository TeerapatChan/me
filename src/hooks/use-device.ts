import useMediaQuery from './use-media-query';

export default function useDevice() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return {
    isDesktop,
    isMobile: !isDesktop,
  };
}

import useMedia from "use-media";

const breakpointMap = {
  sm: { minWidth: 640 },
  md: { minWidth: 768 },
  lg: { minWidth: 1024 },
  xl: { minWidth: 1280 },
};

export function useBreakpoint(breakpoint: "sm" | "md" | "lg" | "xl") {
  return useMedia(breakpointMap[breakpoint]);
}

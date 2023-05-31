export const extractDimensionsFromUrl = (
  url: string,
): { width: number; height: number } | null => {
  const matches = url.match(/\/(\d+)x(\d+)\//);
  if (matches && matches.length === 3) {
    const width = parseInt(matches[1], 10);
    const height = parseInt(matches[2], 10);
    return { width, height };
  }
  return null;
};

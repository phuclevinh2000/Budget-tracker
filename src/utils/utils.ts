export const blockInvalidChar = (e: {
  key: string;
  preventDefault: () => any;
}) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const findThreeLargestNumbers = (array: any) => {
  return [...array].sort((a, b) => b - a).slice(0, 3);
};

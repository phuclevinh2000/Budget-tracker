export const blockInvalidChar = (e: {
  key: string;
  preventDefault: () => any;
}) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

/**
 *
 * @param e event value from input
 * @returns
 */
export const blockInvalidChar = (e: {
  key: string;
  preventDefault: () => any;
}) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

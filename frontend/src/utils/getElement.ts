export type InfoCol = { id: string; value: string };

export const getElement = (element: string[]): InfoCol[] => {

  if (element.length > 0) {
    return element.map((e) => ({
      id: crypto.randomUUID(),
      value: e,
    }));
  }
  
  return [{
    id: crypto.randomUUID(),
    value: '',
  }];
};
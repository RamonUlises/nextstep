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

export function addNewArray(option: InfoCol[]): string[]{
  const newArray: string[] = [];
  for(const op of option) {
    if(op.value !== '') newArray.push(op.value);
  }

  return newArray;
}
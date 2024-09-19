export type Redes = {
  id: string;
  red: string | undefined;
  url: string | undefined;
};

export const addNewRed = (
  red: Redes[],
  setRed: React.Dispatch<React.SetStateAction<Redes[]>>
) => {
  if (red.length > 4) return;

  for (const r of red) {
    if (r.red === undefined || r.url === undefined || r.url === '') return;
  }

  setRed([...red, { id: crypto.randomUUID(), red: undefined, url: undefined }]);
};

export const handleChange = ({
  prop,
  value,
  red,
  setRedesSociales,
}: {
  prop: string | undefined;
  value: string;
  red: Redes[];
  setRedesSociales: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  for (const r of red) {
    if (prop !== undefined) {
      if (r.red !== prop && r.red === undefined) {
        r.red = prop;
      }
      if (r.red === prop) {
        r.url = value;
      }
    }
  }
  const redesSoc: string[] = [];

  for (const r of red) {
    if (
      r.red !== undefined &&
      r.red !== '' &&
      r.url !== undefined &&
      r.url !== ''
    ) {
      redesSoc.push(`${r.red}:${r.url}`);
    }
  }
  setRedesSociales(redesSoc);
};

export const handleDeleteInput = (
  prop: string | undefined,
  red: Redes[],
  redes: string[],
  setRed: React.Dispatch<React.SetStateAction<Redes[]>>,
  setRedes: React.Dispatch<React.SetStateAction<string[]>>,
  redesSociales: string[],
  setRedesSociales: React.Dispatch<React.SetStateAction<string[]>>
) => {
  setRed(red.filter((r) => r.red !== prop));

  const newRedes = redes.filter((r) => r !== prop);
  setRedes(newRedes);

  if (prop === undefined) return;

  const redesSoc: string[] = [];
  for (const reds of redesSociales) {
    if (reds.split(':')[0] !== prop) {
      redesSoc.push(reds);
    }
  }
  setRedesSociales(redesSoc);
};

export const changeProp = ({
  prop,
  newProp,
  value,
  red,
  setRedes,
  setRedesSociales,
}: {
  prop: string | undefined;
  newProp: string | undefined;
  value: string | undefined;
  red: Redes[];
  setRedes: React.Dispatch<React.SetStateAction<string[]>>;
  setRedesSociales: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  for (const r of red) {
    if (r.red === prop) {
      r.red = newProp;
    }
    if (r.url === undefined) {
      r.url = value;
    }
  }
  const redesS = red.filter((r) => r.red !== undefined).map((r) => r.red!);
  setRedes(redesS);

  const redesSoc: string[] = [];

  for (const r of red) {
    if (
      r.red !== undefined &&
      r.red !== '' &&
      r.url !== undefined &&
      r.url !== ''
    ) {
      redesSoc.push(`${r.red}:${r.url}`);
    }
  }
  setRedesSociales(redesSoc);
};
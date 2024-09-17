import { Facebook, Instagram } from 'lucide-react';

export const RedesSociales = ({ redes }: { redes: string[] }) => {
  return (
    <div className="flex justify-center">
      {redes.map((red, i) => {
        const indice = red.indexOf(':');
        const parte1 = red.slice(0, indice);
        const parte2 = red.slice(indice + 1);
        return (
          <div key={i} className="flex items-center gap-4">
            {parte1 === 'facebook' ? (
              <Facebook />
            ) : parte1 === 'instagram' ? (
              <Instagram />
            ) : parte1 === 'whatsapp' ? (
              <Whatsapp />
            ) : parte1 === 'x' ? (
              <XIcon />
            ) : (
              parte1 === 'tiktok' && <TikTok />
            )}
            <p>{parte2}</p>
          </div>
        );
      })}
    </div>
  );
};

function Whatsapp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="29"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function TikTok() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
    </svg>
  );
}

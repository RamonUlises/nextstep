import { Link } from 'react-router-dom';

export const ButtonsMovilIndex = ({
  text,
  url,
}: {
  text: string;
  url: string;
}) => {
  return (
    <>
      <Link to={url} className='bg-white text-principal-600 rounded-xl border-2 border-principal-600 p-2 w-[150px] text-center dark:bg-transparent dark:border-white dark:text-white'>{text}</Link>
    </>
  );
};

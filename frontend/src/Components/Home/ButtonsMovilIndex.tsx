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
      <Link to={url} className='bg-white text-[#E75F0B] rounded-xl border-2 border-[#E75F0B] p-2 w-[150px] text-center dark:bg-transparent dark:border-white dark:text-white'>{text}</Link>
    </>
  );
};

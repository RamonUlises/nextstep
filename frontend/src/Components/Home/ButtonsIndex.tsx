import { Link } from 'react-router-dom';
export const ButtonsIndex = ({ text, url }: { text: string; url: string }) => {
  return (
    <>
      <Link to={url} className="css-button dark:bg-zinc-700 text-center bg-[#FA7C15] text-white flex p-[0.35em] pl-[1.2em] text-lg rounded-[0.9em] items-center overflow-hidden relative h-[2.8em] pr-[3.3em] cursor-pointer w-[190px] z-30">
        <span className="w-full text-center">{text}</span>
        <div className="icon bg-white ml-[1em] absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] right-[0.3em] transition-all duration-700">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className='w-[1.1em] transition-transform text-black'
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Link>
    </>
  );
};

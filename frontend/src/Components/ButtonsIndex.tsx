import { Link } from "react-router-dom";
export const ButtonsIndex = ({ text, url } :{text:string, url:string}) => {

  return (
    <>
      <Link to={url} className="">{text}</Link>
    </>
  );
};

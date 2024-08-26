export const InputLogin = ({ text }: { text: string }) => {
  return (
    <>
      <input className="w-[250px] border-2 border-[#E75F0B] text-[#E75F0B] h-[50px] rounded-md text-sm py-0 px-4 bg-transparent outline-none" type="text" />
      <label className="text-[#E75F0B] absolute top-[50%] left-[15px] translate-y-[-50%] text-sm pointer-events-none transition-all duration-300">{text}</label>
    </>
  );
};
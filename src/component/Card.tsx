

const card = () => {

  return (
    <div className=" bg-yellow-300 justify-center items-center flex w-[750px] shadow-2xl h-[500px] ">
      <div className=" card bg-white w-[230px] shrink-0  solid black 0px 0px 10000px]  h-[305px] p-3 border-[1px] border-black  rounded-[16px] font-bold  ">
        <img
          src="/public/illustration-article.svg"
          alt=""
          className=" rounded-[10px]  "
        />
        <p className="bg-yellow-300 w-[60px] h-5.5 text-[12px] items-center mt-3 text-black ">
          Learning
        </p>
        <p className=" text-black text-[10px] text-left pt-2 ">
          Published 21 Dec 2023
        </p>
        <p className=" text-black text-[15px] pt-2 text-left">
          HTML & CSS foundations
        </p>
        <p className=" text-gray-400 text-left pt-2 text-[8px]">
          These languages are the backbones of every website defining structure,
          content, and presentattion.
        </p>
        <div className=" flex pt-3 gap-1.5">
          <img src="/public/image-avatar.webp" alt="" className="size-6 " />
          <p  className="  text-black text-[9px] p-1 ">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default card
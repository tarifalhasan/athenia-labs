"use client";

import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" grid   h-[26.5rem] place-items-center bg-[#02222B]">
      <div>
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <h3 className=" py-2 text-t-20 font-medium font-red-hat-displat">
          Analyseing
        </h3>
      </div>
    </div>
  );
};

export default Loading;

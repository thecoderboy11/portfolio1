
import Python from "./logo/Python";
import JS from "./logo/JS";
import HTML from "./logo/HTML";
import MongoDB from "./logo/MongoDB";
import Flutter from "./logo/Flutter";
import AWS from "./logo/AWS";
import R from "./logo/R";

const SecondPage = () => {
  return (
    <div  className=" py-20 bg-[#6c6a6a]">
      <div>
        <h1 className="md:text-5xl text-3xl text-yellow-500 font-bold ml-4 md:ml-[10%]">
          My Skills
        </h1>
        <div className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-[#bab6b6]"></div>
      </div>
      
      {/* skills cards */}
      <div className="ml-4 md:ml-[5%] md:mr[5%] md:mx-0 mx-auto mt-10 md:mt-28  gap-16 flex flex-wrap justify-center items-center">
        <div className="hover:border hover:border-yellow-600 innermorphic hover:bg-[#9f851e] relative bg-[#706d6d] w-[300px] h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div className="absolute top-4">
            <Python />
          </div>
          <div className="absolute bottom-16 w-[250px] text-white flex justify-center items-start text-3xl font-semibold">
            Python
          </div>
        </div>

        <div className="hover:border hover:border-yellow-600 innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[300px] h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div className="absolute top-14">
            <Flutter />
          </div>
          <div className="absolute bottom-16 w-[250px] text-white flex justify-center items-start text-3xl font-semibold">
            Flutter
          </div>
        </div>

        <div className=" hover:border hover:border-yellow-600 innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[300px] h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div className="absolute top-8">
            <JS />
          </div>
          <div className="absolute bottom-16 w-[250px] text-white flex justify-center items-start text-3xl font-semibold">
            JavaScript
          </div>
        </div>

        <div className="hover:border hover:border-yellow-600 innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[300px] h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div className="absolute top-14">
            <AWS />
          </div>
          <div className="absolute bottom-16 w-[250px] text-white flex justify-center items-start text-3xl font-semibold">
            AWS
          </div>
        </div>

        <div className="hover:border hover:border-yellow-600 innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[300px] h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div className="absolute top-10">
            <HTML />
          </div>
          <div className="absolute bottom-16 w-[250px] text-white flex justify-center items-start text-3xl font-semibold">
            HTML
          </div>
        </div>

        <div className="hover:border hover:border-yellow-600 innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[300px] h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div className="absolute top-10">
            <MongoDB />
          </div>
          <div className="absolute bottom-16 w-[250px] text-white flex justify-center items-start text-3xl font-semibold">
            MongoDB
          </div>
        </div>

        <div className="hover:border hover:border-yellow-600 innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[300px] h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div className="absolute top-10">
            <R />
          </div>
          <div className="absolute bottom-16 w-[250px] text-white flex justify-center items-start text-3xl font-semibold">
            React
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;

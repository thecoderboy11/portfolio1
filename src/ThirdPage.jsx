import p1 from "./projectpic/pr1.png";
import p2 from "./projectpic/drone.jpg"
import p3 from "./projectpic/ironman.jpg"
import p4 from "./projectpic/globe-3984876_1920.jpg"
import p5 from "./projectpic/mars-67522.jpg"
import p6 from "./projectpic/aircraft-63032.jpg";

import { FaExternalLinkAlt } from "react-icons/fa";

const ThirdPage = () => {
  return (
    <div className="py-20 bg-[#6c6a6a]">
      <div className="">
        <div>
          <h1 className="md:text-5xl text-yellow-500  text-3xl font-bold ml-4 md:ml-[10%]">
            Portfolio
          </h1>
        </div>

        <div className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-[#bab6b6]"></div>
      </div>

      {/* portfolio cards */}

      <div className="ml-4 md:ml[10%] mt-10 md:mt-28 mx-10 gap-16 flex flex-wrap justify-center items-center">
        
        <div className=" hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center  group">
          
          <div className="rounded-lg w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
            <img
              className="w-full h-full object-cover  group-hover:opacity-30"
              src={p1}
              alt=""
            />
          </div>

          <div className=" opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
            <div className="text-2xl font-mono font-bold">Car-X</div>
            <div className="mt-3 font-mono font-semibold text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores incidunt repellat natus deserunt beatae ipsum est
              pariatur nam voluptatem dignissimos explicabo mollitia repellendus
              a odio, eligendi minima? Vitae, reiciendis nulla.
            </div>
            <div className="bg-black text-white mt-4 text-2xl  h-12  w-[100px] flex justify-center items-center rounded-lg"><a target="__blank" href="https://www.instagram.com/the_coder_boy__"><FaExternalLinkAlt/></a></div>
          </div>

        </div>

        <div className=" hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center  group">
          
          <div className="w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
            <img
              className="w-full h-full object-cover  group-hover:opacity-30"
              src={p2}
              alt=""
            />
          </div>

          <div className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
            <div className="text-2xl font-mono font-bold">Drone-X</div>
            <div className="mt-3 font-mono font-semibold text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores incidunt repellat natus deserunt beatae ipsum est
              pariatur nam voluptatem dignissimos explicabo mollitia repellendus
              a odio, eligendi minima? Vitae, reiciendis nulla.
            </div>
            <div className="bg-black text-white mt-4 text-2xl  h-12  w-[100px] flex justify-center items-center rounded-lg"><a target="__blank" href="https://www.instagram.com/the_coder_boy__"><FaExternalLinkAlt/></a></div>
          </div>

        </div>

        <div className="hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center  group">
          
          <div className="w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
            <img
              className="w-full h-full object-cover  group-hover:opacity-30"
              src={p3}
              alt=""
            />
          </div>

          <div className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
            <div className="text-2xl font-mono font-bold">Iron M</div>
            <div className="mt-3 font-mono font-semibold text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores incidunt repellat natus deserunt beatae ipsum est
              pariatur nam voluptatem dignissimos explicabo mollitia repellendus
              a odio, eligendi minima? Vitae, reiciendis nulla.
            </div>
            <div className="bg-black text-white mt-4 text-2xl  h-12  w-[100px] flex justify-center items-center rounded-lg"><a target="__blank" href="https://www.instagram.com/the_coder_boy__"><FaExternalLinkAlt/></a></div>
          </div>

        </div>


        <div className="hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center  group">
          
          <div className="w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
            <img
              className="w-full h-full object-cover  group-hover:opacity-30"
              src={p4}
              alt=""
            />
          </div>

          <div className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
            <div className="text-2xl font-mono font-bold">Jet-X</div>
            <div className="mt-3 font-mono font-semibold text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores incidunt repellat natus deserunt beatae ipsum est
              pariatur nam voluptatem dignissimos explicabo mollitia repellendus
              a odio, eligendi minima? Vitae, reiciendis nulla.
            </div>
            <div className="bg-black text-white mt-4 text-2xl  h-12  w-[100px] flex justify-center items-center rounded-lg"><a target="__blank" href="https://www.instagram.com/the_coder_boy__"><FaExternalLinkAlt/></a></div>
          </div>

        </div>

        <div className="hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center  group">
          
          <div className="w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
            <img
              className="w-full h-full object-cover  group-hover:opacity-30"
              src={p5}
              alt=""
            />
          </div>

          <div className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
            <div className="text-2xl font-mono font-bold">Mars-X</div>
            <div className="mt-3 font-mono font-semibold text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores incidunt repellat natus deserunt beatae ipsum est
              pariatur nam voluptatem dignissimos explicabo mollitia repellendus
              a odio, eligendi minima? Vitae, reiciendis nulla.
            </div>
            <div className="bg-black text-white mt-4 text-2xl  h-12  w-[100px] flex justify-center items-center rounded-lg"><a target="__blank" href="https://www.instagram.com/the_coder_boy__"><FaExternalLinkAlt/></a></div>
          </div>

        </div>


        <div className="hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center  group">
          
          <div className="w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
            <img
              className="w-full h-full object-cover  group-hover:opacity-30"
              src={p6}
              alt=""
            />
          </div>

          <div className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
            <div className="text-2xl font-mono font-bold">Plane-X</div>
            <div className="mt-3 font-mono font-semibold text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores incidunt repellat natus deserunt beatae ipsum est
              pariatur nam voluptatem dignissimos explicabo mollitia repellendus
              a odio, eligendi minima? Vitae, reiciendis nulla.
            </div>
            <div className="bg-black text-white mt-4 text-2xl  h-12  w-[100px] flex justify-center items-center rounded-lg"><a target="__blank" href="https://www.instagram.com/the_coder_boy__"><FaExternalLinkAlt/></a></div>
          </div>

        </div>


        

      </div>
    </div>
  );
};

export default ThirdPage;

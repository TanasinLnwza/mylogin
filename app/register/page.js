import Image from "next/image";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
             
      <div className=" flex flex-col gap-2">
      <div className=" text-8xl text-center"><i class=" fa-solid fa-users"></i></div>
        {" "}
        <div className=" border-none bg-white rounded-full">
          {" "}<i className="fa-solid fa-user ml-2 pr-1"></i>
        |
          <input className=" rounded-full focus:outline-none  px-2.5" type="text" id="Username" placeholder="Username"></input>
        </div>
        <div className=" border-none bg-white rounded-full">
        <i className="fa-solid fa-lock ml-2"></i>
          {" "}
        |
          <input className=" rounded-full bg-transparent focus:outline-none px-2.5 " type="password" id="Password" placeholder="Password"></input>
        </div>
        <div className=" border-none bg-white rounded-full">
        <i className="fa-solid fa-lock ml-2"></i>
          {" "}
        |
          <input className=" rounded-full bg-transparent focus:outline-none px-2.5 " type="password" id="Password" placeholder="Confirm Password"></input>
        </div>
        <div >
          <button className="border-none bg-white/20 rounded-full p-1.5 w-[100%] text-white" type="button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

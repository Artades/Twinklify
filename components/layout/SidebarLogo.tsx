import { useRouter } from "next/router";
import Image from 'next/image';


const SidebarLogo = () => {
  const router = useRouter();
  
  return (
		<div
			onClick={() => router.push("/")}
			className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    "
		>
			<Image
				src={"/images/icon.png"}
				alt={"Logo"}
			width={50}
      height={50}
				
			/>
		</div>
	);
};

export default SidebarLogo;

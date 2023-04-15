import useLoginModal from "@/hooks/useLoginModal";
import { useCallback } from "react";
import { BsPatchPlus } from "react-icons/bs";

const SidebarPostButton = () => {
	const loginModal = useLoginModal();
	const onClick = useCallback(() => {
	alert('Create a post or log in')
	}, [loginModal]);

	return (
		<div onClick={onClick}>
			<div
				className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center 
        bg-violet-500 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      "
			>
				<BsPatchPlus size={24} color="white" />
			</div>
			<div
				className="
        mt-6
        hidden 
        lg:block 
        px-4
        py-2
        rounded-full
        bg-violet-500
        hover:bg-opacity-90 
        cursor-pointer
      "
			>
				<p
					className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        "
				>
					Post
				</p>
			</div>
		</div>
	);
};

export default SidebarPostButton;

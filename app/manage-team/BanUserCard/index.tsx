"use client";
import { BsDoorOpenFill } from "react-icons/bs";
import SJAvatar from "@/components/commonComponents/SJAvatar";
import SJButton from "@/components/commonComponents/SJButton/SJButton";
import { SJButtonColorScheme } from "@/components/commonComponents/SJButton/helpers";
import { MockUser } from "../mockData";
import SJConfirmationModal from "@/components/commonComponents/SJConfimationWindow";
import { useState } from "react";

export interface BanUserCardProps {
	user: MockUser;
	onRemoveTeamMember: (userName: string) => void;
}

const BanUserCard: React.FC<BanUserCardProps> = ({
	user,
	onRemoveTeamMember,
}) => {

	// This state controls whether the confirmation modal shows up or not

	const [confirmationModal, setConfirmationModal] = useState(false)

	// This is done so that we dont pass the state function directly into our child component

	function updateModal() {
		setConfirmationModal(prevConModal => !prevConModal)
	}

	return (
		<div className="w-[100%] bg-white rounded-full flex justify-between items-center gap-8 p-2 pr-3">
			<div className="flex gap-2 items-center justify-between">
				<SJAvatar src={user.image} />
				<div className="text-lg font-medium text-neutral-700 h-[100%]">
					{user.name}
				</div>
			</div>

			<SJButton
				iconRight={BsDoorOpenFill}
				colorScheme={SJButtonColorScheme.RED}
				onClick={() => updateModal()}
			>
				Fire
			</SJButton>

			{confirmationModal &&
				<SJConfirmationModal
					onConfirm={() => onRemoveTeamMember(user.name)}
					onCancel={() => updateModal()}
				>
					Are you sure you want to fire {user.name} from Open A.I.?
				</SJConfirmationModal>
			}
		</div>
	);
};

export default BanUserCard;

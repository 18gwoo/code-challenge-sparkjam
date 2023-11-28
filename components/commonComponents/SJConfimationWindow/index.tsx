import SJButton from "@/components/commonComponents/SJButton/SJButton"
import { SJButtonColorScheme } from "../SJButton/helpers"
import { modalContainerClass, innerContainerClass, buttonClass, childrenClass } from "./styleClasses";

export interface SJConfirmationModalProps {
    children: string[] | string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmButtonText?: string;
    cancelButtonText?: string;
}

/*
onConfirm is a function that is ran if the action is confirmed
onCancel is meant to take in a setState function in order to close the modal
confirmButtonText is an optional prop that edits the text for the confirmation button
cancelButtonText is an optional prop that edits the text for the cancel button
*/
const SJConfirmationModal: React.FC<SJConfirmationModalProps> = ({
    children,
    onConfirm,
    onCancel,
    confirmButtonText,
    cancelButtonText,
}) => {



    return (
        <div className={modalContainerClass}>
            <div className={innerContainerClass}>
                <div className={childrenClass}>
                {children}
                </div>
                <div className={buttonClass}>
                    <SJButton
                        colorScheme={SJButtonColorScheme.DISCOURAGED}
                        onClick={() => onCancel()}
                    >
                        {cancelButtonText ? cancelButtonText : <>cancel</>}
                    </SJButton>
                    <SJButton
                        colorScheme={SJButtonColorScheme.GREEN}
                        onClick={() => {
                            onCancel()
                            onConfirm()
                        }
                        }
                    >
                        {confirmButtonText ? confirmButtonText : <>confirm</>}
                    </SJButton>
                </div>
            </div>
        </div>
    )
};

export default SJConfirmationModal
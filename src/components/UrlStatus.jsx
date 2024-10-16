import { FaLink, FaLinkSlash } from "react-icons/fa6"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const UrlStatus = (props) => {
    const { urlStatus } = props;

    if (urlStatus === "active") {
        return (
            <>
                <span className="text-active-link">Active</span>
                <FaLink className="bg-grey-lite w-[30px] h-[30px] p-2 rounded-full absolute right-0" />
            </>
        )
    } else if (urlStatus === "inactive") {
        return (
            <>
                <span className="text-inactive-link">Inactive</span>
                <FaLinkSlash className="bg-grey-lite w-[30px] h-[30px] p-2 rounded-full text-inactive-link absolute right-0" />
            </>
        )
    } else {
        return (
            <>
                <span className="text-expired-link">Expired</span>
                <FaLinkSlash className="bg-grey-lite w-[30px] h-[30px] p-2 rounded-full text-expired-link absolute right-0" />
            </>
        )
    }
}

export default UrlStatus
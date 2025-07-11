import { MdDownload } from "react-icons/md";
import data from "../../../data.json";

export function ResumeButton() {
    return (
        <a
            href={data.downloadLink}
            // download={"shantanu_pradhan.pdf"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-[#8CEDFF] via-[#1ED5FA] to-[#06C1FF] text-[#ffff] font-semibold text-base rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out no-underline"
        >
            <MdDownload className="text-white" size={20} />
            <span className="text-white">Resume</span>
        </a>
    );
}

export default ResumeButton;

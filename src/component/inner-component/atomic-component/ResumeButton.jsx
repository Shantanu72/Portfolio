import { MdDownload } from "react-icons/md";
import data from "../../../data.json";

export function ResumeButton() {
    return (
        <a
            href={data.downloadLink}
            download={"Resume.pdf"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 font-semibold text-base rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out no-underline"
        >
            <MdDownload size={20} />
            <span>Resume</span>
        </a>
    );
}

export default ResumeButton;

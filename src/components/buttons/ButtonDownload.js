import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

const resumeLink =
    "https://docs.google.com/document/d/1DraKN7kotjx_tvrHYaeG3JxvjmbuaZTDYp_tBS-5ZDE/edit?usp=sharing";

function ButtonDownload(props) {
    return (
        <button
            className={`${spaceMono.className} text-neon-blue border-2 border-neon-blue hover:text-bg-dark hover:font-semibold
            rounded-md p-3 text-lg xl:text-xl hover:bg-neon-blue ease-out `}
        >
            <a href={props.link || resumeLink} target="_blank">
                {props.text || "Resume"}
            </a>
        </button>
    );
}

export default ButtonDownload;

import { useState } from "react";
import { images } from "../data/data";
import { thumbnails } from "../data/data";

export default function Slider() {
    
    const [wordData, setWordData] = useState(images[0]);

    console.log(wordData);

    const handleClick = (index) => {
        console.log(index);
        const wordSlider = images[index];
        setWordData(wordSlider);
    }

    return (
        <div 
            className="main"
            style={{ width: "300px" }}
        >
            <img 
                src={wordData.value}
                height="300"
                width="300"
            />
            <div 
                className="flex_row"
                style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
            >
                {thumbnails.map((data, i) => (
                    <div className="thumbnail" key={i}>
                        <img 
                            className={wordData.id === i ? "clicked" : ""}
                            src={data.value}
                            onClick={() => handleClick(i)}
                            style={{ height: "50px", width: "50px", cursor: "pointer" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

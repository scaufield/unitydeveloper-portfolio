import React from "react";
import {useKeenSlider} from "keen-slider/react";
import "./SkillsSlider.scss";
import "keen-slider/keen-slider.min.css";
import SkillCard from "./SkillCard/SkillCard";
import {skillsSlider} from "../../../database"

export default (props) => {
    const [pause, setPause] = React.useState(false);
    const timer = React.useRef();
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        dragStart: () => {
            setPause(true);
        },
        dragEnd: () => {
            setPause(false);
        },
    });

    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true);
        });
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false);
        });
    }, [sliderRef]);

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next();
            }
        }, 4000);
        return () => {
            clearInterval(timer.current);
        };
    }, [pause, slider]);

    function Repeat(props) {
        let items = [];
        for (let i = 0; i < props.numTimes; i++) {
            items.push(props.children(i));
        }
        return <div>{items}</div>;
    }


    return (
        <>
            <div ref={sliderRef} className="keen-slider mt-5">


                {skillsSlider.map((n, i) => (
                    <>
                        <div className="keen-slider__slide">
                            {n.map((n, i) => (
                                <SkillCard key={i} item={n}/>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};



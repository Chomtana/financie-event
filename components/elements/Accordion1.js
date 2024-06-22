'use client'
import { useState } from 'react'
export default function Accordion1() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="flat-accordion">
                <div className="flat-toggle">
                    <h5 className={isActive === 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(1)}>When the musics over turn off the light?</h5>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex when the musics over turn off the light says jim morrison and doors. So close no matter how far whatis the best thing to do in this dhaka. ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className="flat-toggle">
                    <h5 className={isActive === 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(2)}>What is the best way to collect NFT?</h5>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className="flat-toggle">
                    <h5 className={isActive === 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(3)}>Why NFT Trading is so popular?</h5>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className="flat-toggle">
                    <h5 className={isActive === 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(4)}>How do you trade on Montono easily?</h5>
                    <div className="toggle-content" style={{ display: `${isActive === 4 ? "block" : "none"}` }}>
                        <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
            </div>
        </>
    )
}

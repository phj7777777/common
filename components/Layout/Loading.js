import React from 'react'

export default function Loading() {
    return (
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="object" id="object_one"></div>
                    <div className="object" id="object_two" style={{"left":"20px"}}></div>
                    <div className="object" id="object_three" style={{"left":"40px;"}}></div>
                    <div className="object" id="object_four" style={{"left":"60px;"}}></div>
                    <div className="object" id="object_five" style={{"left":"80px;"}}></div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function Loader({type}) {
    return (
        <>
            {type === 'dots' ? (
                <div className="loading-dot-pulse">
                    <div className="dot-pulse"></div>
                </div>
            ) : (
                <div className="loader"></div>
            )}
        </>
    )
}

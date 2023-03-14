import React, { ReactNode } from 'react';

type ITileProps = {
    tileNumber: number,
    bgColor: string
}

export const Tile = ({ tileNumber, bgColor }: ITileProps) => {
    return (
        <div 
            className={`w-[80px] h-[80px] flex justify-center items-center`}
            style={{backgroundColor: bgColor}}
        >
            {tileNumber}
        </div>        
    )
} 
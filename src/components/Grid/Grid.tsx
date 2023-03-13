import { useState, useRef, useEffect } from 'react';
import { Tile } from '../Tile';
import { nanoid } from 'nanoid'
import { colors } from '../../../utils/constants';

type GridProps = {
    size: number
}

export const Grid = ({ size }: GridProps) => {

    const arrayRef = useRef<HTMLDivElement>(null);
    const array: number[][] = []
    for (let row = 0; row < size; row++) {
        const columns: number[] = []
        let cellIndex: number = row * size;
        for (let col = cellIndex; col < (cellIndex+size); col++) {
            columns.push(col+1)
        }
        array.push(columns)
    }

    const getColors = (): [string,string][] => {
       return colors.slice(0, (size * size) / size);
    }


    useEffect(() => {
        if (arrayRef.current) {
          const cellSize = 80; // adjust this to the size of your cells
          const arrayWidth = cellSize * (array.length+1);
          const arrayHeight = cellSize * (array.length+1);
    
          arrayRef.current.style.width = `${arrayWidth}px`;
          arrayRef.current.style.height = `${arrayHeight}px`;
        }
      }, []);

    return (
        <div className="flex flex-wrap gap-2" ref={arrayRef}>
        {
          array.map((item: number[]) => {
            return item.map((num: number) => {
              const id: string = nanoid()
              const tileColors = getColors();
              return (
                <Tile tileNumber={num} key={id} bgColor={tileColors[Math.floor(Math.random() * tileColors.length)][1]}/>
              )
            })
          })
        }
      </div>
    )
}
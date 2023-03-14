import { useState, useRef, useEffect } from 'react';
import { Tile } from '../Tile';
import { nanoid } from 'nanoid'
import { colors } from '../../../utils/constants';

type GridProps = {
    size: number
}

type TRACKCOLORS = {
    [prop: string]: number
}

export const Grid = ({ size }: GridProps) => {
    const [colorsArr, setColorsArr] = useState(colors.slice(0, (size * size) / size));
    const trackColors = () => {
        const colorsObj: TRACKCOLORS = {};
        colorsArr.forEach((color) => {
            return colorsObj[color[0]] = size
        })
        return colorsObj;
    }

    const trackedColors: TRACKCOLORS = trackColors()
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

    const omitColor = (colorToOmit: string): void  => {
        //console.log(colorToOmit, " this is the color to omit")
        const colorsAfterOmitting = colorsArr.filter((color) => {
            return color[0] !== colorToOmit
        });
        setColorsArr(colorsAfterOmitting)
    }

    const getRandomColor = (): [string, string] => {
        let color: [string, string];
        color = colorsArr[Math.floor(Math.random() * colorsArr.length)]; // randomly get color
        if (trackedColors[color[0]] > 0) { // check if this color has not been applied {size} times
            trackedColors[color[0]]--; // increase the applied size of this color by decreasing the value by 1
            return color;
        } else if (trackedColors[color[0]] === 0) { // if applied {size} times, get a new color and decrease that color's value by 1
            let unAppliedColor: string;
            for (let key in trackedColors) {
                if (trackedColors[key] !== 0) {
                    // make this color value to -- 
                    unAppliedColor = key;
                    trackedColors[key]--;
                    break;
                }
            }
            color = colorsArr.filter((color) => color[0] === unAppliedColor)[0];
            return color;
        }
        return ['black', '#000']; // default color in case of errors
    }


    useEffect(() => {
        if (arrayRef.current) {
          const cellSize: number = 80;
          const arrayWidth: number = cellSize * (array.length+1);
          const arrayHeight: number = cellSize * (array.length+1);
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
              const color: [string, string] = getRandomColor();
              return (
                <Tile tileNumber={num} key={id} bgColor={color[1]}/>
              )
            })
          })
        }
      </div>
    )
}
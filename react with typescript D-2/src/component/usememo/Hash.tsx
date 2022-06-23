import React, { useEffect, useMemo, useState } from 'react'

const Memorization = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const slowFunction = (num) => {
        for (let i = 0; i < 1000000; i++);
        return num * 2;
    }

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log('theme changed')
    }, [themeStyles]);

    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)} >Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

export default Memorization
import React, { useState, useEffect, useCallback } from 'react';
import './Calculator.css';
import * as math from 'mathjs';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    // Handle button clicks
    const handleClick = useCallback((value) => {
        if (value === '=') {
            try {
                // Validasi input
                if (/[^0-9+\-*/.]/.test(input)) {
                    setResult('Invalid Input');
                    return;
                }
                const calculateResult = math.evaluate(input);
                setResult(calculateResult);
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult(0);
        } else {
            setInput(input + value);
        }
    }, [input]);

    // Handle keyboard input
    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;

            // If the key is a number or valid operator, handle it
            if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
                setInput((prev) => prev + key);
            }

            // If the key is Enter, calculate the result
            if (key === 'Enter') {
                handleClick('=');
            }

            // If the key is Backspace, delete the last character
            if (key === 'Backspace') {
                setInput((prev) => prev.slice(0, -1));
            }

            // If the key is 'C', clear the input and result
            if (key === 'C' || key === 'c') {
                handleClick('C');
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleClick]);

    return (
        <div className="calculator">
            <h2>React Calculator</h2>
            <div className="display">
                <input type="text" value={input} readOnly />
                <p>Result: {result}</p>
            </div>
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>
                        {btn}
                    </button>
                ))}
                <button onClick={() => handleClick('C')}>C</button>
            </div>
        </div>
    );
};

export default Calculator;

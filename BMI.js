import React, { useState } from 'react';

function BMI() {
   
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');

    
    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
            let status = '';
            if (bmiValue < 18.5) {
                status = '過瘦';
            } else if ( bmiValue < 24.9) {
                status = '適中';
            } else if (  bmiValue < 29.9) {
                status = '過重';
            } else {
                status = '肥胖';
            }
            setMessage(status);

            setHeight('');
            setWeight('');
        } else {
            setMessage('請輸入有效的體重和身高');
        }
    };

    return (
        <div>
            <h1>BMI計算器</h1>
            <div>
                <label>
                    身高 (cm):
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    體重 (kg):
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={calculateBMI}>計算</button>
            {bmi && (
                <div>
                    <h2>BMI: {bmi}</h2>
                    <p>健康狀態: {message}</p>
                </div>
            )}
        </div>
    );
}

export default BMI;

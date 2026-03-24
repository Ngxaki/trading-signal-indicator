import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SignalIndicator = ({ assetClass }) => {
    const [signalData, setSignalData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSignalData = async () => {
            try {
                // Fetch signal data based on the asset class
                const response = await fetch(`https://api.example.com/signals?assetClass=${assetClass}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSignalData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        getSignalData();
        const interval = setInterval(getSignalData, 60000); // Fetch data every minute

        return () => clearInterval(interval);
    }, [assetClass]);

    if (error) return <div>Error: {error}</div>;
    if (!signalData) return <div>Loading...</div>;

    return (
        <div className="signal-indicator">
            <h2>Signal Indicator for {assetClass}</h2>
            <div>
                {signalData.signals.map(signal => (
                    <div key={signal.id} className="signal-item">
                        <p>Signal Type: {signal.type}</p>
                        <p>Quote: {signal.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

SignalIndicator.propTypes = {
    assetClass: PropTypes.oneOf(['forex', 'crypto', 'commodities', 'indices']).isRequired,
};

export default SignalIndicator;

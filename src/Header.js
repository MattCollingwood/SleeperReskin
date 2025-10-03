import React, {useState} from 'react';
import './Header.css';

const Header = ({onTabSelect}) => {
    const [activeTab, setActiveTab] = useState('league');

    const tabs = [
        { id: 'league', label: 'League Table'},
        { id: 'myteam', label: 'My Team'},
        { id: 'gamecast', label: 'Gamecast'},
        { id: 'transactions', label: 'Transactions'},
        { id: 'waivers', label: 'Waivers'},
        { id: 'weeklywriteups', label: 'Weekly Writeups'},
        { id: 'draftrecap', label: 'Draft Recap'}
    ];

    const handleClick = (tabId) => {
        setActiveTab(tabId);
        onTabSelect(tabId);
    };

    return (
        <div className="header">
            <div className="top-tier">
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleClick(tab.id)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;
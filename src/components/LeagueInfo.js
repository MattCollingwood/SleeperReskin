import React, {useEffect, useState} from "react";
import axios from "axios";
import './LeagueInfo.css'; 


const LeagueInfo = () => {
    const [leagueData, setLeagueData] = useState(null);
    const [error, setError] = useState(null);

    const LEAGUE_ID = `1222646540657508352`;

    useEffect(() => {
        const fetchLeagueData = async () => {
            try {
                const response = await axios.get(`https://api.sleeper.app/v1/league/${LEAGUE_ID}`);
                setLeagueData(response.data);
            } catch (error) {
                console.error("Error fetching league data:", error);
                setError("Failed to fetch league data");
            }
        };

        fetchLeagueData();
    }, []);

    if (error) return <p>{error}</p>;
    if (!leagueData) return <p>Loading...</p>;

    return (
        <div className='league-info'>
            <h2 className="league-title">{leagueData.name}</h2>
            <p className="league-season">{leagueData.season} Season</p>
        </div>
    );

};

export default LeagueInfo;
import React, {useState, useEffect} from "react";
import axios from "axios";
import './DraftRecap.css';


const DraftRecap = () => {

    const [draftPicks, setDraftPicks] = useState([]);
    const [players, setPlayers] = useState({});
    const [users, setUsers] = useState({});
    const [ownerColors, setOwnerColors] = useState({});

    const LEAGUE_ID = '1222646540657508352';
    const DRAFT_ID = '1222646540670074880';

    useEffect(() => {
        const fetchDraftData = async () => {
            try {
                
                const draftPicksRes = await axios.get(`https://api.sleeper.app/v1/draft/${DRAFT_ID}/picks`);
                setDraftPicks(draftPicksRes.data);

                const playersRes = await axios.get(`https://api.sleeper.app/v1/players/nfl`);
                setPlayers(playersRes.data);

                const usersRes = await axios.get(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/users`);
                const usersMap = {};
                usersRes.data.forEach(user => {
                    if (user.roster_ids && user.roster_ids.length > 0) {
                        user.roster_ids.forEach(rid => {
                            usersMap[String(rid)] = user.display_name; 
                        });
                    } else if (user.user_id) {
                        usersMap[String(user.user_id)] = user.display_name;
                    }
                });
                setUsers(usersMap);
                const colors = [
                    "#FFB6C1",
                    "#87CEFA",
                    "#90EE90",
                    "#FFA07A",
                    "#DDA0DD",
                    "#FFD700",
                    "#40E0D0",
                    "#FF6347",
                    "#7B68EE",
                    "#3CB371",
                ];
                const ownerColorMap = {};
                Object.values(usersMap).forEach((owner, idx) => {
                    ownerColorMap[owner] = colors[idx % colors.length];
                });
                setOwnerColors(ownerColorMap);

            } catch (error) {
                console.error("Error fetching draft recap data:", error);
            }
        };

        fetchDraftData();
    }, []);



    return (
         <div className="draft-recap-container">
            <h2 className="draft-title">2025 Draft Recap</h2>
            <div className="draft-board">
                {draftPicks.map((pick) => {
                const player = players[pick.player_id] || {
                    full_name: pick.player_id,
                    position: "-",
                    team: "-",
                };
                const owner = users[String(pick.roster_id)] || "Unknown";
                const cardColor = ownerColors[owner] || "#FFFFFF";

                return (
                    <div key={pick.pick_id} className="draft-card" style={{ backgroundColor: cardColor }}>
                    <div className="pick-number">#{pick.pick_overall}</div>
                    <div className="player-info">
                        <div className="player-name">{player.full_name}</div>
                        <div className="player-details">
                        {player.position} - {player.team}
                        </div>
                    </div>
                    <div className="team-owner">{owner}</div>
                    </div>
                );
                })}
            </div>
        </div>
    );
};

export default DraftRecap;
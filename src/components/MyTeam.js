import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./MyTeam.css"


const MyTeam = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(null);
    const [players, setPlayers] = useState([]);

    const LEAGUE_ID = '1222646540657508352';

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const rostersRes = await axios.get(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/rosters`);

                const usersRes = await axios.get(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/users`);

                const usersMap = {};
                usersRes.data.forEach((user) => {
                    usersMap[user.user_id] = {
                        displayName: user.display_name,
                        avatar: user.avatar
                            ? `https://sleepercdn.com/avatars/${user.avatar}`
                            : null,
                        metadata: user.metadata || {},
                    };
                });

                const playersRes = await axios.get(`https://api.sleeper.app/v1/players/nfl`);
                setPlayers(playersRes.data);


                const formattedTeams = rostersRes.data.map((roster) => {
                    const user = usersMap[roster.owner_id] || {};
                    return {
                        teamName: user.metadata?.team_name || user.display_name || 'Unknown',
                        avatar: roster.metadata?.avatar || user.avatar || null,
                        id: roster.roster_id,
                        ownerName: user.displayName || "Unknown",
                        starters: roster.starters || [],
                        players: roster.players || [],
                    };
                });
                setTeams(formattedTeams);
                if (formattedTeams.length > 0) {
                    setSelectedTeam(formattedTeams[0].id);
                }
            } catch (err) {
                console.error("Error fetching league data:", err);
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setSelectedTeam(Number(e.target.value));
    };

    if (error) return <p>{error}</p>;
    if (teams.length === 0) return <p>Loading...</p>;

    const team = teams.find((t) => t.id === selectedTeam);

    if (!team) return <p>No team selected</p>;

    const startersList = team.starters || [];
    const playersList = team.players || [];

    const lineupOrder = ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLEX', "DEF", "K"];

    const orderedStarters = [];
    const flexPositions = ['RB', 'WR', 'TE'];

    lineupOrder.forEach((slot) => {
        if (slot === 'FLEX') {
            const flexPlayerId = team.starters.find((pid) => {
                const p = players[pid];
                return p && flexPositions.includes(p.position) && !orderedStarters.includes(pid);
            });
            if (flexPlayerId) orderedStarters.push(flexPlayerId);
        } else {
            team.starters.forEach((pid) => {
                const p = players[pid];
                if (p && p.position === slot && !orderedStarters.includes(pid)) {
                    orderedStarters.push(pid);
                }
            });
        }
    });

    team.starters.forEach((pid) => {
        if (!orderedStarters.includes(pid)) {
            orderedStarters.push(pid);
        }
    });

    const bench = team.players.filter((pid) => !orderedStarters.includes(pid));

    return (
        <div className="myteam-container">
            <h2>Team Roster</h2>
            <select
                className="p-2 border rounded mb-4"
                value={selectedTeam}
                onChange={handleChange}
            >
                {teams.map((t) => (
                    <option key={t.id} value={t.id}>
                        {t.teamName} ({t.ownerName})
                    </option>
                ))}
            </select>
            {team ? (
                <div className="my-team-card">
                    {team.avatar && (
                        <img
                            src={team.avatar}
                            alt={team.teamName}
                            className="avatar-image"
                        />
                    )}
                    <div>
                        <h2 className="font-bold">{team.teamName}</h2>

                    </div>
                    <ul>
                        {lineupOrder.map((slot, index) => {
                            const playerId = orderedStarters[index];
                            const player = players[playerId];
                            return (
                                <li key={`${slot}-${index}`} className="p-2 border rounded flex justify-between">
                                    <span className="font-bold">{slot} </span>
                                    <span>{player ? `${player.full_name} (${player.position} - ${player.team})` : "Empty"}</span>
                                </li>
                            )
                        })}
                    </ul>

                    <h4 className="text-lg font-semibold mb-2">Bench:</h4>
                    <ul>
                        {bench.map((playerId, idx) => {
                            const player = players[playerId];
                            return (
                                <li key={`bench-${playerId}-${idx}`} className="p-2 border rounded flex justify-between">
                                    <span className="font-bold">BN </span>
                                    <span>{player ? `${player.full_name} (${player.position} - ${player.team})` : "Unknown Player"}</span>
                                </li>
                            )
                        })}
                    </ul>
                    
                </div>
            ) : (
                <p>No team selected</p>
            )}
        </div>
    );
};

export default MyTeam;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./LeagueOverview.css"


const LeagueOverview = () => {
    const [leagueData, setLeagueData] = useState(null);
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(null);


    const LEAGUE_ID = '1222646540657508352';

    useEffect(()=>{
        const fetchLeagueData = async () => {
            try {
                const leagueRes = await axios.get(`https://api.sleeper.app/v1/league/${LEAGUE_ID}`);
                setLeagueData(leagueRes.data);
                
                const rostersRes = await axios.get(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/rosters`);
                const usersRes = await axios.get(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/users`);

                const usersMap = {};
                usersRes.data.forEach((user) => {
                    usersMap[user.user_id] = user;
                });

                const formattedTeams = rostersRes.data.map((roster) => {
                    const user = usersMap[roster.owner_id];

                    const teamName = 
                        roster.metadata?.team_name ||
                        user?.metadata?.team_name ||
                        user?.display_name || 
                        'Unknown';
                    
                    const avatarId = 
                        roster.metadata?.avatar ||
                        user?.avatar || 
                        null;

                    return {
                        owner: usersMap[roster.owner_id] || 'Unknown',
                        teamName,
                        avatar: avatarId ? `https://sleepercdn.com/avatars/${avatarId}` : null,
                        wins: roster.settings?.wins || 0,
                        losses: roster.settings?.losses || 0,
                        ties: roster.settings?.ties || 0,
                        fpts: roster.settings?.fpts || 0,
                        fpts_against: roster.settings?.fpts_against || 0,
                    };
                });

                formattedTeams.sort((a, b) => {
                    if (b.wins !== a.wins) return b.wins - a.wins;
                    return b.fpts - a.fpts;
                });

                setTeams(formattedTeams);

            } catch (err) {
                console.error("Error fetching league data:", err);
                setError(err.message);
            }
        };

        fetchLeagueData();
    }, []);



    if (error) return <p>{error}</p>;
    if (!leagueData) return <p>Loading...</p>;

    return (
        <div className='p-4 rounded-xl shadow-md bg-white text-black'>

            <h3 className='text-xl font-semibold mb-2'>League Standings</h3>
            <table className="league-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team</th>
                        <th>Record</th>
                        <th>Points For</th>
                        <th>Points Against</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className='avatarteam'>
                                {team.avatar && (
                                    <img
                                        src={team.avatar}
                                        alt={team.teamName}
                                        className="w-6 h-6 rounded-full"
                                    />
                                )}
                                <span>{team.teamName}</span>
                            </td>
                            <td>{team.wins}-{team.losses}-{team.ties}</td>
                            <td>{team.fpts}</td>
                            <td>{team.fpts_against}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default LeagueOverview;
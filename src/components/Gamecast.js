import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gamecast.css";

const BASE = "https://api.sleeper.app/v1";

function FantasyMatchup({ leagueId, initialWeek }) {
  const [week, setWeek] = useState(initialWeek);
  const [matchups, setMatchups] = useState([]);
  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);
  const [players, setPlayers] = useState({});
  const [selectedMatchupId, setSelectedMatchupId] = useState(null);


  useEffect(() => {
    const loadStatic = async () => {
      try {
        const [rRes, uRes, pRes] = await Promise.all([
          axios.get(`${BASE}/league/${leagueId}/rosters`),
          axios.get(`${BASE}/league/${leagueId}/users`),
          axios.get(`${BASE}/players/nfl`)
        ]);
        setRosters(rRes.data);
        setUsers(uRes.data);
        setPlayers(pRes.data);
      } catch (err) {
        console.error("Error fetching static data:", err);
      }
    };
    loadStatic();
  }, [leagueId]);


  useEffect(() => {
    const loadWeek = async () => {
      try {
        const res = await axios.get(`${BASE}/league/${leagueId}/matchups/${week}`);
        setMatchups(res.data);

        if (!selectedMatchupId && res.data.length > 0) {
          setSelectedMatchupId(res.data[0].matchup_id);
        }
      } catch (err) {
        console.error("Error fetching matchups:", err);
      }
    };
    loadWeek();
  }, [leagueId, week]);

  const getOwnerName = (rosterId) => {
    const roster = rosters.find(r => r.roster_id === rosterId);
    const user = users.find(u => u.user_id === roster?.owner_id);
    return user?.display_name || `Roster ${rosterId}`;
  };

  const renderPlayerRow = (team, pid) => {
    if (!pid) return null;
    const player = players[pid];
    const actual = team.players_points?.[pid] ?? 0;

    return (
      <li key={pid}>
        <strong>{player?.full_name || "Unknown"}</strong> 
        {" "}({player?.position || "?"}) – {actual.toFixed(1)} pts
      </li>
    );
  };


  const matchupTeams = matchups.filter(m => m.matchup_id === selectedMatchupId);

  return (
    <div style={{ padding: "1rem", background: "#101820", color: "#fff" }}>
      <h2>Week {week} Matchup</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Week:{" "}
          <input
            type="number"
            value={week}
            onChange={(e) => setWeek(Number(e.target.value))}
            style={{ width: "60px" }}
          />
        </label>

        <label style={{ marginLeft: "1rem" }}>
          Matchup:{" "}
          <select
            value={selectedMatchupId ?? ""}
            onChange={(e) => setSelectedMatchupId(Number(e.target.value))}
          >
            <option value="" disabled>Select</option>
            {[...new Set(matchups.map(m => m.matchup_id))].map(mid => (
              <option key={mid} value={mid}>
                Matchup {mid}
              </option>
            ))}
          </select>
        </label>
      </div>

      {matchupTeams.length === 2 ? (
        <div style={{ display: "flex", gap: "2rem" }}>
          {matchupTeams.map(team => (
            <div
              key={team.roster_id}
              style={{ flex: 1, background: "#1c2331", padding: "1rem", borderRadius: "8px" }}
            >
              <h3>
                {getOwnerName(team.roster_id)} – {team.points.toFixed(1)} pts
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {team.starters.map(pid => renderPlayerRow(team, pid))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No matchup selected or data not loaded yet.</p>
      )}
    </div>
  );
}

export default FantasyMatchup;

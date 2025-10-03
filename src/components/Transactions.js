import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Transactions.css";

const BASE = "https://api.sleeper.app/v1";
const POSITIONS = ["ALL", "QB", "RB", "WR", "TE", "K", "DEF"];


const getFantasyPoints = (ps) => {
  if (!ps) return 0;
  return (
    ps.pts_half_ppr ??
    ps.pts_ppr ??
    ps.pts_std ??
    0
  );
};

function PlayerInfoPage() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear - 1);
  const [players, setPlayers] = useState({});
  const [stats, setStats] = useState({});
  const [sortedPlayers, setSortedPlayers] = useState([]);
  const [selectedId, setSelectedId] = useState(""); 
  const [selectedPos, setSelectedPos] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [weeklyStats, setWeeklyStats] = useState([]);


  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const res = await axios.get(`${BASE}/players/nfl`);
        setPlayers(res.data);
      } catch (err) {
        console.error("Error fetching players:", err);
      }
    };
    loadPlayers();
  }, []);


  useEffect(() => {
    const loadStats = async () => {
      if (Object.keys(players).length === 0) return;
      try {
        const res = await axios.get(`${BASE}/stats/nfl/${year}/regular`);
        const data = res.data;
        const ranked = Object.keys(data)
          .map((pid) => {
            const player = players[pid];
            const playerStats = data[pid];
            return {
              id: pid,
              points: getFantasyPoints(playerStats),
              name: player?.full_name || "Unknown",
              position: player?.position,
              team: player?.team,
              status: player?.status,
            };
          })
          .filter((p) => {
            const meta = players[p.id];
            return (
              p.name !== "Unknown" &&
              meta?.team &&
              (meta?.status === "Active" || meta?.active_status === "ACT")
            );
          })
          .sort((a, b) => b.points - a.points);


        if (ranked.length > 0 && !selectedId) {
          setSelectedId(ranked[0].id);
        }

        setSortedPlayers(ranked);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };
    loadStats();
  }, [year, players]);


  useEffect(() => {
    const fetchWeeklyStats = async () => {
      if (!selectedId || Object.keys(players).length === 0) return;
      try {
        const weeks = Array.from({ length: 18 }, (_, i) => i + 1);
        const weeklyData = [];

        for (let week of weeks) {
          const res = await axios.get(`${BASE}/stats/nfl/${year}/${week}`);
          const ps = res.data[selectedId];

          if (ps) {
            weeklyData.push({
              week,
              points: getFantasyPoints(ps),
              passYd: ps?.pass_yd ?? 0,
              rushYd: ps?.rush_yd ?? 0,
              recYd: ps?.rec_yd ?? 0,
              tds:
                (ps?.pass_td ?? 0) +
                (ps?.rush_td ?? 0) +
                (ps?.rec_td ?? 0),
            });
          } else {

            weeklyData.push({
              week,
              points: null,
              passYd: null,
              rushYd: null,
              recYd: null,
              tds: null,
            });
          }
        }
        setWeeklyStats(weeklyData);
      } catch (err) {
        console.error("Error fetching weekly stats:", err);
      }
    };
    fetchWeeklyStats();
  }, [selectedId, year, players]);


  const filteredPlayers = sortedPlayers.filter((p) => {
    const matchesPos = selectedPos === "ALL" || p.position === selectedPos;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesPos && matchesSearch;
  });

  const selectedPlayer = selectedId ? players[selectedId] : null;
  const selectedStats = selectedId ? stats[selectedId] : null;

  return (
    <div className="player-info-page">
      <h2>Player Info</h2>


      <div className="year-select">
        <label>Season Year: </label>
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {Array.from({ length: 5 }).map((_, i) => {
            const y = currentYear - i;
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>
      </div>


      <div className="nav-bar">
        {POSITIONS.map((pos) => (
          <button
            key={pos}
            className={`nav-btn ${selectedPos === pos ? "active" : ""}`}
            onClick={() => setSelectedPos(pos)}
          >
            {pos}
          </button>
        ))}
      </div>


      <div className="search-box">
        <input
          type="text"
          placeholder="Search player by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


      {filteredPlayers.length > 0 && (
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="player-dropdown"
        >
          {filteredPlayers.map((p, index) => (
            <option key={p.id} value={p.id}>
              #{index + 1} {p.name} ({p.team}, {p.position}) –{" "}
              {p.points.toFixed(1)} pts
            </option>
          ))}
        </select>
      )}


      {selectedPlayer && (
        <div className="player-details">
          <h3>{selectedPlayer.full_name}</h3>
          <p>
            <strong>Team:</strong> {selectedPlayer.team}
          </p>
          <p>
            <strong>Position:</strong> {selectedPlayer.position}
          </p>
          <p>
            <strong>Status:</strong> {selectedPlayer.status}
          </p>
          <p>
            <strong>Age:</strong> {selectedPlayer.age}
          </p>
          <p>
            <strong>College:</strong> {selectedPlayer.college}
          </p>

          {selectedStats && (
            <div className="stats-block">
              <h4>Season Totals</h4>
              <p>
                <strong>Total Points:</strong>{" "}
                {getFantasyPoints(selectedStats).toFixed(1)}
              </p>
              <p>
                <strong>Games Played:</strong> {selectedStats.gp ?? "N/A"}
              </p>
              <p>
                <strong>Passing Yards:</strong> {selectedStats.pass_yd ?? 0}
              </p>
              <p>
                <strong>Rushing Yards:</strong> {selectedStats.rush_yd ?? 0}
              </p>
              <p>
                <strong>Receiving Yards:</strong> {selectedStats.rec_yd ?? 0}
              </p>
              <p>
                <strong>Total TDs:</strong>{" "}
                {(selectedStats.pass_td ?? 0) +
                  (selectedStats.rush_td ?? 0) +
                  (selectedStats.rec_td ?? 0)}
              </p>
            </div>
          )}

          {weeklyStats.length > 0 && (
            <div className="weekly-stats">
              <h4>Weekly Game Log</h4>
              <table>
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Points</th>
                    <th>Pass Yds</th>
                    <th>Rush Yds</th>
                    <th>Rec Yds</th>
                    <th>TDs</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklyStats.map((w) => (
                    <tr key={w.week}>
                      <td>{w.week}</td>
                      <td>{w.points !== null ? w.points.toFixed(1) : "N/A"}</td>
                      <td>{w.passYd !== null ? w.passYd : "N/A"}</td>
                      <td>{w.rushYd !== null ? w.rushYd : "N/A"}</td>
                      <td>{w.recYd !== null ? w.recYd : "N/A"}</td>
                      <td>{w.tds !== null ? w.tds : "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PlayerInfoPage;

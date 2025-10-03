import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Waivers.css";

const BASE = "https://api.sleeper.app/v1";

const POSITIONS = ["ALL", "QB", "RB", "WR", "TE", "K", "DEF"];

function WaiverPlayersPage({ leagueId }) {
  const [players, setPlayers] = useState({});
  const [rosters, setRosters] = useState([]);
  const [projections, setProjections] = useState({});
  const [available, setAvailable] = useState([]);
  const [selectedPos, setSelectedPos] = useState("ALL");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pRes, rRes] = await Promise.all([
          axios.get(`${BASE}/players/nfl`),
          axios.get(`${BASE}/league/${leagueId}/rosters`),
          axios.get(`${BASE}/projections/nfl/{season}/{week}`)
        ]);
        setPlayers(pRes.data);
        setRosters(rRes.data);
        setProjections(pRes.data);


        const rostered = new Set(rRes.data.flatMap(r => r.players || []));

        const avail = Object.values(pRes.data).filter(
          (p) =>
            p.status === "Active" &&
            !rostered.has(p.player_id) &&
            p.position // must have a position
        );
        setAvailable(avail);
      } catch (err) {
        console.error("Error fetching players:", err);
      }
    };
    fetchData();
  }, [leagueId]);

  const filteredPlayers =
    selectedPos === "ALL"
      ? available
      : available.filter((p) => p.position === selectedPos);

  return (
    <div className="waiver-page">
      <h2>Available Players</h2>


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

      <div className="player-list">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((p) => (
            <div className="player-card" key={p.player_id}>
              <div className="player-main">
                <span className="player-name">{p.full_name}</span>
                <span className="player-team">
                  {p.team || "FA"} • {p.position}
                </span>
              </div>
              <div className="player-stats">
                Injury Status: {p.injury_status ?? "Healthy"} | Projected Points: {p.projections ?.points ?? "?"} | Age: {p.age ?? "?"} | Yrs Exp: {p.years_exp ?? "Rookie"}
              </div>
            </div>
          ))
        ) : (
          <p>No available players for {selectedPos}.</p>
        )}
      </div>
    </div>
  );
}

export default WaiverPlayersPage;

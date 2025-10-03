import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE = "https://api.sleeper.app/v1";

function WaiversPage({ leagueId, initialWeek }) {
  const [week, setWeek] = useState(initialWeek);
  const [transactions, setTransactions] = useState([]);
  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);
  const [players, setPlayers] = useState({});

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
        console.error("Error loading static data:", err);
      }
    };
    loadStatic();
  }, [leagueId]);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const res = await axios.get(`${BASE}/league/${leagueId}/transactions/${week}`);
        const waivers = res.data.filter(t => t.type === "waiver");
        setTransactions(waivers);
      } catch (err) {
        console.error("Error fetching transactions:", err);
      }
    };
    loadTransactions();
  }, [leagueId, week]);

  const getOwnerName = (rosterId) => {
    const roster = rosters.find(r => r.roster_id === rosterId);
    const user = users.find(u => u.user_id === roster?.owner_id);
    return user?.display_name || `Roster ${rosterId}`;
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div style={{ padding: "1rem", background: "#101820", color: "#fff" }}>
      <h2>Week {week} Waivers</h2>
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
      </div>

      {transactions.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {transactions.map(tx => {
            const ownerName = getOwnerName(tx.roster_ids[0]);
            const budgetInfo = tx.waiver_budget_spent 
              ? Object.entries(tx.waiver_budget_spent).map(([rid, amount]) => ({
                  rosterId: rid,
                  amount
                }))
              : [];

            return (
              <li
                key={tx.transaction_id}
                style={{
                  background: "#1c2331",
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "8px"
                }}
              >
                <div style={{ fontSize: "14px", color: "#aaa" }}>
                  {formatDate(tx.status_updated)}
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {ownerName}
                </div>
                <div>
                  {tx.adds &&
                    Object.keys(tx.adds).map(pid => (
                      <div key={pid} style={{ color: "#4caf50" }}>
                        ➕ {players[pid]?.full_name} ({players[pid]?.position}, {players[pid]?.team})
                      </div>
                    ))}
                  {tx.drops &&
                    Object.keys(tx.drops).map(pid => (
                      <div key={pid} style={{ color: "#f44336" }}>
                        ➖ {players[pid]?.full_name} ({players[pid]?.position}, {players[pid]?.team})
                      </div>
                    ))}
                </div>

                {budgetInfo.length > 0 && (
                  <div style={{ marginTop: "6px", fontSize: "14px", color: "#f5a623" }}>
                    FAAB Spent: {budgetInfo.map(b => (
                      <span key={b.rosterId}>
                        {getOwnerName(Number(b.rosterId))} – ${b.amount}{" "}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No waiver moves recorded for week {week}.</p>
      )}
    </div>
  );
}

export default WaiversPage;

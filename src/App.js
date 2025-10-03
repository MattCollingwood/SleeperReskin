import './App.css';
import React, {useState} from 'react';
import LeagueInfo from './components/LeagueInfo';
import LeagueOverview from './components/LeagueOverview';
import Header from './Header';
import MyTeam from './components/MyTeam';
import DraftRecap from './components/DraftRecap';
import Gamecast from './components/Gamecast';
import Waivers from './components/Waivers';
import Transactions from './components/Transactions';
import WeeklyWriteUps from './components/WeeklyWriteUps';


function App() {
  const [activePage, setActivePage] = useState('league');

  const renderPage = () => {
    switch (activePage) {
      case "league":
        return <LeagueOverview />;
      case "myteam":
        return <MyTeam />;
      case "gamecast":
        return <Gamecast week={1} leagueId="1222646540657508352"/>;
      case "transactions":
        return <Transactions leagueId="1222646540657508352" />;
      case "waivers":
        return <Waivers leagueId="1222646540657508352" />;
      case "weeklywriteups":
        return <WeeklyWriteUps />;
      case "draftrecap":
        return <DraftRecap />;
      default:
        return <LeagueOverview />;
    }
  };

  return (
    <div className='fullscreen'>
      <div className='app-header'></div>
      <div className="app-container">
        <Header onTabSelect={setActivePage} />
        <div className="app-card">{renderPage()}</div>
      </div>
    </div>
  );
}

export default App;

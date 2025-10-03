import React from "react";
import "./WeeklyWriteUps.css";




const importAll = (r) => r.keys().map(r);

const images1 = importAll(require.context("../weekly_images/w1", false, /\.(png|jpe?g|svg)$/));
const images2 = importAll(require.context("../weekly_images/w2", false, /\.(png|jpe?g|svg)$/));
const images3 = importAll(require.context("../weekly_images/w3", false, /\.(png|jpe?g|svg)$/));
const images4 = importAll(require.context("../weekly_images/w4", false, /\.(png|jpe?g|svg)$/));

const WeeklyWriteUps = () => {
  return (
    <div>
      <div className="weekly-write-ups">
        <h2>Weekly Write-Ups</h2>
      </div>
      <details>
        <summary>Pre-Season/Draft</summary>
        <details>
          <summary>Intro Remarks</summary>
          <section>
            <h4>Intro Remarks</h4>
            <p>THE TIME HAS COME. I thought about waiting to post this until next week so everyone would have kickers and defenses and finalized rosters, but you all seem to be fiending for it, so here goes nothing. Pardon any errors as my writing skills are rusty and I am not a robot. Football season is upon us after eight months of waiting. Who decided that football season should only take up a third of the year? It’s really a travesty. Courtney likes to joke that she’s single in the fall because I dedicate far too much time to watching football, doing writeups, reading articles, watching videos, and paying attention to everything fantasy football. Her loss, though, is your gain, as I dedicate myself to being the best commissioner I can be. Despite the switchover to Sleeper, I don’t expect things to change a whole lot from my perspective, but there may be some hiccups as we all adjust. I’m noticing there are things available on mobile that are not on desktop, which is a bummer for me but likely not many else. We will be losing the “coaching” stat that shows the number of points left on the bench, but allegedly this $36 league history platform I paid for will provide it. I’m not sure how much useful stuff I’ll get out of it, but at the very least, it provides things like head-to-head history (e.g. Will is 8-3 against Greg, Fadi is 7-5 against Rasheid), which will be useful for the weekly writeups. It provides an automated “newsletter” that breaks down matchups and whatnot (that I may steal some content/ideas from), but rest assured I will not be outsourcing my weekly rambling to some AI nonsense. If by the end of the year I decide it wasn’t that useful, I won’t re-subscribe next year. Anyway, let’s see how everyone’s draft went!</p>
          </section>
        </details>
        <details>
          <summary>Team Overview</summary>
          <section>
            <h4>Scott's Team</h4>
            <p>Scott opted to start the year by keeping Nico Collins for the second straight year, putting his price at a modest $20. With Stefon Diggs out of the picture, Tank Dell not expected to recover from his busted leg anytime soon, and the corpses of Joe Mixon, Nick Chubb, and Dameon Pierce leading the RB room, Nico could go nuclear if he stays healthy. At QB, Scott went cheap with Jared Goff ($3) and Caleb Williams ($1), which currently seems like the weakest link of his team. What’s not his weakest link, though, are his top running backs, with Derrick Henry ($51) and De’Von Achane ($48) sucking up half of his draft budget. The only other RB he drafted, though, is Cam Skattebo ($6). At receiver, we have the aforementioned Nico Collins, Drake London ($35), Davante Adams ($11), Khalil Shakir ($1), Jayden Higgins ($1), and Tre Harris ($1, dropped since). At tight end we have George Kittle ($19) and Jonnu Smith ($1) while we have Harrison Butker ($1) at kicker and the Seahawks ($1) at defense. Scott’s team seems very top heavy, but if it pans out, it could be extremely scary.</p>
            <h4>Erik's Team</h4>
            <p>Erik, similar to Scott, kept the same player he did last year, with Kyren Williams ($20) being his “franchise” player. That’s where the similarities end, though, with Erik going for a top tier QB with Jayden Daniels ($21). At RB, we have Kyren, Jahmyr Gibbs ($64), Quinshon Judkins ($6), Travis Etienne ($7), and Isaac Guerendo ($4, since dropped). Meanwhile, at Receiver we have Mike Evans ($29), DeVonta Smith ($17), Xavier Worthy ($16), Jordan Addison ($3), Jauan Jennings ($4), and Keon Coleman ($1). Travis Kelce ($5) is the sole tight end on the team, with Tyler Bass ($1) at kicker, and the Lions ($1) at defense. Erik’s team is pretty well-rounded, with his top RBs and QB his strengths. It’s not my favorite squad, but at least he spent his entire auction budget reasonably instead of spending $70+ on his kicker and mid-tier QB like last year.</p>
            <h4>Will's Team</h4>
            <p>Will continues to push the limits of our keeper system, being the only team that has had Ja’Marr Chase ($51) on his roster for his entire career after drafting him for $1 in 2021, then keeping him for $6, $16, $31, and now $51. Next year’s impending $76 might be pushing it, though. Do you guys think this is an acceptable “limit”? I think so. Will chose to draft Jalen Hurts ($15) and Patrick Mahomes ($1, since dropped) at QB, which is a modest value for Hurts, who is a top QB every year. Things get a bit dicey at running back, though, with Will having drafted David Montgomery ($12), D’Andre Swift ($8), Kaleb Johnson ($5), and Zach Charbonnet ($3). It’s pretty common for Will go to zero or hero RB, though, and he’s always been good, so I expect he’ll figure it out. At receiver, we have Chase, Justin Jefferson ($55), Jaylen Waddle ($12), Cooper Kupp ($6), Matthew Golden ($5), and Jayden Reed ($1, since dropped). TJ Hockenson ($3) is the only tight end on the roster, followed by Brandon Aubrey ($3) at kicker and the Eagles ($2) at defense. The running back situation is beyond my level of comfort, but having Chase and Jefferson at receiver could be disgusting</p>
            <h4>Hunter's Team</h4>
            <p>Hunter decided to start the year on a risky note, having decided to keep Terry McLaurin ($8), who has not practiced at all this summer due to a contract dispute, although he finally signed his extension today. At quarterback, we have a duo of Bo Nix ($1) and Brock Purdy ($1), while at running back we have Jonathan Taylor ($50), James Cook ($31), Isiah Pacheco ($6), and RJ Harvey ($17). Meanwhile, at receiver, we have Scary Terry, Travis Hunter ($9), Amon-Ra St. Brown ($58), Zay Flowers ($13), and Josh Downs ($2, since dropped). Although ARSB and Terry make up a decent duo on paper, I question the value of ARSB being the most expensive receiver in the draft and Terry as a keeper with him having gotten no work this summer. We’ve seen numerous receivers start the year slow or injured after holding out. Tyler Warren ($1) and Tucker Kraft ($1) are Hunter’s tight ends while Ka’imi Fairbairn ($1) is his kicker and the 49ers ($1) are his defense. There are a lot of question marks on this team, but if they pan out, Hunter’s team could be good. If they don’t, though, yikes.</p>
            <h4>Greg's Team</h4>
            <p>After going exceptionally top heavy last year ($172 between Breece Hall [keeper], Tyreek, and CeeDee), Greg leveled things out a little bit this year, spending $128 on his top three picks. $148 on his top four, if you want to include Puka Nacua ($20) as his keeper. Greg made Josh Allen ($28) the most expensive QB drafted, followed by Saquon Barkley ($72) as the most expensive RB. Followed by Saquon, though, we have Jaylen Warren ($7), James Conner ($17), Javonte Williams ($4), and Nick Chubb ($2). Puka and Garrett Wilson ($28) make up Greg’s top two receivers, followed by Rome Odunze ($7), Deebo Samuel ($3), Stefon Diggs ($1), and Hollywood Brown ($1, since dropped). Sam LaPorta ($6) is Greg’s sole tight end, followed by Jake Bates ($1) at kicker, and the Steelers ($1) at defense. I’m really not sure what to think about this team. Josh Allen, Saquon, and Puka make up a nice trio, but beyond that, it’s a collection of middling, old, and question mark type players.</p>
            <h4>Matt E's Team</h4>
            <p>Matt began the year by keeping second-year receiver Ladd McConkey ($8), who finished last year quite strong. Matt doesn’t have a very strong keeper history, though, having kept Rachaad White and Rhamondre Stevenson the last two years. He went an interesting route at QB by drafting Geno Smith ($1) and Kyler Murray ($2). At running back, though, we have quite a strong group with Bijan Robinson ($71), Josh Jacobs ($51), Tony Pollard ($10), JK Dobbins ($3), and Rhamondre Stevenson ($1). Things are a little more dicey at receiver, though, with Ladd McConkey, Jaxon Smith-Njigba ($38), Calvin Ridley ($6), Rashid Shaheed ($3), and Brandon Aiyuk ($2) being the players he chose to draft. Mark Andrews ($2) is his only tight end, with Chris Boswell ($1) being his kicker, and the Commanders ($1) being his defense. This is a roster I can get behind, but it’ll require some work since I foresee it being a team that will need to stream QBs on a weekly basis as well as pick up some waiver RBs.</p>
            <h4>Collingwood's Team</h4>
            <p> Collingwood started the year by keeping Brock Bowers ($6), who started his career by putting up the best ever rookie tight end season. With tight ends being pretty devalued in our league post-peak-Kelce, we shall see if he provides much value over Kittle ($19) or McBride ($13). Collingwood’s QBs are Baker Mayfield ($2) and Dak Prescott ($5), who are both underrated in our 6-point passing TD scoring system. At RB, though, things get interesting. Christian McCaffrey ($69) is the top RB, followed by Joe Mixon ($7), Brian Robinson ($5), Tank Bigsby ($3, since dropped), and Rachaad White ($1). With Mixon only just getting put on the PUP and BRob having been traded to the 49ers, I don’t have a clue who the RB2 is here. I guess Rachaad White? YIKES. At receiver, we have CeeDee Lamb ($53), Marvin Harrison Jr ($24), Jameson Williams ($12), Chris Godwin ($6), and Emeka Egbuka ($4). I like CeeDee and Jamo, but I am not in on MHJ with the Cardinals’ current coaching and QB situations. Bowers is the sole TE on the squad while Chase McLaughlin ($1) is the kicker, and the Ravens ($1) are the defense.</p>
            <h4>Fadi's Team</h4>
            <p>Fadi is always a wild card going into the draft, and after keeping Chuba Hubbard ($8), that seems to be the case again this year. Fadi made Lamar Jackson ($27) the second most expensive QB drafted, but then went full Rasheid, drafting a bunch of mid-tier players. His RB room consists of Chuba, Breece Hall ($28), TreVeyon Henderson ($14), Aaron Jones ($15), and Tyrone Tracy ($4). Meanwhile, at receiver we have Tyreek Hill ($36), Tee Higgins ($24), Courtland Sutton ($13), DJ Moore ($8), Chris Olave ($3), and Jerry Jeudy ($5). Trey McBride ($13) is his only tight end while his kicker is Cameron Dicker ($1) and his defense is the Broncos ($2). I think this team will be fine, but being fine is not what wins you fantasy championships. As a wise man once said, “if you ain’t first, you’re last.” Thus I fear it will be another last place finish for Fadi.</p>
            <h4>Rasheid's Team</h4>
            <p>After being the “king of mediocrity” the last two years, Rasheid (kind of) opened up the pocket book this year by spending a decent amount on his top few players. He started the year by opting to keep Alvin Kamara ($14) after getting quite the value on him last year. At QB he got someone he didn’t really want with Joe Burrow ($11) and has been trying to trade him ever since. At RB we have Kamara, Bucky Irving ($36), Omarion Hampton ($29), Jordan Mason ($4), Tyjae Spears ($1), and Trey Benson ($1). Then, at receiver, we have DK Metcalf ($23), Malik Nabers ($43), Rashee Rice ($9), George Pickens ($16), Ricky Pearsall ($9), and Michael Pittman ($1). A lot of WR2-3 level players behind Nabers, especially with Rice facing suspension for a good chunk of the year. Evan Engram ($1) is the sole tight end, with the Vikings ($1) being his defense and no kicker drafted. For someone so pro-kicker, you’d think he would value them a bit higher rather than opting to pick up waiver-level kickers every year. This might be the strongest roster we’ve seen Rasheid draft, but that doesn’t mean much given his penchant for drafting the most middling teams possible.</p>
            <h4>Jalen's Team</h4>
            <p>Finally, there’s me. I started the year by keeping Brian Thomas Jr. for a mere $6. I had a boatload of potential options, including BTJ ($6), Chase Brown ($6), Bucky Irving ($10), and Rashee Rice ($8). Here’s to hoping I made the right choice. At QB, I opted to draft Justin Herbert ($1, since dropped), and JJ McCarthy ($1), while at running back I went all-out on second-tier players with Ashton Jeanty ($49), Chase Brown ($34), Kenneth Walker ($36), Bhayshul Tuten ($1), and Jaydon Blue ($1). At receiver, I went for BTJ, AJ Brown ($39), Tetairoa McMillan ($18), Jakobi Meyers ($5), Darnell Mooney ($2), and Luther Burden ($1, since dropped). Then, at tight end I went with a duo of Colston Loveland ($1) and David Njoku ($2), while opting not to draft a kicker or defense because, let’s be honest here, you get no value by drafting them over streamers. I really like my top RBs and WRs, but pretty much everyone behind them is a lotto ticket, so things could get yucky if the injury train comes my way.</p>
          </section>
        </details>
        <details>
          <summary>Courtney's Corner</summary>
          <section>
            <p>Pistachio Garner has spent her offseason continuing to hang out with her girlfriends, having something planned with at least one of them almost every week. Lately, she’s been planning our upcoming long weekend trip to Portland, so if anyone has any recommendations, send them her way. That trip will be at the end of September, so I’ll likely be slightly out of pocket that weekend, but I’ll still be available. Just not glued to my desk with 5 games open simultaneously like I will be every other week. I would be remiss also not to give credit to Pistachio Garner for finding the league history tool that I subscribed to this year, so kudos to her for finding it. Lastly, she has made some changes to trivia for the year that she thinks everyone will be excited about. The first big change is WEEKLY PRIZES*. Whoever gets the most trivia points each week will win something! Most likely it will be a venmo of a to be determined amount, but, who knows, maybe it’ll be a pizza delivered to your door, cookies in your mailbox, or a trophy with your name on it! She does want to remind everyone that Hunter won last year’s trivia grand prize of “one round trip ticket to Phoenix” last year. He said he wants to defer that prize to “one round trip ticket to the TBD in-person 2026 fantasy draft location.” Court will likely also begin trying to get some of that planned out sooner rather than later. The city and date, at the minimum. *weekly might become bi-weekly depending on Court’s work schedule, as she is leading the implementation of a new HR system at her company and no longer has massive amounts of free time during her work days</p>
          </section>
        </details>
        <details>
          <summary>Week 1 Preview</summary>
          <section>
            <p>There’s always a plethora of information to gather from week 1, so a lot should happen following the first week of matchups. Lotto tickets come to fruition or go up in smoke, players get hurt, and offseason strategies pan out or get obliterated. As always, the matchups will be fun, with week 1’s slate including Rasheid vs Erik, Hunter vs Will, Scott vs Greg, Collingwood vs Matt E, and me vs Fadi. Of course, there will be weekly $5 prizes that vary week to week. Week 1’s prize always goes to the lowest scoring team because there’s no shot anyone would voluntarily start 0-1, but they might be willing to voluntarily take an L later in the year. The order of the other weekly games has been randomized, and I will pin the message to this channel for your viewing convenience, although I’ll always remind you all about the following week’s $5 prize in the weekly writeups.</p>
          </section>
        </details>
        <details>
          <summary>Draft Rankings</summary>
          <section>
            <h4>Draft Rankings</h4>
            <p>Next, I’ll share some FantasyPros draft rankings, which will include any free agent moves made since the draft while my draft summaries above do not. Those that do not have kickers or defenses will be penalized since they take those into account.</p> 
            <ol>
              <li>Fadi (????)</li>
              <li>Will</li>
              <li>Greg</li>
              <li>Scott</li>
              <li>Jalen</li>
              <li>Matt E</li>
              <li>Rasheid</li>
              <li>Collingwood</li>
              <li>Erik</li>
              <li>Hunter</li>
            </ol>
            <p>Since my opinion is far more interesting and important than that of some “experts” who make their living by putting out chalky rankings every week, I will provide you all with my draft grades. Let it be known that last year, my rankings (points scored rank in parentheses), in order, went:</p>
            <ol>
              <li>Collingwood (#2)</li>
              <li>Scott (#3)</li>
              <li>Matt E (#8)</li>
              <li>Jalen (#4)</li>
              <li>Will (#1)</li>
              <li>Greg (#7)</li>
              <li>Hunter (#6)</li>
              <li>Fadi (#10)</li>
              <li>Rasheid (#5)</li>
              <li>Erik (#9)</li>
            </ol>
            <p>Not too bad, If I do say so myself. Anyway, this year’s grades:</p>
            <ol>
              <li>Scott: A. King Henry, Achane, Nico, Drake London, and Kittle makes for a NASTY starting lineup. QB is a toss-up, but Scott did fine in that regard last year.</li>
              <li>Jalen: A-. Call me biased, BECAUSE I AM, but I really like my team. Really nice combination of upside and depth, with my top 3 RBs and top 2 WRs capable of finishing top overall at their positions if the cards fall right.</li>
              <li>Matt E: B+. I always overrate Matt’s teams, but I think that’s because he’s not super active during the year. Bijan, Jacobs, Ladd, and JSN is a solid top 4. If Matt stays active and makes some decent waiver pickups, he’ll be good.</li>
              <li>Rasheid: B+. Rasheid actually spent some money this year, and I think he’ll do well, but I’m not sure there’s enough upside at the WR position. Lots of wrong coaching decisions incoming.</li>
              <li>Will: B. Hurts, Chase, and Jefferson will likely provide a rock solid floor for Will to build off every week. The RB situation is questionable, but Will always finds a way to figure it out.</li>
              <li>Greg: B. Similar to Will, Josh Allen, Saquon, and Puka will likely provide a solid floor, but I am not sold on Garrett Wilson, James Conner, or Jaylen Warren as consistent weekly starters.</li>
              <li>Collingwood: B-. CMC, CeeDee, and Bowers will be good, but RB2 and WR2/flex are much more questionable. Lots of redundancy in the lineup with BRob, Godwin/Egbuka/Rachaad White. Feel like you need more diversification, as there will be a lot of cannibalization between your players.</li>
              <li>Erik: C. I like Daniels, Kyren, Gibbs, and Evans, but I’m not sure Evans is a bonafide WR1 at this point in his career. You managed to draft a bunch of guys I am pretty bearish on (Kelce, Worthy, Judkins, Etienne, Coleman), so I have to ding you there.</li>
              <li>Hunter: C-. Although I like JT, ARSB, and Harvey, your QB situation is dicey and I am firmly OUT on James Cook and Scary Terry. Ain’t no way Cook scores 18 touchdowns on a sub-50% snap rate again.</li>
              <li>Fadi: D. I think Lamar, Higgins, and McBride will do well, but Breece and Tyreek scare me tremendously, especially with how costly they were. I am also quite bearish on most everyone on your bench.Hope you’re ready to be active on the waivers.</li>        
            </ol>
            <p>Here’s to a great 14th season for all!</p>
          </section>
        </details>
      </details>
      <details>
        <summary>Week 1</summary>
        <details>
          <summary>Intro Remarks</summary>
          <p>My guys, it is time for your regularly scheduled dose of weekly rambling from your favorite fantasy football commissioner. Week 1 continued to prove itself to be the drunken half brother of what most other NFL weeks are with RBs being woefully inefficient, the Cowboys nearly beating the Eagles (spit-gate), the Bengals putting up 7 yards of offense in the second half, and Aaron Rodgers throwing four TDs are just a few of the highlights of what may or may not continue through the rest of the season. I always stupidly expect week 1 to provide some answers as to what teams are going to do, but it somehow continually finds a way to provide more confusion. Anyway, I’m still figuring out how to navigate Sleeper, and it seems there are a number of things that are available on mobile but not desktop, which is kind of annoying. It seems that Sleeper does not fully support points left on the bench, but it’s possible to backward calculate it since they provide “Max PF” in the detailed standings. I can probably get some formulas set up to calculate it weekly, but if it proves to be too much of a pain in the ass, you might just get a cumulative “Max PF” readout. The LeagueLegacy platform provides power rankings after week 2, so depending on how they look, maybe I’ll pivot to those instead of my excel rankings I lifted from some reddit thread years ago. Our week 1 matchups were quite spicy, with three utter blowouts and two kinda close matchups. Let’s get into the deets!</p>
        </details>
        <details>
          <summary>Transaction Review</summary>
          <p>Transaction Review (SINCE 9/1):</p>
          <ul>
            <li>Jalen: Added Cardinals D (FA), Will Reichard (FA), Isaac Guerendo (FA), and JJ McCarthy (FA) and dropped JJ McCarthy, Darnell Mooney, Jaydon Blue, and Isaac Guerendo.</li>
            <li>Scott: Nothing.</li>
            <li>Erik: Added Dallas Goedert (FA), JJ McCarthy ($0), Najee Harris (FA), and Wil Lutz (FA) and dropped Hunter Henry, Dallas Goedert, JJ McCarthy, and Tyler Bass.</li>
            <li>Will: Nothing.</li>
            <li>Hunter: Nothing.</li>
            <li>Greg: Nothing.</li>
            <li>Matt E.: Nothing.</li>
            <li>Collingwood: Nothing.</li>
            <li>Fadi: Nothing.</li>
            <li>Rasheid: Nothing.</li>
          </ul>
        </details>
        <details>
          <summary>Matchup Review</summary>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4 className='team'>Rasheid</h4>
                </div>
                <div>
                  <h4 className='score'>89.42pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Erik</h4>
                </div>
                <div>
                  <h4>74.17pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In our first matchup of the season, Rasheid beat Erik 89.42 – 74.17, putting their all-time matchup at 2-1 Rasheid. Rasheid’s team had no standout players other than his kicker Cam Little (16.6 points), who was the highest scoring kicker in the league this week. Nobody else managed more than 13 points, including disappointments by Evan Engram (3.6 points), Omarion Hampton (7.1 points), and Joe Burrow (10.82 points). Meanwhile, while Erik’s team had more top-end with Jayden Daniels (22.12 points) and Kyren Williams (13.4 points), it also had substantially more low-end thanks to a donut from Xavier Worthy (0.0 points) and worse than a donut from the Lions D (-2.95 points). Ouch. On top of this, Keon Coleman (21.2 points) and Travis Etienne (17.1 points) both popped off on the bench, which would have given Erik the win had he started them this week. According to LeagueLegacy, Rasheid had luck on his side, with a “luck factor” of 54.46 compared to -7.78 for Erik, but also made better coaching decisions with a coach score of 87.2% compared to 67.8% for Erik.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4 className='team'>Hunter</h4>
                </div>
                <div>
                  <h4 className='score'>108.64pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Will</h4>
                </div>
                <div>
                  <h4>68.68pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Next up, Hunter beat Will 108.64 – 68.68, giving him the edge in their all-time competition at 5-4. Hunter had a fairly well-rounded performance, but Zay Flowers (24.6 points) and James Cook (18.7 points) led the charge while Terry McLaurin (3.7 points), Amon-Ra St. Brown (6.5 points), and Bo Nix (8.84 points) came up the rear. Hunter would have had an easier time this week had he started Brock Purdy (20.78) points and/or Keenan Allen (16.3 points), but it didn’t make a difference because he didn’t have much competition from Will this week. Jalen Hurts (24.28 points) was Will’s only player to top 13 points, and while Justin Jefferson (12.8 points) and Brandon Aubrey (11.4 points) were decent, Kaleb Johnson (-0.20 points), the Eagles D (2.5 points), TJ Hockenson (3.0 points), and Ja’Marr Chase (3.6 points) were total busts. Starting Zach Charbonnet (10.7 points) would have helped his cause a bit, but there wasn’t enough firepower on the bench to give him the win this week. Hunter and Will both had their shortcomings as coaches, posting scores of 80.1% and 79.1%, but luck was on Hunter’s side with a luck factor of 13.36 compared to 0.00 for Will.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4 className='team'>Scott</h4>
                </div>
                <div>
                  <h4 className='score'>139.96pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Greg</h4>
                </div>
                <div>
                  <h4>97.30pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Scott vs. Greg: In our highest scoring matchup of week 1, Greg gave Scott the Ass-Blasting-of-The-Week™, beating him 139.96 – 97.30, giving Greg a 17-7 edge in their all-time matchups. Note this excludes our very first season (2012), which has been lost to the ether thanks to Greg’s commissioner coup. Everyone but Greg’s kicker and defense scored at least 10 points, but Josh Allen (42.76 points) was the star of the show, picking up where he left off last year. Garrett Wilson (19.0 points), Puka Nacua (18.1 points), and Saquon Barkley (16.4 points) all had good weeks, too, but the Steelers D (0.80 points) was a complete bust. Greg could have had an even better week had he started Javonte Williams (19.4 points) and/or Deebo Samuel (19.1 points), but it wasn’t necessary this week. Scott’s team didn’t do much of note aside from a big day from Derrick Henry (28.7 points), but De’Von Achane (15.0 points) was good, too. The Bills D (-1.50 points) and Nico Collins (4.0 points) were complete disappointments, though. Starting Caleb Williams (26.2 points) over Jared Goff (12.9 points) would have helped Scott’s team this week, but he wasn’t going to win this week either way. Greg posted a better coaching score (91.4%) than Scott (81.8%) this week, and he also had a better luck factor (4.44 vs -17.76).</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4 className='team'>Matt E.</h4>
                </div>
                <div>
                  <h4 className='score'>115.17pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Collingwood</h4>
                </div>
                <div>
                  <h4>100.68pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In our fourth matchup of week 1, Matt E. beat Collingwood 115.17 – 100.68, giving him a 6-9 all-time record in the MATTchups. Matt’s team was headlined by good days from Kyler Murray (22.32 points) and Bijan Robinson (21.4 points), but his team was pretty solid all-around, with all but Mark Andrews (1.0 point), Tony Pollard (7.4 points), and the Commanders D (8.65 points) posting at least 10 points. JK Dobbins (13.8 points) would have helped him out a little more, but not significantly. Meanwhile, Collingwood had a relatively similar week with Baker Mayfield (28.58 points) and Christian McCaffrey (18.7 points) leading the charge. Where he faltered, though, was with the Ravens D (-6.1 points, OUCH), Jameson Williams (4.6 points), and Chase McLaughlin (4.8 points). Starting Emeka Egbuka (21.6 points) over Jamo would have given Collingwood the win this week, which stings. Although Matt E. had a better coaching score this week (94.7% vs 85.5%), one has to wonder how much the luck factor disparity (+23.34 vs -38.9) played a part in the final outcome.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4 className='team'>Fadi</h4>
                </div>
                <div>
                  <h4 className='score'>125.81pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Jalen</h4>
                </div>
                <div>
                  <h4>84.47pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Finally, in our last matchup of week 1, Fadi beat me 125.81 – 84.47, giving him a 10-6 lead over me in our all-time series. Fadi had a solid week, led by Lamar Jackson (33.36 points), and although nobody else topped 20 points, Chuba Hubbard (16.4 points), Breece Hall (15.5 points), Courtland Sutton (15.1 points), and the Broncos D (15.05 points) all topped 15. Tee Higgins (4.8 points) and Tyreek Hill (6.0 points) were less than stellar, but he didn’t need any extra points to beat me this week. On the other side of the matchup, my team was pretty poopy with the exception being Patrick Mahomes (28.02 points), who had a pretty good week. Nobody else managed more than 12(ish) points, including massively disappointing weeks from AJ Brown (1.3 points) and Ken Walker (3.9 points). Jacory Croskey-Merritt (14.2 points) and Jakobi Meyers (13.7 points) would have given my team a slightly less dogshit performance, but it wouldn’t have been enough to get a win. Fadi posted a pretty good coaching score of 91.0% versus my poor 78.2%, while luck was slightly in his favor (+6.68) while slightly out of my favor (-6.68).</p>
        </details>
        <details>
          <summary>Courtney's Corner</summary>
          <p>Pistachio Garner is not thrilled that football is back and taking up some of her post-work relaxation time in the evenings, but it’s only four months of the year, so she’ll survive (her words, not mine). Other than that, she has been spending a lot of time with friends, doing puzzles, and staying very busy at work. For the first time in her life, she might be losing her mind because of work. She’s the lead on the implementation of a new HR system at her work and instead of only having to “work” like 10 hours a week, she’s actually having to put in a full 40. She’s not handling the adjustment very well and we’re not sure how she’ll make it through the full 18 months of the project, but she has slowly transitioned from “stressed” to “annoyed”, so maybe that’s progress? She’ll figure it out, though, I’m sure. She says everyone better get ready for a FUN trivia question to kick off this year’s entertainment. She wants more participation than last year! You know who you are…</p>
        </details>
        <details>
          <summary>Conclusion</summary>
          <p>As I mentioned in the preseason writeup, week 1’s weekly $5 prize was slated to go to the lowest scoring team, which means Will gets the first winnings of the year thanks to his league-low 68.68 points. As for the power rankings, they aren’t terribly exciting and are basically just in order of most points to least, with Greg, Fadi, Matt E, Hunter, and Collingwood making up the top half while Scott, Rasheid, me, Will, and Erik make up the bottom half. On to week 2, we have matchups between Fadi and Erik, Scott and Hunter, Collingwood and Will, Greg and Matt E, and me and Rasheid. At this point it’s kind of hard to pick a matchup of the week, but I’ll have to give it to Greg vs Matt E., as they’re the only matchup between 1-0 teams, so if the cards fall right in the other matchups, the winner could be alone at the top at 2-0. As for week 2’s $5 prize, it will go to the winning team with the most points by a bench player, so stock up on those QBs if you’re feeling ballsy. I’m happy to see I’m able to get my writeups out at roughly the same time as I did most of last year, so I’ve still got it! Although I did do a little prep work last night and started a little early in anticipation of knocking the rust off. Ignore any typos or errors as I reacquaint myself with the process. What are your thoughts on the LeagueLegacy additions? All-time records, coaching ranks, luck factor, etc. Smooches, Lenny Da Commish.</p>
        </details>
        <details>
          <summary>Charts</summary>
          <section>
            <div className='chart'>
              <div>
                {images1.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Week 1 image ${idx + 1}`}
                    style={{ maxWidth: '500px', margin: '10px' }}
                  />
                ))}
              </div>
            </div>
          </section>
        </details>
      </details>
      <details>
        <summary>Week 2</summary>
        <details>
          <summary>Intro Remarks</summary>
          <p>I don’t know about you, but I’m feeling 0-2 (just like the Chiefs). After week 1 was the drunken half brother of most other NFL weeks, week 2 was a little bit more reasonable, but still a bit wild with Russell Wilson throwing for 450 yards and 3 TDs (and losing), the Lions dropping 52 points, the Colts being 2-0, and, of course, the Chiefs being 0-2. Regardless, things are starting to settle down a bit. Maybe. My team is off to another slow start after back-to-back losses to the Arabs, but that seems to be pretty much par for the course since 2020. Hunter being 2-0 is a little more surprising, though, if I do say so myself. We’ll see if his team can keep it up. Nevertheless, week 2 was a spicy one, with two really close matchups, two kinda close matchups, and one blowout. Let’s get into the details.</p>
        </details>
        <details>
          <summary>Transaction Review</summary>
          <p>Transaction Review:</p>
          <ul>
            <li>Jalen: Added Justin Herbert ($15), Juwan Johnson ($8), Tyler Loop ($2), and the Packers D ($2) and dropped JJ McCarthy, David Njoku, Will Reichard, and the Cardinals D.</li>
            <li>Scott: Added Quentin Johnston ($9) and the Rams D (FA) and dropped Jonnu Smith and Jayden Higgins.</li>
            <li>Erik: Added Zach Ertz (FA) and dropped Adam Thielen.</li>
            <li>Will: Added Dylan Sampson (FA) and Harold Fannin (FA) and dropped Woody Marks and Kaleb Johnson.</li>
            <li>Hunter: Added Kayshon Boutte (FA), Justin Fields (FA), Daniel Jones (FA) and dropped Tucker Kraft, Brock Purdy, Bo Nix, and Justin Fields.</li>
            <li>Greg: Added Hollywood Brown ($0) and dropped Josh Palmer.</li>
            <li>Matt E.: Nothing.</li>
            <li>Collingwood: Added Kenneth Gainwell ($9), Jonnu Smith (FA), and Michael Mayer (FA) and dropped Ollie Gordon, Rachaad White, Jonnu Smith, Austin Ekeler, and Michael Mayer.</li>
            <li>Fadi: Nothing.</li>
            <li>Rasheid: Added Hunter Henry ($6) and dropped Tyjae Spears.</li>
          </ul> 
        </details>
        <details>
          <summary>Matchup Review</summary>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4 className='team'>Fadi</h4>
                </div>
                <div>
                  <h4 className='score'>97.85pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Erik</h4>
                </div>
                <div>
                  <h4>99.20pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In our first matchup of week 2, Erik very narrowly defeated Fadi 99.20 – 97.85, putting them both 1-1 on the season, but giving Erik a 4-0 edge over Fadi all-time. Has Fadi met his nemesis? Fadi’s team was led by Lamar Jackson (34.3 points), Chuba Hubbard (16.2 points), Tyreek Hill (13.9 points), and Tee Higgins (13.1 points), but where his team faltered was with the Broncos D (-4.15 points), Courtland Sutton (1.1 points) and Breece Hall (4.8 points). Ouch. Fadi had a really good coaching score of 91.1% this week, but he still could have gotten the win had he started Chris Olave (8.4 points) or Tyrone Tracy (7.1 points) over Breece or Sutton. Erik had himself a very average week, with Jayden Daniels (23.7 points), Jahmyr Gibbs (17.9 points), and Travis Etienne (15.9 points) leading the charge. Wil Lutz (3.0 points) and Keon Coleman (4.1 points) were disappointments, but Erik didn’t need the extra points to beat Fadi this week. However, his coaching score of 82.8% was 8th in the league this week thanks to him benching Jauan Jennings (17.4 points) and Zach Ertz (15.4 points). LeagueLegacy puts luck firmly in Erik’s favor with his luck factor of +46.68 compared to Fadi’s -15.56.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Scott</h4>
                </div>
                <div>
                  <h4>126.56pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Hunter</h4>
                </div>
                <div>
                  <h4>159.84pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Scott vs. Hunter: In our second and highest scoring matchup of week 2, Hunter gave Scott the Ass-Blasting-of-The-Week™, beating him 159.84 – 126.56. This gives Hunter an all-time record of 13-11 versus Scott. Hunter put up the highest scoring week of the young season thanks to big weeks from Amon-Ra St. Brown (34.7 points), Jonathan Taylor (28.5 points), James Cook (26.0 points), and Daniel Jones (24.84 points). Terry McLaurin (7.3 points) and the 49ers D (7.4 points) were his lowest scoring players, so there isn’t much to be disappointed about. His coaching score of 95.6% led the league this week, and he could have had a few more points if he started Keenan Allen (14.6 points), but he really didn’t need them. Leave it to Scott to be the second highest scoring team and still get the ABOTW™. Actually, that’s a pretty Jalen move, to be honest. Anyway, Jared Goff (43.96 points) popped off in a big way for Scott while De’Von Achane (22.2 points) and Davante Adams (19.6 points) also had really nice weeks, but it wasn’t enough to overcome abysmal weeks from Derrick Henry (2.3 points) and Drake London (4.4 points). Scott left points on the bench thanks to good weeks from Quentin Johnston (14.4 points), Cam Skattebo (12.9 points), and the Bills D (11.25 points), giving him a coaching score of 84.8%, but it wasn’t going to be enough to overcome Hunter’s explosion this week. LeagueLegacy thinks luck played a pretty big factor, though, with Scott’s luck factor being -71.04 while Hunter’s was +8.88. I might have to start tracking everyone’s luck factors for visualization purposes because -71.04 feels pretty substantial lol.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Collingwood</h4>
                </div>
                <div>
                  <h4>104.89pts</h4>
                </div>
              </div>
              <div><h2>VS</h2></div>
              <div>
                <div>
                  <h4>Will</h4>
                </div>
                <div>
                  <h4>123.69pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Next up, Will beat Collingwood 123.69 – 104.89, giving him a 1-1 record on the season while bumping Collingwood to 0-2. This also gives Will an 8-5 all-time record against Collingwood. Will’s week was led by Ja’Marr Chase (29.5 points) and Brandon Aubrey (24.5 points). All but two of his players scored at least 9.5 points, with the only bust being TJ Hockenson (1.7 points) while the Eagles D (6.55 points) was just kinda fine. This gave him a coaching score of 93.6%, which was good for second in the league this week. Collingwood had himself an acceptable week overall, but it was pretty boom or bust on an individual basis, with Dak Prescott (26.14 points), Christian McCaffrey (19.7 points), and the Ravens D (18.05 points) leading the charge while Chase McLaughlin (1.0 point), Austin Ekeler (3.4 points, RIP), and Marvin Harrison Jr. (3.7 points) all shit the bed. Starting Jameson Williams (17.8 points) would have given him a bit of a boost, but he wasn’t going to win this week regardless. His coaching score of 86.9% was good for 5th in the league this week. Will had himself a luck factor of +23.34 this week while Collingwood’s was -38.90.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Greg</h4>
                </div>
                <div>
                  <h4>111.42pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Matt E.</h4>
                </div>
                <div>
                  <h4>93.05pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In our fourth matchup of week 2, Greg beat Matt E. 111.42 – 93.05, giving him a 2-0 record while bumping Matt to 1-1. Greg leads the all-time series 9-4. Puka Nacua (23.6 points) and Javonte Williams (22.0 points) led the way for Greg, but Saquon Barkley (16.4 points) had a good week, too. Sam LaPorta (4.1 points) and Josh Allen (11.82 points) were disappointments, especially considering the Lions dropped 52 points and the Bills scored 30. Greg really should have started Rome Odunze (28.3 points), which contributed to his 9th ranked coaching score of 81.7% this week, but he didn’t need the extra points to beat Matt this week. Meanwhile, Bijan Robinson (18.3 points) was Matt’s top scorer, and while nobody really popped off, he had a fairly well-rounded week with five of his players scoring 14+ points. Where he was really let down, though, was by the Commanders D (-1.45 points) and Mark Andrews (0.90 points). What’s going on with MAndrews? I don’t quite understand how he’s doing so poorly while the Ravens are doing well. Either way, Matt left some points on the bench thanks to Rhamondre Stevenson (18.3 points), JK Dobbins (15.0 points), and Rashid Shaheed (13.2 points), but an optimal lineup wouldn’t have been enough to get a win. His coaching score of 85.3% was 6th in the league this week. Luck didn’t seem to play a huge part in this matchup, as Greg had a luck factor of +17.76 while Matt had a -4.44.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Jalen</h4>
                </div>
                <div>
                  <h4>90.43pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Rasheid</h4>
                </div>
                <div>
                  <h4>98.49pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Finally, in our last matchup of week 2, Rasheid beat me 98.49 – 90.43, giving him a record of 2-0 while knocking me to 0-2. This also gives Rasheid an edge in our all-time series of 9-5. Oof (for me). Malik Nabers (33.2 points) led the charge for Rasheid while Bucky Irving (15.1 points) and Alvin Kamara (13.0 points) were his only other players to score more than 10 points. Starting George Pickens (15.3 points) would have given him a nice boost, giving him a 4th ranked coaching score of 88.7%, but he didn’t need the extra points to beat me this week. My team was pretty trash this week, but somehow slightly better than last week with my top scorers being Justin Herbert (22.78 points), Juwan Johnson (13.4 points), and Tyler Loop (12.5 points). Everyone else was sub-10 points, including really disappointing weeks from AJ Brown (5.2 points), Ashton Jeanty (5.9 points), Brian Thomas Jr. (6.9 points), and Chase Brown (7.5 points). This marks at least two years in a row where I’ve drafted teams I really liked but have underperformed tremendously. It’s not all my team’s fault, though, as my coaching score of 75.7% was worst in the league this week thanks to solid weeks on the bench from Kenneth Walker (18.3 points), Bhayshul Tuten (14.4 points), and Tetairoa McMillan (13.0 points). Had I set a better lineup, I would have gotten a win. It seems that luck was neutral for me, with a luck factor of +0.00, but was on Rasheid’s side with a +46.62 luck factor.</p>
        </details>
        <details>
          <summary>Courtney's Corner</summary>
          <p>Pistachio Garner has been extremely busy with work, so you may or may not get an additional trivia question this week. I’m also not sure how she intends on handling ties, since as far as I’m aware there were several people who got 2/3 points last week, but nobody got 3/3. However, she is very pleased with the participation, as 8/10 league members answered the primary question (I’m not sure on the bonus questions). Will and Matt E. are the only ones not to have answered the main question. Shame on them. Otherwise, Pistachio Garner made some dank pumpkin oatmeal chocolate chip cookies the other day that are super soft and chewy/doughy, so I’m a big fan of those. It’s not really “fall”, here, though, with highs still 100+. It should start to cool off come October, though. Otherwise, she’s been spending her spare time relaxing by doing puzzles and watching all the Harry Potter movies.</p>
        </details>
        <details>
          <summary>Conclusion</summary>
          <p>Conclusion: Week 2’s $5 prize for being the winning team with the highest scoring bench player goes to Greg for benching Rome Odunze and his 28.3 points. The power rankings still aren’t that exciting, but Greg and Hunter make up the top two slots, followed by Scott, Fadi, Collingwood, and Matt E., while Will, Rasheid, me, and Erik are at the bottom. I’m eagerly awaiting the incoming rage from the fantasypros roster rankings as they get more data from who is ranking well. The biggest changes are for me (7 to 2), Fadi (1 to 7), and Collingwood (6 to 1). The LeagueLegacy power rankings seem to mostly follow points scored, but I’m keeping an eye on them in case they look interesting. As for week 3, we have matchups between Fadi and Rasheid, Greg and Hunter, Matt E. and Will, Scott and Collingwood, and me and Erik. As always, we gotta give it to ARAB BOWL XIII as Rasheid looks to chip away at Fadi’s 7-5 lead. Week 3’s $5 prize will go to the team that starts the highest scoring RB (flex slot included), so fire up them RBs! Smooches, Lenny Da Commish.</p>
        </details>
        <details>
          <summary>Charts</summary>
           <section>
            <div className='chart'>
              <div>
                {images2.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Week 2 image ${idx + 1}`}
                    style={{ maxWidth: '500px', margin: '10px' }}
                  />
                ))}
              </div>
            </div>
          </section>
        </details>
      </details>
      <details>
        <summary>Week 3</summary>
        <details>
          <summary>Intro Remarks</summary>
          <p>Well, gents, week 3 has concluded, and it’s gone better for some of us than others. It’s still early and there’s plenty of time for things to get turned on their head, but maybe that’s just me coping with my 0-3 record and league-worst points scored. I’ve had some bad years in the past but through three weeks, this is probably the worst I’ve ever experienced. I don’t know that I’ve ever been so firmly in last place. Things are truly tragic with a 2-25 all-play record through three weeks. Jesus Christ. I’m definitely looking to shake things up, so send some trade offers my way! Everyone is available. Anyway, week 3 was a good one for most, with an average score of over 108 points. Two of our matchups were extremely close (less than 5 points), two were less close, and one was a complete and utter blowout (guess who). Let’s see how it all went down.</p>
        </details>
        <details>
          <summary>Transaction Review</summary>
          <p>Transaction Review:</p>
          <ul>
            <li>Jalen: Added Jalen Coker (FA) and Tyler Allgeier (FA) and dropped Colston Loveland.</li>
            <li>Scott: Added Wan’Dale Robinson ($0) and Elic Ayomanor ($5) and dropped Caleb Williams and the Rams D.</li>
            <li>Erik: Added Daniel Carlson ($0), the Patriots D ($3), Russell Wilson ($3), and Caleb Williams ($2) and dropped Wil Lutz, the Lions D, Najee Harris, and Russell Wilson. </li>
            <li>Will: Nothing. </li>
            <li>Hunter: Added the Falcons D ($3) and dropped the Falcons D (lol).</li>
            <li>Greg: Added Troy Franklin ($14) and dropped Stefon Diggs and traded Nick Chubb to Collingwood for Chris Godwin.</li>
            <li>Matt E.: Nothing. </li>
            <li>Collingwood: Added Blake Corum ($7), Chris Rodriguez ($7), Kareem Hunt (FA), and Najee Harris (FA) and dropped Chris Rodriguez and Blake Corum. Traded Nick Chubb Chris Godwin to Greg for Nick Chubb.</li>
            <li>Fadi: Added DeAndre Hopkins (FA) and the Bucs D (FA) and dropped the Broncos D. </li>
            <li>Rasheid: Added Jordan Love ($50), Jake Ferguson ($14), Tucker Kraft ($29), and the Seahawks D (FA) and dropped Joe Burrow, Hunter Henry, Evan Engram, and the Vikings D.</li>
          </ul> 
        </details>
        <details>
          <summary>Matchup Review</summary>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4 className='team'>Fadi</h4>
                </div>
                <div>
                  <h4 className='score'>126.02pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Rasheid</h4>
                </div>
                <div>
                  <h4>105.27pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In our matchup of the week, ARAB BOWL XIII, Fadi defeated Rasheid 126.02 – 105.27, giving him an all-time lead in their series of 8-5 while giving them both a 2-1 record this season. Lamar Jackson (33.02) continues to carry Fadi’s team to relevance, but Courtland Sutton (20.8 points), the Bucs D (16.3 points), and Tyreek Hill (13.4 points) had good weeks, too. Nobody really busted, but Breece Hall (7.2 points) wasn’t great. He had a second-best coaching core of 93.5% this week as well as a modest +8.88 luck factor. Rasheid, on the other hand, had a more balanced week with Jordan Mason (23.6 points) leading the charge, but nobody else managed more than 15 except the Seahawks D (17.95 points). Malik Nabers (2.3 points) was completely erased by the Chiefs, Cam Little (4.9 points) was disappointing, and Alvin Kamara (6.1 points) might be cooked. In true Ramlawi fashion, Rasheid left a league season-high 38.2 points on the bench this week mostly thanks to big weeks from Omarion Hampton (21.9 points) and Michael Pittman (16.3 points). This gave him a league-worst coaching score of 73.4% this week, but he did have a slightly negative luck factor of -13.32. Had he set the ideal lineup, he would have gotten the W this week.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Greg</h4>
                </div>
                <div>
                  <h4>112.57pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Hunter</h4>
                </div>
                <div>
                  <h4>112.27pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In our tightest matchup in quite some time, Greg very narrowly defeated Hunter 112.57 – 112.27, giving him a 12-10 lead in their all-time series, but also giving him a 3-0 record this season while bumping Hunter down to 2-1. Josh Allen (29.02 points) was easily Greg’s top scorer, but Puka Nacua (17.3 points) and the Steelers D (16.35 points) also had nice weeks. Not all was sunshine and roses, though, as James Conner (5.2 points) snapped his leg in half, Sam LaPorta (5.3 points) continues to be an afterthought for the Lions, and Saquon Barkley (7.5 points) was proved to be human, after all. Greg did leave some points on the bench, though, thanks to a big week from Garrett Wilson (19.4 points). He was still good for a coaching score of 86.7%, fourth best in the league this week, while also having a big luck factor of +44.40. Hunter’s team was very much feast or famine this week, with Jonathan Taylor (31.3 points) leading the charge with James Cook (19.3 points), Daniel Jones (17.82 points), Amon-Ra St. Brown (17.2 points), and Keenan Allen (16.0 points) positively contributing, but the Falcons D (0.35 points), Zay Flowers (2.3 points), and Ka’imi Fairbairn (2.7 points) all completely shit the bed. However, hunter only left about 11 points on the bench, giving him a coaching score of 91.1%, third best in the league this week. His luck rating was firmly negative, though, at -35.52. Due to the closeness of this matchup, it was inevitable that the loser would get a coaching loss, so Hunter adds one to the tally for the season.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Matt E.</h4>
                </div>
                <div>
                  <h4>115.86pts</h4>
                </div>
              </div>
              <div><h2>VS</h2></div>
              <div>
                <div>
                  <h4>Will</h4>
                </div>
                <div>
                  <h4>118.74pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Next, in our second very close matchup of the week, Will beat Matt E. 118.74 – 115.86, giving him a solid 7-3 lead in their all-time series. This bumps him up to 2-1 and Matt down to 1-2 this year. Will’s team was largely carried by two players: Jalen Hurts (35.04 points) and David Montgomery (28.9 points), who scored over half his team’s points this week. Everyone else was okay at best, but Harold Fannin (4.0 points), Cooper Kupp (4.1 points), and Ja’Marr Chase (6.4 points) were the biggest disappointments. He had a 6th-ranked coaching score of 86.0% this week thanks to decent days from TJ Hockenson (13.4 points) and Jaylen Waddle (12.4 points), but he didn’t need the extra points to beat Matt this week. He had a moderately positive luck factor of +26.64 this week, too. Matt’s team was much more well-rounded, but Mark Andrews (24.1 points) came back to life and Jaxon Smith-Njigba (18.1 points) had himself another nice day. Everyone else was between 10(ish) and 16(ish) points, with the exceptions being Chris Boswell (3.0 points) and Ladd McConkey (6.1 points). Where Matt faltered, though, was leaving Geno Smith (32.06 points) on the bench, which would have easily given him a win. His coaching score of 84.7% was 7th in the league this week while his luck rating of -53.28 was firmly negative.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Scott</h4>
                </div>
                <div>
                  <h4>97.03pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Collingwood</h4>
                </div>
                <div>
                  <h4>83.09pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Next, in our fourth matchup of week 3, Scott defeated Collingwood 97.03 – 83.09, slightly improving his all-time record in their series to 5-9. This gives Scott a much-needed win this season at 1-2, while keeping Collingwood winless at 0-3. Nobody on Scott’s team really popped off, but Nico Collins (18.4 points) salvaged his day with a long TD while Davante Adams (13.1 points) and De’Von Achane (12.6 points) had decent days. The Bills D (2.15 points) was the biggest disappointment for Scott, but Kyle Pitts (5.9 points) and Jared Goff (14.68 points) were underwhelming, too. Starting Cam Skattebo (21.1 points) would have helped Scott’s cause, giving him a 5th-ranked coaching score of 86.3%, but he didn’t need the extra points this week. Maybe this is thanks to his massively positive luck factor of +71.04? Collingwood’s team had a solid (dare I say good?) week, but where he really got boned was by an injury-induced donut from CeeDee Lamb (0.00 points) and a massively negative performance from the Ravens D (-7.05 points). Don’t start defenses against good offenses anymore, kids. However, Chase McLaughlin (21.6 points) and Christian McCaffrey (19.0 points) were his top scorers. Collingwood technically could have had a win this week thanks to his 8th-ranked coaching score of 84.4% due to Baker Mayfield (19.72 points), Kenneth Gainwell (9.1 points), and Marvin Harrison Jr. (5.9 points) outperforming other starters, but this was largely due to CeeDee’s injury donut. I’m going to guess the luck factor doesn’t consider injuries, as Collingwood’s was only -8.88 this week.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Jalen</h4>
                </div>
                <div>
                  <h4>79.35pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Rasheid</h4>
                </div>
                <div>
                  <h4>130.82pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Finally, in the last matchup of week 3, Erik gave me the Ass-Blasting-of-The-Week™, curb stomping me 130.82 – 79.35, giving him an all-time record of 3-2 against me and 2-1 this season. Meanwhile, I remain firmly at 0-3 this year. Erik’s team was led by massive weeks from Caleb Williams (37.12 points) and Jahmyr Gibbs (24.4 points), but Kyren Williams (18.2 points) and DeVonta Smith (16.0 points) had good weeks, too. The Patriots D (2.9 points), Travis Kelce (4.6 points), and Daniel Carlson (4.7 points) were less than stellar, but let’s be honest, Erik didn’t need the extra points this week. He could have had more if he started Quinshon Judkins (16.0 points), which gave him a 1st-ranked coaching score of 96.3% this week. His luck factor was also a purely neutral +0.00. On my end of the matchup, things were not so pretty. Kenneth Walker (17.5 points) and Justin Herbert (16.6 points) were my top scorers while nobody else managed more than 8.1 points. Oof. Chase Brown (4.0 points), Ashton Jeanty (6.3 points), Tetairoa McMillan (6.3 points), and Brian Thomas Jr. (6.5 points) were quite disappointing, but I was never going to win this week, even if I started AJ Brown (19.9 points) and Bill Croskey-Merritt (9.6 points). Nevertheless, I had a 9th-ranked coaching score of 78.1% and a neutral luck factor of +0.00. I’m really not sure how the luck factor is calculated, but Erik scored +29.01% compared to his team’s average this year and +23.01% versus the league average.</p>
        </details>
        <details>
          <summary>Courtney's Corner</summary>
          <p>Not a lot of change for Pistachio Garner, who continues to spend much of her spare time doing puzzles and hasn’t had much time to dedicate to trivia. However, she’s excited for us to go to Portland this weekend to eat lots of yummy food, drink some good beers, and explore a new city we’ve never been to. If anyone has any recommendations, send them our way. She did manage to win a gift card to our favorite little walk-up restaurant, the Beach House. When Fadi visited earlier this year, he ate there three times in one weekend, so safe to say it’s pretty good. So, if anyone ever comes to visit us, we’ll have to take you there to eat. To quote Pistachio Garner herself: “the surf and turf quesadilla is to die for.”</p>
        </details>
        <details>
          <summary>Conclusion</summary>
          <p>Week 3’s $5 prize for starting the highest scoring RB unfortunately goes to Hunter for starting Jonathan Taylor and his 31.3 points. I say unfortunately because he celebrated well before some big-name RBs had even played. The power rankings now have Greg firmly on top, followed by Hunter, Fadi, Matt E., Scott, Will, Rasheid, Erik, and then Collingwood and I firmly at the bottom. I’m patiently awaiting Rasheid’s rage over his #7 power ranking and ROS roster ranking of #5. You’re third from the bottom in league scoring. Maybe you’re overvaluing your own team just a smidge. Anyway, with week 4 ahead, we have matchups between Hunter and Rasheid, Erik and Will, Fadi and Matt E., Greg and Collingwood, and me and Scott. I have half a mind to make myself matchup of the week every week until (if?) I get a win, but I guess this week I’ll give it to Hunter and Rasheid in our Colts-Bowl. Time for the two of you to prove yourselves. Week 4’s $5 prize will go to the highest scoring losing team so maybe I have a chance? LMAO NOT. As a reminder, Court and I are going to Portland this weekend, so I will likely not be as available, but should still be free. Since we don’t get home until Tuesday evening, next week’s writeup will either be late Tuesday or some time Wednesday. TBD. Smooches, Lenny Da Commish</p>
        </details>
        <details>
          <summary>Charts</summary>
           <section>
            <div className='chart'>
              <div>
                {images3.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Week 3 image ${idx + 1}`}
                    style={{ maxWidth: '500px', margin: '10px' }}
                  />
                ))}
              </div>
            </div>
          </section>
        </details>
      </details>
      <details>
        <summary>Week 4</summary>
        <details>
          <summary>Intro Remarks</summary>
          <p>With four weeks of the fantasy season having concluded, we are nearly a quarter of the way done with the season, which is a bit frightening for those of us who aren’t doing so hot. Nevertheless, there are still a whopping ten weeks of play left before the playoffs start, so there’s plenty of time for recovery. We’ve seen hot starts, cold starts, and everything in between, but all that ends up mattering is whether or not you can squeak into the playoffs. With how things are shaping up this year, mid table madness is likely to be as mad as ever. Apologies for being a day late on the writeup, as Court and I only just got home from Portland yesterday evening and I was tired. Week 4 was another good one with two really close matchups, one not so close matchup, and two blowouts. Let’s get into the details.</p>
        </details>
        <details>
          <summary>Transaction Review</summary>
          <p>Transaction Review:</p>
          <ul>
            <li>Jalen: Added Luther Burden ($22), Joey Slye ($0), and Woody Marks (FA) and dropped Tyler Allgeier and Tyler Loop. Traded Chase Brown to Greg for Rome Odunze. Traded Jakobi Meyers and Jacory Croskey-Merritt to Scott for Drake London.</li>
            <li>Scott: Added Zach Ertz ($2) and dropped Kyle Pitts. Traded Drake London to Jalen for Jakobi Meyers and Jacory Croskey-Merritt.</li>
            <li>Erik: Added Hunter Henry (FA) and dropped Zach Ertz and Keon Coleman. </li>
            <li>Will: Nothing. </li>
            <li>Hunter: Added Lions D ($0) and Sterling Shepard (FA) and dropped Falcons D, Travis Hunter, Kayshon Boutte, and Sterling Shepard.</li>
            <li>Greg: Added Ollie Gordon ($0), Dalton Kincaid (FA), and Spencer Shrader (FA) and dropped James Conner, Hollywood Brown, and Jake Bates. Traded Rome Odunze to Jalen for Chase Brown. </li>
            <li>Matt E.: Nothing.</li>
            <li>Collingwood: Added Tory Horton ($8), Tre Tucker ($10), DeAndre Hopkins ($0), and Broncos D (FA) and dropped Dak Prescott, Najee Harris, Ravens D, and Tory Horton. </li>
            <li>Fadi: Added Tyquan Thornton ($3), Brock Purdy ($4), and Texans D (FA) and dropped Bucs D, DeAndre Hopkins, Tyrone Tracy, and Tyreek Hill.</li>
            <li>Rasheid: Dropped Malik Nabers.</li>
          </ul> 
        </details>
        <details>
          <summary>Matchup Review</summary>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4 className='team'>Hunter</h4>
                </div>
                <div>
                  <h4 className='score'>130.08pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Rasheid</h4>
                </div>
                <div>
                  <h4>132.08pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In what I deemed the matchup of the week, Rasheid narrowly bested Hunter 132.08 – 130.63, giving him a 3-1 record on the year and 6-12 all-time record against Hunter while bumping Hunter to 2-2 and 12-6. Rasheid’s team was carried by three players: Jordan Love (32.28 points), Omarion Hampton (25.0 points), and Bucky Irving (23.0 points), who scored over 60% of his team’s points this week. Nobody really busted except Malik Nabers (3.0 points), who tore his ACL, but Ricky Pearsall (6.6 points) had a pretty middling performance. Despite winning, though, Rasheid left a whopping 44.8 points on the bench courtesy of big games from George Pickens (29.4 points), DK Metcalf (21.1 points), and Michael Pittman (12.6 points). This gave him a 9th ranked coaching score of 74.7% this week and a luck factor of +17.76. On the other side of the matchup, Hunter had a much more well-rounded performance, with everyone except Keenan Allen (6.2 points) scoring at least 10. Amon-Ra St. Brown (22.5 points), James Cook (21.0 points), and the Lions D (19.75 points) were his top scorers. Due to his early celebration, the fantasy gods triply cursed Hunter into a loss. First, quite appropriately, with Adonai Mitchell’s boneheaded early celebration fumbling out the back of the endzone, costing Hunter a Danny Dimes TD. Second, with Adonai Mitchell getting called for holding on a long Jonathan Taylor TD. Third, with RJ Harvey having a nice day on the bench. Stop celebrating early, you wumbo. However, Hunter had a coaching score of 91.8% this week, and a luck factor of -62.16</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Erik</h4>
                </div>
                <div>
                  <h4>100.28pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Will</h4>
                </div>
                <div>
                  <h4>95.90pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In our second matchup of week 4, Erik narrowly defeated Will 100.28 – 95.90, moving him to 3-1 on the season and 3-3 all-time against Will while bumping Will to 2-2 and the same 3-3 all-time record. Erik’s team had a modest week, with nobody scoring over 20 points, but Travis Etienne (19.0 points), Jahmyr Gibbs (16.7 points), and Xavier Worthy (14.6 points) were his top scorers. DeVonta Smith (3.9 points) and Daniel Carlson (4.9 points) were his lowest scorers, and he left a decent amount of points on the bench thanks to solid performances from Quinshon Judkins (19.5 points), Jordan Addison (13.4 points), and Hunter Henry (10.9 points), giving him a 7th-ranked coaching score of 80.9% this week. He also had a luck factor of +62.16. Will’s team wasn’t quite able to keep up with Erik this week, but Jalen Hurts (23.4 points), Justin Jefferson (17.6 points), and the Eagles D (17.2 points) were his top performers. Must be nice having the two Eagles that are actually capable of performing. Not that Saquon has been bad, but not as good as expected. However, Will also had some pretty yucky busts this week with David Montgomery (1.2 points), Cooper Kupp (4.6 points), and Ja’Marr Chase (4.8 points) all being massive disappointments. Will could have had a win this week had he started some combination of Zach Charbonnet (11.4 points), Matthew Golden (8.8 points), and Jaylen Waddle (6.3 points), but he failed to do so, giving him a 6th-ranked coaching score of 85.8% this week. He also had a luck factor of -17.76.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Fadi</h4>
                </div>
                <div>
                  <h4>92.48pts</h4>
                </div>
              </div>
              <div><h2>VS</h2></div>
              <div>
                <div>
                  <h4>Matt E.</h4>
                </div>
                <div>
                  <h4>110pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Next up, Matt E. beat Fadi 110.00 – 92.48, giving them both a 2-2 record on the year while improving Matt’s record against Fadi to 6-8 all-time. Matt’s team continues to be carried by his top two running backs, with Josh Jacobs (29.7 points) and Bijan Robinson (26.1 points) scoring over half his team’s points between the two of them this week. Kyler Murray (20.1 points) was his only other player to score over 20 points, while everyone else was okay at best. The Commanders D (0.60 points) nearly dropped a donut and Ladd McConkey (1.6 points) was a massive disappointment. Matt didn’t leave many points on the bench, though, with his 7.5 giving him a top-ranked coaching score of 93.6% this week. His luck factor of +27.80 was also in his favor. Fadi had a bit of a struggle this week with Courtland Sutton (16.6 points) being his only player to score over 15 points. Breece Hall (13.6 points) had a decent week and the Texans D (10.0 points) was solid, but Lamar Jackson (12.68 points) was a massive disappointment thanks to his hammy. However, Fadi’s 5th-ranked coaching score of 87.6% means he didn’t leave enough points on the bench to have gotten him a win with a perfect lineup. However, starting Brock Purdy (21.66 points) and TreVeyon Henderson (11.6 points) would have made it a whole lot closer. His luck factor of -5.56 was slightly out of his favor.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Greg</h4>
                </div>
                <div>
                  <h4>148.36pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Collingwood</h4>
                </div>
                <div>
                  <h4>111.96pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>In our fourth matchup of week 4, Greg gave Collingwood the Ass-Blasting-of-The-Week™, beating him 148.36 – 111.96. This keeps Greg undefeated at 4-0 and Collingwood defeated at 0-4 while also giving Greg a 7-5 edge in their all-time matchup. Puka Nacua (29.5 points) was Greg’s top scorer with Josh Allen (28.86 points) not far behind. Javonte Williams (17.5 points) and Garrett Wilson (17.2 points) had good weeks, too. Only Sam LaPorta (5.4 points) and Chase Brown (8.6 points) scored fewer than 10 for Greg, but he could have scored even more had he started Deebo Samuel (17.1 points) and Dalton Kincaid (9.3 points). His coaching score of 92.3% was 2nd-ranked on the week while his luck factor of +6.66 was slightly in his favor. Despite the loss, this was Collingwood’s highest scoring week, so perhaps things are starting to move in his favor. His team was led by Christian McCaffrey (23.1 points) and his trio of Bucs, with Baker Mayfield (22.86 points), Chase McLaughlin (18.5 points), and Emeka Egbuka (18.1 points) all having nice days. However, that’s where the niceness ends, with nobody else managing more than 7.5 points, including busts from Jameson Williams (4.7 points) and Kareem Hunt (5.2 points). Starting Kenneth Gainwell (28.4 points) and Marvin Harrison Jr (15.6 points) would have helped his cause, but even with a perfect lineup he would have been just shy of Greg’s score. However, this gave him an 8th-ranked coaching score of 76.7% and firmly negative luck factor of -39.96.</p>
          <div className="matchup-box-position">
            <div className="matchup-header">
              <div>
                <div>
                  <h4>Jalen</h4>
                </div>
                <div>
                  <h4>78.62pts</h4>
                </div>
              </div>
              <div>
                <h2>VS</h2>
              </div>
              <div>
                <div>
                  <h4>Scott</h4>
                </div>
                <div>
                  <h4>106.47pts</h4>
                </div>
              </div>
            </div>
          </div>
          <p>Finally, in our last matchup of week 4, Scott beat me 106.47 – 78.62, giving him a 2-2 record and me an 0-4 record. He also continues to chip away at our all-time matchup, now with a 9-14 record against me. He’s 4-1 against me in our last 5 matchups. Scott had a fairly mediocre week, but that’s all it takes to beat me these days. Quentin Johnston (19.8 points) was his top scorer, followed by Jared Goff (16.72 points) and De’Von Achane (16.6 points). Zach Ertz (5.1 points) and Derrick Henry (6.8 points) were disappointing, but it didn’t make a difference against me this week despite Khalil Shakir (15.4 points) and Davante Adams (13.6 points) having solid days on the bench. Scott’s coaching score of 89.6% was 4th-best this week while his luck factor of +33.36 was firmly in his favor. Meanwhile, my team continues to flounder around with no real objective, largely thanks to my poor coaching. Although Ashton Jeanty (32.5 points) had a breakout game, only Rome Odunze (14.9 points) and Justin Herbert (14.52 points) scored more than 12. Everyone else was “meh” at best, with the exception of the Packers D (-7.0 points), Joey Slye (-2.0 points), and AJ Brown (1.7 points), who actively detracted from my team’s success. The biggest flop, though, was leaving Patrick Mahomes (35.3 points), Woody Marks (25.9 points), and Drake London (21.0 points_ on the bench. The 57.78 points I left on the bench were not only the highest mark of the year, but also the highest mark since week 5 of 2023 when Greg left 61.66 points on his bench. Unsurprisingly, this gave me a league-worst coaching score of 57.6% this week. My luck factor was 0.00. I think I broke the luck system with how bad I’ve been.</p>
        </details>
        <details>
          <summary>Courtney's Corner</summary>
          <p>Another week of not a lot of change for Pistachio Garner, but I think she enjoyed our long weekend in Portland, as she desperately needed some time away from work. We spent a ton of time walking around all the neighborhoods, averaging well over ten thousand steps a day. It’s amazing what a difference sidewalks and a condensed layout can do to a town’s walkability. Phoenix would never. Pistachio Garner is taking a much-needed mental health day today before returning to her work craziness tomorrow.</p>
        </details>
        <details>
          <summary>Conclusion</summary>
          <p>Week 4’s $5 prize for highest scoring losing team goes to Hunter, so I guess he gets a prize for cursing himself into a loss. The power rankings haven’t changed a ton, with Greg firmly on top followed by Hunter, Matt E., Fadi, and Scott in spots #2-5, then Rasheid, Erik, Collingwood, Will, and I in the bottom half. Seeing Rasheid’s ROS roster rank of #10 brought more joy to my season than I’ve had at this point, so keep up the overrating your own players. It makes me happy. And with Benson and Bucky hurt, I think #10 is deserved. With week 5 ahead of us, we have matchups between Rasheid and Will, Hunter and Erik, Fadi and Collingwood, Scott and Matt E., and me and Greg. I think I’ll give matchup of the week to Scott and Matt, as they’re both in the top half of power rankings but only 2-2. Week 5’s $5 prize will go to the team that has the most points by their optimal lineup, so no prep needed! Apologies again for the late writeup. I don’t currently have any vacations planned til January, so you all should have my full attention as commish for the remainder of the season. Smooches, Lenny Da Commish.</p>
        </details>
        <details>
          <summary>Charts</summary>
           <section>
            <div className='chart'>
              <div>
                {images4.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Week 4 image ${idx + 1}`}
                    style={{ maxWidth: '500px', margin: '10px' }}
                  />
                ))}
              </div>
            </div>
          </section>
        </details>
      </details>

    </div>
  );
};

export default WeeklyWriteUps;


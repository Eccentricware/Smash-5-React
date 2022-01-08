import React from 'react';
import './App.css';
import Roster from '../../util/Roster';
import Matchup from '../Matchup/Matchup';
import CharacterSelect from '../CharacterSelect/CharacterSelect';
import SharesDisplay from '../SharesDisplay/SharesDisplay';
import Counters from '../Counters/Counters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectMode = this.selectMode.bind(this);
    this.selectOpponent = this.selectOpponent.bind(this);
    this.setChallengedState = this.setChallengedState.bind(this);
    this.randomizer = this.randomizer.bind(this);
    this.declareDefeat = this.declareDefeat.bind(this);
    this.declareVictory = this.declareVictory.bind(this);
    this.nextDisplayMode = this.nextDisplayMode.bind(this);
    this.state = {
      mode: Roster.mode,
      roster: Roster.fighters,
      groups: Roster.groups,
      selected: Roster.fighters.selected,
      chancesOfSelected: Roster.fighters.chancesOfSelected,
      resultWaiting: false,
      isChallenged: false,
      challengeMode: 0,
      opponent: Roster.fighters.opponent,
      mysteryOpponent: Roster.fighters.defaultSelection,
      counters: Roster.fighters.counters,
      maxMetric: 10,
      playMetricTotal: Roster.playMetricTotal,
      playMetricBaseTotal: Roster.playMetricBaseTotal,
      displayModes: ['characterSelect', 'characterDetails'],
      displayModeIndex: 0
    }
  }

  selectMode(mode) {
    Roster.setMode(mode);
    Roster.updatePlayMetrics(Roster.fighters.opponent.keyName, Roster.mode);
    Roster.findMaxMetric();
    this.setState({mode: Roster.mode,
                   maxMetric: Roster.maxMetric});
  }

  selectOpponent(fighterKeyName) {
    Roster.setOpponent(Roster[fighterKeyName]);
    Roster.updatePlayMetrics(Roster.fighters.opponent.keyName, this.state.mode);
    Roster.findMaxMetric();
    Roster.findCounterArray(Roster.fighters.opponent.keyName);
    this.setState({opponent: Roster.fighters.opponent,
                  counters: Roster.fighters.counters,
                  maxMetric: Roster.maxMetric});
  }

  setChallengedState(challengeMode) {
    if (challengeMode === 0) {
     this.setState({isChallenged: false});
   } else if (challengeMode === 1) {
      this.setState({
        isChallenged: true,
        challengeMode: 1,
        opponent: Roster.fighters.defaultSelection
      });
    } else if (challengeMode === 2) {
      this.setState({
        isChallenged: true,
        challengeMode: 2,
        opponent: Roster.fighters.defaultSelection
      });
    }
  }

  randomizer() {
    Roster.randomizeFighter(this.state.opponent.keyName, this.state.mode);
    Roster.updatePlayMetrics(Roster.fighters.opponent.keyName, this.state.mode);
    Roster.findMaxMetric();
    Roster.saveMetrics();
    Roster.updateRosterSelectionChances(Roster.playMetricTotal);
    Roster.findGroupMetrics();
    Roster.findMaxChancesDifference();
    this.setState({
      selected: Roster.fighters.selected,
      chancesOfSelected: Roster.fighters.chancesOfSelected,
      maxMetric: Roster.maxMetric,
      resultWaiting: true
     });
  }

  declareVictory() {
    Roster.declareVictory(this.state.challengeMode);
    if (this.state.isChallenged) {
      this.setState({
        selected: Roster.fighters.selected,
        chancesOfSelected: Roster.fighters.chancesOfSelected,
        resultWaiting: true
      });
    } else {
      this.setState({
        selected: Roster.fighters.defaultSelection,
        chancesOfSelected: Roster.fighters.chancesOfSelected,
        resultWaiting: false
      });
    }
  }

  declareDefeat(challengeMode) {
    Roster.declareDefeat(challengeMode);
    if (this.state.isChallenged) {
      this.setState({
        selected: Roster.fighters.selected,
        chancesOfSelected: Roster.fighters.chancesOfSelected,
        resultWaiting: true
      })
    } else {
      this.setState({
        selected: Roster.fighters.selected,
        chancesOfSelected: Roster.fighters.chancesOfSelected,
        resultWaiting: false
      });
    }
  }

  nextDisplayMode() {
    let displayModeIndex = this.state.displayModeIndex;
    displayModeIndex = (displayModeIndex + 1) % this.state.displayModes.length;
    this.setState({
      displayModeIndex: displayModeIndex,
    });
    if (this.state.displayModes[this.displayModeIndex] === "characterDetails") {
      Roster.sortDetailList('favor');
      Roster.setPreferencePositions();
      Roster.setRosterIntendedChances();
      Roster.findMaxChancesDifference();
    }
  }

  componentWillMount() {

    Roster.fighters.all.forEach(fighter => {
      fetch(`http://localhost:8000/fighter/${fighter.id}/`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${fighter.name} did not load in time.`);
        }
      }, networkError => console.log(networkError.message)
      ).then(fighterData => {
        Roster.handleFighterResponse(fighterData, this.state.mode);
        if (Roster.allFightersLoaded) {
          console.log(Roster.allFightersLoaded);
          Roster.findMaxMetric();
          Roster.updateRosterSelectionChances(Roster.playMetricTotal);
          Roster.findGroupMetrics();
          this.setState({
            roster: Roster.fighters,
            maxMetric: Roster.maxMetric,
            playMetricTotal: Roster.playMetricTotal,
            playMetricBaseTotal: Roster.playMetricBaseTotal
          });
        }
        /*
        fighter.loadStatus(fighterData.preference, fighterData.current_favor, fighterData.champion_rating);
        fighter.matchups['mario'] = fighterData.mario;
        fighter.matchups['donkeyKong'] = fighterData.donkey_kong;
        fighter.matchups['link'] = fighterData.link;
        fighter.matchups['samus'] = fighterData.samus;
        fighter.matchups['darkSamus'] = fighterData.dark_samus;
        fighter.matchups['yoshi'] = fighterData.yoshi;
        fighter.matchups['kirby'] = fighterData.kirby;
        fighter.matchups['fox'] = fighterData.fox;
        fighter.matchups['pikachu'] = fighterData.pikachu;
        fighter.matchups['luigi'] = fighterData.luigi;
        fighter.matchups['ness'] = fighterData.ness;
        fighter.matchups['captainFalcon'] = fighterData.captain_falcon;
        fighter.matchups['jigglypuff'] = fighterData.jigglypuff;
        fighter.matchups['peach'] = fighterData.peach;
        fighter.matchups['daisy'] = fighterData.daisy;
        fighter.matchups['bowser'] = fighterData.bowser;
        fighter.matchups['iceClimbers'] = fighterData.ice_climbers;
        fighter.matchups['sheik'] = fighterData.sheik;
        fighter.matchups['zelda'] = fighterData.zelda;
        fighter.matchups['drMario'] = fighterData.dr_mario;
        fighter.matchups['pichu'] = fighterData.pichu;
        fighter.matchups['falco'] = fighterData.falco;
        fighter.matchups['marth'] = fighterData.marth;
        fighter.matchups['lucina'] = fighterData.lucina;
        fighter.matchups['youngLink'] = fighterData.young_link;
        fighter.matchups['ganondorf'] = fighterData.ganondorf;
        fighter.matchups['mewtwo'] = fighterData.mewtwo;
        fighter.matchups['roy'] = fighterData.roy;
        fighter.matchups['chrom'] = fighterData.chrom;
        fighter.matchups['mrGameAndWatch'] = fighterData.mr_game_and_watch;
        fighter.matchups['metaKnight'] = fighterData.meta_knight;
        fighter.matchups['pit'] = fighterData.pit;
        fighter.matchups['darkPit'] = fighterData.dark_pit;
        fighter.matchups['zeroSuitSamus'] = fighterData.zero_suit_samus;
        fighter.matchups['wario'] = fighterData.wario;
        fighter.matchups['snake'] = fighterData.snake;
        fighter.matchups['ike'] = fighterData.ike;
        fighter.matchups['pokemonTrainer'] = fighterData.pokemon_trainer;
        //fighter.matchups['squirtle'] = fighterData.mario;
        //fighter.matchups['ivysaur'] = fighterData.mario;
        //fighter.matchups['charizard'] = fighterData.mario;
        fighter.matchups['diddyKong'] = fighterData.diddy_kong;
        fighter.matchups['lucas'] = fighterData.lucas;
        fighter.matchups['sonic'] = fighterData.sonic;
        fighter.matchups['kingDedede'] = fighterData.king_dedede;
        fighter.matchups['olimar'] = fighterData.olimar;
        fighter.matchups['lucario'] = fighterData.lucario;
        fighter.matchups['rob'] = fighterData.rob;
        fighter.matchups['toonLink'] = fighterData.toon_link;
        fighter.matchups['wolf'] = fighterData.wolf;
        fighter.matchups['villager'] = fighterData.villager;
        fighter.matchups['megaMan'] = fighterData.mega_man;
        fighter.matchups['wiiFitTrainer'] = fighterData.wii_fit_trainer;
        fighter.matchups['rosalina'] = fighterData.rosalina;
        fighter.matchups['littleMac'] = fighterData.little_mac;
        fighter.matchups['greninja'] = fighterData.greninja;
        fighter.matchups['miiBrawler'] = fighterData.mii_brawler;
        fighter.matchups['miiSwordfighter'] = fighterData.mii_swordfighter;
        fighter.matchups['miiGunner'] = fighterData.mii_gunner;
        fighter.matchups['palutena'] = fighterData.palutena;
        fighter.matchups['pacMan'] = fighterData.pac_man;
        fighter.matchups['tactician'] = fighterData.tactician;
        fighter.matchups['shulk'] = fighterData.shulk;
        fighter.matchups['bowserJr'] = fighterData.bowser_jr;
        fighter.matchups['duckHunt'] = fighterData.duck_hunt;
        fighter.matchups['ryu'] = fighterData.ryu;
        fighter.matchups['ken'] = fighterData.ken;
        fighter.matchups['cloud'] = fighterData.cloud;
        fighter.matchups['corrin'] = fighterData.corrin;
        fighter.matchups['bayonetta'] = fighterData.bayonetta;
        fighter.matchups['inkling'] = fighterData.inkling;
        fighter.matchups['ridley'] = fighterData.ridley;
        fighter.matchups['simon'] = fighterData.simon;
        fighter.matchups['richter'] = fighterData.richter;
        fighter.matchups['kingKRool'] = fighterData.king_k_rool;
        fighter.matchups['isabelle'] = fighterData.isabelle;
        fighter.matchups['incineroar'] = fighterData.incineroar;
        fighter.matchups['piranhaPlant'] = fighterData.piranha_plant;
        fighter.matchups['joker'] = fighterData.joker;
        fighter.matchups['hero'] = fighterData.hero;
        fighter.matchups['banjoAndKazooie'] = fighterData.banjo_and_kazooie;
        fighter.matchups['terry'] = fighterData.terry;
        */
      });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.displayModes[this.state.displayModeIndex] === "characterSelect"
            ?
          <div>
            <CharacterSelect roster={this.state.roster} opponent={this.state.opponent} maxMetric={this.state.maxMetric} />
            <Counters roster={this.state.roster} opponent={this.state.opponent}/>
            <div className="fighter-groups-chances">
              <div className="group-chances-display">Black Hand:</div>
              <div className="group-chances-display">{this.state.groups.blackHand.groupSelectionChances}%</div>
              <div className="group-chances-display">Off Hand:</div>
              <div className="group-chances-display">{this.state.groups.offHand.groupSelectionChances}%</div>
              <div className="group-chances-display">Stragglers:</div>
              <div className="group-chances-display">{
                Number.parseFloat(100 - this.state.groups.blackHand.groupSelectionChances - this.state.groups.offHand.groupSelectionChances).toFixed(2)
              }%</div>
            </div>
          </div>
            :
          null
        }
        {
          this.state.displayModes[this.state.displayModeIndex] === "characterDetails"
            ?
            <div>
              <SharesDisplay roster={this.state.roster} />
              <div className="fighter-groups-chances">
                <div className="group-chances-display">Black Hand:</div>
                <div className="group-chances-display">{this.state.groups.blackHand.groupSelectionChances}%</div>
                <div className="group-chances-display">Off Hand:</div>
                <div className="group-chances-display">{this.state.groups.offHand.groupSelectionChances}%</div>
                <div className="group-chances-display">Stragglers:</div>
                <div className="group-chances-display">{
                  Number.parseFloat(100 - this.state.groups.blackHand.groupSelectionChances - this.state.groups.offHand.groupSelectionChances).toFixed(2)
                }%</div>
            </div>
          </div>
            :
          null
        }
        <Matchup roster={this.state.roster} selected={this.state.selected} opponent={this.state.opponent}
          chancesOfSelected={this.state.chancesOfSelected}
          selectMode={this.selectMode} selectOpponent={this.selectOpponent} setChallengedState={this.setChallengedState} mysteryOpponent={this.state.mysteryOpponent}
          randomizer={this.randomizer} maxMetric={this.state.maxMetric} resultWaiting={this.state.resultWaiting}
          declareVictory={this.declareVictory} declareDefeat={this.declareDefeat}
          nextDisplayMode={this.nextDisplayMode}
        />

      </div>
    );
  }
}

export default App;

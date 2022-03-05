import Images from './Images.js';
import Fighter from './Fighter.js';

const mario = new Fighter(1, "Mario", "mario", "mario", Images.mario, false, null, Images.defaults.mario);
const donkeyKong = new Fighter(2, "Donkey Kong", "donkeyKong", "donkey_kong", Images.donkeyKong, false, null, Images.defaults.donkeyKong);
const link = new Fighter(3, "Link", "link", "link", Images.link, false, null, Images.defaults.link);
const samus = new Fighter(4, "Samus", "samus", "samus", Images.samus, true, "darkSamus", Images.defaults.samus);
const darkSamus = new Fighter(5, "Dark Samus", "darkSamus", "dark_samus", Images.darkSamus, true, "samus", Images.defaults.darkSamus);
const yoshi = new Fighter(6, "Yoshi", "yoshi", "yoshi", Images.yoshi, false, null, Images.defaults.yoshi);
const kirby = new Fighter(7, "Kirby", "kirby", "kirby", Images.kirby, false, null, Images.defaults.kirby);
const fox = new Fighter(8, "Fox", "fox", "fox", Images.fox, false, null, Images.defaults.fox);
const pikachu = new Fighter(9, "Pikachu", "pikachu", "pikachu", Images.pikachu, false, null, Images.defaults.pikachu);
const luigi = new Fighter(10, "Luigi", "luigi", "luigi", Images.luigi, false, null, Images.defaults.luigi);
const ness = new Fighter(11, "Ness", "ness", "ness", Images.ness, false, null, Images.defaults.ness);
const captainFalcon = new Fighter(12, "Captain Falcon", "captainFalcon", "captain_falcon", Images.captainFalcon, false, null, Images.defaults.captainFalcon);
const jigglypuff = new Fighter(13, "Jigglypuff", "jigglypuff", "jigglypuff", Images.jigglypuff, false, null, Images.defaults.jigglypuff);
const peach = new Fighter(14, "Peach", "peach", "peach", Images.peach, true, "daisy", Images.defaults.peach);
const daisy = new Fighter(15, "Daisy", "daisy", "daisy", Images.daisy, true, "peach", Images.defaults.daisy);
const bowser = new Fighter(16, "Bowser", "bowser", "bowser", Images.bowser, false, null, Images.defaults.bowser);
const iceClimbers = new Fighter(17, "Ice Climbers", "iceClimbers", "ice_climbers", Images.iceClimbers, false, null, Images.defaults.iceClimbers);
const sheik = new Fighter(18, "Sheik", "sheik", "sheik", Images.sheik, false, null, Images.defaults.sheik);
const zelda = new Fighter(19, "Zelda", "zelda", "zelda", Images.zelda, false, null, Images.defaults.zelda);
const drMario = new Fighter(20, "Dr Mario", "drMario", "dr_mario", Images.drMario, false, null, Images.defaults.drMario);
const pichu = new Fighter(21, "Pichu", "pichu", "pichu", Images.pichu, false, null, Images.defaults.pichu);
const falco = new Fighter(22, "Falco", "falco", "falco", Images.falco, false, null, Images.defaults.falco);
const marth = new Fighter(23, "Marth", "marth", "marth", Images.marth, true, "lucina", Images.defaults.marth);
const lucina = new Fighter(24, "Lucina", "lucina", "lucina", Images.lucina, true, "marth", Images.defaults.lucina);
const youngLink = new Fighter(25, "Young Link", "youngLink", "young_link", Images.youngLink, false, null, Images.defaults.youngLink);
const ganondorf = new Fighter(26, "Ganondorf", "ganondorf", "ganondorf", Images.ganondorf, false, null, Images.defaults.ganondorf);
const mewtwo = new Fighter(27, "Mewtwo", "mewtwo", "mewtwo", Images.mewtwo, false, null, Images.defaults.mewtwo);
const roy = new Fighter(28, "Roy", "roy", "roy", Images.roy, false, null, Images.defaults.roy);
const chrom = new Fighter(29, "Chrom", "chrom", "chrom", Images.chrom, false, null, Images.defaults.chrom);
const mrGameAndWatch = new Fighter(30, "Mr Game & Watch", "mrGameAndWatch", "mr_game_and_watch", Images.mrGameAndWatch, false, null, Images.defaults.mrGameAndWatch);
const metaKnight = new Fighter(31, "Meta Knight", "metaKnight", "meta_knight", Images.metaKnight, false, null, Images.defaults.metaKnight);
const pit = new Fighter(32, "Pit", "pit", "pit", Images.pit, true, "darkPit", Images.defaults.pit);
const darkPit = new Fighter(33, "Dark Pit", "darkPit", "dark_pit", Images.darkPit, true, "pit", Images.defaults.darkPit);
const zeroSuitSamus = new Fighter(34, "Zero Suit Samus", "zeroSuitSamus", "zero_suit_samus", Images.zeroSuitSamus, false, null, Images.defaults.zeroSuitSamus);
const wario = new Fighter(35, "Wario", "wario", "wario", Images.wario, false, null, Images.defaults.wario);
const snake = new Fighter(36, "Snake", "snake", "snake", Images.snake, false, null, Images.defaults.snake);
const ike = new Fighter(37, "Ike", "ike", "ike", Images.ike, false, null, Images.defaults.ike);
const pokemonTrainer = new Fighter(77, "Pokemon Trainer", "pokemonTrainer", "pokemon_trainer", Images.pokemonTrainer, false, null, Images.defaults.pokemonTrainer);
const diddyKong = new Fighter(41, "Diddy Kong", "diddyKong", "diddy_kong", Images.diddyKong, false, null, Images.defaults.diddyKong);
const lucas = new Fighter(42, "Lucas", "lucas", "lucas", Images.lucas, false, null, Images.defaults.lucas);
const sonic = new Fighter(43, "Sonic", "sonic", "sonic", Images.sonic, false, null, Images.defaults.sonic);
const kingDedede = new Fighter(44, "King Dedede", "kingDedede", "king_dedede", Images.kingDedede, false, null, Images.defaults.kingDedede);
const olimar = new Fighter(45, "Olimar", "olimar", "olimar", Images.olimar, false, null, Images.defaults.olimar);
const lucario = new Fighter(46, "Lucario", "lucario", "lucario", Images.lucario, false, null, Images.defaults.lucario);
const rob = new Fighter(47, "R.O.B.", "rob", "rob", Images.rob, false, null, Images.defaults.rob);
const toonLink = new Fighter(48, "Toon Link", "toonLink", "toon_link", Images.toonLink, false, null, Images.defaults.toonLink);
const wolf = new Fighter(49, "Wolf", "wolf", "wolf", Images.wolf, false, null, Images.defaults.wolf);
const villager = new Fighter(50, "Villager", "villager", "villager", Images.villager, false, null, Images.defaults.villager);
const megaMan = new Fighter(51, "Mega Man", "megaMan", "mega_man", Images.megaMan, false, null, Images.defaults.megaMan);
const wiiFitTrainer = new Fighter(52, "Wii Fit Trainer", "wiiFitTrainer", "wii_fit_trainer", Images.wiiFitTrainer, false, null, Images.defaults.wiiFitTrainer);
const rosalina = new Fighter(53, "Rosalina & Luma", "rosalina", "rosalina", Images.rosalina, false, null, Images.defaults.rosalina);
const littleMac = new Fighter(54, "Little Mac", "littleMac", "little_mac", Images.littleMac, false, null, Images.defaults.littleMac);
const greninja = new Fighter(55, "Greninja", "greninja", "greninja", Images.greninja, false, null, Images.defaults.greninja);
const palutena = new Fighter(59, "Palutena", "palutena", "palutena", Images.palutena, false, null, Images.defaults.palutena);
const pacMan = new Fighter(60, "Pac-Man", "pacMan", "pac_man", Images.pacMan, false, null, Images.defaults.pacMan);
const tactician = new Fighter(61, "Tactician", "tactician", "tactician", Images.tactician, false, null, Images.defaults.tactician);
const shulk = new Fighter(62, "Shulk", "shulk", "shulk", Images.shulk, false, null, Images.defaults.shulk);
const bowserJr = new Fighter(63, "Bowser Jr", "bowserJr", "bowser_jr", Images.bowserJr, false, null, Images.defaults.bowserJr);
const duckHunt = new Fighter(64, "Duck Hunt", "duckHunt", "duck_hunt", Images.duckHunt, false, null, Images.defaults.duckHunt);
const ryu = new Fighter(65, "Ryu", "ryu", "ryu", Images.ryu, true, "ken", Images.defaults.ryu);
const ken = new Fighter(66, "Ken", "ken", "ken", Images.ken, true, "ryu", Images.defaults.ken);
const cloud = new Fighter(67, "Cloud", "cloud", "cloud", Images.cloud, false, null, Images.defaults.cloud);
const corrin = new Fighter(68, "Corrin", "corrin", "corrin", Images.corrin, false, null, Images.defaults.corrin);
const bayonetta = new Fighter(69, "Bayonetta", "bayonetta", "bayonetta", Images.bayonetta, false, null, Images.defaults.bayonetta);
const inkling = new Fighter(70, "Inkling", "inkling", "inkling", Images.inkling, false, null, Images.defaults.inkling);
const ridley = new Fighter(71, "Ridley", "ridley", "ridley", Images.ridley, false, null, Images.defaults.ridley);
const simon = new Fighter(72, "Simon", "simon", "simon", Images.simon, true, "richter", Images.defaults.simon);
const richter = new Fighter(73, "Richter", "richter", "richter", Images.richter, true, "simon", Images.defaults.richter);
const kingKRool = new Fighter(74, "King K Rool", "kingKRool", "king_k_rool", Images.kingKRool, false, null, Images.defaults.kingKRool);
const isabelle = new Fighter(75, "Isabelle", "isabelle", "isabelle", Images.isabelle, false, null, Images.defaults.isabelle);
const incineroar = new Fighter(76, "Incineroar", "incineroar", "incineroar", Images.incineroar, false, null, Images.defaults.incineroar);
const piranhaPlant = new Fighter(78, "Piranha Plant", "piranhaPlant", "piranha_plant", Images.piranhaPlant, false, null, Images.defaults.piranhaPlant);
const joker = new Fighter(79, "Joker", "joker", "joker", Images.joker, false, null, Images.defaults.joker);
const hero = new Fighter(80, "Hero", "hero", "hero", Images.hero, false, null, Images.defaults.hero);
const banjoAndKazooie = new Fighter(81, "Banjo & Kazooie", "banjoAndKazooie", "banjo_and_kazooie", Images.banjoAndKazooie, false, null, Images.defaults.banjoAndKazooie);
const terry = new Fighter(82, "Terry", "terry", "terry", Images.terry, false, null, Images.defaults.terry);
const byleth = new Fighter(83, "Byleth", "byleth", "byleth", Images.byleth, false, null, Images.defaults.byleth);
const minMin = new Fighter(84, "Min Min", 'minMin', 'minMin', Images.minMin, false, null, Images.defaults.minMin);
const steve = new Fighter(85, "Steve", "steve", 'steve', Images.steve, false, null, Images.defaults.steve);
const sephiroth = new Fighter(86, "Sephiroth", "sephiroth", 'sephiroth', Images.sephiroth, false, null, Images.defaults.sephiroth);
const pyraAndMythra = new Fighter(87, "Pyra and Mythra", "pyraAndMythra", "pyra_and_mythra", Images.pyraAndMythra, false, null, Images.defaults.pyraAndMythra);
const kazuya = new Fighter(88, "Kazuya", "kazuya", "kazuya", Images.kazuya, false, null, Images.defaults.kazuya);
const sora = new Fighter(89, "Sora", "sora", "sora", Images.sora, false, null, Images.defaults.sora);
const miiBrawler = new Fighter(56, "Mii Brawler", "miiBrawler", "mii_brawler", Images.miiBrawler, false, null, Images.defaults.miiBrawler);
const miiSwordfighter = new Fighter(57, "Mii Swordfighter", "miiSwordfighter", "mii_swordfighter", Images.miiSwordfighter, false, null, Images.defaults.miiSwordfighter);
const miiGunner = new Fighter(58, "Mii Gunner", "miiGunner", "mii_gunner", Images.miiGunner, false, null, Images.defaults.miiGunner);
const defaultSelection = new Fighter(0, "", "defaultSelection", "defaultSelection", Images.randomImg, false, null, Images.defaults.defaultSelection);
const defaultSelection2 = new Fighter(0, "", "defaultSelection2", "defaultSelection2", Images.randomImg, false, null, Images.defaults.defaultSelection);
const defaultSelection3 = new Fighter(0, "", "defaultSelection3", "defaultSelection3", Images.randomImg, false, null, Images.defaults.defaultSelection);
const defaultSelection4 = new Fighter(0, "", "defaultSelection4", "defaultSelection4", Images.randomImg, false, null, Images.defaults.defaultSelection);
const defaultSelection5 = new Fighter(0, "", "defaultSelection5", "defaultSelection5", Images.randomImg, false, null, Images.defaults.defaultSelection);
const defaultOpponent = new Fighter(0, "Default Opponent", "defaultOpponent", "defaultOpponent", Images.defaultImg, false, null, Images.defaults.defaultOpponent);
//const squirtle = new Fighter(38, "Squirtle", "squirtle", "squirtle", defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg);
//const ivysaur = new Fighter(39, "Ivysaur", "ivysaur", "ivysaur", defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg);
//const charizard = new Fighter(40, "Charizard", "charizard", "charizard", defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg);
const Roster = {
  fighters: {
    all: [mario, donkeyKong, link, samus, darkSamus, yoshi, kirby, fox, pikachu, luigi, ness, captainFalcon,
          jigglypuff, peach, daisy, bowser, iceClimbers, sheik, zelda, drMario, pichu, falco, marth, lucina,
          youngLink, ganondorf, mewtwo, roy, chrom, mrGameAndWatch, metaKnight, pit, darkPit, zeroSuitSamus, wario, snake,
          ike, pokemonTrainer, diddyKong, lucas, sonic, kingDedede, olimar, lucario, rob, toonLink, wolf, villager,
          megaMan, wiiFitTrainer, rosalina, littleMac, greninja, palutena, pacMan, tactician, shulk, bowserJr, duckHunt, ryu,
          ken, cloud, corrin, bayonetta, inkling, ridley, simon, richter, kingKRool, isabelle, incineroar, piranhaPlant,
          joker, hero, banjoAndKazooie, terry, byleth, minMin, steve, sephiroth, pyraAndMythra, kazuya, sora, miiBrawler, miiSwordfighter, miiGunner],
    row1: [mario, donkeyKong, link, samus, darkSamus, yoshi, kirby, fox, pikachu, luigi, ness, captainFalcon, jigglypuff],
    row2: [peach, daisy, bowser, iceClimbers, sheik, zelda, drMario, pichu, falco, marth, lucina, youngLink, ganondorf],
    row3: [mewtwo, roy, chrom, mrGameAndWatch, metaKnight, pit, darkPit, zeroSuitSamus, wario, snake, ike, pokemonTrainer, diddyKong],
    row4: [lucas, sonic, kingDedede, olimar, lucario, rob, toonLink, wolf, villager, megaMan, wiiFitTrainer, rosalina, littleMac],
    row5: [greninja, palutena, pacMan, tactician, shulk, bowserJr, duckHunt, ryu, ken, cloud, corrin, bayonetta, inkling],
    row6: [ridley, simon, richter, kingKRool, isabelle, incineroar, piranhaPlant, joker, hero, banjoAndKazooie, terry, byleth, minMin],
    row7: [steve, sephiroth, pyraAndMythra, kazuya, sora, miiBrawler, miiSwordfighter, miiGunner],
    selected: defaultSelection,
    chancesOfSelected: 100,
    fighterData: [],
    fighterKeyNameToIndexLibrary: {},
    fighterDataLoaded: false,
    squadSelected: [],
    opponent: defaultOpponent,
    counters: [],
    detailList: [],
    defaultSelection: defaultSelection,
    defaultSelection2: defaultSelection2,
    defaultSelection3: defaultSelection3,
    defaultSelection4: defaultSelection4,
    defaultSelection5: defaultSelection5,
    defaultOpponent: defaultOpponent
  },
  groups: {
    blackHand: {
      fighters: [megaMan, inkling, wolf, link, daisy, peach],
      groupRollingFavor: 0,
      groupSelectionChances: 0
    },
    offHand: {
      fighters: [byleth, miiSwordfighter, minMin, mario, lucina],
      groupRollingFavor: 0,
      groupSelectionChances: 0
    }
  },
  /*teams: [
    {teamName: "Heroes", fighters: "mario", "donkeyKong", "link", "samus", "yoshi", "kirby", "fox", "pikachu", "luigi", "ness", "captainFalcon", "jigglypuff", "peach", "daisy",
      "iceClimbers", "sheik", "zelda", "drMario", "pichu", "falco", "marth", "lucina", "youngLik", "roy", "chrom", "mrGameAndWatch", "metaKnight", "pit", "zeroSuitSamus", "snake", "ike",
      "pokemonTrainer", "diddyKong", "lucas", "sonic", "olimar", "lucario", "rob", "toonLink", "villager", "megaMan", "wiiFitTrainer", "rosalina", "littleMac", "greninja", "palutena",
      "pacMan", "tactician", "shulk", "ryu", "ken", "cloud", "corrin", "bayonetta", "inkling", "simon", "richter", "isabelle", "incineroar", "miiBrawler", "miiSwordfighter", "miiGunner"
    },
    {teamName: "Villains", fighters: "donkeyKong", "darkSamus", "bowser", "ganondorf", "mewtwo", "darkPit", "wario", "kingDedede", "wolf", "bowserJr", "duckHunt", "ridley", "kingKRool",
      "piranhaPlant"
    },
    {teamName: "Spikers", fighters: "mario", "donkeyKong", "link", "samus", "darkSamus", "yoshi", "pikachu", "luigi", "captainFalcon", "zelda", "drMario", "pichu", "falco", "marth",
      "lucina", "ganondorf", "mewtwo", "roy", "chrom", "pit", "darkPit", "zeroSuitSamus", "snake", "ike", "pokemonTrainer", "diddyKong", "lucas", "sonic", "kingDedede", "olimar", "rob",
      "wolf", "villager", "megaMan", "wiiFitTrainer", "rosalina", "palutena", "tactician", "shulk", "duckHunt", "ryu", "ken", "cloud", "inkling", "kingKRool", "isabelle", "piranhaPlant",
      "miiBrawler", "miiGunner"
    }
  ],*/
  mario: mario,
  donkeyKong: donkeyKong,
  link: link,
  samus: samus,
  darkSamus: darkSamus,
  yoshi: yoshi,
  kirby: kirby,
  fox: fox,
  pikachu: pikachu,
  luigi: luigi,
  ness: ness,
  captainFalcon: captainFalcon,
  jigglypuff: jigglypuff,
  peach: peach,
  daisy: daisy,
  iceClimbers: iceClimbers,
  pichu: pichu,
  youngLink: youngLink,
  chrom: chrom,
  snake: snake,
  pokemonTrainer: pokemonTrainer,
  wolf: wolf,
  ken: ken,
  inkling: inkling,
  ridley: ridley,
  simon: simon,
  richter: richter,
  kingKRool: kingKRool,
  isabelle: isabelle,
  incineroar: incineroar,
  bowser: bowser,
  rosalina: rosalina,
  bowserJr: bowserJr,
  wario: wario,
  diddyKong: diddyKong,
  mrGameAndWatch: mrGameAndWatch,
  littleMac: littleMac,
  zelda: zelda,
  sheik: sheik,
  ganondorf: ganondorf,
  toonLink: toonLink,
  zeroSuitSamus: zeroSuitSamus,
  pit: pit,
  palutena: palutena,
  marth: marth,
  ike: ike,
  tactician: tactician,
  duckHunt: duckHunt,
  kingDedede: kingDedede,
  metaKnight: metaKnight,
  falco: falco,
  //charizard: charizard,
  lucario: lucario,
  greninja: greninja,
  rob: rob,
  villager: villager,
  olimar: olimar,
  wiiFitTrainer: wiiFitTrainer,
  shulk: shulk,
  drMario: drMario,
  darkPit: darkPit,
  lucina: lucina,
  pacMan: pacMan,
  megaMan: megaMan,
  sonic: sonic,
  mewtwo: mewtwo,
  lucas: lucas,
  roy: roy,
  ryu: ryu,
  cloud: cloud,
  corrin: corrin,
  bayonetta: bayonetta,
  piranhaPlant: piranhaPlant,
  joker: joker,
  hero: hero,
  banjoAndKazooie: banjoAndKazooie,
  terry: terry,
  byleth: byleth,
  minMin: minMin,
  steve: steve,
  sephiroth: sephiroth,
  pyraAndMythra: pyraAndMythra,
  kazuya: kazuya,
  sora: sora,
  miiSwordfighter: miiSwordfighter,
  miiBrawler: miiBrawler,
  miiGunner: miiGunner,
  defaultSelection: defaultSelection,
  defaultSelection2: defaultSelection2,
  defaultSelection3: defaultSelection3,
  defaultSelection4: defaultSelection4,
  defaultSelection5: defaultSelection5,
  defaultOpponent: defaultOpponent,
  mode: "favoredRandom",
  counterpick: false,
  maxMetric: 10,
  playMetricBaseTotal: 0,
  playMetricTotal: 0,

  setMode(mode) {
    this.mode = mode;
    console.log(`Mode changed to ${mode}`);
  },

  setOpponent(fighter) {
    this.fighters.opponent = fighter;
  },

  updateFightersLoadedCount() {
    this.fighters.fightersLoaded++;
  },

  handleFighterResponse(fighter, mode) {
    console.log(`Loading ${fighter.name}`);
    this.fighters.fighterData.push(fighter);
    console.log(this.fighters.fighterData);
    this.fighters.fighterKeyNameToIndexLibrary[fighter.name] = this.fighters.fighterData.length - 1;
    console.log(this.fighters.fighterKeyNameToIndexLibrary);
    if (fighter.key_name) {
      this[fighter.key_name].loadStatus(fighter.preference, fighter.current_favor, fighter.champion_rating);
    }
    console.log(`There are ${this.fighters.all.length} fighters total`);
    console.log(`There are ${this.fighters.fighterData.length} fighters loaded`);
    if (this.fighters.fighterData.length === this.fighters.all.length) {
      this.allFightersLoaded = true;
      this.updatePlayMetrics(this.fighters.opponent.KeyName, mode);
    }
  },

  updatePlayMetrics(opponentKeyName, mode) {
    this.fighters.all.forEach(fighter => {
      fighter.updatePlayMetric(opponentKeyName, mode);
    });
    this.playMetricTotal = this.findPlayMetricTotal();
  },

  findGroupMetrics() {
    this.groups.blackHand.groupRollingFavor = 0;
    this.groups.offHand.groupRollingFavor = 0;
    this.groups.blackHand.fighters.forEach(fighter => {
      console.log(`Adding ${fighter.name}'s ${fighter.rollingFavor} to the total of ${this.groups.blackHand.groupRollingFavor}`);
      this.groups.blackHand.groupRollingFavor += fighter.rollingFavor;
    });
    this.groups.blackHand.groupSelectionChances = Number.parseFloat((this.groups.blackHand.groupRollingFavor / this.playMetricTotal) * 100).toFixed(2);
    this.groups.offHand.fighters.forEach(fighter => {
      this.groups.offHand.groupRollingFavor += fighter.rollingFavor;
    });
    this.groups.offHand.groupSelectionChances = Number.parseFloat((this.groups.offHand.groupRollingFavor / this.playMetricTotal) * 100).toFixed(2);
  },

  updateRosterSelectionChances(totalRosterFavor) {
    for (let i=0; i<this.fighters.all.length; i++) {
      this.fighters.all[i].updateSelectionChances(totalRosterFavor);
    }
    //this.playMetricTotal = this.findPlayMetricTotal();
  },

  addFighterBaseFavor(fighter) {
    this.playMetricBaseTotal += fighter.favor;
  },

  findPlayMetricTotal() {
    let playMetricTotal = 0;
    this.fighters.all.forEach(fighter => {
      playMetricTotal += fighter.playMetric;
    });
    return playMetricTotal;
  },

  findMaxMetric() {
    let maxMetric = 0;
    this.fighters.all.forEach(fighter => {
      if (fighter.playMetric > maxMetric) {
        maxMetric = fighter.playMetric;
      }
    });
    this.maxMetric = maxMetric;
  },

  randomizeFighter(opponentKeyName, mode) {
    this.updatePlayMetrics(opponentKeyName, mode);
    let randomNumber = Math.random() * this.findPlayMetricTotal();
    let runningMetric = 0;
    let selected;
    let i=0;
    while (runningMetric < randomNumber) {
      selected = this.fighters.all[i];
      runningMetric += this.fighters.all[i].playMetric;
      i++;
    }
    this.fighters.selected = selected;
    this.fighters.chancesOfSelected = this.fighters.selected.selectionChances;
    this.fighters.all.forEach(fighter => {
      fighter.favorUp();
    });
    this.fighters.selected.resetFavor();
    if (this.fighters.selected.hasEchoPartner) {
      this[this.fighters.selected.echoPartner].resetFavor();
    }
    this.playMetricTotal = this.findPlayMetricTotal();
  },

  saveMetrics() {
    this.fighters.all.forEach(fighter => {
      fetch(`http://localhost:8000/fighter/${fighter.id}/`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({"current_favor": fighter.rollingFavor})
      });
    })
  },

  declareVictory(challengeMode) {
    if (challengeMode === 1) {
      this.fighters.selected.increaseChampionRating(2);
    } else if (challengeMode === 2) {
      this.fighters.selected.increaseChampionRating(1);
    } else {
      this.fighters.selected.increaseChampionRating(1);
      this.fighters.selected = defaultSelection;
      this.fighters.chancesOfSelected = 100;
    }
  },

  declareDefeat(isChallenged) {
    if (isChallenged) {
      this.fighters.selected.decreaseChampionRating(isChallenged);
    } else {
      this.fighters.selected.decreaseChampionRating(isChallenged);
      this.fighters.selected = defaultSelection;
      this.fighters.chancesOfSelected = 100;
    }
  },

  findCounterArray(fighter) {
    this.fighters.counters = [];
    if (this.fighters.opponent !== this.fighters.defaultOpponent) {
      let tempArray = this.fighters.all.slice(0);
      for (let i=0; i<9; i++) {
        let counterPick;
        let counterRating = 0;
        for (let j=0; j<tempArray.length; j++) {
          if (tempArray[j].matchups[fighter] > counterRating) {
            counterPick = tempArray[j];
            counterRating = tempArray[j].matchups[fighter];
          }
        }
        this.fighters.counters.push(counterPick);
        tempArray.splice(tempArray.indexOf(counterPick), 1);
      }
    }
  },

  sortDetailList(attribute) {
    let tempRoster = [];
    let cummulativeFavor = 0;
    this.fighters.detailList = [];
    this.fighters.all.forEach(fighter => {
      tempRoster.push(fighter);
      console.log(fighter);
    });
    while (tempRoster.length > 0) {
      let highestAttributeIndex = 0;
      let highestAttributeValue = tempRoster[0][attribute];
      console.log(tempRoster[0][attribute]);
      for (let tempRosterIndex = 0; tempRosterIndex < tempRoster.length; tempRosterIndex++) {
        if (tempRoster[tempRosterIndex][attribute] > tempRoster[highestAttributeIndex][attribute]) {
          highestAttributeIndex = tempRosterIndex;
          highestAttributeValue = tempRoster[tempRosterIndex][attribute];
        }
      }
      cummulativeFavor += tempRoster[highestAttributeIndex].favor;
      tempRoster[highestAttributeIndex].cummulativeFavor = cummulativeFavor;
      this.fighters.detailList.push(tempRoster[highestAttributeIndex]);
      tempRoster.splice(highestAttributeIndex, 1);
    }
  },

  setPreferencePositions() {
    for (let detailListPosition = 0; detailListPosition < this.fighters.detailList.length; detailListPosition++) {
      this.fighters.detailList[detailListPosition].setPreferencePosition(detailListPosition);
    }
  },

  setRosterIntendedChances() {
    let rosterTotalPreference = 0;
    this.fighters.all.forEach(fighter => {
      rosterTotalPreference += fighter.favor;
    });
    this.fighters.all.forEach(fighter => {
      fighter.setIntendedChances(fighter.favor/rosterTotalPreference*100);
    });
  },

  findMaxChancesDifference() {
    let maxChancesDifference = 0;
    let maxChances = 0;
    let minChances = 0;
    this.fighters.detailList.forEach(fighter => {
      if (Math.abs(fighter.selectionChances - fighter.intendedChances) > maxChancesDifference) {
        maxChancesDifference = Math.abs(fighter.selectionChances - fighter.intendedChances);
      }
      if (Math.abs(fighter.selectionChances - fighter.intendedChances) > maxChances) {
        maxChances = Math.abs(fighter.selectionChances - fighter.intendedChances);
      }
      if (Math.abs(fighter.selectionChances - fighter.intendedChances) < minChances) {
        minChances = Math.abs(fighter.selectionChances - fighter.intendedChances);
      }
    });
    this.fighters.maxChancesDifference = maxChancesDifference;
    this.fighters.maxChances = maxChances;
    this.fighters.minChances = minChances;
  }
};

export default Roster;

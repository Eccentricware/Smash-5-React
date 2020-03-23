class Fighter {
  constructor(id, name, keyName, pythonKeyName) {
    this._id = id;
    this._name = name;
    this._keyName = keyName;
    this._pythonKeyName = pythonKeyName;
    this._matchups = {};
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get keyName() {
    return this._keyName;
  }

  get pythonKeyName() {
    return this._pythonKeyName;
  }

  get matchups() {
    return this._matchups;
  }

  populateMatchups(counterLibrary) {
    this._matchups = counterLibrary;
  }

  submitMatchups() {
    fetch(`http://localhost:8000/fighter/${this.id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(this.matchups)
    }).then(response => {
      if (response.ok) {
        console.log(`${this.name} matchups successfully submitted!`);
      } else {
        console.log(`There was an error submitting ${this.name}'s matchups!`);
      }
    });
  }
}

const mario = new Fighter(1, "Mario", "mario", "mario");
const donkeyKong = new Fighter(2, "Donkey Kong", "donkeyKong", "donkey_kong");
const link = new Fighter(3, "Link", "link", "link");
const samus = new Fighter(4, "Samus", "samus", "samus");
const darkSamus = new Fighter(5, "Dark Samus", "darkSamus", "dark_samus");
const yoshi = new Fighter(6, "Yoshi", "yoshi", "yoshi");
const kirby = new Fighter(7, "Kirby", "kirby", "kirby");
const fox = new Fighter(8, "Fox", "fox", "fox");
const pikachu = new Fighter(9, "Pikachu", "pikachu", "pikachu");
const luigi = new Fighter(10, "Luigi", "luigi", "luigi");
const ness = new Fighter(11, "Ness", "ness", "ness");
const captainFalcon = new Fighter(12, "Captain Falcon", "captainFalcon", "captain_falcon");
const jigglypuff = new Fighter(13, "Jigglypuff", "jigglypuff", "jigglypuff");
const peach = new Fighter(14, "Peach", "peach", "peach");
const daisy = new Fighter(15, "Daisy", "daisy", "daisy");
const bowser = new Fighter(16, "Bowser", "bowser", "bowser");
const iceClimbers = new Fighter(17, "Ice Climbers", "iceClimbers", "ice_climbers");
const sheik = new Fighter(18, "Sheik", "sheik", "sheik");
const zelda = new Fighter(19, "Zelda", "zelda", "zelda");
const drMario = new Fighter(20, "Dr Mario", "drMario", "dr_mario");
const pichu = new Fighter(21, "Pichu", "pichu", "pichu");
const falco = new Fighter(22, "Falco", "falco", "falco");
const marth = new Fighter(23, "Marth", "marth", "marth");
const lucina = new Fighter(24, "Lucina", "lucina", "lucina");
const youngLink = new Fighter(25, "Young Link", "youngLink", "young_link");
const ganondorf = new Fighter(26, "Ganondorf", "ganondorf", "ganondorf");
const mewtwo = new Fighter(27, "Mewtwo", "mewtwo", "mewtwo");
const roy = new Fighter(28, "Roy", "roy", "roy");
const chrom = new Fighter(29, "Chrom", "chrom", "chrom");
const mrGameAndWatch = new Fighter(30, "Mr Game & Watch", "mrGameAndWatch", "mr_game_and_watch");
const metaKnight = new Fighter(31, "Meta Knight", "metaKnight", "meta_knight");
const pit = new Fighter(32, "Pit", "pit", "pit");
const darkPit = new Fighter(33, "Dark Pit", "darkPit", "dark_pit");
const zeroSuitSamus = new Fighter(34, "Zero Suit Samus", "zeroSuitSamus", "zero_suit_samus");
const wario = new Fighter(35, "Wario", "wario", "wario");
const snake = new Fighter(36, "Snake", "snake", "snake");
const ike = new Fighter(37, "Ike", "ike", "ike");
const pokemonTrainer = new Fighter(77, "Pokemon Trainer", "pokemonTrainer", "pokemon_trainer")
const squirtle = new Fighter(38, "Squirtle", "squirtle", "squirtle");
const ivysaur = new Fighter(39, "Ivysaur", "ivysaur", "ivysaur");
const charizard = new Fighter(40, "Charizard", "charizard", "charizard");
const diddyKong = new Fighter(41, "Diddy Kong", "diddyKong", "diddy_kong");
const lucas = new Fighter(42, "Lucas", "lucas", "lucas");
const sonic = new Fighter(43, "Sonic", "sonic", "sonic");
const kingDedede = new Fighter(44, "King Dedede", "kingDedede", "king_dedede");
const olimar = new Fighter(45, "Olimar", "olimar", "olimar");
const lucario = new Fighter(46, "Lucario", "lucario", "lucario");
const rob = new Fighter(47, "R.O.B.", "rob", "rob");
const toonLink = new Fighter(48, "Toon Link", "toonLink", "toon_link");
const wolf = new Fighter(49, "Wolf", "wolf", "wolf");
const villager = new Fighter(50, "Villager", "villager", "villager");
const megaMan = new Fighter(51, "Mega Man", "megaMan", "mega_man");
const wiiFitTrainer = new Fighter(52, "Wii Fit Trainer", "wiiFitTrainer", "wii_fit_trainer");
const rosalina = new Fighter(53, "Rosalina & Luma", "rosalina", "rosalina");
const littleMac = new Fighter(54, "Little Mac", "littleMac", "little_mac");
const greninja = new Fighter(55, "Greninja", "greninja", "greninja");
const miiBrawler = new Fighter(56, "Mii Brawler", "miiBrawler", "mii_brawler");
const miiSwordfighter = new Fighter(57, "Mii Swordfighter", "miiSwordfighter", "mii_swordfighter");
const miiGunner = new Fighter(58, "Mii Gunner", "miiGunner", "mii_gunner");
const palutena = new Fighter(59, "Palutena", "palutena", "palutena");
const pacMan = new Fighter(60, "Pac-Man", "pacMan", "pac_man");
const tactician = new Fighter(61, "Tactician", "tactician", "tactician");
const shulk = new Fighter(62, "Shulk", "shulk", "shulk");
const bowserJr = new Fighter(63, "Bowser Jr", "bowserJr", "bowser_jr");
const duckHunt = new Fighter(64, "Duck Hunt", "duckHunt", "duck_hunt");
const ryu = new Fighter(65, "Ryu", "ryu", "ryu");
const ken = new Fighter(66, "Ken", "ken", "ken");
const cloud = new Fighter(67, "Cloud", "cloud", "cloud");
const corrin = new Fighter(68, "Corrin", "corrin", "corrin");
const bayonetta = new Fighter(69, "Bayonetta", "bayonetta", "bayonetta");
const inkling = new Fighter(70, "Inkling", "inkling", "inkling");
const ridley = new Fighter(71, "Ridley", "ridley", "ridley");
const simon = new Fighter(72, "Simon", "simon", "simon");
const richter = new Fighter(73, "Richter", "richter", "richter");
const kingKRool = new Fighter(74, "King K Rool", "kingKRool", "king_k_rool");
const isabelle = new Fighter(75, "Isabelle", "isabelle", "isabelle");
const incineroar = new Fighter(76, "Incineroar", "incineroar", "incineroar");

const Roster = {
  fighters: [
    mario, donkeyKong, link, samus, darkSamus, yoshi, kirby, fox, pikachu, luigi, ness, captainFalcon, jigglypuff,
    peach, daisy, bowser, iceClimbers, sheik, zelda, drMario, pichu, falco, marth, lucina, youngLink, ganondorf,
    mewtwo, roy, chrom, mrGameAndWatch, metaKnight, pit, darkPit, zeroSuitSamus, wario, snake, ike, pokemonTrainer, diddyKong,
    lucas, sonic, kingDedede, olimar, lucario, rob, toonLink, wolf, villager, megaMan, wiiFitTrainer, rosalina, littleMac,
    greninja, palutena, pacMan, tactician, shulk, bowserJr, duckHunt, ryu, ken, cloud, corrin, bayonetta, inkling,
    ridley, simon, richter, kingKRool, isabelle, incineroar, miiBrawler, miiSwordfighter, miiGunner
  ],
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
  charizard: charizard,
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
  miiSwordfighter: miiSwordfighter,
  miiBrawler: miiBrawler,
  miiGunner: miiGunner
}

class FighterData {
  constructor(extractorId, keyName, associatedFighters) {
    this._extractorId = extractorId;
    this._keyName = keyName;
    this._associatedFighters = associatedFighters;
    this._counterArray = [];
    this._extendedCounterArray = [];
    this._counterLibrary = {};
  }

  get extractorId() {
    return this._extractorId;
  }

  get keyName() {
    return this._keyName;
  }

  get associatedFighters() {
    return this._associatedFighters;
  }

  get counterArray() {
    return this._counterArray;
  }

  get counterLibrary() {
    return this._counterLibrary;
  }

  get extendedCounterArray() {
    return this._extendedCounterArray;
  }

  createCounterArray(value) {
    this.counterArray.push(Number(value));
  }

  extendCounterArray(fighterDataSet) {
    let inflation = 0;
    for (let fighterIndex = 0; fighterIndex < fighterDataSet.length; fighterIndex++) {
      if (fighterDataSet[fighterIndex].associatedFighters.length > 1) {
        this.counterArray.splice(fighterIndex + inflation, 0, this.counterArray[fighterIndex + inflation]);
        inflation++;
      }
    }
  }

  pairArrays(fighterArray) {
    for (let index = 0; index < this.counterArray.length; index++) {
      this.counterLibrary[fighterArray[index]] = this.counterArray[index];
    }
  }

  assignCounterLibraries() {
    this.associatedFighters.forEach(fighter => {
      fighter.populateMatchups(this.counterLibrary);
    })
  }
}

const pikachuData = new FighterData("Pikachu", "pikachuData", [pikachu]);
const inklingData = new FighterData("Inkling", "inklingData", [inkling]);
const royData = new FighterData("Roy", "royData", [roy]);
const chromData = new FighterData("Chrom", "chromData", [chrom]);
const youngLinkData = new FighterData("Young Link", "youngLinkData", [youngLink]);
const peachDaisyData = new FighterData("Peach/Daisy", "peachDaisyData", [peach, daisy]);
const marthLucinaData = new FighterData("Marth/Lucina", "marthLucinaData", [marth, lucina]);
const simonRichterData = new FighterData("Simon/Richter", "simonRichterData", [simon, richter]);
const corrinData = new FighterData("Corrin", "corrinData", [corrin]);
const falcoData = new FighterData("Falco", "falcoData", [falco]);
const mewtwoData = new FighterData("Mewtwo", "mewtwoData", [mewtwo]);
const olimarData = new FighterData("Olimar", "olimarData", [olimar]);
const cloudData = new FighterData("Cloud", "cloudData", [cloud]);
const diddyKongData = new FighterData("Diddy Kong", "diddyKongData", [diddyKong]);
const ikeData = new FighterData("Ike", "ikeData", [ike]);
const kingKRoolData = new FighterData("King K. Rool", "kingKRoolData", [kingKRool]);
const snakeData = new FighterData("Snake", "snakeData", [snake]);
const greninjaData = new FighterData("Greninja", "greninjaData", [greninja]);
const rosalinaData = new FighterData("Rosalina", "rosalinaData", [rosalina]);
const megaManData = new FighterData("Mega Man", "megaManData", [megaMan]);
const marioData = new FighterData("Mario", "marioData", [mario]);
const drMarioData = new FighterData("Dr. Mario", "drMarioData", [drMario]);
const sheikData = new FighterData("Sheik", "sheikData", [sheik]);
const yoshiData = new FighterData("Yoshi", "yoshiData", [yoshi]);
const foxData = new FighterData("Fox", "foxData", [fox]);
const pokemonTrainerData = new FighterData("Pokemon Trainer", "pokemonTrainerData", [pokemonTrainer]);
const metaKnightData = new FighterData("Meta Knight", "metaKnightData", [metaKnight]);
const sonicData = new FighterData("Sonic", "sonicData", [sonic]);
const palutenaData = new FighterData("Palutena", "palutenaData", [palutena]);
const kenData = new FighterData("Ken", "kenData", [ken]);
const shulkData = new FighterData("Shulk", "shulkData", [shulk]);
const pichuData = new FighterData("Pichu", "pichuData", [pichu]);
const ryuData = new FighterData("Ryu", "ryuData", [ryu]);
const toonLinkData = new FighterData("Toon Link", "toonLinkData", [toonLink]);
const lucarioData = new FighterData("Lucario", "lucarioData", [lucario]);
const bayonettaData = new FighterData("Bayonetta", "bayonettaData", [bayonetta]);
const isabelleData = new FighterData("Isabelle", "isabelleData", [isabelle]);
const wolfData = new FighterData("Wolf", "wolfData", [wolf]);
const zeroSuitSamusData = new FighterData("Zero Suit Samus", "zeroSuitSamusData", [zeroSuitSamus]);
const villagerData = new FighterData("Villager", "villagerData", [villager]);
const warioData = new FighterData("Wario", "warioData", [wario]);
const robData = new FighterData("R.O.B.", "robData", [rob]);
const linkData = new FighterData("Link", "linkData", [link]);
const zeldaData = new FighterData("Zelda", "zeldaData", [zelda]);
const luigiData = new FighterData("Luigi", "luigiData", [luigi]);
const pitDarkPitData = new FighterData("Pit/Dark Pit", "pitDarkPitData", [pit, darkPit]);
const donkeyKongData = new FighterData("Donkey Kong", "donkeyKongData", [donkeyKong]);
const incineroarData = new FighterData("Incineroar", "incineroarData", [incineroar]);
const tacticianData = new FighterData("Robin", "tacticianData", [tactician]);
const miiSwordfighterData = new FighterData("Mii Swordfighter", "miiSwordfighterData", [miiSwordfighter]);
const miiGunnerData = new FighterData("Mii Gunner", "miiGunnerData", [miiGunner]);
const nessData = new FighterData("Ness", "nessData", [ness]);
const kirbyData = new FighterData("Kirby", "kirbyData", [kirby]);
const mrGameAndWatchData = new FighterData("Mr. Game and Watch", "mrGameAndWatchData", [mrGameAndWatch]);
const iceClimbersData = new FighterData("Ice Climbers", "iceClimbersData", [iceClimbers]);
const bowserData = new FighterData("Bowser", "bowserData", [bowser]);
const duckHuntData = new FighterData("Duck Hunt", "duckHuntData", [duckHunt]);
const lucasData = new FighterData("Lucas", "lucasData", [lucas]);
const pacManData = new FighterData("Pac-Man", "pacManData", [pacMan]);
const littleMacData = new FighterData("Little Mac", "littleMacData", [littleMac]);
const miiBrawlerData = new FighterData("Mii Brawler", "miiBrawlerData", [miiBrawler]);
const captainFalconData = new FighterData("Captain Falcon", "captainFalconData", [captainFalcon]);
const samusDarkSamusData = new FighterData("Samus/Dark Samus", "samusDarkSamusData", [samus, darkSamus]);
const jigglypuffData = new FighterData("Jigglypuff", "jigglypuffData", [jigglypuff]);
const ridleyData = new FighterData("Ridley", "ridleyData", [ridley]);
const ganondorfData = new FighterData("Ganondorf", "ganondorfData", [ganondorf]);
const wiiFitTrainerData = new FighterData("Wii Fit Trainer", "wiiFitTrainerData", [wiiFitTrainer]);
const kingDededeData = new FighterData("King Dedede", "kingDededeData", [kingDedede]);
const bowserJrData = new FighterData("Bowser Jr.", "bowserJrData", [bowserJr]);

const DataCluster = {
  fighterOrder: [],
  dataGroup: {
    "Pikachu": pikachuData,
    "Inkling": inklingData,
    "Roy": royData,
    "Chrom": chromData,
    "Young Link": youngLinkData,
    "Peach / Daisy": peachDaisyData,
    "Marth / Lucina": marthLucinaData,
    "Simon / Richter": simonRichterData,
    "Corrin": corrinData,
    "Falco": falcoData,
    "Mewtwo": mewtwoData,
    "Olimar": olimarData,
    "Cloud": cloudData,
    "Diddy Kong": diddyKongData,
    "Ike": ikeData,
    "King K. Rool": kingKRoolData,
    "Snake": snakeData,
    "Greninja": greninjaData,
    "Rosalina": rosalinaData,
    "Mega Man": megaManData,
    "Mario": marioData,
    "Dr. Mario": drMarioData,
    "Sheik": sheikData,
    "Yoshi": yoshiData,
    "Fox": foxData,
    "Pokemon Trainer": pokemonTrainerData,
    "Meta Knight": metaKnightData,
    "Sonic": sonicData,
    "Palutena": palutenaData,
    "Ken": kenData,
    "Shulk": shulkData,
    "Pichu": pichuData,
    "Ryu": ryuData,
    "Toon Link": toonLinkData,
    "Lucario": lucarioData,
    "Bayonetta": bayonettaData,
    "Isabelle": isabelleData,
    "Wolf": wolfData,
    "Zero Suit Samus": zeroSuitSamusData,
    "Villager": villagerData,
    "Wario": warioData,
    "R.O.B.": robData,
    "Link": linkData,
    "Zelda": zeldaData,
    "Luigi": luigiData,
    "Pit / Dark Pit": pitDarkPitData,
    "Donkey Kong": donkeyKongData,
    "Incineroar": incineroarData,
    "Robin": tacticianData,
    "Mii Swordfighter": miiSwordfighterData,
    "Mii Gunner": miiGunnerData,
    "Ness": nessData,
    "Kirby": kirbyData,
    "Mr. Game and Watch": mrGameAndWatchData,
    "Ice Climbers": iceClimbersData,
    "Bowser": bowserData,
    "Duck Hunt": duckHuntData,
    "Lucas": lucasData,
    "Pac-Man": pacManData,
    "Little Mac": littleMacData,
    "Mii Brawler": miiBrawlerData,
    "Captain Falcon": captainFalconData,
    "Samus / Dark Samus": samusDarkSamusData,
    "Jigglypuff": jigglypuffData,
    "Ridley": ridleyData,
    "Ganondorf": ganondorfData,
    "Wii Fit Trainer": wiiFitTrainerData,
    "King Dedede": kingDededeData,
    "Bowser Jr.": bowserJrData,
  },
  fighterArray: [],
  row: null,
  currentFighter: null,
  readyExtractor() {
    let table = document.querySelector(".tiertable");
    console.log("Table:");
    console.log(table);
    let body = table.firstElementChild;
    console.log("Body:");
    console.log(body);
    let row = body.firstElementChild;
    DataCluster.row = row.nextElementSibling;
    console.log("Row:");
    console.log(DataCluster.row);
  },
  parseRow() {
    let cell = DataCluster.row.firstElementChild;
    DataCluster.currentFighter = DataCluster.dataGroup[cell.innerHTML];
    DataCluster.fighterOrder.push(DataCluster.currentFighter);
    for (let index=0; index < 68; index++) {
      cell = cell.nextElementSibling;
      if (cell.innerHTML == "-") {
        DataCluster.currentFighter.createCounterArray(5);
      } else {
        DataCluster.currentFighter.createCounterArray(cell.innerHTML);
      }
    }
    //console.log(DataCluster.currentFighter);
  },
  parseTable() {
    for (let index=0; index < 69; index++) {
      DataCluster.parseRow();
      DataCluster.row = DataCluster.row.nextElementSibling;
    }
  },
  createFighterArrays() {
    DataCluster.fighterOrder.forEach(fighterData => {
      fighterData.associatedFighters.forEach(fighter => {
        DataCluster.fighterArray.push(fighter.pythonKeyName);
      })
    });
  },
  extendCounterArrays() {
    DataCluster.fighterOrder.forEach(fighterData => {
      fighterData.extendCounterArray(DataCluster.fighterOrder);
    });
  },
  createLibraries() {
    DataCluster.fighterOrder.forEach(fighterData => {
      fighterData.pairArrays(DataCluster.fighterArray);
    });
  },
  assignMatchups() {
    DataCluster.fighterOrder.forEach(fighterData => {
      fighterData.assignCounterLibraries();
    })
  },
  submitMatchups() {
    DataCluster.fighterOrder.forEach(fighterData => {
      fighterData.associatedFighters.forEach(fighter => {
        fighter.submitMatchups();
      })
    })
  }
}

DataCluster.readyExtractor();
DataCluster.parseTable();
DataCluster.createFighterArrays();
DataCluster.extendCounterArrays();
DataCluster.createLibraries();
DataCluster.assignMatchups();
console.log(DataCluster.fighterArray);
//DataCluster.extendCounterArrays();
//DataCluster.createLibraries(DataCluster.fighterOrder);
console.log(DataCluster.fighterOrder);
DataCluster.submitMatchups();

class Fighter {
  constructor(id, name, keyName, keyNamePython, imageArray, hasEchoPartner, echoPartner, defaultImg) {
    this._id = id;
    this._name = name;
    this._keyName = keyName;
    this._keyNamePython = keyNamePython;
    this._imageArray = imageArray;
    this._image = this._imageArray[0];
    this._defaultImage = defaultImg;
    this._playMetric = 10;
    this._favor = 10;
    this._rollingFavor = 10;
    this._hasEchoPartner = hasEchoPartner;
    this._echoPartner = echoPartner;
    this._matchups = {};
    this._championRating = 0;
    this._inRematchFight = false;
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

  get keyNamePython() {
    return this._keyNamePython;
  }

  get image() {
    return this._image;
  }

  get defaultImg() {
    return this._defaultImage;
  }

  get imageArray() {
    return this._imageArray;
  }

  get playMetric() {
    return this._playMetric;
  }

  get favor() {
    return this._favor;
  }

  get hasEchoPartner() {
    return this._hasEchoPartner;
  }

  get echoPartner() {
    return this._echoPartner;
  }

  get inRematchFight() {
    return this._inRematchFight;
  }

  updatePlayMetric(opponentKeyName, mode) {
    if (opponentKeyName !== "defaultOpponent") {
      if (mode === "favoredRandom") {
        this._playMetric = this.rollingFavor;
      } else if (mode === "specialistRandom") {
        this._playMetric = this.rollingFavor * Math.pow(16, 0.6 * (this.matchups[opponentKeyName] - 5));
      }
    } else {
      this._playMetric = this.rollingFavor;
    }
  }

  loadPreference(value) {
    this._favor = value;
  }

  loadFavor(value) {
    this._rollingFavor = value;
  }

  setImage(rating) {
    this._image = this.imageArray[rating];
  }

  loadRollingFavor(value) {
    this._rollingFavor = value;
  }

  get rollingFavor() {
    return this._rollingFavor;
  }

  get championRating() {
    return this._championRating;
  }

  loadChampionRating(rating) {
    this._championRating = rating;
    if (this.championRating > 7) {
      this.setImage(7);
    } else {
      this.setImage(rating);
    }
  }

  increaseChampionRating(challengeMode) {
    if (challengeMode == 1) {
      if (this.inRematchFight) {
        this._championRating += 2;
      } else {
        this._championRating += 1;
        this._inRematchFight = true;
      }
    } else if (challengeMode == 2) {
      if (this.inRematchFight) {
        this._championRating += 1;
      } else {
        this._championRating +=1;
        this._inRematchFight = true;
      }
    } else {
      if (this.inRematchFight) {
        this._championRating += 2;
        this._inRematchFight = false;
      } else {
        this._championRating += 1;
      }
    }
    if (this.championRating > 7) {
      this.setImage(7);
    } else {
      this.setImage(this.championRating);
    }
    fetch(`http://localhost:8000/fighter/${this.id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({"champion_rating": this.championRating})
    }).then(response => {
      console.log('Test response');
      console.log(response);
    });
  }

  decreaseChampionRating() {
    this._championRating--;
    if (this.championRating < 0) {
      this._championRating = 0;
    }
    if (this.championRating > 7) {
      this.setImage(7);
    } else {
      this.setImage(this.championRating);
    }
    fetch(`http://localhost:8000/fighter/${this.id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({"champion_rating": this.championRating})
    }).then(response => {
      console.log('Test response');
      console.log(response);
      console.log(response.json());
    });
  }

  loadStatus(preference, rollingFavor, championRating) {
    this.loadPreference(preference);
    this.loadRollingFavor(rollingFavor);
    if (this.rollingFavor < this.favor) {
      this._rollingFavor = this.favor;
    }
    this.updatePlayMetric();
    this.loadChampionRating(championRating);
  }

  favorUp() {
    console.log(`${this.name} had ${this.rollingFavor} favor.`);
    this._rollingFavor += this.favor;
    console.log(`${this.name} was given the base ${this.favor}`);
  }

  resetFavor() {
    this._rollingFavor = this.favor;
  }

  get matchups() {
    return this._matchups;
  }

  get specialChallenge() {
    return this._specialChallenge;
  }
}

export default Fighter;

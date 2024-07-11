// Meltydash

// theme color palettes
function colors() {
  if (settings().theme === "default") {
    return (arr = {
      blue: "#FF004EA8",
      light_blue: "#FF0095C8",
      orange: "#FFFF8200",
      red: "#FFD6001C",
      green: "#FF006F44",
      light_green: "#FF00AF66",
      yellow: "#FFFFCD00",
      purple: "#FF4C12A1",
      grey: "#FF2E334E",
      light_grey: "#FF8BA6C1",
      white: "#FFFFFFFF",
      pink: "#FFE10098",
      gauge: "#67808080",
    });
  }
  if (settings().theme === "melted") {
    return (arr = {
      blue: "#FF030466",
      light_blue: "#FF0068A4",
      orange: "#FFCE2200",
      red: "#FF65001D",
      green: "#FF00402B",
      light_green: "#FF006F44",
      yellow: "#FFC99F00",
      purple: "#FF360063",
      grey: "#FF241B37",
      light_grey: "#FF2E334E",
      white: "#FFAFC7E5",
      pink: "#FFAF0077",
      gauge: "#67808080",
    });
  }
}

// collect info about the game and car
function info() {
  var hasABS = false;
  $prop("GameRawData.SessionData.CarSetup.Chassis.InCarDials.AbsSetting") !==
  null
    ? (hasABS = true)
    : (hasABS = false);
  var hasTC1 = false;
  $prop("TCLevel") !== null ? (hasTC1 = true) : (hasTC1 = false);
  var hasTC2 = false;
  $prop("GameRawData.Telemetry.dcTractionControl2") !== null
    ? (hasTC2 = true)
    : (hasTC2 = false);
  var hasBB = false;
  $prop("BrakeBias") !== 0 ? (hasBB = true) : (hasBB = false);
  var hasMAP = false;
  $prop("GameRawData.Telemetry.dcFuelMixture") !== null
    ? (hasMAP = true)
    : (hasMAP = false);
  var hasEPS = false;
  $prop("GameRawData.Telemetry.dcPowerSteering") !== null
    ? (hasEPS = true)
    : (hasEPS = false);
  var hasFARB = false;
  $prop("GameRawData.Telemetry.dcAntiRollFront") !== null
    ? (hasFARB = true)
    : (hasFARB = false);
  var hasBoost = false;
  $prop("GameRawData.Telemetry.dcBoostLevel") !== null
    ? (hasBoost = true)
    : (hasBoost = false);
  var hasRARB = false;
  $prop("GameRawData.Telemetry.dcAntiRollRear") !== null
    ? (hasRARB = true)
    : (hasRARB = false);
  var hasTPS = false;
  $prop("GameRawData.Telemetry.dcThrottleShape") !== null
    ? (hasTPS = true)
    : (hasTPS = false);
  return (arr = {
    game: $prop("DataCorePlugin.CurrentGame"),
    hasABS: hasABS,
    hasTC1: hasTC1,
    hasTC2: hasTC2,
    hasBB: hasBB,
    hasMAP: hasMAP,
    hasEPS: hasEPS,
    hasFARB: hasFARB,
    hasBoost: hasBoost,
    hasRARB: hasRARB,
    hasTPS: hasTPS,
  });
}

// only return setting change if the setting is present
function inCarSet() {
  var arr = {};
  if (info().hasABS === true) {
    arr.absVal = $prop("ABSLevel");
  }
  if (info().hasTC1 === true) {
    arr.tc1Val = $prop("TCLevel");
  }
  if (info().hasTC2 === true) {
    arr.tc2Val = $prop("GameRawData.Telemetry.dcTractionControl2");
  }
  if (info().hasBB === true) {
    arr.bbVal = $prop("BrakeBias");
  }
  if (info().hasMAP === true) {
    arr.mapVal = $prop("GameRawData.Telemetry.dcFuelMixture");
  }
  if (info().hasEPS === true) {
    arr.epsVal = $prop("GameRawData.Telemetry.dcPowerSteering");
  }
  if (info().hasFARB === true) {
    arr.farbVal = $prop("GameRawData.Telemetry.dcAntiRollFront");
  }
  if (info().hasBoost === true) {
    arr.boostVal = $prop("GameRawData.Telemetry.dcBoostLevel");
  }
  if (info().hasRARB === true) {
    arr.rarbVal = $prop("GameRawData.Telemetry.dcAntiRollRear");
  }
  if (info().hasTPS === true) {
    arr.tpsVal = $prop("GameRawData.Telemetry.dcThrottleShape");
  }
  return arr;
}

// large setting change alert
function setChg() {
  if (info().hasABS === true) {
    if (root["abs"] == null) {
      root["abs"] = $prop("ABSLevel");
    }
    if (root["abs"] != $prop("ABSLevel")) {
      root["abs"] = $prop("ABSLevel");
      root["setting"] = root["abs"];
      root["name"] = "ABS";
      root["color"] = colors().orange;
    }
  }

  if (info().hasTC1 === true) {
    if (root["tc1"] == null) {
      root["tc1"] = $prop("TCLevel");
    }
    if (root["tc1"] != $prop("TCLevel")) {
      root["tc1"] = $prop("TCLevel");
      root["setting"] = root["tc1"];
      root["name"] = "TC A";
      root["color"] = colors().blue;
    }
  }

  if (info().hasTC2 === true) {
    if (root["tc2"] == null) {
      root["tc2"] = $prop("GameRawData.Telemetry.dcTractionControl2");
    }
    if (root["tc2"] != $prop("GameRawData.Telemetry.dcTractionControl2")) {
      root["tc2"] = $prop("GameRawData.Telemetry.dcTractionControl2");
      root["setting"] = root["tc2"];
      root["name"] = "TC B";
      root["color"] = colors().light_blue;
    }
  }

  if (info().hasBB === true) {
    if (root["bias"] == null) {
      root["bias"] = $prop("BrakeBias");
    }
    if (root["bias"] != $prop("BrakeBias")) {
      root["bias"] = $prop("BrakeBias");
      root["setting"] = root["bias"].toFixed(1);
      root["name"] = "BIAS";
      root["color"] = colors().red;
    }
  }

  if (info().hasMAP === true) {
    if (root["map"] == null) {
      root["map"] = $prop("GameRawData.Telemetry.dcFuelMixture");
    }
    if (root["map"] != $prop("GameRawData.Telemetry.dcFuelMixture")) {
      root["map"] = $prop("GameRawData.Telemetry.dcFuelMixture");
      root["setting"] = root["map"];
      root["name"] = "MAP";
      root["color"] = colors().green;
    }
  }

  if (info().hasEPS === true) {
    if (root["eps"] == null) {
      root["eps"] = $prop("GameRawData.Telemetry.dcPowerSteering");
    }
    if (root["eps"] != $prop("GameRawData.Telemetry.dcPowerSteering")) {
      root["eps"] = $prop("GameRawData.Telemetry.dcPowerSteering");
      root["setting"] = root["eps"];
      root["name"] = "EPS";
      root["color"] = colors().green;
    }
  }

  if (info().hasFARB === true) {
    if (root["farb"] == null) {
      root["farb"] = $prop("GameRawData.Telemetry.dcAntiRollFront");
    }
    if (root["farb"] != $prop("GameRawData.Telemetry.dcAntiRollFront")) {
      root["farb"] = $prop("GameRawData.Telemetry.dcAntiRollFront");
      root["setting"] = root["farb"];
      root["name"] = "F ARB";
      root["color"] = colors().yellow;
    }
  }

  if (info().hasBoost === true) {
    if (root["boost"] == null) {
      root["boost"] = $prop("GameRawData.Telemetry.dcBoostLevel");
    }
    if (root["boost"] != $prop("GameRawData.Telemetry.dcBoostLevel")) {
      root["boost"] = $prop("GameRawData.Telemetry.dcBoostLevel");
      root["setting"] = root["boost"];
      root["name"] = "BOOST";
      root["color"] = colors().yellow;
    }
  }

  if (info().hasRARB === true) {
    if (root["rarb"] == null) {
      root["rarb"] = $prop("GameRawData.Telemetry.dcAntiRollRear");
    }
    if (root["rarb"] != $prop("GameRawData.Telemetry.dcAntiRollRear")) {
      root["rarb"] = $prop("GameRawData.Telemetry.dcAntiRollRear");
      root["setting"] = root["rarb"];
      root["name"] = "R ARB";
      root["color"] = colors().purple;
    }
  }

  if (info().hasTPS === true) {
    if (root["tps"] == null) {
      root["tps"] = $prop("GameRawData.Telemetry.dcThrottleShape");
    }
    if (root["tps"] != $prop("GameRawData.Telemetry.dcThrottleShape")) {
      root["tps"] = $prop("GameRawData.Telemetry.dcThrottleShape");
      root["setting"] = root["tps"];
      root["name"] = "TPS";
      root["color"] = colors().purple;
    }
  }

  return (arr = {
    setting: root["setting"],
    name: root["name"],
    color: root["color"],
  });
}

// return engine information
function engine() {
  return (arr = {
    started: $prop("EngineStarted") === 1 ? true : false,
    ignition: $prop("EngineIgnitionOn") === 1 ? true : false,
  });
}

// return headlight information
function headlights() {
  var arr = {};
  if (info().game === "IRacing") {
    arr.low = true;
    arr.high = $prop("DataCorePlugin.GameRawData.Telemetry.dcHeadlightFlash");
  }
  return arr;
}

// return wiper information
function wipers() {
  if (info().game === "IRacing") {
    // these properties always output false :'(
    if (
      $prop("GameRawData.Telemetry.dcToggleWindshieldWipers") === true ||
      $prop("GameRawData.Telemetry.dcTriggerWindshieldWipers") === true
    ) {
      return true;
    } else {
      return false;
    }
  }
}

// return pit status information
function isInPit() {
  return (arr = {
    pitLimiterOn: $prop("PitLimiterOn") === 1 ? true : false,
    isInPitLane: $prop("IsInPitLane") === 1 ? true : false,
    timeInPit: $prop("IsInPitSince"),
  });
}

function calculateFuel() {
  return $prop("CurrentLap") <= 3 ? true : false;
}

function lowFuel() {
  return $prop("FuelPercent") <= settings().low_fuel_alert_percent
    ? true
    : false;
}

function hybrid() {
  var mode = $prop("GameRawData.Telemetry.dcMGUKDeployMode");
  switch (mode) {
    case 0:
      return "NO DEPLOY";
      break;
    case 1:
      return "QUALIFY";
      break;
    case 2:
      return "ATTACK";
      break;
    case 3:
      return "BALANCED";
      break;
    case 4:
      return "BUILD";
      break;
  }
  var ers = $prop("GameRawData.Telemetry.EnergyERSBatteryPct") * 100;
  return (arr = {
    ers: ers.toFixed(1),
    mode: mode,
  });
}

// speed units
function speedUnits() {
  if (settings().speed_unit === "kmh") {
    return $prop("SpeedKmh");
  } else if (settings().speed_unit === "mph") {
    return $prop("SpeedMph");
  }
}

function ver() {
  return "0.001"; // tested and compatible with SimHub 9.3.8
}

/*
// deploy, came from my lmp1 stuff
var g = $prop('DataCorePlugin.CurrentGame');
switch (g) {
  case 'AssettoCorsa':
    return $prop('GameRawData.Physics.KersCharge') * 100;
    break;
  case 'IRacing':
    return $prop('GameRawData.Telemetry.EnergyMGU_KLapDeployPct') * 100;
    break;
}

// charge, came from my lmp1 stuff
var g = $prop('DataCorePlugin.CurrentGame');
switch (g) {
  case 'AssettoCorsa':
    return $prop('GameRawData.Physics.KersCharge') * 100;
    break;
  case 'IRacing':
    return $prop('GameRawData.Telemetry.EnergyERSBatteryPct') * 100;
    break;
}
*/

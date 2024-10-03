// Meltydash

// theme color palettes
function colors() {
  if (settings().theme === "default") {
    return (obj = {
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
      dark_grey: "FF272727",
      white: "#FFFFFFFF",
      pink: "#FFE10098",
      gauge: "#67808080",
    });
  }
  if (settings().theme === "melted") {
    return (obj = {
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
      dark_grey: "FF272727",
      white: "#FFAFC7E5",
      pink: "#FFAF0077",
      gauge: "#67808080",
    });
  }
}

// get info about the game and car
function info() {
  
  var obj = {};
  
  // get current game
  obj.game = $prop("DataCorePlugin.CurrentGame");
  
  // check if car has adjustable ABS
  if ($prop("GameRawData.SessionData.CarSetup.Chassis.InCarDials.AbsSetting") !== null) {
    obj.hasABS = true;
  } else {
    obj.hasABS = false;
  }
  
  // check if car has adjustable TC1
  if ($prop("TCLevel") !== null) {
    obj.hasTC1 = true;
  } else {
    obj.hasTC1 = false;
  }
  
  // check if car has adjustable TC2
  if ($prop("GameRawData.Telemetry.dcTractionControl2") !== null) {
    obj.hasTC2 = true;
  } else {
    obj.hasTC2 = false;
  }
  
  // check if car has adjustable brake bias
  if ($prop("BrakeBias") !== 0) {
    obj.hasBB = true;
  } else {
    obj.hasBB = false;
  }
  
  // check if car has adjustable fuel map
  if ($prop("GameRawData.Telemetry.dcFuelMixture") !== null) {
    obj.hasMAP = true;
  } else {
    obj.hasMAP = false;
  }
  
  // check if car has adjustable power steering
  if ($prop("GameRawData.Telemetry.dcPowerSteering") !== null) {
    obj.hasEPS = true;
  } else {
    obj.hasEPS = false;
  }
  
  // check if car has adjustable front arb
  if ($prop("GameRawData.Telemetry.dcAntiRollFront") !== null) {
    obj.hasFARB = true;
  } else {
    obj.hasFARB = false;
  }
  
  // check if car has adjustable boost
  if ($prop("GameRawData.Telemetry.dcBoostLevel") !== null) {
    obj.hasBoost = true;
  } else {
    obj.hasBoost = false;
  }
  
  // check if car has adjustable rear arb
  if ($prop("GameRawData.Telemetry.dcAntiRollRear") !== null) {
    obj.hasRARB = true;
  } else {
    obj.hasRARB = false;
  }
  
  // check if car has adjustable throttle shape
  if ($prop("GameRawData.Telemetry.dcThrottleShape") !== null) {
    obj.hasTPS = true;
  } else {
    obj.hasTPS = false;
  }
  
  return obj;
  
}

// only return setting change if the setting is present
function in_car_settings() {
  
  var obj = {};
  
  // get ABS value
  if (info().hasABS === true) {
    obj.absVal = $prop("ABSLevel");
  }
  
  // get TC1 value
  if (info().hasTC1 === true) {
    obj.tc1Val = $prop("TCLevel");
  }
  
  // get TC2 value
  if (info().hasTC2 === true) {
    obj.tc2Val = $prop("GameRawData.Telemetry.dcTractionControl2");
  }
  
  // get brake bias value
  if (info().hasBB === true) {
    obj.bbVal = $prop("BrakeBias");
  }
  
  // get fuel map value
  if (info().hasMAP === true) {
    obj.mapVal = $prop("GameRawData.Telemetry.dcFuelMixture");
  }
  
  // get power steering value
  if (info().hasEPS === true) {
    obj.epsVal = $prop("GameRawData.Telemetry.dcPowerSteering");
  }
  
  // get front arb value
  if (info().hasFARB === true) {
    obj.farbVal = $prop("GameRawData.Telemetry.dcAntiRollFront");
  }
  
  // get boost value
  if (info().hasBoost === true) {
    obj.boostVal = $prop("GameRawData.Telemetry.dcBoostLevel");
  }
  
  // get rear arb value
  if (info().hasRARB === true) {
    obj.rarbVal = $prop("GameRawData.Telemetry.dcAntiRollRear");
  }
  
  // get throttle shape value
  if (info().hasTPS === true) {
    obj.tpsVal = $prop("GameRawData.Telemetry.dcThrottleShape");
  }
  
  return obj;
  
}

// large setting change alert
function settings_change() {
  
  if (info().hasABS === true) {
    
    // initialize root["abs"]
    if (root["abs"] == null) {
      root["abs"] = $prop("ABSLevel");
    }
    
    // update root["abs"] when ABS value changes
    if (root["abs"] != $prop("ABSLevel")) {
      root["abs"] = $prop("ABSLevel");
      root["setting"] = root["abs"];
      root["name"] = "ABS";
      root["color"] = colors().orange;
    }
    
  }

  if (info().hasTC1 === true) {
    
    // initialize root["tc1"]
    if (root["tc1"] == null) {
      root["tc1"] = $prop("TCLevel");
    }
    
    // update root["tc1"] when TC1 value changes
    if (root["tc1"] != $prop("TCLevel")) {
      root["tc1"] = $prop("TCLevel");
      root["setting"] = root["tc1"];
      root["name"] = "TC A";
      root["color"] = colors().blue;
    }
    
  }

  if (info().hasTC2 === true) {
    
    // initialize root["tc2"]
    if (root["tc2"] == null) {
      root["tc2"] = $prop("GameRawData.Telemetry.dcTractionControl2");
    }
    
    // update root["tc2"] when TC2 value changes
    if (root["tc2"] != $prop("GameRawData.Telemetry.dcTractionControl2")) {
      root["tc2"] = $prop("GameRawData.Telemetry.dcTractionControl2");
      root["setting"] = root["tc2"];
      root["name"] = "TC B";
      root["color"] = colors().light_blue;
    }
  }

  if (info().hasBB === true) {
    
    // initialize root["bias"]
    if (root["bias"] == null) {
      root["bias"] = $prop("BrakeBias");
    }
    
    // update root["bias"] when brake bias value changes
    if (root["bias"] != $prop("BrakeBias")) {
      root["bias"] = $prop("BrakeBias");
      root["setting"] = root["bias"].toFixed(1);
      root["name"] = "BIAS";
      root["color"] = colors().red;
    }
  }

  if (info().hasMAP === true) {
    
    // initialize root["map"]
    if (root["map"] == null) {
      root["map"] = $prop("GameRawData.Telemetry.dcFuelMixture");
    }
    
    // update root["map"] when fuel map value changes
    if (root["map"] != $prop("GameRawData.Telemetry.dcFuelMixture")) {
      root["map"] = $prop("GameRawData.Telemetry.dcFuelMixture");
      root["setting"] = root["map"];
      root["name"] = "MAP";
      root["color"] = colors().green;
    }
  }

  if (info().hasEPS === true) {
    
    // initialize root["eps"]
    if (root["eps"] == null) {
      root["eps"] = $prop("GameRawData.Telemetry.dcPowerSteering");
    }
    
    // update root["eps"] when power steering value changes
    if (root["eps"] != $prop("GameRawData.Telemetry.dcPowerSteering")) {
      root["eps"] = $prop("GameRawData.Telemetry.dcPowerSteering");
      root["setting"] = root["eps"];
      root["name"] = "EPS";
      root["color"] = colors().green;
    }
  }

  if (info().hasFARB === true) {
    
    // initialize root["farb"]
    if (root["farb"] == null) {
      root["farb"] = $prop("GameRawData.Telemetry.dcAntiRollFront");
    }
    
    // update root["farb"] when front arb value changes
    if (root["farb"] != $prop("GameRawData.Telemetry.dcAntiRollFront")) {
      root["farb"] = $prop("GameRawData.Telemetry.dcAntiRollFront");
      root["setting"] = root["farb"];
      root["name"] = "F ARB";
      root["color"] = colors().yellow;
    }
  }

  if (info().hasBoost === true) {
    
    // initialize root["boost"]
    if (root["boost"] == null) {
      root["boost"] = $prop("GameRawData.Telemetry.dcBoostLevel");
    }
    
    // update root["boost"] when boost value changes
    if (root["boost"] != $prop("GameRawData.Telemetry.dcBoostLevel")) {
      root["boost"] = $prop("GameRawData.Telemetry.dcBoostLevel");
      root["setting"] = root["boost"];
      root["name"] = "BOOST";
      root["color"] = colors().yellow;
    }
  }

  if (info().hasRARB === true) {
    
    // initialize root["rarb"]
    if (root["rarb"] == null) {
      root["rarb"] = $prop("GameRawData.Telemetry.dcAntiRollRear");
    }
    
    // update root["rarb"] when rear arb value changes
    if (root["rarb"] != $prop("GameRawData.Telemetry.dcAntiRollRear")) {
      root["rarb"] = $prop("GameRawData.Telemetry.dcAntiRollRear");
      root["setting"] = root["rarb"];
      root["name"] = "R ARB";
      root["color"] = colors().purple;
    }
  }

  if (info().hasTPS === true) {
    
    // initialize root["tps"]
    if (root["tps"] == null) {
      root["tps"] = $prop("GameRawData.Telemetry.dcThrottleShape");
    }
    
    // update root["tps"] when throttle shape value changes
    if (root["tps"] != $prop("GameRawData.Telemetry.dcThrottleShape")) {
      root["tps"] = $prop("GameRawData.Telemetry.dcThrottleShape");
      root["setting"] = root["tps"];
      root["name"] = "TPS";
      root["color"] = colors().purple;
    }
  }
  
  // return the latest changed value
  return (obj = {
    setting: root["setting"],
    name: root["name"],
    color: root["color"],
  });
  
}

// engine information
function engine() {
  return (obj = {
    started: $prop("EngineStarted") === 1 ? true : false,
    ignition: $prop("EngineIgnitionOn") === 1 ? true : false,
  });
}

// headlight information
function headlights() {
  
  var obj = {};
  
  if (info().game === "IRacing") {
    obj.low = true;
    obj.high = $prop("DataCorePlugin.GameRawData.Telemetry.dcHeadlightFlash");
  }
  
  return obj;
  
}

// wiper information
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

// pit status information
function pit_info() {
  return (obj = {
    pit_limiter_on: $prop("PitLimiterOn") === 1 ? true : false,
    in_pit_lane: $prop("IsInPitLane") === 1 ? true : false,
    time_in_pit: $prop("IsInPitSince"),
  });
}

// fuel-related information
function fuel_info() {
  
  var obj = {};
  
  // show calculate fuel message before lap 3
  if ($prop("CurrentLap") <= 3) {
    obj.calculate_fuel_message = true;
  } else {
    obj.calculate_fuel_message = false;
  }
  
  // show low fuel alert when fuel percentage is below setting value
  if ($prop("FuelPercent") <= settings().low_fuel_alert_percent) {
    obj.low_fuel_alert = true;
  } else {
    obj.low_fuel_alert = false;
  }
  
  // show fuel load alert when fuel percentage is above setting value
  if ($prop('GameRawData.SessionData.WeekendInfo.WeekendOptions.IsFixedSetup') !== 1) {
    if ($prop("FuelPercent") >= settings().quali_fuel_load_alert_percent) {
      obj.fuel_load_alert = true;
    } else {
      obj.fuel_load_alert = false;
    }
  } else {
    obj.fuel_load_alert = false;
  }
  
  return obj;

}

// predicted lap time
function predicted_time() {
  
  // get the best lap time in seconds
  var best = timespantoseconds($prop("BestLapTime"));
  
  // get the current live delta
  var delta = $prop("PersistantTrackerPlugin.SessionBestLiveDeltaSeconds");
  
  return secondstotimespan(best + delta);
  
}

// optimal lap time
function optimal_time() {
  
  var s1 = timespantoseconds($prop("Sector1BestLapTime"));
  
  var s2 = timespantoseconds($prop("Sector2BestLapTime"));
  
  var s3 = timespantoseconds($prop("Sector3BestLapTime"));
  
  var t = s1 + s2 + s3;
  
  return secondstotimespan(t);
  
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
  
  return (obj = {
    ers: ers.toFixed(1),
    mode: mode,
  });
  
}

// speed units
function speed_units() {
  
  if (settings().speed_unit === "kmh") {
    return $prop("SpeedKmh");
  } else if (settings().speed_unit === "mph") {
    return $prop("SpeedMph");
  }
  
}

// determine if session is timed or number of laps
function session_info() {
  
  var obj = {};
  
  var timedSession;
  
  var remLaps;
  
  var totalLaps;
  
  if (timespantoseconds($prop("SessionTimeLeft")) > 1) {
    timedSession = true;
  } else if (
    $prop("TotalLaps") > 1 &&
    timespantoseconds($prop("SessionTimeLeft")) == 0
  ) {
    timedSession = false;
  } else {
    timedSession = false;
  }
  
  if (timedSession == false) {
    if ($prop("RemainingLaps") <= 9) {
      remLaps = "0" + $prop("RemainingLaps");
    } else {
      remLaps = $prop("RemainingLaps");
    }
    if ($prop("TotalLaps") <= 9) {
      totalLaps = "0" + $prop("TotalLaps");
    } else {
      totalLaps = $prop("TotalLaps");
    }
  }
  
  obj.timedSession = timedSession;
  
  obj.sessionLaps = remLaps + " / " + totalLaps;
  
  return obj;
  
}

// 
function position_change() {

  var obj = {};

  if (root["pos"] == null) {
    root["pos"] = $prop("Position");
  }

  if (root["posUp"] == null) {
    root["posUp"] = false;
  }

  if (root["posDown"] == null) {
    root["posDown"] = false;
  }

  if ($prop("CompletedLaps") >= 1) {
    if (root["pos"] != $prop("Position")) {
      if (root["pos"] > $prop("Position")) {
        root["posUp"] = true;
        root["posDown"] = false;
        root["pos"] = $prop("Position")
      } else if (root["pos"] < $prop("Position")) {
        root["posUp"] = false;
        root["posDown"] = true;
        root["pos"] = $prop("Position")
      }
    }
  } else {
    root["posUp"] = false;
    root["posDown"] = false;
  }

  obj.up = root["posUp"];
  obj.down = root["posDown"];

  return obj;

}

// controls qualifying screen visibility
function qualifying_mode() {
  
  if (root["q_mode"] == null) {
    root["q_mode"] = false;
  }

  if (root["j"] == null) {
    root["j"] = true;
  }

  var q_mode_button = $prop("InputStatus.GraphicalDashPlugin.md_q_mode");

  if (q_mode_button) {
    if (!root["j"]) {
      root["q_mode"] = !root["q_mode"];
      root["j"] = true;
    }
  } else {
    root["j"] = false;
  }

  return root["q_mode"];

}

function ver() {
  return "0.005"; // tested and compatible with SimHub 9.3.8
}

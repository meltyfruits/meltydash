function settings() {
    return (arr = {
      delay_time: 2.5, // time in seconds
      show_gauges: true, // true, false
      low_fuel_alert_percent: 10,
      speed_unit: "kmh", // kmh, mph
      theme: "default", // default, melted, sludge
      lap_timer: "current", // current or predicted
      low_fuel_position: "vertical", // horizontal or vertical
    });
  }
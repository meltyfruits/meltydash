function settings() {
  return (obj = {
    // controls the length of time alerts stay visible
    // time in seconds
    delay_time: 2.5,

    // controls visibility of throttle and brake gauges
    // true, false
    show_gauges: true,

    // controls visibility of the
    low_fuel_alert_percent: 10,

    // controls the orientation of the low fuel alert
    // horizontal or vertical
    low_fuel_position: "vertical",

    //
    quali_fuel_load_alert_percent: 15,

    // specify which speed unit to use
    // kmh, mph
    speed_unit: "kmh",

    // specify the theme to use
    // default, melted, sludge
    theme: "default",

    // controls which lap timer is visible
    // current or predicted
    lap_timer: "current",

    // controls viasibility of framed elements in quali mode
    // true, false
    quali_mode_framed: true,
  });
}

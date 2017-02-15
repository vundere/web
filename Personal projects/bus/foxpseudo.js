// computes minutes until next bus arrival
def get_minutes_to_bus(bus_times):
  current_minutes = get_current_minutes()

  for bus_time in bus_times:
    if bus_time > current_minutes:
      // bus arrives within the hour
      return bus_time - current_minutes

  // bus arrives in the next hour
  return bus_times[0] + 60 - current_minutes

// usage
bus_x60_times = [13,43] // this array should be ordered
minutes_to_bus = get_minutes_to_bus(bus_x60_times)

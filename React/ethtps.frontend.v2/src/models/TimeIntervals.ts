export enum TimeInterval {
  Instant,
  _1m,
  _1h,
  _1d,
  _1mo,
  _1y_,
  All,
  Other,
}

export function toShortString(interval: TimeInterval) {
  switch (interval) {
    case TimeInterval.All:
      return "All"
    case TimeInterval.Instant:
      return "Instant"
    case TimeInterval._1d:
      return "1d"
    case TimeInterval._1h:
      return "1h"
    case TimeInterval._1m:
      return "1m"
    case TimeInterval._1mo:
      return "1mo"
    case TimeInterval._1y_:
      return "1y"
    default:
      return "Other"
  }
}
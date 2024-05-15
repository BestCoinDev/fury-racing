type RequestResponse = {
  success: boolean;
  error: string | null;
  status: number;
  data: Leaderboard;
};

type CurrentScreen = "HOME" | "SELECTION" | "RACE" | "ENDED" | "LEADERBOARD";

type PlayerScore = {
  _id: string;
  user_address: `0x${string}`;
  score: number;
};

type Leaderboard = PlayerScore[];

type CarAttributes = {
  reliability: number;
  maniability: number;
  speed: number;
  breaks: number;
  car_balance: number;
  aerodynamics: number;
  driver_skills: number;
  luck: number;
};

type ExternalFactors = {
  weather: number; // (0, 33: Low | 33, 66: Medimum | 66, 100: High)
  crashes: number; // Safest level (0, 33: Low | 33, 66: Medimum | 66, 100: High)
  full_throttle: number; // Full throttle in % (0, 33: Low | 33, 66: Medimum | 66, 100: High)
  downforce: number; // Downforce level (33: Low | 66: Medimum | 100: High)
  top_speed: number; // Top Speed in km/h
};

type TrackAnim = {
  tiles: string;
  startPosition: {
    x: number;
    y: number;
    direction: string;
  };
};

type TrackData = {
  name: string;
  length: number;
  lengthFormatted: string;
  bestTimeInSeconds: number;
  bestTimeFormatted: string;
  maxSpeed: number;
  fullThrottle: number;
  downforce: number;
  animData: TrackAnim;
};

type Tracks = TrackData[];

type CarMetadata = {
  path: string;
  scale: number;
  offset: {
    x: number;
    y: number;
    z: number;
  };
};

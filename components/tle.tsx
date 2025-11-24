import { sgp4, twoline2satrec } from "satellite.js";

interface TleProps {
  line1: string;
  line2: string;
}

const tleLine1 = '1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992',
      tleLine2 = '2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442';


function sgp4FromTle({ line1, line2 }: TleProps) {
  const satrec = twoline2satrec(line1, line2);
  const positionAndVelocity = sgp4(satrec, 0); // tsince = 0 for current position
  console.log('positionAndVelocity:', positionAndVelocity);
  return positionAndVelocity;
}

const satellitePositionAndVelocity = sgp4FromTle({ line1: tleLine1, line2: tleLine2 });

export { satellitePositionAndVelocity };

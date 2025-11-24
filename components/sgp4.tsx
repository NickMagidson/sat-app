import { sgp4, twoline2satrec } from "satellite.js";

interface TleProps {
  line1: string;
  line2: string;
}


function sgp4FromTle({ line1, line2 }: TleProps) {
  const satrec = twoline2satrec(line1, line2);
  const positionAndVelocity = sgp4(satrec, 0); // tsince = 0 for current position
  console.log('positionAndVelocity:', positionAndVelocity);
  return positionAndVelocity; 
}

export { sgp4FromTle };

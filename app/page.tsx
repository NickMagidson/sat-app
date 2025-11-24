
import SingleTleProcess from "@/components/single-tle-process";

// 1. Paste TLE into the input box as 2 or 3 lines
// 2. User hits the submit button
// 3. Parse the TLE lines
// 4. Use satellite.js to compute position and velocity
// 5. Display the results below the input box


// 1 25544U 98067A   25328.22215535  .00013951  00000-0  26056-3 0  9996
// 2 25544  51.6316 234.1374 0003908 162.5046 197.6078 15.49037704539984


export default function Home() {

  return (
    <>
      <div className="app-container w-screen h-screen pt-8 space-y-4">

        <SingleTleProcess />

      </div>
    </>
  );
}

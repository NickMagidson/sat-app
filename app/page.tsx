import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { satellitePositionAndVelocity } from "@/components/tle";


export default function Home() {

  console.log(satellitePositionAndVelocity);


  return (
    <>
      <div className="app-container">
        <div className="max-w-md mx-auto">
          <Card>
            {/* <CardHeader>
              <CardTitle>Send Message</CardTitle>
            </CardHeader> */}
            <CardContent>
              <div className="grid w-full gap-3">
                <div className="flex items-center justify-between">
                <Label htmlFor="message">TLE Input</Label>
                <a href="#" className="text-blue-500 hover:underline text-xs">
                  Random TLE
                </a>
                </div>
                <Textarea placeholder="Paste TLE here..." id="message" />
              </div>
            </CardContent>
          </Card>
        </div>


        <div>
          
        </div>


      </div>
    </>
  );
}

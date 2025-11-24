'use client';

import { sgp4FromTle } from "@/components/sgp4";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

interface TLEInputProps {
  setTleLines: (lines: string[]) => void;
  tleLines: string[];
  setSgp4Result: (result: any) => void;
}

export default function TLEInput({ setTleLines, tleLines, setSgp4Result }: TLEInputProps) {


  function handleTleInput() {
    const textarea = document.getElementById('message') as HTMLTextAreaElement;
    const tleInput = textarea?.value || '';
    const [line1, line2] = tleInput.split('\n');

    // Process the TLE lines as needed
    setTleLines([line1, line2]);

    console.log('Processing TLE lines:');
    console.log('Line 1:', line1);
    console.log('Line 2:', line2);
  
    const result = sgp4FromTle({ line1, line2 });
    setSgp4Result(result);
    console.log('SGP4 Result:', result);
    
  
  }


  const handleRandomTle = () => {
    const sampleTles = [
      '1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992\n2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442',
      '1 40967U 15058A   19156.91667824 -.00000214  00000-0  00000+0 0  9991\n2 40967   0.0163 107.6486 0001237 263.8471 211.0453  1.00271211 12345',
      '1 33591U 09005A   19156.76345679 -.00000023  00000-0  00000+0 0  9993\n2 33591  98.2174 250.1234 0012345 123.4567 234.5678 14.57123456123456',
    ];
    const randomTle = sampleTles[Math.floor(Math.random() * sampleTles.length)];
    const textarea = document.getElementById('message') as HTMLTextAreaElement;
    if (textarea) {
      textarea.value = randomTle;
    }
  }


  return (
    <>
      <Card>
        {/* <CardHeader>
          <CardTitle>Send Message</CardTitle>
        </CardHeader> */}
            <CardContent>
              <div className="grid w-full gap-3">
                <div className="flex items-center justify-between">
                <Label htmlFor="message">TLE Input</Label>
                <a onClick={handleRandomTle} className="text-blue-500 hover:underline text-xs">
                  Random TLE
                </a>
                </div>
                <Textarea placeholder="Paste TLE here..." id="message" />
                <Button onClick={handleTleInput} >Process TLE</Button>
              </div>
            </CardContent>
          </Card>
      </>
  );
}
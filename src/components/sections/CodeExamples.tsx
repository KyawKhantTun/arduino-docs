import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const EXAMPLES = [
  {
    id: "blink",
    label: "Blink LED",
    code: `// The classic 'Hello World'
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off
  delay(1000);                       // wait for a second
}`,
  },
  {
    id: "servo",
    label: "Servo Sweep",
    code: `#include <Servo.h>

Servo myservo;  // create servo object
int pos = 0;    // variable to store the position

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { 
    myservo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15);
  }
}`,
  },
  {
    id: "ultrasonic",
    label: "Ultrasonic Sensor",
    code: `const int trigPin = 9;
const int echoPin = 10;
long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.println(distance);
  delay(100);
}`,
  }
];

export function CodeExamples() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-2">
      <Tabs defaultValue="blink" className="w-full">
        <TabsList className="flex gap-6 mb-4 bg-transparent border-b border-slate-800 rounded-none h-auto p-0">
          {EXAMPLES.map((ex) => (
            <TabsTrigger 
              key={ex.id} 
              value={ex.id}
              className="text-slate-500 font-semibold text-sm pb-1 rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-teal-500 data-[state=active]:shadow-none transition-all px-0"
            >
              {ex.label}.ino
            </TabsTrigger>
          ))}
        </TabsList>
        {EXAMPLES.map((ex) => (
          <TabsContent key={ex.id} value={ex.id} className="focus-visible:outline-none">
            <Card className="border border-slate-800 shadow-none overflow-hidden rounded-2xl bg-[#0d1117]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                <div className="flex items-center gap-2">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   </div>
                   <span className="ml-2 text-xs font-mono text-slate-500 uppercase tracking-widest">{ex.id} source</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-[10px] bg-slate-800 px-3 py-1 rounded text-slate-400 hover:text-white h-7"
                  onClick={() => copyToClipboard(ex.code, ex.id)}
                >
                  {copiedId === ex.id ? (
                    <><Check className="h-3 w-3 mr-2" /> Copied</>
                  ) : (
                    <><Copy className="h-3 w-3 mr-2" /> Copy Code</>
                  )}
                </Button>
              </div>
              <CardContent className="p-0">
                <SyntaxHighlighter
                  language="cpp"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: "2rem",
                    fontSize: "0.875rem",
                    background: "transparent",
                    lineHeight: "1.6"
                  }}
                >
                  {ex.code}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

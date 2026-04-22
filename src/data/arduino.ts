
export interface Specification {
  label: string;
  value: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image: string;
}

export interface DocSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

export const ARDUINO_SPECS: Specification[] = [
  { label: "Microcontroller", value: "ATmega328P", description: "The brain of the board." },
  { label: "Operating Voltage", value: "5V", description: "Standard voltage level." },
  { label: "Input Voltage", value: "7-12V", description: "Recommended range via DC jack." },
  { label: "Digital I/O Pins", value: "14", description: "Of which 6 provide PWM output." },
  { label: "PWM Pins", value: "6", description: "Pins 3, 5, 6, 9, 10, 11." },
  { label: "Analog Input Pins", value: "6", description: "Pins A0 through A5." },
  { label: "Flash Memory", value: "32 KB", description: "Storage for your code programs." },
  { label: "SRAM", value: "2 KB", description: "Working memory for variables." },
  { label: "Clock Speed", value: "16 MHz", description: "Processing speed." },
];

export const ARDUINO_PROJECTS: Project[] = [
  {
    id: "led-blink",
    title: "LED Blink",
    description: "The 'Hello World' of electronics. Learn how to control standard output pins.",
    difficulty: "Beginner",
    image: "https://picsum.photos/seed/arduino-led/400/250",
  },
  {
    id: "line-follower",
    title: "Line Follower Robot",
    description: "Build a robot that follows a black line using infrared sensors.",
    difficulty: "Intermediate",
    image: "https://picsum.photos/seed/arduino-robot/400/250",
  },
  {
    id: "bluetooth-car",
    title: "Bluetooth Car",
    description: "Control your RC car wirelessly using a smartphone app and HC-05 module.",
    difficulty: "Intermediate",
    image: "https://picsum.photos/seed/arduino-car/400/250",
  },
  {
    id: "robotic-arm",
    title: "Robotic Arm",
    description: "A 4-DOF arm using servo motors and potentiometers for manual control.",
    difficulty: "Advanced",
    image: "https://picsum.photos/seed/arduino-arm/400/250",
  },
  {
    id: "temp-monitor",
    title: "Temperature Monitor",
    description: "Display real-time temperature data on an LCD screen using DHT11 sensor.",
    difficulty: "Beginner",
    image: "https://picsum.photos/seed/arduino-temp/400/250",
  },
  {
    id: "ultrasonic-radar",
    title: "Ultrasonic Radar",
    description: "Map your surroundings with sound using a HC-SR04 and a servo.",
    difficulty: "Intermediate",
    image: "https://picsum.photos/seed/arduino-radar/400/250",
  },
];

export const PIN_DATA = [
  { id: "vinc", label: "VIN", type: "power", x: 400, y: 550, description: "Input Voltage to Board" },
  { id: "gnd1", label: "GND", type: "power", x: 420, y: 550, description: "Ground Pin" },
  { id: "d13", label: "Pin 13", type: "digital", x: 50, y: 50, description: "Digital I/O - Built-in LED" },
  // ... more pins will be added in component
];

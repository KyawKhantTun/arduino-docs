import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How do I power the Arduino Uno?",
    answer: "You can power it via the USB connection (5V), the DC power jack (7-12V recommended), or the VIN pin (7-12V). The board automatically selects the highest voltage source."
  },
  {
    question: "What is the difference between Digital and Analog pins?",
    answer: "Digital pins can either be HIGH (5V) or LOW (0V). They are used for simple on/off components like LEDs and buttons. Analog pins can read a range of voltages (0-5V) and convert them to a digital value between 0 and 1023."
  },
  {
    question: "Why is the built-in LED (Pin 13) blinking?",
    answer: "Most Arduino boards come with the 'Blink' sketch pre-loaded from the factory to test the board's functionality. It's a good sign that your board is working correctly!"
  },
  {
    question: "I get an 'Error compiling' message. What should I do?",
    answer: "This usually means there is a typo in your code. Check for missing semicolons, unbalanced brackets, or misspelled variable names. The error message at the bottom of the IDE will usually point to the specific line."
  }
];

export function FAQ() {
  return (
    <section id="troubleshooting" className="py-16">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col mb-12">
          <span className="text-teal-500 font-bold text-xs uppercase tracking-widest">Support</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Frequently Asked Questions</h2>
          <p className="text-slate-400 mt-2">Common issues and their solutions.</p>
        </div>

        <div className="max-w-3xl">
          <Accordion className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-800 rounded-2xl px-6 bg-slate-900/50">
                <AccordionTrigger className="text-lg font-medium text-white hover:text-teal-400 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

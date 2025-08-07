import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline varies depending on the complexity of your project. A simple website typically takes 2-4 weeks, while more complex projects with custom features can take 6-12 weeks. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes! We offer comprehensive maintenance packages that include regular updates, security monitoring, backup services, and technical support. We believe in long-term partnerships with our clients to ensure their websites continue to perform optimally.",
    },
    {
      question: "Can you help with Telegram bot development?",
      answer:
        "Absolutely! We specialize in creating custom Telegram bots for various purposes including customer service, lead generation, e-commerce, and automation. Our bots can integrate with your existing systems and provide 24/7 automated assistance to your customers.",
    },
    {
      question: "What's included in your web development service?",
      answer:
        "Our comprehensive service includes design consultation, responsive web development, SEO optimization, performance optimization, security implementation, content management system setup, and initial training. We also provide testing across all devices and browsers.",
    },
    {
      question: "Do you work with businesses outside of Ethiopia?",
      answer:
        "Yes, while we're based in Ethiopia, we work with clients globally. Thanks to modern communication tools and our streamlined remote work processes, we can effectively collaborate with businesses anywhere in the world.",
    },
    {
      question: "What makes Click different from other agencies?",
      answer:
        "We focus on delivering measurable results, not just beautiful designs. Our approach combines modern technology with proven business strategies. We also offer competitive pricing without compromising on quality, and we're committed to building long-term relationships with our clients.",
    },
  ];

  return (
    <section
      id="faq"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="snap-child py-20 bg-gray-900/30 min-h-screen h-full w-full flex flex-col my-auto justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-brand-white">Answers to Your Top </span>
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Check out our frequently asked questions to learn more about our
            process, services, and what to expect.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              value={`item-${index}`}
              className="bg-brand-dark border border-gray-800 rounded-lg px-6 py-2 hover:border-brand-blue transition-colors duration-200"
            >
              <AccordionTrigger className="text-left text-lg text-brand-white hover:text-brand-lime hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

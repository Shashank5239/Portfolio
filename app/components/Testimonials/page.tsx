import Image from 'next/image'
import TestimonialsLayout from './layout'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Smith",
      position: "CEO, TechConf Inc.",
      content: "John's expertise in event management transformed our annual tech conference. His attention to detail and innovative ideas made it our most successful event yet.",
      image: "/placeholder.svg"
    },
    {
      name: "Mike Johnson",
      position: "Director, Charity Foundation",
      content: "Working with John on our charity gala was a pleasure. His ability to manage complex logistics while keeping the event's mission at the forefront was impressive.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Lee",
      position: "Marketing Manager, MusicFest",
      content: "John's leadership during our music festival was outstanding. He handled last-minute changes with grace and ensured a smooth experience for both artists and attendees.",
      image: "/placeholder.svg"
    }
  ]

  return (
    <TestimonialsLayout>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Testimonials</h2>
      <div className="">
        <div className="flex slider">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
              <div className="glass-effect hover-glow p-6 h-full rounded-2xl">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TestimonialsLayout>
  )
}


"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Siobhan McGrath",
    testimonial:
      "I attended Eileen's school for many years and I have found the experience I gained there has benefit me so much in college and work life. The skills I have learnt in public speaking make giving presentations an enjoyable experience and job interviews a much less daunting thought. Excellent school and an excellent teacher!",
  },
  {
    name: "Stephen McNamara",
    testimonial:
      "Had many a wonderful year at this school under the guidance of Eileen Fitzgerald. Eileen creates a warm and friendly environment where all students learn different acting traits in a fun and enjoyable way. She also continues to keep a very close relationship with all her students many years after you have completed your degree. Speech and Drama provides brilliant opportunities to improve in public speaking and acting where your social skills automatically develop also. It is an excellent hobby for any young child and The Eileen Fitzgerald School is a superb place to master this hobby.",
  },
  {
    name: "Sarah Coote",
    testimonial:
      "I attended this school for over 10 years and had the most amazing time. Speech and drama has always been a very special part of me since attending. Eileen is the most fantastic teacher and a true friend to all of her students.",
  },
  {
    name: "Ava Power",
    testimonial:
      "I became a student of the Eileen Fitzgerald School of Speech and Drama over fifteen years ago and I am all the better for it. Eileen is a wonderful teacher and mentor. She is completely devoted to her students and has been a great support to me in projects I’ve taken on after attending her school. The teaching I received from Eileen has made a great and lasting impact on my communication and performance skills. Eileen creates a learning environment that is friendly, fun and wherein all students feel encouraged to reach their full potential. I can’t recommend Eileen and her school of Speech and Drama highly enough.",
  },
  {
    name: "Katie McDermott",
    testimonial:
      "I just finished my 13th year with Eileen and would highly recommend. It has helped me so much with my confidence in such a friendly environment. I have made great friends though class and competitions. Eileen always has great time for all her students.",
  },
  {
    name: "Mikhaila Fitzpatrick",
    testimonial:
      "The Eileen Fitzgerald School of Speech and Drama gave me some of the most memorable years of my life. From Junior Infants all the way up to Leaving Cert, I was with Eileen competing in Feile Luimnigh and completing my grades with the Irish Board. Classes with Eileen and Ciara were always a positive and fun experience, with an emphasis on a wide range of important skills that I've come to realise are so very prominant in our everyday lives. Eileen is an empathetic leader who cares about her students and their experiences in her classroom. It is no wonder that Eileen remains friends with many of her past pupils.",
  },
  {
    name: "Sorchie Roche",
    testimonial:
      "I attended classes with Eileen for 10 years and I am so glad I did. It gave me confidence to be able to get up and speak in front of people and it was always great fun too :) Eileen is a fantastic teacher, who was very patient with me and very encouraging :) I really enjoyed my time in the class and recommend it to everyone",
  },
  {
    name: "Karoline O'Sullivan",
    testimonial:
      "I was a very shy and nervous nine year old going into my first Speech & Drama class with Eileen. I did not expect that very soon, Tuesday evenings would be my favourite time of the week. The hour we spent in Eileen's class each week helped me to grow my confidence, communication and storytelling skills all through games and creative learning. As a storytelling and presentation skills trainer now at Google. I am so grateful for all those years of learning what is now one of the most sought after skills by employers. And all in the most nurturing and encouraging way thanks to Eileen's techniques and teaching style.",
  },
];

const Testimonials = () => {
  return (
    <div className="pb-10 text-gray-200">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Testimonials
      </h1>
      <p className="text-center text-base mb-10 md:w-1/2 mx-auto">
        See what our pupils have to say
      </p>
      <Carousel
        orientation="horizontal"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-4 w-screen lg:w-full">
          {testimonials.map((testimonial, i) => {
            return (
              <CarouselItem
                key={`${testimonial.name}_${i}`}
                className="basis-10/12 sm:basis-1/2 lg:basis-1/3 sm:pl-4 relative"
              >
                <Quote
                  className="absolute top-0 right-0 text-primary opacity-20 -z-10"
                  size={120}
                />
                <div className="border-primary border-2 h-full p-5 flex flex-col justify-between">
                  <p className="text-sm mb-3">{testimonial.testimonial}</p>
                  <h6 className="flex flex-row items-center justify-end">
                    <span className="w-7 bg-slate-200 h-0.5 mr-2"></span>
                    {testimonial.name}
                  </h6>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;

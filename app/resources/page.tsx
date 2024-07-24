import React from "react";
import Container from "@/components/custom/container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Eileen Fitzgerald",
  description:
    "Drama, poetry and exam links that are useful to the students of The Eileen Fitzgerald School of Speech and Drama",
};

const dramaLinks = [
  { label: "Daily Actor", link: "https://www.dailyactor.com/" },
  {
    label: "Drama Notebook - Dramas for Teenagers",
    link: "http://www.dramanotebook.com/monologues-teenagers",
  },
  { label: "Ace Your Audition", link: "https://www.ace-your-audition.com/" },
  { label: "Monologue Archive", link: "https://www.monologuearchive.com/" },
  {
    label: "Shakespeare Monologues - Men",
    link: "https://www.shakespeare-monologues.org/mens",
  },
  {
    label: "Shakespeare Monologues - Women",
    link: "https://www.shakespeare-monologues.org/womens",
  },
];

const poetryLinks = [
  { label: "Poetry4Kids", link: "http://www.poetry4kids.com/" },
  {
    label: "DLTK Holidays",
    link: "https://www.dltk-holidays.com/",
  },
  { label: "FizzyFunnyFuzzy", link: "http://www.fizzyfunnyfuzzy.com/" },
  {
    label: "Classroom Tested Resources",
    link: "https://www.classroomtestedresources.com/",
  },
  {
    label: "Ireland Calling - Poems by Irish Poets",
    link: "http://www.ireland-calling.com/",
  },
];

const feisAndExamInfoLinks = [
  {
    label: "Official Feile Luimnigh website",
    link: "http://www.feileluimnigh.ie/",
  },
  {
    label: "Official Irish Board website",
    link: "http://www.irishboard.ie/home/",
  },
  {
    label: "Irish Board - Exam theory",
    link: "https://www.irishboard.ie/wp-content/uploads/2017/09/IBSDTheoryGuide2018-20.pdf",
  },
  {
    label: "Irish Board - Grade Poems",
    link: "https://www.irishboard.ie/wp-content/uploads/2017/01/IBSD-Grade-Poem-Suggestions-2017.pdf",
  },
];

const links = [
  { title: "Drama Links", links: dramaLinks },
  { title: "Poetry Links", links: poetryLinks },
  { title: "Feis and Exam Links", links: feisAndExamInfoLinks },
];

const Resources = () => {
  return (
    <Container className="my-10 text-gray-200 ">
      <h1 className="text-center text-2xl md:text-4xl mb-2">Resources</h1>
      <p className="text-center text-base mb-10 md:w-1/2 mx-auto">
        Useful links for our students
      </p>
      <div className="flex flex-col md:flex-row space-y-10 md:space-x-2 md:space-y-0 xl:space-x-10">
        {links.map((linkGroup, i) => {
          return (
            <div
              key={`${linkGroup.title}_${i}`}
              className="bg-primary p-5 w-full md:w-1/3 mx-auto"
            >
              <h2 className="text-2xl mb-5 text-center">{linkGroup.title}</h2>
              <div className="flex flex-col">
                {linkGroup.links.map((link, i) => {
                  return (
                    <Link
                      key={`${link.label}_${i}`}
                      href={link.link}
                      target="_blank"
                      className="mb-3 relative w-fit block"
                    >
                      <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-1 after:left-0 after:bg-gray-200 after:scale-x-0 after:transition-all hover:after:scale-x-100">
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Resources;

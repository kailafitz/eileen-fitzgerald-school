import Container from "@/components/custom/container";
import Link from "next/link";
import React from "react";

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
    <Container className="my-10">
      <h1 className="text-gray-200 text-center text-2xl md:text-4xl mb-10">
        Resources - Useful Links
      </h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-x-2 md:space-y-0 xl:space-x-10">
        {links.map((linkGroup, i) => {
          return (
            <div
              key={`${linkGroup.title}_${i}`}
              className="bg-violet-500 text-gray-200 p-5 w-full md:w-1/3 mx-auto"
            >
              <h2 className="text-2xl mb-5 text-center">{linkGroup.title}</h2>
              <div className="flex flex-col">
                {linkGroup.links.map((link, i) => {
                  return (
                    <Link
                      key={`${link.label}_${i}`}
                      href={link.link}
                      target="_blank"
                      className="mb-3 hover:underline"
                    >
                      {link.label}
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

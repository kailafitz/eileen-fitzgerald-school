import React from "react";
import Container from "@/components/custom/container";
import { Metadata } from "next";
import Link from "next/link";
import MotionDiv from "@/components/custom/motionDiv";
import SectionHeading from "@/components/custom/sectionHeading";
import LinkAnimation from "@/components/custom/linkAnimation";
import ActionBanner from "@/components/custom/actionBanner";

export const metadata: Metadata = {
  title: "Resources | Eileen Fitzgerald",
  description:
    "Drama, poetry and exam links that are useful to the students of The Eileen Fitzgerald School of Speech and Drama",
  openGraph: {
    title: "Resources | The Eileen Fitzgerald School of Speech and Drama",
    description:
      "Drama, poetry and exam links that are useful to the students of The Eileen Fitzgerald School of Speech and Drama",
  },
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
    <>
      <Container className="mb-20">
        <SectionHeading
          title="Resources"
          subtitle="A variety of useful links for our students to explore for inspiration and information"
        />
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-2 md:space-y-0 xl:space-x-10">
          {links.map((linkGroup, i) => {
            return (
              <MotionDiv
                key={`${linkGroup.title}_${i}`}
                className="w-full md:w-1/3 mx-auto border-primary border-2"
              >
                <h2 className="font-heading text-2xl text-center bg-primary py-2">
                  {linkGroup.title}
                </h2>
                <div className="flex flex-col p-5 space-y-4">
                  {linkGroup.links.map((link, i) => {
                    return (
                      <Link
                        key={`${link.label}_${i}`}
                        href={link.link}
                        target="_blank"
                        className="relative w-fit block"
                      >
                        <LinkAnimation>{link.label}</LinkAnimation>
                      </Link>
                    );
                  })}
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </Container>
      <ActionBanner />
    </>
  );
};

export default Resources;

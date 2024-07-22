import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Container from "./container";

const publicSpeaking = [
  "Engaging an audience",
  "Vocal techniques including clarity",
  "Projection and pacing",
  "Effective communication",
  "Speech exercises",
  "Speech preparation and delivery technique",
];

const PublicSpeaking = () => {
  return (
    <Container className="mb-10 text-gray-200" id="public-speaking">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Public Speaking
      </h1>
      <p className="mb-5">
        Do you have an upcoming presentation? Do you have a fear of speaking in
        public? Is there an interview you really want to succeed at? Have you a
        wedding speech to present? Need help in presenting a CBA? Would you like
        to improve your communication skills and deliver a more effective
        message to your audience?
      </p>
      <p>
        This is a four week course available for small groups or one to one
        sessions:
      </p>
      <ul className="mb-5">
        <li className="ml-5">
          Small groups of four in a 45 minutes class over four weeks - €160
        </li>
        <li className="ml-5">
          One-to-one 30 minutes class over four weeks - €320
        </li>
      </ul>
      <p className="mb-5">**Room or Zoom available**</p>
      <h4 className="text-left mb-3">Course Content</h4>
      <Table>
        <TableBody>
          {publicSpeaking.map((activity, i) => {
            return (
              <TableRow key={`${activity}_${i}`}>
                <TableCell>{activity}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default PublicSpeaking;

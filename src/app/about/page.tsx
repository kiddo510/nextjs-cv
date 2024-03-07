import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import { Stack } from "@mui/material";

export default function About() {
  return (
    <Stack direction={"column"} spacing={2} alignItems={"center"}>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <img
          src="https://www.pikpng.com/pngl/m/395-3958745_bilbo-baggins-hobbit-gandalf-boy-play-png-image.png"
          alt="profile"
          width="500"
          height="500"
        />

        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "blue",
          }}
        >
          <h4>About me</h4>
          <h2>Name: Katarina Veberova</h2>
          <h4> Contact info tel: 0944147504</h4>
          <h4> tel: 0944147504</h4>
          <h4> email: ktrn@gmail.com</h4>
        </Box>
      </Stack>
      <Box>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          Hi guys! I'm a former translator with a recently rediscovered passion
          for software development and modern web technologies. My journey in
          the world of software development began at highschool with one of my
          leaving exams focused on IT. I have always loved turning complex
          challenges into efficient, user-friendly and elegant solutions both
          when working with a foreign language or a programming one.
        </Typography>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          My skill set revolves around JavaScript and its various frameworks and
          supersets. I've gained some backend expertise using Node.js and
          Express.js. Crafting REST APIs comes naturally to me, allowing me to
          create seamless interactions between different components of an
          application.
        </Typography>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          On the frontend, I'm comfortable in React.js and have hands-on
          experience with tools like Create React App (CRA), NEXT.JS Chakra UI,
          and Material-UI (MUI) to create smooth and responsive user interfaces.
          I take pride in my ability to write clean, maintainable code and am
          meticulous about adhering to best practices. Tools like Prettier and
          ESLint are my allies in ensuring that my codebase remains tidy and
          consistent.
        </Typography>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          Testing is a crucial part of any development process, and I'm
          proficient in both unit and integration testing using Jest. I believe
          that robust testing leads to more reliable software and a smoother
          user experience.
        </Typography>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          As a continuous learner, I'm always seeking opportunities to enhance
          my skills and stay up-to-date with the latest industry trends. I'm
          excited to collaborate with like-minded professionals, play with
          innovative ideas, and build software solutions.
        </Typography>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          In a nutshell, I'm a dedicated junior software developer who thrives
          on crafting high-quality, user-centric applications. With a strong
          grasp of JavaScript, TypeScript, Node.js, Express.js, React.js, and a
          toolkit of best practices and testing methodologies, I'm eager to
          contribute my skills and enthusiasm to the world of software
          development.
        </Typography>
      </Box>
    </Stack>
  );
}

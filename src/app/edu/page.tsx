import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { Colorize } from "@mui/icons-material";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function Education() {
  return (
    <Stack direction={"column"} spacing={2}>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", color: "green" }}
        >
          Skills
        </Typography>
        <List>
          `
          <ListItem disablePadding>
            <ListItemIcon>
              <CelebrationIcon />
              <ListItemText primary="JavaScript, TypeScript" />
            </ListItemIcon>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CelebrationIcon />
              <ListItemText primary="Node.js, Express.js" />
            </ListItemIcon>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CelebrationIcon />
              <ListItemText primary="React.js, CRA, Chakra UI, MUI" />
            </ListItemIcon>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CelebrationIcon />
              <ListItemText primary="EST API" />
            </ListItemIcon>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CelebrationIcon />
              <ListItemText primary="Unit & integration testing, jest" />
            </ListItemIcon>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CelebrationIcon />
              <ListItemText primary="Clean code, prettier, eslint" />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", color: "green" }}
        >
          Education
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", textColor: "red", color: "red" }}
        >
          E-learnning - Online courses in software development
        </Typography>
        <Typography paragraph>2021 - present</Typography>

        <Typography paragraph sx={{ paddingBottom: 2 }}>
          Fullstack open, Freecodecamp, w3schools, Mimo, personal projects
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", color: "red" }}
        >
          Univerzita Konstantina Filozofa v Nitre, Filozoficka fakulta -
          Masters`s degree in translating and interpreting, specialized in
          russian and english languages
        </Typography>
        <Typography paragraph>2008 - 2013, Nitra</Typography>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          Amazing school and great location to study.
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", color: "red" }}
        >
          Univerzita Komenského v Bratislave, Filozoficka fakulta - Bachelor's
          degree in teaching, specialized in english and slovak literature
        </Typography>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          2006 - 2008, Bratislava
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", color: "red" }}
        >
          Gymnázium Ladislava Novomeskeho
        </Typography>
        <Typography paragraph>1998 - 2006, Bratislava</Typography>
        <Typography paragraph sx={{ paddingBottom: 2 }}>
          I was in class with a primary focus on languages and IT.
        </Typography>
      </Box>
    </Stack>
  );
}

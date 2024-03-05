import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import { List, ListItem, ListItemIcon } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ListItemText from "@mui/material/ListItemText";

export default function Experience() {
  return (
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
        Experience
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", textColor: "red", color: "red" }}
      >
        Freelance translator
      </Typography>

      <Typography paragraph sx={{ paddingBottom: 2 }}>
        2023 - present
      </Typography>

      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", color: "red" }}
      >
        IKEA - sales assistant
      </Typography>

      <Typography paragraph sx={{ paddingBottom: 2 }}>
        2020 - 2023
      </Typography>

      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", color: "red" }}
      >
        Citadella publishing - contracted translator
      </Typography>
      <Typography paragraph sx={{ paddingBottom: 2 }}>
        2014 - 2020
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <CelebrationIcon />
            <ListItemText primary="Translating books for a publishing house" />
          </ListItemIcon>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <CelebrationIcon />
            <ListItemText primary="Interpreting for authors on promotional events" />
          </ListItemIcon>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <CelebrationIcon />
            <ListItemText primary="Contract management and communication with subagencies" />
          </ListItemIcon>
        </ListItem>
      </List>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", color: "red" }}
      >
        Interview with photography project - interpreting, translation and
        editing
      </Typography>
      <Typography paragraph>2014</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <CelebrationIcon />
            <ListItemText primary="Book series interviewing world renown photographers" />
          </ListItemIcon>
        </ListItem>
      </List>

      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", color: "red" }}
      >
        National Memory Institute - subtitles
      </Typography>
      <Typography paragraph>2012</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <CelebrationIcon />
            <ListItemText primary="Subtitling series of documentaries from the “Memory of our Nation” cycle" />
          </ListItemIcon>
        </ListItem>
      </List>

      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", color: "red" }}
      >
        Conference in Banska stiavnica - interpreting
      </Typography>
      <Typography paragraph>2012</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <CelebrationIcon />
            <ListItemText primary="250 year anniversary of founding of the Mining and forestry University in Banska Stiavnica" />
          </ListItemIcon>
        </ListItem>
      </List>

      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", color: "red" }}
      >
        Slovak National Televison - subtitles for documentary “WTC 10 years
        after”
      </Typography>
      <Typography paragraph>2011</Typography>

      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", color: "red" }}
      >
        Nezabudka language school - language tutor
      </Typography>
      <Typography paragraph>2005 - 2009</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <CelebrationIcon />
            <ListItemText
              primary="Planning lessons, preparing specialized materials
"
            />
          </ListItemIcon>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <CelebrationIcon />
            <ListItemText
              primary="Communication and presenting
"
            />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}

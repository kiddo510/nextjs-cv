import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { Button, Stack } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", width: "200px" }}>
        <Stack sx={{ padding: 2 }} spacing={1}>
          <Link href="/about" color="secondary" component={NextLink}>
            <Button variant="contained">About me</Button>
          </Link>
          <Link href="/edu" color="secondary" component={NextLink}>
            <Button variant="contained">Education</Button>
          </Link>
          <Link href="/exper" color="secondary" component={NextLink}>
            <Button variant="contained">Experience</Button>
          </Link>
        </Stack>
      </Box>
      <Stack sx={{ height: "100vh", width: "100%" }} justifyItems={"center"}>
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "#cfe8fc",
          }}
        >
          {children}
        </Container>
      </Stack>
    </Stack>
  );
}

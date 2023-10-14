import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const HomePage = () => {
  const [webProjects, setWebProjects] = useState([]);
  const [appProjects, setAppProjects] = useState([]);

  useEffect(() => {
    // Fetch random project data for web development from Lorem Picsum API
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=3")
      .then((response) => {
        setWebProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching web project data:", error);
      });

    // Fetch random project data for app development from Lorem Picsum API
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=3")
      .then((response) => {
        setAppProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching app project data:", error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Explore my latest projects in web and app development.
        </Typography>

        <Typography variant="h4" align="center" gutterBottom>
          Web Development Projects
        </Typography>
        <Grid container spacing={3}>
          {webProjects.map((project) => (
            <Grid key={project.id} item xs={12} md={4}>
              <Card>
                <img
                  src={project.download_url} // Random image URL from Lorem Picsum
                  alt={`Web Project ${project.id}`}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    Web Project {project.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod bibendum sem ut sollicitudin.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: 40 }}
          gutterBottom
        >
          App Development Projects
        </Typography>
        <Grid container spacing={3}>
          {appProjects.map((project) => (
            <Grid key={project.id} item xs={12} md={4}>
              <Card>
                <img
                  src={project.download_url} // Random image URL from Lorem Picsum
                  alt={`App Project ${project.id}`}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    App Project {project.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Sed euismod bibendum sem ut sollicitudin. Cras tincidunt,
                    urna eget pharetra mollis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        >
          <Button variant="contained" color="primary" href="/projects">
            View All Projects
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

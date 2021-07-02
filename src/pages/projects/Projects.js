import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Header from "../../components/appbar/Appbar";
import Categories from "../../components/categories/Categories";
import ProjectDetails from "./ProjectDetails";
import Copyright from "../../components/copyright/Copyright";
import useStyles from "./projectsStyles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

async function createFetchProjectsJob() {
  const fetchPrj = axios.get("/getProjects");
  return fetchPrj;
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    await createFetchProjectsJob().then((r) => {
      setProjects(r.data.data);
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Categories />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {console.log(projects)}
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  component={Link}
                  to={`/projects/${project.id}`}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>{project.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>

      <Route path="/projects/:projectId" component={ProjectDetails} />
    </React.Fragment>
  );
}

// {/* <Grid container spacing={4}>
// {cards.map((card) => (
//   <Grid item key={card} xs={12} sm={6} md={4}>
//     <Card className={classes.card}>
// <CardMedia
//   className={classes.cardMedia}
//   image="https://source.unsplash.com/random"
//   title="Image title"
// />
//       <CardContent className={classes.cardContent}>
//         <Typography>
//           This is a media card. You can use this section to describe
//           the content.
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
// ))}
// </Grid> */}

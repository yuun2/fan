import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Header from "../../components/appbar/Appbar";
import Copyright from "../../components/copyright/Copyright";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// import CardMedia from '@material-ui/core/CardMedia';

async function createFetchProjectsJob() {
  const fetchPrj = axios.get("/getProjects");
  return fetchPrj;
}

const ProjectDetails = ({ match }) => {
  const { projectIndex } = match.params;
  const [projects, setProjects] = useState([]);
  const [crntPrj, setCrntPrj] = useState();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    await createFetchProjectsJob().then((r) => {
      setCrntPrj(r.data.data[projectIndex]);
    });
  };

  const comments = [
    {
      name: "창윤",
      text: "피자 맛있겠다.",
    },
    {
      name: "태호",
      text: "이건 못참지",
    },
  ];
  const comments_num = useRef(2);

  const comments_view = comments.map((comment) => {
    return (
      <TableRow>
        <TableCell>{comment.name}</TableCell>
        <TableCell>{comment.text}</TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      <Header />
      <Typography variant="h3">
        {console.log("typo")}
        {console.log(crntPrj)}
        {/* {crntPrj.title} */}
      </Typography>
      {/* <img src={crntPrj.image} /> */}

      {/* comments */}
      <div>댓글 {comments_num.current}개</div>
      <hr />
      <Table>
        <TableBody>{comments_view}</TableBody>
      </Table>
      <Copyright />
    </div>
  );
};

export default ProjectDetails;

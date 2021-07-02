import React, { useRef } from "react";

import Header from "../../components/appbar/Appbar";
import Copyright from "../../components/copyright/Copyright";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const ProjectDetails = ({ match }) => {
  const {projectID} = match.params;
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
      {projectID}
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
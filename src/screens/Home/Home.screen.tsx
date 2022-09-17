import React from "react";

import Wrapper from "../../components/wrapper/wrapper.components";
import Post from "../../models/Post";
import { getPostsList } from "../../services/gyf.service";

export default function Home() {
  getPostsList().then((resp: Post[]) => {
    console.log(resp[2].title);
  });

  return <Wrapper refreshControl={() => {}} child={<></>} />;
}

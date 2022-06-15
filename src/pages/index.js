import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Heyyyyyyyyyyyyyyyyyyyyy</p>
            <StaticImage alt="JJ looking outside the window" src="../images/jj.jpg" />
        </Layout>
    );
};

export default IndexPage;

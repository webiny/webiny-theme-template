import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Addons } from "webiny-app/components";

const StaticPage = ({ children }) => {
    return (
        <React.Fragment>
            <Addons />
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default StaticPage;

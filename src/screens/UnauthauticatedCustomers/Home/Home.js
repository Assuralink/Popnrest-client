import React from "react";
import Head from "./Head/index";
import WhoWeAre from "./WhoWeAre/index";
import HowItWorks from "./HowItWorks/index";
import PostCovidMeasures from "./PostCovidMeasures/index";
import Unwind from "./Unwind/index";
import UnlockYourPrivateSpace from "./UnlockYourPrivateSpace/index";
import OnDemandSpaces from "./OnDemandSpaces/index";
import PartnersAndPress from "./PartnersAndPress/index";
import OurNewsletter from "./OurNewsletter/index";

class Home extends React.Component {
  render() {
    return (
      <section>
        <Head />
        <WhoWeAre />
        <HowItWorks />
        <PostCovidMeasures />
        <Unwind />
        <UnlockYourPrivateSpace />
        <OnDemandSpaces />
        <PartnersAndPress />
        <OurNewsletter />
      </section>
    );
  }
}

export default Home;

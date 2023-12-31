import React from "react";
import LazyLoad from "react-lazyload";
import { Background, Column, ProjectImage } from "./elements";
import Capi from "../../assets/capi.png";
import Capi2 from "../../assets/capi2.png";
import Sara from "../../assets/sara.png";
import Sara2 from "../../assets/sara2.png";
import Clara from "../../assets/claraa.png";
import Snake from "../../assets/snake.png";
import Cosima from "../../assets/cosima.png";
import Gabi from "../../assets/gabi.png";
import Gabi2 from "../../assets/gabi2.png";
import Danny from "../../assets/danny.png";
import Kate from "../../assets/kate.png";
import Kate2 from "../../assets/kate2.png";
import Kyle from "../../assets/kyle.png";
import Kyle2 from "../../assets/kyle2.png";
import Danny2 from "../../assets/danny2.png";
import FooterComponent from "../../Components/Footer";
import FadeOverlay from "../../Components/FadeOverlay";
import CV from "../../assets/Kate_Bonner_CV_2023.png";

const Placeholder = () => (
  <div
    style={{ width: "50vw", height: "auto", backgroundColor: "#333333" }}
  ></div>
);

const Art = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <Column>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Kate} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Kate2} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Kyle} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Kyle2} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Danny2} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Danny} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Gabi2} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Gabi} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Clara} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Cosima} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Snake} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Snake} width="50vw" />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage
            src={Sara}
            width="50vw"
            style={{ filter: "saturate(120%)" }}
          />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage
            src={Sara2}
            width="50vw"
            style={{ filter: "saturate(120%)" }}
          />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage
            src={Capi2}
            width="50vw"
            style={{ filter: "saturate(120%)" }}
          />
        </LazyLoad>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage
            src={Capi}
            width="50vw"
            style={{ filter: "saturate(120%)" }}
          />
        </LazyLoad>
      </Column>
      <FooterComponent
        linkedInURL="https://www.linkedin.com/in/kate-bonner/"
        emailAddress="katebonner277@gmail.com"
        githubURL="https://github.com/katebonner"
        CV={CV}
      />
    </>
  );
};

export default Art;

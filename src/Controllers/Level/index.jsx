import React from "react";
import { Background, Heading1 } from "./elements";
import {
  ProjectImage,
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
  ImageWrapper,
  Overlay,
} from "./elements";
import LevelImage from "../../assets/level-01.png";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

const labelToEmojiMap = {
  ACOUSTICNESS: "🎸",
  DANCEABILITY: "🕺",
  ENERGY: "⚡",
  INSTRUMENTALNESS: "🎻",
  LIVENESS: "🔥",
  SPEECHINESS: "🎤",
  HAPPINESS: "😊",
};

const emojiPlugin = {
  id: "emojiPlugin",
  afterDraw: function (chart) {
    const ctx = chart.ctx;

    chart.data.datasets.forEach((dataset, index) => {
      const meta = chart.getDatasetMeta(index);
      meta.data.forEach((point, pointIndex) => {
        const label = chart.data.labels[pointIndex];
        const emoji = labelToEmojiMap[label];
        if (emoji) {
          ctx.font = "40px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(emoji, point.x, point.y);
        }
      });
    });
  },
};

Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  emojiPlugin
);

const Level = () => {
  const audioFeatures = {
    labels: [
      "ACOUSTICNESS",
      "DANCEABILITY",
      "ENERGY",
      "INSTRUMENTALNESS",
      "LIVENESS",
      "SPEECHINESS",
      "HAPPINESS",
    ],
    datasets: [
      {
        data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        fill: true,
        responsive: true,
        backgroundColor: "rgba(42, 100, 68, 0.5)",
        borderColor: "rgb(42, 100, 68)",
        pointBackgroundColor: "rgb(42, 100, 68)",
        pointBorderColor: "rgb(42, 100, 68)",
        pointHoverBackgroundColor: "#2a6444",
        pointHoverBorderColor: "#2a6444",
      },
    ],
  };

  const getFontSize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      return 10;
    } else if (width <= 1024) {
      return 18;
    } else {
      return 20;
    }
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(42, 100, 68, 0.5)",
        },
        ticks: {
          color: "#2a6444",
          showLabelBackdrop: false,
          font: {
            size: getFontSize(),
            weight: 600,
          },
        },
        pointLabels: {
          color: "#2a6444",
          font: {
            size: getFontSize(),
            weight: 600,
          },
        },
        grid: {
          color: "rgba(42, 100, 68, 0.5)",
        },
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "easeInBounce",
        from: 0.6,
        to: 0.3,
        loop: true,
      },
    },
  };

  return (
    <>
      <Background />
      <a
        href="https://katebonner.github.io/level/"
        target="_blank"
        rel="noreferrer"
      >
        <ImageWrapper>
          <ProjectImage src={LevelImage} alt="Project" />
          <Overlay className="overlay">VISIT WEBSITE</Overlay>
        </ImageWrapper>
      </a>
      <ProjectDescriptionContainer>
        <Description>Visualizing Audio Features for Spotify Users</Description>

        <Description>Role: Designer, Developer</Description>
        <Description>(2023)</Description>
      </ProjectDescriptionContainer>
      <CaseContainer>
        <Text2>(001)</Text2>
        <Heading1>Introduction</Heading1>
        <Text1>
          With the growing digital landscape of music streaming, users are
          ever-curious about better understanding their preferences and what
          makes them unique. Identifying a gap in the market for a tool that
          allows users to visualize the audio features of their most listened to
          Spotify tracks, I began designing and developing a dedicated website.
          This platform would seamlessly allow Spotify users to connect to their
          accounts and access a visual representation of the audio features of
          their most recent top 50 tracks.
        </Text1>

        <Text2>(002)</Text2>
        <Heading1>Problem Outline</Heading1>
        <Text1>
          The primary users for this feature are Spotify listeners who possess a
          playful yet keen interest in understanding the musical components of
          their preferred tracks. The challenge was to design and implement an
          intuitive and visually striking interface that would allow users to
          easily access and interpret the audio features of their top tracks.
        </Text1>

        <Radar data={audioFeatures} key={4} options={chartOptions} />

        <Text2>(003)</Text2>
        <Heading1>The Design Process</Heading1>
        <Text1>
          Being a solo project, the design process was initiated with personal
          brainstorming sessions, allowing me to conceptualize how the user
          journey would unfold. Ideation sketches and notes became the
          foundation of the design. Recognizing the importance of user feedback
          even in the early stages, I ran informal user tests with friends.
          These early feedback loops provided critical information that was
          instrumental in guiding which audio features to visualize as well as
          how to address the accessing of user data. As the design matured, I
          integrated the visual elements and website copy with Spotify's brand
          identity, ensuring that users would find the interface both familiar
          and novel.
        </Text1>
        <Text2>(004)</Text2>
        <Heading1>The Development Process</Heading1>
        <Text1>
          In the development phase, I architected the website using Javascript
          and React to ensure a seamless integration with the Spotify API.
          However, I hit a snag during the user testing phase, specifically
          concerning Spotify account authorization. As standard for any nascent
          Spotify-related app, mine was also relegated to a restrictive
          development mode, allowing only 25 unique beta testers. This
          bottleneck hampered comprehensive testing, limiting both the volume
          and richness of feedback. Recognizing the potential impact on the
          project's efficacy, I pursued an extended quota and a higher rate
          limit from Spotify. This proactive measure was vital to guarantee a
          consistent and universal user experience.
        </Text1>
      </CaseContainer>
    </>
  );
};

export default Level;

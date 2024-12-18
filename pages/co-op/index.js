import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import BottomNav from "../../components/bottomNav/BottomNav";
import Chart from "../../components/charts/Chart";
import styles from "../profile.module.scss";
import colors from "../../styles/colors.module.scss";
import { getSortedCoopData } from "../../lib/sort/getSortedCoopData";

export const getStaticProps = async () => {
  const data = await getSortedCoopData();
  return {
    props: {
      ...data,
    },
  };
};

export default function Coop(data) {
  const colorTheme = [
    colors.coop1,
    colors.coop2,
    colors.coop3,
    colors.coop4,
    colors.coop5,
  ];

  const roundData = {
    label: data.rounds,
    val: data.roundValues,
    color: colorTheme[1],
    title: "Employment Rounds",
    n: data.roundRespondents,
    xAxis: "Co-op Round",
    yAxis: "Number of Students",
  };

  const jobPlatformData = {
    label: data.jobPlatforms,
    val: data.jobPlatformValues,
    color: [colorTheme[0], colorTheme[2]],
    title: "Job Platforms",
    n: data.jobPlatformRespondents,
  };

  const jobTypeData = {
    label: data.jobTypes,
    val: data.jobTypeValues,
    color: colorTheme[1],
    title: "What jobs did we do?",
    n: data.jobTypeRespondents,
    xAxis: "Job Type",
    yAxis: "Number of Students",
  };

  const locationData = {
    label: data.locations,
    val: data.locationValues,
    color: colorTheme[1],
    title: "Co-op Locations",
    n: data.locationRespondents,
    xAxis: "Location",
    yAxis: "Number of Students",
  };

  const payVsSatisfactionData = {
    val: data.payVsSatisfaction,
    color: colorTheme[1],
    title: "Co-op Pay vs Job Satisfaction",
    n: data.payVsSatisfactionRespondents,
    xAxis: "Pay ($CAD/hr)",
    yAxis: "Satisfaction Level",
    ymin: 1,
  };

  const averageVsPayData = {
    label: ["65-69", "70-74", "75-79", "80-84", "85-89", "90-94", "95-100"],
    val: [
      {
        min: data.averageVsPay[65][0],
        q1: data.averageVsPay[65][1],
        q2: data.averageVsPay[65][2],
        q3: data.averageVsPay[65][3],
        max: data.averageVsPay[65][4],
        outliers: data.averageVsPay[65][5],
        mean: data.averageVsPay[65][6],
        median: data.averageVsPay[65][7],
      },
      {
        min: data.averageVsPay[70][0],
        q1: data.averageVsPay[70][1],
        q2: data.averageVsPay[70][2],
        q3: data.averageVsPay[70][3],
        max: data.averageVsPay[70][4],
        outliers: data.averageVsPay[70][5],
        mean: data.averageVsPay[70][6],
        median: data.averageVsPay[70][7],
      },
      {
        min: data.averageVsPay[75][0],
        q1: data.averageVsPay[75][1],
        q2: data.averageVsPay[75][2],
        q3: data.averageVsPay[75][3],
        max: data.averageVsPay[75][4],
        outliers: data.averageVsPay[75][5],
        mean: data.averageVsPay[75][6],
        median: data.averageVsPay[75][7],
      },
      {
        min: data.averageVsPay[80][0],
        q1: data.averageVsPay[80][1],
        q2: data.averageVsPay[80][2],
        q3: data.averageVsPay[80][3],
        max: data.averageVsPay[80][4],
        outliers: data.averageVsPay[80][5],
        mean: data.averageVsPay[80][6],
        median: data.averageVsPay[80][7],
      },
      {
        min: data.averageVsPay[85][0],
        q1: data.averageVsPay[85][1],
        q2: data.averageVsPay[85][2],
        q3: data.averageVsPay[85][3],
        max: data.averageVsPay[85][4],
        outliers: data.averageVsPay[85][5],
        mean: data.averageVsPay[85][6],
        median: data.averageVsPay[85][7],
      },
      {
        min: data.averageVsPay[90][0],
        q1: data.averageVsPay[90][1],
        q2: data.averageVsPay[90][2],
        q3: data.averageVsPay[90][3],
        max: data.averageVsPay[90][4],
        outliers: data.averageVsPay[90][5],
        mean: data.averageVsPay[90][6],
        median: data.averageVsPay[90][7],
      },
      {
        min: data.averageVsPay[95][0],
        q1: data.averageVsPay[95][1],
        q2: data.averageVsPay[95][2],
        q3: data.averageVsPay[95][3],
        max: data.averageVsPay[95][4],
        outliers: data.averageVsPay[95][5],
        mean: data.averageVsPay[95][6],
        median: data.averageVsPay[95][7],
      },
    ],
    color: colorTheme[2],
    title: "1A Average vs Co-op Pay",
    n: data.averageVsPayRespondents,
    xAxis: "1A Average (%)",
    yAxis: "Pay ($CAD/hr)",
    ymin: 15,
    ymax: 35,
  };

  const jobTypeVsPayData = {
    label: [
      "Software Development",
      "QA/Testing",
      "UI/UX or Product Design",
      "Product Management",
      "Mechanical",
      "Artificial Intelligence/Machine Learning",
      "Business",
      "Information Security",
      "Data Science",
      "Network and Technology",
    ],
    val: [
      {
        min: data.jobTypeVsPay["Software Development"][0],
        q1: data.jobTypeVsPay["Software Development"][1],
        q2: data.jobTypeVsPay["Software Development"][2],
        q3: data.jobTypeVsPay["Software Development"][3],
        max: data.jobTypeVsPay["Software Development"][4],
        outliers: data.jobTypeVsPay["Software Development"][5],
        mean: data.jobTypeVsPay["Software Development"][6],
        median: data.jobTypeVsPay["Software Development"][7],
      },
      {
        min: data.jobTypeVsPay["QA/Testing"][0],
        q1: data.jobTypeVsPay["QA/Testing"][1],
        q2: data.jobTypeVsPay["QA/Testing"][2],
        q3: data.jobTypeVsPay["QA/Testing"][3],
        max: data.jobTypeVsPay["QA/Testing"][4],
        outliers: data.jobTypeVsPay["QA/Testing"][5],
        mean: data.jobTypeVsPay["QA/Testing"][6],
        median: data.jobTypeVsPay["QA/Testing"][7],
      },
      {
        min: data.jobTypeVsPay["UI/UX or Product Design"][0],
        q1: data.jobTypeVsPay["UI/UX or Product Design"][1],
        q2: data.jobTypeVsPay["UI/UX or Product Design"][2],
        q3: data.jobTypeVsPay["UI/UX or Product Design"][3],
        max: data.jobTypeVsPay["UI/UX or Product Design"][4],
        outliers: data.jobTypeVsPay["UI/UX or Product Design"][5],
        mean: data.jobTypeVsPay["UI/UX or Product Design"][6],
        median: data.jobTypeVsPay["UI/UX or Product Design"][7],
      },
      {
        min: data.jobTypeVsPay["Product Management"][0],
        q1: data.jobTypeVsPay["Product Management"][1],
        q2: data.jobTypeVsPay["Product Management"][2],
        q3: data.jobTypeVsPay["Product Management"][3],
        max: data.jobTypeVsPay["Product Management"][4],
        outliers: data.jobTypeVsPay["Product Management"][5],
        mean: data.jobTypeVsPay["Product Management"][6],
        median: data.jobTypeVsPay["Product Management"][7],
      },
      {
        min: data.jobTypeVsPay["Mechanical"][0],
        q1: data.jobTypeVsPay["Mechanical"][1],
        q2: data.jobTypeVsPay["Mechanical"][2],
        q3: data.jobTypeVsPay["Mechanical"][3],
        max: data.jobTypeVsPay["Mechanical"][4],
        outliers: data.jobTypeVsPay["Mechanical"][5],
        mean: data.jobTypeVsPay["Mechanical"][6],
        median: data.jobTypeVsPay["Mechanical"][7],
      },
      {
        min: data.jobTypeVsPay["Artificial Intelligence/Machine Learning"][0],
        q1: data.jobTypeVsPay["Artificial Intelligence/Machine Learning"][1],
        q2: data.jobTypeVsPay["Artificial Intelligence/Machine Learning"][2],
        q3: data.jobTypeVsPay["Artificial Intelligence/Machine Learning"][3],
        max: data.jobTypeVsPay["Artificial Intelligence/Machine Learning"][4],
        outliers:
          data.jobTypeVsPay["Artificial Intelligence/Machine Learning"][5],
        mean: data.jobTypeVsPay["Artificial Intelligence/Machine Learning"][6],
        median:
          data.jobTypeVsPay["Artificial Intelligence/Machine Learning"][7],
      },
      {
        min: data.jobTypeVsPay["Business"][0],
        q1: data.jobTypeVsPay["Business"][1],
        q2: data.jobTypeVsPay["Business"][2],
        q3: data.jobTypeVsPay["Business"][3],
        max: data.jobTypeVsPay["Business"][4],
        outliers: data.jobTypeVsPay["Business"][5],
        mean: data.jobTypeVsPay["Business"][6],
        median: data.jobTypeVsPay["Business"][7],
      },
      {
        min: data.jobTypeVsPay["Information Security"][0],
        q1: data.jobTypeVsPay["Information Security"][1],
        q2: data.jobTypeVsPay["Information Security"][2],
        q3: data.jobTypeVsPay["Information Security"][3],
        max: data.jobTypeVsPay["Information Security"][4],
        outliers: data.jobTypeVsPay["Information Security"][5],
        mean: data.jobTypeVsPay["Information Security"][6],
        median: data.jobTypeVsPay["Information Security"][7],
      },
      {
        min: data.jobTypeVsPay["Data Science"][0],
        q1: data.jobTypeVsPay["Data Science"][1],
        q2: data.jobTypeVsPay["Data Science"][2],
        q3: data.jobTypeVsPay["Data Science"][3],
        max: data.jobTypeVsPay["Data Science"][4],
        outliers: data.jobTypeVsPay["Data Science"][5],
        mean: data.jobTypeVsPay["Data Science"][6],
        median: data.jobTypeVsPay["Data Science"][7],
      },
      {
        min: data.jobTypeVsPay["Network and Technology"][0],
        q1: data.jobTypeVsPay["Network and Technology"][1],
        q2: data.jobTypeVsPay["Network and Technology"][2],
        q3: data.jobTypeVsPay["Network and Technology"][3],
        max: data.jobTypeVsPay["Network and Technology"][4],
        outliers: data.jobTypeVsPay["Network and Technology"][5],
        mean: data.jobTypeVsPay["Network and Technology"][6],
        median: data.jobTypeVsPay["Network and Technology"][7],
      },
    ],
    color: colorTheme[2],
    title: "Job Type vs Pay",
    n: data.jobTypeVsPayRespondents,
    xAxis: "Job Type",
    yAxis: "Pay ($CAD/hr)",
    ymin: 15,
    ymax: 35,
  };

  return (
    <>
      <Head>
        <title>Co-op | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={`${styles.content} ${styles.coop}`}>
        <h2>Co-op</h2>
        <h4>
          A peek at the numbers from our first co-op term, including info on our
          workplaces and earnings 💰
        </h4>
        <br />

        <h3>Co-op Search Process</h3>
        <p>
          Over half of us got our co-op placement in the 1st or 2nd round and
          81% of us found our job through WaterlooWorks. Looks like
          WaterlooWorks really does <i>work</i>!
        </p>
        <div className={styles.doubleChart}>
          <Chart type="bar" data={roundData} layout="double" />
          <Chart type="pie" data={jobPlatformData} layout="double" />
        </div>

        <h3>Co-op Locations</h3>
        <div className={styles.doubleChart}>
          <p className={styles.textLeft}>
            67% of us had an in-person job, while 33% of us had a remote job.
            Among those who had in-person jobs, most were located in the GTA.
          </p>
          <Chart type="bar" data={locationData} layout="double" />
        </div>

        <h3>Job Types</h3>
        <p>
          Software Development was the most popular choice for co-op placements
          during this term. This was likely due to the large amount of
          software-related job postings on WaterlooWorks and the high demand for
          software engineering skills in the job market (during the time of
          application).
        </p>
        <div className={styles.singleChart}>
          <Chart type="bar" data={jobTypeData} layout="single" />
        </div>

        <h3>Job Type vs Pay</h3>
        <p>
          The overall average pay for this term was $22/hr, with the lowest
          reported pay being $17/hr and the highest being $33.9/hr. Product
          Management had the highest median co-op pay among all job sectors this
          term.
          <br />
          <br />
          Note: This data set, and the following data sets pertaining to co-op
          pay, exclude respondents who reported being unemployed or doing an
          unpaid co-op.
        </p>
        <div className={styles.singleChart}>
          <Chart type="box" data={jobTypeVsPayData} layout="single" />
        </div>

        <h3>1A Average vs Co-op Pay</h3>
        <div className={styles.doubleChart}>
          <p className={styles.textLeft}>
            There doesn't appear to be any correlation between grades and co-op
            pay. In other words, achieving high grades does not necessarily
            result in higher pay during co-op.
          </p>
          <Chart type="box" data={averageVsPayData} layout="double" />
        </div>

        <h3>Co-op Pay vs Job Satisfaction</h3>
        <div className={styles.doubleChart}>
          <Chart type="scatter" data={payVsSatisfactionData} layout="double" />
          <p className={styles.textRight}>
            This chart aims to explore the relationship between job compensation
            and satisfaction, where a score of 1 indicates extreme
            dissatisfaction and 5 indicates extreme satisfaction.
            <br />
            <br />
            While the data reveals a discernible pattern, it is worth noting
            that all individuals earning more than $24/hr rated their
            satisfaction level 4 or higher. Maybe money <i>does</i> buy
            happiness after all 🤷‍♀️
          </p>
        </div>

        <BottomNav currentPage="co-op" />
      </div>
    </>
  );
}

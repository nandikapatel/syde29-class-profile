import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import BottomNav from "../../components/bottomNav/BottomNav";
import Chart from "../../components/charts/Chart";
import styles from "../profile.module.scss";
import colors from "../../styles/colors.module.scss";
import { getSortedHighschoolData } from "../../lib/sort/getSortedHighschoolData";

export const getStaticProps = async () => {
  const data = await getSortedHighschoolData();
  return {
    props: {
      ...data,
    },
  };
};

export default function Highschool(data) {
  const colorTheme = [
    colors.highschool1,
    colors.highschool2,
    colors.highschool3,
    colors.highschool4,
    colors.highschool5,
  ];

  const averageData = {
    label: data.averages,
    val: data.averageValues,
    color: colorTheme[3],
    title: "High School Admission Averages",
    n: data.averageRespondents,
    xAxis: "Average (%)",
    yAxis: "Number of Students",
  };

  const extraNumData = {
    label: data.extracurricularNum,
    val: data.extraNumValues,
    color: colorTheme[3],
    title: "Number of Extracurriculars We Were Part of in High School",
    n: data.extraNumRespondents,
    xAxis: "Number of Extracurriculars",
    yAxis: "Number of Students",
  };

  const extraTypeData = {
    label: data.extracurricularType,
    val: data.extraTypeValues,
    color: colorTheme[3],
    title: "High School Extracurriculars",
    n: data.extraTypeRespondents,
    xAxis: "Extracurricular Type",
    yAxis: "Number of Students",
  };

  const enrichData = {
    label: data.enrichUniques,
    val: data.enrichValues,
    color: colorTheme[3],
    title: "High School Enrichment Programs",
    n: data.enrichRespondents,
    xAxis: "Enrichment Program",
    yAxis: "Number of Students",
  };

  const postChoiceData = {
    label: data.postChoice,
    val: data.postChoicesValues,
    color: colorTheme[2],
    title: "Post Secondary Choices",
    n: data.postChoicesRespondents,
  };

  const sydeBoolData = {
    label: data.sydeBools,
    val: data.sydeBoolValues,
    color: [colorTheme[3], colorTheme[2]],
    title: "Was SYDE our top choice?",
    n: data.sydeBoolRespondents,
  };

  const topChoiceData = {
    label: data.topChoices,
    val: data.topChoiceValues,
    color: colorTheme[1],
    title: "Top Choices",
    n: data.topChoiceRespondents,
  };

  const decisionData = {
    label: data.decisions,
    val: data.decisionValues,
    color: colorTheme,
    title: "When did we decide we wanted to go into SYDE?",
    n: data.decisionRespondents,
  };

  const prepData = {
    label: data.preparation,
    val: data.prepareValues,
    color: colorTheme[3],
    title: "How well did high school prepare us for SYDE?",
    n: data.prepareRespondents,
    xAxis: "Level of Preparedness",
    yAxis: "Number of Students",
  };

  return (
    <>
      <Head>
        <title>High School | SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={`${styles.content} ${styles.highschool}`}>
        <h2>High School</h2>
        <h4>
          Information about our high school academics and extracurriculars, as
          well as university applications.
        </h4>
        <br />

        <h3>High School Admission Average</h3>
        <div className={styles.doubleChart}>
          <Chart type="histogram" data={averageData} layout="double" />
          <p className={styles.textRight}>
            The admission average is based on a student's top 6 courses in grade
            12, rounded to the nearest whole number. The SYDE 2027 cohort had an
            overall average of 96.3%.
            <br />
            <br />
            This surpasses the competitive benchmark of "high 80s to low 90s"
            stated on the admissions website, indicating an increase in
            competition to get into the program in recent years.
          </p>
        </div>

        <h3>Enrichment Programs</h3>
        <p>
          The majority of the class (86%) was involved in some sort of
          enrichment program in high school.
        </p>
        <div className={styles.singleChart}>
          <Chart type="bar" data={enrichData} layout="single" />
        </div>

        <h3>Extracurriculars</h3>
        <p>
          We participated in a wide range of extracurricular activities in high
          school, among which sports emerged as the most popular. Looks like
          SYDE 2027 has some athletes among us!
        </p>
        <div className={styles.singleChart}>
          <Chart type="bar" data={extraTypeData} layout="single" />
        </div>

        <h3>Other Universities We Considered</h3>
        <div className={styles.doubleChart}>
          <p className={styles.textLeft}>
            As many would expect, the most popular alternate university choice
            was UofT, with McMaster coming in at a close second.
            <br />
            <br />
            Despite having offers from many prestigious schools in Canada and
            the United States, we ultimately decided to pursue SYDE at Waterloo!
          </p>
          <div className={styles.wordCloudContainer}>
            <Image
              src="/assets/otherUniversities.png"
              alt="other university considerations"
              fill
              className={styles.wordCloud}
            />
          </div>
        </div>
        <br />

        <h3>Top Choice</h3>
        <div className={styles.doubleChart}>
          <Chart type="pie" data={sydeBoolData} layout="double" />
          <p className={styles.textRight}>
            84% of us said that SYDE was our top choice, while 16% had their
            hearts set on a different program. It's okay, we still love you 😔
          </p>
        </div>
        <p>
          For those of us who said SYDE was not our top choice, these are the
          programs we were striving for in high school.
        </p>
        <div className={styles.wordCloudContainer}>
          <Image
            src="/assets/topChoice.png"
            alt="top choice programs"
            fill
            className={styles.wordCloud}
          />
        </div>
        <br />
        <br />

        <h3>Miscellaneous</h3>
        <p>
          Some insight on how high school influenced our SYDE experience. Most
          of us decided we wanted to be part of the SYDE gang in our final year
          of high school, but one person has had their heart set on SYDE before
          even entering grade 9!
        </p>
        <div className={styles.doubleChart}>
          <Chart type="doughnut" data={decisionData} layout="double" />
          <Chart type="histogram" data={prepData} layout="double" />
        </div>

        <BottomNav currentPage="highschool" />
      </div>
    </>
  );
}

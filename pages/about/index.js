import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import BottomNav from "../../components/bottomNav/BottomNav";
import styles from "./about.module.scss";

export default function About() {
  const contributors = [
    {
      id: 1,
      name: "Nandika Patel",
      role: "Developer",
      photo: "/assets/Nikki.JPG",
      linkedin: "https://www.linkedin.com/in/nandika-patel-348807284/?originalSubdomain=ca",
    },
    {
      id: 2,
      name: "Nikki Rana",
      role: "Project Manager / Data",
      photo: "/assets/nina.png",
      linkedin: "https://www.linkedin.com/in/nikki-rana735",
    },
    {
      id: 3,
      name: "Marwa Zaryab",
      role: "Developer",
      photo: "/assets/Marwa.JPG",
      linkedin: "https://www.linkedin.com/in/marwazaryab/",
    },
    {
      id: 4,
      name: "Tonia Hong",
      role: "Graphic Design",
      photo: "/assets/nancy.jpg",
      linkedin: "",
    },
    {
      id: 5,
      name: "Ian Xu",
      role: "Graphic Design",
      photo: "/assets/tam.jpg",
      linkedin: "",
    },
    {
      id: 6,
      name: "Sunny Zhang",
      role: "Data",
      photo: "/assets/sunny.png",
      linkedin: "https://www.linkedin.com/in/sun-z/",
    },
  ];

  return (
    <>
      <Head>
        <title>About | SYDE '29</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.content}>
        <h2>About the Program</h2>
        <p>
          Systems Design Engineering (SYDE) is an interdisciplinary engineering
          program offered at the University of Waterloo. This unique program
          encourages big-picture thinking with a heavy emphasis on design to
          develop creative solutions to complex problems. During our first term
          in the program, we accomplished a lot: we balanced university
          academics and our first co-op search, adjusted to life in a new city,
          and most importantly, built gardening tools for non-existent aliens.
        </p>
        <br />

        <div className={styles.imageContainer}>
          <Image
            src="/assets/classPic.jpg"
            alt="class picture"
            width="600"
            height="400"
            className={styles.image}
          />
          <div className={styles.caption}>
            Class photo taken in E7 after our SYDE 121 final.
          </div>
        </div>
        <br />

        <h2>Preface</h2>
        <p>
          Inspired by past SYDE cohorts, we have put together this class profile
          to shed light on students' experiences during the first term of the
          program. We hope that this profile provides you with insight on the
          SYDE experience for the class of 2029, as well as the individuals who
          make up this diverse program.
        </p>
        <p>
          The findings in this profile were derived from the results of a class
          survey conducted by SYDE '29 students. 66 out of 95 students (70%) of
          students in our first year class responded to the survey. All questions
          were optional. The data presented in this class profile may not be a
          complete reflection of the class and as such, this profile includes
          the number of respondents for each data set.
        </p>
        <br />

        <h2>Contributors</h2>
        <br />
        <div className={styles.grid}>
          {contributors.map(({ id, name, role, photo, linkedin }) => (
            <div className={styles.gridItem} key={id}>
              <div className={styles.photoContainer}>
                {linkedin ? (
                  <a href={linkedin} target="_blank">
                    <Image src={photo} alt={name} width={300} height={300} />
                  </a>
                ) : (
                  <Image src={photo} alt={name} width={300} height={300} />
                )}
              </div>
              {linkedin ? (
                <a href={linkedin} target="_blank">
                  <p className={styles.name}>{name}</p>
                </a>
              ) : (
                <p className={styles.name}>{name}</p>
              )}
              <p className={styles.role}>
                {role}
              </p>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />

        <div className={styles.github}>
          <a
            href="https://github.com/shelleychen318/syde27-class-profile"
            target="_blank"
          >
            <h5>
              View GitHub repo <span>{">"}</span>
            </h5>
          </a>
        </div>

        <BottomNav currentPage="about" />
      </div>
    </>
  );
}

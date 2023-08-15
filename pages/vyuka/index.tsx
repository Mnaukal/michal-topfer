import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { globSync } from 'glob';
import _ from 'lodash';
import Link from "next/link";

enum Semester {
  Winter, Summer
}

const Courses: { [courseCode: string]: { name: string, semester: Semester }} = {
  "NPRG062": {
    name: "Algoritmizace",
    semester: Semester.Winter,
  },
  "NPRG030": { 
    name: "Programování 1",
    semester: Semester.Winter,
  },
  "NPRG031": { 
    name: "Programování 2",
    semester: Semester.Summer,
  },
}

export const getStaticProps: GetStaticProps<{
  courses: _.Dictionary<string[]>;
}> = () => {
  const coursesPaths = globSync("*/*/", {cwd: "pages/vyuka", posix: true});
  const courses = _.groupBy(coursesPaths, p => p.split("/")[0]);
  return { props: { courses } };
};

export default function Teaching({
  courses,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const years = Object.keys(courses);
  years.sort().reverse();
  return (<>
    <h1>Výuka</h1>
    {years.map(year => Year(year, courses[year]))}
  </>);
}

function Year(year: string, yearCourses: string[]) {
  yearCourses.sort();
  const fullYear = `20${year.substring(0, 2)}/20${year.substring(2, 4)}`;
  return (<section key={year} id={year}>
    <h2>{fullYear}</h2>
    <h3 id={`{year}zs`}>ZS {fullYear}</h3>
    <ul className="list-unstyled ps-5 py-2">
      {yearCourses.filter(c => isInSemester(c, Semester.Winter)).map(Course)}
    </ul>
    <h3 id={`{year}ls`}>LS {fullYear}</h3>
    <ul className="list-unstyled ps-5 py-2">
      {yearCourses.filter(c => isInSemester(c, Semester.Summer)).map(Course)}
    </ul>
  </section>)
}

function isInSemester(yearCourse: string, semester: Semester) {
  const course = yearCourse.split("/")[1];
  if (!Courses.hasOwnProperty(course)) throw new Error(`Unknown course: ${course} (in ${yearCourse})`);

  return Courses[course].semester === semester;
}

function Course(yearCourse: string) {
  const course = yearCourse.split("/")[1];
  if (!Courses.hasOwnProperty(course)) throw new Error(`Unknown course: ${course} (in ${yearCourse})`);

  return <li key={yearCourse}>
    <Link className="d-inline-flex align-items-center rounded"
          href={`/vyuka/${yearCourse}/`}>{course} &ndash; {Courses[course].name}</Link>
  </li>;
}
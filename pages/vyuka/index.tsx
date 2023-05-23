import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { globSync } from 'glob';
import _ from 'lodash';
import Link from "next/link";

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

// TODO: split ZS and LS (based on course codes)
function Year(year: string, courses: string[]) {
  courses.sort();
  return (<section key={year} id={year}>
    <h2>20{year.substring(0, 2)}/20{year.substring(2, 4)}</h2>
    <ul className="list-unstyled ps-5 py-2">
      {courses.map(Course)}
    </ul>
  </section>)
}

const CourseNames: { [courseCode: string]: string} = {
  "NPRG062": "Algoritmizace",
  "NPRG030": "Programování 1",
  "NPRG031": "Programování 2",
}

function Course(yearCourse: string) {
  const course = yearCourse.split("/")[1];

  return <li key={yearCourse}>
    <Link className="d-inline-flex align-items-center rounded"
          href={`/vyuka/${yearCourse}/`}>{course} &ndash; {CourseNames[course]}</Link>
  </li>;
}
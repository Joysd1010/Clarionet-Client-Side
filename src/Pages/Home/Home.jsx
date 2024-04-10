import React, { useEffect, useState } from "react";
import useTitle from "../../HOOKS/useTitle";
import Slider from "./Slider";
import SectionTitle from "../Shared/SectionTitle";
import Addition from "./Addition";
import PopularTeacher from "./PopularTeacher";
import PopularClass from "./PopularClass";

const Home = () => {
  useTitle("Home");
  const [popularInstructor, setInstructor] = useState([]);
  const [popularClass, setClass] = useState([]);
// const classes=data.filter(classobj=>classobj?.status!=='pending')
  useEffect(() => {
    fetch("http://localhost:5000/instruct")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data.slice(0, 6));
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        setClass(data.filter(classobj=>classobj?.status!=='pending').slice(0, 8));
      });
  }, []);
  console.log(popularClass)

  return (
    <div className="md:px-20 bg-blue-50">
      <Slider />
      <SectionTitle title="Popular Classes" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
      {popularClass.map((session) => (
        
        <PopularClass key={session._id} classs={session} />
        ))}
      </div>
      <SectionTitle title="Popular Instructors" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {popularInstructor.map((teacher) => (
          <PopularTeacher key={teacher._id} sir={teacher} />
        ))}
      </div>

      <Addition />
    </div>
  );
};

export default Home;

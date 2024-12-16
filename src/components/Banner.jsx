import React from "react";
import team1 from '../assets/team/team-01.jpg'
import team2 from '../assets/team/team-02.jpg'
import {motion} from 'framer-motion'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
        <motion.img
          src={team1}
          animate={{ y: [0, 50, 0] }}
          transition={{duration:10, repeat:Infinity}}
          className="max-w-sm w-64  rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500  shadow-2xl"
        />
        <motion.img
          src={team2}
          animate={{ x: [100, 150, 100] }}
          transition={{duration:10, delay:3, repeat:Infinity}}
          className="max-w-sm w-64  rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500  shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Latest Jobs for you!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

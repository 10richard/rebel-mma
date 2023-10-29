import bjj from "../../assets/classes/bjj.jpeg";
import boxing from "../../assets/classes/boxing.jpeg";
import kickboxing from "../../assets/classes/kickboxing.jpeg";
import bjjNoGi from "../../assets/classes/bjj-nogi.jpeg";
import wrestling from "../../assets/classes/wrestling.jpg";
import mma from "../../assets/classes/mma.jpeg";
import personalTraining from "../../assets/classes/personal-training.jpeg";
import strengthConditioning from "../../assets/classes/strength-conditioning.jpeg";

interface ProgramsListProps {
  name: string;
  desc: string;
  image: string;
}

export const Programs: ProgramsListProps[] = [
  {
    name: "Brazilian Jiu Jutsu",
    desc: "Master the art of ground fighting and submission holds with our comprehensive Brazilian Jiu-Jitsu classes, led by experienced instructors dedicated to refining your technique and building your confidence.",
    image: bjj,
  },
  {
    name: "Boxing",
    desc: "Unleash your inner fighter with our high-energy Boxing sessions, led by seasoned professionals who will teach you the art of precise footwork and powerful striking techniques, empowering you to excel in the ring and beyond.",
    image: boxing,
  },
  {
    name: "Kickboxing",
    desc: "Channel your strength and agility in our exhilarating Kickboxing classes, where you'll master a combination of dynamic punches and powerful kicks, guided by our passionate instructors to help you achieve your full potential.",
    image: kickboxing,
  },
  {
    name: "Brazilian Jiu Jutsu - No Gi",
    desc: "Elevate your grappling skills with our dynamic BJJ No-Gi sessions, designed to teach you effective techniques and strategies for combat situations without the traditional gi, led by our skilled and supportive trainers.",
    image: bjjNoGi,
  },
  {
    name: "Wrestling",
    desc: "Develop superior takedown and ground control abilities through our intense Wrestling program, where you'll hone your strength and agility under the guidance of our expert coaches to dominate your opponents in any competition.",
    image: wrestling,
  },
  {
    name: "MMA",
    desc: "Immerse yourself in the world of versatile combat with our comprehensive MMA training, integrating various fighting disciplines and techniques to prepare you for the complexities of real-world combat scenarios, guided by our dedicated team of seasoned MMA professionals.",
    image: mma,
  },
  {
    name: "Personal Training",
    desc: "Reach your fitness goals with our personalized one-on-one training sessions, tailored to your specific needs and objectives, led by our certified personal trainers who are committed to helping you maximize your potential and achieve lasting results.",
    image: personalTraining,
  },
  {
    name: "Strength & Conditioning",
    desc: "Enhance your physical performance with our specialized Strength and Conditioning programs, designed to improve your overall strength, endurance, and flexibility, under the guidance of our expert coaches, helping you become a stronger, more resilient athlete.",
    image: strengthConditioning,
  },
];

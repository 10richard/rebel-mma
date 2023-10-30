import mats from "../../assets/about/mats.jpeg";
import cage from "../../assets/about/cage.jpg";
import bags from "../../assets/about/punching-bags.jpeg";

interface InfoListProps {
    heading: string;
    text: string;
    image: string;
}

export const InfoList: InfoListProps[] = [
    // have pics of academy - punching bags, cage, mats
    {heading: "Our Company", 
    text: "Founded by former MMA champion John Smith, RebelMMA has evolved from a small training center into a renowned institution for martial arts excellence. Over the years, we have produced numerous champions and fostered a strong community of dedicated fighters and fitness enthusiasts.", 
    image: mats},
    {heading: "Morals and Values", 
    text: "At RebelMMA, we uphold the values of discipline, integrity, and continuous improvement. We believe in fostering a supportive and inclusive community that encourages our members to push their limits and achieve excellence in their personal and professional lives.", 
    image: cage},
    {heading: "Mission Statement", 
    text: "Our mission is to empower individuals to achieve their full potential through the discipline, artistry, and physical conditioning of mixed martial arts. We strive to cultivate a culture of respect, resilience, and personal growth, both in and out of the ring.", 
    image: bags}
]
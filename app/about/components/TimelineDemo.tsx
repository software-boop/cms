import React from "react";
import { Timeline } from "../components/timeline";
import Image from "next/image";

import img2006 from "./journey_images/team-members-engaged-computer-work-with-gears-icons-symbolizing-innovation.png";
import img2012 from "./journey_images/flat-illustration-man-monitoring-security-cameras-ensuring-safety-surveillance.png";
import img2014 from "./journey_images/cartoon-man-robot-with-sign-that-says-radio.png";
import img2019 from "./journey_images/elephant-silhouette-with-panorama.png";
import img2021 from "./journey_images/iot-internet-things-devices-connectivity-concepts-network-flat-style-with-people.png";
import img2022 from "./journey_images/team-members-engaged-computer-work-with-gears-icons-symbolizing-innovation.png";
import img2024 from "./journey_images/vote-ballot-box-people-putting-pepper-vote-into-box-election-concept-democracy-freedom-speech-justice-voting-opinion-referendum-poll-choice-event-vector-illustration.png";
import imgntonl from './journey_images/91527425_India.jpg'
import bank_survilence from './journey_images/security-system-surveillance-cameras-background-with-cityscape-blue-sky-realistic-vector.png'
import industry from './journey_images/labor-substitution-abstract-concept-vector-illustration.png'
import border from './journey_images/soldiers-performance-combat-mission-silhouette-soldiers-are-fighting-battle.png'
import smart_survilence from "./journey_images/cc-camera-technology-design-vector-illustration-eps10-graphic.png"


import Examination_Surveillance from './journey_images/guard-service-man-sitting-control-panel-watching-surveillance-camera-videos-monitors-cctv-control-room-vector-illustration-security-system-worker-spying-supervision-concept.png'
const BRAND = "#07518a";





export function TimelineDemo() {
  const data = [

      {
      title: "2025",
      content: (
        <div>
                <Image src={Examination_Surveillance} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"400px"}} />
          <p className="font-semibold mb-3" style={{ color: BRAND }}>
            Examination Surveillance
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            We expanded into nationwide education surveillance to support
            high-stakes examinations with secure monitoring systems.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            Our deployments ensured fairness, transparency, and integrity
            across large-scale examination environments.
          </p>
          <ul className="list-disc ml-5 text-sm text-neutral-800 dark:text-neutral-300 mt-3 space-y-1">
            <li>65,000+ cameras for NEET examinations (NTA)</li>
            <li>8,500+ cameras for Telangana State Board exams</li>
            <li>4,500+ cameras for MHCET exams in Maharashtra</li>
          </ul>
        </div>
      ),
    },
     {
      title: "2024",
      content: (
        <div>
                <Image src={img2024} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"400px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            Election Webcasting
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            During the 2023–2024 General Elections, we deployed over 100,000
            cameras across India for election webcasting.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            This initiative ensured transparency, accountability, and real-time
            monitoring at an unprecedented scale.
          </p>
        </div>
      ),
    },
      {
      title: "2023",
      content: (
        <div>
                <Image src={border} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"400px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            Border Security Force (BSF)
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            We played a critical role in national security by installing 674
            surveillance cameras at sensitive international border locations.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            These systems supported continuous monitoring and strengthened
            border security operations.
          </p>
        </div>
      ),
    },  


     {
      title: "2022",
      content: (
        <div>
            <Image src={industry} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"400px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            Advancing into Manufacturing
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            In alignment with the Make in India initiative, we transitioned into
            in-house manufacturing capabilities.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            This move improved quality control, reduced turnaround times, and
            enabled faster deployment of solutions nationwide.
          </p>
        </div>
      ),
    }, 
  

     {
      title: "2020",
      content: (
        <div>
             <Image src={bank_survilence} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"400px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            Banking Surveillance
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            We strengthened banking infrastructure security by deploying
            advanced surveillance systems across branches and ATMs.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            These solutions helped deter crime, protect assets, and enable
            real-time monitoring and incident response.
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
            
                         <Image src={img2019} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"400px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            Kaziranga National Park
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            In 2019, we deployed advanced IP thermal and ANPR camera systems at
            Kaziranga National Park.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            These solutions played a critical role in wildlife protection,
            anti-poaching initiatives, and environmental conservation through
            intelligent, real-time surveillance.
          </p>
        </div>
      ),
    }, 
      {
      title: "2016",
      content: (
        <div>
            
                         <Image src={imgntonl} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"300px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            Nationwide Surveillance Projects
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            By 2016, we successfully expanded our surveillance solutions across
            India, executing large-scale, multi-location deployments.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            These projects strengthened national monitoring capabilities and
            supported both government agencies and enterprise clients with
            reliable, mission-critical systems.
          </p>
        </div>
      ),
    },
    
   
    {
      title: "2014",
      content: (
        <div>
              <Image src={img2014} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"500px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            Surveillance with Radio Technology
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            We achieved a major breakthrough by implementing surveillance
            systems powered by advanced radio communication technology.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            This innovation enabled real-time monitoring of sand mines and
            remote locations where traditional wired or cellular connectivity
            was not feasible.
          </p>
        </div>
      ),
    },
   {
      title: "2012",
      content: (
        <div>
                         <Image src={smart_survilence} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"400px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            City Surveillance – CCTV Solutions
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            In 2012, we entered the surveillance domain with city-level CCTV
            deployments. Our work on the Kurnool Smart City Project marked a key
            milestone in delivering reliable urban surveillance infrastructure.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            These systems enhanced public safety, traffic monitoring, and
            centralized command-and-control capabilities for city authorities.
          </p>
        </div>
      ),
    },
    
   {
      title: "2006",
      content: (
        <div className="">
             <Image src={img2006} alt="City surveillance" className="rounded-lg" style={{height:"300px", width:"300px"}} />
          <p className="font-semibold mb-4" style={{ color: BRAND }}>
            Marketing Services & Web Development
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
            Our journey began in 2006 with a strong foundation in web development
            and digital marketing services. During this phase, we focused on
            building scalable websites, robust enterprise applications, and
            impactful digital branding solutions.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 mt-3">
            These early efforts helped organizations establish a reliable online
            presence, improve customer engagement, and lay the groundwork for
            long-term digital growth.
          </p>
           
        </div>
      ),
    },

  
   
  
  ];

  return (
    <section className="w-full">
      <Timeline data={data} />
    </section>
  );
}

export default TimelineDemo;

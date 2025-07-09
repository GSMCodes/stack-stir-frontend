import React from "react";
import { Timeline } from "@/components/ui/timeline";

const HowItWorks = () => {
    const howItWorksSteps = [
    {
      title: "Define Your Stack",
      description: "Sign up and create your profile. Easily list the tech skills you have and the new ones you want to learn, specifying your proficiency for each. This helps us understand your unique development journey.",
    },
    {
      title: "Match & Team Up",
      description: "Our smart algorithm connects you with ideal collaborators who have complementary skills or shared learning goals. You can also explore existing project ideas or directly invite potential partners.",
    },
    {
      title: "Collab & Create",
      description: "Dive into your project within a dedicated workspace. Utilize our integrated Kanban board for task management, real-time chat for seamless communication, and easily schedule video meetings.",
    },
    {
      title: "Code on GitHub",
      description: "Every StackStir project is linked to a GitHub repository – created automatically for your team. This ensures industry-standard version control, allowing you to code, review, and track progress effectively.",
    },
    {
      title: "Build Your Legacy",
      description: "Complete projects, gain invaluable real-world experience, and watch your profile grow with recognized status symbols and a showcase of your finished work. Build a portfolio that truly stands out.",
    },
  ];
    return(
        <div className="max-w-6xl mx-auto px-8 mt-24 mb-14" >
            <div>
                <h1 className='text-[6vh] text-[#B6B09F] underline mt-[-4vh] hover:cursor-default selection:bg-gray-500 selection:text-blue-200 ml-[-14vh] sm:ml-[-2vh]' style={{ fontFamily: 'var(--font-bebas-neue)'}}>How STackStir Works:</h1>
            </div>
            <Timeline steps={howItWorksSteps} />
        </div>
    )
}

export default HowItWorks;
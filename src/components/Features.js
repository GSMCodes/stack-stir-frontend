import React from "react"
import { HoverEffect } from "@/components/ui/card-hover-effect";


const keyFeatures = [
  {
    title: "Intelligent Skill Matching",
    description: "Our advanced algorithm connects you with ideal collaborators based on your existing skills and what you aim to learn, ensuring productive and complementary teams.",
  },
  {
    title: "Collaborative Workspaces",
    description: "Manage tasks effortlessly with intuitive Kanban boards, share notes, and keep all your project resources organized in dedicated team hubs.",
  },
  {
    title: "Real-time Communication",
    description: "Stay in sync with your team through integrated in-app chat and seamlessly schedule video calls directly from your project environment.",
  },
  {
    title: "Seamless GitHub Integration",
    description: "Streamline your workflow with automatic repository creation and instant collaborator invites, ensuring version control and smooth team onboarding.",
    
  },
  {
    title: "Project Discovery & Creation",
    description: "Browse a curated list of project ideas or easily propose your own unique challenge, finding the perfect opportunity to build and learn.",
  },
  {
    title: "Skill Growth & Portfolio Building",
    description: "Track your progress, earn recognition for completed projects, and build a tangible portfolio of collaborative work that impresses potential employers.",
  },
];

const Features = () => {
    return (
      
        <div className="max-w-5xl mx-auto px-8 mt-24 mb-14">
          <div className="flex justify-center" >
            <h1 className='text-[6vh] text-[#B6B09F] underline mt-[-6vh] hover:cursor-default selection:bg-gray-500 selection:text-blue-200' style={{ fontFamily: 'var(--font-bebas-neue)'}}> Key Features:</h1>
          </div>
            <HoverEffect items={keyFeatures} />
        </div>
    )
}

export default Features;
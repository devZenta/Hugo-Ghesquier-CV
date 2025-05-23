"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
  logo?: string
  link?: string
  tag?: string
  greyed?: boolean 
}

export function Education() {
  const educationItems: EducationItem[] = [
    {
      degree: "Master's Degree (Potential Path)",
      institution: "ENIGMA-School",
      period: "2027 - 2029",
      description: "Master of Science in Computer Science with a focus on Network systems & Cloud or Backend development.",
      logo: "/establishments/enigma_school_logo.webp",
      link: "https://www.enigma-school.com/",
      tag: "Under consideration",
      greyed: true 
    },
    {
      degree: "Bachelor's Degree",
      institution: "ENIGMA-School",
      period: "2024 - 2027",
      description: "Bachelor of Science in Computer Science with a focus on Software Engineering and Cybersecurity.",
      logo: "/establishments/enigma_school_logo.webp",
      link: "https://www.enigma-school.com/",
      tag: "Currently"
    },
    {
      degree: "High School",
      institution: "Saint Paul's School",
      period: "2021 - 2024",
      description: "High School Diploma with a focus on Science and Mathematics.",
      logo: "/establishments/saint_paul_logo.webp",
      link: "https://saintpaul-lille.fr/",
      tag: "Achieved"
    },
    {
      degree: "Secondary School",
      institution: "Dominique Savio College",
      period: "2017 - 2021",
      description: "Secondary School Diploma.",
      logo: "/establishments/dominique_savio_logo.webp",
      link: "https://www.savio-lambersart.fr/",
      tag: "Achieved"
    }
  ]

  const getTagColorClasses = (tag: string) => {
    switch (tag) {
      case "Achieved":
        return "bg-green-100/30 text-green-600"; 
      case "Currently":
        return "bg-yellow-100/30 text-yellow-600"; 
      case "Prospective studies":
        return "bg-red-100/30 text-red-600";
      case "Under consideration":
        return "bg-purple-100/30 text-purple-600";
      default:
        return "bg-primary/20 text-primary"; 
    }
  };

  return (
    <section className="py-8 -mt-12" id="education">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8 mt-42">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${item.greyed 
                ? 'from-gray-200/20 to-gray-200/10 opacity-60' 
                : 'from-[#C7CEE8]/20 to-[#C7CEE8]/10'} border border-border p-6 rounded-lg`}
            >
              <div className="flex items-start gap-4">
                {item.logo && (
                  <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden bg-white/10 flex items-center justify-center p-1">
                    <Image 
                      src={item.logo} 
                      alt={`${item.institution} logo`} 
                      width={50} 
                      height={50}
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.degree}
                      {item.greyed && (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="inline-block h-4 w-4 ml-2 text-gray-400" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M12 21a9 9 0 100-18 9 9 0 000 18z" 
                          />
                        </svg>
                      )}
                    </h3>
                    {item.tag && (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColorClasses(item.tag)}`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2">
                      <p className="text-primary font-medium">{item.institution}</p>
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary/70 hover:text-primary transition-colors"
                          title="Visiter le site web"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-foreground/70">{item.period}</p>
                  </div>
                  <p className="mt-3 text-foreground/80">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
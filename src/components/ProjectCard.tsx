import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1 
        }
      }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="h-full rounded-lg overflow-hidden
                   bg-white dark:bg-[#1a2333]
                   border border-gray-200 dark:border-gray-700/50
                   hover:border-blue-500 dark:hover:border-blue-400
                   shadow-lg hover:shadow-xl
                   transition-all duration-300"
      >
        <motion.div
          className="relative h-48 overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover "
          />
        </motion.div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.github && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-50 dark:bg-[#1f2937]
                           hover:bg-gray-100 dark:hover:bg-[#2d3748]
                           border border-gray-200 dark:border-gray-700/50
                           hover:border-blue-500 dark:hover:border-blue-400
                           transition-all duration-300"
                >
                  <Github 
                    size={18} 
                    className="text-gray-700 dark:text-gray-300" 
                  />
                </motion.a>
              )}
              {project.link && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-50 dark:bg-[#1f2937]
                           hover:bg-gray-100 dark:hover:bg-[#2d3748]
                           border border-gray-200 dark:border-gray-700/50
                           hover:border-blue-500 dark:hover:border-blue-400
                           transition-all duration-300"
                >
                  <ExternalLink 
                    size={18} 
                    className="text-gray-700 dark:text-gray-300" 
                  />
                </motion.a>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                className="px-4 py-2 text-sm rounded-lg
                         bg-gray-50 dark:bg-[#1f2937]
                         text-gray-700 dark:text-gray-300
                         border border-gray-200 dark:border-gray-700/50
                         hover:border-blue-500 dark:hover:border-blue-400
                         transform hover:-translate-y-1
                         transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
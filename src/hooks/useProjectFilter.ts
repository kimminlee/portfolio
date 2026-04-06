import { useState, useMemo } from 'react';
import type { Project, ProjectCategory, TechStack, ProjectFeature } from '../types';

export const useProjectFilter = (projects: Project[]) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<TechStack | 'all'>('all');
  const [selectedFeature, setSelectedFeature] = useState<ProjectFeature | 'all'>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const tagMatch = selectedTag === 'all' || project.tags.includes(selectedTag);
      const featureMatch = selectedFeature === 'all' || project.features.includes(selectedFeature);

      return categoryMatch && tagMatch && featureMatch;
    });
  }, [projects, selectedCategory, selectedTag, selectedFeature]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedTag('all');
    setSelectedFeature('all');
  };

  return {
    filteredProjects,
    selectedCategory,
    selectedTag,
    selectedFeature,
    setSelectedCategory,
    setSelectedTag,
    setSelectedFeature,
    resetFilters,
    hasActiveFilters: selectedCategory !== 'all' || selectedTag !== 'all' || selectedFeature !== 'all'
  };
};
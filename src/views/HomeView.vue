<template>
  <!-- Menu -->
  <MenuVue :links="links">Satya<span class="prim"></span></MenuVue>
  <HeroSection id="hero" pic="header.png">
    <template v-slot:welcome>Welcome!</template>
    My name is <b>Jonnalagadda Sai Satya Narayana</b> and I'm An enthusiastic
    <hi-word>Computer Science and Data Science</hi-word> student with a keen
    interest in
    <hi-word
      >Machine Learning, research innovation, and web application
      development</hi-word
    >. Pursuing B.Tech in Computer Science Engineering at SRM Institute of
    Science and Technology, Chennai, and B.S. in Data Science and Applications
    at IIT Madras. Aiming to use my diverse skills in programming, data
    analysis, and algorithms to tackle real-world issues and further the
    advancements in computer science.
    <template v-slot:buttons>
      <simple-button
        class="btn-primary text-white"
        url="https://www.linkedin.com/in/sai-satya-jonnalagadda-157900225/"
        icon="fab linkedin-in"
        >Hire me!</simple-button
      >
      <simple-button
        class="btn-outline-secondary"
        url="mailto:saisatya161734@gmail.com"
        icon="fa-regular fa-file-lines"
        >Contact me</simple-button
      >
      <simple-button
        class="btn-outline-secondary"
        url="https://drive.google.com/file/d/1Q6vLtvZDBiOLlxGnxCnI8JnyngMhaqpS/view?usp=sharing"
        icon="fa-regular fa-file-lines"
        >Resume</simple-button
      >
    </template>
  </HeroSection>
  <SkillsGrid id="skills" :skills="skills" />
  <ExperienceTable id="edu-exp" :experience="experience" />
  <AwardsGrid id="awards" :awards="awards" />
  <ProjectsGrid id="projects" :projects="projects" />
  <FooterVue :links="socials" :copyright="copyright" />
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import AwardsGrid from "@/components/awards/AwardsGrid.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

// data to fill components
import skills from "@/data/skills";
import experience from "@/data/experience";
import awards from "@/data/awards";
import projects from "@/data/projects";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
import HiWord from "@/components/reusable/HighlightIt.vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      delay: 100,
      links: [
        {
          name: "home",
          url: "#hero",
        },
        {
          name: "skills",
          url: "#skills",
        },
        {
          name: "experience",
          url: "#edu-exp",
        },
        {
          name: "Certifications",
          url: "#awards",
        },
        {
          name: "projects",
          url: "#projects",
        },
      ],
      skills,
      experience,
      awards,
      projects,
      socials: [
        {
          id: 1,
          icon: "fab linkedin-in",
          url: "https://www.linkedin.com/in/sai-satya-jonnalagadda-157900225/",
        },
        {
          id: 2,
          icon: "fab github",
          url: "https://github.com/SaiSatya16",
        },
        {
          id: 3,
          icon: "fab resume",
          url: "https://github.com/SaiSatya16",
        },
      ],
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    AwardsGrid,
    ProjectsGrid,
    SimpleButton,
    HiWord,
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>

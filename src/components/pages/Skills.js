import React from 'react';
import '../../style.scss';
import SkillsSection from "../SkillsSection/SkillsSection";
import WorkSection from "../WorkSection/WorkSection";
import DownloadCV from "../common/DownloadCV/DownloadCV";
import Footer from "../common/Footer/Footer";


function Skills() {
  return (
  <>
    <SkillsSection />
    <WorkSection />
    <DownloadCV/>
    <Footer/>
  </>
  )
}
export default Skills;

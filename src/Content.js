import WorkExperience from './Content/WorkExperience';
import Skills from './Content/Skills';
import Footer from './Footer';

function Content(){
    return <div className="right">
             <div className="inner">
               <WorkExperience />
               <Skills />
               <Footer />
            </div>
           </div>;
}

export default Content;
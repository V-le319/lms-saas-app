import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'



const Page = () => {
  return (
    <main>
      <h1 className="">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard id="123" name="Neura the Brainy Explorer"
                      topic="Neural Nerwork of the Brain"
                      subject="science"
                      duration={45}
                      color="#E5D0FF"
                      />
        <CompanionCard id="456" name="Countsy the Number Wizard"
                      topic="Topic: Derivatives & Integrals"
                      subject="maths"
                      duration={30}
                      color="#ffda6e"/>
        <CompanionCard id="789" name="Verba the Vocabulary Builder"
                      topic="Topic: English Literature "
                      subject="language"
                      duration={30}
                      color="#bde7ff"/>
      </section>

      <section className="home-section">
        <CompanionsList title="Recently completed sessions"
                        companions={recentSessions}
                        className="w-2/3 max-lg:w-full" />  
        <CTA/>
      </section>

    </main>
  )
}
 
export default Page
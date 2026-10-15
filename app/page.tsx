import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getBookmarkedCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'



const Page = async() => {
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionCompanions = await getRecentSessions(10)
    const { userId } = await auth();
const saved = userId ? await getBookmarkedCompanions(userId) : [];
const savedIds = saved.map((c) => c.id);
  
    return (
    <main>
      <h1 className="">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
           <CompanionCard key={companion.id}
              {...companion} //spread all properties from companion
              color={getSubjectColor(companion.subject)}
              bookmarked={savedIds.includes(companion.id)}
              />
        ))}
       
      </section>

      <section className="home-section">
        <CompanionsList title="Recently completed sessions"
                        companions={recentSessionCompanions}
                        className="w-2/3 max-lg:w-full" />  
        <CTA/>
      </section>

    </main>
  )
}
 
export default Page
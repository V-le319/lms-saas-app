import CompanionCard from "@/components/CompanionCard";
import Searchinput from "@/components/Searchinput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { getAllCompanions, getBookmarkedCompanions } from "@/lib/actions/companion.actions";


const CompanionsLibrary = async({ searchParams } : SearchParams) => {

    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    const companions = await getAllCompanions({ subject, topic });

    const { userId } = await auth();
const saved = userId ? await getBookmarkedCompanions(userId) : [];
const savedIds = saved.map((c) => c.id);

    console.log(companions)

    

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
          <h1>Companion Library</h1>
          <div className="flex gap-4">
            <Searchinput/>
            <SubjectFilter/>
          </div>
      </section>

      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard key={companion.id} 
                            {...companion} 
                            color={getSubjectColor(companion.subject)}
                            bookmarked={savedIds.includes(companion.id)}/>
        ))}
      </section>

      </main>
  )
}

export default CompanionsLibrary
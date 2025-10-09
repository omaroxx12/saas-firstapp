import CompanionsForm from "@/components/CompanionsForm"


const NewCompanion = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className=" w-full flex flex-col gap-4">
        <h1>Companions builder</h1>
        <CompanionsForm />
      </article>

      
    </main>
  )
}

export default NewCompanion
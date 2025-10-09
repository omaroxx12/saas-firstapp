interface CompanionsSessionProps {
  params: Promise<{
    id: string;
  }>;
}

const CompanionsSession = async ({ params }: CompanionsSessionProps) => {
  const { id } = await params;
  
  return (
    <div>
      <h1>Companion Session</h1>
      <p>ID: {id}</p>
    </div>
  )
}

export default CompanionsSession
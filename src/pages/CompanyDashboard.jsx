const CompanyDashboard = ({ user }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="card w-full max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard da Empresa</h2>
        <p className="text-gray-700 mb-6">
          Bem-vindo, {user?.name || 'Empresa'}!<br />
          Aqui você poderá gerenciar sua reputação, responder avaliações e acompanhar estatísticas.
        </p>
        <div className="text-gray-500">(Funcionalidade em desenvolvimento)</div>
      </div>
    </div>
  )
}

export default CompanyDashboard 
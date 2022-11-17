const Iniciar = ({setIsLoggedIn}) => {
    return (
        <div className="main__content--apresentation color-grey-1">
          <h2 className="font-title-2">
            <span className="color-primary ">Nu</span> Kenzie
          </h2>
          <h1 className="font-title-1">
            Centralize o controle das suas finanças
          </h1>
          <span className="color-grey-2 font-text-3">
            de forma rápida e segura
          </span>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="font-title-3 color-grey-2 bg-color-primary"
          >
            Iniciar
          </button>
        </div>
    )
}

export default Iniciar
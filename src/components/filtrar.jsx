function Filtrar({filtrar, setFiltrar, search, setSearch, setSort}){
    return(
        <>
        <h2 className="filtro">Digite aqui o nome para ser mais fácil de encontrar seu cãopanheiro</h2>
        <div className="filtrar">
            <input type="text" placeholder="Digite para pesquisar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
            />
            <select value={filtrar} onChange={(e)  => setFiltrar(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="Concluidas">Encontrados</option>
                <option value="Pendentes">Pendentes</option>
            </select>
            <button type="button" onClick={() => setSort('Crescente')}>A-Z</button>
            <button type="button" onClick={() => setSort('Decrescente')}>Z-A</button>
        </div>
        </>
    )
}

export default Filtrar;
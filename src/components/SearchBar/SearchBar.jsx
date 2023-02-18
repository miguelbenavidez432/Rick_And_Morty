const inline = { 
   flexDirection: "row"
}

export default function SearchBar({ onSearch }) {
   return (
      <div style={inline} >
      <input type='search' />
      <button onClick={onSearch}>Agregar</button>
      </div>
   );
}

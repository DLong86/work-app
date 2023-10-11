export default function Form({handleInput, nameInput, handleSubmit}) {
    return (
        <form className="flex flex-col items-center m-8 mb-4" onSubmit={handleSubmit} >
            <input type="text" className="text-gray-600 py-1 px-2 rounded-md capitalize shadow-md" value={nameInput} onChange={handleInput}  />
            <p className="mt-2 text-2xl text-gray-400">name: <span className="text-[#495057] uppercase">{nameInput}</span></p>
        </form>
    )
} 
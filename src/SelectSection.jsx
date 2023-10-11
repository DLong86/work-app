import Button from "./components/Button"

const SelectSection = ({onSelect, clearList}) => {
  return (
    <div className="flex gap-6 justify-between w-72">
        <Button text="Select 🤞" onClick={onSelect} />
        <Button text="Clear list" onClick={clearList} />
      </div>
  )
}

export default SelectSection
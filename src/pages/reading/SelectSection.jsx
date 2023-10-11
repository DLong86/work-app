import Button from "../../components/Button"

const SelectSection = ({onSelect, clearList, selectedNamesOrder, onModal}) => {
  return (
    <div className="flex gap-6 justify-between w-72">
        <Button text="Select" onClick={onSelect} />
        <Button text="Clear" onClick={clearList} />
        {selectedNamesOrder.length > 0 ?<Button text="Order" onClick={onModal} /> : null}
      </div>
  )
}

export default SelectSection
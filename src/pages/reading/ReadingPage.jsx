import { useState } from "react";
import Form from "./Form";
import Footer from "../../Footer";
import List from "./List";
// import Header from "./Header";
import Modal from "../../components/Modal";
import SelectSection from "./SelectSection";
// import MenuButton from "../../components/MenuButton";

// Move this to reading List component!!!!! This will be a route
function ReadingPage() {
  const [nameInput, setNameInput] = useState("")
  const [nameList, setNameList] = useState([])
  const [selectedName, setSelectedName] = useState('');
  const [selectedNamesOrder, setSelectedNamesOrder] = useState([]); 
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      if(nameInput !== "")
      setNameList([...nameList, nameInput])
      setNameInput("")
    }

  const handleInput = (e) => {
    setNameInput(e.target.value)
  }

  const handleSelect = () => {
    if (nameList.length > 0) {
      const randomIndex = Math.floor(Math.random() * nameList.length);
      const selected = nameList[randomIndex];
      setSelectedName(selected);
      setSelectedNamesOrder([...selectedNamesOrder, selected]);
      setNameList(nameList.filter((name) => name !== selected));
    }
  };
  
  const clearList = () => {
    const confirmed = window.confirm("Are you sure you want to clear reading list?")
    if(confirmed) {
      setNameList([])
      setSelectedName("")
      setSelectedNamesOrder([])
    }
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={`w-full h-screen relative  flex flex-col items-center ${showModal ? 'modal-open' : ''}`} >
      {/* <Header onModal={handleModal} selectedNamesOrder={selectedNamesOrder} /> */}
      {/* {selectedNamesOrder.length > 0 ? <MenuButton onClick={handleModal}>Order</MenuButton> : null} */}
      <Form nameInput={nameInput} handleInput={handleInput} handleSubmit={handleSubmit} />
      <SelectSection onSelect={handleSelect} clearList={clearList} onModal={handleModal} selectedNamesOrder={selectedNamesOrder} />
      <List nameList={nameList} selectedName={selectedName} />
      {showModal && <div className="modal-background" onClick={handleModal}>
        <Modal selectedNamesOrder={selectedNamesOrder} nameList={nameList} onModal={handleModal} />
      </div>}
      <Footer />
    </div>
  );
}

export default ReadingPage;

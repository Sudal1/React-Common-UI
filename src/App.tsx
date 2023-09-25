import { useState } from 'react'
import './App.css'
import Radio from 'stories/inputs/Radio'
import RadioGroup from 'stories/inputs/RadioGroup'

function App() {
  const [selectedItems2, setSelectedItems2] = useState<string | number>('')

  return (
    <>
      <RadioGroup selectedValue={selectedItems2} onChange={setSelectedItems2}>
        <Radio value="radio1">라디오 1</Radio>
        <Radio value="radio2">라디오 2</Radio>
        <Radio value="radio3">라디오 3</Radio>
      </RadioGroup>
      <p>{`Check된 Items: ${selectedItems2}`}</p>
    </>
  )
}

export default App

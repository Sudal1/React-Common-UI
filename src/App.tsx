import { useState } from 'react'
import './App.css'
import CheckboxGroup2 from 'stories/inputs/CheckboxGroup2'
import Checkbox from 'stories/inputs/Checkbox'
import Radio from 'stories/inputs/Radio'
import RadioGroup from 'stories/inputs/RadioGroup'

function App() {
  const items = [
    {
      value: 'children1',
      children: 'children1',
      disabled: false,
    },
    {
      value: 'children2',
      children: 'children2',
      disabled: false,
    },
    {
      value: 'children3',
      children: 'children3',
      disabled: false,
    },
  ]

  const [selectedItems, setSelectedItems] = useState<(string | number)[]>([])
  const [selectedItems2, setSelectedItems2] = useState<string | number>()

  return (
    <>
      <CheckboxGroup2 selectedValues={selectedItems} onChange={setSelectedItems}>
        <Checkbox value="checkbox1">체크박스 1</Checkbox>
        <Checkbox value="checkbox2">체크박스 2</Checkbox>
        <Checkbox value="checkbox3">체크박스 3</Checkbox>
      </CheckboxGroup2>
      <p>{`Check된 Items: ${selectedItems.join(' ')}`}</p>

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

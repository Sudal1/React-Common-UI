import { useState } from 'react'
import Global from './css/reset'
import './App.css'

import { type Item } from 'stories/inputs/CheckboxGroup'
import CheckboxGroup from 'stories/inputs/CheckboxGroup'

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

  const [selectedItems, setSelectedItems] = useState<Item[]>([])

  return (
    <>
      <Global />
      <CheckboxGroup
        items={items}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
      />
      <p>{`Check된 Items: ${selectedItems.map(({ value }) => value).join(' ')}`}</p>
    </>
  )
}

export default App

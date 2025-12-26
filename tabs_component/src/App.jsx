import { useState } from 'react'
import './App.css'
import Tabs from './Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      content: <p>This is the profile tab</p>
    },
    {
      id: 'settings',
      label: 'Settings',
      content: <p>This is the settings tab</p>
    },
    {
      id: 'help',
      label: 'Help',
      content: <p>This is the help tab</p>
    }
  ]

  return (
    <>
      <div className="container">
      <h2>Tabs Component</h2>

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    </div>
    </>
  )
}

export default App

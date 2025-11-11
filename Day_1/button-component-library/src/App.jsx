import React from 'react'
import ButtonComponent from './ButtonComponent'

const App = () => {
  return (
    <div>
   
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 p-6">
      <ButtonComponent variant="primary">Primary Button</ButtonComponent>
      <ButtonComponent variant="secondary">Secondary Button</ButtonComponent>
      <ButtonComponent variant="danger">Danger Button</ButtonComponent>
      <ButtonComponent variant="success">Success Button</ButtonComponent>
      <ButtonComponent variant="primary" size="lg">Large Button</ButtonComponent>
      <ButtonComponent variant="secondary" size="sm">Small Button</ButtonComponent>
    </div>
    </div>
  )
}

export default App
import React from 'react'
import { UserCard } from 'react-ui-cards'

import { ContactWrapper } from './Contact.styled.js'
import { ContactData } from './ContactData'

const Contact = () => {
  const generateContactCards = () => {
    return ContactData.map((value, index) => (
      <UserCard
        key={index}
        href={value.href}
        name={value.name}
        header={value.header}
        avatar={value.avatar}
        positionName={value.positon}
      />
    ))
  }

  return (
    <ContactWrapper>
      { generateContactCards() }
    </ContactWrapper>
  )
}

export default Contact

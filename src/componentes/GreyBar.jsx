import React from 'react'
import { Card, Button,  useTheme} from '@aws-amplify/ui-react';
export const GreyBar = () => {
    const { tokens } = useTheme();
  return (
    <Card
    columnStart="1"
    columnEnd="2"
     backgroundColor={tokens.colors.background.quaternary}

  >
    Nav
  </Card>
  )
}

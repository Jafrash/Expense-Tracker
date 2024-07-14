import React from 'react'
import {Card,CardHeader,Grid,CardContent,Typography,Divider} from '@material-ui/core';

function main() {
  return (
    <div>
      <Card className={Classes.root}>
      <CardHeader title="Expense Tracker" subheader ="Powered by Speechly"/>
      </Card>
    </div>
  )
}

export default main
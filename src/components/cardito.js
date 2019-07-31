import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
})

export default function Cardito(props) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>

        <Typography className={classes.title} variant="h1" component="h1">
          {props.title}
        </Typography>
        < br/>
        <Typography variant="body2" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/web-app-development' size="small">Learn More about my development</Link>
      </CardActions>
    </Card>
  )
}
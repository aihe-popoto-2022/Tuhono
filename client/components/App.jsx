import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  about: {
    padding: theme.spacing(3),
  },
  aboutHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
}))

function App() {
  const classes = useStyles()

  const portfolioData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of Project 1',
      image: 'picture goes here',
      link: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is a description of Project 2',
      image: 'picture goes her',
      link: '#',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is a description of Project 3',
      image: 'picture goes here',
      link: '#',
    },
  ]

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Typography variant="h4" gutterBottom>
          About the Author
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          lectus in mauris molestie, at dictum nisi rhoncus. Nullam tincidunt
          nisl et ornare congue.
        </Typography>
      </div>
      <Grid container spacing={3}>
        {portfolioData.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default App
